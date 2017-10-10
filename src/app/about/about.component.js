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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AboutComponent = (function () {
    function AboutComponent(mainService, router, modalService) {
        this.mainService = mainService;
        this.router = router;
        this.modalService = modalService;
        this.titleAbout = 'About';
        this.base64textString = "";
    }
    // this method from the angular box
    // it start run at initialization of component
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getData().subscribe(function (data) {
            _this.teamGallery = data[1].dataPage.teamGallery;
            _this.description = data[1].dataPage.description;
        });
        //this.router.navigateByUrl('/about');
    };
    AboutComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    AboutComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = 'data:image/png;base64,' + btoa(binaryString);
        console.log(this.base64textString);
    };
    AboutComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AboutComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        templateUrl: './app/about/about.component.html'
    }),
    __metadata("design:paramtypes", [main_service_1.MainService, router_1.Router, ng_bootstrap_1.NgbModal])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map