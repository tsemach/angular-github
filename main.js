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

/***/ "./src/app/angular/angular.component.css":
/*!***********************************************!*\
  !*** ./src/app/angular/angular.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: darkslateblue;  \n}\n\n"

/***/ }),

/***/ "./src/app/angular/angular.component.html":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let cardsRow of cards\">  \n  <div class=\"row m-5\">\n    <div class=\"col-sm-4\" *ngFor=\"let card of cardsRow; let i = index\">\n      <div class=\"card m-4 m-4 text-center\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{card.title}}</h5>\n          <p class=\"card-text\">{{card.heading}}</p>      \n          <a [routerLink]=\"['/angular/project', card.project]\" href=\"#\" style=\"margin: 20px\">Explore</a>\n          <a *ngIf=\"card.tutorial\" [routerLink]=\"[card.tutorial]\" href=\"#\" style=\"margin: 20px\">Tutrial</a>\n          <!-- <img src=\"assets/img/github_log.png\" alt=\"Code\"> -->\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/angular/angular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
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

var AngularComponent = /** @class */ (function () {
    function AngularComponent() {
        this.cards = [
            [
                {
                    title: 'Observer',
                    heading: 'An example of using Observers and Subjects',
                    name: 'observers',
                    project: 'angular-observers',
                    tutorial: 'observer/tutorial'
                },
                {
                    title: 'Http Client',
                    heading: 'An example of using Observers and Subjects',
                    name: 'http-client',
                    project: 'angular-http-client'
                },
                {
                    title: 'Routing',
                    heading: 'An example of using Observers and Subjects',
                    name: 'routing',
                    project: 'angular-routing'
                }
            ],
            [
                {
                    title: 'RabbitMQ',
                    heading: 'An example of using Observers and Subjects',
                    name: 'rabbitmq',
                    project: 'angular-rabbitmq'
                },
                {
                    title: 'Services',
                    heading: 'An example of using Angular Services',
                    name: 'services',
                    project: 'angular-services'
                },
                {
                    title: 'Leaflet Mapper',
                    heading: 'An example of using Observers and Subjects',
                    name: 'leaflet-mapper',
                    project: 'angular-leaflet-mapper'
                },
            ],
            [
                {
                    title: 'Skeleton',
                    heading: 'An angular project with skeleton widgets for quick start',
                    name: 'rabbitmq',
                    project: 'angular-skeleton'
                },
            ]
        ];
    }
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular',
            template: __webpack_require__(/*! ./angular.component.html */ "./src/app/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ./angular.component.css */ "./src/app/angular/angular.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/angular/file-menu/file-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/angular/file-menu/file-menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\", sans-serif;\n}\n\n/* Fixed sidenav, full height */\n\n.sidenav {\n  height: 100%;\n  width: auto;\n  position: relative;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #eff4f5;\n  overflow-x: hidden;\n  padding-top: 15px;  \n}\n\n/* Style the sidenav links and the dropdown button */\n\n.sidenav a, .dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 14px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n\n/* On mouse-over */\n\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #8d0707;\n}\n\n/* Main content */\n\n.main {\n  margin-left: 200px; /* Same as the width of the sidenav */\n  font-size: 20px; /* Increased text to enable scrolling */\n  padding: 0px 10px;  \n}\n\n/* Add an active class to the active dropdown button */\n\n.active {\n  background-color: green;\n  color: white;\n}\n\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n\n.dropdown-container {\n  display: none;\n  /* background-color: #262626; */\n  padding-left: 8px;\n}\n\n/* Optional: Style the caret down icon */\n\n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n\n.fa-caret-up {\n  float: right;\n  padding-right: 8px;\n}\n\n"

/***/ }),

/***/ "./src/app/angular/file-menu/file-menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/angular/file-menu/file-menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <tree-view [directories]=\"directories\" [source]=\"source\"></tree-view>\n</div>\n"

/***/ }),

/***/ "./src/app/angular/file-menu/file-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/angular/file-menu/file-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: AngularFileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFileMenuComponent", function() { return AngularFileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var _services_parser_filelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/parser-filelist */ "./src/app/services/parser-filelist.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AngularFileMenuComponent = /** @class */ (function () {
    function AngularFileMenuComponent(readFileService) {
        this.readFileService = readFileService;
        this.name = '';
        this.htmlPythonFilelist = '';
        this.source = '/angular/project';
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AngularFileMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readFileService.setProject(this.name);
        this.source = '/angular/project/' + this.name;
        this.fileIsReady.subscribe(function (data) {
            _this.directories = _this.parse(data);
        });
        this.readFileService.getFile('project.list', this.fileIsReady);
        //console.log("AngularFileMenuComponent: project source = " + this.source);
    };
    AngularFileMenuComponent.prototype.parse = function (filelist) {
        var filesArray = filelist.split(/\r?\n/);
        var directories = new Array();
        var parser = new _services_parser_filelist__WEBPACK_IMPORTED_MODULE_3__["ParseProjectFiles"]();
        var basedir = parser.parse(filesArray);
        //basedir.print();
        return [basedir];
    };
    AngularFileMenuComponent.prototype.ngOnDestroy = function () {
        this.fileIsReady.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AngularFileMenuComponent.prototype, "name", void 0);
    AngularFileMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-file-menu',
            template: __webpack_require__(/*! ./file-menu.component.html */ "./src/app/angular/file-menu/file-menu.component.html"),
            styles: [__webpack_require__(/*! ./file-menu.component.css */ "./src/app/angular/file-menu/file-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["ReadFileHttpClientService"]])
    ], AngularFileMenuComponent);
    return AngularFileMenuComponent;
}());



