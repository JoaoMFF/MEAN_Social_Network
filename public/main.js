(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n}\r\n\r\n.forms {\r\n    max-width: 350px;\r\n    margin: 0 auto;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.topStrip {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.topStrip h3 {\r\n    color: white;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary topStrip\">\r\n  <h3>MEAN Social Network</h3>\r\n</div>\r\n<router-outlet>\r\n  \r\n</router-outlet>"

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
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-form/register-form.component */ "./src/app/register-form/register-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");
/* harmony import */ var _register_login_register_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-login/register-login.component */ "./src/app/register-login/register-login.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"],
                _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__["RegisterFormComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"],
                _logs_logs_component__WEBPACK_IMPORTED_MODULE_10__["LogsComponent"],
                _register_login_register_login_component__WEBPACK_IMPORTED_MODULE_11__["RegisterLoginComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _register_login_register_login_component__WEBPACK_IMPORTED_MODULE_11__["RegisterLoginComponent"]
                    },
                    {
                        path: 'feed/:id_post',
                        component: _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"]
                    },
                    {
                        path: 'feed',
                        component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"]
                    },
                    {
                        path: 'logs',
                        component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_10__["LogsComponent"]
                    },
                    {
                        path: '**',
                        component: _register_login_register_login_component__WEBPACK_IMPORTED_MODULE_11__["RegisterLoginComponent"]
                    }
                ])
            ],
            providers: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postBody {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <ng-container *ngFor=\"let post of data.docs\">\n        <div class=\"card \">\n          <div class=\"card-body postBody\">\n            <h4 class=\"card-title\">{{ post.title }}</h4>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{ post.dateCreated }}</h6>\n            <p class=\"card-text\">{{ post.content }}</p>\n            <a href=\"#!\" class=\"card-link\">User: {{ post.user.name }}</a>\n            <a href=\"#!\" class=\"card-link\">Email: {{ post.user.email }}</a>\n          </div>\n        </div>\n      </ng-container>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedComponent = /** @class */ (function () {
    function FeedComponent(http) {
        this.http = http;
        this.title = 'feed';
        this.apiUrl = 'http://localhost:3000/api/post?page=1&limit=15';
        this.data = {};
        this.getPosts();
    }
    FeedComponent.prototype.getData = function () {
        var token = localStorage.getItem('token');
        return this.http.get(this.apiUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .append('Authorization', 'Bearer ' + token)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    FeedComponent.prototype.getPosts = function () {
        var _this = this;
        this.getData();
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\n  <h4>Login</h4>\n  <div class=\"form-group\">\n    <label for=\"emailLogin\">Email</label>\n    <input \n    required \n    ngModel \n    name=\"emailLogin\"\n    #emailLogin=\"ngModel\" \n    id=\"emailLogin\" \n    type=\"email\"\n    class=\"form-control\" >\n    <div class=\"alert alert-danger\" *ngIf=\"emailLogin.touched && !emailLogin.valid\">\n      <div *ngIf=\"emailLogin.errors.required\">Email is required</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwordLogin\">Password</label>\n    <input \n    required \n    ngModel \n    name=\"passwordLogin\"\n    #passwordLogin=\"ngModel\"  \n    id=\"passwordLogin\"\n    type=\"password\"\n    class=\"form-control\">\n    <div class=\"alert alert-danger\" *ngIf=\"passwordLogin.touched && !passwordLogin.valid\">\n      <div *ngIf=\"passwordLogin.errors.required\">Password is required</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div *ngIf=\"emailLogin.invalid || passwordLogin.invalid ; else button_available\">\n      <button disabled class=\"btn btn-primary\">Sign In</button>\n    </div>\n\n    <ng-template #button_available>\n      <button type=\"submit\" (click)=\"saveToken()\" class=\"btn btn-primary\">Sign Ip</button>\n    </ng-template>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'login';
        this.data = {};
    }
    LoginFormComponent.prototype.postLogin = function () {
        var emailInput = document.getElementById('emailLogin').value;
        var passInput = document.getElementById('passwordLogin').value;
        return this.http.post("http://localhost:3000/api/auth", {
            "email": emailInput,
            "password": passInput
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    LoginFormComponent.prototype.saveToken = function () {
        var _this = this;
        this.postLogin();
        this.postLogin().subscribe(function (data) {
            console.log(data);
            _this.data = data;
            localStorage.setItem('token', _this.data.token);
            _this.router.navigateByUrl('/feed');
        }, function (err) {
            console.log(err);
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/logs/logs.component.css":
/*!*****************************************!*\
  !*** ./src/app/logs/logs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin-top: 20px;\r\n}\r\n\r\n.sections {\r\n    margin-top: 40px;\r\n}"

/***/ }),

/***/ "./src/app/logs/logs.component.html":
/*!******************************************!*\
  !*** ./src/app/logs/logs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div clas=\"row\">\n    <div class=\"col-md-12\">\n      <h4>Posts</h4>\n\n      <ng-container *ngFor=\"let logs of data.logs\">\n        <div *ngIf='logs.entityType === \"POST\"'>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <p>Id: {{ logs.entity.post }}</p>\n                <p>Title: {{ logs.entity.tile }}</p>\n                <p>Content: {{ logs.entity.content }}</p>\n                <p>Date: {{ logs.date }}</p> \n              </div>\n            </div>\n        </div>\n      </ng-container>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div clas=\"row\">\n    <div class=\"col-md-12\">\n      <h4>Comments</h4>\n\n      <ng-container *ngFor=\"let logs of data.logs\">\n        <div *ngIf='logs.entityType === \"COMMENT\"'>\n          <div class=\"card\" ng-model=\"myVar\">\n            <div class=\"card-body\">\n              <p>Id: {{ logs.entity.post }}</p>\n              <p>Text: {{ logs.entity.text }}</p>\n              <p>Date: {{ logs.date }}</p>   \n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div clas=\"row\">\n    <div class=\"col-md-12\">\n      <h4>Account Details</h4>\n\n        <ng-container *ngFor=\"let logs of data.logs\">\n          <div *ngIf='logs.entityType === \"USER\"'>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <p>Name: {{ logs.entity.name }}</p>\n                <p>Email: {{ logs.entity.email }}</p>\n                <p>Date: {{ logs.date }}</p>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/logs/logs.component.ts":
/*!****************************************!*\
  !*** ./src/app/logs/logs.component.ts ***!
  \****************************************/
/*! exports provided: LogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function() { return LogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogsComponent = /** @class */ (function () {
    function LogsComponent(http) {
        this.http = http;
        this.title = 'logs';
        this.apiUrl = 'http://localhost:3000/api/user/logs';
        this.data = {};
        this.getLogs();
    }
    LogsComponent.prototype.getData = function () {
        var token = localStorage.getItem('token');
        return this.http.get(this.apiUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .append('Authorization', 'Bearer ' + token)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    LogsComponent.prototype.getLogs = function () {
        var _this = this;
        this.getData();
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    LogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logs',
            template: __webpack_require__(/*! ./logs.component.html */ "./src/app/logs/logs.component.html"),
            styles: [__webpack_require__(/*! ./logs.component.css */ "./src/app/logs/logs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  post works!\n</p>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-form/register-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-form/register-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-form/register-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h4>Register</h4>\n  <div class=\"form-group\" >\n    <label for=\"nomeRegister\">Nome</label>\n    <input  \n    required\n    ngModel \n    name=\"nomeRegister\"\n    #nomeRegister=\"ngModel\" \n    id=\"nomeRegister\"\n    type=\"text\" \n    class=\"form-control\">\n    <div class=\"alert alert-danger\" *ngIf=\"nomeRegister.touched && !nomeRegister.valid \">\n      <div *ngIf=\"nomeRegister.errors.required\">Name is required</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"emailRegister\">Email</label>\n    <input \n      required\n      ngModel \n      name=\"emailRegister\"\n      #emailRegister=\"ngModel\"\n      id=\"emailRegister\"\n      type=\"email\" \n      class=\"form-control\">\n      <div class=\"alert alert-danger\" *ngIf=\"emailRegister.touched && !emailRegister.valid \">\n        <div *ngIf=\"emailRegister.errors.required\">Email is required</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwordRegister\">Password</label>\n    <input\n      required\n      ngModel \n      name=\"passwordRegister\"\n      #passwordRegister=\"ngModel\"\n      id=\"passwordRegister\" \n      type=\"password\" \n      class=\"form-control\">\n      <div class=\"alert alert-danger\" *ngIf=\"passwordRegister.touched && !passwordRegister.valid \">\n        <div *ngIf=\"passwordRegister.errors.required\">Password is required</div>\n      </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div *ngIf=\"nomeRegister.invalid || emailRegister.invalid || passwordRegister.invalid ; else button_available\">\n      <button disabled class=\"btn btn-primary\">Sign Up</button>\n    </div>\n\n    <ng-template #button_available>\n      <button type=\"submit\" (click)=\"saveToken();\" class=\"btn btn-primary\">Sign Up</button>\n    </ng-template>\n    \n  </div>\n</form>"

/***/ }),

/***/ "./src/app/register-form/register-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-form/register-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(http) {
        this.http = http;
        this.title = 'register';
    }
    RegisterFormComponent.prototype.postRegister = function () {
        var emailInput = document.getElementById('emailRegister').value;
        var nameInput = document.getElementById('nomeRegister').value;
        var passInput = document.getElementById('passwordRegister').value;
        this.http.post("http://localhost:3000/api/auth/register", {
            "email": emailInput,
            "password": passInput,
            "name": nameInput
        }).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.css */ "./src/app/register-form/register-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/register-login/register-login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/register-login/register-login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-login/register-login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/register-login/register-login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->   \n<div class=\"container \">\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <register-form></register-form>\n      </div>\n\n      <div class=\"col-md-6\">\n        <login-form></login-form>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register-login/register-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/register-login/register-login.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLoginComponent", function() { return RegisterLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterLoginComponent = /** @class */ (function () {
    function RegisterLoginComponent() {
    }
    RegisterLoginComponent.prototype.ngOnInit = function () {
    };
    RegisterLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-login',
            template: __webpack_require__(/*! ./register-login.component.html */ "./src/app/register-login/register-login.component.html"),
            styles: [__webpack_require__(/*! ./register-login.component.css */ "./src/app/register-login/register-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLoginComponent);
    return RegisterLoginComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Joao_\Documents\Git\MEAN_Stack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map