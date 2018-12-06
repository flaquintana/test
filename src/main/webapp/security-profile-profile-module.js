(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-profile-profile-module"],{

/***/ "./src/app/security/profile/profile-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/security/profile/profile-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/security/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
    },
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/security/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/security/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\r\n<div class=\"mb-40 mt-40\">\r\n    <h1>Profilo</h1>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <form #profileForm=\"ngForm\" class=\"container-fluid mt-20\" *ngIf=\"user\">\r\n        <div class=\"row justify-content-md-center mt-40 mb-40\">\r\n            <div class=\"col-md-10\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"active\" for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required disabled>\r\n                </div>\r\n                <div class=\"mt-40\">\r\n                    <button class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#changePasswordModal\">Cambia Password</button>\r\n                    <button class=\"btn btn-primary pull-right\" color=\"primary\" [disabled]=\"profileForm.invalid\" (click)=\"save(profileForm.valid)\">Salva</button>\r\n                    <button class=\"btn btn-secondary pull-right mr-2\" routerLink=\"/home\">Torna alla Home</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"changePasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\"><i class=\"fa fa-lock\"></i>&nbsp;&nbsp;Cambia password</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                </div>\r\n                <form #changePasswordForm=\"ngForm\" class=\"container-fluid\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"row justify-content-md-center\">\r\n                            <div class=\"col-10\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"passwordOld\">Vecchia Password</label>\r\n                                    <input type=\"password\" class=\"form-control\" id=\"passwordOld\" [(ngModel)]=\"passwordOld\" name=\"passwordOld\" #passwordOldForm=\"ngModel\" required>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"passwordNew\">Nuova Password</label>\r\n                                    <input type=\"password\" class=\"form-control\" id=\"passwordNew\" [(ngModel)]=\"passwordNew\" name=\"passwordNew\" #passwordNewForm=\"ngModel\" required>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"passwordNewConfirm\">Conferma Nuova Password</label>\r\n                                    <input type=\"password\" class=\"form-control\" id=\"passwordNewConfirm\" [(ngModel)]=\"passwordNewConfirm\" name=\"passwordNewConfirm\" #passwordNewConfirmForm=\"ngModel\" [ngClass]=\"{'is-invalid': passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm}\"\r\n                                        required>\r\n                                    <p *ngIf=\"passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm\" class=\"help-block\">Passwords missmatch</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div *ngIf=\"showError\" class=\"row justify-content-md-center\">\r\n                    <div class=\"alert alert-danger text-left\">\r\n                        <strong>Errore!</strong> Vecchia password non valida\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" #closeModal class=\"btn btn-default\" data-dismiss=\"modal\">Annulla</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"changePasswordForm.invalid || (passwordAdmin && passwordNewConfirm && passwordNew !== passwordNewConfirm)\" (click)=\"changePassword()\">Salva</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/security/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/security.service */ "./src/app/security/services/security.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
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



// Security




/**
 * Edit my profile
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, authenticationService, securityService, router, route) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.securityService = securityService;
        this.router = router;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // Get logged user
            _this.authenticationService.getUser().subscribe(function (user) { return _this.user = user; });
        });
    };
    /**
     * Save User
     *
     * @param {boolean} valid Form validity
     */
    ProfileComponent.prototype.save = function (valid) {
        var _this = this;
        if (valid)
            this.userService.update(this.user).subscribe(function (data) {
                _this.userService.get(_this.user._id).subscribe(function (user) {
                    src_app_security_current_user__WEBPACK_IMPORTED_MODULE_6__["store"].setUser(user);
                    _this.router.navigateByUrl('/home');
                });
            });
    };
    /**
     * Change password of user
     */
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        this.showError = false;
        // Convert passwords in MD5
        var passwordNew = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(this.passwordNew).toString();
        var passwordOld = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(this.passwordOld).toString();
        // Change password
        this.securityService.changePassword(passwordNew, passwordOld).subscribe(function (data) {
            _this.passwordOld = null;
            _this.passwordNew = '';
            _this.passwordNewConfirm = '';
            _this.showError = false;
            _this.closeModal.nativeElement.click();
        }, function (err) {
            _this.showError = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "closeModal", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/security/profile/profile.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/security/profile/profile.module.ts":
/*!****************************************************!*\
  !*** ./src/app/security/profile/profile.module.ts ***!
  \****************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/security/profile/profile.component.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/security/profile/profile-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=security-profile-profile-module.js.map