/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vl {\n  border-left: 1px solid black;\n}\n.hl {\n  border-top: 1px solid black;\n}\n.CodeMirror {\n  /* border: 1px solid #eee; */\n  /* background-color: #615b94; */\n  background-color: rgb(45, 231, 250);    \n}\n.v-line-container {\n  display: flex;\n  margin: 17px ;\n  align-items: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.h-line-container {\n  display: flex;\n  margin: 17px ;\n  align-items: center;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.line {\n  flex-grow: 1;\n  height: 1px;\n  background: black;\n  position: relative;\n}\n.line.arrow-right:after {\n  position: absolute;\n  content: '';\n  bottom: -7px;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid black;\n}\n.line.arrow-left:after {\n  position: absolute;\n  content: '';\n  top: -7px;\n  left: 0;\n  width: 0;\n  height: 0;  \n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid black;\n}"

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary mx-4 mx-4\">Start Here</button>\n<div class=\"row m-4\">    \n  <!-- <div class=\"h-line-container\" style=\"width: 20px;\"> -->\n    <!-- <span class=\"line arrow-left\"></span> -->\n    <!-- <span class=\"line\"></span>                   -->\n    <!-- <span class=\"line arrow-right\"></span> -->\n  <!-- </div> -->\n  <div class=\"v-line-container ml-4 mt-0 mb-0\" style=\"width: 40px;\">\n      <!-- <span class=\"line arrow-left\"></span> -->\n    <span class=\"line\"></span>                  \n    <span class=\"line arrow-right\"></span> \n  </div>      \n</div>\n\n<div class=\"card-group\">  \n  <div class=\"card mx-4 mb-0 mt-0 text-left\">\n    <div class=\"card-header\"><strong>Define an observerable and Observer</strong></div> \n    <div class=\"card-body\" style=\"background-color: #eee\">\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"first_define_observable_code_1\" [config]=\"config_code\" ></codemirror> \n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"first_define_observable_code_2\" [config]=\"config_code\" ></codemirror> \n    </div>  \n  </div>\n  <div class=\"card mx-4 mb-0 mt-0 text-left\">\n    <div class=\"card-header\"><strong>What's going on?</strong></div> \n    <div class=\"card-body\" style=\"background-color: #eee\">\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"first_define_observable_explain_1\"></codemirror> \n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"first_define_observable_explain_2\"></codemirror> \n    </div>  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AngularObserverTutorialFirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularObserverTutorialFirstComponent", function() { return AngularObserverTutorialFirstComponent; });
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

var AngularObserverTutorialFirstComponent = /** @class */ (function () {
    function AngularObserverTutorialFirstComponent() {
        this.config_code = {
            lineNumbers: true,
            tabSize: 2,
            readOnly: true
        };
        this.first_define_observable_code_1 = "\n  createStringObservable() {\n    /**\n     * Create a new observerable, note the observer is the pass as aurgument.\n     * it create the data source.mb-1\n     */\n    const myObservable = Observable.create((observer: Observer<string>) => {\n      setTimeout(() => {\n        observer.next('first package');\n      }, 2000);\n      setTimeout(() => {\n        observer.next('second package');\n      }, 4000);\n\n      // you can use error OR completed method to finish the observer.\n      // NOTE: but not both of them \n      setTimeout(() => {\n        observer.error('this is not working');\n      }, 5000);      \n      setTimeout(() => {\n        observer.complete();\n    }, 6000);\n  });\n  ";
        this.first_define_observable_code_2 = "\n  /**\n   * Create the Observer (the receiver). It define 3 methods, the data, \n   * the error and the complation.\n   */\n  this.customObservableSubscription = myObservable.subscribe(\n    (data: string) => { console.log(data) },\n    (error: string) => { console.log(error) },\n    () => { console.log('completed')}\n  );\n  ";
        this.first_define_observable_explain_1 = "\n  'Observerable': Use 'Observable.create' function from 'rxjs/Observable' to \n  create an observable.\n  Note it take an Observer as it aurgument. \n  An observer is the one that subscript (listen) to data packages coming \n  from observable.\n\n  This simple example create an observable that generate string data stream \n  until it completed.\n\n  'observer.complete()' - complete the data stream. \n  this will call the complete callback on the subscriber.\n\n  'observer.error(\"this is not working\");' - this will call the error handler (callback)\n  on the subscriber (the observer).\n  ";
        this.first_define_observable_explain_2 = "\n  'Observer': this is the receiving part. It subscribe to data coming on the first method.\n  \n  Also listen to error event and completion on the second and\n  third methods.\n  ";
    }
    AngularObserverTutorialFirstComponent.prototype.ngOnInit = function () {
        // let code_len = this.first_define_observable_code_1.split('\n').length;
        // let explain_len = this.first_define_observable_explain_1.split('\n').length
        // if (code_len > explain_len) {
        //   for (let i = 0; i < code_len - explain_len; i++) {
        //     this.first_define_observable_explain_1 += '\n';
        //     console.log("add space i = " + i);
        //   }
        // }
        this.first_define_observable_explain_1 = this.adjectLines(this.first_define_observable_code_1, this.first_define_observable_explain_1);
        this.first_define_observable_explain_2 = this.adjectLines(this.first_define_observable_code_2, this.first_define_observable_explain_2);
    };
    AngularObserverTutorialFirstComponent.prototype.adjectLines = function (src, dst) {
        var code_len = src.split('\n').length;
        var explain_len = dst.split('\n').length;
        if (code_len > explain_len) {
            for (var i = 0; i < code_len - explain_len; i++) {
                dst += '\n';
            }
        }
        return dst;
    };
    AngularObserverTutorialFirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-observer-tutorial-first',
            template: __webpack_require__(/*! ./observer-tutorial-first.component.html */ "./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.html"),
            styles: [__webpack_require__(/*! ./observer-tutorial-first.component.css */ "./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularObserverTutorialFirstComponent);
    return AngularObserverTutorialFirstComponent;
}());



/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 5px;\n  padding: 0px;\n}\n\nhr {\n  border: none;\n  height: 1px;\n  color: #333;\n  background-color: #333; \n}\n\n.line-container {\n  display: flex;\n  width: 100%;\n  margin: 17px auto;\n  align-items: center;\n}\n\n.line {\n  flex-grow: 1;\n  height: 1px;\n  background: black;\n  position: relative;\n}\n\n.line.arrow-right:after {\n  position: absolute;\n  content: '';\n  bottom: -7px;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid black;\n}\n\n.line.arrow-left:after {\n  position: absolute;\n  content: '';\n  top: -7px;\n  left: 0;\n  width: 0;\n  height: 0;  \n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid black;\n}\n\nlabel {\n  margin: 0 15px;\n}"

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"card m-4 m-4 text-center\">\n      <div class=\"card-header\" style=\"background-color: transparent;\">\n        <p><strong>Decscription</strong></p>\n        Use Observers to handle Asynchronic tasks\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-5\">\n            <div class=\"card text-left\">\n              <div class=\"card-header\" style=\"background-color: rgb(148, 90, 206); color: white\">Observable</div>              \n              <div class=\"card-body\" style=\"margin-bottom: 0px\">\n                <p><strong>Observable</strong>: an Observable can be thought as a data source over a time line (stream), it follow the Observable pattern </p>\n                <p>(User Input) Events, Http Requests, Triggered in code, ... </p>\n                <p>Async task can take forever like button event click or can finish when data stream is over like http traffic.</p>                  \n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-sm-2\">\n            <div class=\"card text-center\">\n              <div class=\"card-header\" style=\"background-color: rgb(148, 90, 206); color: white\">Timeline</div>              \n              <div class=\"card-body\">   \n                  <!-- timeline                 \n                  <hr style=\"width: 100%; margin-top: 0px; margin-bottom: 20px; size: 30;\"> -->\n                <div class=\"line-container\">\n                  <!-- <span class=\"line arrow-left\"></span> -->\n                  <span class=\"line\"></span>\n                  <p>time line stream</p>\n                  <span class=\"line arrow-right\"></span>\n                </div>\n                <!-- <svg height=auto width=auto>\n                  <line x1=\"0\" y1=\"0\" x2=\"100%\" y2=\"0\" style=\"stroke:rgb(190,190,190); stroke-width: 5\" />\n                </svg>                              -->\n              </div>\n            </div>  \n          </div>\n\n          <div class=\"col-sm-5\">                \n            <div class=\"card text-left\">\n              <div class=\"card-header\" style=\"background-color: rgb(148, 90, 206); color: white\">Observer</div>              \n              <div class=\"card-body\">                  \n                <p><strong>Observer</strong>: a subcribe function, Observer has three ways of handling data.</p>                  \n                <P>Your code cab handle three types of data package it can receive</P>\n\n                <div class=\"card-group\">\n                  <div class=\"card text-center\">\n                    <div class=\"card-body\" style=\"background-color: springgreen\">\n                      <h5>Handle Data</h5> \n                    </div>\n                  </div>\n                  <div class=\"card text-center\">                      \n                    <div class=\"card-body\" style=\"background-color: tomato;\">\n                      <h5>Handle Error</h5>                                                  \n                    </div>\n                  </div>\n                  <div class=\"card text-center\">                      \n                    <div class=\"card-body\" style=\"background-color:yellowgreen\">\n                      <h5>Handle Completion</h5>\n                    </div>\n                  </div>\n                </div>  \n              </div>\n            </div>            \n          </div>\n        </div>          \n      </div>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AngularObserverTutorialHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularObserverTutorialHeaderComponent", function() { return AngularObserverTutorialHeaderComponent; });
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

var AngularObserverTutorialHeaderComponent = /** @class */ (function () {
    function AngularObserverTutorialHeaderComponent() {
    }
    AngularObserverTutorialHeaderComponent.prototype.ngOnInit = function () {
    };
    AngularObserverTutorialHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-observer-tutorial-header',
            template: __webpack_require__(/*! ./observer-tutorial-header.component.html */ "./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.html"),
            styles: [__webpack_require__(/*! ./observer-tutorial-header.component.css */ "./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularObserverTutorialHeaderComponent);
    return AngularObserverTutorialHeaderComponent;
}());



/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vl {\n  border-left: 1px solid black;\n}\n.hl {\n  border-top: 1px solid black;\n}\n.CodeMirror {\n  /* border: 1px solid #eee; */\n  /* background-color: #615b94; */\n  background-color: rgb(45, 231, 250);    \n}\n.v-line-container {\n  display: flex;\n  margin: 17px ;\n  align-items: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.h-line-container {\n  display: flex;\n  margin: 17px ;\n  align-items: center;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.line {\n  flex-grow: 1;\n  height: 1px;\n  background: black;\n  position: relative; \n}\n.line.arrow-right:after {\n  position: absolute;\n  content: '';\n  bottom: -7px;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid black;\n}\n.line.arrow-left:after {\n  position: absolute;\n  content: '';\n  top: -7px;\n  left: 0;\n  width: 0;\n  height: 0;  \n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid black;\n}"

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary mx-4 mx-4\">Subject</button>\n<div class=\"row m-4\">     \n  <div class=\"v-line-container ml-4 mt-0 mb-0\" style=\"width: 30px;\">\n    <span class=\"line\"></span>                  \n    <span class=\"line arrow-right\"></span> \n  </div>      \n</div>\n\n<div class=\"card-group\">  \n  <div class=\"card mx-4 mb-0 mt-0 text-left\">\n    <div class=\"card-header\"><strong>Using Subject</strong></div> \n    <div class=\"card-body\" style=\"background-color: #eee\">\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"second_define_subject_code_1\" [config]=\"config_code\" ></codemirror> \n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"second_define_subject_code_2\" [config]=\"config_code\" ></codemirror> \n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"second_define_subject_code_3\" [config]=\"config_code\" ></codemirror> \n    </div>  \n  </div>\n  <div class=\"card mx-4 mb-0 mt-0 text-left\">\n    <div class=\"card-header\"><strong>What's going on?</strong></div> \n    <div class=\"card-body\" style=\"background-color: #eee\">\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"second_define_subject_explain_1\"></codemirror> \n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"second_define_subject_explain_2\"></codemirror> \n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"second_define_subject_explain_3\"></codemirror> \n    </div>  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AngularObserverTutorialSecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularObserverTutorialSecondComponent", function() { return AngularObserverTutorialSecondComponent; });
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

var AngularObserverTutorialSecondComponent = /** @class */ (function () {
    function AngularObserverTutorialSecondComponent() {
        this.config_code = {
            lineNumbers: true,
            tabSize: 2,
            readOnly: true
        };
        this.second_define_subject_code_1 = "\n  import { Subject } from 'rxjs/Subject';\n\n  /**\n   * Simple service hodling the Subject. It can be \n   * any class member or any variable.\n   * /\n  export class SubjectService {\n    /**\n     * A Subject is an Observable and Observer in the same time \n     * (the one that generate the data and one that receive it)\n     */\n    subjectActivated = new Subject();\n  }\n  ";
        this.second_define_subject_code_2 = "\n  this.subjectService.subjectActivated.subscribe(\n    (id: number) => {\n      if (id === 1) {\n        this.something = true;\n      }\n      else if (id === 2) {\n        this.something = true;\n      }\n    }\n  );\n  ";
        this.second_define_subject_code_3 = "\n  /**\n   * Assume on some event you want to publish a data stream (much like previous example).\n   * 'SubjectService' is using Observer. the 'subjectActivated.next' method \n   * create a data source of \"this.id\"\n   *\n   * Now everyone to subscribe to subjectActivated of that service instance \n   * can receive the data.\n   */\n  onActivate() {    \n    this.subjectService.subjectActivated.next(this.id);\n  }\n  ";
        this.second_define_subject_explain_1 = "\n  'Subject': create by new Subject(); from 'rxjs/Subject' \n\n   Now the subject is ready to use with '.next' and '.subscribe' methods.\n  ";
        this.second_define_subject_explain_2 = "\n  'subscribe': In some other part of the code use the '.subscribe' \n  method of the subject to listen to data sending by \n  this very own subject.\n\n  'Note': this subscription is register only the data handler callback.\n  ";
        this.second_define_subject_explain_3 = "\n  'publish a data': calling to '.next' with some date send a data package\n  to every consumer who 'sit' on this subscribe, meaning some who \n  call to subscribe on this subject.\n  ";
    }
    AngularObserverTutorialSecondComponent.prototype.ngOnInit = function () {
        // let code_len = this.second_define_subject_code_1.split('\n').length;
        // let explain_len = this.second_define_subject_explain_1.split('\n').length
        // if (code_len > explain_len) {
        //   for (let i = 0; i < code_len - explain_len; i++) {
        //     this.second_define_subject_explain_1 += '\n';
        //     console.log("add space i = " + i);
        //   }
        // }
        this.second_define_subject_explain_1 = this.adjectLines(this.second_define_subject_code_1, this.second_define_subject_explain_1);
        this.second_define_subject_explain_2 = this.adjectLines(this.second_define_subject_code_2, this.second_define_subject_explain_2);
        this.second_define_subject_explain_3 = this.adjectLines(this.second_define_subject_code_3, this.second_define_subject_explain_3);
    };
    AngularObserverTutorialSecondComponent.prototype.adjectLines = function (src, dst) {
        var code_len = src.split('\n').length;
        var explain_len = dst.split('\n').length;
        if (code_len > explain_len) {
            for (var i = 0; i < code_len - explain_len; i++) {
                dst += '\n';
            }
        }
        return dst;
    };
    AngularObserverTutorialSecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-observer-tutorial-second',
            template: __webpack_require__(/*! ./observer-tutorial-second.component.html */ "./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.html"),
            styles: [__webpack_require__(/*! ./observer-tutorial-second.component.css */ "./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularObserverTutorialSecondComponent);
    return AngularObserverTutorialSecondComponent;
}());



/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vl {\n  border-left: 1px solid black;\n}\n.hl {\n  border-top: 1px solid black;\n}\n.CodeMirror {\n  /* border: 1px solid #eee; */\n  /* background-color: #615b94; */\n  background-color: rgb(45, 231, 250);    \n}\n.v-line-container {\n  display: flex;\n  margin: 17px ;\n  align-items: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.h-line-container {\n  display: flex;\n  margin: 17px ;\n  align-items: center;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.line {\n  flex-grow: 1;\n  height: 1px;\n  background: black;\n  position: relative;\n}\n.line.arrow-right:after {\n  position: absolute;\n  content: '';\n  bottom: -7px;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid black;\n}\n.line.arrow-left:after {\n  position: absolute;\n  content: '';\n  top: -7px;\n  left: 0;\n  width: 0;\n  height: 0;  \n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid black;\n}"

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-angular-observer-tutorial-header></app-angular-observer-tutorial-header>\n\n<app-angular-observer-tutorial-first></app-angular-observer-tutorial-first>\n<hr>\n<app-angular-observer-tutorial-second></app-angular-observer-tutorial-second>\n<hr>\n<!-- \n<button class=\"btn btn-primary mx-4 mx-4\">Next</button>\n<div class=\"card-group\">  \n  <div class=\"card m-4 text-left\">\n    <div class=\"card-header\"><strong>Fisrt define an observerable</strong></div> \n    <div class=\"card-body\" style=\"background-color: #eee\">\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"define_observable_code\" [config]=\"config_code\" ></codemirror> \n    </div>  \n  </div>\n  <div class=\"card m-4 text-left\">\n    <div class=\"card-header\"><strong>An Observerable Definition</strong></div> \n    <div class=\"card-body\" style=\"background-color: #eee\">\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"define_observable_explain\"></codemirror> \n    </div>  \n  </div>\n</div>\n   -->\n  \n\n"

/***/ }),

/***/ "./src/app/angular/observer-tutorial/observer-tutorial.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/angular/observer-tutorial/observer-tutorial.component.ts ***!
  \**************************************************************************/
/*! exports provided: AngularObserverTutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularObserverTutorialComponent", function() { return AngularObserverTutorialComponent; });
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

var AngularObserverTutorialComponent = /** @class */ (function () {
    function AngularObserverTutorialComponent() {
        this.config_code = {
            lineNumbers: true,
            tabSize: 2,
            readOnly: true
        };
        this.first_define_observable_code_1 = "\n  createStringObservable() {\n    /**\n     * Create a new observerable, note the observer is the pass as aurgument.\n     * it create the data source.mb-1\n     */\n    const myObservable = Observable.create((observer: Observer<string>) => {\n      setTimeout(() => {\n        observer.next('first package');\n      }, 2000);\n      setTimeout(() => {\n        observer.next('second package');\n      }, 4000);\n\n      // you can use error OR completed method to finish the observer.\n      // NOTE: but not both of them \n      setTimeout(() => {\n        observer.error('this is not working');\n      }, 5000);      \n      setTimeout(() => {\n        observer.complete();\n    }, 6000);\n  });\n  ";
        this.first_define_observable_code_2 = "\n  /**\n   * Create the Observer (the receiver). It define 3 methods, the data, \n   * the error and the complation.\n   */\n  this.customObservableSubscription = myObservable.subscribe(\n    (data: s<!-- <div class=\"vl mx-4\" style=\"height: 50px;\"></div>tring) => { console.log(data) },\n    (error: <div class=\"hl mx-4\" style=\"width: 50px\"> </div>   -->string) => { console.log(error) },\n    () => { console.log('completed')}\n  );\n  ";
        this.first_define_observable_explain_1 = "\n  Use 'Observable.create' function from 'rxjs/Observable' to \n  create an observable.\n  Note it take an Observer as it aurgument. \n  An observer is the one that subscript (listen) to data packages coming \n  from observable.\n\n  This simple example create an observable that generate string data stream \n  until it completed.\n\n  'observer.complete()' - complete the data stream. \n  this will call the complete callback on the subscriber.\n\n  'observer.error(\"this is not working\");' - this will call the error handler (callback)\n  on the subscriber (the observer).\n  ";
        this.first_define_observable_explain_2 = "\n  Observer: this is the receiving part. It subscribe to data coming on the first method.\n  Also listen to error event and completion on the second and\n  third methods.\n  ";
    }
    AngularObserverTutorialComponent.prototype.ngOnInit = function () {
        // let code_len = this.first_define_observable_code_1.split('\n').length;
        // let explain_len = this.first_define_observable_explain_1.split('\n').length
        // if (code_len > explain_len) {
        //   for (let i = 0; i < code_len - explain_len; i++) {
        //     this.first_define_observable_explain_1 += '\n';
        //     console.log("add space i = " + i);
        //   }
        // }
        this.first_define_observable_explain_1 = this.adjectLines(this.first_define_observable_code_1, this.first_define_observable_explain_1);
        this.first_define_observable_explain_2 = this.adjectLines(this.first_define_observable_code_2, this.first_define_observable_explain_2);
        // this.define_observable_explain.padEnd(
        // this.define_observable_code.split('\n').length - this.define_observable_explain.split('\n').length,
        // '\n'
        // );
    };
    AngularObserverTutorialComponent.prototype.adjectLines = function (src, dst) {
        var code_len = src.split('\n').length;
        var explain_len = dst.split('\n').length;
        if (code_len > explain_len) {
            for (var i = 0; i < code_len - explain_len; i++) {
                dst += '\n';
            }
        }
        return dst;
    };
    AngularObserverTutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-observer-tutorial',
            template: __webpack_require__(/*! ./observer-tutorial.component.html */ "./src/app/angular/observer-tutorial/observer-tutorial.component.html"),
            styles: [__webpack_require__(/*! ./observer-tutorial.component.css */ "./src/app/angular/observer-tutorial/observer-tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularObserverTutorialComponent);
    return AngularObserverTutorialComponent;
}());



/***/ }),

/***/ "./src/app/angular/project/project-name.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/angular/project/project-name.service.ts ***!
  \*********************************************************/
/*! exports provided: AngularProjectNameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularProjectNameService", function() { return AngularProjectNameService; });
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

var AngularProjectNameService = /** @class */ (function () {
    function AngularProjectNameService() {
        this._name = '';
        this.nameUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(AngularProjectNameService.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: true,
        configurable: true
    });
    AngularProjectNameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AngularProjectNameService);
    return AngularProjectNameService;
}());



/***/ }),

/***/ "./src/app/angular/project/project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/angular/project/project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: darkslateblue;  \n}\n\n.split-simple {\n  height: 100%;\n  width: 80%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  position: relative; \n}\n\nsplit-area > p {\n  padding: 15px;\n}\n\n.hr {\n  margin-top: 0px; \n  margin-bottom: 0px;\n}"

/***/ }),

/***/ "./src/app/angular/project/project.component.html":
/*!********************************************************!*\
  !*** ./src/app/angular/project/project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"split-simple\">\n  <split [direction]=\"direction\" disabled=true gutterSize=\"1\">\n\n    <split-area size=\"15\">         \n      <app-angular-file-menu [name]=\"name\"></app-angular-file-menu>\n    </split-area>\n    \n    <split-area size=\"85\" disabled=true>\n      <router-outlet></router-outlet> \n    </split-area>\n\n  </split>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/angular/project/project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/angular/project/project.component.ts ***!
  \******************************************************/
/*! exports provided: AngularProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularProjectComponent", function() { return AngularProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_parser_filelist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/parser-filelist */ "./src/app/services/parser-filelist.ts");
/* harmony import */ var _project_project_name_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project/project-name.service */ "./src/app/angular/project/project-name.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AngularProjectComponent = /** @class */ (function () {
    function AngularProjectComponent(route, readFileService, projectNameService) {
        this.route = route;
        this.readFileService = readFileService;
        this.projectNameService = projectNameService;
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.htmlProjectFilelist = '';
        this.direction = 'horizontal';
    }
    AngularProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.name = params['name'];
            _this.projectNameService.name = _this.name;
            _this.projectNameService.nameUpdated.emit(_this.name);
            _this.source = '/angular/project/' + _this.name;
            console.log("AngularProjectComponent: name = " + _this.name);
            console.log("AngularProjectComponent: source = " + _this.source);
            _this.getFile(_this.name);
        });
    };
    AngularProjectComponent.prototype.getFile = function (name) {
        var _this = this;
        this.readFileService.setProject(name);
        this.fileIsReady.subscribe(function (data) {
            //console.log("AngularProjectComponent: data = " + data);
            _this.directories = _this.parse(data);
        });
        this.readFileService.getFile('project.list', this.fileIsReady);
    };
    AngularProjectComponent.prototype.parse = function (filelist) {
        var filesArray = filelist.split(/\r?\n/);
        //let directories = new Array<Directory>();
        var parser = new _services_parser_filelist__WEBPACK_IMPORTED_MODULE_4__["ParseProjectFiles"]();
        var basedir = parser.parse(filesArray);
        return [basedir];
    };
    AngularProjectComponent.prototype.ngOnDestroy = function () {
        this.fileIsReady.unsubscribe();
    };
    AngularProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/angular/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/angular/project/project.component.css")],
            providers: [_project_project_name_service__WEBPACK_IMPORTED_MODULE_5__["AngularProjectNameService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["ReadFileHttpClientService"],
            _project_project_name_service__WEBPACK_IMPORTED_MODULE_5__["AngularProjectNameService"]])
    ], AngularProjectComponent);
    return AngularProjectComponent;
}());



