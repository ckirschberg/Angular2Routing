import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {SubView1} from "./SubView1";
import {SubView2} from "./SubView2";

@Component({
    selector: "internships-list",
    template: `
    <ul>
        <li *ngFor="#internship of internships" (click)="onSelect(internship)">
        {{internship.initials}} {{internship.date}}
        </li>
    </ul>
    <button [routerLink]="['SubView1']">Go to sub view 1</button>
    <button [routerLink]="['SubView2']">Go to sub view 2</button>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:"subview1", name: "SubView1", component: SubView1 },
    {path:"subview2", name: "SubView2", component: SubView2 }
])
export class InternshipsListComponent {

    public internships = [
        {initials: 'chrk', date: new Date()},
        {initials: 'asbc', date: new Date()},
        {initials: 'cahl', date: new Date()},
    ];

    constructor(private _router: Router) {
    }

    onSelect(internship): void {
        this._router.navigate(['NewInternship', { internship: internship }]);
    }
}
