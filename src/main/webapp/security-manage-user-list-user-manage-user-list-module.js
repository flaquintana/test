(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-manage-user-list-user-manage-user-list-module"],{

/***/ "./src/app/security/manage-user/list-user/manage-user-list-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/security/manage-user/list-user/manage-user-list-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ManageUserListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserListRoutingModule", function() { return ManageUserListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-user-list.component */ "./src/app/security/manage-user/list-user/manage-user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _manage_user_list_component__WEBPACK_IMPORTED_MODULE_2__["ManageUserListComponent"]
    },
];
var ManageUserListRoutingModule = /** @class */ (function () {
    function ManageUserListRoutingModule() {
    }
    ManageUserListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageUserListRoutingModule);
    return ManageUserListRoutingModule;
}());



/***/ }),

/***/ "./src/app/security/manage-user/list-user/manage-user-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/security/manage-user/list-user/manage-user-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\r\n<div class=\"mb-40 mt-40\">\r\n    <h1>Gestisci utenti</h1>\r\n</div>\r\n\r\n<!-- SEARCH FORM -->\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"card-title border-bottom border-italia\">\r\n            <i class=\"fa fa-search\"></i> Cerca\r\n        </div>\r\n        <form #searchForm=\"ngForm\">\r\n            <div class=\"row justify-content-md-center\">\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"search.username\" name=\"username\" #username=\"ngModel\">\r\n                        <label for=\"title\">Username</label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"role\" [(ngModel)]=\"search.role\" name=\"role\" #role=\"ngModel\">\r\n                        <label for=\"role\">Ruoli</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- TABLE LIST -->\r\n<table class=\"table table-hover mt-40\">\r\n    <thead>\r\n        <tr>\r\n            <th>Username</th>\r\n            <th>Ruoli</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let user of users | search:{'username' : search.username, 'name' : search.name, 'surname' : search.surname, 'mail' : search.mail, 'roles' : search.role }\">\r\n            <td><a [routerLink]=\"['/manage-users/', user._id]\">{{user.username}}</a></td>\r\n            <td>\r\n                <span *ngFor=\"let role of user.roles\" class=\"badge badge-pill badge-primary mr-2\">{{role}}</span>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<!-- BUTTON -->\r\n<button class=\"btn btn-primary text-center pull-right mb-20\" routerLink=\"/manage-users/new\">\r\n    <span>\r\n        <i class=\"fa fa-plus\"></i>\r\n    </span>\r\n</button>"

/***/ }),

/***/ "./src/app/security/manage-user/list-user/manage-user-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/security/manage-user/list-user/manage-user-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserListComponent", function() { return ManageUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// COMPONENT

// SERVICES

/**
 * List of all users
 */
var ManageUserListComponent = /** @class */ (function () {
    function ManageUserListComponent(userService) {
        this.userService = userService;
        this.search = {};
    }
    ManageUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get list users
        this.userService.list().subscribe(function (list) { return _this.users = list; });
    };
    ManageUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-user-list',
            template: __webpack_require__(/*! ./manage-user-list.component.html */ "./src/app/security/manage-user/list-user/manage-user-list.component.html")
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ManageUserListComponent);
    return ManageUserListComponent;
}());



/***/ }),

/***/ "./src/app/security/manage-user/list-user/manage-user-list.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/security/manage-user/list-user/manage-user-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: ManageUserListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserListModule", function() { return ManageUserListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _manage_user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-user-list-routing.module */ "./src/app/security/manage-user/list-user/manage-user-list-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _manage_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-user-list.component */ "./src/app/security/manage-user/list-user/manage-user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ManageUserListModule = /** @class */ (function () {
    function ManageUserListModule() {
    }
    ManageUserListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _manage_user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageUserListRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _manage_user_list_component__WEBPACK_IMPORTED_MODULE_5__["ManageUserListComponent"]
            ]
        })
    ], ManageUserListModule);
    return ManageUserListModule;
}());



/***/ })

}]);
//# sourceMappingURL=security-manage-user-list-user-manage-user-list-module.js.map