/***/ }),

/***/ "./src/app/angular/viewer/viewer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/angular/viewer/viewer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n.CodeMirror {\n  /* border: 1px solid #eee; */\n  height: 92%;   \n  /* background-color: #615b94; */\n  background-color: rgb(250, 250, 250);  \n}\n\n.h3 {\n  font-family: monospace;\n  color: blue;  \n  background-color: rgb(233, 236, 241);\n}\n"

/***/ }),

/***/ "./src/app/angular/viewer/viewer.component.html":
/*!******************************************************!*\
  !*** ./src/app/angular/viewer/viewer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<split direction=\"horizontal\" gutterSize=\"5\">  \n\n  <split-area size=\"60\" style=\"background: rgb(250, 250, 250);\">\n    <hr class=\"hr\">\n    <div class=\"code\" style=\"background: rgb(250, 250, 250);\">  \n      <h3 class=\"h3\">{{filename}}</h3>\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"code\" [config]=\"config\"></codemirror>                         \n    </div>        \n  </split-area>\n            \n</split>\n\n"

/***/ }),

/***/ "./src/app/angular/viewer/viewer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/angular/viewer/viewer.component.ts ***!
  \****************************************************/
/*! exports provided: AngularViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularViewerComponent", function() { return AngularViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _project_project_name_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project/project-name.service */ "./src/app/angular/project/project-name.service.ts");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AngularViewerComponent = /** @class */ (function () {
    function AngularViewerComponent(route, projectNameService, readFileService) {
        this.route = route;
        this.projectNameService = projectNameService;
        this.readFileService = readFileService;
        this.code = '';
        this.description = '';
        this.output = '';
        this.config = {
            mode: "javascript",
            lineNumbers: true,
            theme: "eclipse",
            tabSize: 2,
            readOnly: true
        };
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AngularViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filename = this.route.snapshot.params['filename'];
        this.name = this.projectNameService.name;
        this.route.params.subscribe(function (params) {
            _this.filename = params['filename'];
            _this.getFile(_this.filename);
        });
        this.projectNameService.nameUpdated.subscribe(function (name) {
            _this.name = name;
        });
    };
    AngularViewerComponent.prototype.getFile = function (filename) {
        var _this = this;
        this.readFileService.setProject(this.name);
        this.fileIsReady.subscribe(function (data) {
            _this.code = data;
            // let code_len = this.code.split(/\r?\n/).length;
            // console.log("code_len = " + code_len);
            // if (code_len < 43) {
            //   for (let i = code_len; i < 43; i++) {
            //     this.code += "\n";
            //   }
            // }
        });
        this.readFileService.getFile(filename, this.fileIsReady);
    };
    AngularViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/angular/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/angular/viewer/viewer.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _project_project_name_service__WEBPACK_IMPORTED_MODULE_3__["AngularProjectNameService"],
            _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["ReadFileHttpClientService"]])
    ], AngularViewerComponent);
    return AngularViewerComponent;
}());



/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _python_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./python/viewer/viewer.component */ "./src/app/python/viewer/viewer.component.ts");
/* harmony import */ var _python_python_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./python/python.component */ "./src/app/python/python.component.ts");
/* harmony import */ var _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typescript/typescript.component */ "./src/app/typescript/typescript.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _angular_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular/project/project.component */ "./src/app/angular/project/project.component.ts");
/* harmony import */ var _angular_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular/viewer/viewer.component */ "./src/app/angular/viewer/viewer.component.ts");
/* harmony import */ var _angular_observer_tutorial_observer_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular/observer-tutorial/observer-tutorial.component */ "./src/app/angular/observer-tutorial/observer-tutorial.component.ts");
/* harmony import */ var _aws_aws_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aws/aws.component */ "./src/app/aws/aws.component.ts");
/* harmony import */ var _aws_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aws/viewer/viewer.component */ "./src/app/aws/viewer/viewer.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _project_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project/viewer/viewer.component */ "./src/app/project/viewer/viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', 'component': _python_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__["PythonViewerComponent"] },
    { path: 'python', 'component': _python_python_component__WEBPACK_IMPORTED_MODULE_3__["PythonComponent"], children: [
            { path: 'viewer/:filename', 'component': _python_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_2__["PythonViewerComponent"] },
        ] },
    { path: 'project/:user/:repo', 'component': _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"], children: [
            { path: 'viewer/:filename', 'component': _project_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_12__["ProjectViewerComponent"] }
        ] },
    { path: 'angular', 'component': _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__["AngularComponent"] },
    { path: 'angular/project/:name', 'component': _angular_project_project_component__WEBPACK_IMPORTED_MODULE_6__["AngularProjectComponent"] },
    { path: 'angular/project/:name', 'component': _angular_project_project_component__WEBPACK_IMPORTED_MODULE_6__["AngularProjectComponent"], children: [
            { path: ':filename', 'component': _angular_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_7__["AngularViewerComponent"] }
        ] },
    { path: 'angular/observer/tutorial', 'component': _angular_observer_tutorial_observer_tutorial_component__WEBPACK_IMPORTED_MODULE_8__["AngularObserverTutorialComponent"] },
    { path: 'typescript', 'component': _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_4__["TypeScriptComponent"] },
    { path: 'angular', 'component': _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__["AngularComponent"] },
    { path: 'aws', 'component': _aws_aws_component__WEBPACK_IMPORTED_MODULE_9__["AwsComponent"], children: [
            { path: ':id', 'component': _aws_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_10__["AwsViewerComponent"] }
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: darkslateblue;  \n}\n\n/* sp-ex-changelog h1 {\n  font-size: 24px;\n  border-bottom: 1px solid #ddd;\n  color: #777777;\n  padding-bottom: 15px;\n  margin-top: 35px;\n} */\n\n/* sp-ex-changelog h3 {\n  font-size: 20px;\n}\nsp-ex-changelog p {\n  font-size: 16px;\n} */\n\n.split-simple {\n  /* height: 700px;    */\n  outline: 7px solid #EEEEEF;\n  margin: 0px;\n\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  position: fixed;\n}\n\nsplit-area > p {\n  padding: 15px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"split-simple\">\n    <split [direction]=\"direction\" disabled=true  gutterSize=\"7\">\n        <split-area size=\"9\">\n          <app-sidebar> </app-sidebar>                \n        </split-area>\n        <split-area size=\"91\">                    \n          <router-outlet></router-outlet>\n        </split-area>\n    </split>\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import  * as yaml from 'js-yaml';
var AppComponent = /** @class */ (function () {
    // projects = `
    // projects:
    // - name: angualr-services
    //   user: tsemach
    // - name: angular-github
    //   user: tsemach  
    // `;
    function AppComponent(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        titleService.setTitle('Tsemach');
        // const projects = yaml.load(this.projects);
        //console.log("projects = " + JSON.stringify(projects, undefined, 2));
        //this.projectsService.getProjects();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/index.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/sortable/index.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/esm5/angular-split.js");
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-codemirror */ "./node_modules/ng2-codemirror/lib/index.js");
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_codemirror__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/viewer/viewer.component */ "./src/app/project/viewer/viewer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _project_topbar_navbar_brand_topbar_navbar_brand_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project/topbar-navbar-brand/topbar-navbar-brand.component */ "./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _project_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project/left-menu/left-menu.component */ "./src/app/project/left-menu/left-menu.component.ts");
/* harmony import */ var _tree_view_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tree-view/dropdown.directive */ "./src/app/tree-view/dropdown.directive.ts");
/* harmony import */ var _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./typescript/typescript.component */ "./src/app/typescript/typescript.component.ts");
/* harmony import */ var _tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tree-view/tree-view.component */ "./src/app/tree-view/tree-view.component.ts");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var _project_viewer_viewer_change_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./project/viewer/viewer-change.directive */ "./src/app/project/viewer/viewer-change.directive.ts");
/* harmony import */ var _project_description_description_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./project/description/description.component */ "./src/app/project/description/description.component.ts");
/* harmony import */ var _project_output_output_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./project/output/output.component */ "./src/app/project/output/output.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _angular_project_project_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./angular/project/project.component */ "./src/app/angular/project/project.component.ts");
/* harmony import */ var _angular_file_menu_file_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./angular/file-menu/file-menu.component */ "./src/app/angular/file-menu/file-menu.component.ts");
/* harmony import */ var _angular_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./angular/viewer/viewer.component */ "./src/app/angular/viewer/viewer.component.ts");
/* harmony import */ var _angular_observer_tutorial_observer_tutorial_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./angular/observer-tutorial/observer-tutorial.component */ "./src/app/angular/observer-tutorial/observer-tutorial.component.ts");
/* harmony import */ var _angular_observer_tutorial_observer_tutorial_header_observer_tutorial_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component */ "./src/app/angular/observer-tutorial/observer-tutorial-header/observer-tutorial-header.component.ts");
/* harmony import */ var _angular_observer_tutorial_observer_tutorial_first_observer_tutorial_first_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component */ "./src/app/angular/observer-tutorial/observer-tutorial-first/observer-tutorial-first.component.ts");
/* harmony import */ var _angular_observer_tutorial_observer_tutorial_second_observer_tutorial_second_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component */ "./src/app/angular/observer-tutorial/observer-tutorial-second/observer-tutorial-second.component.ts");
/* harmony import */ var _aws_aws_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./aws/aws.component */ "./src/app/aws/aws.component.ts");
/* harmony import */ var _aws_file_menu_file_menu_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./aws/file-menu/file-menu.component */ "./src/app/aws/file-menu/file-menu.component.ts");
/* harmony import */ var _aws_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./aws/viewer/viewer.component */ "./src/app/aws/viewer/viewer.component.ts");
/* harmony import */ var _aws_ngx_gist_ngx_gist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./aws/ngx-gist/ngx-gist.component */ "./src/app/aws/ngx-gist/ngx-gist.component.ts");
/* harmony import */ var _aws_description_description_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./aws/description/description.component */ "./src/app/aws/description/description.component.ts");
/* harmony import */ var _services_projects_config_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/projects-config.service */ "./src/app/services/projects-config.service.ts");
/* harmony import */ var angular2_markdown__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js");
/* harmony import */ var _project_topbar_nav_topbar_nav_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./project/topbar-nav/topbar-nav.component */ "./src/app/project/topbar-nav/topbar-nav.component.ts");
/* harmony import */ var _python_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./python/viewer/viewer.component */ "./src/app/python/viewer/viewer.component.ts");
/* harmony import */ var _python_python_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./python/python.component */ "./src/app/python/python.component.ts");
/* harmony import */ var _python_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./python/left-menu/left-menu.component */ "./src/app/python/left-menu/left-menu.component.ts");
/* harmony import */ var _python_description_description_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./python/description/description.component */ "./src/app/python/description/description.component.ts");
/* harmony import */ var _python_output_output_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./python/output/output.component */ "./src/app/python/output/output.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _project_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ProjectViewerComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_13__["ProjectComponent"],
                _project_topbar_navbar_brand_topbar_navbar_brand_component__WEBPACK_IMPORTED_MODULE_14__["TopbarNavbarBrandComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                _project_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_16__["ProjectLeftMenuComponent"],
                _tree_view_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["DropdownDirective"],
                _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_18__["TypeScriptComponent"],
                _tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_19__["TreeViewComponent"],
                _project_viewer_viewer_change_directive__WEBPACK_IMPORTED_MODULE_21__["ViewerChangeDirective"],
                _project_description_description_component__WEBPACK_IMPORTED_MODULE_22__["ProjectDescriptionComponent"],
                _project_output_output_component__WEBPACK_IMPORTED_MODULE_23__["ProjectOutputComponent"],
                _angular_angular_component__WEBPACK_IMPORTED_MODULE_24__["AngularComponent"],
                _angular_project_project_component__WEBPACK_IMPORTED_MODULE_25__["AngularProjectComponent"],
                _angular_file_menu_file_menu_component__WEBPACK_IMPORTED_MODULE_26__["AngularFileMenuComponent"],
                _angular_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_27__["AngularViewerComponent"],
                _angular_observer_tutorial_observer_tutorial_component__WEBPACK_IMPORTED_MODULE_28__["AngularObserverTutorialComponent"],
                _angular_observer_tutorial_observer_tutorial_header_observer_tutorial_header_component__WEBPACK_IMPORTED_MODULE_29__["AngularObserverTutorialHeaderComponent"],
                _angular_observer_tutorial_observer_tutorial_first_observer_tutorial_first_component__WEBPACK_IMPORTED_MODULE_30__["AngularObserverTutorialFirstComponent"],
                _angular_observer_tutorial_observer_tutorial_second_observer_tutorial_second_component__WEBPACK_IMPORTED_MODULE_31__["AngularObserverTutorialSecondComponent"],
                _aws_aws_component__WEBPACK_IMPORTED_MODULE_32__["AwsComponent"],
                _aws_file_menu_file_menu_component__WEBPACK_IMPORTED_MODULE_33__["AwsFileMenuComponent"],
                _aws_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_34__["AwsViewerComponent"],
                _aws_ngx_gist_ngx_gist_component__WEBPACK_IMPORTED_MODULE_35__["AwsNgxGistComponent"],
                _aws_description_description_component__WEBPACK_IMPORTED_MODULE_36__["AwsDescriptionComponent"],
                _python_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_40__["PythonViewerComponent"],
                _python_python_component__WEBPACK_IMPORTED_MODULE_41__["PythonComponent"],
                _python_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_42__["PythonLeftMenuComponent"],
                _python_description_description_component__WEBPACK_IMPORTED_MODULE_43__["PythonDescriptionComponent"],
                _python_output_output_component__WEBPACK_IMPORTED_MODULE_44__["PythonOutputComponent"],
                _project_topbar_nav_topbar_nav_component__WEBPACK_IMPORTED_MODULE_39__["ProjectTopbarNavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(),
                angular_split__WEBPACK_IMPORTED_MODULE_8__["AngularSplitModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_codemirror__WEBPACK_IMPORTED_MODULE_9__["CodemirrorModule"],
                angular2_markdown__WEBPACK_IMPORTED_MODULE_38__["MarkdownModule"].forRoot(),
            ],
            providers: [_services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_20__["ReadFileHttpClientService"], _services_projects_config_service__WEBPACK_IMPORTED_MODULE_37__["ProjectConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/aws/aws.component.css":
/*!***************************************!*\
  !*** ./src/app/aws/aws.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: darkslateblue;  \n}\n\n.split-simple {\n  height: 100%;\n  width: 80%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  position: relative; \n}\n\nsplit-area > p {\n  padding: 15px;\n}\n\n.hr {\n  margin-top: 0px; \n  margin-bottom: 0px;\n}"

/***/ }),

/***/ "./src/app/aws/aws.component.html":
/*!****************************************!*\
  !*** ./src/app/aws/aws.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"split-simple\">\n  <split [direction]=\"direction\" disabled=true gutterSize=\"1\">\n  \n    <split-area size=\"15\">         \n      <app-aws-file-menu></app-aws-file-menu>\n    </split-area>\n      \n    <split-area size=\"85\" disabled=true>\n      <router-outlet></router-outlet> \n    </split-area>\n  \n  </split>\n</div>  \n    \n"

/***/ }),

