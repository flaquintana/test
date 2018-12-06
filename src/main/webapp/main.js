(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"pages-login-login-module~security-manage-user-edit-user-manage-user-edit-module~security-profile-pro~b5fc9046",
		"pages-login-login-module"
	],
	"./pages/ricette-edit/ricette-edit.module": [
		"./src/app/pages/ricette-edit/ricette-edit.module.ts",
		"pages-ricette-edit-ricette-edit-module"
	],
	"./pages/ricette-list/ricette-list.module": [
		"./src/app/pages/ricette-list/ricette-list.module.ts",
		"pages-ricette-list-ricette-list-module"
	],
	"./security/manage-user/edit-user/manage-user-edit.module": [
		"./src/app/security/manage-user/edit-user/manage-user-edit.module.ts",
		"pages-login-login-module~security-manage-user-edit-user-manage-user-edit-module~security-profile-pro~b5fc9046",
		"security-manage-user-edit-user-manage-user-edit-module"
	],
	"./security/manage-user/list-user/manage-user-list.module": [
		"./src/app/security/manage-user/list-user/manage-user-list.module.ts",
		"security-manage-user-list-user-manage-user-list-module"
	],
	"./security/profile/profile.module": [
		"./src/app/security/profile/profile.module.ts",
		"pages-login-login-module~security-manage-user-edit-user-manage-user-edit-module~security-profile-pro~b5fc9046",
		"security-profile-profile-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DEPENDENCIES



/**
 * WEB APP ROUTES
 */
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    /* START MY VIEWS */
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ricettes/:id', loadChildren: './pages/ricette-edit/ricette-edit.module#RicetteEditModule', canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ricettes', loadChildren: './pages/ricette-list/ricette-list.module#RicetteListModule', canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    /* END MY VIEWS */
    // SECURITY
    { path: 'manage-users', loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: ['ADMIN'] },
    { path: 'manage-users/:id', loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: ['ADMIN'] },
    { path: 'profile', loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];
/**
 * ROUTING MODULE
 */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR -->\r\n<app-navbar></app-navbar>\r\n\r\n<!-- CONTENT -->\r\n<div class=\"container-fluid mb-40\">\r\n    <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-md-7\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n\r\n<!-- FOOTER -->\r\n<div class=\"footer\">\r\n    Created by\r\n    <a href=\"https://www.skaffolder.com\" target=\"_blank\">&copy; Skaffolder</a>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    /**
     * THIS COMPONENT CONTAINS THE TEMPLATE OF WEB SITE
     */
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
        /**
         * THIS COMPONENT CONTAINS THE TEMPLATE OF WEB SITE
         */
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core.module */ "./src/app/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar.component */ "./src/app/components/navbar.component.ts");
/* harmony import */ var _directives_mail_validate_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/mail.validate.directive */ "./src/app/directives/mail.validate.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DEPENDENCIES






// SHARED MODULE

// CORE MODULE

// LAYOUT


// DIRECTIVES

// DECLARE APPLICATION MODULE
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]
            ],
            declarations: [
                // LAYOUT
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _directives_mail_validate_directive__WEBPACK_IMPORTED_MODULE_10__["MailValidator"],
            ],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/navbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand ml-20\" routerLink=\"\">\r\n        <svg class=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 92 74\" height=\"48\">\r\n            <g fill=\"#FFF\">\r\n                <path d=\"M31.799 71.9V15.7h15.1V72h-15.1zM91.099 28.5h-13.8v23.1c0 2.3.1 3.8.2 4.8.1.9.5 1.7 1.2 2.4s1.8 1 3.3 1l8.6-.2.7 12c-5 1.1-8.9 1.7-11.5 1.7-6.8 0-11.4-1.5-13.8-4.6-2.5-3-3.7-8.6-3.7-16.8V0h15.1v15.6h13.8v12.9zM9.099 32.8c-2.6 0-4.8-.9-6.5-2.7s-2.6-4-2.6-6.6.9-4.8 2.5-6.6c1.7-1.8 3.9-2.6 6.5-2.6s4.8.9 6.5 2.7 2.5 4 2.5 6.7-.8 4.8-2.5 6.6c-1.6 1.6-3.7 2.5-6.4 2.5z\"></path>\r\n            </g>\r\n        </svg>\r\n        <span class=\"ml-20\">\r\n            test\r\n        </span>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div *ngIf=\"user\" class=\"collapse navbar-collapse ml-20\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/home\">Home </a>\r\n            </li>\r\n            <!-- START LINK MENU -->\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n               <a class=\"nav-link\" routerLink=\"/ricettes\">Ricette</a>\r\n            </li>\r\n        \r\n <!-- END LINK MENU -->\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"user\" class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Benvenuto {{user.username}}\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a class=\"dropdown-item\" routerLink=\"/manage-users\">Gestisci utenti</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/profile\">Profilo</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" (click)=\"authenticationService.logout()\">Logout</a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
