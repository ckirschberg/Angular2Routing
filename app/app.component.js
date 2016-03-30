System.register(['angular2/core', "angular2/router", './internships/internships-list.component', './internships/newEditInternships.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, internships_list_component_1, newEditInternships_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (internships_list_component_1_1) {
                internships_list_component_1 = internships_list_component_1_1;
            },
            function (newEditInternships_component_1_1) {
                newEditInternships_component_1 = newEditInternships_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <header>\n        <nav>\n            <a [routerLink]=\"['Internships']\">Internships</a>\n            <a [routerLink]=\"['NewEditInternship', { internship: null} ]\">New Internships</a>\n        </nav>\n    </header>\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [internships_list_component_1.InternshipsListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/internships', name: "Internships", component: internships_list_component_1.InternshipsListComponent, useAsDefault: true },
                        { path: '/neweditinternship/:internship', name: "NewEditInternship", component: newEditInternships_component_1.NewEditInternshipsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxVEFVVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxxREFBd0IsRUFBRSwwQkFBaUIsQ0FBQztxQkFFNUQsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNwRyxFQUFDLElBQUksRUFBRSxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLDBEQUEyQixFQUFDO3FCQUM5RyxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7SW50ZXJuc2hpcHNMaXN0Q29tcG9uZW50fSBmcm9tICcuL2ludGVybnNoaXBzL2ludGVybnNoaXBzLWxpc3QuY29tcG9uZW50J1xuaW1wb3J0IHtOZXdFZGl0SW50ZXJuc2hpcHNDb21wb25lbnR9IGZyb20gJy4vaW50ZXJuc2hpcHMvbmV3RWRpdEludGVybnNoaXBzLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnSW50ZXJuc2hpcHMnXVwiPkludGVybnNoaXBzPC9hPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydOZXdFZGl0SW50ZXJuc2hpcCcsIHsgaW50ZXJuc2hpcDogbnVsbH0gXVwiPk5ldyBJbnRlcm5zaGlwczwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0ludGVybnNoaXBzTGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG5cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvaW50ZXJuc2hpcHMnLCBuYW1lOiBcIkludGVybnNoaXBzXCIsIGNvbXBvbmVudDogSW50ZXJuc2hpcHNMaXN0Q29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHtwYXRoOiAnL25ld2VkaXRpbnRlcm5zaGlwLzppbnRlcm5zaGlwJywgbmFtZTogXCJOZXdFZGl0SW50ZXJuc2hpcFwiLCBjb21wb25lbnQ6IE5ld0VkaXRJbnRlcm5zaGlwc0NvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
