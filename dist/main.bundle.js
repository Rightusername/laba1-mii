webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/ArrayManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _ = __webpack_require__("../../../../lodash/lodash.js");
var ArrayManager = (function () {
    function ArrayManager() {
    }
    ArrayManager.prototype.cloneAr = function (ar) {
        var result = [];
        for (var i = 0; i < ar.length; i++) {
            if (_.isArray(ar[i])) {
                var copy = [];
                for (var j = 0; j < ar[i].length; j++) {
                    copy.push(ar[i][j]);
                }
                result.push(copy);
            }
        }
        return result;
    };
    ArrayManager.prototype.isEqualAr = function (ar1, ar2) {
        for (var i = 0; i < ar1.length; i++) {
            for (var j = 0; j < ar1[i].length; j++) {
                if (ar1[i][j] != ar2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    };
    ArrayManager.prototype.arContainItem = function (ar, item) {
        for (var i = 0; i < ar.length; i++) {
            if (this.isEqualAr(ar[i].state, item.state))
                return true;
        }
        return false;
    };
    ArrayManager.prototype.findZeroPosition = function (state) {
        for (var i = 0; i < state.length; i++) {
            for (var j = 0; j < state[i].length; j++) {
                if (state[i][j] == 0) {
                    return { x: j, y: i };
                }
            }
        }
    };
    ArrayManager.prototype.moveUp = function (ar) {
        var x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];
        if (y != 0) {
            ar[y][x] = ar[y - 1][x];
            ar[y - 1][x] = 0;
        }
        return ar;
    };
    ArrayManager.prototype.moveDown = function (ar) {
        var x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];
        if (y != ar.length - 1) {
            ar[y][x] = ar[y + 1][x];
            ar[y + 1][x] = 0;
        }
        return ar;
    };
    ArrayManager.prototype.moveLeft = function (ar) {
        var x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];
        if (x != 0) {
            ar[y][x] = ar[y][x - 1];
            ar[y][x - 1] = 0;
        }
        return ar;
    };
    ArrayManager.prototype.moveRight = function (ar) {
        var x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];
        if (x != ar.length - 1) {
            ar[y][x] = ar[y][x + 1];
            ar[y][x + 1] = 0;
        }
        return ar;
    };
    return ArrayManager;
}());
exports.ArrayManager = ArrayManager;
//# sourceMappingURL=ArrayManager.js.map

/***/ }),

