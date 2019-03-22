import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Broadcast } from './broadcast.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService {

    constructor(private authentication: AuthenticationService, private router: Router, private broadcast: Broadcast) { }

    canActivate(route: ActivatedRouteSnapshot): boolean | Promise<boolean> {
        let token = this.authentication.getToken();
        let accessToken = this.authentication.getAccessToken();
        const expectedRole = route.data.expectedRole;

        if (!token || !this.authentication.isAuthenticated() || accessToken.role !== expectedRole) {
            this.redirectToLoginPage();
            return false;
        }
        this.broadcast.broadcast('is-authenticated', this.authentication.isAuthenticated());
        return true;
    }

    redirectToLoginPage() {
        this.router.navigate(['/login']);
    }
}
