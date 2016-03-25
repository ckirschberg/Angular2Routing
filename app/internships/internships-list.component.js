System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var InternshipsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InternshipsListComponent = (function () {
                function InternshipsListComponent() {
                    this.internships = [
                        { initials: 'chrk', date: new Date() },
                        { initials: 'asbc', date: new Date() },
                        { initials: 'cahl', date: new Date() },
                    ];
                }
                InternshipsListComponent = __decorate([
                    core_1.Component({
                        selector: "internships-list",
                        template: "\n    <ul>\n        <li *ngFor=\"#internship of internships\" (click)=\"onSelect(internship)\">\n        {{internship.initials}} {{internship.date}}\n        </li>\n    </ul>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], InternshipsListComponent);
                return InternshipsListComponent;
            }());
            exports_1("InternshipsListComponent", InternshipsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybnNoaXBzL2ludGVybnNoaXBzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBQUE7b0JBRVcsZ0JBQVcsR0FBRzt3QkFDakIsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFDO3dCQUNwQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUM7d0JBQ3BDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBQztxQkFDdkMsQ0FBQTtnQkFFTCxDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxzTEFNVDtxQkFDSixDQUFDOzs0Q0FBQTtnQkFTRiwrQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0RBUUMsQ0FBQSIsImZpbGUiOiJpbnRlcm5zaGlwcy9pbnRlcm5zaGlwcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaW50ZXJuc2hpcHMtbGlzdFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPHVsPlxuICAgICAgICA8bGkgKm5nRm9yPVwiI2ludGVybnNoaXAgb2YgaW50ZXJuc2hpcHNcIiAoY2xpY2spPVwib25TZWxlY3QoaW50ZXJuc2hpcClcIj5cbiAgICAgICAge3tpbnRlcm5zaGlwLmluaXRpYWxzfX0ge3tpbnRlcm5zaGlwLmRhdGV9fVxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJuc2hpcHNMaXN0Q29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBpbnRlcm5zaGlwcyA9IFtcbiAgICAgICAge2luaXRpYWxzOiAnY2hyaycsIGRhdGU6IG5ldyBEYXRlKCl9LFxuICAgICAgICB7aW5pdGlhbHM6ICdhc2JjJywgZGF0ZTogbmV3IERhdGUoKX0sXG4gICAgICAgIHtpbml0aWFsczogJ2NhaGwnLCBkYXRlOiBuZXcgRGF0ZSgpfSxcbiAgICBdXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