/***/ "./src/app/aws/aws.component.ts":
/*!**************************************!*\
  !*** ./src/app/aws/aws.component.ts ***!
  \**************************************/
/*! exports provided: AwsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsComponent", function() { return AwsComponent; });
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

// import { Subject } from 'rxjs/Subject';
// import { Directory } from '../services/directory';
// import { ReadFileHttpClientService } from '../services/read-file.httpclient.service';
/**
 */
var AwsComponent = /** @class */ (function () {
    function AwsComponent() {
        //fileIsReady = new Subject<string>();
        this.direction = 'horizontal';
    }
    AwsComponent.prototype.ngOnInit = function () {
        // this.readFileService.setBaseUrl("https://api.github.com");
        // this.fileIsReady.subscribe(
        //   (data: string) => {
        //     //console.log("AngularProjectComponent: data = " + data);
        //     let gists = JSON.parse(data);         
        //     console.log("AngularProjectComponent: data = " + JSON.stringify(gists, undefined, 2));
        //   }
        // );
        // this.readFileService.getFile('users/tsemach/gists', this.fileIsReady);
    };
    AwsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aws',
            template: __webpack_require__(/*! ./aws.component.html */ "./src/app/aws/aws.component.html"),
            styles: [__webpack_require__(/*! ./aws.component.css */ "./src/app/aws/aws.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwsComponent);
    return AwsComponent;
}());



/***/ }),

/***/ "./src/app/aws/description/description.component.css":
/*!***********************************************************!*\
  !*** ./src/app/aws/description/description.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aws/description/description.component.html":
/*!************************************************************!*\
  !*** ./src/app/aws/description/description.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"card border-secondary mb-3\" style=\"max-width: 600px\"> -->\n<div class=\"col col-sm-12\">\n\n<div class=\"card w-100\">\n  <div class=\"card-header\">Description</div>\n  <div class=\"card-body text-secondary\">\n    <h5 class=\"card-title\">Secondary card title</h5>\n    <pre class=\"card-text\">Some quick sdvsdvsdvsdvexample text to build on the card ti\n      tle and make up the bulk of the card's content.\n      tle and make up the bulk of the card's contensvdsfvedft. sdvsdv\n      tle and make up the bulk of the card's content.dfb \n    </pre>\n  </div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/aws/description/description.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/aws/description/description.component.ts ***!
  \**********************************************************/
/*! exports provided: AwsDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsDescriptionComponent", function() { return AwsDescriptionComponent; });
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

var AwsDescriptionComponent = /** @class */ (function () {
    function AwsDescriptionComponent() {
    }
    AwsDescriptionComponent.prototype.ngOnInit = function () {
    };
    AwsDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aws-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/aws/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/aws/description/description.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwsDescriptionComponent);
    return AwsDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/aws/file-menu/file-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/aws/file-menu/file-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\", sans-serif;\n}\n\n/* Fixed sidenav, full height */\n\n.sidenav {\n  height: 100%;\n  width: auto;\n  position: relative;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #eff4f5;\n  overflow-x: hidden;\n  padding-top: 15px;  \n}\n\n/* Style the sidenav links and the dropdown button */\n\n.sidenav a, .dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 14px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n\n/* On mouse-over */\n\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #8d0707;\n}\n\n/* Main content */\n\n.main {\n  margin-left: 200px; /* Same as the width of the sidenav */\n  font-size: 20px; /* Increased text to enable scrolling */\n  padding: 0px 10px;  \n}\n\n/* Add an active class to the active dropdown button */\n\n.active {\n  background-color: green;\n  color: white;\n}\n\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n\n.dropdown-container {\n  display: none;\n  /* background-color: #262626; */\n  padding-left: 8px;\n}\n\n/* Optional: Style the caret down icon */\n\n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n\n.fa-caret-up {\n  float: right;\n  padding-right: 8px;\n}\n\n"

/***/ }),

/***/ "./src/app/aws/file-menu/file-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/aws/file-menu/file-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidenav\">\n  <tree-view [directories]=\"directories\" [source]=\"source\"></tree-view>\n</div>\n"

/***/ }),

/***/ "./src/app/aws/file-menu/file-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/aws/file-menu/file-menu.component.ts ***!
  \******************************************************/
/*! exports provided: AwsFileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsFileMenuComponent", function() { return AwsFileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/directory */ "./src/app/services/directory.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* need to get all gists from https://api.github.com/users/tsemach/gists
* check out https://github.com/jasonhodges/ngx-gist for help about display embeded gist in angular template
*/
var AwsFileMenuComponent = /** @class */ (function () {
    function AwsFileMenuComponent(readFileService) {
        this.readFileService = readFileService;
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.source = '/aws';
    }
    AwsFileMenuComponent.prototype.ngOnInit = function () {
        // let cfdir = this.dirbase.addDirectory('CloudFormation');
        // cfdir.addFile('aws-cf-userdata-93.yml', '650757635de8b7bd2122fe706c1fc91b');
        // cfdir.addFile('aws-cf-userdata-92.yml', '1e12f52eda8a37b7ece8b120eb6a1175');
        var _this = this;
        // let s3dir = this.dirbase.addDirectory('S3');
        // s3dir.addFile('aws-cf-conditions-71.yml', 'e33af3cd1520ed3661a82a4a6361e0cf');
        // s3dir.addFile('aws-cf-userdata-91.sh', '3af2e8250358473df596b3cfddf89447');
        this.readFileService.setBaseUrl("https://api.github.com");
        this.fileIsReady.subscribe(function (data) {
            //console.log("AngularProjectComponent: data = " + data);
            var gists = JSON.parse(data);
            _this.directories = [_this.parse(gists)];
            //console.log("AwsFileMenuComponent: data = " + JSON.stringify(gists, undefined, 2));        
        });
        this.readFileService.getFile('users/tsemach/gists', this.fileIsReady);
    };
    AwsFileMenuComponent.prototype.parse = function (gists) {
        var dirbase = new _services_directory__WEBPACK_IMPORTED_MODULE_1__["Directory"]('.');
        var cfdir = dirbase.addDirectory('CloudFormation');
        var s3dir = dirbase.addDirectory('S3');
        gists.forEach(function (e) {
            var filename = Object.getOwnPropertyNames(e.files)[0];
            var fields = filename.split('-');
            if (fields[0] === 'aws' && fields[1] === 'cf') {
                console.log("AwsFileMenuComponent: cf adding filename = " + filename + ", subject = " + fields[1]);
                cfdir.addFile(filename, e.id); // let e: ElementRef;            
            }
            if (fields[0] === 'aws' && fields[1] === 's3') {
                s3dir.addFile(filename, e.id);
            }
            // console.log("AwsFileMenuComponent: data = " + JSON.stringify(e.files, undefined, 2));
        });
        dirbase.setDirectories();
        return dirbase;
    };
    AwsFileMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aws-file-menu',
            template: __webpack_require__(/*! ./file-menu.component.html */ "./src/app/aws/file-menu/file-menu.component.html"),
            styles: [__webpack_require__(/*! ./file-menu.component.css */ "./src/app/aws/file-menu/file-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["ReadFileHttpClientService"]])
    ], AwsFileMenuComponent);
    return AwsFileMenuComponent;
}());

// {
//   "url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b",
//   "forks_url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b/forks",
//   "commits_url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b/commits",
//   "id": "650757635de8b7bd2122fe706c1fc91b",
//   "node_id": "MDQ6R2lzdDY1MDc1NzYzNWRlOGI3YmQyMTIyZmU3MDZjMWZjOTFi",
//   "git_pull_url": "https://gist.github.com/650757635de8b7bd2122fe706c1fc91b.git",
//   "git_push_url": "https://gist.github.com/650757635de8b7bd2122fe706c1fc91b.git",
//   "html_url": "https://gist.github.com/650757635de8b7bd2122fe706c1fc91b",
//   "files": {
//     "aws-cf-userdata-93.yml": {
//       "filename": "aws-cf-userdata-93.yml",
//       "type": "text/x-yaml",
//       "language": "YAML",
//       "raw_url": "https://gist.githubusercontent.com/tsemach/650757635de8b7bd2122fe706c1fc91b/raw/971f34535c11f8771d8fe8027a0730044025fe19/aws-cf-userdata-93.yml",
//       "size": 1775
//     }
//   },
//   "public": true,
//   "created_at": "2018-07-21T14:06:20Z",
//   "updated_at": "2018-07-21T18:19:16Z",
//   "description": "AWS - CF - USERDATA - create instance with installed packages using CloudFormation:Init",
//   "comments": 0,
//   "user": null,
//   "comments_url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b/comments",
//   "owner": {
//     "login": "tsemach",
//     "id": 11224584,
//     "node_id": "MDQ6VXNlcjExMjI0NTg0",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/11224584?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/tsemach",
//     "html_url": "https://github.com/tsemach",
//     "followers_url": "https://api.github.com/users/tsemach/followers",
//     "following_url": "https://api.github.com/users/tsemach/following{/other_user}",
//     "gists_url": "https://api.github.com/users/tsemach/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/tsemach/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/tsemach/subscriptions",
//     "organizations_url": "https://api.github.com/users/tsemach/orgs",
//     "repos_url": "https://api.github.com/users/tsemach/repos",
//     "events_url": "https://api.github.com/users/tsemach/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/tsemach/received_events",
//     "type": "User",
//     "site_admin": false
//   },
//   "truncated": false
// },


/***/ }),

/***/ "./src/app/aws/ngx-gist/ngx-gist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/aws/ngx-gist/ngx-gist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aws/ngx-gist/ngx-gist.component.html":
/*!******************************************************!*\
  !*** ./src/app/aws/ngx-gist/ngx-gist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div #script style.display=\"none\">\n  <ng-content></ng-content>\n</div> -->\n\n <iframe #iframe type=\"text/javascript\" width=\"100%\" frameborder=\"0\" style = \"height: inherit\"></iframe>\n  "

/***/ }),

/***/ "./src/app/aws/ngx-gist/ngx-gist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/aws/ngx-gist/ngx-gist.component.ts ***!
  \****************************************************/
/*! exports provided: AwsNgxGistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsNgxGistComponent", function() { return AwsNgxGistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, SecurityContext } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// /**
//  * from: https://stackoverflow.com/questions/42458346/need-to-insert-script-tag-in-angular-2
//  * 
//  * <app-aws-scripthack src="https://gist.github.com/tsemach/650757635de8b7bd2122fe706c1fc91b.js" type="text/javascript"></app-aws-scripthack> 
//  */
// @Component({
//   selector: 'app-aws-scripthack',
//   templateUrl: './scripthack.component.html',
//   styleUrls: ['./scripthack.component.css']
// })
// export class AwsScriptHackComponent implements OnInit, AfterViewInit {
//   @Input() src: string;
//   @Input() type: string;
//   @ViewChild('script') script: ElementRef;
//   constructor(private sanitizer: DomSanitizer) {
//   }
//   ngOnInit() {    
//   }
//   convertToScript() {    
//     let element = this.script.nativeElement;
//     let script = document.createElement("script");
//     script.type = this.type ? this.type : "text/javascript";
//     if (this.src) {
//       script.src = this.src;
//     }
//     if (element.innerHTML) {
//       script.innerHTML = element.innerHTML;
//     }
//     let parent = element.parentElement;
//     parent.parentElement.replaceChild(script, parent);
//   }
//   ngAfterViewInit() {
//     this.convertToScript();
//   }
// }

var AwsNgxGistComponent = /** @class */ (function () {
    function AwsNgxGistComponent() {
    }
    AwsNgxGistComponent.prototype.ngOnChanges = function () {
        var fileName = (this.file) ? this.file : '';
        this.iframe.nativeElement.id = 'gist-' + this.gistId;
        var doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        var content = "\n        <html>\n        <head>\n          <base target=\"_parent\">\n        </head>\n        <body onload=\"parent.document.getElementById('" + this.iframe.nativeElement.id + "')\">\n        <script type=\"text/javascript\" src=\"https://gist.github.com/" + this.gistId + ".js?file=" + fileName + "\"></script>\n        </body>\n      </html>\n    ";
        doc.open();
        doc.write(content);
        doc.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AwsNgxGistComponent.prototype, "iframe", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AwsNgxGistComponent.prototype, "gistId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AwsNgxGistComponent.prototype, "file", void 0);
    AwsNgxGistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aws-ngx-gist',
            template: __webpack_require__(/*! ./ngx-gist.component.html */ "./src/app/aws/ngx-gist/ngx-gist.component.html"),
            styles: [__webpack_require__(/*! ./ngx-gist.component.css */ "./src/app/aws/ngx-gist/ngx-gist.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], AwsNgxGistComponent);
    return AwsNgxGistComponent;
}());



/***/ }),

/***/ "./src/app/aws/viewer/viewer.component.css":
/*!*************************************************!*\
  !*** ./src/app/aws/viewer/viewer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aws-ngx-gist {\n  height: 98%;\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/aws/viewer/viewer.component.html":
/*!**************************************************!*\
  !*** ./src/app/aws/viewer/viewer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\" style=\"height: 100%;\">\n  <div class=\"col-md-9\">\n    <aws-ngx-gist #ngxgist [gistId]=\"'tsemach/' + gistId\"></aws-ngx-gist>\n  </div>  \n  <div class=\"col-md-3 pt-2\">\n    <app-aws-description></app-aws-description>\n  </div>\n</div>\n\n\n\n<!-- <split direction=\"horizontal\" gutterSize=\"5\">  \n\n    <split-area size=\"70\">\n\n     <div class=\"row\" style=\"height: 100%;\">\n  \n    <aws-ngx-gist #ngxgist [gistId]=\"'tsemach/' + gistId\"></aws-ngx-gist>\n  \n</div>\n      \n          \n\n    </split-area>\n        \n    <split-area size=\"30\">\n              <app-aws-description></app-aws-description>\n          \n            \n    </split-area>\n    \n  </split>\n   -->"

/***/ }),

/***/ "./src/app/aws/viewer/viewer.component.ts":
/*!************************************************!*\
  !*** ./src/app/aws/viewer/viewer.component.ts ***!
  \************************************************/
