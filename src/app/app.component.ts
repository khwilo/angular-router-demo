import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2><a [routerLink]="'/contacts'">Contacts</a></h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router-demo';
}
