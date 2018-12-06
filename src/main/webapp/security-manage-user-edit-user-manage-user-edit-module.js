(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-manage-user-edit-user-manage-user-edit-module"],{

/***/ "./src/app/security/manage-user/edit-user/manage-user-edit-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/security/manage-user/edit-user/manage-user-edit-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ManageUserEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserEditRoutingModule", function() { return ManageUserEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_user_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-user-edit.component */ "./src/app/security/manage-user/edit-user/manage-user-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _manage_user_edit_component__WEBPACK_IMPORTED_MODULE_2__["ManageUserEditComponent"]
    },
];
var ManageUserEditRoutingModule = /** @class */ (function () {
    function ManageUserEditRoutingModule() {
    }
    ManageUserEditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageUserEditRoutingModule);
    return ManageUserEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/security/manage-user/edit-user/manage-user-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/security/manage-user/edit-user/manage-user-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\r\n<div class=\"mb-40 mt-40\">\r\n    <h1>Utente</h1>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"card-title border-bottom border-italia\">\r\n            <i class=\"fa fa-search\"></i> Profilo\r\n        </div>\r\n        <form #editForm=\"ngForm\" *ngIf=\"user\">\r\n            <div class=\"row justify-content-md-center\">\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"active\" for=\"username\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required [disabled]=\"user._id\">\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"!user._id\">\r\n                        <label for=\"name\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"!user._id\">\r\n                        <label for=\"name\">Conferma Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"passwordConfirm\" [(ngModel)]=\"user.passwordConfirm\" name=\"passwordConfirm\" #passwordConfirm=\"ngModel\" required>\r\n                    </div>\r\n                    <!-- ROLE MANAGEMENT -->\r\n                    <h3>Ruoli</h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-12\">\r\n                            <label for=\"newRole\">Nuovo ruolo...</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"newRole\" name=\"newRole\" #newRole>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <span class=\"btn btn-primary text-center pull-right mb-20\" (click)=\"addRole(newRole)\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- NO ROLES -->\r\n                    <label *ngIf=\"!user.roles || user.roles.length==0\">\r\n                        Nessun ruolo assegnato all'utente\r\n                    </label>\r\n                    <!-- NO ROLES -->\r\n                    <div *ngFor=\"let role of user.roles; let i = index; trackBy:trackByFn\" class=\"row mt-2\">\r\n                        <div class=\"form-group\" class=\"col-8\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"role{{i}}\" [(ngModel)]=\"user.roles[i]\" name=\"roles{{i}}\">\r\n                        </div>\r\n                        <span class=\"btn btn-outline-primary btn-xs col-3\" (click)=\"removeRole(i)\">\r\n                            Rimuovi\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"mt-40\">\r\n                        <button class=\"btn btn-outline-primary\" *ngIf=\"user._id\" data-toggle=\"modal\" data-target=\"#changePasswordModal\">Cambia Password</button>\r\n                        <button class=\"btn btn-primary pull-right\" color=\"primary\" [disabled]=\"editForm.invalid\" (click)=\"save()\">Salva</button>\r\n                        <button class=\"btn btn-secondary pull-right mr-2\" routerLink=\"/manage-users\">Torna alla lista utenti</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"changePasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\"><i class=\"fa fa-lock\"></i>&nbsp;&nbsp;Cambia password</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n            </div>\r\n            <form #changePasswordForm=\"ngForm\" class=\"container-fluid\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row justify-content-md-center\">\r\n                        <div class=\"col-10\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"passwordAdmin\">Password Admin</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"passwordAdmin\" [(ngModel)]=\"passwordAdmin\" name=\"passwordAdmin\" #passwordAdminForm=\"ngModel\" required>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"passwordNew\">Nuova Password</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"passwordNew\" [(ngModel)]=\"passwordNew\" name=\"passwordNew\" #passwordNewForm=\"ngModel\" required>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"passwordNewConfirm\">Conferma Nuova Password</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"passwordNewConfirm\" [(ngModel)]=\"passwordNewConfirm\" name=\"passwordNewConfirm\" #passwordNewConfirmForm=\"ngModel\" [ngClass]=\"{'is-invalid': passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm}\"\r\n                                    required>\r\n                                <p *ngIf=\"passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm\" class=\"help-block\">Le passwords non coincidono</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div *ngIf=\"showError\" class=\"row justify-content-md-center\">\r\n                <div class=\"alert alert-danger text-left\">\r\n                    <strong>Error!</strong> Password di Admin non valida\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" #closeModal class=\"btn btn-default\" data-dismiss=\"modal\">Annulla</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"changePasswordForm.invalid || (passwordAdmin && passwordNewConfirm && passwordNew !== passwordNewConfirm)\" (click)=\"changePassword()\">Salva</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/security/manage-user/edit-user/manage-user-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/security/manage-user/edit-user/manage-user-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageUserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserEditComponent", function() { return ManageUserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_domain_test_db_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/domain/test_db/user */ "./src/app/domain/test_db/user.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Edit user by Admin
 */
var ManageUserEditComponent = /** @class */ (function () {
    function ManageUserEditComponent(userService, authenticationService, router, route) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    ManageUserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id === 'new') {
                // New User
                _this.user = new src_app_domain_test_db_user__WEBPACK_IMPORTED_MODULE_1__["User"](null, null, null, []);
            }
            else {
                // Get User
                _this.userService.get(params.id).subscribe(function (user) { return _this.user = user; });
            }
        });
    };
    /**
     * Save or create User
     */
    ManageUserEditComponent.prototype.save = function () {
        var _this = this;
        if (this.user._id) {
            // Save
            this.userService.update(this.user).subscribe(function (data) { return _this.router.navigateByUrl('/manage-users'); });
        }
        else {
            // Create
            this.user.password = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"].hashStr(this.user.password).toString();
            this.userService.create(this.user).subscribe(function (data) { return _this.router.navigateByUrl('/manage-users'); });
        }
    };
    /**
     * Delete user
     */
    ManageUserEditComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.remove(this.user._id).subscribe(function (data) { return _this.router.navigateByUrl('/manage-users'); });
    };
    /**
     * Add roles to user
     *
     * @param {*} role Role to add
     */
    ManageUserEditComponent.prototype.addRole = function (role) {
        if (role.value) {
            this.user.roles.push(role.value);
            role.value = '';
        }
    };
    /**
     * Remove role from user
     *
     * @param {number} index Index of the role in the array
     */
    ManageUserEditComponent.prototype.removeRole = function (index) {
        this.user.roles.splice(index, 1);
    };
    /**
     * Change user password
     */
    ManageUserEditComponent.prototype.changePassword = function () {
        var _this = this;
        var passwordNew = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"].hashStr(this.passwordNew).toString();
        var passwordAdmin = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"].hashStr(this.passwordAdmin).toString();
        this.userService.changePassword(this.user._id, passwordNew, passwordAdmin).subscribe(function (data) {
            _this.passwordAdmin = null;
            _this.passwordNew = null;
            _this.passwordNewConfirm = null;
            _this.showError = false;
            _this.closeModal.nativeElement.click();
        }, function (err) {
            _this.showError = true;
        });
    };
    ManageUserEditComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManageUserEditComponent.prototype, "closeModal", void 0);
    ManageUserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-user-edit',
            template: __webpack_require__(/*! ./manage-user-edit.component.html */ "./src/app/security/manage-user/edit-user/manage-user-edit.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ManageUserEditComponent);
    return ManageUserEditComponent;
}());



/***/ }),

/***/ "./src/app/security/manage-user/edit-user/manage-user-edit.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/security/manage-user/edit-user/manage-user-edit.module.ts ***!
  \***************************************************************************/
/*! exports provided: ManageUserEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserEditModule", function() { return ManageUserEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _manage_user_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-user-edit-routing.module */ "./src/app/security/manage-user/edit-user/manage-user-edit-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _manage_user_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-user-edit.component */ "./src/app/security/manage-user/edit-user/manage-user-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ManageUserEditModule = /** @class */ (function () {
    function ManageUserEditModule() {
    }
    ManageUserEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _manage_user_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageUserEditRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _manage_user_edit_component__WEBPACK_IMPORTED_MODULE_5__["ManageUserEditComponent"]
            ]
        })
    ], ManageUserEditModule);
    return ManageUserEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=security-manage-user-edit-user-manage-user-edit-module.js.map