/*! exports provided: AwsViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsViewerComponent", function() { return AwsViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AwsViewerComponent = /** @class */ (function () {
    function AwsViewerComponent(route) {
        this.route = route;
    }
    AwsViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gistId = this.route.snapshot.params['id'];
        this.route.params.subscribe(function (params) {
            _this.gistId = params['id'];
            console.log("AwsViewerComponent: id = " + _this.gistId);
            console.log("AwsViewerComponent: filename = " + _this.filename);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ngxgist'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AwsViewerComponent.prototype, "ngxgist", void 0);
    AwsViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/aws/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/aws/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AwsViewerComponent);
    return AwsViewerComponent;
}());



/***/ }),

/***/ "./src/app/project/description/description.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project/description/description.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div {\n  margin-top: 0px;\n  height: 100%;   \n  overflow: hidden;\n  background: lavender;\n}\n\n.h4 {\n  margin-top: 7px;\n  margin-bottom: 4px;\n  font-family: monospace;\n  color: blue;\n}\n\n.pre {\n  overflow: hidden;   \n  margin-top: 0px; \n  height: 100%;\n  /* background: lavender; */\n  float: left; \n}\n\n"

/***/ }),

/***/ "./src/app/project/description/description.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project/description/description.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div style=\"margin-top: 0px; height: 88%; \" >  -->\n<!-- <div class=\"div\"> \n  <h4 class=\"h4\">Decscription Python-View</h4>  \n  <pre  class=\"pre\">{{description}}</pre>\n</div>  -->\n\n<div class=\"card border-bottom-0\">\n  <div class=\"card-header\"><strong>Decscription</strong></div>\n  <div class=\"card-body\">\n    <pre  class=\"pre\">{{description}}</pre>\n    <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6> -->\n    <!-- <p class=\"card-text\">{{ description }}</p> -->\n    <a *ngIf=\"from.length > 0\" href=\"{{from}}\" class=\"card-link\">resource</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/project/description/description.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project/description/description.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDescriptionComponent", function() { return ProjectDescriptionComponent; });
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

var ProjectDescriptionComponent = /** @class */ (function () {
    function ProjectDescriptionComponent() {
        this.description = '';
        this.from = '';
    }
    ProjectDescriptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectDescriptionComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectDescriptionComponent.prototype, "from", void 0);
    ProjectDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-viewer-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/project/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/project/description/description.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectDescriptionComponent);
    return ProjectDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/project/left-menu/left-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/project/left-menu/left-menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\", sans-serif;\n}\n\n/* Fixed sidenav, full height */\n\n.sidenav {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #eff4f5;\n  overflow-x: hidden;\n  padding-top: 15px;  \n}\n\n/* Style the sidenav links and the dropdown button */\n\n.sidenav a, .dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 14px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n\n/* On mouse-over */\n\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #8d0707;\n}\n\n/* Main content */\n\n.main {\n  margin-left: 200px; /* Same as the width of the sidenav */\n  font-size: 20px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n\n/* Add an active class to the active dropdown button */\n\n.active {\n  background-color: green;\n  color: white;\n}\n\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n\n.dropdown-container {\n  display: none;\n  /* background-color: #262626; */\n  padding-left: 8px;\n}\n\n/* Optional: Style the caret down icon */\n\n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n\n.fa-caret-up {\n  float: right;\n  padding-right: 8px;\n}\n\n/* Some media queries for responsiveness */\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/project/left-menu/left-menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/project/left-menu/left-menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <tree-view [directories]=\"directories\" [source]=\"source\"></tree-view>\n</div>"

/***/ }),

/***/ "./src/app/project/left-menu/left-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/project/left-menu/left-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectLeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectLeftMenuComponent", function() { return ProjectLeftMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var _services_parser_filelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/parser-filelist */ "./src/app/services/parser-filelist.ts");
/* harmony import */ var _services_projects_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/projects-config.service */ "./src/app/services/projects-config.service.ts");
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
 * GitHub API:
 * -) getting all content of the root: https://api.github.com/repos/tsemach/angular-monitor/contents/
 * -) getting content of file: https://api.github.com/repos/tsemach/docker/contents/tutorial/rabbitmq/rabbitmq.run
 *    then follow the download_url property.
 */
var ProjectLeftMenuComponent = /** @class */ (function () {
    function ProjectLeftMenuComponent(readFileService, projectConfigService) {
        this.readFileService = readFileService;
        this.projectConfigService = projectConfigService;
        this.htmlProjectFilelist = '';
        this.source = 'viewer';
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isProjectReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ProjectLeftMenuComponent.prototype.ngOnInit = function () {
        //-------------------------------------------------------------------------------------------------------------------
        this.loadProjectList();
        //-------------------------------------------------------------------------------------------------------------------
    };
    ProjectLeftMenuComponent.prototype.loadProjectList = function () {
        var _this = this;
        this.readFileService.setProject(this.projectConfigService.current.repo);
        this.fileIsReady.subscribe(function (data) {
            _this.directories = _this.parse(data);
        });
        this.readFileService.getFile('project.list', this.fileIsReady);
    };
    ProjectLeftMenuComponent.prototype.parse = function (filelist) {
        var filesArray = filelist.split(/\r?\n/);
        var directories = new Array();
        var parser = new _services_parser_filelist__WEBPACK_IMPORTED_MODULE_3__["ParseProjectFiles"]();
        var basedir = parser.parse(filesArray);
        return [basedir];
    };
    // loadProjectListOld() {
    //   console.log("LeftMenu: user = " + this.projectService.current.user + ", repo = " + this.projectService.current.repo);
    //   let filelist = new Array<string>();
    //   let dirlist = new Array<string>();
    //   this.isProjectReady.subscribe(
    //     (data: Array<string>) => {
    //       let list = '';
    //       data.forEach((e) => {          
    //         if (e !== '') { list += e + '\n'; } 
    //       });
    //       this.directories = this.parse(list);                
    //       //console.log('LeftMenu: dirrectories = ' + JSON.stringify(this.directories, undefined, 2));
    //     }
    //   )
    //   this.projectService.getProjectList(filelist, dirlist, this.isProjectReady);
    // }
    // parse(filelist) {    
    //   let filesArray = filelist.split(/\r?\n/);
    //   let parser = new ParseProjectFiles();
    //   let basedir = parser.parse(filesArray); 
    //   return [basedir]; 
    // }
    ProjectLeftMenuComponent.prototype.ngOnDestroy = function () {
        this.fileIsReady.unsubscribe();
        this.isProjectReady.unsubscribe();
    };
    ProjectLeftMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-left-menu',
            template: __webpack_require__(/*! ./left-menu.component.html */ "./src/app/project/left-menu/left-menu.component.html"),
            styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/project/left-menu/left-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["ReadFileHttpClientService"],
            _services_projects_config_service__WEBPACK_IMPORTED_MODULE_4__["ProjectConfigService"]])
    ], ProjectLeftMenuComponent);
    return ProjectLeftMenuComponent;
}());

// let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
// let summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
// let pics = new Directory('Pictures',[summer2014,fall2014],[]);
// let music = new Directory('Music',[],['song1.mp3','song2.mp3']);
// this.directories = [pics,music];    
// let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
// let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
// let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
// this.directories = [pyexamples]; 
// console.log("directories = " + JSON.stringify(this.directories, undefined, 2));


/***/ }),

/***/ "./src/app/project/output/output.component.css":
/*!*****************************************************!*\
  !*** ./src/app/project/output/output.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pre {\n  overflow-x: hidden;   \n  margin-top: 0px; \n  height: 100%;\n}\n\n.h4 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n  font-family: monospace;\n  color: blue;\n}\n\n::-moz-selection {\n  color: red;\n  background: rgb(184, 184, 196);\n}\n\n::selection {\n  color: red;\n  background: rgb(184, 184, 196);\n}"

/***/ }),

/***/ "./src/app/project/output/output.component.html":
/*!******************************************************!*\
  !*** ./src/app/project/output/output.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card border-bottom-0\" style=\"margin-top: 0px;\">\n  <div class=\"card-header\"><strong>Output</strong></div>\n  <div class=\"card-body\">    \n    <pre  class=\"pre\">{{output}}</pre>\n  </div>\n</div>\n\n  "

/***/ }),

/***/ "./src/app/project/output/output.component.ts":
/*!****************************************************!*\
  !*** ./src/app/project/output/output.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOutputComponent", function() { return ProjectOutputComponent; });
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

var ProjectOutputComponent = /** @class */ (function () {
    function ProjectOutputComponent() {
        this.output = '';
    }
    ProjectOutputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectOutputComponent.prototype, "output", void 0);
    ProjectOutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-viewer-output',
            template: __webpack_require__(/*! ./output.component.html */ "./src/app/project/output/output.component.html"),
            styles: [__webpack_require__(/*! ./output.component.css */ "./src/app/project/output/output.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectOutputComponent);
    return ProjectOutputComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<split [direction]=\"direction\" disabled=false gutterSize=\"5\">\n  <split-area size=\"12\">         \n    <app-project-left-menu></app-project-left-menu>\n  </split-area>\n\n  <split-area size=\"88\" disabled=true>\n    <app-project-topbar-nav></app-project-topbar-nav>  \n    <router-outlet></router-outlet>     \n  </split-area>\n\n</split>\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_projects_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/projects-config.service */ "./src/app/services/projects-config.service.ts");
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./left-menu/left-menu.component */ "./src/app/project/left-menu/left-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, projectConfigService) {
        this.route = route;
        this.projectConfigService = projectConfigService;
        this.direction = 'horizontal';
    }
    ProjectComponent.prototype.ngOnInit = function () {
        // this.projectService.setUser(this.route.params['user']);
        // this.projectService.setRepo(this.route.params['repo']);
        // this.projectService.setUser('tsemach');
        // this.projectService.setRepo('angular-monitor');
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("ProjectComponent:init: user=" + params['user']);
            console.log("ProjectComponent:init: repo=" + params['repo']);
            _this.projectConfigService.setUser(params['user']);
            _this.projectConfigService.setRepo(params['repo']);
            _this.leftMenu.loadProjectList();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_3__["ProjectLeftMenuComponent"]),
        __metadata("design:type", _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_3__["ProjectLeftMenuComponent"])
    ], ProjectComponent.prototype, "leftMenu", void 0);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_projects_config_service__WEBPACK_IMPORTED_MODULE_2__["ProjectConfigService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/topbar-nav/topbar-nav.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project/topbar-nav/topbar-nav.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/topbar-nav/topbar-nav.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project/topbar-nav/topbar-nav.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav \">\n  <li class=\"nav-item active\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['tunnel']\">View</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['histogram']\">Details</a>\n  </li>\n  <li class=\"nav-item dropdown\" dropdown>\n    <a class=\"nav-link dropdown-toggle\" dropdownToggle>Examples <span class=\"caret\"></span></a>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li *ngFor=\"let ex of examples\" [class.active]=\"router.isActive(ex.path, true)\">\n        <a class=\"dropdown-item\" [routerLink]=\"ex.path\" [innerHTML]=\"transform(ex.label)\"></a>\n      </li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/project/topbar-nav/topbar-nav.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project/topbar-nav/topbar-nav.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectTopbarNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTopbarNavComponent", function() { return ProjectTopbarNavComponent; });
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

var ProjectTopbarNavComponent = /** @class */ (function () {
    function ProjectTopbarNavComponent() {
    }
    ProjectTopbarNavComponent.prototype.ngOnInit = function () {
    };
    ProjectTopbarNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-topbar-nav',
            template: __webpack_require__(/*! ./topbar-nav.component.html */ "./src/app/project/topbar-nav/topbar-nav.component.html"),
            styles: [__webpack_require__(/*! ./topbar-nav.component.css */ "./src/app/project/topbar-nav/topbar-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectTopbarNavComponent);
    return ProjectTopbarNavComponent;
}());



/***/ }),

/***/ "./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\na.navbar-brand,\na.navbar-brand:hover {\n  font-weight: bold;\n  color: #ffc421;  \n}\n    \nli > a {\n  cursor: pointer;\n}\n    \nul.dropdown-menu > li > a:active,\nul.dropdown-menu > li.active > a {\n  background-color: #eeeeee;\n  cursor: default;\n  color: #000000;\n}\n    \n.navbar-toggler {\n  float: right;\n  margin-right: 120px;\n}\n    \n@media (max-width: 992px) {\n  .container-fluid {\n    padding-left: 0;\n  }\n  a.navbar-brand {\n    margin-right: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a class=\"navbar-brand\" href=\"#\">Angular Monitor</a>\n\n<button class=\"navbar-toggler hidden-lg-up\" \n    (click)=\"isCollapsed = !isCollapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n</button> \n\n<div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n  <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\" [class.active]=\"router.isActive('/', true)\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"router.isActive('/changelog', true)\">\n          <a class=\"nav-link\" routerLink=\"/changelog\">Tunnel</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"router.isActive('/documentation', true)\">\n          <a class=\"nav-link\" routerLink=\"/documentation\">Histogram</a>\n      </li>\n      <li class=\"nav-item dropdown\" dropdown>\n          <a class=\"nav-link dropdown-toggle\" dropdownToggle>Examples <span class=\"caret\"></span></a>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngFor=\"let ex of examples\" [class.active]=\"router.isActive(ex.path, true)\">\n                  <a class=\"dropdown-item\" [routerLink]=\"ex.path\" [innerHTML]=\"transform(ex.label)\"></a>\n              </li>\n          </ul>\n      </li>\n  </ul>\n</div> -->\n\n<a class=\"navbar-brand\">Angular GitHub</a>\n\n<button class=\"navbar-toggler hidden-lg-up\" \n    (click)=\"isCollapsed = !isCollapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n</button> \n\n<div class=\"collapse navbar-collapse\"  [collapse]=\"isCollapsed\">\n  <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\" [class.active]=\"router.isActive('/', true)\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"router.isActive('/changelog', true)\">\n          <a class=\"nav-link\" routerLink=\"/changelog\">Tunnel</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"router.isActive('/documentation', true)\">\n          <a class=\"nav-link\" routerLink=\"/documentation\">Histogram</a>\n      </li>\n      <li class=\"nav-item dropdown\" dropdown>\n          <a class=\"nav-link dropdown-toggle\" dropdownToggle>Examples <span class=\"caret\"></span></a>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li *ngFor=\"let ex of examples\" [class.active]=\"router.isActive(ex.path, true)\">\n                  <a class=\"dropdown-item\" [routerLink]=\"ex.path\" [innerHTML]=\"transform(ex.label)\"></a>\n              </li>\n          </ul>\n      </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.ts ***!
  \******************************************************************************/
/*! exports provided: TopbarNavbarBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarNavbarBrandComponent", function() { return TopbarNavbarBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopbarNavbarBrandComponent = /** @class */ (function () {
    function TopbarNavbarBrandComponent(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.isCollapsed = true;
        // this.router.events.filter(e => e instanceof NavigationStart).subscribe(event => {
        //   this.isCollapsed = true;
        // });
    }
    TopbarNavbarBrandComponent.prototype.ngOnInit = function () {
    };
    TopbarNavbarBrandComponent.prototype.transform = function (label) {
        return this.sanitizer.bypassSecurityTrustHtml(label);
    };
    TopbarNavbarBrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar-navbar-brand',
            template: __webpack_require__(/*! ./topbar-navbar-brand.component.html */ "./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.html"),
            styles: [__webpack_require__(/*! ./topbar-navbar-brand.component.css */ "./src/app/project/topbar-navbar-brand/topbar-navbar-brand.component.css")],
            host: {
                'class': 'navbar navbar-expand-lg fixed-top navbar-dark bg-dark'
            },
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TopbarNavbarBrandComponent);
    return TopbarNavbarBrandComponent;
}());



