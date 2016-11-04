import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  template:`
    <h1>{{title}}</h1>
    <nav>
      <a routerLink='/dashboard' routerLinkActive="active">Dashboard</a>
      <a routerLink='/heroes' routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

//Every Angular application has at least one component: the root component, named AppComponent here.
//A component controls a portion of the screen—a view—through its associated template.
export class AppComponent {
  title = 'Tour of Heroes';
}