/* harmony import */ var src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/authentication.service */ "./src/app/security/authentication.service.ts");
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
 * This component manage the NavBar
 *
 * @class NavbarComponent
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getUser().subscribe(function (user) { return _this.user = user; }, function (err) { return _this.user = null; });
        src_app_security_current_user__WEBPACK_IMPORTED_MODULE_1__["store"].currentUser$.subscribe(function (user) { return _this.user = user; });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core.module.ts":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ricette_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ricette.service */ "./src/app/services/ricette.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _security_services_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security/services/security.service */ "./src/app/security/services/security.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security/auth.interceptor */ "./src/app/security/auth.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation


/* END MY SERVICES IMPORTS*/





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            providers: [
                /* START PROVIDERS */
                // Do not edit this comment content, it will be overwritten in next Skaffolder generation
                _services_ricette_service__WEBPACK_IMPORTED_MODULE_1__["RicetteService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
                /* END PROVIDERS */
                // SECURITY
                _security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                _security_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
                _security_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
                { provide: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"], multi: true }
            ],
            exports: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/directives/mail.validate.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/mail.validate.directive.ts ***!
  \*******************************************************/
/*! exports provided: MailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailValidator", function() { return MailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailValidator = /** @class */ (function () {
    function MailValidator(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    MailValidator_1 = MailValidator;
    MailValidator.prototype.validate = function (control) {
        // self value (e.g. retype password)
        var mail = control.value;
        var regExpMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!mail)
            return null;
        if (!regExpMail.test(mail)) {
            this.renderer.addClass(this.elRef.nativeElement, 'is-invalid');
            return {
                validateEqual: false
            };
        }
        else {
            this.renderer.removeClass(this.elRef.nativeElement, 'is-invalid');
        }
        return null;
    };
    MailValidator = MailValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[isMail]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MailValidator_1, multi: true }]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MailValidator);
    return MailValidator;
    var MailValidator_1;
}());



/***/ }),

/***/ "./src/app/domain/test_db/base/user.base.ts":
/*!**************************************************!*\
  !*** ./src/app/domain/test_db/base/user.base.ts ***!
  \**************************************************/
/*! exports provided: UserBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBase", function() { return UserBase; });
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE UserBase PLEASE EDIT ../user.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
/**
 * This is the model of User object
 *
 */
var UserBase = /** @class */ (function () {
    function UserBase() {
    }
    return UserBase;
}());



/***/ }),