/***/ }),

/***/ "./src/app/project/viewer/project-code-parser.ts":
/*!*******************************************************!*\
  !*** ./src/app/project/viewer/project-code-parser.ts ***!
  \*******************************************************/
/*! exports provided: ProjectCodeParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCodeParser", function() { return ProjectCodeParser; });
var ProjectCodeParser = /** @class */ (function () {
    function ProjectCodeParser() {
        this._code = '';
        this._description = '';
        this._output = '';
        this._from = '';
    }
    Object.defineProperty(ProjectCodeParser.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (_description) {
            this._description = _description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCodeParser.prototype, "output", {
        get: function () {
            return this._output;
        },
        set: function (_output) {
            this._output = _output;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCodeParser.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (_code) {
            this._code = _code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCodeParser.prototype, "from", {
        get: function () {
            return this._from;
        },
        enumerable: true,
        configurable: true
    });
    ProjectCodeParser.prototype.toString = function (a) {
        var s = '';
        a.forEach(function (e) {
            if (s.length > 0) {
                s = s + '\n';
            }
            s = s + e;
        });
        return s;
    };
    ProjectCodeParser.prototype.parse = function (_code) {
        var _this = this;
        var state = 1;
        var code = '';
        this._from = '';
        var a = _code.split('\n');
        var descriptionArray = new Array();
        var outputArray = new Array();
        var codeArray = new Array();
        // a.forEach(e => {
        //   console.log("line is: " + e);      
        // });
        a.forEach(function (e) {
            switch (state) {
                case 1:
                    _this._description = '';
                    if (e.includes('<description>')) {
                        state = 2;
                        break;
                    }
                    codeArray.push(e);
                    break;
                case 2:
                    if (e.includes('</description>')) {
                        state = 4;
                        break;
                    }
                    if (e.includes('from: ')) {
                        console.log("PARSE: found from: " + e.split(' ')[1]);
                        _this._from = e.split(' ')[1];
                    }
                    descriptionArray.push(e);
                    codeArray.push(e);
                    break;
                case 4:
                    _this._output = '';
                    if (e.includes('<output>')) {
                        state = 5;
                    }
                    break;
                case 5:
                    if (e.includes('</output>')) {
                        state = 7;
                        break;
                    }
                    console.log("in output e  = " + e);
                    outputArray.push(e);
                    break;
                case 7:
                    codeArray.push(e);
                    break;
            }
        });
        this.code = this.toString(codeArray);
        this.description = this.toString(descriptionArray);
        this.output = this.toString(outputArray);
        return this._code;
    };
    return ProjectCodeParser;
}());

// console.log("python code parser");
// let code = `\
// /* 
//  * <description> 
//  * begine desc dsdvsdvs
//  * sdvsdv
//  * SHARED_FORM_DIRECTIVESvs
//  * end of descripo 
//  * </description> 
//  * 
//  * <output> 
//  * outpur 1 
//  * ouptput 3
//  * 
//  * </output> 
//  let p = 10;
//  function a)()
//  {dv
// sdv
// sv
// s}
//  * 
// `;
// let p = new ProjectCodeParser();
// let c = p.parse(code);
// console.log("code = " + c);


/***/ }),

/***/ "./src/app/project/viewer/viewer-change.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/project/viewer/viewer-change.directive.ts ***!
  \***********************************************************/
/*! exports provided: ViewerChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerChangeDirective", function() { return ViewerChangeDirective; });
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

var ViewerChangeDirective = /** @class */ (function () {
    function ViewerChangeDirective(eRef) {
        this.eRef = eRef;
    }
    ViewerChangeDirective.prototype.ngOnChanges = function () {
        console.log('ViewerChangeDirective: test');
    };
    ViewerChangeDirective.prototype.onInput = function (value) {
        console.log(value);
    };
    ViewerChangeDirective.prototype.onMouseOver = function () {
        this.size = '500px, 600px';
        console.log("mouseover");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.size'),
        __metadata("design:type", String)
    ], ViewerChangeDirective.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ViewerChangeDirective.prototype, "ngOnChanges", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("input", ["$event.target.value"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewerChangeDirective.prototype, "onInput", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ViewerChangeDirective.prototype, "onMouseOver", null);
    ViewerChangeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appViewerChange]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ViewerChangeDirective);
    return ViewerChangeDirective;
}());



/***/ }),

/***/ "./src/app/project/viewer/viewer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/project/viewer/viewer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.code {\n  height: 98%;\n  width: 100%; \n}\n\n.h4 {\n  margin-left: 33px;\n  font-family: monospace;\n  color: blue;\n  margin-top: 7px;\n  margin-bottom: 7px;\n\n}\n\na {\n  color: darkslateblue;    \n}\n\n.hr {\n  margin-top: 0px; \n  margin-bottom: 0px;  \n}"

/***/ }),

/***/ "./src/app/project/viewer/viewer.component.html":
/*!******************************************************!*\
  !*** ./src/app/project/viewer/viewer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<split direction=\"horizontal\" gutterSize=\"5\">  \n\n  <split-area size=\"60\" style=\"background: #d9d9d9;\">\n\n    <hr class=\"hr\">\n    <div class=\"code\">  \n      <h4 class=\"h4\">({{projectConfigService.current.repo}}) {{filename}}</h4>\n      <!-- <markdown>{{code}} </markdown> -->       \n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"code\" [config]=\"config\"></codemirror>                               \n    </div>        \n  </split-area>\n      \n  <split-area size=\"40\">\n    <hr class=\"hr\">\n    <split  direction=\"vertical\" gutterSize=\"5\">\n      <hr class=\"hr\">\n        \n        <split direction=\"vertical\" gutterSize=\"5\">  \n            <split-area size=\"45\">\n              <app-project-viewer-description [description]=\"description\" [from]=\"from\"></app-project-viewer-description>      \n            </split-area>\n            <split-area size=\"55\">\n                <app-project-viewer-output [output]=\"output\"></app-project-viewer-output>\n            </split-area>\n        </split>  \n\n\n    </split>\n  </split-area>\n  \n</split>\n"

/***/ }),

/***/ "./src/app/project/viewer/viewer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/project/viewer/viewer.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewerComponent", function() { return ProjectViewerComponent; });
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var _project_code_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-code-parser */ "./src/app/project/viewer/project-code-parser.ts");
/* harmony import */ var _services_projects_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/projects-config.service */ "./src/app/services/projects-config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ProjectService } from '../../services/projects.service';



/**
 * checkout https://stackoverflow.com/questions/36467020/codemirror-as-angular2-component
 */
var ProjectViewerComponent = /** @class */ (function () {
    function ProjectViewerComponent(route, projectConfigService, readFileService) {
        this.route = route;
        this.projectConfigService = projectConfigService;
        this.readFileService = readFileService;
        this.code = '';
        this.description = '';
        this.output = '';
        this.from = '';
        this.parser = new _project_code_parser__WEBPACK_IMPORTED_MODULE_5__["ProjectCodeParser"]();
        this.isMD = false;
        this.config = {
            mode: "python",
            lineNumbers: true,
            theme: "eclipse",
            tabSize: 2,
            readOnly: true
        };
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ProjectViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filename = this.route.snapshot.params['filename'];
        this.isMD = this.filename.endsWith('.md');
        this.route.params.subscribe(function (params) {
            console.log("ProjectViewerComponent: file = " + params['filename']);
            _this.filename = params['filename'];
            _this.getFile(_this.filename);
        });
    };
    ProjectViewerComponent.prototype.getFile = function (filename) {
        //this.readFileService.setProject('pyexamples');
        var _this = this;
        this.fileIsReady.subscribe(function (data) {
            _this.code = _this.parser.parse(data);
            _this.description = _this.parser.description;
            _this.output = _this.parser.output;
            _this.from = _this.parser.from;
        });
        this.readFileService.getFile(filename, this.fileIsReady);
    };
    ProjectViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/project/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/project/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_projects_config_service__WEBPACK_IMPORTED_MODULE_6__["ProjectConfigService"],
            _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["ReadFileHttpClientService"]])
    ], ProjectViewerComponent);
    return ProjectViewerComponent;
}());



/***/ }),

/***/ "./src/app/python/description/description.component.css":
/*!**************************************************************!*\
  !*** ./src/app/python/description/description.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div {\n  margin-top: 0px;\n  height: 100%;   \n  overflow: hidden;\n  background: lavender;\n}\n\n.h4 {\n  margin-top: 7px;\n  margin-bottom: 4px;\n  font-family: monospace;\n  color: blue;\n}\n\n.pre {\n  overflow: hidden;   \n  margin-top: 0px; \n  height: 100%;\n  /* background: lavender; */\n  float: left; \n}\n\n"

/***/ }),

/***/ "./src/app/python/description/description.component.html":
/*!***************************************************************!*\
  !*** ./src/app/python/description/description.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div style=\"margin-top: 0px; height: 88%; \" >  -->\n<!-- <div class=\"div\"> \n  <h4 class=\"h4\">Decscription Python-View</h4>  \n  <pre  class=\"pre\">{{description}}</pre>\n</div>  -->\n\n<div class=\"card border-bottom-0\">\n  <div class=\"card-header\"><strong>Decscription</strong></div>\n  <div class=\"card-body\">\n    <pre  class=\"pre\">{{description}}</pre>\n    <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6> -->\n    <!-- <p class=\"card-text\">{{ description }}</p> -->\n    <a *ngIf=\"from.length > 0\" href=\"{{from}}\" class=\"card-link\">resource</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/python/description/description.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/python/description/description.component.ts ***!
  \*************************************************************/
/*! exports provided: PythonDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonDescriptionComponent", function() { return PythonDescriptionComponent; });
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

var PythonDescriptionComponent = /** @class */ (function () {
    function PythonDescriptionComponent() {
        this.description = '';
        this.from = '';
    }
    PythonDescriptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PythonDescriptionComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PythonDescriptionComponent.prototype, "from", void 0);
    PythonDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-python-viewer-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/python/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/python/description/description.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PythonDescriptionComponent);
    return PythonDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/python/left-menu/left-menu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/python/left-menu/left-menu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\", sans-serif;\n}\n\n/* Fixed sidenav, full height */\n\n.sidenav {\n  height: 100%;\n  width: auto;\n  position: relative;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #eff4f5;\n  overflow-x: hidden;\n  padding-top: 15px;  \n}\n\n/* Style the sidenav links and the dropdown button */\n\n.sidenav a, .dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 14px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n\n/* On mouse-over */\n\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #8d0707;\n}\n\n/* Main content */\n\n.main {\n  margin-left: 200px; /* Same as the width of the sidenav */\n  font-size: 20px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n\n/* Add an active class to the active dropdown button */\n\n.active {\n  background-color: green;\n  color: white;\n}\n\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n\n.dropdown-container {\n  display: none;\n  /* background-color: #262626; */\n  padding-left: 8px;\n}\n\n/* Optional: Style the caret down icon */\n\n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n\n.fa-caret-up {\n  float: right;\n  padding-right: 8px;\n}\n\n/* Some media queries for responsiveness */\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/python/left-menu/left-menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/python/left-menu/left-menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <tree-view [directories]=\"directories\" [source]=\"source\"></tree-view>\n</div>"

/***/ }),

/***/ "./src/app/python/left-menu/left-menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/python/left-menu/left-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: PythonLeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonLeftMenuComponent", function() { return PythonLeftMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var _services_parser_filelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/parser-filelist */ "./src/app/services/parser-filelist.ts");
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
 * example of file URL: https://raw.githubusercontent.com/tsemach/pyexamples/master/pyexamples.list
 */
var PythonLeftMenuComponent = /** @class */ (function () {
    function PythonLeftMenuComponent(readFileService) {
        // let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
        // let summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
        // let pics = new Directory('Pictures',[summer2014,fall2014],[]);
        // let music = new Directory('Music',[],['song1.mp3','song2.mp3']);
        // this.directories = [pics,music];    
        this.readFileService = readFileService;
        this.htmlPythonFilelist = '';
        this.source = '/python/viewer';
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
        // let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
        // let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
        // this.directories = [pyexamples]; 
        // console.log("directories = " + JSON.stringify(this.directories, undefined, 2));
    }
    PythonLeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // path is: https://raw.githubusercontent.com/tsemach/pyexamples/master/pyexamples.list
        this.readFileService.setProject('pyexamples');
        this.fileIsReady.subscribe(function (data) {
            _this.directories = _this.parse(data);
        });
        this.readFileService.getFile('pyexamples.list', this.fileIsReady);
    };
    PythonLeftMenuComponent.prototype.parse = function (filelist) {
        var filesArray = filelist.split(/\r?\n/);
        var directories = new Array();
        var parser = new _services_parser_filelist__WEBPACK_IMPORTED_MODULE_3__["ParseProjectFiles"]();
        var basedir = parser.parse(filesArray);
        return [basedir.directories[0]];
    };
    PythonLeftMenuComponent.prototype.ngOnDestroy = function () {
        this.fileIsReady.unsubscribe();
    };
    PythonLeftMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-python-left-menu',
            template: __webpack_require__(/*! ./left-menu.component.html */ "./src/app/python/left-menu/left-menu.component.html"),
            styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/python/left-menu/left-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["ReadFileHttpClientService"]])
    ], PythonLeftMenuComponent);
    return PythonLeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/python/output/output.component.css":
/*!****************************************************!*\
  !*** ./src/app/python/output/output.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pre {\n  overflow-x: hidden;   \n  margin-top: 0px; \n  height: 100%;\n}\n\n.h4 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n  font-family: monospace;\n  color: blue;\n}\n\n::-moz-selection {\n  color: red;\n  background: rgb(184, 184, 196);\n}\n\n::selection {\n  color: red;\n  background: rgb(184, 184, 196);\n}"

/***/ }),

/***/ "./src/app/python/output/output.component.html":
/*!*****************************************************!*\
  !*** ./src/app/python/output/output.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card border-bottom-0\" style=\"margin-top: 0px;\">\n  <div class=\"card-header\"><strong>Output</strong></div>\n  <div class=\"card-body\">    \n    <pre  class=\"pre\">{{output}}</pre>\n  </div>\n</div>\n\n  "

/***/ }),

/***/ "./src/app/python/output/output.component.ts":
/*!***************************************************!*\
  !*** ./src/app/python/output/output.component.ts ***!
  \***************************************************/
/*! exports provided: PythonOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonOutputComponent", function() { return PythonOutputComponent; });
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

var PythonOutputComponent = /** @class */ (function () {
    function PythonOutputComponent() {
        this.output = '';
    }
    PythonOutputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PythonOutputComponent.prototype, "output", void 0);
    PythonOutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-python-viewer-output',
            template: __webpack_require__(/*! ./output.component.html */ "./src/app/python/output/output.component.html"),
            styles: [__webpack_require__(/*! ./output.component.css */ "./src/app/python/output/output.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PythonOutputComponent);
    return PythonOutputComponent;
}());



/***/ }),

