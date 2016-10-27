"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('./index');
var AppComponent = (function () {
    function AppComponent() {
        this.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
        this.data = [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Updating data');
            _this.data[0].data = [26, 15, 2, 36, 18, 7];
        }, 3000);
    };
    AppComponent.prototype.onClick = function (e) {
        console.log('Clicked', e);
    };
    AppComponent.prototype.onResize = function (e) {
        console.log('Resized', e);
    };
    AppComponent.prototype.onHover = function (e) {
        console.log('Hover', e);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<chart [labels]="labels" [data]="data" type="bar" (onClick)="onClick($event)" (onResize)="onResize($event)" (onHover)="onHover($event)"></chart>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var core_2 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                index_1.ChartModule
            ],
            declarations: [
                AppComponent
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=demo.js.map