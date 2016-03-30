System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var InternshipsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        template: "\n    <ul>\n        <li *ngFor=\"#internship of internships\" (click)=\"onSelect(internship)\">\n        {{internship.initials}} {{internship.date}}\n        </li>\n    </ul>\n    ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], InternshipsListComponent);
                return InternshipsListComponent;
            }());
            exports_1("InternshipsListComponent", InternshipsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybnNoaXBzL2ludGVybnNoaXBzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBUUksa0NBQW9CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFONUIsZ0JBQVcsR0FBRzt3QkFDakIsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFDO3dCQUNwQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUM7d0JBQ3BDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBQztxQkFDdkMsQ0FBQztnQkFHRixDQUFDO2dCQUVELDJDQUFRLEdBQVIsVUFBUyxVQUFVO29CQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkF2Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsc0xBTVQ7cUJBQ0osQ0FBQzs7NENBQUE7Z0JBZUYsK0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELCtEQWNDLENBQUEiLCJmaWxlIjoiaW50ZXJuc2hpcHMvaW50ZXJuc2hpcHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJpbnRlcm5zaGlwcy1saXN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8dWw+XG4gICAgICAgIDxsaSAqbmdGb3I9XCIjaW50ZXJuc2hpcCBvZiBpbnRlcm5zaGlwc1wiIChjbGljayk9XCJvblNlbGVjdChpbnRlcm5zaGlwKVwiPlxuICAgICAgICB7e2ludGVybnNoaXAuaW5pdGlhbHN9fSB7e2ludGVybnNoaXAuZGF0ZX19XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcm5zaGlwc0xpc3RDb21wb25lbnQge1xuXG4gICAgcHVibGljIGludGVybnNoaXBzID0gW1xuICAgICAgICB7aW5pdGlhbHM6ICdjaHJrJywgZGF0ZTogbmV3IERhdGUoKX0sXG4gICAgICAgIHtpbml0aWFsczogJ2FzYmMnLCBkYXRlOiBuZXcgRGF0ZSgpfSxcbiAgICAgICAge2luaXRpYWxzOiAnY2FobCcsIGRhdGU6IG5ldyBEYXRlKCl9LFxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG9uU2VsZWN0KGludGVybnNoaXApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3SW50ZXJuc2hpcCcsIHsgaW50ZXJuc2hpcDogaW50ZXJuc2hpcCB9XSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
