import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

//const MENUITEMS = [
//  {
//    label: 'Navigation',
//    main: [
//      {
//        state: 'dashboard',
//        short_label: 'D',
//        name: 'Dashboard',
//        type: 'link',
//        icon: 'mdi mdi-gauge',
//      },
//      {
//        state: 'events',
//        short_label: 'N',
//        name: 'Events',
//        type: 'sub',
//        icon: 'mdi mdi-format-list-checks',
//        children: [
//          {
//            state: 'public',
//            name: 'Public'
//          },
//          {
//            state: 'private',
//            name: 'Private',
//          },
//        ]
//      },
//      {
//        state: 'campaigns',
//        short_label: 'C',
//        name: 'Campaigns',
//        type: 'link',
//        icon: 'mdi mdi-certificate',
//      },
//      {
//        state: 'volunteers',
//        short_label: 'C',
//        name: 'Volunteers',
//        type: 'link',
//        icon: 'mdi mdi-account-group',
//      },
//      //{
//      //  state: 'users',
//      //  short_label: 'C',
//      //  name: 'Teams',
//      //  type: 'link',
//      //  icon: 'icon-home',
//      //},
//      //{
//      //  state: 'groups',
//      //  short_label: 'C',
//      //  name: 'Groups',
//      //  type: 'link',
//      //  icon: 'mdi mdi-account-multiple',
//      //},
//      {
//        state: 'feedback',
//        short_label: 'C',
//        name: 'Feedback',
//        type: 'link',
//        icon: 'mdi mdi-emoticon',
//      },
//      {
//        state: 'media',
//        short_label: 'C',
//        name: 'Media',
//        type: 'link',
//        icon: 'mdi mdi-file-image',
//      },
//      {
//        state: 'newsFeed',
//        short_label: 'C',
//        name: 'Wall Posts',
//        type: 'link',
//        icon: 'mdi mdi-newspaper',
//      },
//      {
//        state: 'pushNotifications',
//        short_label: 'C',
//        name: 'Push Notifications',
//        type: 'link',
//        icon: 'mdi mdi-cellphone-wireless',
//      },
//      {
//        state: 'reports',
//        short_label: 'C',
//        name: 'Reports',
//        type: 'link',
//        icon: 'mdi mdi-file-chart',
//      },
//      //{
//      //  state: 'survey',
//      //  short_label: 'C',
//      //  name: 'Survey',
//      //  type: 'link',
//      //  icon: 'icon-home',
//      //},


//      // {
//      //   state: 'adminstration',
//      //   short_label: 'C',
//      //   name: 'Administration',
//      //   type: 'link',
//      //   icon: 'icon-home',
//      // },
//      // {
//      //  state: 'users',
//      //  short_label: 'C',
//      //  name: 'Teams',
//      //  type: 'link',
//      //  icon: 'icon-home',
//      // },
//      //{
//      //  state: 'Companies',
//      //  short_label: 'C',
//      //  name: 'Companies',
//      //  type: 'link',
//      //  icon: 'icon-home',
//      //},
//      //{
//      //  state: 'ngo',
//      //  short_label: 'C',
//      //  name: 'NGOs',
//      //  type: 'link',
//      //  icon: 'icon-home',
//      //},
//      {
//        state: 'masters',
//        short_label: 'N',
//        name: 'Masters',
//        type: 'sub',
//        icon: 'icon-layout-cta-right',
//        children: [
//          {
//            state: 'Company',
//            name: 'Companies'
//          },
//          {
//            state: 'Country',
//            name: 'Location Mapping',
//          },
//          {
//            state: 'NGO',
//            name: 'NGOs',
//          },
//        ]
//      },
//    ]
//  },
//  {
//    label: 'account',
//    main: [
//      {
//        state: 'profile',
//        short_label: 'B',
//        name: 'Profile',
//        type: 'link',
//        icon: 'mdi mdi-account-circle',
//      },
//      {
//        state: 'logout',
//        short_label: 'B',
//        name: 'Logout',
//        type: 'link',
//        icon: 'mdi mdi-logout',
//      }
//    ]
//  }
//];


const ADMINMENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'mdi mdi-gauge',
      },
      {
        state: 'events',
        short_label: 'N',
        name: 'Events',
        type: 'sub',
        icon: 'mdi mdi-format-list-checks',
        children: [
          {
            state: 'public',
            name: 'Public'
          },
          {
            state: 'private',
            name: 'Private',
          },
        ]
      },
      {
        state: 'campaigns',
        short_label: 'C',
        name: 'Campaigns',
        type: 'link',
        icon: 'mdi mdi-certificate',
      },
      {
        state: 'volunteers',
        short_label: 'C',
        name: 'Volunteers',
        type: 'link',
        icon: 'mdi mdi-account-group',
      },
      {
        state: 'groups',
        short_label: 'C',
        name: 'Groups',
        type: 'link',
        icon: 'mdi mdi-account-multiple',
      },
      {
        state: 'feedback',
        short_label: 'C',
        name: 'Feedback',
        type: 'link',
        icon: 'mdi mdi-emoticon',
      },
      {
        state: 'media',
        short_label: 'C',
        name: 'Media',
        type: 'link',
        icon: 'mdi mdi-file-image',
      },
      {
        state: 'newsFeed',
        short_label: 'C',
        name: 'Wall Post',
        type: 'link',
        icon: 'mdi mdi-newspaper',
      },
      {
        state: 'pushNotifications',
        short_label: 'C',
        name: 'Push Notifications',
        type: 'link',
        icon: 'mdi mdi-cellphone-wireless',
      },
      {
        state: 'reports',
        short_label: 'C',
        name: 'Reports',
        type: 'link',
        icon: 'mdi mdi-file-chart',
      },
      //{
      //  state: 'survey',
      //  short_label: 'C',
      //  name: 'Survey',
      //  type: 'link',
      //  icon: 'icon-home',
      //},


      //{
      //  state: 'adminstration',
      //  short_label: 'C',
      //  name: 'Administration',
      //  type: 'link',
      //  icon: 'icon-home',
      //},
      //{
      //  state: 'users',
      //  short_label: 'C',
      //  name: 'Teams',
      //  type: 'link',
      //  icon: 'icon-home',
      //},
      //{
      //  state: 'Companies',
      //  short_label: 'C',
      //  name: 'Companies',
      //  type: 'link',
      //  icon: 'icon-home',
      //},
      //{
      //  state: 'ngo',
      //  short_label: 'C',
      //  name: 'NGOs',
      //  type: 'link',
      //  icon: 'icon-home',
      //},
      //{
      //  state: 'masters',
      //  short_label: 'N',
      //  name: 'Masters',
      //  type: 'sub',
      //  icon: 'icon-layout-cta-right',
      //  children: [
      //    {
      //      state: 'Company',
      //      name: 'Companies'
      //    },
      //    {
      //      state: 'Country',
      //      name: 'Countries',
      //    },
      //    {
      //      state: 'NGO',
      //      name: 'NGOs',
      //    },
      //  ]
      //},
    ]
  },
  {
    label: 'account',
    main: [
      {
        state: 'profile',
        short_label: 'B',
        name: 'Profile',
        type: 'link',
        icon: 'mdi mdi-account-circle',
      },
      {
        state: 'logout',
        short_label: 'B',
        name: 'Logout',
        type: 'link',
        icon: 'mdi mdi-logout',
      }
    ]
  }
];

