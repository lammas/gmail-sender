(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./frontend/$$_lazy_route_resource lazy recursive":
/*!***************************************************************!*\
  !*** ./frontend/$$_lazy_route_resource lazy namespace object ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./frontend/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./frontend/app/api.service.ts":
/*!*************************************!*\
  !*** ./frontend/app/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = './api/v1';
        this.key = '';
        var key = localStorage.getItem('apiKey');
        if (key)
            this.key = key;
    }
    ApiService.prototype.getHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        if (this.key && this.key.length > 0) {
            headers = headers.set('Authorization', this.key);
        }
        return headers;
    };
    ApiService.prototype.isAuthenticated = function () {
        return !!this.key;
    };
    ApiService.prototype.setKey = function (key) {
        this.key = key;
        localStorage.setItem('apiKey', this.key);
    };
    ApiService.prototype.logout = function () {
        this.key = '';
        localStorage.removeItem('apiKey');
    };
    ApiService.prototype.get = function (url) {
        var result = this.http
            .get(this.baseUrl + "/" + url, { headers: this.getHeaders(), withCredentials: true });
        return result;
    };
    ApiService.prototype.getText = function (url) {
        var result = this.http
            .get(this.baseUrl + "/" + url, { headers: this.getHeaders(), withCredentials: true, responseType: 'text' });
        return result;
    };
    ApiService.prototype.post = function (url, body) {
        var result = this.http
            .post(this.baseUrl + "/" + url, body, { headers: this.getHeaders(), withCredentials: true });
        return result;
    };
    ApiService.prototype.put = function (url, body) {
        var result = this.http
            .put(this.baseUrl + "/" + url, body, { headers: this.getHeaders(), withCredentials: true });
        return result;
    };
    ApiService.prototype.delete = function (url) {
        var result = this.http
            .delete(this.baseUrl + "/" + url, { headers: this.getHeaders(), withCredentials: true });
        return result;
    };
    ApiService.prototype.patch = function (url, body) {
        var result = this.http
            .patch(this.baseUrl + "/" + url, body, { headers: this.getHeaders(), withCredentials: true });
        return result;
    };
    ApiService.prototype.head = function (url) {
        var result = this.http
            .head(this.baseUrl + "/" + url, { headers: this.getHeaders(), withCredentials: true });
        return result;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./frontend/app/app-routing.module.ts":
/*!********************************************!*\
  !*** ./frontend/app/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./frontend/app/dashboard/dashboard.component.ts");




var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./frontend/app/app.component.html":
/*!*****************************************!*\
  !*** ./frontend/app/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row main-menu\">\n\t\t<div class=\"col-lg\">\n\t\t</div>\n\t\t<div class=\"col-sm\">\n\t\t</div>\n\t\t<div class=\"col-xs\">\n\t\t\tGmail Sender Thing\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./frontend/app/app.component.less":
/*!*****************************************!*\
  !*** ./frontend/app/app.component.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-menu {\n  height: 100px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.main-menu a {\n  margin-right: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL24wbi9wcm9qZWN0cy9nbWFpbC1zZW5kZXIvZnJvbnRlbmQvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsImZyb250ZW5kL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRDtBRE5BO0VBUUUsaUJBQUE7QUNDRiIsImZpbGUiOiJmcm9udGVuZC9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbWVudSB7XG5cdGhlaWdodDogMTAwcHg7XG5cdHBhZGRpbmctdG9wOiAxNnB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTZweDtcblx0cGFkZGluZy1sZWZ0OiAwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDBweDtcblxuXHRhIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0fVxufVxuIiwiLm1haW4tbWVudSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5tYWluLW1lbnUgYSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./frontend/app/app.component.ts":
/*!***************************************!*\
  !*** ./frontend/app/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./frontend/app/api.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(api) {
        this.api = api;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./frontend/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./frontend/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./frontend/app/app.module.ts":
/*!************************************!*\
  !*** ./frontend/app/app.module.ts ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api.service */ "./frontend/app/api.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./frontend/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./frontend/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./frontend/app/dashboard/dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./frontend/app/footer/footer.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [
                _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./frontend/app/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./frontend/app/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<small class=\"form-text text-muted\">{{ savedAt }}</small>\n\t\t</div>\n\t\t<div class=\"col-lg\">\n\t\t\t<button\n\t\t\t\tclass=\"btn btn-outline-success float-right\"\n\t\t\t\t(click)=\"serialize()\">\n\t\t\t\tSave\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<br />\n\t<div class=\"row\">\n\t\t<div class=\"col col-md\">\n\t\t\t<h3>Template</h3>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input\n\t\t\t\t\t#templateSubject\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"templateSubject\"\n\t\t\t\t\tplaceholder=\"Subject\"\n\t\t\t\t\t[(ngModel)]=\"subject\" />\n\t\t\t</div>\n\t\t\t<div id=\"template-text\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col col-md\">\n\t\t\t<h3>Parameters</h3>\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">Variable</th>\n\t\t\t\t\t\t<th scope=\"col\">&nbsp;</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let param of params; index as i\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"param.name\" />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-danger float-right\"\n\t\t\t\t\t\t\t\t(click)=\"removeVariable(i)\">\n\t\t\t\t\t\t\t\t&times;\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<br />\n\t\t\t<h4>Add variable</h4>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input\n\t\t\t\t\t\t#variableName\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tid=\"variableName\"\n\t\t\t\t\t\tplaceholder=\"Variable name\">\n\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tclass=\"btn btn-outline-primary\"\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t(click)=\"addVariable(variableName)\">+</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<br />\n\n\t<div class=\"row\">\n\t\t<div class=\"col col-md\">\n\t\t\t<h3>Emails</h3>\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t\t<th scope=\"col\">&nbsp;</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let email of emails; index as i\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span>{{ email.email }}</span>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let param of email.params\">\n\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">\n\t\t\t\t\t\t\t\t\t\t{{ param.name }}: \"{{ param.value }}\"\n\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-danger float-right\"\n\t\t\t\t\t\t\t\t(click)=\"removeEmail(i)\">\n\t\t\t\t\t\t\t\t&times;\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<br />\n\t\t\t<h4>Add email</h4>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input\n\t\t\t\t\t#email\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"Email\" />\n\t\t\t</div>\n\t\t\t<div #emailParams>\n\t\t\t\t<div class=\"form-group\" *ngFor=\"let param of params; index as i\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tname=\"{{ param.name }}\"\n\t\t\t\t\t\tplaceholder=\"Value for {{ param.name }}\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button\n\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t[disabled]=\"email.value.length == 0\"\n\t\t\t\t\t(click)=\"addEmail(email, emailParams)\">Add</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col col-md\">\n\t\t\t<h3>Sending</h3>\n\t\t\t<small class=\"border-top form-text text-muted\">Gmail app login</small>\n\t\t\t<br />\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input\n\t\t\t\t\t#loginUser\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"user\"\n\t\t\t\t\tplaceholder=\"Gmail username\" />\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input\n\t\t\t\t\t#loginPass\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"pass\"\n\t\t\t\t\tplaceholder=\"Generated app password (not actual Gmail password)\" />\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button\n\t\t\t\t\tclass=\"btn btn-success float-right\"\n\t\t\t\t\t[disabled]=\"!canSend(loginUser, loginPass)\"\n\t\t\t\t\t(click)=\"send(loginUser, loginPass)\">\n\t\t\t\t\tSend\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<br />\n\t\t\t<br />\n\t\t\t<p>\n\t\t\t\t{{ errorMsg }}\n\t\t\t</p>\n\t\t\t<div *ngIf=\"sent.length > 0\">\n\t\t\t\t<h4>Sent to:</h4>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let email of sent\">\n\t\t\t\t\t\t{{ email }}\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"failed.length > 0\">\n\t\t\t\t<h4>Failed to send:</h4>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let email of failed\">\n\t\t\t\t\t\t{{ email }}\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./frontend/app/dashboard/dashboard.component.less":
/*!*********************************************************!*\
  !*** ./frontend/app/dashboard/dashboard.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm9udGVuZC9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./frontend/app/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./frontend/app/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./frontend/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DEFAULT_TEMPLATE = "Hello {{ name }},\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nThx, bai!\nAadu Assert\n";
var DATA_VERSION = 1;
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(api, modalService) {
        this.api = api;
        this.modalService = modalService;
        this.savedAt = '';
        this.sending = false;
        this.errorMsg = '';
        this.sent = [];
        this.failed = [];
        this.subject = '';
        this.params = [
            {
                name: 'name',
            }
        ];
        this.emails = [];
        this.templateTextEditor = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var scope;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.templateTextEditor = new window.Quill('#template-text', {
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            ['link', 'code-block']
                        ]
                    },
                    placeholder: 'Template text goes here...',
                    theme: 'snow'
                });
                this.templateTextEditor.setText(DEFAULT_TEMPLATE);
                this.deserialize();
                scope = this;
                this.autosave = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000);
                this.autosave.subscribe(function () {
                    scope.serialize();
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.addVariable = function (inputElement) {
        var name = inputElement.value.trim();
        if (name.length == 0)
            return;
        inputElement.value = '';
        for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
            var param = _a[_i];
            if (param.name == name)
                return;
        }
        this.params.push({
            name: name
        });
    };
    DashboardComponent.prototype.removeVariable = function (index) {
        this.params.splice(index, 1);
    };
    DashboardComponent.prototype.addEmail = function (inputElement, emailParams) {
        var paramElements = emailParams.querySelectorAll('input');
        var params = [];
        for (var _i = 0, paramElements_1 = paramElements; _i < paramElements_1.length; _i++) {
            var element = paramElements_1[_i];
            params.push({
                name: element.name.trim(),
                value: element.value.trim(),
            });
            element.value = '';
        }
        var email = inputElement.value.trim();
        inputElement.value = '';
        for (var _a = 0, _b = this.emails; _a < _b.length; _a++) {
            var email_1 = _b[_a];
            if (email_1.email == email_1)
                return;
        }
        this.emails.push({
            email: email,
            params: params
        });
    };
    DashboardComponent.prototype.removeEmail = function (index) {
        this.emails.splice(index, 1);
    };
    DashboardComponent.prototype.serialize = function () {
        var data = {
            version: DATA_VERSION,
            templateText: this.templateTextEditor.getContents(),
            templateHTML: this.templateTextEditor.root.innerHTML,
            subject: this.subject,
            params: this.params,
            emails: this.emails,
        };
        localStorage.setItem('state', JSON.stringify(data));
        this.savedAt = 'Autosaved at ' + (new Date());
        return data;
    };
    DashboardComponent.prototype.deserialize = function () {
        var data = localStorage.getItem('state');
        if (!data)
            return;
        data = JSON.parse(data);
        if (typeof (data.templateText) == 'object') {
            this.templateTextEditor.setContents(data.templateText);
        }
        else {
            this.templateTextEditor.setText(data.templateText);
        }
        this.subject = data.subject;
        this.params.length = 0;
        for (var _i = 0, _a = data.params; _i < _a.length; _i++) {
            var param = _a[_i];
            this.params.push(param);
        }
        this.emails.length = 0;
        for (var _b = 0, _c = data.emails; _b < _c.length; _b++) {
            var email = _c[_b];
            this.emails.push(email);
        }
        return data;
    };
    DashboardComponent.prototype.send = function (loginUser, loginPass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, result, _i, _a, email, _b, _c, email, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.errorMsg = '';
                        this.sent.length = 0;
                        this.failed.length = 0;
                        data = this.serialize();
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        this.sending = true;
                        return [4 /*yield*/, this.api.post('send', {
                                json: JSON.stringify(data),
                                username: loginUser.value.trim(),
                                password: loginPass.value.trim(),
                            }).toPromise()];
                    case 2:
                        result = _d.sent();
                        this.sent.length = 0;
                        for (_i = 0, _a = result.sent; _i < _a.length; _i++) {
                            email = _a[_i];
                            this.sent.push(email);
                        }
                        this.failed.length = 0;
                        for (_b = 0, _c = result.failed; _b < _c.length; _b++) {
                            email = _c[_b];
                            this.failed.push(email);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _d.sent();
                        console.error(err_1);
                        this.errorMsg = err_1.error;
                        return [3 /*break*/, 4];
                    case 4:
                        this.sending = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.canSend = function (loginUser, loginPass) {
        return !this.sending && loginUser.value.length > 0 && loginPass.value.length > 0;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./frontend/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./frontend/app/dashboard/dashboard.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./frontend/app/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./frontend/app/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\t&nbsp;\n</footer>\n"

/***/ }),

/***/ "./frontend/app/footer/footer.component.less":
/*!***************************************************!*\
  !*** ./frontend/app/footer/footer.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm9udGVuZC9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./frontend/app/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./frontend/app/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./frontend/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./frontend/app/footer/footer.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./frontend/environments/environment.ts":
/*!**********************************************!*\
  !*** ./frontend/environments/environment.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./frontend/main.ts":
/*!**************************!*\
  !*** ./frontend/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./frontend/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./frontend/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./frontend/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/n0n/projects/gmail-sender/frontend/main.ts */"./frontend/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map