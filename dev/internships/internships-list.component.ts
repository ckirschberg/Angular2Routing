import {Component} from 'angular2/core';

@Component({
    selector: "internships-list",
    template: `
    <ul>
        <li *ngFor="#internship of internships" (click)="onSelect(internship)">
        {{internship.initials}} {{internship.date}}
        </li>
    </ul>
    `,
})
export class InternshipsListComponent {

    public internships = [
        {initials: 'chrk', date: new Date()},
        {initials: 'asbc', date: new Date()},
        {initials: 'cahl', date: new Date()},
    ]

}
