import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  ` <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/home']">Home</a></li>
    <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/page']">my todo</a></li>
  </ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>
`
})
export class AppComponent {
  pageTitle = 'welcome to my todo';
}
