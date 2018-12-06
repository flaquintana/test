(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ricette-list-ricette-list-module"],{

/***/ "./src/app/pages/ricette-list/ricette-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ricette-list/ricette-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RicetteListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteListRoutingModule", function() { return RicetteListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ricette_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ricette-list.component */ "./src/app/pages/ricette-list/ricette-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _ricette_list_component__WEBPACK_IMPORTED_MODULE_2__["RicetteListComponent"]
    },
];
var RicetteListRoutingModule = /** @class */ (function () {
    function RicetteListRoutingModule() {
    }
    RicetteListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RicetteListRoutingModule);
    return RicetteListRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ricette-list/ricette-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/ricette-list/ricette-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Insert here your CSS */"

/***/ }),

/***/ "./src/app/pages/ricette-list/ricette-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/ricette-list/ricette-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\r\n<div class=\"mb-40 mt-40\">\r\n    <h1>Lista Ricette</h1>\r\n</div>\r\n\r\n<!-- SEARCH FORM -->\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h5 class=\"card-title border-bottom border-italia\">\r\n            <i class=\"fa fa-search\"></i> Cerca\r\n        </h5>\r\n        \r\n        <form #searchForm=\"ngForm\">\r\n            <div class=\"row mt-40 justify-content-md-center\">\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Ingredienti\">Ingredienti</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"Ingredienti\" [(ngModel)]=\"search.Ingredienti\" name=\"Ingredienti\" #Ingredienti=\"ngModel\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Nome\">Nome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"Nome\" [(ngModel)]=\"search.Nome\" name=\"Nome\" #Nome=\"ngModel\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Procedimento\">Procedimento</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"Procedimento\" [(ngModel)]=\"search.Procedimento\" name=\"Procedimento\" #Procedimento=\"ngModel\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- TABLE -->\r\n<table class=\"table mt-40\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">ID</th>\r\n            <th scope=\"col\">Ingredienti</th>\r\n            <th scope=\"col\">Nome</th>\r\n            <th scope=\"col\">Procedimento</th>\r\n            <th>Rimuovi</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of list | search: { 'Ingredienti': search.Ingredienti, 'Nome': search.Nome, 'Procedimento': search.Procedimento }\">\r\n            <!-- ATTRIBUTES -->\r\n            <td>\r\n                <a [routerLink]=\"['/ricettes', item._id]\">{{item._id}}</a>\r\n            </td>\r\n            <td>{{item.Ingredienti }}</td>\r\n            <td>{{item.Nome }}</td>\r\n            <td>{{item.Procedimento }}</td>\r\n\r\n            <!-- DELETE BUTTON -->\r\n            <td>\r\n                <button class=\"btn btn-outline-primary btn-xs\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"selectId(item._id)\">\r\n                    Rimuovi\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n    <div class=\"no-result\" *ngIf=\"(list | search: {   'Ingredienti': search.Ingredienti ,  'Nome': search.Nome ,  'Procedimento': search.Procedimento  }).length == 0\">\r\n        Nessun elemento trovato\r\n    </div>\r\n</table>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n                    <i class=\"fa fa-times-circle\"></i>&nbsp;&nbsp;Rimuovi</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Vuoi rimuovere questo elemento?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">NO</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteItem()\">SI</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- BUTTON -->\r\n<button class=\"btn btn-primary text-center pull-right mb-20\" routerLink=\"/ricettes/new\">\r\n    <span>\r\n        <i class=\"fa fa-plus\"></i>\r\n    </span>\r\n</button>\r\n\r\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "./src/app/pages/ricette-list/ricette-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/ricette-list/ricette-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RicetteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteListComponent", function() { return RicetteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ricette_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ricette.service */ "./src/app/services/ricette.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Services

// START - USED SERVICES
/**
* RicetteService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* RicetteService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES
/**
 * This component shows a list of Ricette
 * @class RicetteListComponent
 */
var RicetteListComponent = /** @class */ (function () {
    function RicetteListComponent(ricetteService) {
        this.ricetteService = ricetteService;
        this.search = {};
    }
    /**
     * Init
     */
    RicetteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ricetteService.list().subscribe(function (list) { return _this.list = list; });
    };
    /**
     * Select Ricette to remove
     *
     * @param {string} id Id of the Ricette to remove
     */
    RicetteListComponent.prototype.selectId = function (id) {
        this.idSelected = id;
    };
    /**
     * Remove selected Ricette
     */
    RicetteListComponent.prototype.deleteItem = function () {
        var _this = this;
        this.ricetteService.remove(this.idSelected).subscribe(function (data) { return _this.list = _this.list.filter(function (el) { return el._id !== _this.idSelected; }); });
    };
    RicetteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ricette-list',
            template: __webpack_require__(/*! ./ricette-list.component.html */ "./src/app/pages/ricette-list/ricette-list.component.html"),
            styles: [__webpack_require__(/*! ./ricette-list.component.css */ "./src/app/pages/ricette-list/ricette-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ricette_service__WEBPACK_IMPORTED_MODULE_1__["RicetteService"]])
    ], RicetteListComponent);
    return RicetteListComponent;
}());



/***/ }),

/***/ "./src/app/pages/ricette-list/ricette-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ricette-list/ricette-list.module.ts ***!
  \***********************************************************/
/*! exports provided: RicetteListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteListModule", function() { return RicetteListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ricette_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ricette-list.component */ "./src/app/pages/ricette-list/ricette-list.component.ts");
/* harmony import */ var _ricette_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ricette-list-routing.module */ "./src/app/pages/ricette-list/ricette-list-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RicetteListModule = /** @class */ (function () {
    function RicetteListModule() {
    }
    RicetteListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ricette_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["RicetteListRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _ricette_list_component__WEBPACK_IMPORTED_MODULE_2__["RicetteListComponent"]
            ]
        })
    ], RicetteListModule);
    return RicetteListModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ricette-list-ricette-list-module.js.map