/*
const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'icon-home',
        //children: [
        //  {
        //    state: 'default',
        //    name: 'Default'
        //  },
        //  {
        //    state: 'ecommerce',
        //    name: 'Ecommerce'
        //  },
        //  {
        //    state: 'analytics',
        //    name: 'Analytics',
        //    badge: [
        //      {
        //        type: 'info',
        //        value: 'NEW'
        //      }
        //    ]
        //  }
        //]
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Events',
        type: 'sub',
        icon: 'icon-layout-cta-right',
         children: [
          {
            state: 'public',
            name: 'Public'
          },
          {
            state: 'private',
            name: 'Private'
           },
          ]
      },
      {
        state: 'widget',
        short_label: 'W',
        name: 'Widget',
        type: 'sub',
        icon: 'icon-view-grid',
        badge: [
          {
            type: 'danger',
            value: '100+'
          }
        ],
        children: [
          {
            state: 'statistic',
            name: 'Statistic'
          },
          {
            state: 'data',
            name: 'Data'
          },
          {
            state: 'chart',
            name: 'Chart'
          }
        ]
      }
    ],
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'basic',
        short_label: 'B',
        name: 'Basic',
        type: 'sub',
        icon: 'icon-layout-grid2-alt',
        children: [
          {
            state: 'alert',
            name: 'Alert'
          },
          {
            state: 'breadcrumb',
            name: 'Breadcrumbs'
          },
          {
            state: 'button',
            name: 'Button'
          },
          {
            state: 'box-shadow',
            name: 'Box-Shadow'
          },
          {
            state: 'accordion',
            name: 'Accordion'
          },
          {
            state: 'generic-class',
            name: 'Generic Class'
          },
          {
            state: 'tabs',
            name: 'Tabs'
          },
          {
            state: 'color',
            name: 'Color'
          },
          {
            state: 'label-badge',
            name: 'Label Badge'
          },
          {
            state: 'progressbar',
            name: 'Progressbar'
          },
          {
            state: 'pre-loader',
            name: 'Pre-Loader'
          },
          {
            state: 'list',
            name: 'List'
          },
          {
            state: 'tooltip',
            name: 'Tooltip & Popover'
          },
          {
            state: 'typography',
            name: 'Typography'
          },
          {
            state: 'other',
            name: 'Other'
          },
        ]
      },
      {
        state: 'advance',
        short_label: 'A',
        name: 'Advance',
        type: 'sub',
        icon: 'icon-crown',
        children: [
          {
            state: 'modal',
            name: 'Modal'
          },
          {
            state: 'notifications',
            name: 'Notifications'
          },
          {
            state: 'notify',
            name: 'PNOTIFY',
            badge: [
              {
                type: 'info',
                value: 'New'
              }
            ]
          },
          {
            state: 'rating',
            name: 'Rating'
          },
          {
            state: 'slider',
            name: 'Slider'
          }
        ]
      },
      {
        state: 'animations',
        short_label: 'A',
        name: 'Animations',
        type: 'link',
        icon: 'icon-reload rotate-refresh'
      }
    ]
  },
  {
    label: 'Forms',
    main: [
      {
        state: 'forms',
        short_label: 'F',
        name: 'Form',
        type: 'sub',
        icon: 'icon-layers',
        children: [
          {
            state: 'basic',
            name: 'Components'
          }, {
            state: 'add-on',
            name: 'Add-On'
          }, {
            state: 'advance',
            name: 'Advance'
          }, {
            state: 'validation',
            name: 'Validation'
          }
        ]
      },
      {
        state: 'picker',
        short_label: 'P',
        main_state: 'forms',
        name: 'Form Picker',
        type: 'link',
        icon: 'icon-pencil-alt',
        badge: [
          {
            type: 'warning',
            value: 'New'
          }
        ]
      },
      {
        state: 'select',
        short_label: 'S',
        main_state: 'forms',
        name: 'Form Select',
        type: 'link',
        icon: 'icon-shortcode'
      }
    ]
  },
  {
    label: 'Tables',
    main: [
      {
        state: 'bootstrap-table',
        short_label: 'B',
        name: 'Bootstrap Table',
        type: 'sub',
        icon: 'icon-receipt',
        children: [
          {
            state: 'basic',
            name: 'Basic Table'
          }, {
            state: 'sizing',
            name: 'Sizing Table'
          }, {
            state: 'border',
            name: 'Border Table'
          }, {
            state: 'styling',
            name: 'Styling Table'
          }
        ]
      },
      {
        state: 'data-table',
        short_label: 'D',
        name: 'Data Table',
        type: 'sub',
        icon: 'icon-widgetized',
        children: [
          {
            state: 'basic',
            name: 'Basic Table'
          }, {
            state: 'editable',
            name: 'Editable'
          }, {
            state: 'row-details',
            name: 'Row Details Table'
          }, {
            state: 'paging',
            name: 'Paging Table'
          }, {
            state: 'selection',
            name: 'Selection Table'
          }
        ]
      }
    ]
  },
  {
    label: 'Chart And Map',
    main: [
      {
        state: 'charts',
        short_label: 'C',
        name: 'Charts',
        type: 'sub',
        icon: 'icon-bar-chart-alt',
        children: [
          {
            state: 'google',
            name: 'Google'
          }, {
            state: 'chart-js',
            name: 'ChartJS'
          }, {
            state: 'radial',
            name: 'Radial'
          }, {
            state: 'c3-js',
            name: 'C3 JS'
          }
        ]
      },
      {
        state: 'map',
        short_label: 'M',
        name: 'Maps',
        type: 'sub',
        icon: 'icon-map-alt',
        children: [
          {
            state: 'google',
            name: 'Google'
          }
        ]
      },
     
    ]
  },
  {
    label: 'Pages',
    main: [
      {
        state: 'auth',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'icon-id-badge',
        children: [
          {
            state: 'login',
            type: 'sub',
            name: 'Login Pages',
            children: [
              {
                state: 'simple',
                name: 'Simple',
                target: true
              }, {
                state: 'header-footer',
                name: 'Header & Footer',
                target: true
              }, {
                state: 'social',
                name: 'Social Icon',
                target: true
              }, {
                state: 'social-header-footer',
                name: 'Social Header & Footer',
                target: true
              }
            ]
          }, {
            state: 'registration',
            type: 'sub',
            name: 'Registration Pages',
            children: [
              {
                state: 'simple',
                name: 'Simple',
                target: true
              }, {
                state: 'header-footer',
                name: 'Header & Footer',
                target: true
              }, {
                state: 'social',
                name: 'Social',
                target: true
              }, {
                state: 'social-header-footer',
                name: 'Social Header & Footer',
                target: true
              }
            ]
          },
          {
            state: 'forgot',
            name: 'Forgot Password',
            target: true
          },
          {
            state: 'lock-screen',
            name: 'Lock Screen',
            target: true
          },
        ]
      },
      {
        state: 'maintenance',
        short_label: 'A',
        name: 'Maintenance',
        type: 'sub',
        icon: 'icon-settings',
        children: [
          {
            state: 'error',
            name: 'Error'
          },
          {
            state: 'coming-soon',
            name: 'Coming Soon'
          },
          {
            state: 'offline-ui',
            name: 'Offline UI',
            target: true
          }
        ]
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'sub',
        icon: 'icon-user',
        children: [
          {
            state: 'profile',
            name: 'User Profile'
          }, {
            state: 'card',
            name: 'User Card'
          }
        ]
      }
    ]
  },
  {
    label: 'App',
    main: [
      {
        state: 'task',
        short_label: 'T',
        name: 'Task',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: 'list',
            name: 'Task List'
          }, {
            state: 'board',
            name: 'Task Board'
          }, {
            state: 'details',
            name: 'Task Details'
          }, {
            state: 'issue',
            name: 'Issue List'
          }
        ]
      }
    ]
  },
  {
    label: 'Extension',
    main: [
      {
        state: 'invoice',
        short_label: 'I',
        name: 'Invoice',
        type: 'sub',
        icon: 'icon-layout-media-right',
        children: [
          {
            state: 'basic',
            name: 'Invoice'
          }, {
            state: 'summary',
            name: 'Invoice Summary'
          }, {
            state: 'list',
            name: 'Invoice List'
          }
        ]
      },
      {
        state: 'file-upload-ui',
        short_label: 'F',
        name: 'File Upload',
        type: 'link',
        icon: 'icon-cloud-up'
      },
    
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        short_label: 'M',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'icon-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      },
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Simple Page',
        type: 'link',
        icon: 'icon-layout-sidebar-left'
      }
    ]
  },
  //{
  //  label: 'Support',
  //  main: [
  //    {
  //      state: 'documentation',
  //      short_label: 'D',
  //      name: 'Documentation',
  //      external: 'http://html.codedthemes.com/guru-able/doc-angular-4',
  //      type: 'external',
  //      icon: 'icon-file',
  //      target: true
  //    },
  //    {
  //      state: 'submit-issue',
  //      short_label: 'S',
  //      external: 'https://codedthemes.com/submit-ticket/',
  //      name: 'Submit Issue',
  //      type: 'external',
  //      icon: 'icon-layout-list-post',
  //      target: true
  //    }
  //  ]
  //}
];*/

@Injectable()
export class MenuItems {
  roleId: number;
  constructor(private authService: AuthenticationService) {
    var details = this.authService.getToken();
    this.roleId = details.access_token.role;
  }
  getAll(): Menu[] {
    return ADMINMENUITEMS;
  }
}
