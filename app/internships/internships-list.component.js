System.register(['angular2/core', "angular2/router", "./SubView1", "./SubView2"], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, router_3, SubView1_1, SubView2_1;
    var InternshipsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (SubView1_1_1) {
                SubView1_1 = SubView1_1_1;
            },
            function (SubView2_1_1) {
                SubView2_1 = SubView2_1_1;
            }],
        execute: function() {
            InternshipsListComponent = (function () {
                function InternshipsListComponent(_router) {
                    this._router = _router;
                    this.internships = [
                        { initials: 'chrk', date: new Date() },
                        { initials: 'asbc', date: new Date() },
                        { initials: 'cahl', date: new Date() },
                    ];
                }
                InternshipsListComponent.prototype.onSelect = function (internship) {
                    this._router.navigate(['NewInternship', { internship: internship }]);
                };
                InternshipsListComponent = __decorate([
                    core_1.Component({
                        selector: "internships-list",
                        template: "\n    <ul>\n        <li *ngFor=\"#internship of internships\" (click)=\"onSelect(internship)\">\n        {{internship.initials}} {{internship.date}}\n        </li>\n    </ul>\n    <button [routerLink]=\"['SubView1']\">Go to sub view 1</button>\n    <button [routerLink]=\"['SubView2']\">Go to sub view 2</button>\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_3.RouteConfig([
                        { path: "subview1", name: "SubView1", component: SubView1_1.SubView1 },
                        { path: "subview2", name: "SubView2", component: SubView2_1.SubView2 }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], InternshipsListComponent);
                return InternshipsListComponent;
            }());
            exports_1("InternshipsListComponent", InternshipsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybnNoaXBzL2ludGVybnNoaXBzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBUUksa0NBQW9CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFONUIsZ0JBQVcsR0FBRzt3QkFDakIsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFDO3dCQUNwQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUM7d0JBQ3BDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBQztxQkFDdkMsQ0FBQztnQkFHRixDQUFDO2dCQUVELDJDQUFRLEdBQVIsVUFBUyxVQUFVO29CQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkEvQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUscVdBU1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsbUJBQVEsRUFBRTt3QkFDekQsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFRLEVBQUU7cUJBQzVELENBQUM7OzRDQUFBO2dCQWVGLCtCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCwrREFjQyxDQUFBIiwiZmlsZSI6ImludGVybnNoaXBzL2ludGVybnNoaXBzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7U3ViVmlldzF9IGZyb20gXCIuL1N1YlZpZXcxXCI7XG5pbXBvcnQge1N1YlZpZXcyfSBmcm9tIFwiLi9TdWJWaWV3MlwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJpbnRlcm5zaGlwcy1saXN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8dWw+XG4gICAgICAgIDxsaSAqbmdGb3I9XCIjaW50ZXJuc2hpcCBvZiBpbnRlcm5zaGlwc1wiIChjbGljayk9XCJvblNlbGVjdChpbnRlcm5zaGlwKVwiPlxuICAgICAgICB7e2ludGVybnNoaXAuaW5pdGlhbHN9fSB7e2ludGVybnNoaXAuZGF0ZX19XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8YnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnU3ViVmlldzEnXVwiPkdvIHRvIHN1YiB2aWV3IDE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnU3ViVmlldzInXVwiPkdvIHRvIHN1YiB2aWV3IDI8L2J1dHRvbj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDpcInN1YnZpZXcxXCIsIG5hbWU6IFwiU3ViVmlldzFcIiwgY29tcG9uZW50OiBTdWJWaWV3MSB9LFxuICAgIHtwYXRoOlwic3VidmlldzJcIiwgbmFtZTogXCJTdWJWaWV3MlwiLCBjb21wb25lbnQ6IFN1YlZpZXcyIH1cbl0pXG5leHBvcnQgY2xhc3MgSW50ZXJuc2hpcHNMaXN0Q29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBpbnRlcm5zaGlwcyA9IFtcbiAgICAgICAge2luaXRpYWxzOiAnY2hyaycsIGRhdGU6IG5ldyBEYXRlKCl9LFxuICAgICAgICB7aW5pdGlhbHM6ICdhc2JjJywgZGF0ZTogbmV3IERhdGUoKX0sXG4gICAgICAgIHtpbml0aWFsczogJ2NhaGwnLCBkYXRlOiBuZXcgRGF0ZSgpfSxcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBvblNlbGVjdChpbnRlcm5zaGlwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ05ld0ludGVybnNoaXAnLCB7IGludGVybnNoaXA6IGludGVybnNoaXAgfV0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
