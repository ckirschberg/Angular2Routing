import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
    selector: "new-edit-internship",
    template: `
    Hi this is the new/edit component
    `,
})
export class NewEditInternshipsComponent {
    internship: {};

    constructor(private params: RouteParams) {
        this.internship = params.get("internship");
        console.log(this.internship);
    }
}