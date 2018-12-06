(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ricette-edit-ricette-edit-module"],{

/***/ "./src/app/domain/test_db/base/ricette.base.ts":
/*!*****************************************************!*\
  !*** ./src/app/domain/test_db/base/ricette.base.ts ***!
  \*****************************************************/
/*! exports provided: RicetteBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteBase", function() { return RicetteBase; });
/**
 * This is the model of Ricette object
 *
 */
var RicetteBase = /** @class */ (function () {
    function RicetteBase() {
    }
    return RicetteBase;
}());



/***/ }),

/***/ "./src/app/domain/test_db/ricette.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/test_db/ricette.ts ***!
  \*******************************************/
/*! exports provided: Ricette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ricette", function() { return Ricette; });
/* harmony import */ var _base_ricette_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/ricette.base */ "./src/app/domain/test_db/base/ricette.base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * YOU CAN OVERRIDE HERE RicetteBase.ts
 */
var Ricette = /** @class */ (function (_super) {
    __extends(Ricette, _super);
    function Ricette() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ricette;
}(_base_ricette_base__WEBPACK_IMPORTED_MODULE_0__["RicetteBase"]));



/***/ }),

/***/ "./src/app/pages/ricette-edit/ricette-edit-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ricette-edit/ricette-edit-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RicetteEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteEditRoutingModule", function() { return RicetteEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ricette_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ricette-edit.component */ "./src/app/pages/ricette-edit/ricette-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _ricette_edit_component__WEBPACK_IMPORTED_MODULE_2__["RicetteEditComponent"]
    },
];
var RicetteEditRoutingModule = /** @class */ (function () {
    function RicetteEditRoutingModule() {
    }
    RicetteEditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RicetteEditRoutingModule);
    return RicetteEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ricette-edit/ricette-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/ricette-edit/ricette-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/ricette-edit/ricette-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/ricette-edit/ricette-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\r\n<div class=\"mb-40 mt-40\">\r\n    <h1>Ricette</h1>\r\n</div>\r\n<div class=\"card mb-40\">\r\n    <div class=\"card-body\">\r\n        <h5 class=\"card-title border-bottom border-italia\">\r\n            <i class=\"fa fa-search\"></i> Dettaglio\r\n        </h5>\r\n        <form #editForm=\"ngForm\" [ngClass]=\"{'was-validated': formValid!=null}\">\r\n            <div class=\"row mt-40 justify-content-md-center\">\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Ingredienti\" [(ngModel)]=\"item.Ingredienti\" name=\"Ingredienti\" #Ingredienti=\"ngModel\" required>\r\n                        <label [className]=\"item.Ingredienti && item.Ingredienti.length > 0 ? 'active' : ''\" for=\"Ingredienti\">Ingredienti *</label>\r\n                        <div class=\"invalid-feedback\">Valore obbligatorio</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Nome\" [(ngModel)]=\"item.Nome\" name=\"Nome\" #Nome=\"ngModel\" required>\r\n                        <label [className]=\"item.Nome && item.Nome.length > 0 ? 'active' : ''\" for=\"Nome\">Nome *</label>\r\n                        <div class=\"invalid-feedback\">Valore obbligatorio</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Procedimento\" [(ngModel)]=\"item.Procedimento\" name=\"Procedimento\" #Procedimento=\"ngModel\" required>\r\n                        <label [className]=\"item.Procedimento && item.Procedimento.length > 0 ? 'active' : ''\" for=\"Procedimento\">Procedimento *</label>\r\n                        <div class=\"invalid-feedback\">Valore obbligatorio</div>\r\n                    </div>\r\n                    <!-- RELATIONS -->\r\n                    <h2 class=\"mb-20 mt-40\">Relazioni</h2>\r\n\r\n                    <label for=\"User\">User</label>\r\n                    <select name=\"Posseduta\" id=\"Posseduta\" [(ngModel)]=\"item.Posseduta\" class=\"form-control\" #Posseduta=\"ngModel\"  >\r\n                        <option disabled selected>Seleziona una opzione</option>                                                    \r\n                        <option *ngFor=\"let item of listPosseduta\" [value]=\"item._id\">{{item._id}}</option>\r\n                    </select>\r\n\r\n\r\n                    \r\n        \r\n\r\n                    <!-- BUTTON BAR -->\r\n                    <div class=\"mt-40\">\r\n                        <button class=\"btn btn-primary pull-right\" (click)=\"save(editForm.valid, item)\">Salva</button>\r\n                        <button class=\"btn btn-secondary pull-right mr-2\" (click)=\"goBack()\">Torna alla lista</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/ricette-edit/ricette-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/ricette-edit/ricette-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RicetteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteEditComponent", function() { return RicetteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ricette_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ricette.service */ "./src/app/services/ricette.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _domain_test_db_ricette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/test_db/ricette */ "./src/app/domain/test_db/ricette.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import Libraries



// Import Services


// Import Models

// START - USED SERVICES
/**
* RicetteService.create
*	@description CRUD ACTION create
*
* RicetteService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id
*
* UserService.list
*	@description CRUD ACTION list
*
* RicetteService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES
/**
 * This component allows to edit a Ricette
 */
var RicetteEditComponent = /** @class */ (function () {
    function RicetteEditComponent(ricetteService, userService, route, location) {
        this.ricetteService = ricetteService;
        this.userService = userService;
        this.route = route;
        this.location = location;
        // Init item
        this.item = new _domain_test_db_ricette__WEBPACK_IMPORTED_MODULE_5__["Ricette"]();
    }
    /**
     * Init
     */
    RicetteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            var id = param['id'];
            if (id !== 'new') {
                _this.ricetteService.get(id).subscribe(function (item) { return _this.item = item; });
            }
            // Get relations
            _this.userService.list().subscribe(function (list) { return _this.listPosseduta = list; });
        });
    };
    /**
     * Save Ricette
     *
     * @param {boolean} formValid Form validity check
     * @param Ricette item Ricette to save
     */
    RicetteEditComponent.prototype.save = function (formValid, item) {
        var _this = this;
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.ricetteService.update(item).subscribe(function (data) { return _this.goBack(); });
            }
            else {
                this.ricetteService.create(item).subscribe(function (data) { return _this.goBack(); });
            }
        }
    };
    /**
     * Go Back
     */
    RicetteEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    RicetteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ricette-edit',
            template: __webpack_require__(/*! ./ricette-edit.component.html */ "./src/app/pages/ricette-edit/ricette-edit.component.html"),
            styles: [__webpack_require__(/*! ./ricette-edit.component.css */ "./src/app/pages/ricette-edit/ricette-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ricette_service__WEBPACK_IMPORTED_MODULE_3__["RicetteService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], RicetteEditComponent);
    return RicetteEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/ricette-edit/ricette-edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ricette-edit/ricette-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: RicetteEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteEditModule", function() { return RicetteEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ricette_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ricette-edit.component */ "./src/app/pages/ricette-edit/ricette-edit.component.ts");
/* harmony import */ var _ricette_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ricette-edit-routing.module */ "./src/app/pages/ricette-edit/ricette-edit-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RicetteEditModule = /** @class */ (function () {
    function RicetteEditModule() {
    }
    RicetteEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ricette_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["RicetteEditRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _ricette_edit_component__WEBPACK_IMPORTED_MODULE_2__["RicetteEditComponent"]
            ]
        })
    ], RicetteEditModule);
    return RicetteEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ricette-edit-ricette-edit-module.js.map