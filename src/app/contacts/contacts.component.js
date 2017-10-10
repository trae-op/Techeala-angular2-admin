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
var ContactsComponent = (function () {
    function ContactsComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.titleContacts = 'Contacts';
        this.positions = [];
        this.inputForm = '';
    }
    // // this method from the angular box
    // // it start run at initialization of component
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getData().subscribe(function (data) {
            _this.skype = data[5].dataPage.skype;
            _this.phone = data[5].dataPage.phone;
            _this.email = data[5].dataPage.email;
            _this.mapCoordinates = data[5].dataPage.mapCoordinates;
            _this.mapCoordinatesLat = data[5].dataPage.mapCoordinates.lat;
            _this.mapCoordinatesLng = data[5].dataPage.mapCoordinates.lng;
        });
    };
    ContactsComponent.prototype.onSubmit = function () {
        console.log('input form\n', this.inputForm);
    };
    ContactsComponent.prototype.onMapReady = function (map) {
        console.log('map', map);
        console.log('markers', map.markers); // to get all markers as an array 
    };
    ContactsComponent.prototype.onIdle = function (event) {
        console.log('map', event.target);
        this.positions.push([37.775, -122.434]);
    };
    ContactsComponent.prototype.onMarkerInit = function (marker) {
        console.log('marker', marker);
    };
    ContactsComponent.prototype.onMapClick = function (event) {
        this.positions.push(event.latLng);
        event.target.panTo(event.latLng);
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        templateUrl: './app/contacts/contacts.component.html',
        styles: ["\n    form button[disabled] {\n      opacity: 0.3;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [main_service_1.MainService, router_1.Router])
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map