/***/ "./src/app/domain/test_db/user.ts":
/*!****************************************!*\
  !*** ./src/app/domain/test_db/user.ts ***!
  \****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _base_user_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/user.base */ "./src/app/domain/test_db/base/user.base.ts");
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
 * YOU CAN OVERRIDE HERE UserBase.ts
 */
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(_id, username, token, roles) {
        var _this = _super.call(this) || this;
        _this._id = _id;
        _this.username = username;
        _this.token = token;
        _this.roles = roles;
        return _this;
    }
    // UTILS FUNCTIONS
    /**
     * Check if logged user is admin
     */
    User.prototype.isAdmin = function () {
        if (!this.roles)
            return false;
        return this.roles.indexOf('ADMIN') === 0;
    };
    /**
     * Check if logged user has one role
     */
    User.prototype.hasRole = function (role) {
        var _this = this;
        if (!this.roles)
            return false;
        if (typeof role === 'string') {
            return (this.roles.indexOf(role) !== -1);
        }
        else {
            var found = role.filter(function (rol) {
                return (_this.roles.indexOf(rol) !== -1);
            });
            return found.length > 0;
        }
    };
    return User;
}(_base_user_base__WEBPACK_IMPORTED_MODULE_0__["UserBase"]));



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This pipe allows to filter a list of items
 *
 * @example
 *  <div *ngFor="let item of list | search:{'field_1' : search1, 'field_2' : search2 }">
 *  </div>
 *
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (list, filter) {
        // if list is null or empty
        if (!list || !list.length)
            return [];
        // map objects in filter
        Object.keys(filter).map(function (fieldName) {
            // get key to search
            var key = filter[fieldName];
            if (key) {
                // filter list for esch type of filter
                list = list.filter(function (item) {
                    var field = item[fieldName];
                    // filter string
                    if (typeof field === 'string') {
                        return field.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1;
                    }
                    if (typeof field === 'boolean') {
                        if (typeof key === 'boolean')
                            return field === key;
                    }
                    if (typeof field === 'number') {
                        return field.toString().toLowerCase().indexOf(key.toString().toLocaleLowerCase()) !== -1;
                    }
                    // filter array
                    if (Array.isArray(field)) {
                        // find key in list
                        var found = field.filter(function (el) {
                            if (el.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1)
                                return el;
                        });
                        return found.length > 0;
                    }
                });
            }
        });
        return list;
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'search' })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_domain_test_db_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/domain/test_db/user */ "./src/app/domain/test_db/user.ts");
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
 * This class intercept route change and check for security
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http, authenticationService) {
        this.router = router;
        this.http = http;
        this.authenticationService = authenticationService;
    }
    /**
     * Check routes permission
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        // Get authorized roles for route
        var roles = [];
        Object.keys(route.data).forEach(function (key) { return roles.push(route.data[key]); });
        // Return observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (ob) {
            // Get logged user
            _this.authenticationService.getUser().subscribe(function (user) {
                if (!user) {
                    // Not logged
                    ob.next(false);
                    _this.router.navigate(['/login']);
                }
                else {
                    // Logged user
                    var userObj = new src_app_domain_test_db_user__WEBPACK_IMPORTED_MODULE_5__["User"](user._id, user.username, user.token, user.roles);
                    if (roles && roles.length > 0) {
                        // Check roles
                        if (userObj.hasRole(roles)) {
                            ob.next(true);
                        }
                        else {
                            ob.next(false);
                            _this.router.navigate(['/login']);
                        }
                    }
                    ob.next(true);
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/security/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/security/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This interceptor get token from sessionStorage if it is set and put the JWT token in the header Authorization var
 */
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get token
        var token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (token) {
            var cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/security/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/security/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_security_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/current-user */ "./src/app/security/current-user.ts");
/* harmony import */ var src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/services/security.service */ "./src/app/security/services/security.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
 * This service manage the Authentication
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(securityService, router) {
        this.securityService = securityService;
        this.router = router;
    }
    /**
     * Get the logged user
     */
    AuthenticationService.prototype.getUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (ob) {
            // Get JWT token from browser storage
            var token = sessionStorage.getItem('token') || localStorage.getItem('token');
            // Get user from store
            src_app_security_current_user__WEBPACK_IMPORTED_MODULE_2__["store"].currentUser$.subscribe(function (user) {
                if (token && user) {
                    // User logged and stored token
                    ob.next(user);
                }
                else if (token && !user) {
                    // If refresh page and have token but not logged user
                    // Verify token and get user
                    _this.securityService.verifyToken(token).subscribe(function (usr) {
                        if (!usr || (!usr._id && !usr.success)) {
                            ob.next(undefined);
                        }
                        else {
                            ob.next(usr);
                        }
                    });
                }
                else {
                    // Logged user
                    ob.next(user);
                }
            });
        });
    };
    /**
     * Logout function
     */
    AuthenticationService.prototype.logout = function () {
        // Clear token and remove user from local storage to log user logout
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        src_app_security_current_user__WEBPACK_IMPORTED_MODULE_2__["store"].setUser(null);
        this.router.navigate(['/login']);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_security_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/security/current-user.ts":
/*!******************************************!*\
  !*** ./src/app/security/current-user.ts ***!
  \******************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Store the current user
 */
var CurrentUser = /** @class */ (function () {
    function CurrentUser() {
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentUser$ = this.currentUserSubject.asObservable();
    }
    CurrentUser.prototype.setUser = function (user) {
        this.currentUserSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](user));
    };
    return CurrentUser;
}());
var store = new CurrentUser();