/***/ "./src/app/python/python.component.css":
/*!*********************************************!*\
  !*** ./src/app/python/python.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: darkslateblue;  \n}\n\n.split-simple {\n  /* outline: 7px solid #EEEEEF; */\n  /* margin: 10px; */\n\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  position: relative; \n}\n\nsplit-area > p {\n  padding: 15px;\n}\n\n.python-main {\n  height: 100%; \n  /* background: black; */\n}\n\n.python-right {\n  height: 100%; \n  margin-bottom: 0%;\n  padding-top: 0%;\n  /* background: aqua;   */\n}\n\n.python-right-top {\n  height: 100%; \n  margin: 0%;\n  padding: 0%;\n  /* background: aqua; */\n}\n\n.python-right-bottom {\n  height: 100%; \n  margin: 0%;\n  padding: 0%;\n  background: blueviolet;\n}\n\n.hr {\n  margin-top: 0px; \n  margin-bottom: 0px;\n}"

/***/ }),

/***/ "./src/app/python/python.component.html":
/*!**********************************************!*\
  !*** ./src/app/python/python.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- There are two ways of creating the routes\n  1) by using topbar component\n  2) by using routeLink property with bootstrap nav\n  3) programmatic by using Route service \n-->\n\n<!-- Option 1) using topbar component -->\n<!-- <app-topbar-navbar-brand></app-topbar-navbar-brand> -->\n\n<!-- Option 2) using nav and call to routeLink -->\n<!-- <ul class=\"nav \">\n  <li class=\"nav-item active\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['tunnel']\">Tunnel</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['histogram']\">Histogram</a>\n  </li>\n  <li class=\"nav-item dropdown\" dropdown>\n      <a class=\"nav-link dropdown-toggle\" dropdownToggle>Examples <span class=\"caret\"></span></a>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n          <li *ngFor=\"let ex of examples\" [class.active]=\"router.isActive(ex.path, true)\">\n              <a class=\"dropdown-item\" [routerLink]=\"ex.path\" [innerHTML]=\"transform(ex.label)\"></a>\n          </li>\n      </ul>\n  </li>\n</ul> -->\n\n<div class=\"split-simple\">\n  <split [direction]=\"direction\" disabled=true gutterSize=\"1\">\n    <split-area size=\"12\">         \n      <app-python-left-menu></app-python-left-menu>\n    </split-area>\n    <split-area size=\"88\" disabled=true>\n      <!-- <app-python-topbar-nav></app-python-topbar-nav>   -->\n      <router-outlet></router-outlet> \n    </split-area>\n  </split>\n</div>\n"

/***/ }),

/***/ "./src/app/python/python.component.ts":
/*!********************************************!*\
  !*** ./src/app/python/python.component.ts ***!
  \********************************************/
/*! exports provided: PythonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonComponent", function() { return PythonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PythonComponent = /** @class */ (function () {
    function PythonComponent(router, route) {
        this.router = router;
        this.route = route;
        this.code = '';
        this.direction = 'horizontal';
    }
    PythonComponent.prototype.ngOnInit = function () {
    };
    PythonComponent.prototype.onClickTunnel = function () {
        this.router.navigate(['tunnel'], { relativeTo: this.route });
    };
    PythonComponent.prototype.onClickHistogram = function () {
        this.router.navigate(['histogram'], { relativeTo: this.route });
    };
    PythonComponent.prototype.onCode = function (event) {
        console.log("Python onCode = ");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PythonComponent.prototype, "code", void 0);
    PythonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-python',
            template: __webpack_require__(/*! ./python.component.html */ "./src/app/python/python.component.html"),
            styles: [__webpack_require__(/*! ./python.component.css */ "./src/app/python/python.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PythonComponent);
    return PythonComponent;
}());



/***/ }),

/***/ "./src/app/python/viewer/python-code-parser.ts":
/*!*****************************************************!*\
  !*** ./src/app/python/viewer/python-code-parser.ts ***!
  \*****************************************************/
/*! exports provided: PythonCodeParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonCodeParser", function() { return PythonCodeParser; });
var PythonCodeParser = /** @class */ (function () {
    function PythonCodeParser() {
        this._code = '';
        this._description = '';
        this._output = '';
        this._from = '';
    }
    Object.defineProperty(PythonCodeParser.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (_description) {
            this._description = _description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PythonCodeParser.prototype, "output", {
        get: function () {
            return this._output;
        },
        set: function (_output) {
            this._output = _output;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PythonCodeParser.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (_code) {
            this._code = _code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PythonCodeParser.prototype, "from", {
        get: function () {
            return this._from;
        },
        enumerable: true,
        configurable: true
    });
    PythonCodeParser.prototype.toString = function (a) {
        var s = '';
        a.forEach(function (e) {
            if (s.length > 0) {
                s = s + '\n';
            }
            s = s + e;
        });
        return s;
    };
    PythonCodeParser.prototype.parse = function (_code) {
        var _this = this;
        var state = 1;
        var code = '';
        this._from = '';
        var a = _code.split('\n');
        var descriptionArray = new Array();
        var outputArray = new Array();
        var codeArray = new Array();
        // a.forEach(e => {
        //   console.log("line is: " + e);      
        // });
        a.forEach(function (e) {
            switch (state) {
                case 1:
                    _this._description = '';
                    if (e.includes('<description>')) {
                        state = 2;
                        break;
                    }
                    codeArray.push(e);
                    break;
                case 2:
                    if (e.includes('</description>')) {
                        state = 4;
                        break;
                    }
                    if (e.includes('from: ')) {
                        console.log("PARSE: found from: " + e.split(' ')[1]);
                        _this._from = e.split(' ')[1];
                    }
                    descriptionArray.push(e);
                    codeArray.push(e);
                    break;
                case 4:
                    _this._output = '';
                    if (e.includes('<output>')) {
                        state = 5;
                    }
                    break;
                case 5:
                    if (e.includes('</output>')) {
                        state = 7;
                        break;
                    }
                    console.log("in output e  = " + e);
                    outputArray.push(e);
                    break;
                case 7:
                    codeArray.push(e);
                    break;
            }
        });
        this.code = this.toString(codeArray);
        this.description = this.toString(descriptionArray);
        this.output = this.toString(outputArray);
        return this._code;
    };
    return PythonCodeParser;
}());

// console.log("python code parser");
// let code = `\
// /* 
//  * <description> 
//  * begine desc dsdvsdvs
//  * sdvsdv
//  * SHARED_FORM_DIRECTIVESvs
//  * end of descripo 
//  * </description> 
//  * 
//  * <output> 
//  * outpur 1 
//  * ouptput 3
//  * 
//  * </output> 
//  let p = 10;
//  function a)()
//  {dv
// sdv
// sv
// s}
//  * 
// `;
// let p = new PythonCodeParser();
// let c = p.parse(code);
// console.log("code = " + c);


/***/ }),

/***/ "./src/app/python/viewer/viewer.component.css":
/*!****************************************************!*\
  !*** ./src/app/python/viewer/viewer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* see https://bl.ocks.org/jcla1/2938024 */\n\n.CodeMirror {\n  /* border: 1px solid #eee; */\n  height: 92%; \n  /* background-color: #615b94;  */\n  background-color: rgb(240, 247, 248);  \n \n}\n\n.h4 {\n  margin-left: 33px;\n  font-family: monospace;\n  color: blue;\n}\n\n/* .CodeMirror-lines {\n  padding: 4px 0; \n}\n.CodeMirror pre {\n  padding: 0 4px; \n} */\n\n.code {\n  height: 98%;\n  width: 100%; \n}\n\n.h4 {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\na {\n  color: darkslateblue;    \n}\n\n.python-main {\n  height: 100%;   \n  /* background: black; */\n}\n\n.python-right {\n  height: 100%; \n  margin-bottom: 0%;\n  padding-top: 0%;\n  overflow: hidden;\n  /* background: aqua;   */\n}\n\n.python-right-top {\n  height: 100%; \n  margin: 0%;\n  padding: 0%;   \n}\n\n.python-right-bottom {\n  height: 100%; \n  margin: 0%;\n  padding: 0%;\n }\n\n.hr {\n  margin-top: 0px; \n  margin-bottom: 0px;  \n}"

/***/ }),

/***/ "./src/app/python/viewer/viewer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/python/viewer/viewer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"code\">  \n  <u><h4 class=\"h4\">File: {{filename}}</h4></u>  \n  <codemirror class=\"CodeMirror\" [(ngModel)]=\"code\" [config]=\"config\"></codemirror>   \n</div> -->\n\n<split direction=\"horizontal\" gutterSize=\"5\" class=\"python-main\">  \n\n  <split-area size=\"60\" style=\"background: #d9d9d9;\">\n\n    <hr class=\"hr\">\n    <div class=\"code\">  \n      <h4 class=\"h4\">{{filename}}</h4>\n      <codemirror class=\"CodeMirror\" [(ngModel)]=\"code\" [config]=\"config\"></codemirror>                         \n    </div>        \n  </split-area>\n      \n  <split-area size=\"40\" class=\"python-right\">\n    <hr class=\"hr\">\n    <split class=\"split-right\" direction=\"vertical\" gutterSize=\"5\">\n      <hr class=\"hr\">\n\n        <!-- <app-python-viewer-description [description]=\"description\" [from]=\"from\"></app-python-viewer-description>      \n        <app-python-viewer-output [output]=\"output\"></app-python-viewer-output>       -->\n\n\n        <split direction=\"vertical\" gutterSize=\"5\" class=\"python-main\">  \n            <split-area size=\"45\" class=\"python-right\">\n              <app-python-viewer-description [description]=\"description\" [from]=\"from\"></app-python-viewer-description>      \n            </split-area>\n            <split-area size=\"55\" class=\"python-right\">\n                <app-python-viewer-output [output]=\"output\"></app-python-viewer-output>                       \n            </split-area>\n        </split>  \n\n\n    </split>\n  </split-area>\n  \n</split>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/python/viewer/viewer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/python/viewer/viewer.component.ts ***!
  \***************************************************/
/*! exports provided: PythonViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonViewerComponent", function() { return PythonViewerComponent; });
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var _python_code_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./python-code-parser */ "./src/app/python/viewer/python-code-parser.ts");
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
 * checkout https://stackoverflow.com/questions/36467020/codemirror-as-angular2-component
 */
var PythonViewerComponent = /** @class */ (function () {
    function PythonViewerComponent(route, readFileService) {
        this.route = route;
        this.readFileService = readFileService;
        this.code = '';
        this.description = '';
        this.output = '';
        this.from = '';
        this.parser = new _python_code_parser__WEBPACK_IMPORTED_MODULE_5__["PythonCodeParser"]();
        this.config = {
            mode: "python",
            lineNumbers: true,
            theme: "eclipse",
            tabSize: 2,
            readOnly: true
        };
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PythonViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filename = this.route.snapshot.params['filename'];
        this.route.params.subscribe(function (params) {
            //console.log("PythonViewerComponent: file = " + params['filename']);
            _this.filename = params['filename'];
            _this.getFile(_this.filename);
        });
    };
    PythonViewerComponent.prototype.getFile = function (filename) {
        var _this = this;
        this.readFileService.setProject('pyexamples');
        this.fileIsReady.subscribe(function (data) {
            _this.code = _this.parser.parse(data);
            _this.description = _this.parser.description;
            _this.output = _this.parser.output;
            _this.from = _this.parser.from;
        });
        this.readFileService.getFile(filename, this.fileIsReady);
    };
    PythonViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-python-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/python/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/python/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["ReadFileHttpClientService"]])
    ], PythonViewerComponent);
    return PythonViewerComponent;
}());



/***/ }),

/***/ "./src/app/services/directory.ts":
/*!***************************************!*\
  !*** ./src/app/services/directory.ts ***!
  \***************************************/
/*! exports provided: Directory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
var Directory = /** @class */ (function () {
    function Directory(name, fullpath) {
        this.dirmap = new Map();
        this.files = new Array();
        this.ids = new Map();
        this.fullpath = '';
        this.name = name;
        if (fullpath === undefined || fullpath === '.') {
            this.fullpath = name;
        }
        else {
            this.fullpath = fullpath + '/' + name;
        }
    }
    Directory.prototype.getGetDirMap = function () {
        return this.dirmap;
    };
    Directory.prototype.setDirectories = function () {
        var _this = this;
        this.directories = new Array();
        this.dirmap.forEach(function (sub, dir) {
            _this.directories.push(sub);
            sub.setDirectories();
        });
    };
    Directory.prototype.addDirectory = function (name) {
        if (this.dirmap.get(name)) {
            return this.dirmap.get(name);
        }
        this.dirmap.set(name, new Directory(name, this.fullpath));
        return this.getDirectory(name);
    };
    Directory.prototype.getDirectory = function (name) {
        if (this.dirmap.get(name) === undefined) {
            throw new Error("unable to find directory '" + name + "' in '" + this.name + "'");
        }
        return this.dirmap.get(name);
    };
    Directory.prototype.addFile = function (name, id) {
        if (id !== undefined) {
            this.ids.set(name, id);
            console.log("directory: setting file " + name + " with id = " + id);
            console.log("directory: setting file " + name + " with id = " + this.getId(name));
        }
        //console.log("Directory:addFile: this.name = <" + this.name + ">, name = " + name);
        this.files.push(name);
    };
    Directory.prototype.getId = function (name) {
        var id = this.ids.get(name);
        return id !== undefined ? id : "undefined";
    };
    Directory.prototype.print = function (tabs) {
        if (tabs === void 0) { tabs = ''; }
        if (this.name !== '.') {
            console.log(tabs + this.name + ":");
        }
        if (this.name !== '.') {
            tabs = tabs + "\t";
        }
        for (var f in this.files) {
            if (this.files[f].length > 0) {
                console.log(tabs + this.files[f]);
            }
        }
        this.dirmap.forEach(function (value, key) {
            value.print(tabs);
        });
        // for (let i in this.directories) {
        //   console.log("directories: " + this.name + ", dir = " + this.directories[i]);
        // }
    };
    return Directory;
}());



/***/ }),

/***/ "./src/app/services/parser-filelist.ts":
/*!*********************************************!*\
  !*** ./src/app/services/parser-filelist.ts ***!
  \*********************************************/
/*! exports provided: ParseProjectFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseProjectFiles", function() { return ParseProjectFiles; });
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory */ "./src/app/services/directory.ts");

/**
pyexamples/objects/attribute_02.py
pyexamples/objects/attribute_05.py
pyexamples/metaclasses/singelton_01.py
pyexamples/metaclasses/singelton_02.py
pyexamples/decorators/property_03.py
pyexamples/decorators/descriptor_02..py

Output is
  let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
  let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
  let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
  this.directories = [pyexamples];
 */