/***/ "../../../../../src/app/State.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var State = (function () {
    function State(state, direction, parent) {
        this.length = 0;
        this.state = state;
        this.direction = direction;
        this.parent = parent;
    }
    return State;
}());
exports.State = State;
//# sourceMappingURL=State.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 options\">\n        \n        <h1>Way to solution:</h1>\n        <span *ngFor=\"let item of this.way\">\n            {{item}}\n        </span> <=\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"row\">\n            <button md-raised-button color=\"primary\" (click)=\"this.restart()\">Restart</button>\n            <button md-raised-button  (click)=\"this.assemble()\">Assemble</button>\n        </div>\n        <table>\n            <tr *ngFor=\"let item of this.A.state\">\n                <td *ngFor=\"let ar of item\" [class]=\"(ar>0) ? 'fill' : ''\">{{ (ar>0) ? ar : ' ' }}</td>\n            </tr>\n        </table>\n    </div>\n   \n    <div class=\"col-md-4 results\" >\n        SearchWidth - {{widthTime}} ms;\n        <br>\n        methodEvristic - {{evTime}} ms;\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  font-size: 25px;\n  color: white;\n  background: #22AA9B;\n  height: 70px;\n  margin: 23.33333333px 15px 23.33333333px 15px;\n  width: 43.3%;\n}\ntable {\n  display: block;\n  width: 100%;\n  height: 450px;\n  margin: 0 auto;\n  box-sizing: border-box;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\ntable tr {\n  height: 150px;\n  width: 100%;\n  box-sizing: border-box;\n}\ntable tr td {\n  width: 150px;\n  background: #ECCACA;\n  font-size: 70px;\n  color: rgba(255, 255, 255, 0.83);\n  font-weight: 500;\n  border: 6px solid #A9A5A5;\n  text-align: center;\n  box-sizing: border-box;\n}\ntable tr .fill {\n  background: #E1D1A0;\n}\n.options {\n  padding: 70px;\n}\n.options span {\n  font-size: 30px;\n  color: gray;\n}\n.results {\n  padding: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var State_1 = __webpack_require__("../../../../../src/app/State.ts");
var ArrayManager_1 = __webpack_require__("../../../../../src/app/ArrayManager.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var finishdialog_component_1 = __webpack_require__("../../../../../src/app/finishdialog/finishdialog.component.ts");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var AppComponent = (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.length = 3;
        this.maxIterations = 57700;
        this.isComplete = false;
        this.AM = new ArrayManager_1.ArrayManager();
        this.A = new State_1.State([
            [1, 3, 4],
            [7, 8, 2],
            [6, 0, 5]
        ], null, null);
        this.B = new State_1.State([
            [1, 2, 3],
            [8, 0, 4],
            [7, 6, 5]
        ], null, null);
        this.way = this.searchWidth();
        this.methodEvristic();
    }
    // B = new State([
    //     [1,2,3],
    //     [8,0,4],
    //     [7,6,5]
    // ], null);
    AppComponent.prototype.onKeydownHandler = function (event) {
        var x = this.AM.findZeroPosition(this.A.state)['x'], y = this.AM.findZeroPosition(this.A.state)['y'];
        switch (event.keyCode) {
            case 87:
            case 38:
                //console.log("up");
                if (y != 0) {
                    this.A.state = this.AM.moveUp(this.A.state);
                    this.checkComplete();
                    if (this.way[this.way.length - 1] == 'up') {
                        this.way.pop();
                    }
                    else {
                        this.way = this.searchWidth();
                    }
                }
                break;
            case 83:
            case 40:
                //console.log("down");
                if (y != this.length - 1) {
                    this.A.state = this.AM.moveDown(this.A.state);
                    this.checkComplete();
                    if (this.way[this.way.length - 1] == 'down') {
                        this.way.pop();
                    }
                    else {
                        this.way = this.searchWidth();
                    }
                }
                break;
            case 65:
            case 37:
                //console.log("left");
                if (x != 0) {
                    this.A.state = this.AM.moveLeft(this.A.state);
                    this.checkComplete();
                    if (this.way[this.way.length - 1] == 'left') {
                        this.way.pop();
                    }
                    else {
                        this.way = this.searchWidth();
                    }
                }
                break;
            case 68:
            case 39:
                //console.log("right");
                if (x != this.length - 1) {
                    this.A.state = this.AM.moveRight(this.A.state);
                    this.checkComplete();
                    if (this.way[this.way.length - 1] == 'right') {
                        this.way.pop();
                    }
                    else {
                        this.way = this.searchWidth();
                    }
                }
                break;
        }
    };
    AppComponent.prototype.generateSons = function (state) {
        var x = this.AM.findZeroPosition(state.state)['x'], y = this.AM.findZeroPosition(state.state)['y'];
        var sons = [];
        //up
        if (y != 0) {
            var copy = this.AM.moveUp(this.AM.cloneAr(state.state));
            var son = new State_1.State(copy, 'up', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }
        //down
        if (y != this.length - 1) {
            var copy = this.AM.moveDown(this.AM.cloneAr(state.state));
            var son = new State_1.State(copy, 'down', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }
        //left
        if (x != 0) {
            var copy = this.AM.moveLeft(this.AM.cloneAr(state.state));
            var son = new State_1.State(copy, 'left', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }
        //right
        if (x != this.length - 1) {
            var copy = this.AM.moveRight(this.AM.cloneAr(state.state));
            var son = new State_1.State(copy, 'right', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }
        return sons;
    };
    AppComponent.prototype.restart = function () {
        this.A = new State_1.State([
            [1, 3, 4],
            [7, 8, 2],
            [0, 6, 5]
        ], null, null);
        this.way = this.searchWidth();
    };
    AppComponent.prototype.checkComplete = function () {
        if (this.AM.isEqualAr(this.A.state, this.B.state)) {
            this.isComplete = true;
            var dialogRef = this.dialog.open(finishdialog_component_1.FinishDialogComponent, {
                width: '250px'
            });
        }
    };
    AppComponent.prototype.translateWay = function (X, ar) {
        if (ar === void 0) { ar = []; }
        var w = ar.slice();
        if (X.direction) {
            w.push(X.direction);
            return this.translateWay(X.parent, w);
        }
        else {
            return w;
        }
    };
    AppComponent.prototype.searchWidth = function () {
        var CLOSED = [];
        var OPEN = [this.A];
        var i = 0;
        var time = performance.now();
        while (true) {
            if (i == this.maxIterations || _.isEqual(OPEN, [])) {
                console.log('searchWidth - Iterations all ended and solution not found');
                return;
            }
            var X = JSON.parse(JSON.stringify(OPEN[0]));
            if (this.AM.isEqualAr(X.state, this.B.state)) {
                time = performance.now() - time;
                console.log('find way - SearchWidth, time: ' + time + ' ms');
                this.widthTime = time;
                console.log(this.translateWay(X));
                return this.translateWay(X);
            }
            OPEN.splice(0, 1);
            var sons = this.generateSons(X);
            CLOSED.push(X);
            for (var k = 0; k < sons.length; k++) {
                if (this.AM.arContainItem(OPEN, sons[k])) {
                    sons.splice(k, 1);
                }
            }
            for (var k = 0; k < sons.length; k++) {
                if (this.AM.arContainItem(CLOSED, sons[k])) {
                    sons.splice(k, 1);
                }
            }
            for (var j = 0; j < sons.length; j++) {
                OPEN.push(sons[j]);
            }
            i++;
        }
    };
    AppComponent.prototype.methodEvristic = function () {
        var CLOSED = [];
        var OPEN = [this.A];
        var i = 0;
        var time = performance.now();
        while (true) {
            if (i == this.maxIterations || _.isEqual(OPEN, [])) {
                console.log('methodEvristic - Iterations all ended and solution not found');
                break;
            }
            var X = JSON.parse(JSON.stringify(OPEN[0]));
            if (this.AM.isEqualAr(X.state, this.B.state)) {
                time = performance.now() - time;
                console.log('find way - methodEvristic, time: ' + time + ' ms');
                this.evTime = time;
                console.log(this.translateWay(X));
                console.log(OPEN);
                break;
            }
            OPEN.splice(0, 1);
            var sons = this.generateSons(X);
            var findSonClosed = false;
            var findSonOpen = false;
            for (var s = 0; s < sons.length; s++) {
                // for (let j = 0; j < OPEN.length; j++) {
                //     if(this.AM.isEqualAr(OPEN[j].state, sons[s].state)){
                //         findSonOpen = true;
                //     }  
                // }
                // for (let j = 0; j < CLOSED.length; j++) {
                //     if(this.AM.isEqualAr(CLOSED[j].state, sons[s].state)){
                //         findSonClosed = true;
                //     }
                // }
                findSonOpen = this.AM.arContainItem(OPEN, sons[s]);
                findSonClosed = this.AM.arContainItem(CLOSED, sons[s]);
                if (!findSonOpen || !findSonClosed) {
                    OPEN.push(sons[s]);
                }
                if (findSonOpen) {
                    for (var j = 0; j < OPEN.length; j++) {
                        if (this.AM.isEqualAr(OPEN[j].state, sons[s].state)) {
                            if (OPEN[j].length > sons[s].length) {
                                OPEN[j].parent = sons[s].parent;
                                OPEN[j].length = sons[s].length;
                            }
                        }
                    }
                }
                if (findSonClosed) {
                    for (var j = 0; j < CLOSED.length; j++) {
                        if (this.AM.isEqualAr(CLOSED[j].state, sons[s].state)) {
                            if (CLOSED[j].length > sons[s].length) {
                                OPEN.push(CLOSED[j]);
                                CLOSED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            OPEN.sort(function (a, b) {
                if (a.length < b.length) {
                    return -1;
                }
                if (a.length > b.length) {
                    return 1;
                }
                return 0;
            });
            CLOSED.push(X);
            i++;
        }
    };
    AppComponent.prototype.assemble = function () {
        var _this = this;
        var _loop_1 = function (t, k) {
            setTimeout(function () {
                var x = _this.AM.findZeroPosition(_this.A.state)['x'], y = _this.AM.findZeroPosition(_this.A.state)['y'];
                if (_this.way[k] == 'up') {
                    // console.log("up");
                    if (y != 0) {
                        _this.A.state = _this.AM.moveUp(_this.A.state);
                        _this.checkComplete();
                        if (_this.way[k] == 'up') {
                            _this.way.pop();
                        }
                    }
                }
                if (_this.way[k] == 'down') {
                    console.log("down");
                    if (y != _this.length - 1) {
                        _this.A.state = _this.AM.moveDown(_this.A.state);
                        _this.checkComplete();
                        if (_this.way[k] == 'down') {
                            _this.way.pop();
                        }
                    }
                }
                if (_this.way[k] == 'left') {
                    console.log("left");
                    if (x != 0) {
                        _this.A.state = _this.AM.moveLeft(_this.A.state);
                        _this.checkComplete();
                        if (_this.way[k] == 'left') {
                            _this.way.pop();
                        }
                    }
                }
                if (_this.way[k] == 'right') {
                    console.log("right");
                    if (x != _this.length - 1) {
                        _this.A.state = _this.AM.moveRight(_this.A.state);
                        _this.checkComplete();
                        if (_this.way[k] == 'right') {
                            _this.way.pop();
                        }
                    }
                }
            }, 160 * t);
        };
        for (var t = 0, k = this.way.length - 1; k >= 0; k--, t++) {
            _loop_1(t, k);
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onKeydownHandler");
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdDialog !== "undefined" && material_1.MdDialog) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var finishdialog_component_1 = __webpack_require__("../../../../../src/app/finishdialog/finishdialog.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            finishdialog_component_1.FinishDialogComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            material_1.MaterialModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        entryComponents: [
            finishdialog_component_1.FinishDialogComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/finishdialog/finishdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Complete</h1>\r\n\r\n<md-dialog-content>\r\n\r\n</md-dialog-content>\r\n\r\n\r\n<md-dialog-actions align=\"end\" layout=\"row\">\r\n    <button md-dialog-close md-button class=\"btn btn-primary\">OK</button>\r\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/finishdialog/finishdialog.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/finishdialog/finishdialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FinishDialogComponent = (function () {
    function FinishDialogComponent() {
    }
    return FinishDialogComponent;
}());
FinishDialogComponent = __decorate([
    core_1.Component({
        selector: 'finishdialog',
        template: __webpack_require__("../../../../../src/app/finishdialog/finishdialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/finishdialog/finishdialog.component.less")]
    }),
    __metadata("design:paramtypes", [])
], FinishDialogComponent);
exports.FinishDialogComponent = FinishDialogComponent;
//# sourceMappingURL=finishdialog.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
exports.__esModule = true;
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map