/***/ }),

/***/ "./src/app/security/services/security.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/services/security.service.ts ***!
  \*******************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
 * Manage rest API about security
 */
var SecurityService = /** @class */ (function () {
    function SecurityService(http) {
        this.http = http;
        this.contextUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint;
    }
    /**
     * Login by username and md5 password
     *
     * @param {string} username username for login
     * @param {string} password password in MD5
     * @param {boolean} remember store token in local storage
     * @returns {Observable<User>} logged user
     */
    SecurityService.prototype.login = function (username, password, remember) {
        var _this = this;
        return this.http.post(this.contextUrl + '/login', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { return _this.setSession(user.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { if (remember)
            _this.setLocal(user.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    };
    /**
     * Verify JWT token
     *
     * @param {string} token JWT token to verify
     * @returns {Observable<any>} logged user or error message
     */
    SecurityService.prototype.verifyToken = function (token) {
        return this.http.post(this.contextUrl + '/verifyToken', { token: token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user; }));
    };
    /**
     * Change password of current user
     *
     * @param {string} passwordNew New password to set in MD5
     * @param {string} passwordOld Old password to check in MD5
     * @returns {Observable<void>} Success or error
     */
    SecurityService.prototype.changePassword = function (passwordNew, passwordOld) {
        return this.http
            .post(this.contextUrl + '/changePassword', {
            passwordNew: passwordNew,
            passwordOld: passwordOld
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**
     * Set token in sessionStorage
     *
     * @private
     * @param {*} token JWT token to set in sessionStorage
     */
    SecurityService.prototype.setSession = function (token) {
        sessionStorage.setItem('token', token);
    };
    /**
     * Set token in localStorage
     *
     * @private
     * @param {*} token JWT token to set in localStorage
     */
    SecurityService.prototype.setLocal = function (token) {
        localStorage.setItem('token', token);
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/services/base/ricette.base.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/base/ricette.base.service.ts ***!
  \*******************************************************/
/*! exports provided: RicetteBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteBaseService", function() { return RicetteBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE ricetteBaseService PLEASE EDIT ../ricette.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
// DEPENDENCIES



// CONFIG

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Ricette.service.ts
 */
/*
 * SCHEMA DB Ricette
 *
    {
        Ingredienti: {
            type: 'String',
            required : true
        },
        Nome: {
            type: 'String',
            required : true
        },
        Procedimento: {
            type: 'String',
            required : true
        },
        //RELATIONS
        //EXTERNAL RELATIONS
        Posseduta: {
            type: Schema.ObjectId,
            ref : "Ricette"
        },
    }
 *
 */
var RicetteBaseService = /** @class */ (function () {
    function RicetteBaseService(http) {
        this.http = http;
        this.contextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/ricettes';
    }
    // CRUD METHODS
    /**
    * RicetteService.create
    *   @description CRUD ACTION create
    *
    */
    RicetteBaseService.prototype.create = function (item) {
        return this.http
            .post(this.contextUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * RicetteService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    RicetteBaseService.prototype.remove = function (id) {
        return this.http
            .delete(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * RicetteService.findByPosseduta
    *   @description CRUD ACTION findByPosseduta
    *   @param Objectid key Id della risorsa Posseduta da cercare
    *
    */
    RicetteBaseService.prototype.findByPosseduta = function (id) {
        return this.http
            .get(this.contextUrl + '/findByPosseduta/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }));
    };
    /**
    * RicetteService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id
    *
    */
    RicetteBaseService.prototype.get = function (id) {
        return this.http
            .get(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * RicetteService.list
    *   @description CRUD ACTION list
    *
    */
    RicetteBaseService.prototype.list = function () {
        return this.http
            .get(this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * RicetteService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    RicetteBaseService.prototype.update = function (item) {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    RicetteBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RicetteBaseService);
    return RicetteBaseService;
}());



/***/ }),

/***/ "./src/app/services/base/user.base.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/base/user.base.service.ts ***!
  \****************************************************/
/*! exports provided: UserBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBaseService", function() { return UserBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE userBaseService PLEASE EDIT ../user.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
// DEPENDENCIES



// CONFIG

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../User.service.ts
 */
/*
 * SCHEMA DB User
 *
    {
        password: {
            type: 'String',
            required : true
        },
        username: {
            type: 'String',
            required : true,
            unique : true,
        },
        //RELATIONS
        //EXTERNAL RELATIONS
        Posseduta: {
            type: Schema.ObjectId,
            ref : "Ricette"
        },
    }
 *
 */
var UserBaseService = /** @class */ (function () {
    function UserBaseService(http) {
        this.http = http;
        this.contextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/Users';
    }
    // CRUD METHODS
    /**
    * UserService.create
    *   @description CRUD ACTION create
    *
    */
    UserBaseService.prototype.create = function (item) {
        return this.http
            .post(this.contextUrl, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    UserBaseService.prototype.remove = function (id) {
        return this.http
            .delete(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.findByHa
    *   @description CRUD ACTION findByHa
    *   @param Objectid key Id della risorsa Ha da cercare
    *
    */
    UserBaseService.prototype.findByHa = function (id) {
        return this.http
            .get(this.contextUrl + '/findByHa/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }));
    };
    /**
    * UserService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id
    *
    */
    UserBaseService.prototype.get = function (id) {
        return this.http
            .get(this.contextUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.list
    *   @description CRUD ACTION list
    *
    */
    UserBaseService.prototype.list = function () {
        return this.http
            .get(this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    /**
    * UserService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    UserBaseService.prototype.update = function (item) {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    // Custom APIs
    /**
    * UserService.changePassword
    *   @description Change password of user from admin
    *   @returns object
    *
    */
    UserBaseService.prototype.changePassword = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return this.http
            .post(this.contextUrl + '/{id}/changePassword', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }));
    };
    UserBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserBaseService);
    return UserBaseService;
}());



/***/ }),

/***/ "./src/app/services/ricette.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ricette.service.ts ***!
  \*********************************************/
/*! exports provided: RicetteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicetteService", function() { return RicetteService; });
/* harmony import */ var _base_ricette_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/ricette.base.service */ "./src/app/services/base/ricette.base.service.ts");
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
// BASE SERVICE

// start documentation
/**
 * Custom APIs
 *
 */
// end documentation
/**
 * YOU CAN OVERRIDE HERE RicetteBaseService
 */
var RicetteService = /** @class */ (function (_super) {
    __extends(RicetteService, _super);
    function RicetteService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RicetteService;
}(_base_ricette_base_service__WEBPACK_IMPORTED_MODULE_0__["RicetteBaseService"]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_user_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/user.base.service */ "./src/app/services/base/user.base.service.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DEPENDENCIES



// BASE SERVICE

// start documentation
/**
 * Custom APIs
 *
 * Service.changePassword
 *	@description Change password of user from admin
 *	@returns object
 *
 */
// end documentation
/**
 * YOU CAN OVERRIDE HERE UserBaseService
 */
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    // CONSTRUCTOR
    function UserService(http) {
        return _super.call(this, http) || this;
    }
    /*
    Name: changePassword
    Description: Change password of user from admin
    Params:
        id: id of user
        passwordNew: new password in MD5
        passwordAdmin: admin password in MD5
    */
    UserService.prototype.changePassword = function (id, passwordNew, passwordAdmin) {
        return this.http
            .post(this.contextUrl + '/' + id + '/changePassword', {
            passwordNew: passwordNew,
            passwordAdmin: passwordAdmin
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}(_base_user_base_service__WEBPACK_IMPORTED_MODULE_3__["UserBaseService"]));



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__["SearchPipe"]
            ],
            exports: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__["SearchPipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endpoint: 'http://localhost:8080/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\flaquintana\Downloads\progettoTest\test\src\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map