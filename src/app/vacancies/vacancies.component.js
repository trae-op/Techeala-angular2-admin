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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_service_1 = require("../shared/main.service");
var VacanciesComponent = (function () {
    function VacanciesComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.titleVacancies = 'vacancies';
        this.vacancies = [];
    }
    // // this method from the angular box
    // // it start run at initialization of component
    VacanciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getData().subscribe(function (data) { return _this.vacancies = data[4].dataPage.vacancies; });
        //this.router.navigateByUrl('/vacancies');
    };
    return VacanciesComponent;
}());
VacanciesComponent = __decorate([
    core_1.Component({
        templateUrl: './app/vacancies/vacancies.component.html'
    }),
    __metadata("design:paramtypes", [main_service_1.MainService, router_1.Router])
], VacanciesComponent);
exports.VacanciesComponent = VacanciesComponent;
//# sourceMappingURL=vacancies.component.js.map