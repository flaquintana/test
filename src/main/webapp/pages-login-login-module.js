(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center mt-40\">\r\n    <div class=\"col-md-7\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"text-center\">\r\n                    <h2>Benvenuto in</h2>\r\n                    <h2 class=\"mb-40\">test</h2>\r\n                </div>\r\n                <form #loginForm=\"ngForm\">\r\n                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">\r\n                        Username o Password non validi\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'was-validated': (loginForm.submitted && username.invalid) || (username.dirty && username.invalid)}\">\r\n                        <i class=\"ico-prefix it-mail\"></i>\r\n                        <label for=\"username\" [className]=\"username ? 'active' : ''\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\"\r\n                            #username=\"ngModel\" required>\r\n                        <div *ngIf=\"(loginForm.submitted && username.invalid) || (username.dirty && username.invalid)\"\r\n                            class=\"alert alert-danger\">\r\n                            Username obbligatorio\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'was-validated': (loginForm.submitted && password.invalid) || (password.dirty && password.invalid)}\">\r\n                        <i class=\"ico-prefix it-lock\"></i>\r\n                        <label for=\"password\" [className]=\"password ? 'active' : ''\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" name=\"password\"\r\n                            #password=\"ngModel\" required>\r\n                        <div *ngIf=\"(loginForm.submitted && password.invalid) || (password.dirty && password.invalid)\"\r\n                            class=\"alert alert-danger\">\r\n                            Password obbligatoria\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <div class=\"form-check\">\r\n                            <input id=\"checkbox1\" type=\"checkbox\" [(ngModel)]=\"remember\" name=\"remember\">\r\n                            <label for=\"checkbox1\">Ricorda login</label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"clearfix\"></div>\r\n                    <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"login(loginForm)\">Login</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_domain_test_db_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/domain/test_db/user */ "./src/app/domain/test_db/user.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
/* harmony import */ var src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security/services/security.service */ "./src/app/security/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(securityService, router) {
        this.securityService = securityService;
        this.router = router;
        this.user = new src_app_domain_test_db_user__WEBPACK_IMPORTED_MODULE_1__["User"](null, null, null, null);
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.valid) {
            var md5pass = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(this.user.password).toString();
            this.securityService.login(this.user.username, md5pass, this.remember === undefined ? false : this.remember)
                .subscribe(function (user) {
                _this.showError = false;
                _this.router.navigate(['/']);
                _this.setUser(user);
            }, function (err) { return _this.showError = true; });
        }
    };
    LoginComponent.prototype.setUser = function (user) {
        src_app_security_current_user__WEBPACK_IMPORTED_MODULE_4__["store"].setUser(user);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map