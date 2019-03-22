import { Component } from '@angular/core';

import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentUrl: string;
  constructor(private router: Router, private route: ActivatedRoute, private _service: AuthenticationService) {
    router.events.subscribe((response: NavigationEnd) => {
      this.currentUrl = response.url;
      console.log(this.currentUrl);
      if (this.currentUrl == "/") {
        if (document.cookie) {
          var ar = document.cookie.split(";");
          if (ar[ar.length - 1]) {
            var d = ar[ar.length - 1].split("=");
            if (d) {
              if (d[0].trim() == this._service.tokenKey.trim()) {
                if (d[1]) {
                  var details = JSON.parse(d[1]);
                  if (details) {
                    this._service.navigateBasedOnRole(details.access_token.role);
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
