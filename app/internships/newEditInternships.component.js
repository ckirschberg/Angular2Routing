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
    var NewEditInternshipsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewEditInternshipsComponent = (function () {
                function NewEditInternshipsComponent(params) {
                    this.params = params;
                    this.internship = params.get("internship");
                    console.log(this.internship);
                }
                NewEditInternshipsComponent = __decorate([
                    core_1.Component({
                        selector: "new-edit-internship",
                        template: "\n    Hi this is the new/edit component\n    ",
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], NewEditInternshipsComponent);
                return NewEditInternshipsComponent;
            }());
            exports_1("NewEditInternshipsComponent", NewEditInternshipsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybnNoaXBzL25ld0VkaXRJbnRlcm5zaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHSSxxQ0FBb0IsTUFBbUI7b0JBQW5CLFdBQU0sR0FBTixNQUFNLENBQWE7b0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBWkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUscUJBQXFCO3dCQUMvQixRQUFRLEVBQUUsK0NBRVQ7cUJBQ0osQ0FBQzs7K0NBQUE7Z0JBUUYsa0NBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHFFQU9DLENBQUEiLCJmaWxlIjoiaW50ZXJuc2hpcHMvbmV3RWRpdEludGVybnNoaXBzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJuZXctZWRpdC1pbnRlcm5zaGlwXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBIaSB0aGlzIGlzIHRoZSBuZXcvZWRpdCBjb21wb25lbnRcbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOZXdFZGl0SW50ZXJuc2hpcHNDb21wb25lbnQge1xuICAgIGludGVybnNoaXA6IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IFJvdXRlUGFyYW1zKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuc2hpcCA9IHBhcmFtcy5nZXQoXCJpbnRlcm5zaGlwXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmludGVybnNoaXApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
