import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {InternshipsListComponent} from './internships/internships-list.component'
import {NewEditInternshipsComponent} from './internships/newEditInternships.component'

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav>
            <a [routerLink]="['Internships']">Internships</a>
            <a [routerLink]="['NewInternships']">New Internships</a>
        </nav>
    </header>
    <div class="main">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [InternshipsListComponent, ROUTER_DIRECTIVES]

})

@RouteConfig([
    {path: '/internships', name: "Internships", component: InternshipsListComponent, useAsDefault: true},
    {path: '/newinternship', name: "NewInternships", component: NewEditInternshipsComponent}
])
export class AppComponent {

}