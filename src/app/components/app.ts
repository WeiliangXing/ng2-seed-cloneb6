import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
import {NameList} from '../../shared/services/name_list';
import {NewComponentCmp} from '../../new-component/new-component';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  moduleId: module.id,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, name: 'Home' },
  { path: '/about', component: AboutCmp, name: 'About' },
  { path: '/newCmp', component: NewComponentCmp, name: 'New'}
])
export class AppCmp {}

// import {Component} from 'angular2/core';
// import {
//   RouteConfig,
//   ROUTER_DIRECTIVES,
//   RouterOutlet
// } from 'angular2/router';
//
// import {HomeCmp} from '../../home/components/home';
// import {AboutCmp} from '../../about/components/about';
// import {NameList} from '../../shared/services/name_list';
//
// @Component({
//   selector: 'app',
//   viewProviders: [NameList],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css'],
//   directives: [ROUTER_DIRECTIVES]
// })
//
// @RouteConfig([
//   { path: '/', component: HomeCmp, name: 'Home' },
//   { path: '/about', component: AboutCmp, name: 'About' }
// ])
// export class AppCmp {}