var ParseProjectFiles = /** @class */ (function () {
    function ParseProjectFiles() {
        this.dirbase = new _directory__WEBPACK_IMPORTED_MODULE_0__["Directory"]('.');
    }
    ParseProjectFiles.prototype.getDirBase = function () {
        return this.dirbase;
    };
    ParseProjectFiles.prototype.parseFilePath = function (filepath, directory) {
        var name = filepath.shift();
        //console.log("parseFilePath: name = " + name + ", filepath = " + filepath);
        // check if end of the recusive 
        if (filepath.length === 0) {
            //console.log("parseFilePath: name = " + name + ", filepath = " + filepath);
            directory.addFile(name);
            return;
        }
        var subdir = directory.addDirectory(name);
        this.parseFilePath(filepath, subdir);
    };
    ParseProjectFiles.prototype.parse = function (filelist) {
        var _this = this;
        filelist.forEach(function (path) {
            if (path.length > 0) {
                //console.log("going to parse: " + path);
                _this.parseFilePath(path.split('/'), _this.dirbase);
            }
        });
        this.dirbase.setDirectories();
        //this.dirbase.print();
        return this.dirbase;
    };
    ParseProjectFiles.prototype.print = function () {
        this.dirbase.print();
    };
    return ParseProjectFiles;
}());

// let pyexamples = new Directory('pyexamples');
// pyexamples.addDirectory('decorators');
// pyexamples.addDirectory('metaclasses');
// let decorators = pyexamples.getDirectory('decorators');
// decorators.addFile('decorator_01.py');
// decorators.addFile('decorator_02.py');
// let metaclasses = pyexamples.getDirectory('metaclasses');
// metaclasses.addFile('metaclasses_01.py');
// metaclasses.addFile('metaclasses_02.py');
// let parser = new ParseProjectFiles();
// parser.parse(filelist);
// //parser.print();
// // let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
// // let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
// // let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
// //let directories = pyexamples; 
// console.log("pyexamples = " + JSON.stringify(pyexamples, undefined, 2));
// console.log(JSON.stringify(pyexamples.getDirectory('decorators'), undefined, 2));
// console.log(JSON.stringify(pyexamples.getDirectory('metaclasses'), undefined, 2));
// pyexamples.dirmap.forEach(d => {
//   console.log(`${d.name} = ${JSON.stringify(d.files)}`);
// });
// console.log(JSON.stringify(pyexamples.dirmap.values(), undefined, 2));


/***/ }),

/***/ "./src/app/services/project-repository.interface.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/project-repository.interface.ts ***!
  \**********************************************************/
/*! exports provided: ProjectRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRepository", function() { return ProjectRepository; });
var ProjectRepository = /** @class */ (function () {
    function ProjectRepository() {
    }
    return ProjectRepository;
}());



/***/ }),

/***/ "./src/app/services/projects-config.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/projects-config.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectConfigService", function() { return ProjectConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _project_repository_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-repository.interface */ "./src/app/services/project-repository.interface.ts");
/* harmony import */ var _read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./read-file.httpclient.service */ "./src/app/services/read-file.httpclient.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectConfigService = /** @class */ (function () {
    function ProjectConfigService(readFileService) {
        this.readFileService = readFileService;
        /**
         * load: list | direct | gist
         *   list: use project.list file in the repository same as pyexamples.
         *   direct: load direct using gitHub api
         *   gist: load from gist
         */
        this.projectsYaml = "\n    projects:\n    - repo: docker\n      user: tsemach\n      load: direct\n    - repo: angular-http-client\n      user: tsemach\n      load: list\n    - repo: angular-observers\n      user: tsemach\n      load: list\n    - repo: typescript-txjs\n      user: tsemach\n      load: list\n    - repo: javascript-rxjs\n      user: tsemach\n      load: list\n    - repo: angular-rabbitmq\n      user: tsemach\n      load: list  \n    - repo: angular-github\n      user: tsemach\n      load: list  \n    - repo: angular-skeleton\n      user: tsemach\n      load: list  \n    - repo: pyexamples\n      user: tsemach  \n      load: list\n  ";
        this.current = new _project_repository_interface__WEBPACK_IMPORTED_MODULE_2__["ProjectRepository"]();
        this.projects = {};
        this.fileIsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // set default projects as defined here
        this.projects = js_yaml__WEBPACK_IMPORTED_MODULE_5__["load"](this.projectsYaml);
        // try loading 'projects.yml' from github
        // this.readFileService.setProject(environment.config.repository, environment.user);
        // this.getFile('projects.yml');
    }
    ProjectConfigService.prototype.setUser = function (user) {
        this.current.user = user;
        this.current.path = '';
        this.current.base = "https://api.github.com/repos/" + this.current.user + "/" + this.current.repo + "/contents";
    };
    ProjectConfigService.prototype.setRepo = function (repo) {
        this.current.repo = repo;
        this.current.path = '';
        this.current.base = "https://api.github.com/repos/" + this.current.user + "/" + this.current.repo + "/contents";
    };
    ProjectConfigService.prototype.setCurrent = function (current) {
        this.current = current;
        this.current.path = '';
        this.current.base = "https://api.github.com/repos/" + this.current.user + "/" + this.current.repo + "/contents";
    };
    ProjectConfigService.prototype.getProjects = function () {
        return this.projects;
    };
    ProjectConfigService.prototype.loadProjects = function (isProjectsReady) {
        // set default projects as defined here
        this.projects = js_yaml__WEBPACK_IMPORTED_MODULE_5__["load"](this.projectsYaml);
        // try loading 'projects.yml' from github
        this.readFileService.setProject(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].config.repository, _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].user);
        this.getFile('projects.yml', isProjectsReady);
    };
    ProjectConfigService.prototype.getFile = function (filename, isProjectsReady) {
        var _this = this;
        this.fileIsReady.subscribe(function (data) {
            console.log("ProjectConfigService: data = " + JSON.stringify(data, undefined, 2));
            _this.projects = js_yaml__WEBPACK_IMPORTED_MODULE_5__["load"](data);
            console.log("ProjectConfigService: projects = " + JSON.stringify(_this.projects, undefined, 2));
            isProjectsReady.next(_this.projects);
        });
        this.readFileService.getFile(filename, this.fileIsReady);
    };
    ProjectConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_read_file_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["ReadFileHttpClientService"]])
    ], ProjectConfigService);
    return ProjectConfigService;
}());



/***/ }),

/***/ "./src/app/services/read-file.httpclient.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/read-file.httpclient.service.ts ***!
  \**********************************************************/
/*! exports provided: ReadFileHttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadFileHttpClientService", function() { return ReadFileHttpClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReadFileHttpClientService = /** @class */ (function () {
    function ReadFileHttpClientService(http) {
        this.http = http;
        this.base = "https://raw.githubusercontent.com/" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user + "/";
        this.cached = new Map();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
            })
        };
        marked__WEBPACK_IMPORTED_MODULE_2__["setOptions"]({});
    }
    /**
     *
     */
    ReadFileHttpClientService.prototype.setBaseUrl = function (base) {
        this.base = base;
    };
    /**
     * @param project a github project to work with
     */
    ReadFileHttpClientService.prototype.setProject = function (repo, user) {
        if (user === void 0) { user = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].user; }
        this.base = ("https://raw.githubusercontent.com/" + user + "/").concat(repo + '/master');
        console.log("ReadFileService:setProject: this.base = " + this.base);
    };
    /**
     * retreive a file from github
     * @param file the relative path of a file in github project
     */
    ReadFileHttpClientService.prototype.getFile = function (filename, fileIsReady) {
        var _this = this;
        var fullurl = this.base + '/' + filename;
        console.log("ReadFileHttpClientService:getFile: fillurl = " + fullurl);
        if (this.cached.has(fullurl)) {
            return this.cached.get(fullurl);
        }
        var file = this.http.get(fullurl, { responseType: 'text' });
        file.subscribe(function (data) {
            if (data.endsWith('.md')) {
                _this.cached[fullurl] = marked__WEBPACK_IMPORTED_MODULE_2__(data);
            }
            else {
                _this.cached[fullurl] = file;
            }
            fileIsReady.next(data);
        }, function (error) { return console.log(error); });
    };
    ReadFileHttpClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReadFileHttpClientService);
    return ReadFileHttpClientService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: darkslateblue;  \n}\nbody {\n  font-family: \"Lato\", sans-serif;\n}\n.sidenav {\n  height: 100%;\n  /* width: 160px; */\n  position: relative;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  /* background-color: rgb(235, 234, 226); */\n  background-color: black;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 18px;\n  color: #818181;\n  display: block;\n}\n.sidenav a:hover {\n  color: #a03c3c;\n}\n.main {\n  margin-left: 160px; /* Same as the width of the sidenav */\n  font-size: 28px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidenav\">\n  <a \n    *ngFor=\"let project of projects\"\n    [routerLink]=\"['/project', project.user, project.repo]\"\n    routerLinkActive=\"active\"\n    [routerLinkActiveOptions]=\"{exact: true}\">{{ project.repo }}\n  </a>    \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_projects_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projects-config.service */ "./src/app/services/projects-config.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(config) {
        this.config = config;
        this.projects = [];
        this.isProjectsReady = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.projects = this.config.getProjects()['projects'];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isProjectsReady.subscribe(function (data) {
            _this.projects = _this.config.getProjects()['projects'];
            console.log("SidebarComponent: projects = " + JSON.stringify(_this.projects, undefined, 2));
        });
        this.config.loadProjects(this.isProjectsReady);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_projects_config_service__WEBPACK_IMPORTED_MODULE_1__["ProjectConfigService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/tree-view/dropdown.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/tree-view/dropdown.directive.ts ***!
  \*************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
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

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(eRef, renderer) {
        this.eRef = eRef;
        this.renderer = renderer;
    }
    DropdownDirective.prototype.ngOnInit = function () {
    };
    /**
     * get click event on the element the directive "sit" on
     * the function toggle the style.display to show / hide.
     * Also the function switching the little arrow icon the left.
     *
     * @property this.eRef.nativeElement is the element referance the directive sit on.
     * @argument subMenu - is the sub menu showing when the accordion is opened.
     *   note: it must be right after the this.eRef.nativeElement (the element we sit on)
     */
    DropdownDirective.prototype.onclick = function () {
        var subMenu = this.eRef.nativeElement.nextSibling;
        console.log("DropdownDirective: display = " + subMenu.style.display + " name = " + JSON.stringify(subMenu));
        var child = this.eRef.nativeElement.children[0];
        if (subMenu.style.display == '') {
            this.renderer.setStyle(subMenu, 'display', 'none');
            this.renderer.addClass(child, 'fa-caret-down');
            this.renderer.removeClass(child, 'fa-caret-up');
        }
        else if (subMenu.style.display === "none") {
            this.renderer.setStyle(subMenu, 'display', 'block');
            this.renderer.addClass(child, 'fa-caret-up');
            this.renderer.removeClass(child, 'fa-caret-down');
        }
        else {
            this.renderer.addClass(child, 'fa-caret-down');
            this.renderer.removeClass(child, 'fa-caret-up');
            this.renderer.setStyle(subMenu, 'display', 'none');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "onclick", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownDirective]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/tree-view/tree-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/tree-view/tree-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\", sans-serif;\n}\n \n/* Style the sidenav links and the dropdown button */\n \n.sidenav a, .dropdown-btn {\n  /* padding: 6px 8px 6px 16px; */\n  text-decoration: none;\n  font-size: 14px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n \n/* On mouse-over */\n \n.sidenav a:hover, .dropdown-btn:hover {\n  color: #8d0707;\n}\n \n/* Add an active class to the active dropdown button */\n \n.active {\n  background-color: green;\n  color: white;\n}\n \n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n \n.dropdown-container {\n  display: block;  \n  padding-left: 8px;\n}\n \n/* Optional: Style the caret down icon */\n \n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n \n.fa-caret-up {\n  float: right;\n  padding-right: 8px;\n}\n \n/* Some media queries for responsiveness */\n \n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}   "

/***/ }),

/***/ "./src/app/tree-view/tree-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/tree-view/tree-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let dir of directories\">\n  \n  <button class=\"dropdown-btn\" *ngIf=\"dir.name !== '.'\" appDropdownDirective>{{ dir.name }} \n    <i class=\"fa fa-caret-down\"></i>\n  </button>  \n\n  <div class=\"dropdown-container\">\n    <tree-view [directories]=\"dir.directories\" [source]=\"source\"></tree-view>\n\n    <div *ngFor=\"let file of dir.files\" class=\"dropdown-container\">\n      <ng-template *ngIf=\"dir.getId(file) == 'undefined'; then withFullPath; else withId\"></ng-template>      \n\n      <ng-template #withFullPath>\n        <a [routerLink]=\"[source, dir.fullpath + '/' + file]\" class=\"dropdown-btn\">{{ file }} </a> \n      </ng-template>\n\n      <ng-template #withId>\n        <a [routerLink]=\"[source, dir.getId(file)]\" class=\"dropdown-btn\">{{ file }} </a>\n      </ng-template>\n\n    </div>                \n\n  </div>  \n\n</div>\n  \n<!-- <a [routerLink]=\"[source, dir.getId(file)]\" class=\"dropdown-btn\">{{ file }} </a> -->\n\n"

/***/ }),

/***/ "./src/app/tree-view/tree-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tree-view/tree-view.component.ts ***!
  \**************************************************/
/*! exports provided: TreeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewComponent", function() { return TreeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent(router) {
        this.router = router;
    }
    TreeViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TreeViewComponent.prototype, "directories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TreeViewComponent.prototype, "source", void 0);
    TreeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-view',
            template: __webpack_require__(/*! ./tree-view.component.html */ "./src/app/tree-view/tree-view.component.html"),
            styles: [__webpack_require__(/*! ./tree-view.component.css */ "./src/app/tree-view/tree-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TreeViewComponent);
    return TreeViewComponent;
}());



/***/ }),

/***/ "./src/app/typescript/typescript.component.css":
/*!*****************************************************!*\
  !*** ./src/app/typescript/typescript.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typescript/typescript.component.html":
/*!******************************************************!*\
  !*** ./src/app/typescript/typescript.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  typescript works!\n</p>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/typescript/typescript.component.ts":
/*!****************************************************!*\
  !*** ./src/app/typescript/typescript.component.ts ***!
  \****************************************************/
/*! exports provided: TypeScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeScriptComponent", function() { return TypeScriptComponent; });
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

var TypeScriptComponent = /** @class */ (function () {
    function TypeScriptComponent() {
    }
    TypeScriptComponent.prototype.ngOnInit = function () {
    };
    TypeScriptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typescript',
            template: __webpack_require__(/*! ./typescript.component.html */ "./src/app/typescript/typescript.component.html"),
            styles: [__webpack_require__(/*! ./typescript.component.css */ "./src/app/typescript/typescript.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypeScriptComponent);
    return TypeScriptComponent;
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
    token: "323fc73a52b1d77abe8c6d74377aee19eaa7db8b",
    user: 'tsemach',
    config: {
        repository: 'angular-github',
        file: 'project.yaml'
    }
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

module.exports = __webpack_require__(/*! /home/tsemach/work/angular-github.master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map