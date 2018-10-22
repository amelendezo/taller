webpackJsonp([2],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articulo_services__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailt_detailt__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, articuloService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.articuloService = articuloService;
        this.articulos = [];
        //this.articulos = articuloService.getArticulos();
        this.articuloService.getArticulos().subscribe(function (articulos) {
            _this.articulos = articulos;
        });
    }
    HomePage.prototype.goToDetail = function (ref) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailt_detailt__["a" /* DetailtPage */], { ref: ref });
    };
    HomePage.prototype.createArticulo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailt_detailt__["a" /* DetailtPage */], { ref: 0 });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Abraham\ferr\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar class="borde" color=verdeMedio>\n    <ion-title >Ferreteria</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let articulo of articulos"  (click)="goToDetail(articulo.ref)">\n      {{articulo.nomp}}\n    </button>\n  </ion-list>\n  <div>\n    <button ion-button block color="verdeMedio" (click)="createArticulo()">Nuevo Articulo</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abraham\ferr\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_articulo_services__["a" /* ArticuloService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticuloService = /** @class */ (function () {
    function ArticuloService(afDB) {
        this.afDB = afDB;
        /*articulos = [
            {ref:1, nomp:'Destornillador', precio:6000, descripcion:'SURTEK'},
            {ref:2, nomp:'Talagro', precio:580000, descripcion:'thakita'},
            {ref:3, nomp:'Pala', precio:29000, descripcion:'TRUPER'}
          ];*/
        this.articulos = [];
    }
    ArticuloService.prototype.getArticulos = function () {
        return this.afDB.list('articulos/').valueChanges();
        //  return this.articulos;
    };
    ArticuloService.prototype.getArticulo = function (ref) {
        //return this.articulos.filter(function(e, i){return e.ref == ref} ) [0] || { ref:null, nomp:null, precio:null, descrip:null };
        return this.afDB.object('articulos/' + ref).valueChanges();
    };
    ArticuloService.prototype.createArticulo = function (articulo) {
        //this.articulos.push(articulo);
        this.afDB.database.ref('articulos/' + articulo.ref).set(articulo);
    };
    ArticuloService.prototype.editArticulo = function (articulo) {
        /*for(let i=0; i < this.articulos.length; i++){
          if(this.articulos[i].ref==articulo.ref){
            this.articulos[i]=articulo;
          }
        }*/
        this.afDB.database.ref('articulos/' + articulo.ref).set(articulo);
    };
    ArticuloService.prototype.delArticulo = function (articulo) {
        /*for(let i=0; i < this.articulos.length; i++){
          if(this.articulos[i].ref==articulo.ref){
            this.articulos.splice(i, 1);
          }
        }*/
        this.afDB.database.ref('articulos/' + articulo.ref).remove();
    };
    ArticuloService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], ArticuloService);
    return ArticuloService;
}());

//# sourceMappingURL=articulo.services.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articulo_services__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailtPage = /** @class */ (function () {
    function DetailtPage(navCtrl, navParams, articuloService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articuloService = articuloService;
        this.articulo = { ref: null, nomp: null, precio: null, descrip: null };
        this.ref = null;
        this.show = true;
        this.ref = navParams.get('ref');
        if (this.ref != 0) {
            //  this.articulo=articuloService.getArticulo(this.ref);
            this.articuloService.getArticulo(this.ref).subscribe(function (articulo) {
                _this.articulo = articulo;
            });
        }
    }
    DetailtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailtPage');
    };
    DetailtPage.prototype.addArticulo = function () {
        if (this.ref != 0) {
            this.articuloService.editArticulo(this.articulo);
            alert('Articulo editado con exito');
        }
        else {
            this.articuloService.createArticulo(this.articulo);
            alert('El nuevo articulo se registro con exito');
        }
        this.navCtrl.pop();
    };
    DetailtPage.prototype.delArticulo = function () {
        this.show = false;
        this.articuloService.delArticulo(this.articulo);
        alert('El articulo fue Eliminado');
        this.navCtrl.pop();
    };
    DetailtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailt',template:/*ion-inline-start:"C:\Users\Abraham\ferr\src\pages\detailt\detailt.html"*/'\n<ion-header>\n\n  <ion-navbar class="borde" color=verdeMedio>\n    <ion-title >detailt</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<br>\n<br>\n<br>\n<br>\n\n<ion-content *ngIf="show">\n  <ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-label floating >Referencia</ion-label>\n      <ion-input type="number" [(ngModel)]="articulo.ref"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating >Nombre del Producto</ion-label>\n      <ion-input type="text" [(ngModel)]="articulo.nomp"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating >Precio Unitario</ion-label>\n      <ion-input type="number" [(ngModel)]="articulo.precio"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating >Descripcion</ion-label>\n      <ion-textarea [(ngModel)]="articulo.descripcion"></ion-textarea>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block color="verdeMedio" (click)="addArticulo()">Guardar Artículo</button>\n      <button  *ngIf="ref !=0" ion-button block color="rojo" (click)="delArticulo()" class="elim">Eliminar Articulo</button>\n    </div>\n\n\n  </ion-list>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abraham\ferr\src\pages\detailt\detailt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_articulo_services__["a" /* ArticuloService */]])
    ], DetailtPage);
    return DetailtPage;
}());

//# sourceMappingURL=detailt.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detailt/detailt.module": [
		502,
		1
	],
	"../pages/login/login.module": [
		501,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticacionServicio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutenticacionServicio = /** @class */ (function () {
    function AutenticacionServicio(autent) {
        this.autent = autent;
    }
    AutenticacionServicio.prototype.login = function () {
        return this.autent.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AutenticacionServicio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AutenticacionServicio);
    return AutenticacionServicio;
}());

//# sourceMappingURL=autenticar.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autenticar_servicio_autenticar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, autenticacion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autenticacion = autenticacion;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.autenticacion.login().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            console.log(error);
            alert('Hubo un error');
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Abraham\ferr\src\pages\login\login.html"*/'\n<ion-header >\n\n  <ion-navbar class="borde" color=verdeMedio>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n  <ion-card-header>\n    <img src="assets/imgs/login.png" class="imglogin">\n  </ion-card-header>\n\n    <button ion-button block color="verdeMedio" (click)="login()">Iniciar Cuenta con Google</button>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abraham\ferr\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__autenticar_servicio_autenticar__["a" /* AutenticacionServicio */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_articulo_services__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detailt_detailt__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_autenticar_servicio_autenticar__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyCOAQV5RfRsnA7nbdrhLExggcv6qGN5lDg",
    authDomain: "articulo-d0138.firebaseapp.com",
    databaseURL: "https://articulo-d0138.firebaseio.com",
    storageBucket: "articulo-d0138.appspot.com",
    messagingSenderId: "971378066255"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detailt_detailt__["a" /* DetailtPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailt/detailt.module#DetailtPageModule', name: 'DetailtPage', segment: 'detailt', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detailt_detailt__["a" /* DetailtPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_articulo_services__["a" /* ArticuloService */],
                __WEBPACK_IMPORTED_MODULE_13__pages_autenticar_servicio_autenticar__["a" /* AutenticacionServicio */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Abraham\ferr\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Abraham\ferr\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map