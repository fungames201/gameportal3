webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about-section/about-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-section{\r\n    border: 1px solid transparent;\r\n    border-radius: 2px;\r\n    height: 100%;\r\n    padding:10px;\r\n    \r\n}\r\n\r\n.moving-text{\r\n    margin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-section/about-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-section text-heading\">\n    About:\n    <div class=\"text-content moving-text\">\n        <marquee behavior=\"scroll\" scrollamount=\"3\" direction=\"up\" height=95px onmouseover=\"this.stop();\" onmouseout=\"this.start();\">\n            The Gaming Practices, focused on providing best-of-breed innovative games for the betting and gambling sector.\n        </marquee>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-section/about-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutSectionComponent = (function () {
    function AboutSectionComponent() {
    }
    AboutSectionComponent.prototype.ngOnInit = function () {
    };
    return AboutSectionComponent;
}());
AboutSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about-section',
        template: __webpack_require__("../../../../../src/app/about-section/about-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-section/about-section.component.css")]
    })
    /**
     * The class define the about section of the home page.
     */
    ,
    __metadata("design:paramtypes", [])
], AboutSectionComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/about-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/account-details/account-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".accountDetails{\r\n    border: 2px solid transparent;\r\n    width:100%;\r\n    height:calc(100vh - 170px);\r\n    padding: 10px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-details/account-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountDetails text-heading\">\n  Account Details \n  <app-coming-soon></app-coming-soon>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account-details/account-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountDetailsComponent = (function () {
    function AccountDetailsComponent() {
    }
    AccountDetailsComponent.prototype.ngOnInit = function () {
    };
    return AccountDetailsComponent;
}());
AccountDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-account-details',
        template: __webpack_require__("../../../../../src/app/account-details/account-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account-details/account-details.component.css")]
    })
    /**
     * Define the account details section within the dropdown component
     */
    ,
    __metadata("design:paramtypes", [])
], AccountDetailsComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/account-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".snackbar{\r\n    visibility: hidden; /* Hidden by default. Visible on click */\r\n    min-width: 10%; /* Set a default minimum width */\r\n    margin-left: -125px; /* Divide value of min-width by 2 */\r\n    color: #fff; /* White text color */\r\n    text-align: center; /* Centered text */\r\n    border-radius: 2px; /* Rounded borders */\r\n    padding: 16px; /* Padding */\r\n    position: fixed; /* Sit on top of the screen */\r\n    z-index: 1; /* Add a z-index if needed */\r\n    left: 45%; /* Center the snackbar */\r\n    top: 20px; /* 30px from the bottom */\r\n}\r\n\r\n#successSnackbar{\r\n    background-color: #08B442; /* Black background color */\r\n}\r\n\r\n#errorSnackbar{\r\n    background-color: #a22; /* Black background color */\r\n}\r\n\r\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\r\n#errorSnackbar.show, #successSnackbar.show {\r\n    visibility: visible; /* Show the snackbar */\r\n\r\n/* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n/* Animations to fade the snackbar in and out */\r\n\r\n@keyframes fadein {\r\n    from {top: 0; opacity: 0;}\r\n    to {top: 20px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {top: 20px; opacity: 1;}\r\n    to {top: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n    <app-header></app-header>\n</div>\n<div id=\"errorSnackbar\" class=\"snackbar\" ></div>\n<div id=\"successSnackbar\" class=\"snackbar\" ></div>\n<!-- Router Outlet -->\n<div>\n  <router-outlet>\n  </router-outlet>\n</div>\n\n\n<div>\n    <app-footer></app-footer>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/** Define the vaious routes and string constants and URL to be rendered */
var AppConfig = (function () {
    function AppConfig() {
        /** Define the route prefix of every URL rendered */
        this.apiRoutePrefix = '/ngp/rest';
        /** Define wether the cheat mode is active or not */
        this.isTestModeActive = true;
        /** Define the different route constants used in the application to interact with backened*/
        this.RouteConstants = {
            loginRoute: this.apiRoutePrefix + '/slot-game/user/login',
            gameListRoute: this.apiRoutePrefix + '/slot-game/static/game/list',
            getGameRoute: this.apiRoutePrefix + '/slot-game',
            spinRoute: this.apiRoutePrefix + '/slot-game/spin',
            gameRoute: this.apiRoutePrefix + '/slot-game/game',
            postSpinRoute: this.apiRoutePrefix + '/slot-game/spin',
            testMode: this.apiRoutePrefix + '/slot-game/cheat',
            navigateToGameList: '/slot-game/gamelist',
            errorRoute: '/error',
            signUpRoute: this.apiRoutePrefix + '/slot-game/static/user/signup',
            getJackpotCash: this.apiRoutePrefix + '/slot-game/static/jackpotcounter',
            getCash: this.apiRoutePrefix + '/slot-game/cash',
            jackpotSpin: this.apiRoutePrefix + '/slot-game/jackpotspin',
            jackpotTestMode: this.apiRoutePrefix + '/slot-game/jackpotcheat',
        };
        /** Define the string constants used in the application */
        this.StringConstants = {
            invalidCredentialsMessage: 'Invalid Credentials',
            GamingPracticeText: 'Gaming Practice',
            notLoggedInMessage: 'Please Login To Continue!',
            PresentingText: 'Present',
            userCreatedSuccess: 'Account Created Successfully',
            customApiError_10001: 'Bad Request',
            customApiError_10002: 'Bad Request',
            customApiError_10005: 'Insufficient Funds',
            apiError_401: 'Session expire please login again',
            apiError_404: 'Please verify the URL',
            apiError_500: 'Internal Server Error',
            apiError_0: 'Please check yout internet connection',
            apiDefaultErrorMsg: 'Something wrong must have happened',
            unexpectedError: 'An unexpected error occurred.\nPlese refresh your page and try again.',
            genericApiError: 'Plese check yout internet connection and try again.',
            complianceHeading: 'COMPLIANCE',
            complianceText: "Our pool of compliance experts can effectively develop for any regulatory requirements\n    and pre-test any game/platform before it is submitted to the Accredited Testing Facilities, thus cutting\n    downthe iteration cycles with ATFs and thus the time to market",
            multiChannelHeading: 'MULTI CHANNELS',
            multiChannelText: "Our mobile gaming team can seamlessly migrate Flash based games to HTML5 and develop\n    new native/hybrid/HTML5 games.",
            animationHeading: 'ANIMATION',
            animationText: "We partner with Anibrain to provide high-end animation and VFX services in a global services\n    model.Anibrain has worked on VFX and animation for movies like Harry Potter, Resident Evil, Invictus,Ghost\n    Rider and The Three Musketeers.",
            customGamingHeading: 'CUSTOM GAMING',
            customGamingText: "We can help you build robust, highly scalable platforms that can easily handle millions\n    of transactions and terabytes of data",
        };
        /** Define the different timeout intervas used in the application */
        this.Timeouts = {
            toastDuration: 3000,
            apiRetryDelay: 500,
            apiTimeout: 2000,
            jackpotCashInterval: 3000,
            getUserCashInterval: 2000
        };
    }
    return AppConfig;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (AppConfig);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__games_space_storm_game_page_game_page_component__ = __webpack_require__("../../../../../src/app/games/space-storm/game-page/game-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__games_chess_game_page_game_page_component__ = __webpack_require__("../../../../../src/app/games/chess/game-page/game-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__left_panel_left_panel_component__ = __webpack_require__("../../../../../src/app/left-panel/left-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dropdown_dropdown_component__ = __webpack_require__("../../../../../src/app/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_section_about_section_component__ = __webpack_require__("../../../../../src/app/about-section/about-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__jackpot_section_jackpot_section_component__ = __webpack_require__("../../../../../src/app/jackpot-section/jackpot-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__transaction_history_transaction_history_component__ = __webpack_require__("../../../../../src/app/transaction-history/transaction-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__promotion_links_promotion_links_component__ = __webpack_require__("../../../../../src/app/promotion-links/promotion-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__account_details_account_details_component__ = __webpack_require__("../../../../../src/app/account-details/account-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__promotion_carousel_promotion_carousel_component__ = __webpack_require__("../../../../../src/app/promotion-carousel/promotion-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_shared_service__ = __webpack_require__("../../../../../src/app/shared/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sports_betting_list_sports_betting_list_component__ = __webpack_require__("../../../../../src/app/sports-betting-list/sports-betting-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__table_game_list_table_game_list_component__ = __webpack_require__("../../../../../src/app/table-game-list/table-game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__blackjack_game_blackjack_game_component__ = __webpack_require__("../../../../../src/app/blackjack-game/blackjack-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__casino_list_casino_list_component__ = __webpack_require__("../../../../../src/app/casino-list/casino-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__poker_games_poker_games_component__ = __webpack_require__("../../../../../src/app/poker-games/poker-games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__article_list_article_list_component__ = __webpack_require__("../../../../../src/app/article-list/article-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__project_list_project_list_component__ = __webpack_require__("../../../../../src/app/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__quality_regulations_list_quality_regulations_list_component__ = __webpack_require__("../../../../../src/app/quality-regulations-list/quality-regulations-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__responsible_gaming_responsible_gaming_component__ = __webpack_require__("../../../../../src/app/responsible-gaming/responsible-gaming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__coming_soon_coming_soon_component__ = __webpack_require__("../../../../../src/app/coming-soon/coming-soon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__compliance_section_compliance_section_component__ = __webpack_require__("../../../../../src/app/compliance-section/compliance-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__slot_game_list_slot_game_list_component__ = __webpack_require__("../../../../../src/app/slot-game-list/slot-game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__create_account_create_account_component__ = __webpack_require__("../../../../../src/app/create-account/create-account.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__games_space_storm_game_page_game_page_component__["a" /* GamePageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__left_panel_left_panel_component__["a" /* LeftPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dropdown_dropdown_component__["a" /* DropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__about_section_about_section_component__["a" /* AboutSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__jackpot_section_jackpot_section_component__["a" /* JackpotSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_20__transaction_history_transaction_history_component__["a" /* TransactionHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_21__promotion_links_promotion_links_component__["a" /* PromotionLinksComponent */],
            __WEBPACK_IMPORTED_MODULE_22__account_details_account_details_component__["a" /* AccountDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__promotion_carousel_promotion_carousel_component__["a" /* PromotionCarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_25__sports_betting_list_sports_betting_list_component__["a" /* SportsBettingListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__table_game_list_table_game_list_component__["a" /* TableGameListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__blackjack_game_blackjack_game_component__["a" /* BlackjackGameComponent */],
            __WEBPACK_IMPORTED_MODULE_28__casino_list_casino_list_component__["a" /* CasinoListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__poker_games_poker_games_component__["a" /* PokerGamesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__games_chess_game_page_game_page_component__["a" /* GamePageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_30__article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_31__project_list_project_list_component__["a" /* ProjectListComponent */],
            __WEBPACK_IMPORTED_MODULE_32__quality_regulations_list_quality_regulations_list_component__["a" /* QualityRegulationsListComponent */],
            __WEBPACK_IMPORTED_MODULE_33__responsible_gaming_responsible_gaming_component__["a" /* ResponsibleGamingComponent */],
            __WEBPACK_IMPORTED_MODULE_34__coming_soon_coming_soon_component__["a" /* ComingSoonComponent */],
            __WEBPACK_IMPORTED_MODULE_35__compliance_section_compliance_section_component__["a" /* ComplianceSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_36__slot_game_list_slot_game_list_component__["a" /* SlotGameListComponent */],
            __WEBPACK_IMPORTED_MODULE_37__create_account_create_account_component__["a" /* CreateAccountComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_24__shared_shared_service__["a" /* SharedService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11__shared__["a" /* NGPErrorHandler */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slot_game_list_slot_game_list_component__ = __webpack_require__("../../../../../src/app/slot-game-list/slot-game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__games_space_storm_game_page_game_page_component__ = __webpack_require__("../../../../../src/app/games/space-storm/game-page/game-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__games_chess_game_page_game_page_component__ = __webpack_require__("../../../../../src/app/games/chess/game-page/game-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






/**
 * Define the route configurations.Depending upon the URL the respective component is rendered by mapping the path and URL.
 */
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'slot-game/space-storm', component: __WEBPACK_IMPORTED_MODULE_3__games_space_storm_game_page_game_page_component__["a" /* GamePageComponent */] },
    { path: 'slot-game/frozen-knights', component: __WEBPACK_IMPORTED_MODULE_4__games_chess_game_page_game_page_component__["a" /* GamePageComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_5__error_error_component__["a" /* ErrorComponent */] },
    { path: 'slot-game/gamelist', component: __WEBPACK_IMPORTED_MODULE_2__slot_game_list_slot_game_list_component__["a" /* SlotGameListComponent */] },
    { path: 'slot-game', component: __WEBPACK_IMPORTED_MODULE_2__slot_game_list_slot_game_list_component__["a" /* SlotGameListComponent */] },
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article-section{\r\n    border: 2px solid transparent;\r\n    width:100%;\r\n    height:calc(100vh - 170px);\r\n    padding: 10px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-section text-heading\">\n  Articles\n  <app-coming-soon></app-coming-soon>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleListComponent = (function () {
    function ArticleListComponent() {
    }
    ArticleListComponent.prototype.ngOnInit = function () {
    };
    return ArticleListComponent;
}());
ArticleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-article-list',
        template: __webpack_require__("../../../../../src/app/article-list/article-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-list/article-list.component.css")]
    })
    /**
     * Define the article list  section of the left panel
     */
    ,
    __metadata("design:paramtypes", [])
], ArticleListComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/article-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/blackjack-game/blackjack-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blackjack-section{\r\npadding: 10px;\r\ntext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blackjack-game/blackjack-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blackjack-section text-heading\">\r\n  Blackjack Game\r\n</div>\r\n<app-coming-soon></app-coming-soon>"

/***/ }),

/***/ "../../../../../src/app/blackjack-game/blackjack-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlackjackGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlackjackGameComponent = (function () {
    function BlackjackGameComponent() {
    }
    BlackjackGameComponent.prototype.ngOnInit = function () {
    };
    return BlackjackGameComponent;
}());
BlackjackGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-blackjack-game',
        template: __webpack_require__("../../../../../src/app/blackjack-game/blackjack-game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blackjack-game/blackjack-game.component.css")]
    })
    /**
     * Define the blackjack game section of left panel.
     */
    ,
    __metadata("design:paramtypes", [])
], BlackjackGameComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/blackjack-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/casino-list/casino-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".casino-section{\r\npadding: 10px;\r\ntext-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/casino-list/casino-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-heading casino-section\">\n  Casino\n</div>\n<app-coming-soon></app-coming-soon>\n"

/***/ }),

/***/ "../../../../../src/app/casino-list/casino-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasinoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CasinoListComponent = (function () {
    function CasinoListComponent() {
    }
    CasinoListComponent.prototype.ngOnInit = function () {
    };
    return CasinoListComponent;
}());
CasinoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-casino-list',
        template: __webpack_require__("../../../../../src/app/casino-list/casino-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/casino-list/casino-list.component.css")]
    })
    /**
     * Define the casino list section of left panel.
     */
    ,
    __metadata("design:paramtypes", [])
], CasinoListComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/casino-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/coming-soon/coming-soon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.container-coming-soon {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.coming-soon {\r\n  display: table-cell;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-weight: 200;\r\n}\r\n\r\n.neon {\r\n  font-family: neon,curlz MT ;\r\n  color: #FB4264;\r\n  font-size: 5vw;\r\n  line-height: 5vw;\r\n  text-shadow: 0 0 3vw #F40A35;\r\n}\r\n\r\n.flux {\r\n  font-family:neon,curlz MT;\r\n  color: #426DFB;\r\n  font-size: 5vw;\r\n  line-height: 5vw;\r\n  text-shadow: 0 0 3vw #2356FF;\r\n}\r\n\r\n.neon {\r\n  animation: neon 1s ease infinite;\r\n  -moz-animation: neon 1s ease infinite;\r\n  -webkit-animation: neon 1s ease infinite;\r\n}\r\n\r\n@keyframes neon {\r\n  0%,\r\n  100% {\r\n    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;\r\n    color: #FED128;\r\n  }\r\n  50% {\r\n    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;\r\n    color: #806914;\r\n  }\r\n}\r\n\r\n.flux {\r\n  animation: flux 2s linear infinite;\r\n  -moz-animation: flux 2s linear infinite;\r\n  -webkit-animation: flux 2s linear infinite;\r\n  -o-animation: flux 2s linear infinite;\r\n}\r\n\r\n@keyframes flux {\r\n  0%,\r\n  100% {\r\n    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;\r\n    color: #28D7FE;\r\n  }\r\n  50% {\r\n    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;\r\n    color: #146C80;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coming-soon/coming-soon.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container-coming-soon\">\n    <div class=\"coming-soon\">\n      <div class=\"neon\">Coming</div>\n      <div class=\"flux\">Soon </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/coming-soon/coming-soon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComingSoonComponent = (function () {
    function ComingSoonComponent() {
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    return ComingSoonComponent;
}());
ComingSoonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-coming-soon',
        template: __webpack_require__("../../../../../src/app/coming-soon/coming-soon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/coming-soon/coming-soon.component.css")]
    })
    /**
     * Define the coming soon text dispalyed in various components
     */
    ,
    __metadata("design:paramtypes", [])
], ComingSoonComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/coming-soon.component.js.map

/***/ }),

/***/ "../../../../../src/app/compliance-section/compliance-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".compliance-section-wrap{\r\n    border: 1px solid transparent;\r\n    height: 100%;\r\n    text-align: left;\r\n    padding-left:10px;\r\n }\r\n\r\n.fling-minislide {\r\n      height:100%; \r\n      overflow:hidden; \r\n      position:relative; \r\n}\r\n.fling-minislide img{ \r\n      position:absolute; \r\n      animation:fling-minislide 20s infinite; \r\n      opacity:0;\r\n      /* alinging the image in centre without setting the height and width  */\r\n      left: 0;\r\n      right: 0;\r\n      margin: 0 auto;\r\n}\r\n.fling-minislide .logo-mga{\r\n      height:65%;\r\n      top:20px;\r\n}\r\n.fling-minislide .logo_kansspelcommissie{\r\n      height: 85%;\r\n }\r\n   \r\n.fling-minislide .logo-state_seal{\r\n      height: 83%;\r\n}\r\n.fling-minislide .logo-spm{\r\n      height: 85%;\r\n}\r\n          \r\n@keyframes fling-minislide {25%{opacity:1;} 40%{opacity:0;}} \r\n\r\n.fling-minislide img:nth-child(4){animation-delay:0s;}\r\n.fling-minislide img:nth-child(3){animation-delay:5s;}\r\n.fling-minislide img:nth-child(2){animation-delay:10s;}\r\n.fling-minislide img:nth-child(1){animation-delay:15s;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compliance-section/compliance-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"compliance-section-wrap\">\n    <div class=\"text-heading\">Compliance:</div>\n    <div class=\"fling-minislide\">\n        <img src=\"assets/Images/logo-mga.png\" alt=\"Slide 4\" class=\"logo-mga\">\n        <img src=\"assets/Images/logo_kansspelcommissie_EN_NL.png\" alt=\"Slide 3\" class=\"logo_kansspelcommissie\">\n        <img src=\"assets/Images/state_seal.png\" alt=\"Slide 2\" class=\"logo-state_seal\">\n        <img src=\"assets/Images/spm-transparent.png\" alt=\"Slide 1\" class=\"logo-spm\">\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/compliance-section/compliance-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplianceSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComplianceSectionComponent = (function () {
    function ComplianceSectionComponent() {
    }
    ComplianceSectionComponent.prototype.ngOnInit = function () {
    };
    return ComplianceSectionComponent;
}());
ComplianceSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-compliance-section',
        template: __webpack_require__("../../../../../src/app/compliance-section/compliance-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/compliance-section/compliance-section.component.css")]
    })
    /**
     * Define the compliance section of the home page carousel.
     */
    ,
    __metadata("design:paramtypes", [])
], ComplianceSectionComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/compliance-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/contracts/api-calls/jackpot-post-spin-dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var JackpotPostSpinDTO = (function () {
    function JackpotPostSpinDTO(gameId, symbol) {
        this.gameId = gameId;
        this.cheatsymbol = symbol;
    }
    return JackpotPostSpinDTO;
}());
/* harmony default export */ __webpack_exports__["a"] = (JackpotPostSpinDTO);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-post-spin-dto.js.map

/***/ }),

/***/ "../../../../../src/app/contracts/api-calls/post-spin-dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var PostSpinDTO = (function () {
    function PostSpinDTO(gameId, bet, level, coinLevel, calculateTotalCash, IntialCoinValue, cheatDetails) {
        this.bet = bet * level;
        this.level = level;
        this.coinValue = coinLevel;
        this.totalCoins = Math.round(calculateTotalCash / IntialCoinValue);
        this.totalCash = calculateTotalCash;
        this.gameId = gameId;
        this.cheatSymbolArray = [];
    }
    return PostSpinDTO;
}());
/* harmony default export */ __webpack_exports__["a"] = (PostSpinDTO);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/post-spin-dto.js.map

/***/ }),

/***/ "../../../../../src/app/contracts/component-toggel-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ComponentToggleService = (function () {
    function ComponentToggleService(transactionHistory, promotionLinks, accountDetails, articlesList, projectList, regulationList, responsibleGamingList, rightPanel) {
        this.transactionHistory = transactionHistory;
        this.promotionLinks = promotionLinks;
        this.accountDetails = accountDetails;
        this.articlesList = articlesList;
        this.projectList = projectList;
        this.regulationList = regulationList;
        this.responsibleGamingList = responsibleGamingList;
        this.rightPanel = rightPanel;
    }
    return ComponentToggleService;
}());
/* harmony default export */ __webpack_exports__["a"] = (ComponentToggleService);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/component-toggel-service.js.map

/***/ }),

/***/ "../../../../../src/app/contracts/phaser/data-object-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_info__ = __webpack_require__("../../../../../src/app/contracts/phaser/game-info.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataObjectMapper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataObjectMapper = (function () {
    function DataObjectMapper() {
        this.betLinemapper = function () {
            this.gameInfo.betLineDetails = [
                {
                    'lineNumber': 1,
                    'tileNumbers': [2, 5, 8, 11, 14]
                },
                {
                    'lineNumber': 2,
                    'tileNumbers': [1, 4, 7, 10, 13]
                },
                {
                    'lineNumber': 3,
                    'tileNumbers': [3, 6, 9, 12, 15]
                },
                {
                    'lineNumber': 4,
                    'tileNumbers': [1, 5, 9, 11, 13]
                },
                {
                    'lineNumber': 5,
                    'tileNumbers': [3, 5, 7, 11, 15]
                },
                {
                    'lineNumber': 6,
                    'tileNumbers': [1, 4, 8, 10, 13]
                },
                {
                    'lineNumber': 7,
                    'tileNumbers': [3, 6, 8, 12, 15]
                },
                {
                    'lineNumber': 8,
                    'tileNumbers': [2, 6, 9, 12, 14]
                }, {
                    'lineNumber': 9,
                    'tileNumbers': [2, 4, 7, 10, 14]
                },
                {
                    'lineNumber': 10,
                    'tileNumbers': [2, 4, 8, 10, 14]
                },
                {
                    'lineNumber': 11,
                    'tileNumbers': [2, 6, 8, 12, 14]
                },
                {
                    'lineNumber': 12,
                    'tileNumbers': [1, 5, 7, 11, 13]
                }, {
                    'lineNumber': 13,
                    'tileNumbers': [3, 5, 9, 11, 15]
                },
                {
                    'lineNumber': 14,
                    'tileNumbers': [2, 5, 7, 11, 14]
                },
                {
                    'lineNumber': 15,
                    'tileNumbers': [2, 5, 9, 11, 14]
                },
                {
                    'lineNumber': 16,
                    'tileNumbers': [1, 5, 8, 11, 13]
                }, {
                    'lineNumber': 17,
                    'tileNumbers': [3, 5, 8, 11, 15]
                },
                {
                    'lineNumber': 18,
                    'tileNumbers': [1, 6, 7, 12, 13]
                },
                {
                    'lineNumber': 19,
                    'tileNumbers': [3, 4, 9, 10, 15]
                },
                {
                    'lineNumber': 20,
                    'tileNumbers': [1, 6, 9, 12, 13]
                }
            ];
            return this.gameInfo.betLineDetails;
        };
        this.gameInfo = new __WEBPACK_IMPORTED_MODULE_1__game_info__["a" /* default */]();
    }
    DataObjectMapper.prototype.mapper = function (gameData) {
        this.gameInfo.gameId = gameData.gameId;
        this.gameInfo.description = gameData.gameDescription;
        this.gameInfo.imagePath = gameData.gameImagePath;
        this.gameInfo.url = gameData.gameUrl;
        this.gameInfo.cash = gameData.cash;
        this.gameInfo.coinValue = gameData.coinValue;
        this.gameInfo.maxBetLevel = gameData.maxBetValue;
        this.gameInfo.betMultiplier = gameData.betMultiplier;
        this.gameInfo.gameAssetVo = gameData.gameAssetVo;
        this.gameInfo.totalCoins = gameData.totalCoins;
        this.gameInfo.betLineDetails = this.betLinemapper();
        return this.gameInfo;
    };
    return DataObjectMapper;
}());
DataObjectMapper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataObjectMapper);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/data-object-mapper.js.map

/***/ }),

/***/ "../../../../../src/app/contracts/phaser/game-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var GameInfo = (function () {
    function GameInfo() {
    }
    return GameInfo;
}());
/* harmony default export */ __webpack_exports__["a"] = (GameInfo);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/game-info.js.map

/***/ }),

/***/ "../../../../../src/app/create-account/create-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-up-form input[type=\"text\"],\r\n.sign-up-form input[type=\"email\"],\r\n.sign-up-form input[type=\"password\"] {\r\n\theight: 40px;\r\n    border: 1px solid transparent;\r\n    background:beige;\r\n\tfont-size: 16px;\r\n\ttransition: all 0.1s linear;\r\n}\r\n.sign-up-form input:hover,\r\n.sign-up-form input:focus {\r\n\toutline:none;\r\n\tbox-shadow: none;\r\n\tborder-color: #ccc;\r\n}\r\n\r\n.btn-register {\r\n\tbackground: #ff5252;\r\n\tcolor: #e1ffff;;\r\n\tfont-size: 18px;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tfont-weight: normal;\r\n    border-color: #ff5252;\r\n}\r\n.btn-register:hover {\r\n    background: rgba(48, 46, 45, 1);\r\n    border-radius: 1px solid #ff5252;\r\n}\r\n\r\n.password-field{\r\n\tmargin:0px 0px 14px 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-account/create-account.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signUpForm\" #formDir=\"ngForm\" class=\"sign-up-form\">\n  <div [hidden]=\"formDir.submitted\">\n    <div class=\"form-group\">\n      <input type=\"text\" id=\"firstName\" [(ngModel)]=\"firstName\" name=\"firstName\" tabindex=\"1\" class=\"form-control\" placeholder=\"First Name\"\n        formControlName=\"firstName\" required>\n\n      <div class=\"error\" *ngIf=\"signUpForm.get('firstName').touched && signUpForm.get('firstName').hasError('required')\">\n        First Name is required\n      </div>\n      <div class=\"error\" *ngIf=\"signUpForm.get('firstName').touched && signUpForm.get('firstName').hasError('minlength')\">\n        Minimum of 3 characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"lastName\" tabindex=\"1\" class=\"form-control\" placeholder=\"Last Name\"\n        formControlName=\"lastName\" required>\n\n      <div class=\"error\" *ngIf=\"signUpForm.get('lastName').touched && signUpForm.get('lastName').hasError('required')\">\n        Last Name is required\n      </div>\n      <div class=\"error\" *ngIf=\"signUpForm.get('lastName').touched && signUpForm.get('lastName').hasError('minlength')\">\n        Minimum of 3 characters\n      </div>\n\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" id=\"emailId\" name=\"emailId\" [(ngModel)]=\"emailId\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\"\n        formControlName=\"emailId\" required>\n\n      <div class=\"error\" *ngIf=\"signUpForm.get('emailId').touched && signUpForm.get('emailId').hasError('required')\">\n        EmailId is required\n      </div>\n      <div class=\"error\" *ngIf=\"signUpForm.get('emailId').touched && signUpForm.get('emailId').hasError('email')\">\n        EmailId shoul be in proper format\n      </div>\n      <div class=\"error\" *ngIf=\"signUpForm.get('emailId').touched && signUpForm.get('emailId').hasError('pattern')\">\n        Please enter a valid email <span style=\"color:salmon;\">(Ex.John.doe@abc.com)</span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" id=\"userName\" tabindex=\"1\" [(ngModel)]=\"userName\" name=\"userName\" class=\"form-control\" placeholder=\"UserName\"\n        formControlName=\"userName\" required>\n      <div class=\"error\" *ngIf=\"signUpForm.get('userName').touched && signUpForm.get('userName').hasError('required')\">\n        User Name is required\n      </div>\n      <div class=\"error\" *ngIf=\"signUpForm.get('userName').touched && signUpForm.get('userName').hasError('minlength')\">\n        Minimum of 5 characters\n      </div>\n\n    </div>\n\n    <fieldset formGroupName=\"passwords\">\n\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" tabindex=\"2\" class=\"form-control password-field\"\n          placeholder=\"Password\" formControlName=\"password\" required>\n        <div class=\"error\" *ngIf=\"signUpForm.get('passwords.password').touched && signUpForm.get('passwords.password').hasError('required')\">\n          Password is required\n        </div>\n        <div class=\"error\" *ngIf=\"signUpForm.get('passwords.password').touched && signUpForm.get('passwords.password').hasError('minlength')\">\n          Minimum of 5 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" id=\"confirmPassword\" tabindex=\"2\" class=\"form-control\"\n          placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" required>\n        <div class=\"error\" *ngIf=\"signUpForm.get('passwords.confirmPassword').touched && signUpForm.get('passwords.confirmPassword').hasError('required')\">\n          Confirm Password is required\n        </div>\n        <div class=\"error\" *ngIf=\"signUpForm.get('passwords.confirmPassword').touched && signUpForm.get('passwords.confirmPassword').hasError('minlength')\">\n          Minimum of 5 characters\n        </div>\n      </div>\n\n    </fieldset>\n\n  </div>\n  <div class=\"form-group\">\n    <div>\n      <button (click)=\"submitForm();\" type=\"button\" class=\"btn btn-register\" [disabled]=\"signUpForm.invalid\" tabindex=\"4\">\n        Submit Now\n      </button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/create-account/create-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_account_service__ = __webpack_require__("../../../../../src/app/create-account/create-account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_service__ = __webpack_require__("../../../../../src/app/shared/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contracts_component_toggel_service__ = __webpack_require__("../../../../../src/app/contracts/component-toggel-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_custom_validator__ = __webpack_require__("../../../../../src/app/create-account/password-custom-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pop_ups__ = __webpack_require__("../../../../../src/app/shared/pop-ups.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateAccountComponent = (function () {
    /**
     * Create a new CreateAccountService instance.
     *
     * @param _singUpService An object of CreateAccountService type.
     * @param _closeForm An object of SharedService type used for toggling the contenet of different panels.
     * @param _formBuilder An object of FormBuilder type used for creating form and validations
     *
     */
    function CreateAccountComponent(_singUpService, _closeForm, _formBuilder) {
        this._singUpService = _singUpService;
        this._closeForm = _closeForm;
        this._formBuilder = _formBuilder;
        /** Used for emitting the closing status of the form which is listened by login component */
        this.formSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.singUpService = _singUpService;
        this.closeForm = _closeForm;
        this.config = new __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppConfig */]();
    }
    /**
    * Define different validations for each field that are part of the form.
    */
    CreateAccountComponent.prototype.ngOnInit = function () {
        var emailRegex = /^\w+([\.-]?\w+)*@\W*(gmail)\W*(\.\w{2,3})+$/i;
        this.signUpForm = this._formBuilder.group({
            'firstName': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(3)]],
            'lastName': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(3)]],
            'userName': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(3)]],
            'emailId': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].pattern(emailRegex)]],
            'passwords': this._formBuilder.group({
                'password': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(5)]],
                'confirmPassword': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(5)]]
            }, { validator: __WEBPACK_IMPORTED_MODULE_5__password_custom_validator__["a" /* PasswordCustomValidation */].MatchPassword })
        });
    };
    /**
     * Call the singup service API and depending upon the response subcribe accordingly.
     * Success: Generate a userCreatedSuccess popup toast and reset the form
     * Error: Genearte a error popup toast.
     *
     * @returns void.
     *
     */
    CreateAccountComponent.prototype.submitForm = function () {
        // this.singUpService.signup(this.firstName, this.lastName, this.userName, this.emailId, this.password)
        //   .subscribe(
        //   (response) => {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_pop_ups__["b" /* successPopUpToast */])(this.config.StringConstants.userCreatedSuccess, this.config.Timeouts.toastDuration);
        this.signUpForm.reset();
        // @parameters =>transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup,rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_3__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.closeForm.toggelDisplayPanel(componentVisibilityObject);
        //   },
        //   (error) => {
        //     this.signUpForm.reset()
        //     popUpToast(this.config.StringConstants.apiDefaultErrorMsg, this.config.Timeouts.toastDuration)
        //   },
        // );
        this.formSubmitted.next(true);
    };
    return CreateAccountComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], CreateAccountComponent.prototype, "formSubmitted", void 0);
CreateAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-create-account',
        template: __webpack_require__("../../../../../src/app/create-account/create-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-account/create-account.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__create_account_service__["a" /* CreateAccountService */]]
    })
    /**
     * Define the create account section through which user can sign in
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__create_account_service__["a" /* CreateAccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__create_account_service__["a" /* CreateAccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], CreateAccountComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/create-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-account/create-account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateAccountService = (function () {
    /**
     * Create an instance of App config and CreateAccountService
     * @param _http An object of HTTP type.
     */
    function CreateAccountService(_http) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */]();
        this.httpServiceProvider = _http;
    }
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * so that a user can singup.
     *
     * @param firstname Define the first name of the user.
     * @param lastname  Define the last name of the user.
     * @param username  Define the username of the user.
     * @param email  Define the email ID of the user.
     * @param password  Define the password for the user.
     * @return An observable of ApiResponse type.
     *
     */
    CreateAccountService.prototype.signup = function (firstname, lastname, username, email, password) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            url: this.config.RouteConstants.signUpRoute,
            body: "firstname=" + firstname + "&lastname=" + lastname + "&username=" + username + "&email=" + email + "&password=" + password,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* apiCall */](request, this.httpServiceProvider, false);
    };
    return CreateAccountService;
}());
CreateAccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /**
     * Define the service required for a user to create an account/sign up services
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], CreateAccountService);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/create-account.service.js.map

/***/ }),

/***/ "../../../../../src/app/create-account/password-custom-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordCustomValidation; });
var PasswordCustomValidation = (function () {
    function PasswordCustomValidation() {
    }
    /**
     * Check that both password and confirm passwords are same.
     * @param AC An object of AbstractControl type
     * @return null in case of sucess and error in case of failure
     */
    PasswordCustomValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordCustomValidation;
}());

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/password-custom-validator.js.map

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-section{\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n/* .nav {\r\n    top:50px;\r\n} */\r\n.nav>li>a:hover, .nav>li>a:focus, .nav .open>a, .nav .open>a:hover, .nav .open>a:focus {\r\n   background: rgba(28, 26, 26, 1);\r\n\r\n}\r\n.dropdown {\r\n    width:300px;    \r\n}\r\n.dropdown-menu>li>a {\r\n    color: #ff5252;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n\r\n}\r\n.dropdown ul.dropdown-menu {\r\n    border-radius:4px;\r\n    box-shadow:none;\r\n    margin-top:3px;\r\n    width:300px;\r\n}\r\n.dropdown ul.dropdown-menu:before {\r\n    border-bottom: 10px solid #fff;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 16px;\r\n    z-index: 10;\r\n}\r\n.dropdown ul.dropdown-menu:after {\r\n    content: \"\";\r\n    border-right: 12px solid transparent;\r\n    border-left: 12px solid transparent;\r\n    position: absolute;\r\n    top: -12px;\r\n    right: 14px;\r\n    z-index: 9;\r\n}\r\n\r\ndiv li a.user-info\r\n{\r\n    padding-top: 20px;\r\n    text-transform: capitalize;\r\n    height: 80px;\r\n    width:230px;\r\n    float: right;\r\n}\r\n\r\ndiv li .username-section:hover\r\n{\r\n    background: rgba(66, 50, 50, 1);\r\n    color: #ff5252;\r\n    height: 50px;\r\n    border-radius: 6px;\r\n}\r\n\r\ndiv ul.dropdown-list\r\n{\r\n    background-color: #f5f5dc;\r\n}\r\ndiv ul.dropdown-menu li a:hover\r\n{\r\n  background-color: #ff5252;\r\n  color: beige;\r\n}\r\n.navbar-nav>li>a {\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n    line-height: 20px;\r\n}\r\n.dropdown-menu>li>a.cash-section{\r\n    color: #242;\r\n    background: #bcb;\r\n}\r\n.username-section{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-right: 6px;\r\n}\r\n.dropdown-menu li a .ngp-coins{\r\n    color: yellowgreen;\r\n}\r\n.usd-color{\r\n    color: #555;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-section\">\n  <ul class=\"nav navbar-nav\">\n    <li class=\"dropdown\">\n      <a class=\"dropdown-toggle user-info text-heading\" data-toggle=\"dropdown\" (click)='toggle($event); getUserCashAtIntervals()'>\n        <div class=\"username-section\">\n          <span class=\"fa fa-user-circle-o\" style=\"color:beige\"></span>&nbsp;&nbsp;{{profileName}}&nbsp;&nbsp;  \n          <i class=\"fa fa-caret-down fa-3\" aria-hidden=\"true\"></i>\n        </div>\n      </a>\n\n      <ul class=\"dropdown-menu dropdown-list\">\n        <li><a class=\"cash-section\">Cash Credit: <span class=\"fa fa-usd fa-3 usd-color\" aria-hidden=\"true\"></span> {{cash}}</a></li>\n        <li class=\"divider\"></li>\n        <!-- // TODO: add this in case we have etherum cash -->\n        <!-- <li><a class=\"cash-section ngp-coins\" style=\"color: yellowgreen;\">NGP Coins: <span class=\"fa fa-eur fa-3 usd-color\" aria-hidden=\"true\"></span> 1000</a></li>\n        <li class=\"divider\"></li> -->\n        <li (click)=\"showDesiredPanel(true, true, false,true, true, true, true, true)\"><a>My Account <span class=\"fa fa-pencil fa-lg pull-right\"></span></a></li>\n        <li class=\"divider\"></li>\n        <li (click)=\"showDesiredPanel(false, true, true, true,true, true, true, true)\"><a>Transaction History<span class=\"fa fa-history fa-lg pull-right\" aria-hidden=\"true\"></span></a></li>\n        <li class=\"divider\"></li>\n        <li (click)=\"showDesiredPanel(true, false, true, true, true, true, true, true)\"><a>Promotions<span class=\"fa fa-history fa-lg pull-right\" aria-hidden=\"true\"></span></a></li>\n        <li class=\"divider\"></li>\n        <li><a (click)=\"logout()\">Logout <span class=\"fa fa-long-arrow-right fa-lg pull-right\"></span></a></li>\n      </ul>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__ = __webpack_require__("../../../../../src/app/shared/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contracts_component_toggel_service__ = __webpack_require__("../../../../../src/app/contracts/component-toggel-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DropdownComponent = (function () {
    /**
     * Create an instance of DropdownComponent and Appconfig
     *
     * @param _headerService An object of HeaderService type.
     * @param _router An object of Router type.
     * @param _navService An object of SharedService type.
     *
     */
    function DropdownComponent(_headerService, _router, _navService) {
        this._headerService = _headerService;
        this._router = _router;
        this._navService = _navService;
        /** Broadcast the visibility status of dropdown component after user logout */
        this.dropDownStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.loginService = _headerService;
        this.router = _router;
        this.config = new __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]();
        this.navService = _navService;
        this.getUserCashAtIntervals();
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    /**
     * Toggle the arrows when user click the dropdown panel
     *
     * @param event
     *
     */
    DropdownComponent.prototype.toggle = function (event) {
        var liElement = event.currentTarget.children[0].children[1];
        if (liElement.classList.contains('fa-caret-down')) {
            liElement.classList.remove('fa-caret-down');
            liElement.classList.add('fa-caret-up');
        }
        else {
            liElement.classList.add('fa-caret-down');
            liElement.classList.remove('fa-caret-up');
        }
    };
    /**
     * Calls the loginService logout() method.
     * Sucess: The user is logout and is navigated to the home page.
     * error: The user is navigated to the error page.
     */
    DropdownComponent.prototype.logout = function () {
        // this.loginService.logout()
        //   .subscribe(
        //   (response) => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('username');
        this.isDropDownHidden = false;
        this.dropDownStatus.emit(this.isDropDownHidden);
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_5__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
        this.router.navigateByUrl('');
        // },
        // (error) => {
        //   this.router.navigateByUrl('error');
        // }
        // );
    };
    /**
     * Display the component for which the parameter is set as false and hide the rest of the components.
     * by calling the toggelDisplayPanel() of Shared service.
     *
     * @param transactionHistory Used to notify the visibility status of transaction-history component.
     * @param promotionLinks Used  to notify the visibility status of promotion-link component.
     * @param accountDetails Used  to notify the visibility status of account-detail component.
     * @param articlesList Used  to notify the visibility status of article-list component.
     * @param projectList Used to notify the visibility status of project list component.
     * @param regulationList Used  to notify the visibility status of regulation list component.
     * @param responsibleGamingList Used  to notify the visibility status of responsibleGamingList component.
     * @param rightPanel Used  to notify the visibility status of rightPanel component.
     *
     */
    DropdownComponent.prototype.showDesiredPanel = function (transactionHistory, promotionLinks, accountDetails, articlesList, projectList, regulationList, responsibleGamingList, rightPanel) {
        this.router.navigateByUrl('');
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_5__contracts_component_toggel_service__["a" /* default */](transactionHistory, promotionLinks, accountDetails, articlesList, projectList, regulationList, responsibleGamingList, rightPanel);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    /**
     * Call the loginService getcash() method and subscribe accordingly.
     * Success: Display the desired cash
     * Error: Inform the user by logging the error.
     */
    DropdownComponent.prototype.getUserCashAtIntervals = function () {
        this.cash = 100;
        // const authToken = localStorage.getItem('auth_token');
        // if (authToken) {
        //   this.loginService.getcash()
        //     .subscribe(
        //     (response) => {
        //       this.cash = Math.round((response.body) * 100) / 100;
        //     },
        //     (error) => {
        //       // popUpToast(this.config.StringConstants.genericApiError, this.config.Timeouts.toastDuration)
        //       console.log('ERROR!');
        //     },
        //   )
        // }
    };
    return DropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "profileName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "dropDownStatus", void 0);
DropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dropdown',
        template: __webpack_require__("../../../../../src/app/dropdown/dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dropdown/dropdown.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__header_header_service__["a" /* HeaderService */]]
    })
    /**
     * Define the dropdown component on home page that contain the user
     * transaction history and account details.
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_header_service__["a" /* HeaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], DropdownComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error-wallpaper5.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "error-wallpaper5.42e612ed8a78599dced1.jpg";

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-text{\n    color: beige;\n    position: absolute;\n    top: 30%;\n    left: 30%;\n    margin: 0 auto;\n    display: inline-block;\n    \n}\n\n.container{\n    width: 1700px;\n    height: 750px;\n    background: url(" + escape(__webpack_require__("../../../../../src/app/error/error-wallpaper5.jpg")) + ")no-repeat;\n}\n\n.text-div{\n    float: left;\n     display: inline-block;\n      width: 400px;\n}\n\n.error-image{\n    width: 200px;\n    height: 200px;\n}\n\n.image-div{\n    display: inline-block;\n}\n\n.error-go-home-button{\n    margin: 5px;\n    font-size: 20px; \n    color: rgb(209,48,50);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  </div>\n  <div class=\"error-text\">\n  <div class=\"text-div\">\n  <div style=\"font-size: 50px;\">Oops!</div>\n  <div style=\"font-size: 30px\">Where are we?</div>\n  <div style=\"font-size: 20px;\">The page you are looking for was moved, removed, renamed or might never existed.</div>\n  <button class=\"error-go-home-button\" (click)=\"redirectToLogin()\">Go Home</button>\n  </div>\n  <div class=\"image-div\">\n  <img src=\"./app/games/space-storm/resources/images/error.png\" class=\"error-image\">\n  </div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorComponent = (function () {
    /**
     * Create an instance of ErrorComponent
     * @param _router An object of Router type.
     */
    function ErrorComponent(_router) {
        this._router = _router;
        this.router = _router;
        this.config = new __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]();
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    /**
     * The function navigate the user to home page
     */
    ErrorComponent.prototype.redirectToLogin = function () {
        this.router.navigateByUrl('');
    };
    /**
     * Enable the user to login by pressing the enter key and display the dropdown panel
     *
     * @param event An object of  KeyboardEvent type.
     *
     */
    ErrorComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.keyCode === 13) {
            this.router.navigateByUrl('');
        }
    };
    return ErrorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('document:keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ErrorComponent.prototype, "handleKeyboardEvent", null);
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
    })
    /**
     * Define the error page in case an error occur in the application
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/error.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n     width:100%;\r\n     position: fixed;\r\n     height: 55px;\r\n     line-height: 50px;\r\n     background-color:rgba(28, 26, 26, 1);\r\n     border: 2px solid transparent; \r\n     border-radius:1px; \r\n     bottom: 0px;\r\n}\r\n.second-footer{\r\n    width:100%;\r\n    border: 2px solid transparent; \r\n    border-radius:5px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.rightmost-footer-text{\r\n    text-align:right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"second-footer col-md-12 col-sm-12 col-xs-12 col-lg-12\">\n    <div class=\"misc-text col-md-6 col-sm-6 col-xs-6 col-lg-6\">\n      Copyright <a class=\"link-color\" href=\"#\">@XYZ</a>. All rights reserved.\n    </div>\n    <div class=\"misc-text col-md-6 col-sm-6 col-xs-6 col-lg-6 rightmost-footer-text\">\n      In case of any query please contact <a class=\"link-color\" href=\"mailto:gaming.practice@gmai.com\">gaming.practice@gmail.com</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    })
    /**Define the footer elements of the home page */
    ,
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/game-page/game-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#phaser-container {\n  width: 1163px;\n  margin: 0 auto; \n  \n}\n#game-page-container {\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/images/chessBackground.png")) + ");\n  width: 100%;\n  min-height: 100% !important;\n  overflow: visible;\n  display: block;\n  height:800px;\n}\n\n#overlay {\n  position: absolute;\n  top: 0px;\n  opacity: 1;\n  height: 500px;\n  width: 100%;\n  border: 5px solid #000;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/images/white-marble.png")) + ");\n}\n\n@font-face {\n    font-family: 'avqest';\n    src: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/fonts/avqest.woff2")) + ") format('woff2'),\n         url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/fonts/avqest.woff")) + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n#OuterDiv {\n  top: 20px;\n  position: relative;\n  width: 1163px;\n  margin: 0 auto;\n  border: 5px solid transparent; /* Safari 3.1-5 */\n  -o-border-image: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/images/container-border.png")) + ") 21 round; /* Opera 11-12.1 */\n  border-image: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/images/container-border.png")) + ")  21 round; \n}\n\n.w3-center {\n  text-align: center !important\n}\n\n.w3-content {\n  height: 450px !important;\n  width: 100% !important;\n}\n\n.paytable-arrows-left {\n  position: absolute;\n  top: 50%;\n  left: 1%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(-0%, -50%)\n}\n\n.paytable-arrows-right {\n  position: absolute;\n  top: 50%;\n  right: 1%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%);\n}\n\n.paytable-arrows {\n  border: 1px solid #04d;\n  background-color: rgb(128, 201, 216);\n  color: black;\n  outline:none;\n  padding: 0px 7px;\n  \n}\n\n.paytable-arrows:hover {\n  display: inline-block;\n  outline: 0;\n  padding: 0px 15px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  font-size: 30px;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.round {\n  border-radius: 50%;\n}\n\n#headingDiv {\n  text-align: center;\n  color: #000;\n  font-family: 'Garamond';\n  font-size: 50px;\n\n  font-weight: bolder;\n}\n\n.slide-content {\n  margin: 25px;\n  height: 315px;\n}\n\n.multiplier {\n  color: #000;\n}\n\n.outer-list-container {\n  margin : 0 auto;\n  width: 140px;\n}\n\n.outer-list-container ul {\n  margin-top : 20px;\n}\n\n.interface-paytable_symbolValues li {\n  float: none;\n  text-align: left;\n  list-style-type: none;\n  font-size: 20px;\n}\n\n.interface-paytable_symbolValues span {\n  float: none;\n  font-size: larger;\n  text-align: left;\n  font-weight: 900;\n  list-style: none;\n  font-size: 18px;\n}\n\n.special-symbol-text {\n  line-height: 24px;\n  font-size: 19px;\n  font-weight: bold;\n  color: #000;\n}\n\n.special-symbol-container {\n  width: 94%;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.close {\n  float: right;\n  font-size: 39px;\n  font-weight: 900;\n  line-height: 1;\n  color:red;\n  text-shadow: 0 1px #000;\n  padding: 1px 6px 0px 0px;\n  opacity: 1;\n  outline:none;\n  margin-right: 0px;\n}\n\n.interface-menu-base {\n  height: 30px;\n}\n\n.interface-menu-base {\n  height: 24px;\n  background: black;\n  background: linear-gradient(#333, #000);\n  width: 100%;\n  display: -ms-inline-flexbox;\n}\n\n.menu-base-span {\n  color: white;\n  display: -ms-inline-flexbox;\n  margin-top: 0.5px;\n}\n\n.col-sm-4 {\n  padding-left: 0px;\n}\n\n.imageButton {\n  background-color: transparent;\n  height: 22.5px;\n  border: transparent;\n}\n\n.textButton {\n  padding-top: 3px;\n  font-weight: bold;\n}\n\n#settingsOverlay {\n  position: absolute;\n\n  bottom: 30px;\n  left: 0px;\n  background-color: grey;\n  opacity: 1;\n  height: 50px;\n  width: 200px;\n}\n\n#helpOverlay {\n  position: absolute;\n  top: 0px;\n  background-color:rgb(88, 151, 186);\n  font-family: 'avqest';\n  font-size: 18px;\n  color:#000;\n  opacity: 0.95;\n  height: 500px;\n  width: 1152px;\n  border: 4px ridge #48d;\n  border-radius: 20px;\n  color: ivory;\n  font-size: 20px;\n}\n\n#helpOverlay .game-name{\n font-weight: 700;\n text-transform: uppercase;\n}\n\n#helpOverlay .highlight{\n    text-shadow: 0 0 1px #0000ff, 0 0 1.5px #ff0E0B, 0 0 .55px #800E0B;\n}\n\n#helpOverlay h1 {\n  font-size: 45px;\n  color: #cdf;\n  font-family: 'avqest';\n  text-shadow: 0 0 2px #0000ff, 0 0 1.5px #ff0E0B, 0 0 5px #800E0B, 0.5px 0.5px 0.1px #40340A;\n}\n\n#helpOverlay h2,h3 {\n  color: #138;\n  font-family: 'avqest';\n}\n\n#helpOverlay table{\n  margin: 50px;\n}\n\n#helpOverlay th {\n  padding: 15px;\n  text-align: center;\n  border: 1px solid;\n  font-family: 'avqest';\n  font-weight: 100;\n  font-size: 25px;\n  background-color: rgb(19,88,131);\n}\n\n#helpOverlay td {\n  padding: 15px;\n  border: 1px solid;\n}\n\n#scrollbar{\n  top: 70px;\n  height: 380px;\n  width: 1100px;\n  overflow-y: scroll;\n  margin: 2%;\n}\n::-webkit-scrollbar {\nwidth: 12px;\nheight: 12px;\n}\n\n::-webkit-scrollbar-track {\nborder: 1px solid rgb(19,88,131);\nborder-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\nbackground:  rgb(19,88,131);\nborder-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\nbackground: rgb(19,88,131);\n}\n\n#autoOverlay {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n  background-color:#000;\n  opacity: 1;\n  height: 100px;\n  width: 160px;\n  font-family: 'Graublau Web';\n  border-radius: 10px;\n  border: 3px solid #fff;\n}\n\n#autoOverlay .close {\n  font-size: 29px;\n  font-weight: 200;\n}\n#setting-overlay-label {\n  margin-left: 5px;\n}\n\n.spacebarToSpin-row {\n  margin-left: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n#autoplay-overlay-label {\n  margin:10px;\n}\n\n.reel-symbol {\n  width: 150px;\n  height: 150px;\n  margin: 0 auto;\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/images/symbols/reel.png")) + ") no-repeat;\n  background-position: 0px -1100px;\n}\n\n.symbol-payout-message{\n    font-size: 18px;\n    font-weight: bold;\n    color: #000;\n    text-align: center;\n}\n\n.spin-symbol-help-overlay\n{\n  width:120px;\n  height:120px;\n  margin: 0 auto;\n  background-position: 0px 0px;\n  transform: scale(0.8);\n  background-image: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/images/spinButton-logo.png")) + ");\n}\n\n.info-help-overlay{\n  width:300px;\n  height:80px;\n  margin: 0 auto;\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/chess/resources/images/infoPaytable.png")) + ") no-repeat;\n  background-position: 50px 28px;\n}\n\n.other-symbol-help-overlay .icon-autoplay{\n  background-color: transparent;\n  height: 22.5px;\n  border: transparent;\n}\n\n.other-symbol-help-overlay{\n  width:111px;\n  height:60px;\n  margin-left: 95px;\n  text-align: center;\n}\n.other-symbol-help-overlay .icon-top{\n  top: 29px;\n}\n\n.reel-symbol-1\n{\n  background-position: 0px 0px;\n}\n\n.reel-symbol-2 {\n  background-position: 0px -150px;\n}\n\n.reel-symbol-3 {\n  background-position: 0px -300px;\n}\n\n.reel-symbol-4 {\n  background-position: 0px -450px;\n}\n\n.reel-symbol-5 {\n  background-position: 0px -600px;\n}\n\n.reel-symbol-6 {\n  background-position: 0px -750px;\n}\n\n.scatter-symbol {\n  background-position: 0px -900px;\n}\n\n.wild-symbol {\n  background-position: 0px -1050px;\n}\n\n.jackpot-symbol {\n  background-position: 0px -1200px;\n}\n\n.mySlides{\n  width:100%;\n  height: 95%;\n}\n\n.footer-slide{\n  color: #000;\n  margin: 20px;\n  text-align: center;\n  height: 5%;\n  font-family: 'avqest';\n  font-size: 15px;\n}\n\n#error-popup-overlay {\n  background-color: rgba(0,0,0,0.7);\n  width: 1152px;\n  margin: 0 auto;\n  top:0px;\n  position: absolute;\n  height: 672px;\n\n}\n\n#error-popup {\n  position: absolute;\n  bottom: 222px;\n  left: 270px;\n  background-color: #000;\n  height: 260px;\n  width: 590px; \n  border: 5px solid #fff;\n  border-radius: 20px;\n \n}\n\ndiv button.closeButton{\n  border: 5px solid transparent;\n  border-radius: 50px;\n  height: 60px;\n  width: 195px;\n  margin:auto;\n  display:block;\n  font-weight: 600;\n  font-size: medium;\n  outline: none;\n}\n div .popUpText{\n  color: #fff;\n  font-size: 20px;\n  font-weight: 100px;\n  padding: 15px;\n  text-align: center;\n }\n\n .error-popup-header{\n  color: #fff;\n  font-size: 30px;\n  font-weight: 100px;\n  padding: 15px;\n  text-align: center;\n }\n\n .error-popup-close{\n  padding-top: 35px;\n }\n\n.autoPlay-span-options{\n  position: relative;\n  float: left;\n  height:22px;\n  width:50px;\n  padding:1px 3px 1px 10px;\n  margin: 2px 5px 2px 5px;\n  border-radius: 5px;\n  background-color: #484847;\n  overflow: hidden;\n  color:#ececec;\n  text-align: center;\n  cursor: pointer;\n}\n.autoPlay-span-options:hover{\n  background-color:rgb(128, 201, 216);;\n  color: #282828;\n}\n.autoPlay-span-other-options{\n  width: 110px;\n}\n.autoPlay-options{\n  cursor:pointer;\n}\n.autoPlay-span-counter{\n  position: relative;\n  float: left;\n  height:32px;\n  font-size: 24px;\n  color:white;\n\n  margin: 0 auto;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n}\n.auto-counter-panel{\n  margin-top:20px\n}\n\n.test-panel{\n  padding: 5px;\n  color: white;\n  background-color: #ace;\n  position: absolute;\n  right: 0px;\n  top:90px;\n  border-radius: 10px;\n  border: 3px ridge #ccc;\n  font-size: 20px;\n  width:445px;\n}\n\n.jackpot-cheet-mode{\n   padding: 5px;\n  color: red;\n  /*background-color: #ace;*/\n  \n  position: absolute;\n  right: 342px;\n  top:710px;\n  border-radius: 10px;\n  border: 3px ridge #ccc;\n  font-size: 20px;\n  width:116px;\n}\n\n.test-panel-grid {\n   margin-bottom : 15px;\n   margin-left: 30px;\n}\n\n.test-panel-tiles:hover{\n  background-color: #345;\n  cursor: pointer;\n}\n\n.selected-test-tile{\n  color: #f55;\n  background-color: #9f9;\n  border: 3px ridge #f55;\n  cursor: pointer;\n}\n\n.test-panel-tiles{\n  border: 1px solid red;\n  cursor: pointer;\n  \n}\n\n.test-panel-reel{\n  color: #000;\n  font-weight: bold;\n  background-color: #456;\n  border-radius: 10px;\n  border: 3px ridge #ccc;\n}\n\n.test-panel-reel .reel-symbol{\n  background-color: #FFF;\n  border-radius: 10px;\n  border: 3px solid #345;\n  transform: scale(0.7);\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.test-panel-reel .reel-symbol:hover{\n  background-color: rgb(128, 201, 216);\n  border-radius: 10px;\n  border: 3px ridge #f55;\n}\n\n#paytable{\n  font-size: 18px;\n  font-family: 'avqest';\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/games/chess/game-page/game-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"game-page-container\">\n  <div id=\"OuterDiv\">\n    <div id=\"phaser-container\"></div>\n    <div class=\"interface-menu-base menu-base-span\" *ngIf=\"!isInfoFooterLineHidden\">\n      <div class=\"col-sm-4 menu-base-span\">\n        <div>\n          <button class=\"imageButton glyphicon glyphicon-cog\" value=\"set\" (click)=\"settingsButton()\"></button>\n        </div>\n        <div>\n          <button class=\"imageButton glyphicon glyphicon-question-sign\" value=\"help\" (click)=\"helpButton()\"></button>\n        </div>\n        <div>\n          <button class=\"imageButton glyphicon glyphicon-volume-up\" (click)=\"mute($event)\" value=\"sound\"></button>\n        </div>\n        <div>\n          <button class=\"imageButton textButton\" value=\"auto\" (click)=\"autoMenuButton()\">AUTO</button>\n        </div>\n      </div>\n      <div class=\"col-sm-8 menu-base-span\">\n        <div class=\"col-sm-8 menu-base-span\">\n          <div class=\"col-sm-4\"><span id=\"bet\">Bet: $ </span><span id=\"betValue\">{{gameData.maxBet}}</span></div>\n          <div class=\"col-sm-4\"><span id=\"cash\">Cash: $ </span><span id=\"cashValue\">{{gameData.cash}}</span></div>\n          <div class=\"col-sm-4\"><span id=\"win\">Win: $ </span><span id=\"winValue\">{{gameData.win}}</span></div>\n        </div>\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-3\" *ngIf=\"isTestModeActive\">\n          <button class=\"imageButton textButton\" value=\"test\" (click)=\"toggleTestPanel()\">TEST MODE -></button>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"overlay\" [hidden]=\"isPaytableHidden\">\n      <button type=\"button\" class=\"close\" (click)=\"paytableCloseButton()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"w3-content w3-display-container\">\n        <div class=\"mySlides\" id=\"wild\">\n          <div id=\"headingDiv\">WILD SYMBOL</div>\n          <div class=\"slide-content\">\n            <div class=\"special-symbol-container\">\n              <div class=\"reel-symbol wild-symbol\"></div>\n              <div class=\"special-symbol-text\">\n                Wild symbol can appear anywhere on the reels in the main game and Re-Spins and substitute for all symbols except for Scatter\n                symbol and Jackpot symbol.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"scatter\">\n          <div id=\"headingDiv\">SCATTER SYMBOL</div>\n          <div class=\"slide-content\">\n            <div class=\"special-symbol-container\">\n              <div class=\"reel-symbol scatter-symbol\"></div>\n              <div class=\"special-symbol-text\">\n                Occurrence of more than one scatter symbol on an individual reel will still be counted as ONE scatter per REEL. <br/>                3 or more reels containing scatter symbol/symbols appearing in the main game will activate free spins.<br/>                5 reels with scatter/scatters : 20 Free Spins<br/> 4 reels with scatter/scatters : 15 Free Spins<br/> 3 reels\n                with scatter/scatters : 10 Free Spins<br/> No additional Free Spins will be activated during Free Spins.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"symbols-1\">\n          <div id=\"headingDiv\">SYMBOL PAYOUT VALUE</div>\n          <div class=\"slide-content\">\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-1\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span style=\"color: #000\">5 </span>&nbsp;<span class=\"multiplier\">500</span>\n                  </li>\n                  <li><span style=\"color: #000\">4 </span>&nbsp;<span class=\"multiplier\">150</span>\n                  </li>\n                  <li><span style=\"color: #000\">3 </span>&nbsp;<span class=\"multiplier\">20</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-2\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span style=\"color: #000\">5 </span>&nbsp;<span class=\"multiplier\">500</span>\n                  </li>\n                  <li><span style=\"color: #000\">4 </span>&nbsp;<span class=\"multiplier\">150</span>\n                  </li>\n                  <li><span style=\"color: #000\">3 </span>&nbsp;<span class=\"multiplier\">20</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-3\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span style=\"color: #000\">5 </span>&nbsp;<span class=\"multiplier\">200</span>\n                  </li>\n                  <li><span style=\"color: #000\">4 </span>&nbsp;<span class=\"multiplier\">60</span>\n                  </li>\n                  <li><span style=\"color: #000\">3 </span>&nbsp;<span class=\"multiplier\">10</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"symbol-payout-message\">*Coin payout values are on bet level 1</div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"symbols-2\">\n          <div id=\"headingDiv\">SYMBOL PAYOUT VALUE</div>\n          <div class=\"slide-content\">\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-4\"></div>\n              <!--  <div style=\"min-height: 180px; float:le&#10060;ft; display:table-cell; margin-right:20px\"></div> -->\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span style=\"color:#000\">5</span>&nbsp;<span class=\"multiplier\">200</span>\n                  </li>\n                  <li><span style=\"color:#000\">4</span>&nbsp;<span class=\"multiplier\">60</span>\n                  </li>\n                  <li><span style=\"color:#000\">3</span>&nbsp;<span class=\"multiplier\">10</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-5\"></div>\n              <!-- <div style=\"min-height: 180px; float:left; display:table-cell; margin-right:20px\"></div> -->\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span style=\"color: #000\">5 </span>&nbsp;<span class=\"multiplier\">60</span>\n                  </li>\n                  <li><span style=\"color: #000\">4 </span>&nbsp;<span class=\"multiplier\">15</span>\n                  </li>\n                  <li><span style=\"color: #000\">3 </span>&nbsp;<span class=\"multiplier\">2</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-6\"></div>\n              <!--  <div style=\"min-height: 180px; float:left; display:table-cell; margin-right:20px\"></div> -->\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span style=\"color: #000\">5 </span>&nbsp;<span class=\"multiplier\">60</span>\n                  </li>\n                  <li><span style=\"color: #000\">4 </span>&nbsp;<span class=\"multiplier\">15</span>\n                  </li>\n                  <li><span style=\"color: #000\">3 </span>&nbsp;<span class=\"multiplier\">2</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"symbol-payout-message\">*Coin payout values are on bet level 1</div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"betlines\">\n          <div id=\"headingDiv\"> WINNING BET LINES</div>\n          <div id=\"paytable\">\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"jackpot\">\n          <div id=\"headingDiv\">NGP JACKPOT SYMBOL</div>\n          <div class=\"slide-content\">\n            <div class=\"special-symbol-container\">\n              <div style=\"text-align:center;  margin-bottom: 62px;\"></div>\n              <div class=\"reel-symbol jackpot-symbol\"></div>\n              <div class=\"special-symbol-text\">\n                3 or more reels containing jackpot symbol/symbols appearing in the main game will activate the jackpot feature. The Jackpot\n                symbol can appear anywhere on the reels during the free-Spins and will trigger the jackpot feature. Occurrence\n                of more than one jackpot symbol on an individual reel will still be counted as ONE jackpot per REEL.\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"footer-slide\">\n          Only the highest win per active bet line is paid. |*| Bet line wins pay when in succession from leftmost to right. |*| Malfunction\n          voids all pays and plays.\n        </div>\n        <button class=\" paytable-arrows-left paytable-arrows round\" (click)=\"Plusdivs(-1)\">&#8249;</button>\n        <button class=\" paytable-arrows-right paytable-arrows round\" (click)=\"Plusdivs(1)\">&#8250;</button>\n      </div>\n    </div>\n    <div id=\"error-popup-overlay\" [hidden]=\"isErrorPopupHidden\">\n      <div id=\"error-popup\">\n        <div class=\"error-popup-header\">\n          {{errorPopUpheader}}\n        </div>\n        <div class=\"popUpText\">\n          {{errorPopUpInnerText}}\n        </div>\n        <div class=\"error-popup-close\">\n          <button type=\"button\" class=\"closeButton\" (click)=\"errorPopUpCloseButton()\">CLOSE</button>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"settingsOverlay\" [hidden]=\"isSettingsHidden\">\n      <button type=\"button\" class=\"close\" (click)=\"settingsCloseButton()\">&times;</button>\n      <div id=\"setting-overlay-label\">\n        <label>Settings:</label>\n      </div>\n      <div class=\"spacebarToSpin-row\">\n        <label>\n          <input type=\"checkbox\" id=\"spacebarToSpin\" name=\"spacebarToSpin\" [(ngModel)]=\"isSpacebarToSpin\">\n          Spacebar to spin\n        </label>\n      </div>\n    </div>\n    <div id=\"helpOverlay\" [hidden]=\"isHelpHidden\">\n      <button type=\"button\" id=\"helpOverlayCloseButton\" class=\"close helpOverlayCloseButton\" style=\"margin: 1%;\" (click)=\"helpCloseButton()\">&times;</button>\n      <div id=\"scrollbar\">\n        <br>\n        <h1>Frozen Knights - Game Rules</h1>\n\n        <p><span class=\"game-name highlight\">Frozen Knights</span> is a 5-reel, 3-row, 20-line video slot featuring Wild substitutions,\n          Scatter symbol, a Free spin feature and a Jackpot Feature.\n        </p>\n        <br>\n        <ul>\n          <li>Game is played with 20 bet lines (fixed), 1-10 bet levels and different coin values.</li>\n          <li>The bet level is set using the <span class=\"highlight\">Level</span> selector.</li>\n          <li>The coin value is set using the <span class=\"highlight\">Coin Value</span> selector.</li>\n          <li><span class=\"highlight\">Coins</span> displays the number of coins the player has available to wager.</li>\n          <li><span class=\"highlight\">Max Bet</span> plays the game at the maximum bet lines, highest bet level, and the current\n            coin value.</li>\n          <li><span class=\"highlight\">Autoplay</span> automatically plays the game for the selected number of rounds.</li>\n          <li>Winning combinations and payouts are made according to the <span class=\"highlight\">Paytable</span>.</li>\n          <li>Bet level is the number of coins bet per bet line.</li>\n          <li>A bet line win in coins is equal to the value shown on the <span class=\"highlight\">Paytable</span> multiplied by\n            the bet level.</li>\n          <li>A bet line win in currency is equal to the win in coins multiplied by the coin value.</li>\n          <li>Total win is calculated by summation of win per bet line.</li>\n          <li>Bet line wins pay if in succession from the leftmost reel to the rightmost reel.</li>\n          <li>All coin wins pay on bet lines only.</li>\n        </ul>\n\n\n        <h2>Wild</h2>\n        <p>In the main game, Wild symbols can appear anywhere on the reels and substitute for all symbols except for <span class=\"highlight\">Scatter</span>          symbols.\n\n          <h2>Scatter</h2>\n\n          <p>In the main game, Occurrence of more than one scatter symbol on an individual reel will still be counted as\n            <span class=\"highlight\">One</span> scatter per REEL. 3 or more reels containing scatter symbol/symbols appearing\n            in the main game will activate free spins.</p>\n\n          <ul>\n            <li>5 reels with scatter/scatters : 20 Free Spins</li>\n            <li>4 reels with scatter/scatters : 15 Free Spins</li>\n            <li>3 reels with scatter/scatters : 10 Free Spins</li>\n          </ul>\n\n          <p>No additional Free Spins will be activated during Free Spins.</p>\n\n          <h2>Game Functions</h2>\n          <p>The table below lists the different buttons found in the game and describes their functions.</p>\n\n          <p>Function</p>\n          <table>\n            <tr>\n              <th>\n                Symbol\n              </th>\n              <th>\n                Functionality\n              </th>\n            </tr>\n            <tr>\n              <td>\n                <div class=\"spin-symbol-help-overlay\"></div>\n              </td>\n              <td>Click to start a game round at the current bet level and coin value (alternatively, press the spacebar).\n              </td>\n            </tr>\n\n            <tr>\n              <td>\n                <div class=\"other-symbol-help-overlay\"><label class=\"glyphicon glyphicon-cog icon-top\"></label></div>\n              </td>\n              <td>Click to open the game settings menu and select game options. Refer to Game Settings section below.</td>\n            </tr>\n\n            <tr>\n              <td>\n                <div class=\"other-symbol-help-overlay\"><label class=\"glyphicon glyphicon-volume-up icon-top\"></label></div>\n              </td>\n              <td>Click to mute the game sounds.</td>\n            </tr>\n\n            <tr>\n              <td>\n                <div class=\"other-symbol-help-overlay\"><label class=\"glyphicon glyphicon-question-sign icon-top\"></label></div>\n              </td>\n              <td>Click to open the game rules.</td>\n            </tr>\n\n            <tr>\n              <td>\n                <div class=\"other-symbol-help-overlay\"><span class=\"icon-top icon-autoplay\">AUTO</span></div>\n              </td>\n              <td>Click to open the Autoplay settings menu and play the game automatically. Select the number of spins to Autoplay.\n              </td>\n            </tr>\n\n            <tr>\n              <td>\n                <div class=\"info-help-overlay\"></div>\n              </td>\n              <td>Click the arrows pointing to the left or right to scroll through the PAYTABLE pages.</td>\n            </tr>\n          </table>\n\n          <h2>Setting Options</h2>\n          <ul>\n            <li>To access game settings, click the gear icon in the game panel.</li>\n            <li>Spacebar to spin. Turns the spacebar function on or off.</li>\n          </ul>\n\n          <!--Advanced Autoplay Options\n        To set advanced autoplay options click AUTOPLAY, and then click Advanced settings.\n        On any win. Stop Autoplay when you win in a round.\n        If single win exceeds. Stops Autoplay when the amount you win exceeds or equals the amount you specify.\n        If cash increases by. Stops Autoplay if cash increases by the amount you specify.\n        If cash decreases by. Stops Autoplay if cash decreases by the amount you specify.\n        Click Reset to clear all selected Stop Autoplay options.\n        Note: Some autoplay options are mandatory for some jurisdictions.\n        Note: When changing Autoplay settings during a game round or re-spin, all settings will take effect once the game round or feature is completed.\n        Note: If you are disconnected while playing, all Autoplay settings will return to default when you reload the game.-->\n        <h2>NGP Jackpot Rules</h2>\n        <ul>\n          <li>The Jackpot is a  linked progressive jackpot, where every time the game is played by a player a portion of the bet is\n            added to the Jackpot.</li>\n          <li>Linked Progressive Jackpot wins are subject to verification by the Casino Operator and the Software Supplier. All decisions\n            are final and no correspondence will be entered into.</li>\n          <li>Jackpot values displayed in the game are delayed by up to 5 seconds. On exceptionally rare occasions, it may\n            happen that two jackpots are won within those 5 seconds, in which case the win of the second jackpot is the\n            new re-seeded jackpot which (on very rare occasions) is smaller than the previous jackpot won. All players\n            playing the game when a jackpot is won will receive a notification within 5 seconds about the jackpot amount\n            being won.</li>\n          <li>When one game round makes a claim for a certain jackpot, it is locked for that game round and simultaneously\n            assured that no other game round can claim the same jackpot. Therefore, it is technically not possible to have\n            two simultaneous wins of the same jackpot.</li>\n          <li>If the communication between the Casino and Jackpot server fails, the game becomes unavailable. There will be\n            no contributions or claims towards the Jackpot. The Jackpot amount remains the same until the communication\n            is resumed.</li>\n          <li>The  Linked Progressive Jackpot amount paid out is the Progressive Jackpot value on the NGP Jackpot server when a jackpot\n            is won. Every effort is made to ensure that the Progressive Jackpot value displayed in the game is the same\n            as the one on the casino server.</li>\n          <li>Frozen Knights contains NGP Jackpot</li>\n          <ul>\n            <li>5.00% of the bet is contributed to the NGP Jackpot.</li>\n            <li>The current Jackpot amount is displayed at the top-right of the game.</li>\n            <li>The Jackpot can be won when PLAYING FOR FUN.</li>\n          </ul>\n        </ul>\n          <h2>Return to Player</h2>\n          <ul>\n            <li>The theoretical return to player for this game is 92.3%.</li>\n          </ul>\n\n          <h2>Additional Information</h2>\n          <!--/*The following game features and settings may be subject to the terms and conditions of the gaming site. For more information on the following, refer to the gaming website:\n        The procedures used to manage unfinished game rounds.\n        The time after which inactive game sessions automatically end.*/-->\n          <ul>\n            <li>In the event of malfunction of the gaming hardware/software, all affected game bets and payouts are rendered\n              void and all affected bets refunded.\n            </li>\n          </ul>\n\n          <h2>Game rules generated:</h2>\n          <p>2017-06-12 12:06:05 (IST)</p>\n      </div>\n    </div>\n    <div id=\"autoOverlay\" [hidden]=\"autoCounterHidden\">\n      <span>\n        <button type=\"button\" class=\"close\" (click)=\"autoCloseButton()\">&times;</button>\n      </span>\n      <table class=\"auto-counter-panel\">\n        <tr>\n          <td>\n            <span class=\"autoPlay-span-counter\">\n                         <label class=\"autoPlay-options\">{{totalSpin}}</label><label [hidden]=\"isUntilStop\" class=\"autoPlay-options\">/{{autoPlayValue}}</label>\n                    </span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span (click)=\"autoPlayStop()\" class=\"autoPlay-span-options autoPlay-span-other-options col-sm-12\">\n                       <label >STOP</label>\n                    </span>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div id=\"autoOverlay\" [hidden]=\"isAutoHidden\">\n      <button type=\"button\" class=\"close\" (click)=\"autoCloseButton()\">&times;</button>\n      <div id=\"autoplay-overlay-label\">\n        <table class=\"autoPlay\">\n          <tr>\n            <td>\n              <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='10'>10X\n                </span >\n                <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='25'>25X\n                </span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='50'>50X\n                                         \n                </span>\n              <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='100'>100X\n                </span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <span class=\"autoPlay-span-options autoPlay-span-other-options col-sm-12\" (click)=\"autoSpin($event)\" data='UNTILSTOP'>UNTIL STOP\n               </span>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div id=\"test-panel\" class=\"test-panel\" [hidden]=\"isTestPanelHidden\">\n    <div class=\"test-panel-grid\">\n      <div class=\"row\">\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"1\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"4\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"7\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"10\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"13\">\n          A\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"2\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"5\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"8\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"11\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"14\">\n          A\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"3\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"6\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"9\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"12\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"15\">\n          A\n        </div>\n      </div>\n    </div>\n\n    <div class=\"test-panel-reel\">\n      <div class=\"row\">\n        <div class=\"col-sm-4 reel-symbol reel-symbol-1\" (click)=\"testSymbolSelect($event)\" symbol-number=\"1\">\n          A\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-2\" (click)=\"testSymbolSelect($event)\" symbol-number=\"2\">\n          B\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-3\" (click)=\"testSymbolSelect($event)\" symbol-number=\"3\">\n          C\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-4 reel-symbol reel-symbol-4\" (click)=\"testSymbolSelect($event)\" symbol-number=\"4\">\n          D\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-5\" (click)=\"testSymbolSelect($event)\" symbol-number=\"5\">\n          E\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-6\" (click)=\"testSymbolSelect($event)\" symbol-number=\"6\">\n          F\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-4 reel-symbol scatter-symbol\" (click)=\"testSymbolSelect($event)\" symbol-number=\"7\">\n          S\n        </div>\n        <div class=\"col-sm-4 reel-symbol wild-symbol\" (click)=\"testSymbolSelect($event)\" symbol-number=\"8\">\n          W\n        </div>\n        <div class=\"col-sm-4 reel-symbol jackpot-symbol\" (click)=\"testSymbolSelect($event)\" symbol-number=\"9\">\n          Z\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"jackpot-cheet-mode\" [hidden]=\"isJackpotTestModeHidden\">\n    <select>\n      <option value=\"JA\">50</option>\n      <option value=\"JB\">100</option>\n      <option value=\"JC\">200</option>\n      <option value=\"JD\">300</option>\n      <option value=\"JE\">400</option>\n      <option value=\"JF\">500</option>\n      <option value=\"JG\">600</option>\n      <option value=\"JH\">Jackpot</option>\n    </select>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/games/chess/game-page/game-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_page_service__ = __webpack_require__("../../../../../src/app/games/chess/game-page/game-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_chess__ = __webpack_require__("../../../../../src/app/games/chess/main/chess.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__ = __webpack_require__("../../../../../src/app/contracts/phaser/data-object-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_paytable__ = __webpack_require__("../../../../../src/app/shared/paytable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GamePageComponent = (function () {
    /**
      * Create an instance of GamePageComponent and intailise the class properties.
      *
      * @param _gamePageService  An object of GamePageService type.
      * @param _renderer An object of Element type.
      * @param _router  An object of Router type.
      * @param _dataObjectMapper An object of DataObjectMapper type used for mapping the data recieved from backend.
      * @param location An object of PlatformLocation type.
      *
      */
    function GamePageComponent(_gamePageService, _renderer, _router, _dataObjectMapper, location) {
        this._gamePageService = _gamePageService;
        this._renderer = _renderer;
        this._router = _router;
        this._dataObjectMapper = _dataObjectMapper;
        this.location = location;
        this.game = new __WEBPACK_IMPORTED_MODULE_2__main_chess__["a" /* Chess */](_gamePageService, _router, location);
        this.isPaytableHidden = true;
        this.isInfoFooterLineHidden = true;
        this.slideIndex = 1;
        this.element = _renderer;
        this.router = _router;
        this.gamePageService = _gamePageService;
        this.dataObjectMapper = _dataObjectMapper;
        this.gameCustomEvents = { toggleMute: 'toggleMute', autoPlay: 'autoPlay', autoStop: 'autoStop' };
        this.isTestModeActive = new __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */]().isTestModeActive;
        this.isTestPanelHidden = true;
        this.isJackpotState = false;
        this.isJackpotTestModeActive = false;
        this.isJackpotTestModeHidden = true;
        this.isGameFocused = false;
    }
    /**
     * Intialise all the popups,audio and call startMyGame() to intiate frozen knights.
     */
    GamePageComponent.prototype.ngOnInit = function () {
        this.startMyGame();
        this.muteAudio = false;
        this.isSettingsHidden = true;
        this.isHelpHidden = true;
        this.isAutoHidden = true;
        this.isSpacebarToSpin = false;
        this.isInfoFooterLineHidden = true;
        this.isErrorPopupHidden = true;
        this.Showdivs(this.slideIndex);
        this.volume = 1;
        this.autoPlayValue = '-1';
        this.autoPlayCounter = -1;
        this.autoCounterHidden = true;
        this.autoStop = false;
        this.isUntilStop = false;
        this.totalSpin = 0;
        var paytable = document.getElementById('paytable');
        /// <summary>
        /// method to create paytable
        /// parameters
        /// 1) Number of betLines
        /// 2) Number of Reels
        /// 3) Number of Tiles
        /// 4) Size of betLineSquare
        /// 5) Number of rows in paytable
        /// 6) WidthGap
        /// 7) HeightGap
        /// 8) BorderSize
        /// 9) PaytableColor
        /// 10) PayTableGridStyle
        /// 11) TileColor
        /// 12) FontColor
        /// </summary>
        var paytableHTML = __WEBPACK_IMPORTED_MODULE_7__shared_paytable__["a" /* init */].apply(this, [20, 5, 3, 20, 4, 6, 6, 1, '#889', '2px ridge #aaa', '#fff', '#fff']);
        paytable.appendChild(paytableHTML);
    };
    GamePageComponent.prototype.handleClick = function (event) {
        var element = event.target || event.srcElement;
        var isClickWithInGame = false;
        while (element.parentNode) {
            if ((element.parentNode.id === 'OuterDiv') || (element.parentNode.id === 'test-panel')) {
                isClickWithInGame = true;
            }
            element = element.parentNode;
        }
        this.isGameFocused = isClickWithInGame;
    };
    /**
     * The function is controlling display of different divs in carousel
     *
     * @param slideindex The index of slide that is displayed
     *
     */
    GamePageComponent.prototype.Showdivs = function (slideindex) {
        var slideCounter;
        var slides = this.element.nativeElement.getElementsByClassName('mySlides');
        if (slideindex > slides.length) {
            this.slideIndex = 1;
        }
        if (slideindex < 1) {
            this.slideIndex = slides.length;
        }
        for (slideCounter = 0; slideCounter < slides.length; slideCounter++) {
            slides[slideCounter].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
    };
    /**
     * The function is called when the arrow buttons are click
     *
     * @param slideindex It add or subtract 1 from the cureent slide depending on which arrow is clicked.
     * left -1
     * right +1
     *
     */
    GamePageComponent.prototype.Plusdivs = function (slideindex) {
        this.slideIndex += slideindex;
        this.Showdivs(this.slideIndex);
    };
    /**
     * The function is used to close paytable and reset the counter again to 1.
     */
    GamePageComponent.prototype.paytableCloseButton = function () {
        this.resetPaytableSlidecounter();
        this.isPaytableHidden = true;
    };
    /**
     * The function to reset the paytable slide counter to 1.
     */
    GamePageComponent.prototype.resetPaytableSlidecounter = function () {
        this.slideIndex = 1;
        this.Showdivs(1);
    };
    /**
     * The function start the game by calling the initiateGame() of frozen knights.
     */
    GamePageComponent.prototype.startMyGame = function () {
        this.game.initiateGame(this);
    };
    /**
     * The method toggle the test panel visibility while keeping in mind the visibility status of jackpot test panel
     */
    GamePageComponent.prototype.toggleTestPanel = function () {
        if (!this.isJackpotTestModeActive) {
            this.isJackpotTestModeHidden = true;
            this.isTestPanelHidden = !this.isTestPanelHidden;
        }
        else {
            this.isTestPanelHidden = true;
            this.isJackpotTestModeHidden = !this.isJackpotTestModeHidden;
        }
    };
    /**
     * The method remove/add css classes depending upon the tile selected in the test panel
     *
     * @param event A Mouse event
     *
     */
    GamePageComponent.prototype.testTileSelect = function (event) {
        this.selectedTestTile = event.target.getAttribute('tile-number');
        this.event = event;
        var tiles = this.element.nativeElement.getElementsByClassName('test-panel-tiles');
        for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
            var element = tiles_1[_i];
            element.classList.remove('selected-test-tile');
        }
        event.target.classList.add('selected-test-tile');
        document.onkeyup = this.getKey.bind(this);
    };
    /**
     * The function let the user to enter the symbols in test panel using keyboard
     *
     * @param e A keyboard event
     *
     */
    GamePageComponent.prototype.getKey = function (e) {
        var alphabet = this.event.target.innerText;
        var key_code = e.keyCode;
        if (key_code === 65) {
            alphabet = 'A';
        }
        else if (key_code === 66) {
            alphabet = 'B';
        }
        else if (key_code === 67) {
            alphabet = 'C';
        }
        else if (key_code === 68) {
            alphabet = 'D';
        }
        else if (key_code === 69) {
            alphabet = 'E';
        }
        else if (key_code === 70) {
            alphabet = 'F';
        }
        else if (key_code === 83) {
            alphabet = 'S';
        }
        else if (key_code === 87) {
            alphabet = 'W';
        }
        else if (key_code === 90) {
            alphabet = 'Z';
        }
        this.event.target.innerText = alphabet;
    };
    /**
     * The method remove/add css classes depending upon the symbol selected in the test panel
     *
     * @param event A mouse event
     *
     */
    GamePageComponent.prototype.testSymbolSelect = function (event) {
        this.selectedTestSymbol = event.target.getAttribute('symbol-number');
        var tiles = this.element.nativeElement.getElementsByClassName('test-panel-tiles');
        for (var _i = 0, tiles_2 = tiles; _i < tiles_2.length; _i++) {
            var element = tiles_2[_i];
            if (element.getAttribute('tile-number') === this.selectedTestTile) {
                element.innerText = event.target.innerText;
            }
        }
    };
    /**
     * The method to capture mute event from webpage.
     *
     * @param event A Mouse Event
     *
     */
    GamePageComponent.prototype.mute = function (event) {
        if (!this.muteAudio) {
            event.target.classList.remove('glyphicon-volume-up');
            event.target.classList.add('glyphicon-volume-off');
            this.muteAudio = true;
        }
        else {
            event.target.classList.remove('glyphicon-volume-off');
            event.target.classList.add('glyphicon-volume-up');
            this.muteAudio = false;
        }
        var signal = new Phaser.Signal();
        signal.add(this.game.phaserInstance.state.states.MainScreen.methods.externalEventListner);
        signal.dispatch(this.gameCustomEvents.toggleMute);
    };
    /**
     * The method is called when user trigger the auto play feature
     *
     * @param event A mouse event
     *
     */
    GamePageComponent.prototype.autoSpin = function (event) {
        if (this.game.phaserInstance.state.states.MainScreen.stateAssets.reels[4].spinSpeed === 0) {
            this.totalSpin = 0;
            this.autoStop = false;
            this.isUntilStop = false;
            this.autoPlayValue = event.currentTarget.getAttribute('data');
            this.autoPlayCounter = parseInt(this.autoPlayValue, 10);
            if (!this.autoPlayCounter) {
                this.isUntilStop = true;
                this.autoPlayCounter = Number.MAX_SAFE_INTEGER;
            }
            var signal = new Phaser.Signal();
            signal.add(this.game.phaserInstance.state.states.MainScreen.methods.externalEventListner);
            signal.dispatch(this.gameCustomEvents.autoPlay);
        }
        else {
            // TODO: Add disable sound
        }
    };
    /**
     * The method is called when the user stop the auto play feature. It also hide the auto play panel and dispatch the event.
     */
    GamePageComponent.prototype.autoPlayStop = function () {
        this.autoStop = true;
        this.isAutoHidden = false;
        this.autoCounterHidden = true;
        this.autoPlayCounter = -1;
        var signal = new Phaser.Signal();
        signal.add(this.game.phaserInstance.state.states.MainScreen.methods.externalEventListner);
        signal.dispatch(this.gameCustomEvents.autoStop);
    };
    /**
     * The method to to toggle settings button and if user clicks on settings button then auto panel hides
     */
    GamePageComponent.prototype.settingsButton = function () {
        // if user clicks on settings button then auto panel hides
        if (!this.isAutoHidden) {
            this.isAutoHidden = true;
        }
        this.isSettingsHidden = !this.isSettingsHidden;
    };
    /**
     * The method to to toggle auto button while checking the visibility status of setting pop up as well
     */
    GamePageComponent.prototype.autoMenuButton = function () {
        if (!this.isSettingsHidden) {
            this.isSettingsHidden = true;
        }
        if (this.autoPlayCounter !== -1) {
            this.isAutoHidden = true;
            this.autoCounterHidden = !this.autoCounterHidden;
        }
        else if (this.autoPlayCounter === -1) {
            this.isAutoHidden = !this.isAutoHidden;
            this.autoCounterHidden = true;
        }
    };
    /**
     * The method to to close settings button
     */
    GamePageComponent.prototype.settingsCloseButton = function () {
        this.isSettingsHidden = true;
    };
    /**
     * The method to to toggle help button by first checcking the visibility status of the paytable
     */
    GamePageComponent.prototype.helpButton = function () {
        if (this.isPaytableHidden === false) {
            this.paytableCloseButton();
        }
        this.isHelpHidden = !this.isHelpHidden;
    };
    /**
     * The method to to close help button
     */
    GamePageComponent.prototype.helpCloseButton = function () {
        this.isHelpHidden = true;
    };
    /**
     * The  method to close auto button and hide the visibility.
     */
    GamePageComponent.prototype.autoCloseButton = function () {
        this.isAutoHidden = true;
        this.autoCounterHidden = true;
    };
    /**
     * The function is used to close the error popup
     */
    GamePageComponent.prototype.errorPopUpCloseButton = function () {
        this.isErrorPopupHidden = true;
    };
    return GamePageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GamePageComponent.prototype, "handleClick", null);
GamePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-game-page',
        template: __webpack_require__("../../../../../src/app/games/chess/game-page/game-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/games/chess/game-page/game-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__game_page_service__["a" /* GamePageService */], __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__["a" /* DataObjectMapper */]]
    })
    /** Define the game page component for Frozen knights*/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_page_service__["a" /* GamePageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_page_service__["a" /* GamePageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__["a" /* DataObjectMapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__["a" /* DataObjectMapper */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* PlatformLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* PlatformLocation */]) === "function" && _e || Object])
], GamePageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/game-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/game-page/game-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamePageService = (function () {
    /**
     *
     *Create an instance of App config and GamePageService
     * @param _http  An object of HTTP type.
     *
     */
    function GamePageService(_http) {
        this._http = _http;
        this.config = new __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]();
        this.httpServiceProvider = _http;
    }
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * to get the game route selected by the user
     *
     * @param routee The name of the game
     * @return An observable of ApiResponse type.
     *
     */
    GamePageService.prototype.getGame = function (routee) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get,
            url: this.config.RouteConstants.gameRoute + '/' + routee,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    /**
    * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
    * to activate the spin when the user is on mainscreen state.
    *
    * @param postSpinDTO Define an object required by the backened for spin to process.(post-spin-dto)
    * @return An observable of ApiResponse type.
    *
    */
    GamePageService.prototype.postSpinData = function (postSpinDTO) {
        var options;
        if (this.config.isTestModeActive && postSpinDTO.cheatSymbolArray.length === 15) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.testMode,
                body: "bet=" + postSpinDTO.bet + "&" +
                    ("level=" + postSpinDTO.level + "&") +
                    ("coinValue=" + postSpinDTO.coinValue + "&") +
                    ("totalCoins=" + postSpinDTO.totalCoins + "&") +
                    ("cash=" + postSpinDTO.totalCash + "&") +
                    ("gameId=" + postSpinDTO.gameId + "&") +
                    ("cheatSymbolArray=" + postSpinDTO.cheatSymbolArray)
            });
        }
        else {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.postSpinRoute,
                body: "bet=" + postSpinDTO.bet + "&" +
                    ("level=" + postSpinDTO.level + "&") +
                    ("coinValue=" + postSpinDTO.coinValue + "&") +
                    ("totalCoins=" + postSpinDTO.totalCoins + "&") +
                    ("cash=" + postSpinDTO.totalCash + "&") +
                    ("gameId=" + postSpinDTO.gameId)
            });
        }
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    /**
    * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
    * to activate the spin when the user is on jackpot state.
    *
    * @param postSpinDTO Define an object required by the backened for spin to process.(post-spin-dto)
    * @param isJackpotTestModeActive Define whether the jackpot test mode is active or not
    * @return An observable of ApiResponse type.
    *
    */
    GamePageService.prototype.postJackpotSpinData = function (postSpinDTO, isJackpotTestModeActive) {
        var options;
        if (isJackpotTestModeActive) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.jackpotTestMode,
                body: "gameId=" + postSpinDTO.gameId + "&" +
                    ("symbol=" + postSpinDTO.cheatsymbol)
            });
        }
        else {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.jackpotSpin,
                body: "gameId=" + postSpinDTO.gameId + "&"
            });
        }
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    /**
    * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
    * to get the value of NGP Jackpot counter
    *
    * @return An observable of ApiResponse type.
    *
    */
    GamePageService.prototype.getJackpotCounter = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get,
            url: this.config.RouteConstants.getJackpotCash,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, false);
    };
    return GamePageService;
}());
GamePageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /** Define the service required by the game like normal spin,spin on jackpot page, jackpot counter  */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], GamePageService);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/game-page.service.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/chess.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_state_provider__ = __webpack_require__("../../../../../src/app/games/chess/main/game-state-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chess; });
/// <reference types="phaser-ce" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Chess = (function () {
    /**
     * Intialise the game related data
     * @param _httpService An object of Http type.
     * @param _router An object of Router type.
     * @param location An object of Platform location type used to destroy the phaser instance when back button is pressed.
     *
     */
    function Chess(_httpService, _router, location) {
        var _this = this;
        /**
        * Binds back button of browser  with current location.
        * onPopping from current state checks if phaser world is-
        * (1) true - destroys the older previous phaser Instance/phaser world
        * (2) false- do nothing
        */
        location.onPopState(function () {
            if (_this.phaserInstance.world) {
                _this.phaserInstance.destroy();
            }
        });
        /**
          * Used to destroy the phaser instance like the music playing when the user log out from the game
         */
        _router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationStart */]) {
                if (_this.phaserInstance.world) {
                    _this.phaserInstance.destroy();
                }
            }
        });
        // to come from DB
        this.name = 'Chess';
        this.imagePath = './app/games/chess/resources/images/backGroundImage.png';
        this.gameStates = new __WEBPACK_IMPORTED_MODULE_2__game_state_provider__["a" /* default */](_httpService, _router);
        this.url = '/chess';
        this.description = '';
    }
    /**
     * Intialise the phaser instance, the states and start the intial state of the game.
     *
     * @param angularContainer It is used to access the properties that are defined in the angular component i.e. outside the canvas
     *
     */
    Chess.prototype.initiateGame = function (angularContainer) {
        this.phaserInstance = new __WEBPACK_IMPORTED_MODULE_1_phaser_ce__["Game"](1152, 648, __WEBPACK_IMPORTED_MODULE_1_phaser_ce__["AUTO"], 'phaser-container');
        this.phaserInstance.angularContainer = angularContainer;
        this.gameStates.initiateStates();
        var allStates;
        allStates = this.gameStates.getStates();
        for (var _i = 0, allStates_1 = allStates; _i < allStates_1.length; _i++) {
            var state = allStates_1[_i];
            this.phaserInstance.state.add(state.name, state);
            if (state.isInitial) {
                this.initialState = state.name;
            }
        }
        this.phaserInstance.state.start(this.initialState);
    };
    return Chess;
}());
Chess = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /** Define the frozen-knights game */
    ,
    __metadata("design:paramtypes", [Object, Object, Object])
], Chess);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/chess.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/game-state-provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_loading_state__ = __webpack_require__("../../../../../src/app/games/chess/main/states/loading-state/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_trailer_state__ = __webpack_require__("../../../../../src/app/games/chess/main/states/trailer-state/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_main_screen_state__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_jackpot_state__ = __webpack_require__("../../../../../src/app/games/chess/main/states/jackpot-state/index.ts");




/** The class initiate the game and provide different states of the game */
var GameStateProvider = (function () {
    /**
     * Perform the intialisation task
     * @param _httpService An object of Http type.
     * @param _router An object of Router type.
     *
     */
    function GameStateProvider(_httpService, _router) {
        this.states = [];
        this.httpService = _httpService;
        this.router = _router;
    }
    /**
     * It intiate all the states of the game and push the states in state[] array
     */
    GameStateProvider.prototype.initiateStates = function () {
        this._loadingState = new __WEBPACK_IMPORTED_MODULE_0__states_loading_state__["a" /* default */](this.httpService, this.router);
        this._trailerState = new __WEBPACK_IMPORTED_MODULE_1__states_trailer_state__["a" /* default */](this.httpService);
        this._mainScreenState = new __WEBPACK_IMPORTED_MODULE_2__states_main_screen_state__["a" /* default */](this.httpService);
        this._jackpotState = new __WEBPACK_IMPORTED_MODULE_3__states_jackpot_state__["a" /* default */](this.httpService);
        this.states.push(this._loadingState);
        this.states.push(this._trailerState);
        this.states.push(this._mainScreenState);
        this.states.push(this._jackpotState);
    };
    /**
     *
     * @return All the states the game will probably eneter into.
     *
     */
    GameStateProvider.prototype.getStates = function () {
        return this.states;
    };
    return GameStateProvider;
}());
/* harmony default export */ __webpack_exports__["a"] = (GameStateProvider);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/game-state-provider.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/jackpot-state/drawJackpotPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return drawBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializationVariable; });
/**
 * This function define for call the different functions for draw background.
 */
var drawBackground = function () {
    addImages.apply(this);
    // Draw Reactagle Border
    drawRectangle.apply(this);
    // Draw Animation
    drawAnimation.apply(this);
};
/**
 * This function define for add the images and animation into jackpot state.
 */
var addImages = function () {
    this.jackpotReel = this.game.add.tileSprite(this.game.world.centerX - 20, this.game.world.centerY, 407, 550, 'jackpotReel');
    this.jackpotReel.anchor.set(0.5);
    this.game.arrowLeft = this.game.add.image(215, 280, 'arrowLeft');
    this.game.arrowLeft.scale.setTo(0.6);
    this.game.arrowRight = this.game.add.image(775, 280, 'arrowRight');
    this.game.arrowRight.scale.setTo(0.6);
    // Click Here Button Animation
    this.stateAssets.jackpotSpinButton = this.game.add.sprite(this.game.world.centerX - 210, 270, 'jackpotSpin-Button', 3);
    this.stateAssets.jackpotSpinButton.inputEnabled = true;
    this.stateAssets.jackpotSpinButton.anchor.set = 0.5;
    this.stateAssets.jackpotSpinButton.animations.add('walk', [0, 1, 2], 1, true);
    this.stateAssets.jackpotSpinButton.play('walk', 3, true);
};
/**
 * The function define for draw animation into the border of jackpot state.
 */
var drawAnimation = function () {
    var circleGroup = this.game.add.group();
    var uPosX = 10;
    var uPosY = 10;
    for (var i = 0; i < 72; i++) {
        var upperbmd = this.game.add.bitmapData(uPosX + 10, uPosY + 10);
        var c = upperbmd.circle(uPosX, uPosY, 5, '#D4AF37');
        var sp = this.game.add.sprite(35, 20, c);
        circleGroup.add(sp);
        uPosX += 15;
    }
    var lPosX = 10;
    var lPosY = 10;
    for (var i = 0; i < 39; i++) {
        var leftbmd = this.game.add.bitmapData(lPosX + 10, lPosY + 10);
        var c = leftbmd.circle(lPosX, lPosY, 5, '#D4AF37');
        circleGroup.create(20, 25, c);
        lPosY += 15;
    }
    var bPosX = 10;
    var bPosY = 506;
    for (var i = 0; i < 72; i++) {
        var bottambmd = this.game.add.bitmapData(bPosX + 10, bPosY + 10);
        var c = bottambmd.circle(bPosX, bPosY, 5, '#D4AF37');
        circleGroup.create(35, 115, c);
        bPosX += 15;
    }
    var rPosx = 100;
    var rPosY = 20;
    for (var i = 0; i < 39; i++) {
        var rightbmd = this.game.add.bitmapData(rPosx + 10, rPosY + 10);
        var c = rightbmd.circle(rPosx, rPosY, 5, '#D4AF37');
        circleGroup.create(1025, 25, c);
        rPosY += 15;
    }
    for (var i = 0; i < circleGroup.children.length; i++) {
        // Tween tint
        if (i % 2 === 0) {
            this.game.add.tween(circleGroup.children[i]).to({ tint: 1 }, 2000, Phaser.Easing.Linear.None, true, true, 2000);
        }
        else {
            this.game.add.tween(circleGroup.children[i]).to({ tint: 0 }, 500, Phaser.Easing.Linear.None, true, true, 2000);
        }
    }
};
/**
 * The function define for draw rectangle at the border to the state.
 */
var drawRectangle = function () {
    var rectWidth = this.game.world.width - 20;
    var rectHeight = this.game.world.height - 20;
    var rectSpriteX = 10;
    var rectSpriteY = 10;
    var rectLineWidth = 5;
    var cornerRadius = 20;
    var bmd1 = this.game.add.bitmapData(rectWidth, rectHeight);
    var drawRectangleSprite1 = this.game.add.sprite(rectSpriteX, rectSpriteY, bmd1);
    roundRect(bmd1.ctx, 0, 0, rectWidth, rectHeight, cornerRadius, '#ff0000', rectLineWidth);
    var bmd2 = this.game.add.bitmapData(rectWidth, rectHeight);
    var drawRectangleSprite2 = this.game.add.sprite(rectSpriteX + 35, rectSpriteY + 35, bmd2);
    roundRect(bmd2.ctx, 0, 0, rectWidth - 70, rectHeight - 70, cornerRadius, '#ff0000', rectLineWidth);
};
/**
 * The function define for draw the rounded corner of rectangle.
 */
var roundRect = function (ctx, x, y, width, height, radius, stroke, lineWidth) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    }
    else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            if (radius[side]) {
                radius[side] = radius[side];
            }
            else {
                radius[side] = defaultRadius[side];
            }
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = stroke;
    if (stroke) {
        ctx.stroke();
    }
};
/**
 * This function initializes the variables with default values
 */
var initializationVariable = function () {
    this.isReelFinalStop = false;
    this.reelData.number = 0;
    this.reelData.flag = 0;
    this.reelData.remValue = 0;
    this.reelData.spinSpeed = 0;
    this.reelData.spinTimeStamp = 0;
    this.reelData.counter = 0;
    this.winSymbolY = -1;
    this.reelData.isSpinning = false;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/drawJackpotPage.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/jackpot-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawJackpotPage__ = __webpack_require__("../../../../../src/app/games/chess/main/states/jackpot-state/drawJackpotPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinJackpotReel__ = __webpack_require__("../../../../../src/app/games/chess/main/states/jackpot-state/spinJackpotReel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jackpotPage_Win_Animations__ = __webpack_require__("../../../../../src/app/games/chess/main/states/jackpot-state/jackpotPage-Win-Animations.ts");



/**
 * The class define for design and handle the events of JackpotState
 */
var JackpotState = (function () {
    /**
    * Create an instance of JackpotState and initialize the class properties.
    * @param _httpservice  An object of GamePageService type.
     */
    function JackpotState(_httpservice) {
        this._httpservice = _httpservice;
        this.name = 'Jackpot';
        this.httpService = _httpservice;
        this.isReelFinalStop = false;
        this.winSymbolY = -1;
        this.isInitial = false;
        this.stateAssets = {
            jackpotSpinButton: {}
        };
        this.reelData = {
            number: 0,
            isSpinning: false,
            flag: 0,
            remValue: 0,
            spinSpeed: 0,
            spinTimeStamp: 0,
            counter: 0
        };
        this.methods = {};
        this.helperArray = [235, 115, 955, 835, 715, 595, 475, 355];
        this.x = new Map();
        this.x.set('JA', 0);
        this.x.set('JB', 1);
        this.x.set('JC', 2);
        this.x.set('JD', 3);
        this.x.set('JE', 4);
        this.x.set('JF', 5);
        this.x.set('JG', 6);
        this.x.set('JH', 7);
    }
    /**
     *  This function is called first. It should contain code to handle the loading of assets needed by your game
     */
    JackpotState.prototype.preload = function () {
    };
    /**
     * The create function is called automatically once the preload has finished.
     * Set the visibility of test panel and activate current test panel.
     * Call the method which is required for design the state.
     * Bind all the necessary methods.
     */
    JackpotState.prototype.create = function () {
        this.game.angularContainer.isTestPanelHidden = true;
        this.game.angularContainer.isJackpotTestModeActive = true;
        __WEBPACK_IMPORTED_MODULE_0__drawJackpotPage__["a" /* initializationVariable */].apply(this);
        __WEBPACK_IMPORTED_MODULE_0__drawJackpotPage__["b" /* drawBackground */].apply(this);
        __WEBPACK_IMPORTED_MODULE_1__spinJackpotReel__["a" /* spinReel */].apply(this);
        this.methods.moveToPreviousState = __WEBPACK_IMPORTED_MODULE_1__spinJackpotReel__["b" /* moveToPreviousState */].bind(this);
        this.methods.JackpotPageWinAnimation = __WEBPACK_IMPORTED_MODULE_2__jackpotPage_Win_Animations__["a" /* symbolWin */].bind(this);
        this.methods.jackpotPageWinText = __WEBPACK_IMPORTED_MODULE_2__jackpotPage_Win_Animations__["b" /* showWin */].bind(this);
    };
    /**
     * The update (and render) functions are called every frame.
     * Resposible for reel spinning.
     */
    JackpotState.prototype.update = function () {
        if (!this.isReelFinalStop) {
            __WEBPACK_IMPORTED_MODULE_1__spinJackpotReel__["c" /* spinAnimate */].apply(this);
        }
    };
    return JackpotState;
}());
/* harmony default export */ __webpack_exports__["a"] = (JackpotState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/jackpot-state/jackpotPage-Win-Animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolWin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showWin; });
/**
 * This function shows the win animation for jackpot reel spin. A few coins are shown
 * and tossed from the top of the screen depending upon the amount won. More coins are shown for bigger wins and fewer for small wins.
 */
var symbolWin = function () {
    var emitCoin = this.spinData.jackpotWinAmount / 10;
    this.emitter1 = this.game.add.emitter(200, 50, 100);
    this.emitter1.makeParticles('coin', [0, 1, 2, 3, 4, 5], emitCoin, true, true);
    this.emitter1.gravity = 500;
    this.emitter1.start(true, 4000, null, emitCoin);
    this.emitter2 = this.game.add.emitter(900, 50, 100);
    this.emitter2.makeParticles('coin', [0, 1, 2, 3, 4, 5], emitCoin, true, true);
    this.emitter2.gravity = 500;
    this.emitter2.start(true, 4000, null, emitCoin);
    this.game.time.events.add(Phaser.Timer.SECOND * 4, stopEmiiter, this);
};
/**
 * This function displays the animated text referring to the win amount.
 */
var showWin = function () {
    this.jackpotWinTextJackpot = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '');
    this.jackpotWinTextJackpot.anchor.setTo(0.5);
    this.jackpotWinTextJackpot.font = 'Arial Black';
    this.jackpotWinTextJackpot.fontSize = 200;
    this.jackpotWinTextJackpot.stroke = '#008';
    this.jackpotWinTextJackpot.strokeThickness = 1;
    this.jackpotWinTextJackpot.fill = '#fff';
    this.jackpotWinTextJackpot.smoothed = false;
    this.jackpotWinTextJackpot.scale.setTo(0.2);
    if (this.spinData.isJackpotWin) {
        this.jackpotWinTextJackpot.text = 'JACKPOT WIN : ' + this.spinData.jackpotWinAmount;
    }
    else {
        this.jackpotWinTextJackpot.text = 'WIN : ' + this.spinData.jackpotWinAmount;
    }
    this.jackpotWinTextJackpot.alpha = 0;
    this.winTextTween = this.game.add.tween(this.jackpotWinTextJackpot).to({ alpha: 0.8 }, 2000, Phaser.Easing.Linear.None, true);
    this.winTextTween.onComplete.add(function () {
        this.game.add.tween(this.jackpotWinTextJackpot).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    }, this);
    var jackpotWinScaleTween = this.game.add.tween(this.jackpotWinTextJackpot.scale).to({ x: 3, y: 3 }, 4000, 'Linear', true);
    this.methods.JackpotPageWinAnimation();
    jackpotWinScaleTween.onComplete.add(function () {
        this.game.time.events.add(Phaser.Timer.SECOND * 2, this.methods.moveToPreviousState, this);
    }, this);
};
/**
 * The function define for stop the coin emitter.
 */
var stopEmiiter = function () {
    this.emitter1.on = false;
    this.emitter2.on = false;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpotPage-Win-Animations.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/jackpot-state/spinJackpotReel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_jackpot_post_spin_dto__ = __webpack_require__("../../../../../src/app/contracts/api-calls/jackpot-post-spin-dto.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinReel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return spinAnimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return moveToPreviousState; });

/**
 * This function binds the spin-button click with the spin method.
 */
var spinReel = function () {
    this.stateAssets.jackpotSpinButton.events.onInputDown.add(jackpotSpinClick, this);
};
/**
 * The function define for enable the spinning.
 */
var spin = function () {
    this.reelData.isSpinning = true;
    this.reelData.counter++;
};
/**
 * The function define for set the game state to MainScreen.
 */
var moveToPreviousState = function () {
    this.game.state.start('MainScreen');
};
/**
 * The function define for disable the reel spinning.
 */
var stop = function () {
    this.reelData.isSpinning = false;
};
/**
 * The function define for set the reel stop position according to win-symbol.
 */
var setWinSymbol = function () {
    var t = this.x.get(this.spinData.symbol);
    this.winSymbolY = this.helperArray[t];
    this.game.time.events.add(Phaser.Timer.SECOND * 3, stop, this);
};
/**
 * The function define for remove the spin-button from the reel.
 * And get the jackpot response.
 */
var jackpotSpinClick = function () {
    this.game.add.tween(this.stateAssets.jackpotSpinButton).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    this.stateAssets.jackpotSpinButton.inputEnabled = false;
    spin.apply(this);
    getRequest.apply(this);
};
/**
 * The function define for subscribe the postJackpotSpinData method from service
 * and get the response
 */
var getRequest = function () {
    var _this = this;
    var jackpotCheatSymbol = '';
    if (this.game.angularContainer.isTestModeActive && !this.game.angularContainer.isJackpotTestModeHidden) {
        var symbolValue = this.game.angularContainer.element.nativeElement.getElementsByClassName('jackpot-cheet-mode');
        jackpotCheatSymbol = symbolValue[0].firstElementChild.options[symbolValue[0].firstElementChild.selectedIndex].value;
        var jackpotSpindto = new __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_jackpot_post_spin_dto__["a" /* default */](this.game.angularContainer.gameData.gameId, jackpotCheatSymbol);
        this.httpService.postJackpotSpinData(jackpotSpindto, true)
            .subscribe(function (resGameData) {
            _this.spinData = resGameData.body;
        }, function (error) { console.log('Error' + error); }, function () { setWinSymbol.apply(_this); });
    }
    else {
        var jackpotSpindto = new __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_jackpot_post_spin_dto__["a" /* default */](this.game.angularContainer.gameData.gameId, null);
        this.httpService.postJackpotSpinData(jackpotSpindto)
            .subscribe(function (resGameData) {
            _this.spinData = resGameData.body;
        }, function (error) { console.log('Jackpot Response Error' + error); }, function () { setWinSymbol.apply(_this); });
    }
};
/**
 * The function define for change the reel position y co-ordinates.
 * First It will slowly increase the co-ordinate and according the spin response
 * slowly decrease the speed and stop at win symbol position.
 */
var spinAnimate = function () {
    if (this.reelData.isSpinning) {
        if (this.reelData.number < 30) {
            this.reelData.number++;
        }
    }
    else {
        if (this.reelData.number > 5) {
            this.reelData.number--;
        }
        else {
            if (this.jackpotReel.tilePosition.y === this.winSymbolY) {
                this.reelData.number = 0;
                this.isReelFinalStop = true;
                this.methods.jackpotPageWinText();
            }
            else {
                if (this.reelData.flag === 1) {
                    this.reelData.remValue = this.jackpotReel.tilePosition.y % 5;
                    this.reelData.flag = 2;
                }
                else {
                    if (this.reelData.remValue !== 0) {
                        this.jackpotReel.tilePosition.y -= 1;
                        this.reelData.remValue--;
                    }
                    else {
                        this.reelData.flag = 1;
                    }
                }
            }
        }
    }
    this.jackpotReel.tilePosition.y += this.reelData.number;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/spinJackpotReel.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/loading-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");


/** define the loading state of the game */
var LoadingState = (function () {
    /**
     * Intailise the basic structure of the game and create an instance of Appconfig
     *
     * @param _httpService An object of Http type
     * @param _router An object of Router type
     *
     */
    function LoadingState(_httpService, _router) {
        this.name = 'Loading';
        this.isInitial = true;
        this.stateAssets = {
            ready: false,
        };
        this.httpService = _httpService;
        this.router = _router;
        this.config = new __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]();
    }
    /**
     * This function is called first when the state is started. It load the preload bares required in the loading state.
     */
    LoadingState.prototype.preload = function () {
        // TODO: TO FETCH FROM SERVER
        this.game.load.image('preloadbar1', './app/games/chess/resources/images/loadingbar1.png');
        this.game.load.image('preloadbar2', './app/games/chess/resources/images/loadingbar2.png');
    };
    ;
    /**
     * Call the getGame() of slot-game service and depending upon the response subcribe accordingly.
     * Success: Intialise the symbol set, bet in euro and win
     * Error: Navigate the user to error page
     */
    LoadingState.prototype.getGameData = function () {
        // const gameStaticName = this.game.angularContainer.router.url.split('/').pop();
        // this.httpService.getGame(gameStaticName).subscribe(
        //   (response) => {
        //     const dataObjectMapper = new DataObjectMapper()
        //     this.game.angularContainer.gameData = dataObjectMapper.mapper(response.body)
        this.game.angularContainer.gameData = {
            gameId: 1,
            description: 'Description',
            imagePath: '',
            name: 'space-storm',
            url: '',
            cash: 500,
            totalCoins: 5000,
            coinValue: 0.1,
            betLineDetails: [],
            gameAssetVo: [
                {
                    assetName: '',
                    assetType: '',
                    assetUrl: ''
                }
            ],
            maxBetLevel: 20,
            betMultiplier: 20,
        };
        var symbolMap = new Map();
        symbolMap.set('A', 0);
        symbolMap.set('B', 1);
        symbolMap.set('C', 2);
        symbolMap.set('D', 3);
        symbolMap.set('E', 4);
        symbolMap.set('F', 5);
        symbolMap.set('S', 6);
        symbolMap.set('W', 7);
        symbolMap.set('Z', 8);
        this.game.angularContainer.gameData.symbolSetMap = symbolMap;
        // Defining MaxBet($)
        var maxBet = this.game.angularContainer.gameData.betMultiplier * this.game.angularContainer.gameData.coinValue[0];
        this.game.angularContainer.gameData.maxBet = maxBet;
        // Defining Win($)
        var win = 0;
        this.game.angularContainer.gameData.win = win;
        //   },
        //   (error) => {
        //     this.router.navigateByUrl('error');
        //   },
        //   () => { }
        // );
        // this.httpService.getJackpotCounter()
        //   .subscribe(
        //   (response) => {
        //     this.game.angularContainer.jackpotCounter = response.body.jackpotCounter;
        //   },
        //   (error) => {
        //     console.log('Error');
        //   },
        //   () => { }
        //   );
    };
    /**
    * The create function is called automatically once the preload has finished.
    * The function loads all the images, audio, sprites required by the game and create the progress bar
    */
    LoadingState.prototype.create = function () {
        this.getGameData();
        this.game.load.onLoadComplete.add(this.loadComplete, this);
        this.game.load.spritesheet('gameTitle', './app/games/chess/resources/images/gameTitle.png', 68, 88.5);
        this.game.load.image('diamond', './app/games/chess/resources/images/diamond.png');
        this.game.load.image('backImg', './app/games/chess/resources/images/backGroundImage.png');
        this.game.load.image('canvasBack', './app/games/chess/resources/images/white-marble.png');
        this.game.load.image('scatterBackground', './app/games/chess/resources/images/scatter-Marble.png');
        this.game.load.image('tBack', './app/games/chess/resources/images/chessTBackground.png');
        this.game.load.image('black', './app/games/chess/resources/images/black.png');
        this.game.load.image('warrior-left', './app/games/chess/resources/images/warrior-left.png');
        this.game.load.image('warrior-right', './app/games/chess/resources/images/warrior-right.png');
        this.game.load.audio('backgroundScore', './app/games/chess/resources/audio/background.ogg');
        this.game.load.audio('spinSound', './app/games/chess/resources/audio/spin.ogg');
        this.game.load.audio('winSound', './app/games/chess/resources/audio/win.ogg');
        this.game.load.audio('reelStopSound', './app/games/chess/resources/audio/reel-stop.ogg');
        this.game.load.audio('trailerSound', './app/games/chess/resources/audio/trailer.ogg');
        this.game.load.audio('buttonClickSound', './app/games/chess/resources/audio/button_Click.ogg');
        this.game.load.audio('hitSound', './app/games/chess/resources/audio/hit.ogg');
        this.game.load.audio('ScatterBackgroundScore', './app/games/chess/resources/audio/scatter.ogg');
        this.game.load.audio('ScatterStopSound', './app/games/chess/resources/audio/scatter-stop.ogg');
        this.game.load.spritesheet('reel', './app/games/chess/resources/images/symbols/reel.png', 150, 150, 9);
        this.game.load.spritesheet('snowflakes', './app/games/chess/resources/images/snowflakes.png', 17, 17);
        this.game.load.spritesheet('snowflakes_large', './app/games/chess/resources/images/snowflakes_large.png', 64, 64);
        this.game.load.image('autoplayButton', './app/games/chess/resources/images/panelButton_frame.png');
        this.game.load.image('maxBetButton', './app/games/chess/resources/images/panelButton_frame.png');
        this.game.load.image('arrowLeft', './app/games/chess/resources/images/arrow-left.png');
        this.game.load.image('arrowRight', './app/games/chess/resources/images/arrow-right.png');
        this.game.load.image('jackpotReel', './app/games/chess/resources/images/jackpot-reel.png');
        this.game.load.spritesheet('jackpotSpin-Button', './app/games/chess/resources/images/jackpotSpin-Button.png', 415, 120, 3);
        this.game.load.spritesheet('coin', './app/games/chess/resources/images/coin.png', 32, 32, 5);
        this.game.load.image('leftArrow', './app/games/chess/resources/images/left_arrow.png');
        this.game.load.image('rightArrow', './app/games/chess/resources/images/right_arrow.png');
        this.game.load.image('spinButtonRotationalFrame', './app/games/chess/resources/images/spinButton-Rotational-Frame.png');
        this.game.load.image('spinButtonTransparentFrame', './app/games/chess/resources/images/spinButton-Transparent-Frame.png');
        this.game.load.image('clouds', './app/games/chess/resources/images/clouds.png');
        this.game.load.spritesheet('spinButton-particle', './app/games/chess/resources/images/particle-sprite.png', 128, 128, 4);
        this.game.load.spritesheet('spinButtonBall-particle', './app/games/chess/resources/images/plasmaball.png', 128, 128, 8);
        this.game.load.spritesheet('spinButton', './app/games/chess/resources/images/disable-Spin-Button.png', 120, 120, 4);
        this.game.load.image('betButton-frame', './app/games/chess/resources/images/panelButton_frame.png');
        this.game.load.image('levelButton-frame', './app/games/chess/resources/images/panelButton_frame.png');
        this.game.load.image('coinButton-frame', './app/games/chess/resources/images/panelButton_frame.png');
        this.game.load.image('coinValueButton-frame', './app/games/chess/resources/images/panelButton_frame.png');
        this.game.load.image('info', './app/games/chess/resources/images/infoPaytable.png');
        this.game.load.image('header-panel', './app/games/chess/resources/images/header-panel.png');
        this.game.load.image('footer-panel', './app/games/chess/resources/images/footer-panel.png');
        this.game.load.spritesheet('flareblue16', './app/games/chess/resources/images/flareblue16.png', 256, 256, 16);
        this.game.load.image('smoke', './app/games/chess/resources/images/smoke-puff.png');
        this.game.load.image('trailerBack', './app/games/chess/resources/images/trailerBack.png');
        this.game.load.image('chessTBack', './app/games/chess/resources/images/chessTBackground.png');
        this.game.load.spritesheet('jackpotCounterFrame', './app/games/chess/resources/images/jackpot-frame.png', 265, 147, 5);
        this.game.load.start();
        this.game.preloadBar = this.game.add.sprite(this.game.world.centerX - 280, this.game.world.centerY, 'preloadbar1');
        this.game.preloadBar2 = this.game.add.sprite(this.game.world.centerX - 280, this.game.world.centerY, 'preloadbar2');
        this.game.load.setPreloadSprite(this.game.preloadBar2);
        this.gamingPracticeText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 70, this.config.StringConstants.GamingPracticeText);
        this.presentText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 110, this.config.StringConstants.PresentingText);
        this.gamingPracticeText.anchor.set(0.5);
        this.gamingPracticeText.font = 'Arial Black';
        this.gamingPracticeText.fontSize = 40;
        this.gamingPracticeText.fontWeight = 'bold';
        this.gamingPracticeText.stroke = '#000000';
        this.gamingPracticeText.strokeThickness = 6;
        this.gamingPracticeText.fill = '#43d637';
        this.presentText.anchor.set(0.5);
        this.gamingPracticeText.align = 'center';
        this.presentText.font = 'Arial Black';
        this.presentText.fontSize = 30;
        this.presentText.fontWeight = 'bold';
        this.presentText.stroke = '#000000';
        this.presentText.strokeThickness = 6;
        this.presentText.fill = '#43d637';
        this.presentText.scale.setTo(0.3);
        this.gamingPracticeText.scale.setTo(0.5);
        var tweenGamingPractice = this.game.add.tween(this.gamingPracticeText.scale).to({
            x: 1,
            y: 1
        }, 3000, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Bounce.Out, true);
        var tweenPresentText = this.game.add.tween(this.presentText.scale).to({
            x: 1,
            y: 1
        }, 3000, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Bounce.Out, true);
        this.game.stage.disableVisibilityChange = true;
    };
    ;
    /**
     * The function is called when the the assets are fully loaded and intiate the trailer state.
     */
    LoadingState.prototype.loadComplete = function () {
        this.game.state.start('Trailer');
    };
    ;
    /**
     * The update (and render) functions are called every frame
     */
    LoadingState.prototype.update = function () {
    };
    ;
    return LoadingState;
}());
/* harmony default export */ __webpack_exports__["a"] = (LoadingState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/auto-play.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return autoPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetAutoPlaySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return triggerPendingSpins; });
/**
 * The function define for enable the auto play spin in the game.
 * Spin the reel number of times as specified
 */
var autoPlay = function () {
    if (this.game.angularContainer.autoStop) {
        this.methods.resetAutoPlaySettings.apply(this, [false, false, true, -1]);
        if (this.spinResponse.prize > 0 && this.stateAssets.reels[4].spinSpeed === 0) {
            this.methods.enableButtonsOnSpin();
        }
    }
    else if (!this.isAutoPlayRunning) {
        if (this.game.angularContainer.autoPlayCounter > 0) {
            --this.game.angularContainer.autoPlayCounter;
            this.game.angularContainer.totalSpin++;
            this.game.angularContainer.autoStop = false;
            this.methods.resetAutoPlaySettings.apply(this, [true, true, false]);
            this.methods.autoSpin();
        }
        else if (this.game.angularContainer.autoPlayCounter <= 0) {
            this.methods.resetAutoPlaySettings.apply(this, [false, false, true]);
            this.game.angularContainer.autoPlayCounter = -1;
        }
    }
};
/**
 * The function set the auto play running or not.
 * Set the visibility of auto-play and auto-play counter
 * @param isAutoPlay Define the auto play running or not
 * @param isAutoHidden Define for set the visibility of auto-play
 * @param isAutoCounterHidden Define for set the visibility of auto-play counter
 */
var resetAutoPlaySettings = function (isAutoPlay, isAutoHidden, isAutoCounterHidden) {
    this.isAutoPlayRunning = isAutoPlay;
    this.game.angularContainer.isAutoHidden = isAutoHidden;
    this.game.angularContainer.autoCounterHidden = isAutoCounterHidden;
};
/**
 * The function define for spin the reels in case of free spin.
 * If free spins over then set the reels as before the free spins
 */
var triggerScatterSpin = function () {
    if (this.freeSpinsPending > -1 || this.game.freespin > -1) {
        --this.freeSpinsPending;
        // --this.game.freespin;
        if (this.freeSpinsPending === -1 || this.game.freespin === -1) {
            this.isScatterRunning = false;
            this.methods.revertScatterWinAnimations.apply(this);
            this.spinResponse = this.lastResponseBeforeFreeSpins;
            this.spinResponse.isScatterWin = false;
            this.methods.tweekReelWithRandom.apply(this, [true, false]);
        }
        else {
            this.methods.autoSpin.apply(this);
        }
    }
};
/**
 * The function define for trigger auto play when auto-play running is active
 * and if auto-play spins over or scatter free spins over then enable buttons.
 */
var triggerAutoSpin = function () {
    if (this.isAutoPlayRunning) {
        if (this.game.angularContainer.autoPlayCounter > 0) {
            --this.game.angularContainer.autoPlayCounter;
            ++this.game.angularContainer.totalSpin;
            this.methods.autoSpin.apply(this);
        }
        else if (this.game.angularContainer.autoPlayCounter <= 0) {
            this.methods.resetAutoPlaySettings.apply(this, [false, false, true]);
            this.game.angularContainer.autoPlayCounter = -1;
            this.methods.enableButtonsOnSpin();
        }
    }
    else if (!this.isScatterRunning) {
        this.methods.enableButtonsOnSpin();
    }
};
/**
 * The function define for trigger pending spins.
 * First it will detect the case then depending on
 * Call the scatter spin or auto spin
 */
var triggerPendingSpins = function () {
    if (!this.game.angularContainer.isJackpotState) {
        if (this.freeSpinsPending > -1 || this.game.freespin > -1) {
            triggerScatterSpin.apply(this);
        }
        else {
            triggerAutoSpin.apply(this);
        }
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/auto-play.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/backgroud-renderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawBackground; });
/**
 * The function define for add the images to background of game.
 */
var drawBackground = function () {
    this.game.add.image(-this.dimensions.reel.tilesLeft, this.dimensions.reel.reelY, 'canvasBack');
    this.game.add.image(this.game.world.width - this.dimensions.reel.tilesLeft - 200, this.dimensions.reel.reelY, 'canvasBack');
    // -200 to get blackish shade in white image
    this.game.add.image(-10, 150, 'warrior-left');
    this.game.add.image(962, 150, 'warrior-right');
    this.game.background = this.game.add.image(this.dimensions.reel.tilesLeft, this.dimensions.reel.reelY, 'backImg');
    this.game.background.alpha = 1;
    this.game.scatterBackground = this.game.add.image(this.dimensions.reel.tilesLeft, this.dimensions.reel.reelY, 'scatterBackground');
    this.game.scatterBackground.alpha = 0;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/backgroud-renderer.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/bet-lines.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configureBetLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return drawBetLines; });
/* unused harmony export betLineMouseOver */
/* unused harmony export betLineMouseOut */
/**
 * The function define for draw the betlines, left side and right side
 * and set all the assest for bet line.
 */
var configureBetLines = function () {
    var _this = this;
    var topPaddinng = this.coordinates.reelY + this.dimensions.betLines.betLineTopOffset;
    var d = this.dimensions.betLines;
    this.stateAssets.betLinesLeft.forEach(function (item, index) {
        var bmd = _this.game.add.bitmapData(30, 30, 'numberBMD');
        bmd.ctx.lineWidth = d.lineWidth;
        bmd.ctx.strokeStyle = d.betLineColor;
        bmd.ctx.strokeRect(0, 0, d.strokeMargin, d.strokeMargin);
        bmd.ctx.rect(d.strokeMargin / 2, d.strokeMargin / 2, d.width, d.height);
        bmd.ctx.fillStyle = '#FFF';
        bmd.ctx.fill();
        bmd.ctx.font = '10pt Arial';
        bmd.ctx.fillStyle = '#46f';
        bmd.ctx.textAlign = 'center';
        bmd.ctx.fillText(item, 15, 20);
        var betLineSprite = _this.game.add.sprite(_this.dimensions.betLines.horizontalPadding, topPaddinng + (index * (2 * d.height) + _this.dimensions.betLines.betLineNumberSpacing), bmd);
        betLineSprite.anchor.set(0.5);
        betLineSprite.data.lineNumber = item;
        betLineSprite.inputEnabled = true;
        betLineSprite.events.onInputOver.add(betLineMouseOver, _this);
        betLineSprite.events.onInputOut.add(betLineMouseOut, _this);
        for (var _i = 0, _a = _this.stateAssets.betLineDetails; _i < _a.length; _i++) {
            var betLine = _a[_i];
            if (betLine.lineNumber === item) {
                betLine.lineNumberSprite = betLineSprite;
                betLine.coordinates = [];
                for (var _b = 0, _c = betLine.tileNumbers; _b < _c.length; _b++) {
                    var tileNumber = _c[_b];
                    for (var _d = 0, _e = _this.stateAssets.tileCoordinates; _d < _e.length; _d++) {
                        var tileDetail = _e[_d];
                        if (tileNumber === tileDetail.tileNumber) {
                            betLine.coordinates.push(tileDetail.coordinate);
                        }
                    }
                }
            }
        }
    });
    this.stateAssets.betLinesRight.forEach(function (item, index) {
        var bmd = _this.game.add.bitmapData(30, 30, 'numberBMD');
        bmd.ctx.lineWidth = d.lineWidth;
        bmd.ctx.strokeStyle = d.betLineColor;
        bmd.ctx.strokeRect(0, 0, d.strokeMargin, d.strokeMargin);
        bmd.ctx.rect(d.strokeMargin / 2, d.strokeMargin / 2, d.width, d.height);
        bmd.ctx.fillStyle = '#FFF';
        bmd.ctx.fill();
        bmd.ctx.font = '10pt Arial';
        bmd.ctx.fillStyle = '#46f';
        bmd.ctx.textAlign = 'center';
        bmd.ctx.fillText(item, 15, 20);
        var betLineSprite = _this.game.add.sprite(_this.game.world.width - _this.dimensions.betLines.horizontalPadding, topPaddinng + (index * (2 * d.height) + _this.dimensions.betLines.betLineNumberSpacing), bmd);
        betLineSprite.anchor.set(0.5);
        betLineSprite.data.lineNumber = item;
        betLineSprite.inputEnabled = true;
        betLineSprite.events.onInputOver.add(betLineMouseOver, _this);
        betLineSprite.events.onInputOut.add(betLineMouseOut, _this);
        for (var _i = 0, _a = _this.stateAssets.betLineDetails; _i < _a.length; _i++) {
            var betLine = _a[_i];
            if (betLine.lineNumber === item) {
                betLine.lineNumberSprite = betLineSprite;
                betLine.coordinates = [];
                for (var _b = 0, _c = betLine.tileNumbers; _b < _c.length; _b++) {
                    var tileNumber = _c[_b];
                    for (var _d = 0, _e = _this.stateAssets.tileCoordinates; _d < _e.length; _d++) {
                        var tileDetail = _e[_d];
                        if (tileNumber === tileDetail.tileNumber) {
                            betLine.coordinates.push(tileDetail.coordinate);
                        }
                    }
                }
            }
        }
    });
};
/**
 * The function define for draw betlines over the win symbol
 * when the win comes then over the symbol bet line visible
 */
var drawBetLines = function () {
    var d = this.dimensions.betLines;
    var graphics = this.game.add.graphics(0, 0);
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        var bmdHover = this.game.add.bitmapData(this.game.world.width, this.game.world.height, 'betLineBMDHover');
        bmdHover.ctx.beginPath();
        for (var i = 0; i < line.coordinates.length - 1; i++) {
            bmdHover.ctx.moveTo(line.coordinates[i].x, line.coordinates[i].y);
            bmdHover.ctx.lineTo(line.coordinates[i + 1].x, line.coordinates[i + 1].y);
        }
        bmdHover.ctx.lineWidth = d.betLineWidth;
        bmdHover.ctx.strokeStyle = d.hoverupperbetLineColor;
        bmdHover.ctx.lineCap = 'round';
        bmdHover.ctx.stroke();
        bmdHover.ctx.beginPath();
        for (var i = 0; i < line.coordinates.length - 1; i++) {
            bmdHover.ctx.moveTo(line.coordinates[i].x, line.coordinates[i].y + d.betLineWidth);
            bmdHover.ctx.lineTo(line.coordinates[i + 1].x, line.coordinates[i + 1].y + d.betLineWidth);
        }
        bmdHover.ctx.lineWidth = d.betLineWidth;
        bmdHover.ctx.strokeStyle = d.hoverlowerbetLineColor;
        bmdHover.ctx.lineCap = 'round';
        bmdHover.ctx.stroke();
        var spriteHover = this.game.add.sprite(0, 0, bmdHover);
        spriteHover.visible = false;
        line.hoverSprite = spriteHover;
        var bmd = this.game.add.bitmapData(1152, 648, 'betLineBMDWin');
        bmd.ctx.beginPath();
        for (var i = 0; i < line.coordinates.length - 1; i++) {
            bmd.ctx.moveTo(line.coordinates[i].x, line.coordinates[i].y);
            bmd.ctx.lineTo(line.coordinates[i + 1].x, line.coordinates[i + 1].y);
        }
        bmd.ctx.lineWidth = d.betLineWinWidth;
        bmd.ctx.strokeStyle = d.winbetLineColor;
        bmd.ctx.lineCap = 'round';
        bmd.ctx.stroke();
        var spriteWin = this.game.add.sprite(0, 0, bmd);
        spriteWin.visible = false;
        line.winSprite = spriteWin;
    }
};
/**
 * This function is executed when the mouse pointer hovers on any bet-line number block.
 * @param {object} sprite - The sprite on which the mouse pointer was hovered.
 * @param {object} pointer - The object referring to the mouse pointer.
 */
var betLineMouseOver = function (sprite, pointer) {
    sprite.scale.setTo(1.2);
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        if (sprite.data.lineNumber === line.lineNumber) {
            line.hoverSprite.visible = true;
        }
    }
};
/**
 * This function is executed when the one clicks on any bet-line number block.
 * @param {object} sprite - The sprite on which the mouse pointer was clicked.
 * @param {object} pointer - The object referring to the mouse pointer.
 */
var betLineClickAnimation = function (sprite, pointer) {
    if (sprite.tint === 0xffffff) {
        sprite.tint = this.styles.betLines.clickTintMultiplier * 0xffffff;
    }
    else {
        sprite.tint = 0xffffff;
    }
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        if (sprite.data.lineNumber === line.lineNumber) {
            line.winSprite.visible = !line.winSprite.visible;
        }
    }
};
/**
 * This function is executed when the mouse pointer hovers outs of any bet-line number block.
 * @param {object} sprite - The sprite from which the mouse pointer was hovered out.
 * @param {object} pointer - The object referring to the mouse pointer.
 */
var betLineMouseOut = function (sprite, pointer) {
    sprite.scale.setTo(1);
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        if (sprite.data.lineNumber === line.lineNumber) {
            line.hoverSprite.visible = false;
        }
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/bet-lines.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/configure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configure; });
/**
 * Define the values which are used while booting the game.
 * These values are used for intialising the cordinates, dimensions, volume levels and cash-bet statistics.
 */
var configure = function () {
    this.gameData = this.game.angularContainer.gameData;
    this.game.angularContainer.isInfoFooterLineHidden = false;
    this.stateAssets.betLineDetails = this.gameData.betLineDetails;
    this.styles = {
        statsBlock: {
            label: {
                fontSize: 15,
                fontSizeSmall: 12,
                fontWeight: 'bold',
                hoverColor: 0x0000ff,
                whiteColor: 0xffffff,
                textColor: '#0D1D9C'
            }
        },
        betLines: {
            clickTintMultiplier: 250
        },
        toastMessages: {
            colorGradientCenter: 'rgba(50,200,240,0.9)',
            colorGradientEdges: 'rgba(100,100,240,0)'
        },
        lineWinBackdrop: {
            colorGradientCenter: 'rgba(100,150,200,0)',
            colorGradientEdges: 'rgba(0,50,100,0.8)'
        }
    };
    this.coordinates = {
        reelY: 50,
        statsBlock: {
            spinButton: { x: this.game.world.centerX + 5, y: 580 },
            betLabel: { x: 155, y: 600 },
            levelLabel: { x: 338, y: 600 },
            autoPlayButton: { x: 360, y: 540 },
            betButtonFrame: { x: 57, y: 540 },
            levelButtonFrame: { x: 200, y: 540 },
            coinButtonFrame: { x: 980, y: 540 },
            coinValueButtonFrame: { x: 816, y: 540 },
            maxBetButton: { x: 658, y: 540 },
            coinValueLable: { x: 867, y: 600 },
            coinsLable: { x: 890, y: 600 },
            levelIncreaseButton: { x: 270, y: 582 },
            levelDecreaseButton: { x: 232, y: 582 },
            coinValueIncreaseButton: { x: 898, y: 582 },
            coinValueDecreaseButton: { x: 835, y: 582 },
            levelText: { x: 260, y: 592 },
            coinValueText: { x: 878, y: 592 },
            totalCoinsText: { x: 1039, y: 592 },
            betText: { x: 120, y: 592 },
            infoButton: { x: 150, y: 640 },
            imageBet: { x: 118, y: 570 },
            imageLevel: { x: 484 - 220, y: 570 },
            imageCoinValue: { x: 648 + 230, y: 570 },
            imageCoins: { x: 703 + 335, y: 570 },
            imageAutoplay: { x: 442, y: 580 },
            imageMaxBet: { x: 717, y: 580 }
        }
    };
    this.stats = {
        intialLevel: 1,
        bet: this.gameData.betMultiplier,
        totalCash: this.gameData.cash,
        coinValueArray: this.gameData.coinValue,
        IntialCoinValue: this.gameData.coinValue[0],
        coinValueArrayLength: this.gameData.coinValue.length,
        totalCoins: this.gameData.totalCoins,
    };
    this.stats.level = this.stats.intialLevel;
    this.stats.coinLevel = this.stats.IntialCoinValue;
    this.stats.calculateTotalCoins = this.stats.totalCoins;
    this.stats.calculateTotalCash = this.stats.totalCash;
    this.dimensions = {
        reel: {
            reelY: 50,
            tilesLeft: 200,
            tileWidth: 150,
            tileHeight: 150
        },
        statsBlock: {
            autoPlayBlockHeight: 87,
            autoPlayBlockWidth: 78,
        },
        betLines: {
            horizontalPadding: 180,
            betLineNumberRadius: 20,
            betLineNumberSpacing: 5,
            betLineTopOffset: 40,
            width: 20,
            height: 20,
            lineWidth: 40,
            betLineColor: '#6A9A97',
            strokeMargin: 10,
            betLineWidth: 2,
            betLineWinWidth: 20,
            hoverupperbetLineColor: '#335',
            hoverlowerbetLineColor: '#779',
            winbetLineColor: '#bba'
        },
        spin: {
            reelTopOffset: 450,
            reelHeight: 450,
            dropSpinAngle: 10,
            reelYBounce: 50
        },
        scatter: {
            scatterTweenTimeout: 400
        }
    };
    this.soundVolumeMultipliers = {
        backgroundScore: 0.05,
        spinSound: 0.7,
        winSound: 0.4,
        reelStopSound: 0.4,
        buttonClickSound: 0.9,
        ScatterBackgroundScore: 0.7,
        ScatterStopSound: 0.8,
    },
        this.bigWinThreashHoldMultiplier = 15;
    calculateAndAssignTileCoordinates.apply(this);
};
/**
 * Define and assign values to the 15 tiles(5 x 3)
 */
var calculateAndAssignTileCoordinates = function () {
    var d = this.dimensions.reel;
    for (var reelCounter = 0; reelCounter < this.stateAssets.reelCount; reelCounter++) {
        this.stateAssets.tileCoordinates.push({
            'tileNumber': ((3 * reelCounter) + 1),
            'coordinate': {
                'x': d.tilesLeft + reelCounter * d.tileWidth + d.tileWidth / 2,
                'y': d.reelY + d.tileHeight / 2
            }
        });
        this.stateAssets.tileCoordinates.push({
            'tileNumber': ((3 * reelCounter) + 2),
            'coordinate': {
                'x': d.tilesLeft + reelCounter * d.tileWidth + d.tileWidth / 2,
                'y': d.reelY + (1 * d.tileHeight) + d.tileHeight / 2
            }
        });
        this.stateAssets.tileCoordinates.push({
            'tileNumber': ((3 * reelCounter) + 3),
            'coordinate': {
                'x': d.tilesLeft + reelCounter * d.tileWidth + d.tileWidth / 2,
                'y': d.reelY + (2 * d.tileHeight) + d.tileHeight / 2
            }
        });
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/configure.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/enable-disable-controls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enableButtonsOnSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return disableButtonsOnSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hidePopUps; });
/**
 * The function enable various buttons within the game
 */
var enableButtonsOnSpin = function () {
    this.game.spinButton.inputEnabled = true;
    this.game.levelIncreaseButton.inputEnabled = true;
    this.game.levelDecreaseButton.inputEnabled = true;
    this.game.coinValueIncreaseButton.inputEnabled = true;
    this.game.coinValueDecreaseButton.inputEnabled = true;
    this.game.maxBetButton.inputEnabled = true;
    this.game.autoPlayButton.inputEnabled = true;
    this.game.spaceBar.enabled = true;
    this.game.spinButtonRotationalFrame.visible = true;
    this.game.spinButton.setFrames(1, 0, 2);
    // this.game.spinButton.frame=0;
};
/**
 * The function disable various buttons while the spin, auto play is active.
 */
var disableButtonsOnSpin = function () {
    this.game.spinButton.inputEnabled = false;
    this.game.levelIncreaseButton.inputEnabled = false;
    this.game.levelDecreaseButton.inputEnabled = false;
    this.game.coinValueIncreaseButton.inputEnabled = false;
    this.game.coinValueDecreaseButton.inputEnabled = false;
    this.game.maxBetButton.inputEnabled = false;
    this.game.autoPlayButton.inputEnabled = false;
    this.game.spaceBar.enabled = false;
    this.game.spinButtonRotationalFrame.visible = false;
    this.game.spinButton.setFrames(3, 3, 3);
    // this.game.spinButton.frame=1;
};
/**
 * The function hide the paytable, help document when a spin is trigger and when win animations are going on
 */
var hidePopUps = function () {
    if (this.game.angularContainer.isPaytableHidden === false || this.game.angularContainer.isHelpHidden === false) {
        this.game.angularContainer.isPaytableHidden = true;
        this.game.angularContainer.isHelpHidden = true;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/enable-disable-controls.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/event-handling.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_post_spin_dto__ = __webpack_require__("../../../../../src/app/contracts/api-calls/post-spin-dto.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return bindStatsBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return bindSpaceBarToSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bindSpinButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bindInfoButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return bindAutoplayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return bindMaxBetButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return bindLevelIncreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return bindLevelDecreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return bindCoinValueIncreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return bindCoinValueDecreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tweekReelWithRandom; });

/**
 * It enable the user to activate spin feature with spacebar click
 */
var bindSpaceBarToSpin = function () {
    this.game.spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.game.spaceBar.onDown.add(function () {
        var isSpinning = false;
        for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
            var reel = _a[_i];
            isSpinning = isSpinning || reel.isSpinning;
        }
        if (isSpinning === false) {
            if (this.game.angularContainer.isSpacebarToSpin && this.game.angularContainer.isGameFocused) {
                var boundSpinClick = spinClick.bind(this);
                boundSpinClick();
            }
        }
        /*TODO 1.change frame when performing spin through spacebar and
         TODO 2.when cursor is focussed outside canvas spacebar spin should not work*/
    }, this);
};
/**
 *  Bind a function when the spin buttoon is clickec up i.e. when a button is pressed and left.
 */
var bindSpinButton = function () {
    this.game.spinButton.onInputUp.add(spinClick, this);
};
/**
 * The function intialise the level, coin value increase/decrease button i.e. whether they are intailled enavbled or disabled
 */
var bindStatsBlock = function () {
    this.game.levelDecreaseButton.inputEnabled = false;
    this.game.levelDecreaseButton.events.onInputUp.add(this.methods.levelDecrease, this);
    this.game.levelIncreaseButton.inputEnabled = true;
    this.game.levelIncreaseButton.events.onInputUp.add(this.methods.levelIncrease, this);
    this.game.coinValueDecreaseButton.inputEnabled = false;
    this.game.coinValueDecreaseButton.events.onInputUp.add(this.methods.coinValueDecrease, this);
    this.game.coinValueIncreaseButton.inputEnabled = true;
    this.game.coinValueIncreaseButton.events.onInputUp.add(this.methods.coinValueIncrease, this);
};
/**
 *
 * @param wasScatter
 * @param wasJackpot
 */
var tweekReelWithRandom = function (wasScatter, wasJackpot) {
    var _this = this;
    this.stateAssets.randomNumbers = [];
    var scatterTweenTimeout = this.dimensions.scatter.scatterTweenTimeout;
    if ((this.spinResponse.randomNumbers !== undefined) && (this.spinResponse.randomNumbers !== null)) {
        for (var _i = 0, _a = this.spinResponse.randomNumbers; _i < _a.length; _i++) {
            var num = _a[_i];
            this.stateAssets.randomNumbers.push(this.game.angularContainer.gameData.symbolSetMap.get(num));
        }
        this.stateAssets.reels.forEach(function (reel, index) {
            var _loop_1 = function (child) {
                if (child.data.isLandingSymbol) {
                    if (wasScatter) {
                        var scatterTween = _this.game.add.tween(child).to({ alpha: 0 }, scatterTweenTimeout / 2, Phaser.Easing.Linear.None, true);
                        scatterTween.onComplete.add(function () {
                            child.frame = this.stateAssets.randomNumbers[child.data.tileNumber - 1];
                            this.scatterTweenFadeIn = this.game.add.tween(child).to({ alpha: 1 }, scatterTweenTimeout / 2, Phaser.Easing.Linear.None, true);
                        }, _this);
                    }
                    else {
                        child.frame = _this.stateAssets.randomNumbers[child.data.tileNumber - 1];
                    }
                }
            };
            for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _loop_1(child);
            }
        });
    }
    ;
    if (wasScatter) {
        var that_1 = this;
        setTimeout(function () {
            that_1.methods.showWinAnimations(that_1.spinResponse);
        }, scatterTweenTimeout, this);
    }
    if (wasJackpot) {
        this.methods.jackpotWinAnimation(this.spinResponse);
    }
};
/**
 * Define the messages displayed to the user in case the cash become negative.
 */
var popUpOnNegativeCash = function () {
    this.game.angularContainer.errorPopUpheader = 'Insufficient Funds';
    this.game.angularContainer.errorPopUpInnerText = 'Please add cash or reduce your bet to continue playing.';
    this.game.angularContainer.isErrorPopupHidden = false;
};
/**
 * Define the messages displayed in case an error occur.
 */
var popUpOnError = function (errorMessage) {
    this.game.angularContainer.errorPopUpheader = ' ERROR!';
    this.game.angularContainer.errorPopUpInnerText = errorMessage;
    this.game.angularContainer.isErrorPopupHidden = false;
};
/**
 * Th function is called when user click the spin button on game page not in jackpot state.
 * 1. Remove the previous win animations.
 * 2. Check to see if user have enough cash to proceed with the game and disable the cash-bet stats, hide all the pop-ups
 * 3. Make the http call to postSpinData() to get the result
 * Success: Give the spin response
 * Error: Display error pop ups
*/
var spinClick = function () {
    if (!(this.game.angularContainer.isJackpotState)) {
        this.methods.spinButtonAnimation();
        var isTotalCoinsValid = (this.stats.calculateTotalCoins - (this.stats.bet * this.stats.level)) >= 0;
        if (this.spinResponse && this.spinResponse.prize > 0) {
            this.methods.removeWinAnimations();
        }
        if (isTotalCoinsValid) {
            this.methods.removeWinAnimations();
            // Because the spin sound is faded at reel stop
            this.game.spinSound.volume = this.volume * this.soundVolumeMultipliers.spinSound;
            // play spin sound
            this.game.spinSound.play();
            this.spinResponse = {};
            this.methods.disableButtonsOnSpin();
            this.methods.hidePopUps();
            var _loop_2 = function (reel) {
                this_1.game.time.events.add((Phaser.Timer.SECOND * (reel.number - 1)) / 10, function () {
                    reel.isSpinning = true;
                }, this_1);
            };
            var this_1 = this;
            for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
                var reel = _a[_i];
                _loop_2(reel);
            }
            var postSpinDTO = new __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_post_spin_dto__["a" /* default */](this.game.angularContainer.gameData.gameId, this.stats.bet, this.stats.level, this.stats.coinLevel, this.stats.calculateTotalCash, this.stats.IntialCoinValue, []);
            if (this.game.angularContainer.isTestModeActive && !this.game.angularContainer.isTestPanelHidden) {
                var tiles = this.game.angularContainer.element.nativeElement.getElementsByClassName('test-panel-tiles');
                for (var _b = 0, tiles_1 = tiles; _b < tiles_1.length; _b++) {
                    var element = tiles_1[_b];
                    postSpinDTO.cheatSymbolArray[element.getAttribute('tile-number') - 1] = element.innerText;
                }
            }
            // this.httpService.postSpinData(postSpinDTO)
            //   .subscribe(
            //   (response) => {
            //     if (this.freeSpinsPending < 0) {
            //       updateStats.apply(this);
            //     }
            this.spinResponse = {}; //response.body;
            this.game.freeSpin = this.spinResponse.numberOfFreeSpins;
            this.methods.updateReelsWithScatterFlags();
            this.methods.updateReelsWithJackpotFlags();
            this.game.time.events.add(Phaser.Timer.SECOND * 1.5, stop, this);
            // },
            // (error) => {
            //   this.game.time.events.add(Phaser.Timer.SECOND * 1.5, stop, this);
            //   const errorMessage = this.methods.popUpMessageGenerator(error);
            //   popUpOnError.call(this, [errorMessage]);
            // }
            // );
        }
        else {
            this.methods.resetAutoPlaySettings.apply(this, [false, true, true, -1]);
            this.game.angularContainer.autoPlay = false;
            popUpOnNegativeCash.apply(this);
            this.methods.enableButtonsOnSpin();
        }
    }
};
/**
 * It stops the reels and fade out the spin sound
 */
var stop = function () {
    tweekReelWithRandom.apply(this);
    var _loop_3 = function (reel) {
        this_2.game.time.events.add((Phaser.Timer.SECOND * reel.dropLag), function () {
            reel.y = -3 * this.dimensions.reel.tileHeight; //  3 is because there are 3 tiles in one reel
            reel.isSpinning = false;
        }, this_2);
    };
    var this_2 = this;
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_3(reel);
    }
    this.game.spinSound.fadeOut(Phaser.Timer.SECOND);
};
/**
 * It bind the information button with user input action such as mouse down, mouse over, mouse out
 */
var bindInfoButton = function () {
    this.game.infoButton.inputEnabled = true;
    this.game.infoButton.events.onInputDown.add(togglePaytable, this);
    this.game.infoButton.events.onInputOver.add(hoverPaytable, this);
    this.game.infoButton.events.onInputOut.add(mouseOutPaytable, this);
};
/**
 * Represents toggling of paytable button
 */
var togglePaytable = function () {
    if (this.game.angularContainer.isHelpHidden === false) {
        this.game.angularContainer.isHelpHidden = true;
    }
    this.game.angularContainer.resetPaytableSlidecounter();
    this.game.angularContainer.isPaytableHidden = !this.game.angularContainer.isPaytableHidden;
};
/**
 * Represents hovering of paytable button
 */
var hoverPaytable = function () {
    this.game.canvas.style.cursor = 'pointer';
    this.game.infoButton.scale.setTo(0.8);
};
/**
 *  Represents mouse out event of paytable button
 */
var mouseOutPaytable = function () {
    this.game.canvas.style.cursor = 'default';
    this.game.infoButton.scale.setTo(0.7);
};
/**
 * The function update the cash-bet statistics as soon as the spin button is clicked.
 */
var updateStats = function () {
    this.game.angularContainer.gameData.win = 0;
    this.stats.calculateTotalCash = Math.round((this.stats.calculateTotalCash - (this.game.angularContainer.gameData.maxBet)) * 100) / 100;
    this.game.angularContainer.gameData.cash = this.stats.calculateTotalCash;
    this.stats.calculateTotalCoins = this.stats.calculateTotalCoins - (this.stats.bet * this.stats.level);
    this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
};
/**
 * It bind the autoplay button with user input action such as mouse down, mouse over, mouse out and mouse up.
 */
var bindAutoplayButton = function () {
    this.game.autoPlayButton.onInputUp.add(autoplayClickUp, this);
    this.game.autoPlayButton.onInputOver.add(autoplayClickOver, this);
    this.game.autoPlayButton.onInputOut.add(autoplayClickOut, this);
    this.game.autoPlayButton.onInputDown.add(autoplayClickDown, this);
};
/**
 * It bind the max-bet button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindMaxBetButton = function () {
    this.game.maxBetButton.onInputUp.add(maxBetClickUp, this);
    this.game.maxBetButton.onInputOver.add(maxBetClickOver, this);
    this.game.maxBetButton.onInputOut.add(maxBetClickOut, this);
    this.game.maxBetButton.onInputDown.add(maxBetClickDown, this);
};
/**
 * It bind the level increase button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindLevelIncreaseButton = function () {
    this.game.levelIncreaseButton.events.onInputUp.add(levelIncreaseClickUp, this);
    this.game.levelIncreaseButton.events.onInputOver.add(levelIncreaseClickOver, this);
    this.game.levelIncreaseButton.events.onInputOut.add(levelIncreaseClickOut, this);
    this.game.levelIncreaseButton.events.onInputDown.add(levelIncreaseClickDown, this);
};
/**
 * It bind the level decrease button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindLevelDecreaseButton = function () {
    this.game.levelDecreaseButton.events.onInputUp.add(levelDecreaseClickUp, this);
    this.game.levelDecreaseButton.events.onInputOver.add(levelDecreaseClickOver, this);
    this.game.levelDecreaseButton.events.onInputOut.add(levelDecreaseClickOut, this);
    this.game.levelDecreaseButton.events.onInputDown.add(levelDecreaseClickDown, this);
};
/**
 * It bind the coin value increase button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindCoinValueIncreaseButton = function () {
    this.game.coinValueIncreaseButton.events.onInputUp.add(coinValueIncreaseClickUp, this);
    this.game.coinValueIncreaseButton.events.onInputOver.add(coinValueIncreaseOver, this);
    this.game.coinValueIncreaseButton.events.onInputOut.add(coinValueIncreaseOut, this);
    this.game.coinValueIncreaseButton.events.onInputDown.add(coinValueIncreaseClickDown, this);
};
/**
 * It bind the coin value decrease button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindCoinValueDecreaseButton = function () {
    this.game.coinValueDecreaseButton.events.onInputUp.add(coinValueDecreaseClickUp, this);
    this.game.coinValueDecreaseButton.events.onInputOver.add(coinValueDecreaseOver, this);
    this.game.coinValueDecreaseButton.events.onInputOut.add(coinValueDecreaseOut, this);
    this.game.coinValueDecreaseButton.events.onInputDown.add(coinValueDecreaseClickDown, this);
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse up action
 */
var autoplayClickUp = function () {
    if (this.game.imageAutoplay.y === this.coordinates.statsBlock.imageAutoplay.y) {
        this.game.add.tween(this.game.imageAutoplay).to({ y: this.coordinates.statsBlock.imageAutoplay.y - 10 }, 300, Phaser.Easing.Quadratic.In, true, 0, 0, true);
    }
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse over action
 */
var autoplayClickOver = function () {
    // this.game.add.tween(this.game.imageAutoplay.scale).to({ x: 1, y: 2 }, 400, Phaser.Easing.Bounce.Out, true);
    this.game.imageAutoplay.tint = 200 * this.styles.statsBlock.label.hoverColor;
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse out action
 */
var autoplayClickOut = function () {
    // this.game.add.tween(this.game.imageAutoplay.scale).to({ x: 0.65, y: 1 }, 250, 'Linear', true);
    this.game.imageAutoplay.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse down action
 */
var autoplayClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.imageAutoplay.tint = 200 * this.styles.statsBlock.label.hoverColor;
    this.game.angularContainer.isAutoHidden = !this.game.angularContainer.isAutoHidden;
};
/**
 * When user perform the mouse up action on the max bet this function is fired.
 * It activate spin in case the level is 10.
 * It set level to 10 if the level is less than 10
 */
var maxBetClickUp = function () {
    if (this.game.imageMaxBet.y === this.coordinates.statsBlock.imageMaxBet.y) {
        this.game.add.tween(this.game.imageMaxBet).to({ y: this.coordinates.statsBlock.imageMaxBet.y - 10 }, 300, Phaser.Easing.Quadratic.In, true, 0, 0, true);
    }
    if (this.stats.level !== this.game.angularContainer.gameData.maxBetLevel) {
        this.game.levelIncreaseButton.inputEnabled = false;
        this.game.levelIncreaseButton.alpha = 0.5;
        this.game.levelDecreaseButton.inputEnabled = true;
        this.game.levelDecreaseButton.alpha = 1;
        this.stats.level = this.game.angularContainer.gameData.maxBetLevel;
        this.game.levelTextButton.text = this.stats.level.toString();
        this.game.betTextButton.text = this.stats.bet * this.stats.level;
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    else {
        spinClick.apply(this);
    }
};
/**
 * It add easing tween effect to the 'Max bet' text when user perform mouse over action
 */
var maxBetClickOver = function () {
    // this.game.add.tween(this.game.imageMaxBet.scale).to({ x: 0.65, y: 1.3 }, 250, 'Linear', true);
    this.game.imageMaxBet.tint = 200 * this.styles.statsBlock.label.hoverColor;
};
/**
 * It add easing tween effect to the 'Max bet' text when user perform mouse out action
 */
var maxBetClickOut = function () {
    // this.game.add.tween(this.game.imageMaxBet.scale).to({ x: 0.65, y: 1 }, 250, 'Linear', true);
    this.game.imageMaxBet.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * It paly a sound when the user perform mouse down action
 */
var maxBetClickDown = function () {
    this.game.buttonClickSound.play();
};
var levelIncreaseClickUp = function () {
};
/**
 * Intailly the button is tinted with white color till the level is <=9
 */
var levelIncreaseClickOver = function () {
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level <= 9) {
        this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when the user perform mouse out action on the button
 */
var levelIncreaseClickOut = function () {
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when the user perform mouse down action on the button
 */
var levelIncreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level === 9) {
        this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};
var levelDecreaseClickUp = function () {
};
/**
 * Intailly the button is tinted with white color till the level is >1
 */
var levelDecreaseClickOver = function () {
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level > 1) {
        this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when the user perform mouse out action on the button
 */
var levelDecreaseClickOut = function () {
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when the user perform mouse down action on the button
 */
var levelDecreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level === 2) {
        this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};
/**
 * Define the behaviour when user perform mouse up event on coin value increase button
 */
var coinValueIncreaseClickUp = function () {
};
/**
 * Define the behaviour when user perform mouse over event on coin value increase button
 */
var coinValueIncreaseOver = function () {
    this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel < this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
        this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when user perform mouse out event on coin value increase button
 */
var coinValueIncreaseOut = function () {
    this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when user perform mouse down event on coin value increase button
 */
var coinValueIncreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel === this.stats.coinValueArray[this.stats.coinValueArrayLength - 2]) {
        this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};
var coinValueDecreaseClickUp = function () {
};
/**
 * Define the behaviour when user perform mouse over event on coin value decrease button
 */
var coinValueDecreaseOver = function () {
    this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel > this.stats.coinValueArray[0]) {
        this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when user perform mouse out event on coin value decrease button
 */
var coinValueDecreaseOut = function () {
    this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when user perform mouse down event on coin value decrease button
 */
var coinValueDecreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel === this.stats.coinValueArray[1]) {
        this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/event-handling.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/event-listner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listenExternal; });
/**
 * The function listen to the external event fired by the user and perform the appropriate function accordingly
 *
 * @param eventName define the name of the event namely toggle mute, auto play and auto stop
 *
 */
var listenExternal = function (eventName) {
    switch (eventName) {
        case this.game.angularContainer.gameCustomEvents.toggleMute:
            this.methods.toggleMute();
            break;
        case this.game.angularContainer.gameCustomEvents.autoPlay:
            this.methods.autoplayClickDownEventListner();
            break;
        case this.game.angularContainer.gameCustomEvents.autoStop:
            this.methods.autoplayClickDownEventListner();
            break;
        default:
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/event-listner.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backgroud_renderer__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/backgroud-renderer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bet_lines__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/bet-lines.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configure__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/configure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reel_renderer__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/reel-renderer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__panel_renderer__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/panel-renderer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_handling__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/event-handling.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__spin__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/spin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jackpot_counter__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/jackpot-counter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sounds__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/sounds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event_listner__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/event-listner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__update_statistics__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/update-statistics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__win_animations__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/win-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__jackpot_state_backlog__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/jackpot-state-backlog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spin_button_animation__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/spin-button-animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__enable_disable_controls__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/enable-disable-controls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auto_play__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/auto-play.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__scatter__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/scatter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__jackpot_symbol__ = __webpack_require__("../../../../../src/app/games/chess/main/states/main-screen-state/jackpot-symbol.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");


// state modules



















/**
 * The class defines the MainScreen State.
 * It will design the state and handle all the event for MainScreen state.
 */
var MainScreenState = (function () {
    /**
     * Represents the main-state of the slot game. The game-screen on which reels are visible and slot game is played.
     *  @param _httpservice An object of GamePageService type
     */
    function MainScreenState(_httpService) {
        this.name = 'MainScreen';
        this.isInitial = false;
        this.jackpotCounter = 0;
        this.coordinates = {};
        this.config = new __WEBPACK_IMPORTED_MODULE_20__app_config__["a" /* AppConfig */]();
        this.stateAssets = {
            isWinAnimationOver: false,
            isAutoSpinActive: false,
            ready: false,
            colors: null,
            point: null,
            group: null,
            reels: [],
            reelCount: 5,
            randomNumbers: [],
            betLinesRight: [12, 18, 20, 16, 11, 14, 15, 17, 13, 19],
            betLinesLeft: [4, 2, 6, 8, 1, 10, 9, 7, 3, 5],
            betLinesCoordinates: [],
            tileCoordinates: [],
            betLineDetails: [],
            winAnimationTime: 2
        };
        this.volume = 1;
        this.httpService = _httpService;
        this.methods = {};
        this.winAnimations = {};
        this.isAutoPlayRunning = false;
        this.freeSpinsPending = -1;
        this.lastResponseBeforeFreeSpins = {};
        this.isScatterRunning = false;
        this.scatterArray = [];
    }
    MainScreenState.prototype.ngOnInit = function () {
    };
    /**
     * Define method for which is responsible for call jackpotHeader method for set the value of jackpot counter.
     */
    MainScreenState.prototype.getJackpotCash = function () {
        __WEBPACK_IMPORTED_MODULE_9__jackpot_counter__["a" /* jackpotHeader */].apply(this);
    };
    /**
     *  This function is called first. It should contain code to handle the loading of assets needed by your game
     */
    MainScreenState.prototype.preload = function () {
    };
    ;
    /**
     * The create function is called automatically once the preload has finished.
     * set the visibility of test panel and activate current test panel.
     * bind all the methods which is required further.
     * draw the state using drawbackground, drawpanel
     * set all the designs for main screen state and attached all the animations.
     */
    MainScreenState.prototype.create = function () {
        var _this = this;
        this.game.angularContainer.isJackpotTestModeHidden = true;
        this.game.angularContainer.isJackpotTestModeActive = false;
        this.methods.removeWinAnimations = __WEBPACK_IMPORTED_MODULE_13__win_animations__["a" /* removeWinAnimations */].bind(this);
        this.methods.showWinAnimations = __WEBPACK_IMPORTED_MODULE_13__win_animations__["b" /* showWinAnimations */].bind(this);
        this.methods.jackpotWinAnimation = __WEBPACK_IMPORTED_MODULE_13__win_animations__["c" /* jackpotWinAnimation */].bind(this);
        this.methods.spinButtonAnimation = __WEBPACK_IMPORTED_MODULE_15__spin_button_animation__["a" /* spinButtonAnimation */].bind(this);
        this.methods.removeSpinButtonAnimation = __WEBPACK_IMPORTED_MODULE_15__spin_button_animation__["b" /* removeSpinButtonAnimation */].bind(this);
        this.methods.levelDecrease = __WEBPACK_IMPORTED_MODULE_12__update_statistics__["a" /* levelDecrease */].bind(this);
        this.methods.levelIncrease = __WEBPACK_IMPORTED_MODULE_12__update_statistics__["b" /* levelIncrease */].bind(this);
        this.methods.coinValueDecrease = __WEBPACK_IMPORTED_MODULE_12__update_statistics__["c" /* coinValueDecrease */].bind(this);
        this.methods.coinValueIncrease = __WEBPACK_IMPORTED_MODULE_12__update_statistics__["d" /* coinValueIncrease */].bind(this);
        this.methods.winCalculations = __WEBPACK_IMPORTED_MODULE_12__update_statistics__["e" /* winCalculations */].bind(this);
        this.methods.enableButtonsOnSpin = __WEBPACK_IMPORTED_MODULE_16__enable_disable_controls__["a" /* enableButtonsOnSpin */].bind(this);
        this.methods.disableButtonsOnSpin = __WEBPACK_IMPORTED_MODULE_16__enable_disable_controls__["b" /* disableButtonsOnSpin */].bind(this);
        this.methods.hidePopUps = __WEBPACK_IMPORTED_MODULE_16__enable_disable_controls__["c" /* hidePopUps */].bind(this);
        this.methods.popUpMessageGenerator = __WEBPACK_IMPORTED_MODULE_1__shared__["c" /* popUpMessageGenerator */].bind(this);
        this.methods.toggleMute = __WEBPACK_IMPORTED_MODULE_10__sounds__["a" /* toggleMute */].bind(this);
        this.methods.externalEventListner = __WEBPACK_IMPORTED_MODULE_11__event_listner__["a" /* listenExternal */].bind(this);
        this.methods.autoSpin = __WEBPACK_IMPORTED_MODULE_7__event_handling__["a" /* spinClick */].bind(this);
        this.methods.autoplayClickDownEventListner = __WEBPACK_IMPORTED_MODULE_17__auto_play__["a" /* autoPlay */].bind(this);
        this.methods.resetAutoPlaySettings = __WEBPACK_IMPORTED_MODULE_17__auto_play__["b" /* resetAutoPlaySettings */].bind(this);
        this.methods.triggerPendingSpins = __WEBPACK_IMPORTED_MODULE_17__auto_play__["c" /* triggerPendingSpins */].bind(this);
        this.methods.revertScatterWinAnimations = __WEBPACK_IMPORTED_MODULE_13__win_animations__["d" /* revertScatterWinAnimations */].bind(this);
        this.methods.tweekReelWithRandom = __WEBPACK_IMPORTED_MODULE_7__event_handling__["b" /* tweekReelWithRandom */].bind(this);
        this.methods.updateReelsWithScatterFlags = __WEBPACK_IMPORTED_MODULE_18__scatter__["a" /* updateReelsWithScatterFlags */].bind(this);
        this.methods.updateReelsWithJackpotFlags = __WEBPACK_IMPORTED_MODULE_19__jackpot_symbol__["a" /* updateReelsWithjackpotSymbol */].bind(this);
        this.methods.JackpotStateBacklog = __WEBPACK_IMPORTED_MODULE_14__jackpot_state_backlog__["a" /* showpendingJackpotAnimations */].bind(this);
        __WEBPACK_IMPORTED_MODULE_4__configure__["a" /* configure */].apply(this);
        __WEBPACK_IMPORTED_MODULE_2__backgroud_renderer__["a" /* drawBackground */].apply(this);
        __WEBPACK_IMPORTED_MODULE_3__bet_lines__["a" /* configureBetLines */].apply(this);
        __WEBPACK_IMPORTED_MODULE_3__bet_lines__["b" /* drawBetLines */].apply(this);
        __WEBPACK_IMPORTED_MODULE_5__reel_renderer__["a" /* drawReels */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__panel_renderer__["a" /* drawPanels */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__panel_renderer__["b" /* addButtons */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["c" /* bindSpinButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["d" /* bindSpaceBarToSpin */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["e" /* bindInfoButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_10__sounds__["b" /* addMusic */].apply(this);
        __WEBPACK_IMPORTED_MODULE_13__win_animations__["e" /* drawWinToast */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["f" /* bindAutoplayButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["g" /* bindMaxBetButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["h" /* bindLevelIncreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["i" /* bindLevelDecreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["j" /* bindCoinValueIncreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["k" /* bindCoinValueDecreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__event_handling__["l" /* bindStatsBlock */].apply(this);
        __WEBPACK_IMPORTED_MODULE_9__jackpot_counter__["b" /* addJackpotHeader */].apply(this);
        setInterval(function () {
            _this.getJackpotCash();
        }, this.config.Timeouts.jackpotCashInterval);
        this.game.black = this.game.add.image(0, 0, 'black');
        this.game.black.alpha = 1;
        this.game.add.tween(this.game.black).to({ alpha: 0 }, 2 * __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Timer"].SECOND, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Linear.None, true);
        if (this.game.angularContainer.isJackpotState) {
            this.methods.JackpotStateBacklog();
        }
    };
    ;
    /**
     * The update (and render) functions are called every frame.
     * Resposible for reel spinning.
     * Define the animation on spin button.
     * Remove the diamond animation when they collide.
     */
    MainScreenState.prototype.update = function () {
        __WEBPACK_IMPORTED_MODULE_8__spin__["a" /* spin */].apply(this);
        __WEBPACK_IMPORTED_MODULE_15__spin_button_animation__["c" /* spinButtonFrameAnimation */].apply(this);
        if (this.game.winEmitter) {
            this.game.physics.arcade.collide(this.game.winEmitter);
        }
    };
    ;
    return MainScreenState;
}());
/* harmony default export */ __webpack_exports__["a"] = (MainScreenState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/jackpot-counter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jackpotHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addJackpotHeader; });
/**
 * The function define for get the jackpot counter value.
 */
var jackpotHeader = function () {
    var _this = this;
    this.httpService.getJackpotCounter()
        .subscribe(function (response) {
        _this.game.angularContainer.jackpotCounter = response.body.jackpotCounter;
        updateJackpotAmount.apply(_this);
    }, function (error) {
        console.log('error');
    }, function () { updateJackpotAmount.apply(_this); });
};
/**
 * The function add the jackpot value to the game main-screen state
 */
var addJackpotHeader = function () {
    var frameHeight = this.game.cache.getImage('jackpotCounterFrame').height / 5;
    var frameWidth = this.game.cache.getImage('jackpotCounterFrame').width;
    this.jackpotHeader = this.game.add.group();
    this.jackpotHeader.x = this.game.world.width - frameWidth + 48;
    this.jackpotHeader.y = -20;
    var bmd = this.game.add.bitmapData(frameWidth, frameHeight);
    bmd.ctx.beginPath();
    bmd.ctx.moveTo(100, (frameHeight / 2) - 23);
    bmd.ctx.lineTo(400, (frameHeight / 2) - 23);
    bmd.ctx.moveTo(100, (frameHeight / 2) - 15);
    bmd.ctx.lineTo(400, (frameHeight / 2) - 15);
    bmd.ctx.moveTo(100, (frameHeight / 2) + 15);
    bmd.ctx.lineTo(400, (frameHeight / 2) + 15);
    bmd.ctx.moveTo(100, (frameHeight / 2) + 23);
    bmd.ctx.lineTo(400, (frameHeight / 2) + 23);
    bmd.ctx.lineWidth = 5;
    bmd.ctx.strokeStyle = '#ffdd66';
    bmd.ctx.stroke();
    var jackpotCounterFrameHolder = this.game.add.sprite(150, frameHeight / 2, bmd);
    jackpotCounterFrameHolder.anchor.setTo(0.5);
    var jackpotCounterFrame = this.game.add.sprite(frameWidth / 2, frameHeight / 2, 'jackpotCounterFrame', 5);
    jackpotCounterFrame.anchor.setTo(0.5);
    jackpotCounterFrame.scale.setTo(0.6);
    jackpotCounterFrame.animations.add('blink', [0, 1, 2, 3, 4], 1, true);
    jackpotCounterFrame.play('blink', 12, true);
    this.jackpotLable = this.game.add.text(frameWidth / 2, (frameHeight / 2) - 10, 'JACKPOT');
    this.jackpotLable.anchor.setTo(0.5);
    this.jackpotLable.font = 'Arial Black';
    this.jackpotLable.fontSize = 20;
    this.jackpotLable.stroke = '#284';
    this.jackpotLable.strokeThickness = 0.5;
    this.jackpotLable.fill = '#aa4';
    this.jackpotLable.smoothed = false;
    this.jackpotCounterValue = this.game.add.text(frameWidth / 2, (frameHeight / 2) + 15, '');
    this.jackpotCounterValue.anchor.setTo(0.5);
    this.jackpotCounterValue.font = 'Arial Black';
    this.jackpotCounterValue.fontSize = 20;
    this.jackpotCounterValue.stroke = '#000';
    this.jackpotCounterValue.strokeThickness = 1;
    this.jackpotCounterValue.fill = '#c24';
    this.jackpotCounterValue.smoothed = false;
    this.jackpotCounterValue.text = '$' + this.game.angularContainer.jackpotCounter;
    this.jackpotHeader.add(jackpotCounterFrameHolder, true);
    this.jackpotHeader.add(jackpotCounterFrame, true);
    this.jackpotHeader.add(this.jackpotCounterValue, true);
    this.jackpotHeader.add(this.jackpotLable, true);
    addJacpotAnimations.apply(this);
};
/**
 * The function add the animations to jackpot header
 */
var addJacpotAnimations = function () {
    var _this = this;
    var colorBlend = { step: 0 };
    var colorTween = this.game.add.tween(colorBlend).to({ step: 100 }, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    colorTween.onUpdateCallback(function () {
        _this.jackpotLable.tint = Phaser.Color.interpolateColor(0xff6622, 0xaaff00, 100, colorBlend.step);
    });
    colorTween.start();
    colorTween.onComplete.add(function () {
        _this.jackpotLable.tint = 0xbebe00;
    });
    this.game.add.tween(this.jackpotLable)
        .to({ alpha: 0.9 }, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
};
/**
 * The function define for update the value of jackpot header.
 */
var updateJackpotAmount = function () {
    if ('$' + this.game.angularContainer.jackpotCounter !== this.jackpotCounterValue.text) {
        this.jackpotCounterValue.text = '$' + this.game.angularContainer.jackpotCounter;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-counter.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/jackpot-state-backlog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showpendingJackpotAnimations; });
/**
 * The function define for make the state same again as before move the
 * jackpot state. enable the all the asset and set the spin response
 */
var showpendingJackpotAnimations = function () {
    this.methods.disableButtonsOnSpin();
    this.game.scatterBackgroundScore.play();
    this.spinResponse = this.jackpotLastResponse;
    this.methods.tweekReelWithRandom.apply(this, [false, true]);
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-state-backlog.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/jackpot-symbol.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateReelsWithjackpotSymbol; });
/**
 * The function define for update the reels data with jackpot symbol
 * and update the jackpot array
 */
var updateReelsWithjackpotSymbol = function () {
    var _this = this;
    this.jackpotArray = [];
    var _loop_1 = function (reel) {
        var preIndex = Number.MIN_SAFE_INTEGER;
        var isjackpotSymbolPresent = false;
        this_1.spinResponse.randomNumbers.forEach(function (item, index) {
            index = index + 1;
            if ((index > ((reel.number - 1) * 3)) && (index <= (reel.number * 3)) && (item === 'Z')) {
                isjackpotSymbolPresent = true;
                if (index - preIndex > 2) {
                    preIndex = index;
                    _this.jackpotArray.push(preIndex);
                }
            }
        });
    };
    var this_1 = this;
    // Calculations for each reel.
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_1(reel);
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-symbol.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/panel-renderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addButtons; });
/**
 * The function define for draw panel.
 * add the images to pannel area(bottom area of main screen)
 */
var drawPanels = function () {
    var HeaderY = this.dimensions.reel.reelY - this.game.cache.getImage('header-panel').height;
    this.game.cockpitHeader = this.game.add.image(0, HeaderY, 'header-panel');
    var imageHeight = (this.dimensions.reel.reelY + (3 * this.dimensions.reel.tileWidth));
    this.game.cockpitPanel = this.game.add.image(0, imageHeight, 'footer-panel');
};
/**
 * The function define for add the button to the panel area(bottom area of main screen),
 * design all the panel area, set the font
 */
var addButtons = function () {
    this.game.counter = 0;
    this.game.spinButton = this.game.add.button(this.coordinates.statsBlock.spinButton.x, this.coordinates.statsBlock.spinButton.y, 'spinButton', this.spin, this, 1, 0, 2);
    this.game.spinButton.anchor.set(0.5);
    this.game.maxBetButton = this.game.add.button(this.coordinates.statsBlock.maxBetButton.x, this.coordinates.statsBlock.maxBetButton.y, 'maxBetButton', this.spin, this, 1, 0, 2);
    this.game.autoPlayButton = this.game.add.button(this.coordinates.statsBlock.autoPlayButton.x, this.coordinates.statsBlock.autoPlayButton.y, 'autoplayButton', this.spin, this, 1, 0, 2);
    this.game.betButtonFrame = this.game.add.image(this.coordinates.statsBlock.betButtonFrame.x, this.coordinates.statsBlock.betButtonFrame.y, 'betButton-frame');
    this.game.levelButtonFrame = this.game.add.image(this.coordinates.statsBlock.levelButtonFrame.x, this.coordinates.statsBlock.levelButtonFrame.y, 'levelButton-frame');
    this.game.coinButtonFrame = this.game.add.image(this.coordinates.statsBlock.coinButtonFrame.x, this.coordinates.statsBlock.coinButtonFrame.y, 'coinButton-frame');
    this.game.coinValueButtonFrame = this.game.add.image(this.coordinates.statsBlock.coinValueButtonFrame.x, this.coordinates.statsBlock.coinValueButtonFrame.y, 'coinValueButton-frame');
    this.game.spinButtonTransparentFrame = this.game.add.image(this.coordinates.statsBlock.spinButton.x, this.coordinates.statsBlock.spinButton.y, 'spinButtonTransparentFrame');
    this.game.spinButtonTransparentFrame.anchor.set(0.5);
    this.game.spinButtonRotationalFrame = this.game.add.image(this.coordinates.statsBlock.spinButton.x, this.coordinates.statsBlock.spinButton.y, 'spinButtonRotationalFrame');
    this.game.spinButtonRotationalFrame.anchor.set(0.5);
    this.game.spinButtonRotationalFrame.alpha = 0.2;
    this.game.levelTextButton = this.game.add.text(this.coordinates.statsBlock.levelText.x, this.coordinates.statsBlock.levelText.y, this.stats.intialLevel);
    this.game.levelTextButton.stroke = this.styles.statsBlock.label.textColor;
    this.game.levelTextButton.strokeThickness = 1;
    this.game.levelTextButton.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.levelTextButton.fill = this.styles.statsBlock.label.textColor;
    this.game.levelTextButton.anchor.set(0.5);
    this.game.totalCoinsButton = this.game.add.text(this.coordinates.statsBlock.totalCoinsText.x, this.coordinates.statsBlock.totalCoinsText.y, this.stats.totalCoins);
    this.game.totalCoinsButton.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.totalCoinsButton.fill = this.styles.statsBlock.label.textColor;
    this.game.totalCoinsButton.anchor.set(0.5);
    this.game.totalCoinsButton.stroke = this.styles.statsBlock.label.textColor;
    this.game.totalCoinsButton.strokeThickness = 1;
    this.game.coinValueText = this.game.add.text(this.coordinates.statsBlock.coinValueText.x, this.coordinates.statsBlock.coinValueText.y, this.stats.IntialCoinValue);
    this.game.coinValueText.stroke = this.styles.statsBlock.label.textColor;
    this.game.coinValueText.strokeThickness = 1;
    this.game.coinValueText.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.coinValueText.fill = this.styles.statsBlock.label.textColor;
    this.game.coinValueText.anchor.set(0.5);
    this.game.betTextButton = this.game.add.text(this.coordinates.statsBlock.betText.x, this.coordinates.statsBlock.betText.y, this.stats.bet);
    this.game.betTextButton.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.betTextButton.fill = this.styles.statsBlock.label.textColor;
    this.game.betTextButton.anchor.set(0.5);
    this.game.betTextButton.stroke = this.styles.statsBlock.label.textColor;
    this.game.betTextButton.strokeThickness = 1;
    this.game.levelIncreaseButton = this.game.add.image(this.coordinates.statsBlock.levelIncreaseButton.x, this.coordinates.statsBlock.levelIncreaseButton.y, 'rightArrow');
    this.game.levelIncreaseButton.scale.setTo(0.9);
    this.game.levelDecreaseButton = this.game.add.image(this.coordinates.statsBlock.levelDecreaseButton.x, this.coordinates.statsBlock.levelDecreaseButton.y, 'leftArrow');
    this.game.levelDecreaseButton.scale.setTo(0.9);
    this.game.levelDecreaseButton.alpha = 0.5;
    this.game.coinValueIncreaseButton = this.game.add.image(this.coordinates.statsBlock.coinValueIncreaseButton.x, this.coordinates.statsBlock.coinValueIncreaseButton.y, 'rightArrow');
    this.game.coinValueIncreaseButton.scale.setTo(0.9);
    this.game.coinValueDecreaseButton = this.game.add.image(this.coordinates.statsBlock.coinValueDecreaseButton.x, this.coordinates.statsBlock.coinValueDecreaseButton.y, 'leftArrow');
    this.game.coinValueDecreaseButton.scale.setTo(0.9);
    this.game.coinValueDecreaseButton.alpha = 0.5;
    this.game.imageAutoplay = this.game.add.text(this.coordinates.statsBlock.imageAutoplay.x, this.coordinates.statsBlock.imageAutoplay.y, 'AUTOPLAY');
    this.game.imageAutoplay.font = 'avqest';
    this.game.imageAutoplay.fill = this.styles.statsBlock.label.textColor;
    this.game.imageAutoplay.anchor.set(0.7);
    this.game.imageAutoplay.scale.setTo(0.7);
    this.game.imageMaxBet = this.game.add.text(this.coordinates.statsBlock.imageMaxBet.x, this.coordinates.statsBlock.imageMaxBet.y, 'MAX BET');
    this.game.imageMaxBet.font = 'avqest';
    this.game.imageMaxBet.fill = this.styles.statsBlock.label.textColor;
    this.game.imageMaxBet.anchor.set(0.5);
    this.game.imageMaxBet.scale.setTo(0.7);
    this.game.imageBet = this.game.add.text(this.coordinates.statsBlock.imageBet.x, this.coordinates.statsBlock.imageBet.y, 'BET');
    this.game.imageBet.font = 'avqest';
    this.game.imageBet.fill = this.styles.statsBlock.label.textColor;
    this.game.imageBet.anchor.set(0.5);
    this.game.imageBet.scale.setTo(0.7);
    this.game.imageLevel = this.game.add.text(this.coordinates.statsBlock.imageLevel.x, this.coordinates.statsBlock.imageLevel.y, 'LEVEL');
    this.game.imageLevel.font = 'avqest';
    this.game.imageLevel.fill = this.styles.statsBlock.label.textColor;
    this.game.imageLevel.anchor.set(0.5);
    this.game.imageLevel.scale.setTo(0.7);
    this.game.imageCoinValue = this.game.add.text(this.coordinates.statsBlock.imageCoinValue.x, this.coordinates.statsBlock.imageCoinValue.y, 'COIN VALUE');
    this.game.imageCoinValue.font = 'avqest';
    this.game.imageCoinValue.fill = this.styles.statsBlock.label.textColor;
    this.game.imageCoinValue.anchor.set(0.5);
    this.game.imageCoinValue.scale.setTo(0.6);
    this.game.imageCoins = this.game.add.text(this.coordinates.statsBlock.imageCoins.x, this.coordinates.statsBlock.imageCoins.y, 'COIN');
    this.game.imageCoins.font = 'avqest';
    this.game.imageCoins.fill = this.styles.statsBlock.label.textColor;
    this.game.imageCoins.anchor.set(0.5);
    this.game.imageCoins.scale.setTo(0.7);
    // The button deals with the paytable functionality.
    this.game.infoButton = this.game.add.sprite(this.coordinates.statsBlock.infoButton.x, this.coordinates.statsBlock.infoButton.y, 'info');
    this.game.infoButton.anchor.set(0.5);
    this.game.infoButton.scale.setTo(0.7);
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/panel-renderer.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/reel-renderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawReels; });
/**
 * The function define for design the reel, add the symbol to the reel
 * add all the information to the reel which is required
 */
var drawReels = function () {
    var d = this.dimensions.reel;
    this.stateAssets.reels = [];
    for (var reelCounter = 0; reelCounter < this.stateAssets.reelCount; reelCounter++) {
        var reel = this.game.add.group();
        reel.isSpinning = false;
        reel.spinSpeed = 0;
        reel.spinTimeStamp = 0;
        reel.number = reelCounter + 1;
        this.stateAssets.reels.push(reel);
        this.stateAssets.reels[reelCounter].y = d.reelY;
        this.stateAssets.reels[reelCounter].x = d.tilesLeft + d.tileWidth * reelCounter;
        var symbol1 = this.game.add.sprite(d.tileWidth / 2, 0, 'reel', reel.number);
        var symbol2 = this.game.add.sprite(d.tileWidth / 2, 0, 'reel', reel.number + 2);
        var symbol3 = this.game.add.sprite(d.tileWidth / 2, 0, 'reel', reel.number);
        symbol1.y = d.tileHeight / 2;
        symbol2.y = (1 * d.tileHeight) + d.tileHeight / 2;
        symbol3.y = (2 * d.tileHeight) + d.tileHeight / 2;
        symbol1.data.isLandingSymbol = true;
        symbol1.data.tileNumber = (3 * reelCounter) + 1;
        symbol2.data.isLandingSymbol = true;
        symbol2.data.tileNumber = (3 * reelCounter) + 2;
        symbol3.data.isLandingSymbol = true;
        symbol3.data.tileNumber = (3 * reelCounter) + 3;
        symbol1.anchor.set(0.5);
        symbol2.anchor.set(0.5);
        symbol3.anchor.set(0.5);
        this.stateAssets.reels[reelCounter].add(symbol1, true);
        this.stateAssets.reels[reelCounter].add(symbol2, true);
        this.stateAssets.reels[reelCounter].add(symbol3, true);
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/reel-renderer.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/scatter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateReelsWithScatterFlags; });
/**
 * The function define for check scatter symbol is in reels.
 * If scatter symbol is available then add to the scatter array
 */
var updateReelsWithScatterFlags = function () {
    var _this = this;
    // Variable for a single spin.
    var dropLag = 0;
    var tweenLag = 1;
    var scattersLanded = 0;
    this.scatterArray = [];
    var _loop_1 = function (reel) {
        var preIndex = Number.MIN_SAFE_INTEGER;
        var isScatterSymbolPresent = false;
        this_1.spinResponse.randomNumbers.forEach(function (item, index) {
            index = index + 1;
            if ((index > ((reel.number - 1) * 3)) && (index <= (reel.number * 3)) && (item === 'S')) {
                isScatterSymbolPresent = true;
                if (index - preIndex > 2) {
                    preIndex = index;
                    _this.scatterArray.push(preIndex);
                }
            }
        });
        // Calculating this as per the
        // previous landed scatter's count.
        var isScatterImpossible = false;
        if (reel.number === 4) {
            isScatterImpossible = scattersLanded <= 0;
        }
        else if (reel.number === 5) {
            isScatterImpossible = scattersLanded <= 1;
        }
        // now appending the scatter count to be used for future reels.
        if (isScatterSymbolPresent) {
            scattersLanded++;
        }
        reel.isScatterSoundNeeded = isScatterSymbolPresent && !isScatterImpossible && this_1.freeSpinsPending < 0;
        if (reel.number < 4) {
            // Initialy zero, for the first reel
            reel.dropLag = dropLag;
            reel.tweenLag = tweenLag;
            // Now is the time to decide and set the stop-lag
            // which is to be set for the next reel
            dropLag += (scattersLanded > 0) && !isScatterImpossible && this_1.freeSpinsPending < 0 ? (tweenLag) : 0.05;
            tweenLag += (scattersLanded > 0) && !isScatterImpossible && this_1.freeSpinsPending < 0 ? 0.3 : 0.1;
        }
        else if (reel.number === 4) {
            // for second last reel we will skip this step because
            // isScatterImpossible is being calculated according to
            // previous reels.
            // Instead we will do it for the last reel then and there.
            reel.dropLag = dropLag;
            reel.tweenLag = tweenLag;
        }
        else if (reel.number === 5) {
            // If there are no possibilities of scatter win
            // set the stop-lag to usual
            dropLag += (scattersLanded > 0) && !isScatterImpossible && this_1.freeSpinsPending < 0 ? (tweenLag) : 0.05;
            tweenLag += (scattersLanded > 0) && !isScatterImpossible && this_1.freeSpinsPending < 0 ? 0.3 : 0.1;
            reel.dropLag = dropLag;
            reel.tweenLag = tweenLag;
        }
    };
    var this_1 = this;
    // Calculations for each reel.
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_1(reel);
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/scatter.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/sounds.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toggleMute; });
/**
 * It add different type of audio's required in the game and play only the background image.
 */
var addMusic = function () {
    this.game.backgroundScore = this.game.add.audio('backgroundScore', this.game.angularContainer.volume * this.soundVolumeMultipliers.backgroundScore, true);
    this.game.spinSound = this.game.add.audio('spinSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.spinSound);
    this.game.winSound = this.game.add.audio('winSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.winSound);
    this.game.reelStopSound = this.game.add.audio('reelStopSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.reelStopSound);
    this.game.buttonClickSound = this.game.add.audio('buttonClickSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.buttonClickSound);
    this.game.scatterBackgroundScore = this.game.add.audio('ScatterBackgroundScore', this.game.angularContainer.volume * this.soundVolumeMultipliers.ScatterBackgroundScore, true);
    this.game.ScatterStopSound = this.game.add.audio('ScatterStopSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.ScatterStopSound);
    // play background Sound
    this.game.backgroundScore.play();
};
/**
 * The function toggel the music/audio when clicked on volume button
 */
var toggleMute = function () {
    if (this.game.angularContainer.muteAudio) {
        this.volume = 0;
        this.game.sound.volume = this.volume;
    }
    else {
        this.volume = 1;
        this.game.sound.volume = this.volume;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/sounds.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/spin-button-animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinButtonAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return spinButtonFrameAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeSpinButtonAnimation; });
var spinButtonAnimation = function () {
    var _this = this;
    this.game.spinButtonBallAnimation = this.game.add.sprite(this.coordinates.statsBlock.spinButton.x, this.coordinates.statsBlock.spinButton.y, 'spinButtonBall-particle', 8);
    this.game.emitterAnimation = this.game.add.emitter(this.coordinates.statsBlock.spinButton.x, this.coordinates.statsBlock.spinButton.y, 4);
    this.game.spinButtonBallAnimation.animations.add('pulse');
    this.game.spinButtonBallAnimation.play('pulse', 30, true);
    this.game.spinButtonBallAnimation.anchor.set(0.5);
    this.game.spinButtonBallAnimation.scale.setTo(1.2);
    this.game.spinButtonBallAnimation.alpha = 0;
    var spinButtonAnimationTween = this.game.add.tween(this.game.spinButtonBallAnimation).to({ alpha: 0.9 }, 100, Phaser.Easing.Sinusoidal.In, true);
    this.game.emitterAnimation.makeParticles('spinButton-particle', [0, 1, 2, 3]);
    this.game.emitterAnimation.setRotation(360, 360);
    this.game.emitterAnimation.setAlpha(0.1, 0.5);
    this.game.emitterAnimation.setScale(0.5, 0.5);
    this.game.emitterAnimation.gravity = -20;
    // false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    // The 5000 value is the lifespan of each particle before it's killed
    this.game.emitterAnimation.start(false, 200, 20);
    spinButtonAnimationTween.onComplete.add(function () {
        _this.game.add.tween(_this.game.spinButtonBallAnimation).to({ alpha: 0 }, 1000, Phaser.Easing.Sinusoidal.In, true);
        _this.methods.removeSpinButtonAnimation();
    });
};
var removeSpinButtonAnimation = function () {
    this.game.emitterAnimation.on = false;
};
var spinButtonFrameAnimation = function () {
    this.game.spinButtonRotationalFrame.angle -= 1;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/spin-button-animation.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/spin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spin; });
/**
 * The function is responsible for moving the reel along y-axis
 */
var spinAnimate = function () {
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        reel.y += reel.spinSpeed;
        if (reel.y === this.dimensions.spin.reelHeight) {
            reel.y = -this.dimensions.spin.reelTopOffset;
        }
    }
};
/**
 * The function handle
 * 1.the speed of the reels
 * 2.in case the reels have scatter symbol a different audio is played.
 * 3. if there is a win it initiaite the win animations and calculate the win
 * 4.Enable/disable the control by checking the auto spinning and scatter is running or not
 */
var varySpeed = function () {
    var _this = this;
    var _loop_1 = function (reel) {
        var maxSpeed = 50; // 0 + 2500/50
        if (reel.isSpinning) {
            reel.children.forEach(function (child) {
                var reelDownEffect = _this.game.add.tween(child).to({ angle: +_this.dimensions.spin.dropSpinAngle }, 50, Phaser.Easing.Cubic.In, true, 0, 2);
            });
            if (reel.spinTimeStamp < 100) {
                reel.spinTimeStamp += 5;
                reel.spinSpeed = -reel.spinTimeStamp / 50;
            }
            else if (reel.spinTimeStamp < 2500) {
                reel.spinTimeStamp += 25;
                reel.spinSpeed = reel.spinTimeStamp / 50;
            }
        }
        else {
            if (reel.spinSpeed > 0) {
                reel.spinTimeStamp = 0;
                reel.spinSpeed = 0;
                reel.children.forEach(function (child) {
                    child.angle = -_this.dimensions.spin.dropSpinAngle;
                    var reelDropEffect = _this.game.add.tween(child).to({ angle: _this.dimensions.spin.dropSpinAngle }, 500, Phaser.Easing.Cubic.In, true, 0, 0);
                    reelDropEffect.onComplete.add(function () {
                        _this.game.add.tween(child).to({ angle: 0 }, 300, Phaser.Easing.Cubic.In, true, 0, 0);
                    });
                });
                var reelDropTween = void 0;
                if (reel.isScatterSoundNeeded) {
                    reelDropTween = this_1.game.add.tween(reel).to({ y: this_1.dimensions.spin.reelYBounce }, Phaser.Timer.SECOND * reel.tweenLag, Phaser.Easing.Linear.None, true);
                }
                else {
                    reelDropTween = this_1.game.add.tween(reel).to({ y: this_1.dimensions.spin.reelYBounce }, Phaser.Timer.SECOND * reel.tweenLag, Phaser.Easing.Bounce.Out, true);
                }
                reelDropTween.onComplete.add(function () {
                    if (reel.isScatterSoundNeeded) {
                        _this.game.ScatterStopSound.play();
                    }
                    else {
                        _this.game.reelStopSound.play();
                    }
                    if (reel.number === _this.stateAssets.reelCount) {
                        _this.game.ScatterStopSound.stop();
                        // handling the spin response
                        if (_this.spinResponse.gameId) {
                            _this.methods.winCalculations(_this.spinResponse);
                            _this.methods.showWinAnimations(_this.spinResponse);
                        }
                        if (!_this.isAutoPlayRunning && !_this.isScatterRunning) {
                            _this.methods.enableButtonsOnSpin();
                        }
                        else {
                            _this.methods.disableButtonsOnSpin();
                        }
                    }
                });
            }
        }
    };
    var this_1 = this;
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_1(reel);
    }
};
/**
 * The function intiate the spinning of reels, movement of the reels
 */
var spin = function () {
    var boundSpinAnimate = spinAnimate.bind(this);
    boundSpinAnimate();
    var boundVarySpeed = varySpeed.bind(this);
    boundVarySpeed();
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/spin.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/update-statistics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levelDecrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return levelIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return coinValueIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return coinValueDecrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return winCalculations; });
/**
 * The function is called when the user decrease the level, thus changing the bet in euro and bet.
 */
var levelDecrease = function () {
    if ((this.stats.level > 1) && (this.stats.level <= this.gameData.maxBetLevel)) {
        if (this.stats.level === this.gameData.maxBetLevel) {
            this.game.levelIncreaseButton.inputEnabled = true;
            this.game.levelIncreaseButton.alpha = 1;
        }
        this.stats.level--;
        this.game.levelTextButton.text = this.stats.level.toString();
        this.game.betTextButton.text = this.stats.bet * this.stats.level;
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index];
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.level === 1) {
        this.game.levelDecreaseButton.inputEnabled = false;
        this.game.levelDecreaseButton.alpha = 0.5;
    }
};
/**
 * The function is called when the user increase the level, thus changing the bet in euro and bet.
 */
var levelIncrease = function () {
    if (this.stats.level < this.gameData.maxBetLevel) {
        if (this.stats.level === 1) {
            this.game.levelDecreaseButton.inputEnabled = true;
            this.game.levelDecreaseButton.alpha = 1;
        }
        this.stats.level++;
        this.game.levelTextButton.text = this.stats.level.toString();
        this.game.betTextButton.text = this.stats.bet * this.stats.level;
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index];
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.level === this.gameData.maxBetLevel) {
        this.game.levelIncreaseButton.inputEnabled = false;
        this.game.levelIncreaseButton.alpha = 0.5;
    }
};
/**
 * The function is called when the user increase the coin value, thus changing the bet in euro and coins.
 */
var coinValueIncrease = function () {
    if (this.stats.coinLevel < this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
        if (this.stats.coinLevel === this.stats.IntialCoinValue) {
            this.game.coinValueDecreaseButton.inputEnabled = true;
            this.game.coinValueDecreaseButton.alpha = 1;
        }
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index + 1];
        this.game.coinValueText.text = this.stats.coinValueArray[index + 1];
        this.stats.calculateTotalCoins = Math.floor(this.stats.calculateTotalCash / this.stats.coinLevel);
        this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.coinLevel === this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
        this.game.coinValueIncreaseButton.inputEnabled = false;
        this.game.coinValueIncreaseButton.alpha = 0.5;
    }
};
/**
 * The function is called when the user decrease the coin value, thus changing the bet in euro and coins.
 */
var coinValueDecrease = function () {
    if ((this.stats.coinLevel > this.stats.coinValueArray[0]) &&
        (this.stats.coinLevel <= this.stats.coinValueArray[this.stats.coinValueArrayLength - 1])) {
        if (this.stats.coinLevel === this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
            this.game.coinValueIncreaseButton.inputEnabled = true;
            this.game.coinValueIncreaseButton.alpha = 1;
        }
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index - 1];
        this.game.coinValueText.text = this.stats.coinValueArray[index - 1];
        this.stats.calculateTotalCoins = Math.floor(this.stats.calculateTotalCash / this.stats.coinLevel);
        this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.coinLevel === this.stats.IntialCoinValue) {
        this.game.coinValueDecreaseButton.inputEnabled = false;
        this.game.coinValueDecreaseButton.alpha = 0.5;
    }
};
/**
 * The function update the statistics block in case the user win prize
 * @param spinResponse The response of post spin data i.e. the data recieved from backend when the user spin the reel
 */
var winCalculations = function (spinResponse) {
    this.stats.calculateTotalCash = Math.round(this.spinResponse.cash * 100) / 100;
    this.game.angularContainer.gameData.cash = this.stats.calculateTotalCash;
    this.stats.calculateTotalCoins = Math.round(this.stats.calculateTotalCash / this.stats.coinLevel);
    this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
    this.game.angularContainer.gameData.win = Math.round((this.spinResponse.prize * this.stats.coinLevel) * 100) / 100;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/update-statistics.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/main-screen-state/win-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return drawWinToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showWinAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeWinAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return revertScatterWinAnimations; });
/* unused harmony export moveToJackpotState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return jackpotWinAnimation; });
/**
 * Draw win toast when the user win a prize
 *
 * @param topOffset Define the hieght from the top where the toast should be displayed
 *
 */
var drawToast = function (topOffset) {
    var bmd = this.game.add.bitmapData(this.game.world.width, 70, 'winToast');
    var gradientIncrease = bmd.ctx.createLinearGradient(0, 0, this.game.world.width / 2, 0);
    gradientIncrease.addColorStop(0, this.styles.toastMessages.colorGradientEdges);
    gradientIncrease.addColorStop(1, this.styles.toastMessages.colorGradientCenter);
    bmd.ctx.fillStyle = gradientIncrease;
    bmd.ctx.fillRect(0, 0, this.game.world.width / 2, 50);
    var gradientDecrease = bmd.ctx.createLinearGradient(this.game.world.width / 2, 0, this.game.world.width, 0);
    gradientDecrease.addColorStop(0, this.styles.toastMessages.colorGradientCenter);
    gradientDecrease.addColorStop(1, this.styles.toastMessages.colorGradientEdges);
    bmd.ctx.fillStyle = gradientDecrease;
    bmd.ctx.fillRect(this.game.world.width / 2, 0, this.game.world.width / 2, 50);
    return this.game.add.sprite(0, 3 * this.dimensions.reel.tileHeight, bmd);
};
/**
 * Draw the background of winning lines
 *
 * @param x X- cordinate of the winning line
 * @param y Y- cordinate of the winning line
 * @return the sprite
 *
 */
var drawLineWinBackdrop = function (x, y) {
    var bmd = this.game.add.bitmapData(150, 150, 'lineWinBackdrop');
    bmd.ctx.lineWidth = 2;
    bmd.ctx.strokeStyle = '#000';
    bmd.ctx.strokeRect(0, 0, 150, 150);
    var gradientIncrease = bmd.ctx.createRadialGradient(75, 75, 20, 75, 75, 75);
    gradientIncrease.addColorStop(0, this.styles.lineWinBackdrop.colorGradientCenter);
    gradientIncrease.addColorStop(1, this.styles.lineWinBackdrop.colorGradientEdges);
    bmd.ctx.fillStyle = gradientIncrease;
    bmd.ctx.fillRect(0, 0, 150, 150);
    var sprite = this.game.add.sprite(x, y, bmd);
    sprite.anchor.setTo(0.5);
    return sprite;
};
/**
 * The function intiate the drawing of winning lines
 */
var drawWinToast = function () {
    var boundDrawToast = drawToast.bind(this, 10);
    this.game.winToast = boundDrawToast();
    this.game.winToast.alpha = 0;
};
var tweenTint = function (obj, startColor, endColor, time) {
    if (obj) {
        var colorBlend_1 = { step: 0 };
        var colorTween = this.game.add.tween(colorBlend_1).to({ step: 100 }, time);
        colorTween.onUpdateCallback(function () {
            obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend_1.step);
        });
        obj.tint = startColor;
        colorTween.start();
        colorTween.onComplete.add(function () {
            obj.tint = startColor;
        });
    }
};
/**
 * Remove the ongoing win animations.
 */
var removeWinAnimations = function () {
    var _this = this;
    this.hasThreeOrMoreScatter = false;
    this.stateAssets.reels.forEach(function (reel, index) {
        for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.data.isLandingSymbol) {
                child.alpha = 1;
            }
        }
    }, this);
    this.game.winSound.stop();
    if (this.winAnimations.events) {
        this.winAnimations.events.forEach(function (event) {
            _this.game.time.events.remove(event);
        });
    }
    if (this.winAnimations.tweens) {
        this.winAnimations.tweens.forEach(function (tween) {
            tween.stop();
        });
    }
    this.game.winToast.alpha = 0;
    if (this.winAnimations.line) {
        for (var i = 0; i < this.winAnimations.line.length; i++) {
            this.winAnimations.line[i].winSprite.visible = false;
            this.winAnimations.line[i].lineNumberSprite.scale.setTo(1);
        }
    }
    if (this.winAnimations.winText) {
        this.winAnimations.winText.text = '';
    }
    if (this.winAnimations.lineSplash) {
        this.winAnimations.lineSplash[2].removeChild(this.winAnimations.lineWinText);
        for (var anyLine = 0; anyLine < this.winAnimations.lineSplash.length; anyLine++) {
            this.winAnimations.lineSplash[anyLine].destroy();
        }
    }
    if (this.winAnimations.scatterWinText) {
        this.winAnimations.scatterWinText.text = '';
    }
    if (this.winAnimations.bigWinText) {
        this.winAnimations.bigWinText.text = '';
    }
    if (this.game.winEmitter) {
        this.game.winEmitter.visible = false;
        this.game.winEmitter.alpha = 0;
        this.winAnimations.bigWin = false;
    }
};
/**
 * Handle win animations and there display depending on whether it is a normal win or big win
 * @param response Define the response of spin from backened
 */
var showWinnings = function (response) {
    var winningLinesCount = 0;
    if (response.prize >= (response.bet * this.bigWinThreashHoldMultiplier)) {
        this.winAnimations.bigWin = true;
    }
    for (var _i = 0, _a = response.betLineData; _i < _a.length; _i++) {
        var winningLine = _a[_i];
        for (var _b = 0, _c = this.stateAssets.betLineDetails; _b < _c.length; _b++) {
            var line = _c[_b];
            if (winningLine.betLineNumber === line.lineNumber) {
                this.winAnimations.line.push(line);
                showWinAnimationForALine.apply(this, [winningLine, line, winningLinesCount]);
                winningLinesCount++;
            }
        }
    }
    this.winAnimations.winText = this.game.add.text(this.game.world.centerX, 0.5 * this.dimensions.reel.reelY + 3 * this.dimensions.reel.tileHeight, '');
    if (response.prize > 0) {
        if (response.prize >= (response.bet * this.bigWinThreashHoldMultiplier)) {
            bigWinAnimationCounter.apply(this);
        }
        this.winAnimations.timerForBigWin = this.game.time.create(false);
        this.winAnimations.timerForBigWin.loop(10, function () {
        }, this);
        this.winAnimations.timerForBigWin.start();
        this.methods.hidePopUps();
        // pop-up the toast message
        var winToastTween = this.game.add.tween(this.game.winToast).to({ alpha: 1 }, 1500, 'Linear', true);
        this.winAnimations.tweens.push(winToastTween);
        this.winAnimations.winText.anchor.setTo(0.5);
        this.winAnimations.winText.font = 'Arial Black';
        this.winAnimations.winText.fontSize = 40;
        this.winAnimations.winText.stroke = '#008';
        this.winAnimations.winText.strokeThickness = 1;
        this.winAnimations.winText.fill = '#fff';
        this.winAnimations.winText.smoothed = false;
        if (response.prize >= (response.bet * this.bigWinThreashHoldMultiplier)) {
            this.winAnimations.winText.text = 'BIG WIN : ' + response.prize;
        }
        else {
            this.winAnimations.winText.text = 'WIN : ' + response.prize;
        }
        for (var _d = 0, _e = response.betLineData; _d < _e.length; _d++) {
            var winningLine = _e[_d];
            for (var _f = 0, _g = this.stateAssets.betLineDetails; _f < _g.length; _f++) {
                var line = _g[_f];
                if (winningLine.betLineNumber === line.lineNumber) {
                    line.lineNumberSprite.scale.setTo(1.5);
                }
            }
        }
        var animationTime = this.stateAssets.winAnimationTime;
        var removeWinToast = this.game.time.events.add(Phaser.Timer.SECOND * animationTime * response.betLineData.length, function () {
            this.winAnimations.timerForBigWin.stop();
            this.winAnimations.timerForBigWin.destroy();
            var removeWinToastTween = this.game.add.tween(this.game.winToast).to({ alpha: 0 }, 1500, 'Linear', true);
            var removeWinTextTween = this.game.add.tween(this.winAnimations.winText).to({ alpha: 0 }, 1500, 'Linear', true);
            this.winAnimations.tweens.push(removeWinToastTween);
            this.winAnimations.tweens.push(removeWinTextTween);
            for (var _i = 0, _a = response.betLineData; _i < _a.length; _i++) {
                var winningLine = _a[_i];
                for (var _b = 0, _c = this.stateAssets.betLineDetails; _b < _c.length; _b++) {
                    var line = _c[_b];
                    if (winningLine.betLineNumber === line.lineNumber) {
                        line.lineNumberSprite.scale.setTo(1);
                    }
                }
            }
            removeWinTextTween.onComplete.add(function () {
                this.game.angularContainer.isJackpotState = false;
                this.methods.triggerPendingSpins();
            }, this);
        }, this);
        this.winAnimations.events.push(removeWinToast);
    }
    else {
        this.game.angularContainer.isJackpotState = false;
        this.methods.triggerPendingSpins();
    }
};
/**
 * Show animations related to jackpot
 * @param response The response of spin
 */
var jackpotWinAnimation = function (response) {
    scatterWinAnimation.apply(this, [response]);
    showWinnings.apply(this, [response]);
};
/**
 * Display the big win animation counter
 */
var bigWinAnimationCounter = function () {
    this.winAnimations.bigWinText.text = 'BIG WIN';
    this.winAnimations.bigWinText.anchor.setTo(0.5);
    this.winAnimations.bigWinText.scale.setTo(0.2);
    this.winAnimations.bigWinText.font = 'Arial Black';
    this.winAnimations.bigWinText.fontSize = 200;
    this.winAnimations.bigWinText.stroke = '#008';
    this.winAnimations.bigWinText.strokeThickness = 1;
    this.winAnimations.bigWinText.fill = '#adf';
    this.winAnimations.bigWinText.smoothed = false;
    var bigWinToastAlphaTween = this.game.add.tween(this.winAnimations.bigWinText)
        .from({ alpha: 0 }, 1500, 'Linear', 1500, -1, true);
    var bigWinToastScaleTween = this.game.add.tween(this.winAnimations.bigWinText.scale)
        .to({ x: 1, y: 1 }, 3000, 'Linear', true);
    this.winAnimations.tweens.push(bigWinToastAlphaTween);
    this.winAnimations.tweens.push(bigWinToastScaleTween);
};
/**
 * Display the winning animations when the scatter feature is triggered
 */
var scatterWinAnimationCounter = function () {
    this.winAnimations.scatterWinText.text = 'Won ' + this.freeSpinsPending + ' Free Spins';
    this.winAnimations.scatterWinText.anchor.setTo(0.5);
    this.winAnimations.scatterWinText.scale.setTo(0.2);
    this.winAnimations.scatterWinText.font = 'Arial Black';
    this.winAnimations.scatterWinText.fontSize = 240;
    this.winAnimations.scatterWinText.stroke = '#008';
    this.winAnimations.scatterWinText.strokeThickness = 1;
    this.winAnimations.scatterWinText.fill = '#fff';
    this.winAnimations.scatterWinText.smoothed = false;
    var scatterWinToastAlphaTween = this.game.add.tween(this.winAnimations.scatterWinText)
        .from({ alpha: 0 }, 2000, 'Linear', 1500, -1, true);
    var scatterWinToastScaleTween = this.game.add.tween(this.winAnimations.scatterWinText.scale)
        .to({ x: 1, y: 1 }, 4000, 'Linear', true);
    this.winAnimations.tweens.push(scatterWinToastAlphaTween);
    this.winAnimations.tweens.push(scatterWinToastScaleTween);
    scatterWinToastScaleTween.onComplete.add(function () {
        this.game.smokeEmitter.visible = false;
        this.methods.triggerPendingSpins();
    }, this);
};
/**
 * Change the background image when the user hit the scatter feature
 */
var scatterWinAnimationBackground = function () {
    this.game.add.tween(this.game.background).to({ alpha: 0 }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
    this.game.add.tween(this.game.scatterBackground).to({ alpha: 1 }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
};
/**
 * Handle the sounds played during a scatter is hit
 */
var scatterSoundBackground = function () {
    this.game.backgroundScore.fadeOut(4500);
    this.game.scatterBackgroundScore.play();
    this.game.scatterBackgroundScore.loop = true;
    this.game.scatterBackgroundScore.volume = 0;
    this.game.scatterBackgroundScore.fadeTo(4500, this.volume * this.soundVolumeMultipliers.ScatterBackgroundScore);
};
/**
 * Remove the scatter animations when free spins are finished
 */
var revertScatterWinAnimations = function () {
    this.game.add.tween(this.game.background)
        .to({ alpha: 1 }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
    this.game.add.tween(this.game.scatterBackground)
        .to({ alpha: 0 }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
    this.winAnimations.freeSpinsRemainingText.text = '';
    this.game.backgroundScore.fadeIn(4500);
    this.game.backgroundScore.play();
    this.game.backgroundScore.loop = true;
    this.game.scatterBackgroundScore.fadeOut(2500);
    this.game.time.events.add(Phaser.Timer.SECOND * 4.5, function () {
        this.game.scatterBackgroundScore.stop();
    }, this);
};
/**
 * The function display the' free spins remaining' animations in case scatter is triggered
 */
var scatterStatusAnimation = function () {
    this.winAnimations.freeSpinsRemainingText = this.game.add.text(0, 20, '');
    this.winAnimations.freeSpinsRemainingText.text = this.freeSpinsPending + ' Free Spins Remaining';
    this.winAnimations.freeSpinsRemainingText.font = 'Arial Black';
    this.winAnimations.freeSpinsRemainingText.fontSize = 20;
    this.winAnimations.freeSpinsRemainingText.stroke = '#00a';
    this.winAnimations.freeSpinsRemainingText.strokeThickness = 1;
    this.winAnimations.freeSpinsRemainingText.fill = '#fff';
    var runningTextTween = this.game.add.tween(this.winAnimations.freeSpinsRemainingText)
        .to({ x: this.game.world.width - 450 }, 12000, 'Linear', true, 0, -1, true);
};
/**
 * The function show the animations related to scatter feature
 * @param response The response of spin from backened
 */
var scatterWinAnimation = function (response) {
    scatterSmoke.apply(this);
    scatterWinAnimationCounter.apply(this);
    scatterWinAnimationBackground.apply(this);
    scatterSoundBackground.apply(this);
    scatterStatusAnimation.apply(this);
};
/**
 * The function display the smoke when scatter feature is triggered
 */
var scatterSmoke = function () {
    var _this = this;
    this.scatterArray.forEach(function (index) {
        _this.stateAssets.tileCoordinates.forEach(function (tile) {
            if (tile.tileNumber === index) {
                _this.game.smokeEmitter = _this.game.add.emitter(tile.coordinate.x, tile.coordinate.y, _this.dimensions.reel.tileHeight);
                _this.game.smokeEmitter.makeParticles('smoke', [0], 200, true, true);
                _this.game.smokeEmitter.start(true, 1000, null, 10);
                _this.game.smokeEmitter.alpha = 0.2;
                _this.game.smokeEmitter.visible = true;
            }
        }, _this);
    }, this);
};
/**
 * The function is called when the user hit the big win, scatter or jackpot fetaure
 * @param response The response of spin from backened
 */
var showWinAnimations = function (response) {
    this.winAnimations.scatterWinText = this.game.add.text(this.game.world.centerX, 255, '');
    this.winAnimations.bigWinText = this.game.add.text(this.game.world.centerX, 255, '');
    this.winAnimations.line = [];
    this.winAnimations.tweens = [];
    this.winAnimations.events = [];
    if (response.isScatterWin && this.freeSpinsPending === -1) {
        // save the current response for later
        this.lastResponseBeforeFreeSpins = response;
        this.isScatterRunning = true;
        this.freeSpinsPending = response.numberOfFreeSpins;
        // this.game.freespin=response.numberOfFreeSpins;
        scatterWinAnimation.apply(this, [response]);
    }
    else {
        if (this.isScatterRunning) {
            this.winAnimations.freeSpinsRemainingText.text = this.freeSpinsPending + ' Free Spins Remaining';
            // this.winAnimations.jackpotWinText.text='Jackpot Win';
        }
        if (response.isJackpotWin) {
            this.game.state.paused = true;
            this.game.angularContainer.isJackpotState = true;
            this.jackpotLastResponse = response;
            showBeforeJackpotAnimation.apply(this);
        }
        else {
            showWinnings.apply(this, [response]);
        }
    }
};
/**
 * The function is used to emit particles on the line on which the user have won the big win feature.
 *
 * @param line Define the line on which big win has occured
 *
 */
var particleEmitterAnimation = function (line) {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.winEmitter = this.game.add.emitter(line.coordinates[2].x, line.coordinates[2].y, 250);
    this.game.winEmitter.makeParticles('diamond', [0], 200, true, true);
    this.game.winEmitter.gravity = 200;
    this.game.winEmitter.alpha = 0.8;
    this.game.winEmitter.visible = true;
    this.game.winEmitter.angularDrag = 30;
    this.game.winEmitter.bounce.setTo(0.5, 0.5);
    this.game.winEmitter.start(true, 6500, null, 15);
};
/**
 * The function shows animations on the line on which the user has won some amount
 *
 * @param winningLine The line which yield the win. It define the corinates of the winning line
 * @param line The line which yield the win. it define the win amount for the line
 * @param winningLinesCount The number of lines on which the user has wo
 *
 */
var showWinAnimationForALine = function (winningLine, line, winningLinesCount) {
    var eventTime = 900;
    var animationTime = this.stateAssets.winAnimationTime;
    this.winAnimations.lineWinText = this.game.add.text(0, 0, '');
    var timedEventForWinningLine = this.game.time.events.add(Phaser.Timer.SECOND *
        animationTime * winningLinesCount, function () {
        var _this = this;
        this.game.winSound.play();
        line.winSprite.visible = true;
        line.winSprite.alpha = 0;
        this.game.add.tween(line.winSprite).to({ alpha: 0.8 }, eventTime, Phaser.Easing.Sinusoidal.InOut, true);
        this.winAnimations.lineWinText.text = winningLine.winAmount;
        this.winAnimations.lineWinText.anchor.setTo(0.5);
        this.winAnimations.lineWinText.font = 'Arial Black';
        this.winAnimations.lineWinText.fontSize = 40;
        this.winAnimations.lineWinText.stroke = '#008';
        this.winAnimations.lineWinText.strokeThickness = 3;
        this.winAnimations.lineWinText.fill = '#fff';
        this.winAnimations.lineSplash = [];
        for (var anyLine = 0; anyLine < winningLine.winPattern.length; anyLine++) {
            this.winAnimations.lineSplash[anyLine] = drawLineWinBackdrop.apply(this, [line.coordinates[anyLine].x, line.coordinates[anyLine].y]);
            this.winAnimations.lineSplash[anyLine].anchor.setTo(0.5);
        }
        // BigWin Animation on line
        if (this.winAnimations.bigWin) {
            particleEmitterAnimation.apply(this, [line]);
        }
        this.winAnimations.lineSplash[2].addChild(this.winAnimations.lineWinText);
        // shake the winning symbols
        this.stateAssets.reels.forEach(function (reel, index) {
            var _loop_1 = function (child) {
                if (child.data.isLandingSymbol) {
                    if (winningLine.winPattern.indexOf(child.data.tileNumber) > -1) {
                        child.alpha = 0.5;
                        var symbolAlphaTween_1 = _this.game.add.tween(child).to({ alpha: 1 }, eventTime / 3, 'Linear', true, 0, -1, true);
                        _this.winAnimations.tweens.push(symbolAlphaTween_1);
                        setTimeout(function () {
                            symbolAlphaTween_1.stop();
                        }, eventTime, _this);
                    }
                }
            };
            for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _loop_1(child);
            }
        });
    }, this);
    this.winAnimations.events.push(timedEventForWinningLine);
    var removeTimedEvent = this.game.time.events.add(Phaser.Timer.SECOND * animationTime * (winningLinesCount + eventTime / 1000), function () {
        this.game.winSound.stop();
        this.winAnimations.lineSplash[2].removeChild(this.winAnimations.lineWinText);
        for (var anyLine = 0; anyLine < this.winAnimations.lineSplash.length; anyLine++) {
            this.winAnimations.lineSplash[anyLine].destroy();
        }
        line.winSprite.visible = false;
        this.winAnimations.visible = line.winSprite.visible;
        this.stateAssets.isWinAnimationOver = true;
        this.stateAssets.reels.forEach(function (reel, index) {
            for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.data.isLandingSymbol) {
                    child.alpha = 1;
                }
            }
        });
    }, this);
    this.winAnimations.events.push(removeTimedEvent);
};
/**
 * Th function display the animations that are required before a jackpot feature is triggred
 */
var showBeforeJackpotAnimation = function () {
    var _this = this;
    this.winAnimations.jackpotWinText = this.game.add.text(this.game.world.centerX, 255, '');
    this.winAnimations.jackpotWinText.text = 'Jackpot Feature';
    this.winAnimations.jackpotWinText.anchor.setTo(0.5);
    this.winAnimations.jackpotWinText.scale.setTo(0.2);
    this.winAnimations.jackpotWinText.font = 'Arial Black';
    this.winAnimations.jackpotWinText.fontSize = 240;
    this.winAnimations.jackpotWinText.stroke = '#008';
    this.winAnimations.jackpotWinText.strokeThickness = 1;
    this.winAnimations.jackpotWinText.fill = '#fff';
    this.winAnimations.jackpotWinText.smoothed = false;
    var jackpotWinToastAlphaTween = this.game.add.tween(this.winAnimations.jackpotWinText)
        .from({ alpha: 0 }, 2000, 'Linear', 1500, -1, true);
    var jackpotWinToastScaleTween = this.game.add.tween(this.winAnimations.jackpotWinText.scale)
        .to({ x: 1, y: 1 }, 4000, 'Linear', true);
    this.winAnimations.tweens.push(jackpotWinToastAlphaTween);
    this.winAnimations.tweens.push(jackpotWinToastScaleTween);
    this.jackpotArray.forEach(function (index) {
        _this.stateAssets.tileCoordinates.forEach(function (tile) {
            if (tile.tileNumber === index) {
                _this.game.JackpotEmitter = _this.game.add.emitter(tile.coordinate.x, tile.coordinate.y, _this.dimensions.reel.tileHeight);
                _this.game.JackpotEmitter.makeParticles('flareblue16', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 200, true, true);
                _this.game.JackpotEmitter.start(true, 4000, null, 10);
                _this.game.JackpotEmitter.alpha = 0.8;
                _this.game.JackpotEmitter.visible = true;
            }
        }, _this);
    }, this);
    jackpotWinToastScaleTween.onComplete.add(function () {
        moveToJackpotState.apply(this);
    }, this);
};
/**
 * The function intiate the jackpot state by changing the background image, stopping the music.
 */
var moveToJackpotState = function () {
    this.game.scatterBackgroundScore.stop();
    this.game.black = this.game.add.image(0, 0, 'black');
    this.game.black.alpha = 0;
    var blackOut = this.game.add.tween(this.game.black).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
    this.game.time.events.add(Phaser.Timer.SECOND * 1, function () {
        this.game.state.start('Jackpot');
    }, this);
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/win-animations.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/main/states/trailer-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__);

var TrailerState = (function () {
    /**
     * Represents the loading-state of the slot game. The game-screen on which trailer of the game is play.
     *  @param _httpservice An object of GamePageService type
     */
    function TrailerState(_httpService) {
        this.name = 'Trailer';
        this.isInitial = false;
        this.stateAssets = {
            trailerImageHeight: 0,
            trailerImageWidth: 0,
            skipButton: {}
        };
        this.httpService = _httpService;
        this.scaleY = 1;
        this.offset = 4.7; // value was hardcoded according to images height width  and position
        this.nameShow = false;
        this.snow = {};
        this.snow.max = 0;
        this.snow.update_interval = 2;
        this.snow.i = 0;
    }
    /*
     This function is called first.
     It should contain code to handle the loading of assets needed by your game
     */
    TrailerState.prototype.preload = function () {
        this.game.trailerSound = this.game.add.audio('trailerSound');
        this.game.hitSound = this.game.add.audio('hitSound');
    };
    ;
    /**
     * the function define for create the snow animation for the trailer state.
     */
    TrailerState.prototype.createSmoke = function () {
        this.game.trailerSmokeEmitter = this.game.add.emitter(this.game.world.width, this.game.world.height, this.game.world.height);
        this.game.trailerSmokeEmitter.makeParticles('smoke');
        this.game.trailerSmokeEmitter.setXSpeed(0, 0);
        this.game.trailerSmokeEmitter.setYSpeed(0, 0);
        this.game.trailerSmokeEmitter.setRotation(0, 0);
        this.game.trailerSmokeEmitter.setAlpha(0.1, 0.2, 5000);
        this.game.trailerSmokeEmitter.setScale(0.4, 2, 0.4, 2, 3000, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Quintic.Out);
        this.game.trailerSmokeEmitter.gravity = -20;
        this.game.trailerSmokeEmitter.start(false, 5000, 5);
        this.game.trailerSmokeEmitter.emitX = 30;
        this.game.trailerSmokeEmitter.emitY = this.game.world.height + 100;
        this.game.add.tween(this.game.trailerSmokeEmitter).to({
            emitX: this.game.world.width -
                this.game.trailerSmokeEmitter.emitX
        }, 1000, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
        this.game.add.tween(this.game.trailerSmokeEmitter).to({ emitY: 550 }, 5000, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
    };
    /**
     * the function define for add the snow animation to the trailer state.
     */
    TrailerState.prototype.addSnow = function () {
        this.game.back_emitter = this.game.add.emitter(this.game.world.centerX, -32, 600);
        this.game.back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        this.game.back_emitter.maxParticleScale = 0.6;
        this.game.back_emitter.minParticleScale = 0.2;
        this.game.back_emitter.setYSpeed(20, 100);
        this.game.back_emitter.gravity = 0;
        this.game.back_emitter.width = this.game.world.width * 1.5;
        this.game.back_emitter.minRotation = 0;
        this.game.back_emitter.maxRotation = 40;
        this.game.mid_emitter = this.game.add.emitter(this.game.world.centerX, -32, 250);
        this.game.mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        this.game.mid_emitter.maxParticleScale = 1.2;
        this.game.mid_emitter.minParticleScale = 0.8;
        this.game.mid_emitter.setYSpeed(50, 150);
        this.game.mid_emitter.gravity = 0;
        this.game.mid_emitter.width = this.game.world.width * 1.5;
        this.game.mid_emitter.minRotation = 0;
        this.game.mid_emitter.maxRotation = 40;
        this.game.front_emitter = this.game.add.emitter(this.game.world.centerX, -32, 50);
        this.game.front_emitter.makeParticles('snowflakes_large', [0, 1, 2, 3, 4, 5]);
        this.game.front_emitter.maxParticleScale = 1;
        this.game.front_emitter.minParticleScale = 0.5;
        this.game.front_emitter.setYSpeed(100, 200);
        this.game.front_emitter.gravity = 0;
        this.game.front_emitter.width = this.game.world.width * 1.5;
        this.game.front_emitter.minRotation = 0;
        this.game.front_emitter.maxRotation = 40;
        this.game.back_emitter.start(false, 14000, 20);
        this.game.mid_emitter.start(false, 12000, 40);
        this.game.front_emitter.start(false, 6000, 1000);
    };
    /**
     * the function define for change the direction of snow emission
     */
    TrailerState.prototype.changeWindDirection = function () {
        var multi = Math.floor((this.snow.max + 200) / 4);
        var frag = (Math.floor(Math.random() * 100) - multi);
        this.snow.max = this.snow.max + frag;
        if (this.snow.max > 200) {
            this.snow.max = 150;
        }
        if (this.snow.max < -200) {
            this.snow.max = -150;
        }
        this.setXSpeed(this.game.back_emitter, this.snow.max);
        this.setXSpeed(this.game.mid_emitter, this.snow.max);
        this.setXSpeed(this.game.front_emitter, this.snow.max);
    };
    /**
     * the function define for set the x direction speed of emitter
     */
    TrailerState.prototype.setXSpeed = function (emitter, max) {
        emitter.setXSpeed(max - 20, max);
        emitter.forEachAlive(this.setParticleXSpeed, this, max);
    };
    /**
     * the function define for set the velocity of each snow partical
     */
    TrailerState.prototype.setParticleXSpeed = function (particle, max) {
        particle.body.velocity.x = max - Math.floor(Math.random() * 30);
    };
    /**
     * The create function is called automatically once the preload has finished.
     * the function add the images to the trailer state.
     * the function add the animation to the state
     */
    TrailerState.prototype.create = function () {
        var _this = this;
        var bottom = 100;
        var right = 200;
        this.game.trailerSound.play();
        this.game.clouds = this.game.add.image(0, -100, 'clouds');
        this.game.trailerBack = this.game.add.image(this.game.world.centerX, this.game.world.height, 'trailerBack');
        this.game.trailerBack.anchor.setTo(0.5);
        this.game.trailerBackShow = this.game.add.tween(this.game.trailerBack).to({ y: this.offset * 100 }, this.offset * __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Timer"].SECOND, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Quadratic.InOut, true);
        this.game.trailerBackShow.onComplete.add(function () {
            _this.game.add.tween(_this.game.trailerSmokeEmitter).to({ alpha: 0 }, 500, 'Linear', true);
        }, this);
        this.createSmoke();
        this.game.trailerTileSprite = this.game.add.image(this.game.world.centerX, this.game.world.centerY - bottom + 50, 'tBack');
        this.game.trailerTileSprite.anchor.set(0.5);
        this.game.leftTrailerImg = this.game.add.image(this.game.world.width / 2, (this.game.world.height / 2) - (3 * bottom), 'warrior-left');
        this.game.rightTrailerImg = this.game.add.image(this.game.world.width / 2, (this.game.world.height / 2) - (3 * bottom), 'warrior-right');
        this.game.add.tween(this.game.leftTrailerImg)
            .to({ x: 0 }, 3.5 * __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Timer"].SECOND, 'Linear', true);
        this.game.add.tween(this.game.rightTrailerImg)
            .to({ x: this.game.world.width - right }, 3.5 * __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Timer"].SECOND, 'Linear', true);
        this.stateAssets.skipButton = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 300, 'Skip Intro', { fill: '#fff' });
        this.stateAssets.skipButton.anchor.set(0.5);
        this.stateAssets.skipButton.font = 'avqest';
        this.stateAssets.skipButton.fontSize = 40;
        this.stateAssets.skipButton.fontWeight = 'bold';
        //  Stroke color and thickness
        this.stateAssets.skipButton.stroke = '#000000';
        this.stateAssets.skipButton.strokeThickness = 3;
        this.stateAssets.skipButton.fill = '#fff';
        // Events on text click
        this.stateAssets.skipButton.inputEnabled = true;
        this.stateAssets.skipButton.events.onInputOver.add(this.over, this);
        this.stateAssets.skipButton.events.onInputOut.add(this.out, this);
        this.stateAssets.skipButton.events.onInputDown.add(this.down, this);
        this.addSnow();
    };
    ;
    /**
     * Represents a event that is fired when the Pointer moves over the Button.
     * @constructor
     * @param {object} sprite - The title of the book.
     */
    TrailerState.prototype.over = function (sprite) {
        this.stateAssets.skipButton.fill = '#90D8C9';
    };
    ;
    /**
     * Represents a event that is fired when the Pointer is pressed down on the Button
     * @constructor
     * @param {object} sprite - The author of the book.
     */
    TrailerState.prototype.down = function (sprite) {
        this.blackOut.apply(this);
    };
    ;
    /**
     * Represents a event that is fired when the Pointer that was previously over the Button moves out of it.
     * @constructor
     * @param {object} sprite - The author of the book.
     */
    TrailerState.prototype.out = function (sprite) {
        this.stateAssets.skipButton.fill = '#fff';
    };
    ;
    TrailerState.prototype.checkOverlap = function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Rectangle"].intersects(boundsA, boundsB);
    };
    /**
     * The update (and render) functions are called every in frame.
     * add the animation for trailer state.
     */
    TrailerState.prototype.update = function () {
        var _this = this;
        this.snow.i++;
        if (this.snow.i === this.snow.update_interval) {
            this.changeWindDirection();
            this.snow.update_interval = Math.floor(Math.random() * 20) * 60; // 0 - 20sec @ 60fps
            this.snow.i = 0;
        }
        if (this.scaleY >= 0.050) {
            this.scaleY -= 1 / 200;
        }
        else if (!this.nameShow) {
            this.nameShow = true;
            var rotateTitle = void 0;
            for (var i = 0; i < 14; i++) {
                // Temporary Code
                var yDist = this.game.world.centerY - 120;
                if (i < 2) {
                    yDist = this.game.world.centerY - 110;
                }
                if (i < 6) {
                    yDist = this.game.world.centerY - 115;
                }
                if (i === 13) {
                    yDist = this.game.world.centerY - 125;
                }
                var t = 68;
                if (i === 9) {
                    t = 70;
                }
                var item = this.game.add.sprite(150 + t * i, -100, 'gameTitle', i);
                item.anchor.setTo(0.5, 0.5);
                // Add a simple bounce tween to each character's position.
                var yDistTween = this.game.add.tween(item).to({ y: yDist }, 2400, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Bounce.Out, true, 1000 + 400 * i, 0);
                yDistTween.onComplete.add(function () {
                    _this.game.hitSound.play();
                });
                // Add another rotation tween to the same character.
                rotateTitle = this.game.add.tween(item).to({ angle: 360 }, 2400, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Cubic.In, true, 1000 + 400 * i, 0);
            }
            rotateTitle.onComplete.add(function () {
                setTimeout(function () {
                    _this.blackOut.apply(_this);
                }, 500, _this);
            });
        }
        this.game.trailerTileSprite.scale.setTo(1, this.scaleY);
    };
    ;
    /**
     * the function define for add image between the trailer state and main-screen state.
     * it shows a white image for few second
     */
    TrailerState.prototype.blackOut = function () {
        var _this = this;
        this.game.black = this.game.add.image(0, 0, 'black');
        this.game.black.alpha = 0;
        var blackOut = this.game.add.tween(this.game.black).to({ alpha: 1 }, 500, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Linear.None, true);
        blackOut.onComplete.add(function () {
            _this.moveToNextStage.apply(_this);
        });
    };
    /**
     * the function define for change the state to MainScreen state.
     */
    TrailerState.prototype.moveToNextStage = function () {
        this.game.trailerSound.stop();
        this.game.time.events.add(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Timer"].SECOND * 0.2, function () {
            this.game.state.start('MainScreen');
        }, this);
    };
    return TrailerState;
}());
/* harmony default export */ __webpack_exports__["a"] = (TrailerState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/fonts/avqest.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avqest.b1e88b1a3056e485a430.woff";

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/fonts/avqest.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avqest.4c71df7df1c698593bef.woff2";

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/images/chessBackground.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chessBackground.202e268a8b86de2a73f1.png";

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/images/container-border.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "container-border.8bd69a8e33c17c6a1f7c.png";

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/images/infoPaytable.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAAoCAIAAADMntm8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOGSURBVHhe7ZjbdcMgDEA9VwbKPJ7Gy3QYFxs/ZNAT5MQ5R/fop03ASLrg0mEOAg/CpMCHMCnwIUwKfAiTAh/CpMCHMCnw4XaTpnEex/lv+8nA+72EhnH9JvWI9zAPwzxaV/A3v9aB0/azTHOmD8VYgYtJ42sZScVbX9SDfTXWsbn9w0vVmOm9rRB9yDZVa2gX3pRpT8HRsbYNs6+ZD2VC1Zk0lRMVYSnU/DfuA3WnS+bo/WvcfsNzmJSiXt5nTGrLdIEvOL2XYNb8N0nuNUmc3bJi2EXldikaL8pUFrTK/DMmNWS6IRWcqwAcazU48TGTzhyu+0Z5VJzbNIciVfTEZh5XPiLH1fXcY+RNAZJCHrHXQVPHhkxPsIIX24NZw2lwn0mdFUjoTEqA3ytnrw8Dw2YtznysTEX/qL8q8jKQD3mTmIEVXZkSBYebilnDjSZZKpBQm3TdKGKl8NPClC0rk1IjDskkJb2ZEgXn//g7uNUkE3eZdG6p13JLPwbaOk7I5KBRwsmk3kyJgsNpmWL/pEnwvBVMKprU07NKJh+NEi4m9WeKFRxuWj7BZpNgN1Mgq825qC9YapNgR6XZ4SpzHerfGICPvka7RomGrlc4ZAoKXoeYoJdJZDibdO2lUHesQ/AgaWkbJlNz+zf6TXLJlDVpCVaR3zAJD8uBBF+CZ87qxV0w2ayh2ySfTMWCs8v7WZPEeeHwa25ws7a9lZTXGS2dJnllCuaByzgVWYOaxsskpAK5PneYpGk/d7+DMzcdS48yyS1TwqQElIm64txoUl6Yi0nm+koV1F9JUB5kkmOmdME1Z1uzSQs9va7wNAkpH+hWGfZj6TkmeWYaJtXA01gT1IlN8RyTPDOlCw6f4v52W3imSXAD1XFMdfmaMfmHmOScKVHwi6z0cMGkdXLy9cr3ev9UWWo3k4ptSq6evjyLPMQk50xBwalgqlQsBg2NSUx81CS4/+RR8E8Ky7EETTIpiNNkkn+mUjv5TJ9rkvXtU2eieXD9bzGNGcUo5jDQUL6kpBvAXZlC24poqn8dXzCpTjuFpsfIXYYBJqC7wcH5jzC9kgrQBnw+063gloO5ICdCrSTPL5uEdmFXvMWkXvKzJTlyM3o8+D6/k+k0LYGzm0R9njX9hknBb7GaJJ+sOsKkwIcwKfAhTAp8CJMCH8KkwIcwKfAhTAp8CJMCH8KkwIN5/gcIV1WVUMzhrAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/images/spinButton-logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "spinButton-logo.db6b8a7b80d0034981d7.png";

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/images/symbols/reel.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reel.1820f55787fb39338853.png";

/***/ }),

/***/ "../../../../../src/app/games/chess/resources/images/white-marble.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "white-marble.17cdb7b3cb8d81dcea7a.png";

/***/ }),

/***/ "../../../../../src/app/games/space-storm/game-page/game-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#phaser-container {\n  width: 1152px;\n  margin: 0 auto;\n\n}\n\n#game-page-container {\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/space-storm/resources/images/background-repeat.png")) + ");\n  width: 100%;\n  min-height: 100% !important;\n  display: block;\n  overflow: visible;\n  background-repeat: repeat;\n}\n\n#overlay {\n  position: absolute;\n  top: 0px;\n  /*background-color: tranparent;*/\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/space-storm/resources/images/paytable-background.jpg")) + ");\n  opacity: 0.9;\n  height: 475px;\n  width: 100%;\n  border: 5px solid #48f;\n  border-radius: 20px;\n}\n\n#OuterDiv {\n  top: 20px;\n  position: relative;\n  width: 1152px;\n  margin: 0 auto;\n  height:800px;\n}\n\n.w3-center {\n  text-align: center !important\n}\n\n.w3-content {\n  height: 450px !important;\n  width: 100% !important;\n}\n\n.paytable-arrows-left {\n  position: absolute;\n  top: 50%;\n  left: 1%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(-0%, -50%)\n}\n\n.paytable-arrows-right {\n  position: absolute;\n  top: 50%;\n  right: 1%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%);\n}\n\n.paytable-arrows {\n  border: 1px solid #04d;\n  background-color: #48f;\n  color: black;\n  outline:none;\n  padding: 0px 7px;\n  \n}\n\n.paytable-arrows:hover {\n  display: inline-block;\n  outline: 0;\n  padding: 0px 15px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  font-size: 30px;\n  /*background-color: inherit;*/\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.round {\n  border-radius: 50%;\n}\n\n#headingDiv {\n  text-align: center;\n  color: #fff;\n  font-size: 50px;\n  font-weight: bolder;\n}\n\n.slide-content {\n  margin: 15px;\n  height: 315px;\n}\n.multiplier {\n  color: bisque;\n}\n\n.consecutive-occurrence{\n  color: #fff;\n}\n\n.outer-list-container {\n  margin : 0 auto;\n  width: 140px;\n}\n\n.outer-list-container ul {\n  margin-top : 20px;\n}\n\n.interface-paytable_symbolValues li {\n  float: none;\n  text-align: left;\n  list-style-type: none;\n  font-size: 20px;\n}\n\n.interface-paytable_symbolValues span {\n  float: none;\n  font-size: larger;\n  text-align: left;\n  font-weight: 800;\n  list-style: none;\n  font-size: 20px;\n}\n\n.special-symbol-text {\n  line-height: 24px;\n  font-size: 19px;\n  font-weight: bold;\n  color: #fff;\n}\n\n.special-symbol-container {\n  width: 92%;\n  text-align: center;\n  margin: 0 auto;\n  padding-top: 25px;\n}\n\n.close {\n  float: right;\n  font-size: 39px;\n  font-weight: 900;\n  line-height: 1;\n  color: white;\n  text-shadow: 0 1px 0 #fff;\n  padding: 1px 6px 0px 0px;\n  opacity: 1;\n  outline:none;\n  margin-right: 0px;\n}\n\n.interface-menu-base {\n  height: 30px;\n}\n\n.interface-menu-base {\n  height: 24px;\n  background: black;\n  background: linear-gradient(#333, #000);\n  width: 100%;\n  display: -ms-inline-flexbox;\n}\n\n.menu-base-span {\n  color: white;\n  display: -ms-inline-flexbox;\n  margin-top: 1.5px;\n}\n\n.col-sm-4 {\n  padding-left: 0px;\n}\n\n.imageButton {\n  background-color: transparent;\n  height: 22.5px;\n  border: transparent;\n}\n\n.textButton {\n  padding-top: 3px;\n  font-weight: bold;\n}\n\n#settingsOverlay {\n  position: absolute;\n  bottom: 152px;\n  left: 0px;\n  background-color: grey;\n  opacity: 1;\n  height: 50px;\n  width: 200px;\n}\n\n#helpOverlay {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: black;\n  font-size: 20px;\n  color: white;\n  opacity: 0.9;\n  height: 460px;\n  width: 1130px;\n  /*overflow-y: scroll;*/\n  border-radius: 20px;\n  border: 2px solid greenyellow;\n  font-family: monospace;\n}\n\n#helpOverlay .game-name{\n font-weight: 700;\n text-transform: uppercase;\n}\n\n#helpOverlay .highlight{\n    color: #dfd;\n    text-shadow: 0 0 0.5px #ddff00, 0 0 1px #afa;\n}\n\n\n#helpOverlay h1,h2,h3 {\n  color: greenyellow;\n}\n\n#helpOverlay table{\n  margin: 50px;\n}\n\n#helpOverlay th {\n  padding: 15px;\n  text-align: center;\n  border: 1px solid;\n  background-color: #013;\n}\n\n#helpOverlay td {\n  padding: 15px;\n  border: 1px solid;\n}\n\n\n#scrollbar{\n  top: 70px;\n  height: 380px;\n  width: 1100px;\n  overflow-y: scroll;\n  margin: 2%;\n}\n\n/* Scrollbar styles */\n::-webkit-scrollbar {\nwidth: 12px;\nheight: 12px;\n}\n\n::-webkit-scrollbar-track {\nborder: 1px solid greenyellow;\nborder-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\nbackground: greenyellow;\nborder-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\nbackground:greenyellow;\n}\n\n#autoOverlay {\n  position: absolute;\n  bottom: 152px;\n  left: 30px;\n  background-color: grey;\n  opacity: 1;\n  height: 100px;\n  width: 160px;\n  border-radius: 10px;\n  border: 3px ridge #ccc;\n}\n\n#autoOverlay .close {\n  font-size: 29px;\n  font-weight: 200;\n}\n#setting-overlay-label {\n  margin-left: 5px;\n}\n\n.spacebarToSpin-row {\n  margin-left: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n#autoplay-overlay-label {\n  margin:10px;\n}\n\n.reel-symbol {\n  width: 110px;\n  height: 110px;\n  margin: 0 auto;\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/space-storm/resources/images/symbols/reel.png")) + ") no-repeat;\n  background-position: 0px -1100px;\n}\n\n.spin-symbol-help-overlay\n{\n  width:111px;\n  height:77px;\n  margin: 0 auto;\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/space-storm/resources/images/spin_button_sprite_sheet.png")) + ") no-repeat;\n  background-position: 0px 0px;\n  transform: scale(0.4);\n}\n\n.info-help-overlay{\n  width:111px;\n  height:77px;\n  margin: 0 auto;\n  background: url(" + escape(__webpack_require__("../../../../../src/app/games/space-storm/resources/images/infoPaytable.png")) + ") no-repeat;\n  background-position: 50px 28px;\n}\n\n.other-symbol-help-overlay .icon-autoplay{\n  background-color: transparent;\n  height: 22.5px;\n  border: transparent;\n}\n\n.other-symbol-help-overlay{\n  width:111px;\n   height:77px;\n    text-align: center;\n}\n.other-symbol-help-overlay .icon-top{\n  top: 29px;\n}\n\n.reel-symbol-1\n{\n  background-position: 0px 0px;\n}\n\n.reel-symbol-2 {\n  background-position: 0px -110px;\n}\n\n.reel-symbol-3 {\n  background-position: 0px -220px;\n}\n\n.reel-symbol-4 {\n  background-position: 0px -330px;\n}\n\n.reel-symbol-5 {\n  background-position: 0px -440px;\n}\n\n.reel-symbol-6 {\n  background-position: 0px -550px;\n}\n\n.wild-symbol {\n  background-position: 0px -770px;\n}\n\n.scatter-symbol {\n  background-position: 0px -660px;\n}\n\n.jackpot-symbol {\n  background-position: 0px -880px;\n}\n\n.jackpot-cheet-mode{\n   padding: 5px;\n  color: red;\n  /*background-color: #ace;*/\n  \n  position: absolute;\n  right: 342px;\n  top:710px;\n  border-radius: 10px;\n  border: 3px ridge #ccc;\n  font-size: 20px;\n  width:116px;\n}\n\n.mySlides{\n  width:100%;\n  height: 85%;\n}\n\n.footer-slide{\n  color: white;\n  margin: 20px;\n  text-align: center;\n  height: 15%;\n  font-weight: 200;\n}\n\n#error-popup-overlay {\n  background-color: rgba(0,0,0,0.7);\n  width: 1152px;\n  margin: 0 auto;\n  top:0px;\n  position: absolute;\n  height: 672px;\n\n}\n\n#error-popup {\n  position: absolute;\n  bottom: 222px;\n  left: 270px;\n  background-color: #000;\n  height: 260px;\n  width: 590px; \n  border: 5px solid #fff;\n  border-radius: 20px;\n \n}\n\ndiv button.closeButton{\n  border: 5px solid transparent;\n  border-radius: 50px;\n  height: 60px;\n  width: 195px;\n  margin:auto;\n  display:block;\n  font-weight: 600;\n  font-size: medium;\n  outline: none;\n}\n div .popUpText{\n  color: #fff;\n  font-size: 20px;\n  font-weight: 100px;\n  padding: 15px;\n  text-align: center;\n }\n\n .error-popup-header{\n  color: #fff;\n  font-size: 30px;\n  font-weight: 100px;\n  padding: 15px;\n  text-align: center;\n }\n\n .error-popup-close{\n  padding-top: 35px;\n }\n\n.autoPlay-span-options{\n  position: relative;\n  float: left;\n  height:22px;\n  width:50px;\n  padding:1px 3px 1px 10px;\n  margin: 2px 5px 2px 5px;\n  border-radius: 5px;\n  background-color: #484847;\n  overflow: hidden;\n  color:#ececec;\n  text-align: center;\n  cursor: pointer;\n}\n.autoPlay-span-options:hover{\n  background-color:lightgreen;\n  color: #282828;\n}\n.autoPlay-span-other-options{\n  width: 110px;\n}\n.autoPlay-options{\n  cursor:pointer;\n}\n.autoPlay-span-counter{\n  position: relative;\n  float: left;\n  height:32px;\n  font-size: 24px;\n  color:white;\n\n  margin: 0 auto;\n    text-align: center;\n    width: 100%;\n    padding: 0px;\n}\n.auto-counter-panel{\n  margin-top:20px\n}\n\n.test-panel{\n  padding: 5px;\n  color: white;\n  background-color: #ace;\n  position: absolute;\n  left: 1347px;\n  top:200px;\n  border-radius: 10px;\n  border: 3px ridge #ccc;\n  font-size: 20px;\n  width:340px;\n}\n\n.test-panel-grid {\n   margin-bottom : 15px;\n   margin-left: 30px;\n}\n\n.test-panel-tiles:hover{\n  background-color: #345;\n  cursor: pointer;\n}\n\n.selected-test-tile{\n  color: #f55;\n  background-color: #9f9;\n  border: 3px ridge #f55;\n  cursor: pointer;\n}\n\n.test-panel-tiles{\n  border: 1px solid red;\n  cursor: pointer;\n  \n}\n\n.test-panel-reel{\n  background-color: #456;\n  border-radius: 10px;\n  border: 3px ridge #ccc;\n}\n\n.test-panel-reel .reel-symbol{\n  background-color: #234;\n  border-radius: 10px;\n  border: 3px solid #345;\n  transform: scale(0.7);\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.test-panel-reel .reel-symbol:hover{\n  font-weight: 700;\n  background-color: #014;\n  border-radius: 10px;\n  border: 3px ridge #f55;\n}\n\n.symbol-payout-message{\n  color: bisque;\n  text-align: center;\n  font-size: 18px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/games/space-storm/game-page/game-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"game-page-container\">\n  <div id=\"OuterDiv\">\n    <div id=\"phaser-container\"></div>\n    <div class=\"interface-menu-base menu-base-span\" *ngIf=\"!isInfoFooterLineHidden\">\n      <div class=\"col-sm-4 menu-base-span\">\n        <div>\n          <button class=\"imageButton glyphicon glyphicon-cog\" value=\"set\" (click)=\"settingsButton()\"></button>\n        </div>\n        <div>\n          <button class=\"imageButton glyphicon glyphicon-question-sign\" value=\"help\" (click)=\"helpButton()\"></button>\n        </div>\n        <div>\n          <button class=\"imageButton glyphicon glyphicon-volume-up\" (click)=\"mute($event)\" value=\"sound\"></button>\n        </div>\n        <div>\n          <button class=\"imageButton textButton\" value=\"auto\" (click)=\"autoMenuButton()\">AUTO</button>\n        </div>\n      </div>\n      <div class=\"col-sm-8 menu-base-span\">\n        <div class=\"col-sm-8 menu-base-span\">\n          <div class=\"col-sm-4\"><span id=\"bet\">Bet: $ </span><span id=\"betValue\">{{gameData.maxBet}}</span></div>\n          <div class=\"col-sm-4\"><span id=\"cash\">Cash: $ </span><span id=\"cashValue\">{{gameData.cash}}</span></div>\n          <div class=\"col-sm-4\"><span id=\"win\">Win: $ </span><span id=\"winValue\">{{gameData.win}}</span></div>\n        </div>\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-3\" *ngIf=\"isTestModeActive\">\n          <button class=\"imageButton textButton\" value=\"test\" (click)=\"toggleTestPanel()\">TEST MODE -></button>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"overlay\" [hidden]=\"isPaytableHidden\">\n      <button type=\"button\" class=\"close\" (click)=\"paytableCloseButton()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"w3-content w3-display-container\">\n        <div class=\"mySlides\" id=\"wild\">\n          <div id=\"headingDiv\">WILD SYMBOL</div>\n          <div class=\"slide-content\">\n            <div class=\"special-symbol-container\">\n              <div class=\"reel-symbol wild-symbol\"></div>\n              <div class=\"special-symbol-text\">\n                Wild symbol can appear anywhere on the reels in the main game and Re-Spins and substitute for all symbols except for Scatter\n                symbol and Jackpot symbol.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"scatter\">\n          <div id=\"headingDiv\">SCATTER SYMBOL</div>\n          <div class=\"slide-content\">\n            <div class=\"special-symbol-container\">\n              <div class=\"reel-symbol scatter-symbol\"></div>\n              <div class=\"special-symbol-text\">\n                Occurrence of more than one scatter symbol on an individual reel will still be counted as ONE scatter per REEL. <br/>                3 or more reels containing scatter symbol/symbols appearing in the main game will activate free spins.<br/>                5 reels with scatter/scatters : 20 Free Spins<br/> 4 reels with scatter/scatters : 15 Free Spins<br/> 3 reels\n                with scatter/scatters : 10 Free Spins<br/> No additional Free Spins will be activated during Free Spins.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"symbols-1\">\n          <div id=\"headingDiv\">SYMBOL PAYOUT VALUE</div>\n          <div class=\"slide-content\">\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-1\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span class=\"consecutive-occurrence\">5 </span>&nbsp;<span class=\"multiplier\">500</span></li>\n                  <li><span class=\"consecutive-occurrence\">4 </span>&nbsp;<span class=\"multiplier\">150</span></li>\n                  <li><span class=\"consecutive-occurrence\">3 </span>&nbsp;<span class=\"multiplier\">20</span></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-2\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span class=\"consecutive-occurrence\">5 </span>&nbsp;<span class=\"multiplier\">500</span></li>\n                  <li><span class=\"consecutive-occurrence\">4 </span>&nbsp;<span class=\"multiplier\">150</span></li>\n                  <li><span class=\"consecutive-occurrence\">3 </span>&nbsp;<span class=\"multiplier\">20</span></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-3\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span class=\"consecutive-occurrence\">5 </span>&nbsp;<span class=\"multiplier\">200</span></li>\n                  <li><span class=\"consecutive-occurrence\">4 </span>&nbsp;<span class=\"multiplier\">60</span></li>\n                  <li><span class=\"consecutive-occurrence\">3 </span>&nbsp;<span class=\"multiplier\">10</span></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"symbol-payout-message\">*Coin payout values are on bet level 1</div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"symbols-2\">\n          <div id=\"headingDiv\">SYMBOL PAYOUT VALUE</div>\n          <div class=\"slide-content\">\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-4\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span class=\"consecutive-occurrence\">5 </span>&nbsp;<span class=\"multiplier\">200</span></li>\n                  <li><span class=\"consecutive-occurrence\">4 </span>&nbsp;<span class=\"multiplier\">60</span></li>\n                  <li><span class=\"consecutive-occurrence\">3 </span>&nbsp;<span class=\"multiplier\">10</span></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-5\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span class=\"consecutive-occurrence\">5 </span>&nbsp;<span class=\"multiplier\">60</span></li>\n                  <li><span class=\"consecutive-occurrence\">4 </span>&nbsp;<span class=\"multiplier\">15</span></li>\n                  <li><span class=\"consecutive-occurrence\">3 </span>&nbsp;<span class=\"multiplier\">2</span></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"reel-symbol reel-symbol-6\"></div>\n              <div class=\"outer-list-container\">\n                <ul class=\"interface-paytable_symbolValues\">\n                  <li><span class=\"consecutive-occurrence\">5 </span>&nbsp;<span class=\"multiplier\">60</span></li>\n                  <li><span class=\"consecutive-occurrence\">4 </span>&nbsp;<span class=\"multiplier\">15</span></li>\n                  <li><span class=\"consecutive-occurrence\">3 </span>&nbsp;<span class=\"multiplier\">2</span></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"symbol-payout-message\">*Coin payout values are on bet level 1</div>\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"betlines\">\n          <div id=\"headingDiv\"> WINNING BET LINES</div>\n          <div id=\"paytable\">\n          </div>\n        </div>\n        <div class=\"mySlides\" id=\"jackpot\">\n          <div id=\"headingDiv\">NGP JACKPOT SYMBOL</div>\n          <div class=\"slide-content\">\n            <div class=\"special-symbol-container\">\n              <div style=\"text-align:center;  margin-bottom: 62px;\"></div>\n              <div class=\"reel-symbol jackpot-symbol\"></div>\n              <div class=\"special-symbol-text\">\n                3 or more reels containing jackpot symbol/symbols appearing in the main game will activate the jackpot feature. The Jackpot\n                symbol can appear anywhere on the reels during the free-Spins and will trigger the jackpot feature. Occurrence\n                of more than one jackpot symbol on an individual reel will still be counted as ONE jackpot per REEL.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"footer-slide\">\n          Only the highest win per active bet line is paid.<br/> Bet line wins pay when in succession from leftmost to right.<br/>          Malfunction voids all pays and plays.\n        </div>\n        <button class=\" paytable-arrows-left paytable-arrows round\" (click)=\"Plusdivs(-1)\">&#8249;</button>\n        <button class=\" paytable-arrows-right paytable-arrows round\" (click)=\"Plusdivs(1)\">&#8250;</button>\n      </div>\n    </div>\n    <div id=\"error-popup-overlay\" [hidden]=\"isErrorPopupHidden\">\n      <div id=\"error-popup\">\n        <div class=\"error-popup-header\">\n          {{errorPopUpheader}}\n        </div>\n        <div class=\"popUpText\">\n          {{errorPopUpInnerText}}\n        </div>\n        <div class=\"error-popup-close\">\n          <button type=\"button\" class=\"closeButton\" (click)=\"errorPopUpCloseButton()\">CLOSE</button>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"settingsOverlay\" [hidden]=\"isSettingsHidden\">\n      <button type=\"button\" class=\"close\" (click)=\"settingsCloseButton()\">&times;</button>\n      <div id=\"setting-overlay-label\">\n        <label>Settings:</label>\n      </div>\n      <div class=\"spacebarToSpin-row\">\n        <label>\n          <input type=\"checkbox\" id=\"spacebarToSpin\" name=\"spacebarToSpin\" [(ngModel)]=\"isSpacebarToSpin\">\n          Spacebar to spin\n        </label>\n      </div>\n    </div>\n    <div id=\"helpOverlay\" [hidden]=\"isHelpHidden\">\n      <button type=\"button\" id=\"helpOverlayCloseButton\" class=\"close helpOverlayCloseButton\" style=\"margin: 1%;\" (click)=\"helpCloseButton()\">&times;</button>\n      <div id=\"scrollbar\">\n        <br>\n        <h2>Space Storm™ Game Rules</h2>\n\n        <p><span class=\"game-name highlight\">Space Storm</span> is a 5-reel, 3-row, 20-line video slot featuring Wild substitutions,\n          Scatter symbol, a Free spin feature and a Jackpot Feature.</p>\n        <br>\n        <ul>\n          <li>Game is played with 20 bet lines (fixed), 1-10 bet levels and different coin values.</li>\n          <li>The bet level is set using the <span class=\"highlight\">LEVEL</span> selector.</li>\n          <li>The coin value is set using the <span class=\"highlight\">COIN VALUE</span> selector.</li>\n          <li><span class=\"highlight\">COINS</span> displays the number of coins the player has available to wager.</li>\n          <li><span class=\"highlight\">MAX BET</span> plays the game at the maximum bet lines, highest bet level, and the current\n            coin value.</li>\n          <li><span class=\"highlight\">AUTOPLAY</span> automatically plays the game for the selected number of rounds.</li>\n          <li>Winning combinations and payouts are made according to the <span class=\"highlight\">PAYTABLE</span>.</li>\n          <li>Bet level is the number of coins bet per bet line.</li>\n          <li>A bet line win in coins is equal to the value shown on the <span class=\"highlight\">PAYTABLE</span> multiplied by\n            the bet level.</li>\n          <li>A bet line win in currency is equal to the win in coins multiplied by the coin value.</li>\n          <li>Total win is calculated by summation of win per bet line.</li>\n          <li>Bet line wins pay if in succession from the leftmost reel to the rightmost reel.</li>\n          <li>Only the highest win per active bet line is paid.</li>\n          <li>All coin wins pay on bet lines only.</li>\n        </ul>\n\n\n        <h3>Wild</h3>\n        <p>In the main game, Wild symbols can appear anywhere on the reels and substitute for all symbols except for <span class=\"highlight\">Scatter</span>          symbols.\n        </p>\n\n        <h3>Scatter</h3>\n\n        <p>In the main game, Occurrence of more than one scatter symbol on an individual reel will still be counted as\n          <span class=\"highlight\">ONE</span> scatter per REEL. 3 or more reels containing scatter symbol/symbols appearing\n          in the main game will activate free spins.</p>\n\n        <ul>\n          <li>5 reels with scatter/scatters : 20 Free Spins</li>\n          <li>4 reels with scatter/scatters : 15 Free Spins</li>\n          <li>3 reels with scatter/scatters : 10 Free Spins</li>\n        </ul>\n\n        <p>No additional Free Spins will be activated during Free Spins.</p>\n\n        <h3>Game Functions</h3>\n        <p>The table below lists the different buttons found in the game and describes their functions.</p>\n\n        <table>\n          <tr>\n            <th>\n              Symbol\n            </th>\n            <th>\n              Functionality\n            </th>\n          </tr>\n\n          <tr>\n            <td>\n              <div class=\"spin-symbol-help-overlay\"></div>\n            </td>\n            <td>Click to start a game round at the current bet level and coin value (alternatively, press the spacebar).\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <div class=\"other-symbol-help-overlay\"><label class=\"glyphicon glyphicon-cog icon-top\"></label></div>\n            </td>\n            <td>Click to open the game settings menu and select game options. Refer to Game Settings section below.</td>\n          </tr>\n\n          <tr>\n            <td>\n              <div class=\"other-symbol-help-overlay\"><label class=\"glyphicon glyphicon-volume-up icon-top\"></label></div>\n            </td>\n            <td>Click to mute the game sounds.</td>\n          </tr>\n\n          <tr>\n            <td>\n              <div class=\"other-symbol-help-overlay\"><label class=\"glyphicon glyphicon-question-sign icon-top\"></label></div>\n            </td>\n            <td>Click to open the game rules.</td>\n          </tr>\n\n          <tr>\n            <td>\n              <div class=\"other-symbol-help-overlay\"><span class=\"icon-top icon-autoplay\">AUTO</span></div>\n            </td>\n            <td>Click to open the Autoplay settings menu and play the game automatically. Select the number of spins to Autoplay.\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <div class=\"info-help-overlay\"></div>\n            </td>\n            <td>Click the arrows pointing to the left or right to scroll through the PAYTABLE pages.</td>\n          </tr>\n        </table>\n\n        <h3>Setting Options</h3>\n        <ul>\n          <li>To access game settings, click the gear icon in the game panel.</li>\n          <li>Spacebar to spin. Turns the spacebar function on or off.</li>\n        </ul>\n\n        <!--Advanced Autoplay Options\n        To set advanced autoplay options click AUTOPLAY, and then click Advanced settings.\n        On any win. Stop Autoplay when you win in a round.\n        If single win exceeds. Stops Autoplay when the amount you win exceeds or equals the amount you specify.\n        If cash increases by. Stops Autoplay if cash increases by the amount you specify.\n        If cash decreases by. Stops Autoplay if cash decreases by the amount you specify.\n        Click Reset to clear all selected Stop Autoplay options.\n        Note: Some autoplay options are mandatory for some jurisdictions.\n        Note: When changing Autoplay settings during a game round or re-spin, all settings will take effect once the game round or feature is completed.\n        Note: If you are disconnected while playing, all Autoplay settings will return to default when you reload the game.-->\n        <h3>NGP Jackpot Rules</h3>\n        <ul>\n          <li>The Jackpot is a  linked progressive jackpot, where every time the game is played by a player a portion of the bet is\n            added to the Jackpot.</li>\n          <li>Linked Progressive Jackpot wins are subject to verification by the Casino Operator and the Software Supplier. All decisions\n            are final and no correspondence will be entered into.</li>\n          <li>Jackpot values displayed in the game are delayed by up to 5 seconds. On exceptionally rare occasions, it may\n            happen that two jackpots are won within those 5 seconds, in which case the win of the second jackpot is the\n            new re-seeded jackpot which (on very rare occasions) is smaller than the previous jackpot won. All players\n            playing the game when a jackpot is won will receive a notification within 5 seconds about the jackpot amount\n            being won.</li>\n          <li>When one game round makes a claim for a certain jackpot, it is locked for that game round and simultaneously\n            assured that no other game round can claim the same jackpot. Therefore, it is technically not possible to have\n            two simultaneous wins of the same jackpot.</li>\n          <li>If the communication between the Casino and Jackpot server fails, the game becomes unavailable. There will be\n            no contributions or claims towards the Jackpot. The Jackpot amount remains the same until the communication\n            is resumed.</li>\n          <li>The  Linked Progressive Jackpot amount paid out is the Progressive Jackpot value on the NGP Jackpot server when a jackpot\n            is won. Every effort is made to ensure that the Progressive Jackpot value displayed in the game is the same\n            as the one on the casino server.</li>\n          <li>Space Storm contains NGP Jackpot</li>\n          <ul>\n            <li>5.00% of the bet is contributed to the NGP Jackpot.</li>\n            <li>The current Jackpot amount is displayed at the top-right of the game.</li>\n            <li>The Jackpot can be won when PLAYING FOR FUN.</li>\n          </ul>\n        </ul>\n        <h3>Return to Player</h3>\n        <ul>\n          <li>The theoretical return to player for this game is 92.3%.</li>\n        </ul>\n\n        <h3>Additional Information</h3>\n        <!--/*The following game features and settings may be subject to the terms and conditions of the gaming site. For more information on the following, refer to the gaming website:\n        The procedures used to manage unfinished game rounds.\n        The time after which inactive game sessions automatically end.*/-->\n        <ul>\n          <li>In the event of malfunction of the gaming hardware/software, all affected game bets and payouts are rendered void\n            and all affected bets refunded.\n          </li>\n        </ul>\n\n        <h3>Game rules generated:</h3>\n        <p>2017-06-12 12:06:05 (IST)</p>\n      </div>\n    </div>\n    <div id=\"autoOverlay\" [hidden]=\"autoCounterHidden\">\n      <span>\n        <button type=\"button\" class=\"close\" (click)=\"autoCloseButton()\">&times;</button>\n      </span>\n      <table class=\"auto-counter-panel\">\n        <tr>\n          <td>\n            <span class=\"autoPlay-span-counter\">\n                         <label class=\"autoPlay-options\">{{totalSpin}}</label><label [hidden]=\"isUntilStop\" class=\"autoPlay-options\">/{{autoPlayValue}}</label>\n                    </span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span (click)=\"autoPlayStop()\" class=\"autoPlay-span-options autoPlay-span-other-options col-sm-12\">\n                       <label >STOP</label>\n                    </span>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div id=\"autoOverlay\" [hidden]=\"isAutoHidden\">\n      <button type=\"button\" class=\"close\" (click)=\"autoCloseButton()\">&times;</button>\n      <div id=\"autoplay-overlay-label\">\n        <table class=\"autoPlay\">\n          <tr>\n            <td>\n              <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='10'>10X\n                </span >\n                <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='25'>25X\n                </span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='50'>50X\n                                         \n                </span>\n              <span class=\"autoPlay-span-options col-sm-6\" (click)=\"autoSpin($event) \" data='100'>100X\n                </span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <span class=\"autoPlay-span-options autoPlay-span-other-options col-sm-12\" (click)=\"autoSpin($event)\" data='UNTILSTOP'>UNTIL STOP\n               </span>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div id=\"test-panel\" class=\"test-panel\" [hidden]=\"isTestPanelHidden\">\n\n    <div class=\"test-panel-grid\">\n      <div class=\"row\">\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"1\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"4\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"7\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"10\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"13\">\n          A\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"2\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"5\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"8\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"11\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"14\">\n          A\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"3\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"6\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"9\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"12\">\n          A\n        </div>\n        <div class=\"col-sm-2 test-panel-tiles\" (click)=\"testTileSelect($event)\" tile-number=\"15\">\n          A\n        </div>\n      </div>\n    </div>\n\n    <div class=\"test-panel-reel\">\n      <div class=\"row\">\n        <div class=\"col-sm-4 reel-symbol reel-symbol-1\" (click)=\"testSymbolSelect($event)\" symbol-number=\"1\">\n          A\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-2\" (click)=\"testSymbolSelect($event)\" symbol-number=\"2\">\n          B\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-3\" (click)=\"testSymbolSelect($event)\" symbol-number=\"3\">\n          C\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-4 reel-symbol reel-symbol-4\" (click)=\"testSymbolSelect($event)\" symbol-number=\"4\">\n          D\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-5\" (click)=\"testSymbolSelect($event)\" symbol-number=\"5\">\n          E\n        </div>\n        <div class=\"col-sm-4 reel-symbol reel-symbol-6\" (click)=\"testSymbolSelect($event)\" symbol-number=\"6\">\n          F\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-4 reel-symbol scatter-symbol\" (click)=\"testSymbolSelect($event)\" symbol-number=\"7\">\n          S\n        </div>\n        <div class=\"col-sm-4 reel-symbol wild-symbol\" (click)=\"testSymbolSelect($event)\" symbol-number=\"8\">\n          W\n        </div>\n        <div class=\"col-sm-4 reel-symbol jackpot-symbol\" (click)=\"testSymbolSelect($event)\" symbol-number=\"9\">\n          Z\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"jackpot-cheet-mode\" [hidden]=\"isJackpotTestModeHidden\">\n    <select>\n      <option value=\"JA\">50</option>\n      <option value=\"JB\">100</option>\n      <option value=\"JC\">200</option>\n      <option value=\"JD\">300</option>\n      <option value=\"JE\">400</option>\n      <option value=\"JF\">500</option>\n      <option value=\"JG\">600</option>\n      <option value=\"JH\">Jackpot</option>\n    </select>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/games/space-storm/game-page/game-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_page_service__ = __webpack_require__("../../../../../src/app/games/space-storm/game-page/game-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_space_storm__ = __webpack_require__("../../../../../src/app/games/space-storm/main/space-storm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__ = __webpack_require__("../../../../../src/app/contracts/phaser/data-object-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_paytable__ = __webpack_require__("../../../../../src/app/shared/paytable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GamePageComponent = (function () {
    /**
     * Create an instance of GamePageComponent and intailise the class properties.
     *
     * @param _gamePageService  An object of GamePageService type.
     * @param _renderer An object of Element type.
     * @param _router  An object of Router type.
     * @param _dataObjectMapper An object of DataObjectMapper type used for mapping the data recieved from backend.
     * @param location An object of PlatformLocation type.
     *
     */
    function GamePageComponent(_gamePageService, _renderer, _router, _dataObjectMapper, location) {
        this._gamePageService = _gamePageService;
        this._renderer = _renderer;
        this._router = _router;
        this._dataObjectMapper = _dataObjectMapper;
        this.location = location;
        this.game = new __WEBPACK_IMPORTED_MODULE_2__main_space_storm__["a" /* SpaceStorm */](_gamePageService, _router, location);
        this.element = _renderer;
        this.router = _router;
        this.gamePageService = _gamePageService;
        this.dataObjectMapper = _dataObjectMapper;
        this.isPaytableHidden = true;
        this.isInfoFooterLineHidden = true;
        this.slideIndex = 1;
        this.gameCustomEvents = { toggleMute: 'toggleMute', autoPlay: 'autoPlay', autoStop: 'autoStop' };
        this.isTestModeActive = new __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */]().isTestModeActive;
        this.isTestPanelHidden = true;
        this.isJackpotState = false;
        this.isGameFocused = false;
        this.isJackpotTestModeActive = false;
        this.isJackpotTestModeHidden = true;
        this.totalSpin = 0;
    }
    /**
     * Intialise all the popups,audio and call startMyGame() to intiate space-storm.
     */
    GamePageComponent.prototype.ngOnInit = function () {
        this.startMyGame();
        this.muteAudio = false;
        this.isSettingsHidden = true;
        this.isHelpHidden = true;
        this.isAutoHidden = true;
        this.isSpacebarToSpin = false;
        this.isInfoFooterLineHidden = true;
        this.isErrorPopupHidden = true;
        this.Showdivs(this.slideIndex);
        this.volume = 1;
        this.autoPlayValue = '-1';
        this.autoPlayCounter = -1;
        this.totalSpin = 0;
        this.autoCounterHidden = true;
        this.autoStop = false;
        this.isUntilStop = false;
        var paytable = document.getElementById('paytable');
        /// <summary>
        /// method to create paytable
        /// parameters
        /// 1) Number of betLines
        /// 2) Number of Reels
        /// 3) Number of Tiles
        /// 4) Size of betLineSquare
        /// 5) Number of rows in paytable
        /// 6) WidthGap
        /// 7) HeightGap
        /// 8) BorderSize
        /// 9) PaytableColor
        /// 10) PayTableGridStyle
        /// 11) TileColor
        /// 12) FontColor
        /// </summary>
        var paytableHTML = __WEBPACK_IMPORTED_MODULE_7__shared_paytable__["a" /* init */].apply(this, [20, 5, 3, 17, 4, 15, 10, 1, '#444', '3px double #5aa', '#ad6', 'white']); // to create paytable
        paytable.appendChild(paytableHTML);
        // for test mode
        document.onkeyup = this.getKey.bind(this);
    };
    /**
     * When spin is bind with the spacebar click, the user can only activate the spin feature when the game is in focus
     * @param event A click event
     */
    GamePageComponent.prototype.handleClick = function (event) {
        var element = event.target || event.srcElement;
        var isClickWithInGame = false;
        while (element.parentNode) {
            if ((element.parentNode.id === 'OuterDiv') || (element.parentNode.id === 'test-panel')) {
                isClickWithInGame = true;
            }
            element = element.parentNode;
        }
        this.isGameFocused = isClickWithInGame;
    };
    /**
     * The function is controlling display of different divs in carousel
     *
     * @param slideindex The index of slide that is displayed
     *
     */
    GamePageComponent.prototype.Showdivs = function (slideindex) {
        var slideCounter;
        var slides = this.element.nativeElement.getElementsByClassName('mySlides');
        if (slideindex > slides.length) {
            this.slideIndex = 1;
        }
        if (slideindex < 1) {
            this.slideIndex = slides.length;
        }
        for (slideCounter = 0; slideCounter < slides.length; slideCounter++) {
            slides[slideCounter].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
    };
    /**
     * The function is called when the arrow buttons are click
     *
     * @param slideindex It add or subtract 1 from the cureent slide depending on which arrow is clicked.
     * left -1
     * right +1
     *
     */
    GamePageComponent.prototype.Plusdivs = function (slideindex) {
        this.slideIndex += slideindex;
        this.Showdivs(this.slideIndex);
    };
    /**
     * The function is used to close paytable and reset the counter again to 1.
     */
    GamePageComponent.prototype.paytableCloseButton = function () {
        this.resetPaytableSlidecounter();
        this.isPaytableHidden = true;
    };
    /**
     * The function to reset the paytable slide counter to 1.
     */
    GamePageComponent.prototype.resetPaytableSlidecounter = function () {
        this.slideIndex = 1;
        this.Showdivs(1);
    };
    /**
     * The function start the game by calling the initiateGame() of space storm.
     */
    GamePageComponent.prototype.startMyGame = function () {
        this.game.initiateGame(this);
    };
    /**
     * The method remove/add css classes depending upon the tile selected in the test panel
     *
     * @param event A Mouse event
     *
     */
    GamePageComponent.prototype.testTileSelect = function (event) {
        this.selectedTestTile = event.target.getAttribute('tile-number');
        // event.target.classList.remove('class1'); // To Remove
        // event.target.classList.contains('class2'); // To check
        // event.target.classList.toggle('class4'); // To toggle
        // event.target.getAttribute('class'); // To get
        var tiles = this.element.nativeElement.getElementsByClassName('test-panel-tiles');
        for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
            var element = tiles_1[_i];
            element.classList.remove('selected-test-tile');
        }
        event.target.classList.add('selected-test-tile'); // To ADD
    };
    /**
     * The function let the user to enter the symbols in test panel using keyboard
     *
     * @param e A keyboard event
     *
     */
    GamePageComponent.prototype.getKey = function (e) {
        var selectedTiles = this.element.nativeElement.getElementsByClassName('selected-test-tile');
        if (!this.isTestPanelHidden && selectedTiles.length > 0) {
            var alphabet = void 0;
            var key_code = e.keyCode;
            if (key_code === 65) {
                alphabet = 'A';
            }
            else if (key_code === 66) {
                alphabet = 'B';
            }
            else if (key_code === 67) {
                alphabet = 'C';
            }
            else if (key_code === 68) {
                alphabet = 'D';
            }
            else if (key_code === 69) {
                alphabet = 'E';
            }
            else if (key_code === 70) {
                alphabet = 'F';
            }
            else if (key_code === 83) {
                alphabet = 'S';
            }
            else if (key_code === 87) {
                alphabet = 'W';
            }
            else if (key_code === 90) {
                alphabet = 'Z';
            }
            if (alphabet !== undefined && alphabet !== null) {
                selectedTiles[0].innerText = alphabet;
            }
        }
    };
    /**
     * The method toggle the test panel visibility while keeping in mind the visibility status of jackpot test panel
     */
    GamePageComponent.prototype.toggleTestPanel = function () {
        if (!this.isJackpotTestModeActive) {
            this.isJackpotTestModeHidden = true;
            this.isTestPanelHidden = !this.isTestPanelHidden;
        }
        else {
            this.isTestPanelHidden = true;
            this.isJackpotTestModeHidden = !this.isJackpotTestModeHidden;
        }
    };
    /**
     * The method remove/add css classes depending upon the symbol selected in the test panel
     *
     * @param event A mouse event
     *
     */
    GamePageComponent.prototype.testSymbolSelect = function (event) {
        this.selectedTestSymbol = event.target.getAttribute('symbol-number');
        var tiles = this.element.nativeElement.getElementsByClassName('test-panel-tiles');
        for (var _i = 0, tiles_2 = tiles; _i < tiles_2.length; _i++) {
            var element = tiles_2[_i];
            if (element.getAttribute('tile-number') === this.selectedTestTile) {
                element.innerText = event.target.innerText;
            }
        }
    };
    /**
     * The method to capture mute event from webpage.
     *
     * @param event A Mouse Event
     *
     */
    GamePageComponent.prototype.mute = function (event) {
        if (!this.muteAudio) {
            event.target.classList.remove('glyphicon-volume-up');
            event.target.classList.add('glyphicon-volume-off');
            this.muteAudio = true;
        }
        else {
            event.target.classList.remove('glyphicon-volume-off');
            event.target.classList.add('glyphicon-volume-up');
            this.muteAudio = false;
        }
        var signal = new Phaser.Signal();
        signal.add(this.game.phaserInstance.state.states.MainScreen.methods.externalEventListner);
        signal.dispatch(this.gameCustomEvents.toggleMute);
    };
    /**
     * The method is called when user trigger the auto play feature
     *
     * @param event A mouse event
     *
     */
    GamePageComponent.prototype.autoSpin = function (event) {
        if (this.game.phaserInstance.state.states.MainScreen.stateAssets.reels[4].spinSpeed === 0) {
            this.totalSpin = 0;
            this.autoStop = false;
            this.isUntilStop = false;
            this.autoPlayValue = event.currentTarget.getAttribute('data');
            this.autoPlayCounter = parseInt(this.autoPlayValue, 10);
            if (!this.autoPlayCounter) {
                this.isUntilStop = true;
                this.autoPlayCounter = Number.MAX_SAFE_INTEGER;
            }
            var signal = new Phaser.Signal();
            signal.add(this.game.phaserInstance.state.states.MainScreen.methods.externalEventListner);
            signal.dispatch(this.gameCustomEvents.autoPlay);
        }
        else {
            // TODO: Add disable sound
        }
    };
    /**
     * The method is called when the user stop the auto play feature. It also hide the auto play panel and dispatch the event.
     */
    GamePageComponent.prototype.autoPlayStop = function () {
        this.autoStop = true;
        this.isAutoHidden = false;
        this.autoCounterHidden = true;
        this.autoPlayCounter = -1;
        var signal = new Phaser.Signal();
        signal.add(this.game.phaserInstance.state.states.MainScreen.methods.externalEventListner);
        signal.dispatch(this.gameCustomEvents.autoStop);
    };
    /**
     * The method to to toggle settings button and if user clicks on settings button then auto panel hides
     */
    GamePageComponent.prototype.settingsButton = function () {
        if (!this.isAutoHidden) {
            this.isAutoHidden = true;
        }
        this.isSettingsHidden = !this.isSettingsHidden;
    };
    /**
     * The method to to toggle auto button while checking the visibility status of setting pop up as well
     */
    GamePageComponent.prototype.autoMenuButton = function () {
        if (!this.isSettingsHidden) {
            this.isSettingsHidden = true;
        }
        if (this.autoPlayCounter !== -1) {
            this.isAutoHidden = true;
            this.autoCounterHidden = !this.autoCounterHidden;
        }
        else if (this.autoPlayCounter === -1) {
            this.isAutoHidden = !this.isAutoHidden;
            this.autoCounterHidden = true;
        }
    };
    /**
     * The method to to close settings button
     */
    GamePageComponent.prototype.settingsCloseButton = function () {
        this.isSettingsHidden = true;
    };
    /**
      * The method to to toggle help button by first checcking the visibility status of the paytable
      */
    GamePageComponent.prototype.helpButton = function () {
        if (this.isPaytableHidden === false) {
            this.paytableCloseButton();
        }
        this.isHelpHidden = !this.isHelpHidden;
    };
    /**
      * The method to to close help button
      */
    GamePageComponent.prototype.helpCloseButton = function () {
        this.isHelpHidden = true;
    };
    /**
     * The  method to close auto button and hide the visibility.
     */
    GamePageComponent.prototype.autoCloseButton = function () {
        this.isAutoHidden = true;
        this.autoCounterHidden = true;
    };
    /**
     * The function is used to close the error popup
     */
    GamePageComponent.prototype.errorPopUpCloseButton = function () {
        this.isErrorPopupHidden = true;
    };
    return GamePageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GamePageComponent.prototype, "handleClick", null);
GamePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-game-page',
        template: __webpack_require__("../../../../../src/app/games/space-storm/game-page/game-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/games/space-storm/game-page/game-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__game_page_service__["a" /* GamePageService */], __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__["a" /* DataObjectMapper */]]
    })
    /** Define the game page component for space storm */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_page_service__["a" /* GamePageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_page_service__["a" /* GamePageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__["a" /* DataObjectMapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__contracts_phaser_data_object_mapper__["a" /* DataObjectMapper */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* PlatformLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* PlatformLocation */]) === "function" && _e || Object])
], GamePageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/game-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/game-page/game-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamePageService = (function () {
    /**
     *
     *Create an instance of App config and GamePageService
     * @param _http  An object of HTTP type.
     *
     */
    function GamePageService(_http) {
        this._http = _http;
        this.config = new __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]();
        this.httpServiceProvider = _http;
    }
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * to get the game route selected by the user
     *
     * @param routee The name of the game
     * @return An observable of ApiResponse type.
     *
     */
    GamePageService.prototype.getGame = function (routee) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get,
            url: this.config.RouteConstants.gameRoute + '/' + routee,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * to activate the spin when the user is on mainscreen state.
     *
     * @param postSpinDTO Define an object required by the backened for spin to process.(post-spin-dto)
     * @return An observable of ApiResponse type.
     *
     */
    GamePageService.prototype.postSpinData = function (postSpinDTO) {
        var options;
        if (this.config.isTestModeActive && postSpinDTO.cheatSymbolArray.length === 15) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.testMode,
                body: "bet=" + postSpinDTO.bet + "&" +
                    ("level=" + postSpinDTO.level + "&") +
                    ("coinValue=" + postSpinDTO.coinValue + "&") +
                    ("totalCoins=" + postSpinDTO.totalCoins + "&") +
                    ("cash=" + postSpinDTO.totalCash + "&") +
                    ("gameId=" + postSpinDTO.gameId + "&") +
                    ("cheatSymbolArray=" + postSpinDTO.cheatSymbolArray)
            });
        }
        else {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.postSpinRoute,
                body: "bet=" + postSpinDTO.bet + "&" +
                    ("level=" + postSpinDTO.level + "&") +
                    ("coinValue=" + postSpinDTO.coinValue + "&") +
                    ("totalCoins=" + postSpinDTO.totalCoins + "&") +
                    ("cash=" + postSpinDTO.totalCash + "&") +
                    ("gameId=" + postSpinDTO.gameId)
            });
        }
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * to activate the spin when the user is on jackpot state.
     *
     * @param postSpinDTO Define an object required by the backened for spin to process.(post-spin-dto)
     * @param isJackpotTestModeActive Define whether the jackpot test mode is active or not
     * @return An observable of ApiResponse type.
     *
     */
    GamePageService.prototype.postJackpotSpinData = function (postSpinDTO, isJackpotTestModeActive) {
        var options;
        if (isJackpotTestModeActive) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.jackpotTestMode,
                body: "gameId=" + postSpinDTO.gameId + "&" +
                    ("symbol=" + postSpinDTO.cheatsymbol)
            });
        }
        else {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
                url: this.config.RouteConstants.jackpotSpin,
                body: "gameId=" + postSpinDTO.gameId + "&"
            });
        }
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * to get the value of NGP Jackpot counter
     *
     * @return An observable of ApiResponse type.
     *
     */
    GamePageService.prototype.getJackpotCounter = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get,
            url: this.config.RouteConstants.getJackpotCash,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, false);
    };
    return GamePageService;
}());
GamePageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /** Define the service required by the game like normal spin,spin on jackpot page, jackpot counter  */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], GamePageService);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/game-page.service.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/game-state-provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_loading_state__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/loading-state/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_trailer_state__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/trailer-state/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_main_screen_state__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_jackpot_state__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/jackpot-state/index.ts");




/** The class initiate the game and provide different states of the game */
var GameStateProvider = (function () {
    /**
     * Perform the intialisation task
     * @param _httpService An object of Http type.
     * @param _router An object of Router type.
     *
     */
    function GameStateProvider(_httpService, _router) {
        this.states = [];
        this.httpService = _httpService;
        this.router = _router;
    }
    /**
     * It intiate all the states of the game and push the states in state[] array
     */
    GameStateProvider.prototype.initiateStates = function () {
        this._loadingState = new __WEBPACK_IMPORTED_MODULE_0__states_loading_state__["a" /* default */](this.httpService, this.router);
        this._trailerState = new __WEBPACK_IMPORTED_MODULE_1__states_trailer_state__["a" /* default */](this.httpService);
        this._mainScreenState = new __WEBPACK_IMPORTED_MODULE_2__states_main_screen_state__["a" /* default */](this.httpService);
        this._jackpotState = new __WEBPACK_IMPORTED_MODULE_3__states_jackpot_state__["a" /* default */](this.httpService);
        this.states.push(this._loadingState);
        this.states.push(this._trailerState);
        this.states.push(this._mainScreenState);
        this.states.push(this._jackpotState);
    };
    /**
     *
     * @return All the states the game will probably eneter into.
     *
     */
    GameStateProvider.prototype.getStates = function () {
        return this.states;
    };
    return GameStateProvider;
}());
/* harmony default export */ __webpack_exports__["a"] = (GameStateProvider);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/game-state-provider.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/space-storm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_state_provider__ = __webpack_require__("../../../../../src/app/games/space-storm/main/game-state-provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceStorm; });
/// <reference types="phaser-ce" />



/** Define the space storm game */
var SpaceStorm = (function () {
    /**
     * Intialise the game related data
     * @param _httpService An object of Http type.
     * @param _router An object of Router type.
     * @param location An object of Platform location type used to destroy the phaser instance when back button is pressed.
     *
     */
    function SpaceStorm(_httpService, _router, location) {
        var _this = this;
        /**
         * binds back button of browser  with current location.
         * onPopping from current state checks if phaser world is-
         * (1) true - destroys the older previous phaser Instance/phaser world
         * (2) false- do nothing
         */
        location.onPopState(function () {
            if (_this.phaserInstance.world) {
                _this.phaserInstance.destroy();
            }
        });
        /**
         * Used to destroy the phaser instance like the music playing when the user log out from the game
         */
        _router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationStart */]) {
                if (_this.phaserInstance.world) {
                    _this.phaserInstance.destroy();
                }
            }
        });
        // to come from DB
        this.name = 'SPACE STORM';
        this.imagePath = './app/games/space-storm/resources/images/Outer_Space.jpg';
        this.gameStates = new __WEBPACK_IMPORTED_MODULE_1__game_state_provider__["a" /* default */](_httpService, _router);
        this.url = '/space-storm';
        this.description = '';
    }
    /**
     * Intialise the phaser instance, the states and start the intial state of the game.
     *
     * @param angularContainer It is used to access the properties that are defined in the angular component i.e. outside the canvas
     *
     */
    SpaceStorm.prototype.initiateGame = function (angularContainer) {
        this.phaserInstance = new __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Game"](1152, 648, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["AUTO"], 'phaser-container');
        this.phaserInstance.angularContainer = angularContainer;
        this.gameStates.initiateStates();
        var allStates;
        allStates = this.gameStates.getStates();
        for (var _i = 0, allStates_1 = allStates; _i < allStates_1.length; _i++) {
            var state = allStates_1[_i];
            this.phaserInstance.state.add(state.name, state);
            if (state.isInitial) {
                this.initialState = state.name;
            }
        }
        this.phaserInstance.state.start(this.initialState);
    };
    return SpaceStorm;
}());

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/space-storm.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/jackpot-state/drawJackpotPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addImages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return drawBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializationVariable; });
/**
 * The function define for call the different functions for draw background.
 */
var drawBackground = function () {
    addImages.apply(this);
    // Draw Reactagle Border
    drawRectangle.apply(this);
    // Draw Animation
    drawAnimation.apply(this);
};
/**
 * The function define for add the images and animation into jackpot state.
 */
var addImages = function () {
    this.jackpotReel = this.game.add.tileSprite(this.game.world.centerX - 20, this.game.world.centerY, 407, 550, 'jackpotReel');
    this.jackpotReel.anchor.set(0.5);
    this.game.arrowLeft = this.game.add.image(215, 280, 'arrowLeft');
    this.game.arrowLeft.scale.setTo(0.6);
    this.game.arrowRight = this.game.add.image(775, 280, 'arrowRight');
    this.game.arrowRight.scale.setTo(0.6);
    this.stateAssets.jackpotSpinButton = this.game.add.sprite(this.game.world.centerX - 210, 270, 'jackpotSpin-Button', 3);
    this.stateAssets.jackpotSpinButton.inputEnabled = true;
    this.stateAssets.jackpotSpinButton.anchor.set = 0.5;
    this.stateAssets.jackpotSpinButton.animations.add('walk');
    this.stateAssets.jackpotSpinButton.play('walk', 4, true);
};
/**
 * The function define for draw animation into the border of jackpot state.
 */
var drawAnimation = function () {
    var circleGroup = this.game.add.group();
    var uPosX = 10;
    var uPosY = 10;
    for (var i = 0; i < 72; i++) {
        var upperbmd = this.game.add.bitmapData(uPosX + 10, uPosY + 10);
        var c = upperbmd.circle(uPosX, uPosY, 5, '#D4AF37');
        var sp = this.game.add.sprite(35, 20, c);
        circleGroup.add(sp);
        uPosX += 15;
    }
    var lPosX = 10;
    var lPosY = 10;
    for (var i = 0; i < 39; i++) {
        var leftbmd = this.game.add.bitmapData(lPosX + 10, lPosY + 10);
        var c = leftbmd.circle(lPosX, lPosY, 5, '#D4AF37');
        circleGroup.create(20, 25, c);
        lPosY += 15;
    }
    var bPosX = 10;
    var bPosY = 506;
    for (var i = 0; i < 72; i++) {
        var bottambmd = this.game.add.bitmapData(bPosX + 10, bPosY + 10);
        var c = bottambmd.circle(bPosX, bPosY, 5, '#D4AF37');
        circleGroup.create(35, 115, c);
        bPosX += 15;
    }
    var rPosx = 100;
    var rPosY = 20;
    for (var i = 0; i < 39; i++) {
        var rightbmd = this.game.add.bitmapData(rPosx + 10, rPosY + 10);
        var c = rightbmd.circle(rPosx, rPosY, 5, '#D4AF37');
        circleGroup.create(1025, 25, c);
        rPosY += 15;
    }
    for (var i = 0; i < circleGroup.children.length; i++) {
        if (i % 2 === 0) {
            this.game.add.tween(circleGroup.children[i]).to({ tint: 1 }, 2000, Phaser.Easing.Linear.None, true, true, 2000);
        }
        else {
            this.game.add.tween(circleGroup.children[i]).to({ tint: 0 }, 500, Phaser.Easing.Linear.None, true, true, 2000);
        }
    }
};
/**
 * The function define for draw rectangle at the border to the state.
 */
var drawRectangle = function () {
    var rectWidth = this.game.world.width - 20;
    var rectHeight = this.game.world.height - 20;
    var rectSpriteX = 10;
    var rectSpriteY = 10;
    var rectLineWidth = 5;
    var cornerRadius = 20;
    var bmd1 = this.game.add.bitmapData(rectWidth, rectHeight);
    var drawRectangleSprite1 = this.game.add.sprite(rectSpriteX, rectSpriteY, bmd1);
    roundRect(bmd1.ctx, 0, 0, rectWidth, rectHeight, cornerRadius, '#ff0000', rectLineWidth);
    var bmd2 = this.game.add.bitmapData(rectWidth, rectHeight);
    var drawRectangleSprite2 = this.game.add.sprite(rectSpriteX + 35, rectSpriteY + 35, bmd2);
    roundRect(bmd2.ctx, 0, 0, rectWidth - 70, rectHeight - 70, cornerRadius, '#ff0000', rectLineWidth);
};
/**
 * The function define for draw the rounded corner of rectangle.
 */
var roundRect = function (ctx, x, y, width, height, radius, stroke, lineWidth) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    }
    else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            if (radius[side]) {
                radius[side] = radius[side];
            }
            else {
                radius[side] = defaultRadius[side];
            }
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = stroke;
    if (stroke) {
        ctx.stroke();
    }
};
/**
 * This function initializes the variables with default values.
 */
var initializationVariable = function () {
    this.isReelFinalStop = false;
    this.reelData.number = 0;
    this.reelData.flag = 0;
    this.reelData.remValue = 0;
    this.reelData.spinSpeed = 0;
    this.reelData.spinTimeStamp = 0;
    this.reelData.counter = 0;
    this.winSymbolY = -1;
    this.reelData.isSpinning = false;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/drawJackpotPage.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/jackpot-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawJackpotPage__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/jackpot-state/drawJackpotPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinJackpotReel__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/jackpot-state/spinJackpotReel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jackpotPage_Win_Animations__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/jackpot-state/jackpotPage-Win-Animations.ts");



/**
 * The class define for design and handle the events of JackpotState
 */
var JackpotState = (function () {
    /**
    * Create an instance of JackpotState and intailise the class properties.
    * @param _httpservice  An object of GamePageService type.
     */
    function JackpotState(_httpservice) {
        this._httpservice = _httpservice;
        this.name = 'Jackpot';
        this.httpService = _httpservice;
        this.isReelFinalStop = false;
        this.winSymbolY = -1;
        this.isInitial = false;
        this.stateAssets = {
            jackpotSpinButton: {}
        };
        this.reelData = {
            number: 0,
            isSpinning: false,
            flag: 0,
            remValue: 0,
            spinSpeed: 0,
            spinTimeStamp: 0,
            counter: 0
        };
        this.methods = {};
        this.helperArray = [235, 115, 955, 835, 715, 595, 475, 355];
        this.x = new Map();
        this.x.set('JA', 0);
        this.x.set('JB', 1);
        this.x.set('JC', 2);
        this.x.set('JD', 3);
        this.x.set('JE', 4);
        this.x.set('JF', 5);
        this.x.set('JG', 6);
        this.x.set('JH', 7);
    }
    /**
     * This function is called first. It should contain code to handle the loading of assets needed by your game
     */
    JackpotState.prototype.preload = function () {
    };
    /**
     * The create function is called automatically once the preload has finished.
     * set the visibility of test panel and activate current test panel.
     * call the method which is required for design the state.
     * bind all the necessary methods.
     */
    JackpotState.prototype.create = function () {
        this.game.angularContainer.isTestPanelHidden = true;
        this.game.angularContainer.isJackpotTestModeActive = true;
        __WEBPACK_IMPORTED_MODULE_0__drawJackpotPage__["a" /* initializationVariable */].apply(this);
        __WEBPACK_IMPORTED_MODULE_0__drawJackpotPage__["b" /* drawBackground */].apply(this);
        __WEBPACK_IMPORTED_MODULE_1__spinJackpotReel__["a" /* spinReel */].apply(this);
        this.methods.JackpotPageWinAnimation = __WEBPACK_IMPORTED_MODULE_2__jackpotPage_Win_Animations__["a" /* symbolWin */].bind(this);
    };
    /**
     * The update (and render) functions are called every frame.
     * resposible for reel spinning.
     */
    JackpotState.prototype.update = function () {
        if (!this.isReelFinalStop) {
            __WEBPACK_IMPORTED_MODULE_1__spinJackpotReel__["b" /* spinAnimate */].apply(this);
        }
    };
    return JackpotState;
}());
/* harmony default export */ __webpack_exports__["a"] = (JackpotState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/jackpot-state/jackpotPage-Win-Animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolWin; });
/**
 * This function shows the win animation for jackpot reel spin. A few coins are shown
 * and tossed from the top of the screen depending upon the amount won. More coins are shown for bigger wins and fewer for small wins.
 */
var symbolWin = function () {
    var emitCoin = this.spinData.jackpotWinAmount / 10;
    this.emitter1 = this.game.add.emitter(200, 50, 100);
    this.emitter1.makeParticles('coin', [0, 1, 2, 3, 4, 5], emitCoin, true, true);
    this.emitter1.gravity = 500;
    this.emitter1.start(true, 4000, null, emitCoin);
    this.emitter2 = this.game.add.emitter(900, 50, 100);
    this.emitter2.makeParticles('coin', [0, 1, 2, 3, 4, 5], emitCoin, true, true);
    this.emitter2.gravity = 500;
    this.emitter2.start(true, 4000, null, emitCoin);
    this.game.time.events.add(Phaser.Timer.SECOND * 4, stopEmiiter, this);
};
var stopEmiiter = function () {
    this.emitter1.on = false;
    this.emitter2.on = false;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpotPage-Win-Animations.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/jackpot-state/spinJackpotReel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_jackpot_post_spin_dto__ = __webpack_require__("../../../../../src/app/contracts/api-calls/jackpot-post-spin-dto.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinReel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spinAnimate; });

/**
 * This function binds the spin-button click with the spin method.
 */
var spinReel = function () {
    this.stateAssets.jackpotSpinButton.events.onInputDown.add(jackpotSpinClick, this);
};
/**
 * The function define for enable the spinning.
 */
var spin = function () {
    this.reelData.isSpinning = true;
    this.reelData.counter++;
};
/**
 * The function define for set the game state to MainScreen.
 */
var moveToPreviousState = function () {
    this.jackpotWinTextJackpot.alpha = 0;
    this.game.state.start('MainScreen');
};
/**
 * The function define for disable the reel spinning.
 */
var stop = function () {
    this.reelData.isSpinning = false;
};
/**
 * The function define for set the reel stop position according to win-symbol.
 */
var setWinSymbol = function () {
    var t = this.x.get(this.spinData.symbol);
    this.winSymbolY = this.helperArray[t];
    this.game.time.events.add(Phaser.Timer.SECOND * 3, stop, this);
};
/**
 * The function define for remove the spin-button from the reel.
 * And get the jackpot response.
 */
var jackpotSpinClick = function () {
    this.game.add.tween(this.stateAssets.jackpotSpinButton).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    this.stateAssets.jackpotSpinButton.inputEnabled = false;
    spin.apply(this);
    getRequest.apply(this);
};
/**
 * The function define for subscribe the postJackpotSpinData method from service
 * and get the response.
 */
var getRequest = function () {
    var _this = this;
    var jackpotCheatSymbol = '';
    if (this.game.angularContainer.isTestModeActive && !this.game.angularContainer.isJackpotTestModeHidden) {
        var symbolValue = this.game.angularContainer.element.nativeElement.getElementsByClassName('jackpot-cheet-mode');
        jackpotCheatSymbol = symbolValue[0].firstElementChild.options[symbolValue[0].firstElementChild.selectedIndex].value;
        var jackpotSpindto = new __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_jackpot_post_spin_dto__["a" /* default */](this.game.angularContainer.gameData.gameId, jackpotCheatSymbol);
        this.httpService.postJackpotSpinData(jackpotSpindto, true)
            .subscribe(function (resGameData) {
            _this.spinData = resGameData.body;
        }, function (error) { console.log('Error' + error); }, function () { setWinSymbol.apply(_this); });
    }
    else {
        var jackpotSpindto = new __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_jackpot_post_spin_dto__["a" /* default */](this.game.angularContainer.gameData.gameId, null);
        this.httpService.postJackpotSpinData(jackpotSpindto)
            .subscribe(function (resGameData) {
            _this.spinData = resGameData.body;
        }, function (error) { console.log('Error' + error); }, function () { setWinSymbol.apply(_this); });
    }
};
/**
 * This function displays the animated text referring to the win amount.
 */
var showWin = function () {
    this.jackpotWinTextJackpot = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '');
    this.jackpotWinTextJackpot.anchor.setTo(0.5);
    this.jackpotWinTextJackpot.scale.setTo(0.2);
    this.jackpotWinTextJackpot.font = 'Arial Black';
    this.jackpotWinTextJackpot.fontSize = 200;
    this.jackpotWinTextJackpot.stroke = '#008';
    this.jackpotWinTextJackpot.strokeThickness = 1;
    this.jackpotWinTextJackpot.fill = '#fff';
    this.jackpotWinTextJackpot.smoothed = false;
    if (this.spinData.isJackpotWin) {
        this.jackpotWinTextJackpot.text = 'JACKPOT WIN : ' + this.spinData.jackpotWinAmount;
    }
    else {
        this.jackpotWinTextJackpot.text = 'WIN : ' + this.spinData.jackpotWinAmount;
    }
    this.jackpotWinTextJackpot.alpha = 0;
    this.winTextTween = this.game.add.tween(this.jackpotWinTextJackpot).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    var jackpotWinScaleTween = this.game.add.tween(this.jackpotWinTextJackpot.scale).to({ x: 1, y: 1 }, 3000, 'Linear', true);
    this.methods.JackpotPageWinAnimation();
    this.game.time.events.add(Phaser.Timer.SECOND * 4, moveToPreviousState, this);
};
/**
 * The function define for change the reel position y co-ordinates.
 * First It will slowly increase the co-ordinate and according the spin response
 * slowly decrease the speed and stop at win symbol position.
 */
var spinAnimate = function () {
    if (this.reelData.isSpinning) {
        if (this.reelData.number < 30) {
            this.reelData.number++;
        }
    }
    else {
        if (this.reelData.number > 5) {
            this.reelData.number--;
        }
        else {
            if (this.jackpotReel.tilePosition.y === this.winSymbolY) {
                this.reelData.number = 0;
                this.isReelFinalStop = true;
                showWin.apply(this);
            }
            else {
                if (this.reelData.flag === 1) {
                    this.reelData.remValue = this.jackpotReel.tilePosition.y % 5;
                    this.reelData.flag = 2;
                }
                else {
                    if (this.reelData.remValue !== 0) {
                        this.jackpotReel.tilePosition.y -= 1;
                        this.reelData.remValue--;
                    }
                    else {
                        this.reelData.flag = 1;
                    }
                }
            }
        }
    }
    this.jackpotReel.tilePosition.y += this.reelData.number;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/spinJackpotReel.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/loading-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");


/** define the loading state of the game */
var LoadingState = (function () {
    /**
     * Intailise the basic structure of the game and create an instance of Appconfig
     *
     * @param _httpService An object of Http type
     * @param _router An object of Router type
     *
     */
    function LoadingState(_httpService, _router) {
        this.name = 'Loading';
        this.isInitial = true;
        this.stateAssets = {
            ready: false,
        };
        this.httpService = _httpService;
        this.router = _router;
        this.config = new __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]();
    }
    /**
     * This function is called first when the state is started. It load the preload bares required in the loading state.
     */
    LoadingState.prototype.preload = function () {
        // TODO: TO FETCH FROM SERVER
        this.game.load.image('preloadbar1', './app/games/space-storm/resources/images/loadingbar1.png');
        this.game.load.image('preloadbar2', './app/games/space-storm/resources/images/loadingbar2.png');
    };
    ;
    /**
     * Call the getGame() of slot-game service and depending upon the response subcribe accordingly.
     * Success: Intialise the symbol set, bet in euro and win
     * Error: Navigate the user to error page
     */
    LoadingState.prototype.getGameData = function () {
        var gameStaticName = this.game.angularContainer.router.url.split('/').pop();
        // this.httpService.getGame(gameStaticName).subscribe(
        //   (response) => {
        //   const dataObjectMapper = new DataObjectMapper()
        //  this.game.angularContainer.gameData = dataObjectMapper.mapper(response.body)
        this.game.angularContainer.gameData = {
            gameId: 1,
            description: 'Description',
            imagePath: '',
            name: 'space-storm',
            url: '',
            cash: 500,
            totalCoins: 5000,
            coinValue: 0.1,
            betLineDetails: [],
            gameAssetVo: [
                {
                    assetName: '',
                    assetType: '',
                    assetUrl: ''
                }
            ],
            maxBetLevel: 20,
            betMultiplier: 20,
        };
        var symbolMap = new Map();
        symbolMap.set('A', 0);
        symbolMap.set('B', 1);
        symbolMap.set('C', 2);
        symbolMap.set('D', 3);
        symbolMap.set('E', 4);
        symbolMap.set('F', 5);
        symbolMap.set('S', 6);
        symbolMap.set('W', 7);
        symbolMap.set('Z', 8);
        this.game.angularContainer.gameData.symbolSetMap = symbolMap;
        // Defining MaxBet($)
        var maxBet = this.game.angularContainer.gameData.betMultiplier * this.game.angularContainer.gameData.coinValue[0];
        this.game.angularContainer.gameData.maxBet = maxBet;
        // Defining Win($)
        var win = 0;
        this.game.angularContainer.gameData.win = win;
        // },
        // (error) => {
        //   this.router.navigateByUrl('error');
        // },
        // () => { }
        // );
        // this.httpService.getJackpotCounter()
        //   .subscribe(
        //   (response) => {
        //     this.game.angularContainer.jackpotCounter = response.body.jackpotCounter;
        //   },
        //   (error) => {
        //     console.log('error');
        //   },
        //   () => { }
        //   );
    };
    /**
     * The create function is called automatically once the preload has finished.
     * The function loads all the images, audio, sprites required by the game and create the progress bar
     */
    LoadingState.prototype.create = function () {
        this.getGameData();
        this.game.load.onLoadComplete.add(this.loadComplete, this);
        this.game.load.image('space', './app/games/space-storm/resources/images/Outer_Space.jpg');
        this.game.load.image('scatterBackground', './app/games/space-storm/resources/images/scatter-background.jpg');
        // TODO: TO FETCH FROM SERVER AS ABOVE WITH A LOOP
        // this.game.load.image(this.gameData.gameAssetVo[4].assetName, this.gameData.gameAssetVo[4].assetUrl);
        // this.game.load.image(this.gameData.gameAssetVo[1].assetName, this.gameData.gameAssetVo[1].assetUrl);
        this.game.load.image('trailer', './app/games/space-storm/resources/images/trailer.jpg');
        // load Sound
        this.game.load.audio('backgroundScore', './app/games/space-storm/resources/audio/background.ogg');
        this.game.load.audio('spinSound', './app/games/space-storm/resources/audio/spin.ogg');
        this.game.load.audio('winSound', './app/games/space-storm/resources/audio/win.ogg');
        this.game.load.audio('reelStopSound', './app/games/space-storm/resources/audio/reel-stop.ogg');
        this.game.load.audio('trailerSound', './app/games/space-storm/resources/audio/trailer.ogg');
        this.game.load.audio('buttonClickSound', './app/games/space-storm/resources/audio/button_Click.ogg');
        this.game.load.audio('hitSound', './app/games/space-storm/resources/audio/hit.ogg');
        this.game.load.audio('ScatterBackgroundScore', './app/games/space-storm/resources/audio/scatter.ogg');
        this.game.load.audio('ScatterStopSound', './app/games/space-storm/resources/audio/scatter-stop.ogg');
        this.game.load.audio('spinningSound', './app/games/space-storm/resources/audio/spinning.ogg');
        this.game.load.audio('scatterSpinningSound', './app/games/space-storm/resources/audio/scatter-spinning.ogg');
        this.game.load.spritesheet('reel', './app/games/space-storm/resources/images/symbols/reel.png', 110, 110, 9);
        this.game.load.image('reel-blurred', './app/games/space-storm/resources/images/symbols/reel-blurred.png');
        this.game.load.spritesheet('spinButton', './app/games/space-storm/resources/images/spin_button_sprite_sheet.png', 111, 77, 4);
        this.game.load.spritesheet('jackpotCounterFrame', './app/games/space-storm/resources/images/jackpot-frame.png', 265, 147, 5);
        this.game.load.image('autoplayButton', './app/games/space-storm/resources/images/blank_button.png');
        this.game.load.image('maxBetButton', './app/games/space-storm/resources/images/blank_button_maxbet.png');
        this.game.load.image('leftArrow', './app/games/space-storm/resources/images/left_arrow.png');
        this.game.load.image('rightArrow', './app/games/space-storm/resources/images/right_arrow.png');
        this.game.load.image('white-rocket', './app/games/space-storm/resources/images/white-rocket.png');
        this.game.load.image('meteor-transparent', './app/games/space-storm/resources/images/meteor-transparent.png');
        this.game.load.image('broken-glass-line', './app/games/space-storm/resources/images/broken_glass_line.png');
        this.game.load.image('info', './app/games/space-storm/resources/images/infoPaytable.png');
        this.game.load.spritesheet('win-shower-particles', './app/games/space-storm/resources/images/win-shower-particles.png', 79, 74, 4);
        this.game.load.image('cockpit-header', './app/games/space-storm/resources/images/Cockpit-header-1152-transparent.png');
        this.game.load.image('cockpit-panel', './app/games/space-storm/resources/images/Cockpit-panel-1152-center-transparent.png');
        this.game.load.bitmapFont('carrier_command', './app/games/space-storm/resources/fonts/carrier_command.png', './app/games/space-storm/resources/fonts/carrier_command.xml');
        // Jackpot-state Images
        this.game.load.image('arrowLeft', './app/games/space-storm/resources/images/arrow-left.png');
        this.game.load.image('arrowRight', './app/games/space-storm/resources/images/arrow-right.png');
        this.game.load.image('jackpotReel', './app/games/space-storm/resources/images/jackpot-reel.png');
        this.game.load.spritesheet('jackpotSpin-Button', './app/games/chess/resources/images/jackpotSpin-Button.png', 415, 120, 3);
        this.game.load.spritesheet('coin', './app/games/space-storm/resources/images/coin.png', 32, 32, 5);
        this.game.load.spritesheet('flareblue16', './app/games/space-storm/resources/images/flareblue16.png', 256, 256, 16);
        this.game.load.image('RetroFontStatsBlock', './app/games/space-storm/resources/images/PICKPILE.png');
        this.game.load.image('brokenGlass', './app/games/space-storm/resources/images/broken_glass_image.png');
        this.game.load.start();
        this.game.preloadBar = this.game.add.sprite(this.game.world.centerX - 280, this.game.world.centerY, 'preloadbar1');
        this.game.preloadBar2 = this.game.add.sprite(this.game.world.centerX - 280, this.game.world.centerY, 'preloadbar2');
        this.game.load.setPreloadSprite(this.game.preloadBar2);
        this.gamingPracticeText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 70, this.config.StringConstants.GamingPracticeText);
        this.presentText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 110, this.config.StringConstants.PresentingText);
        //  Center align
        this.gamingPracticeText.anchor.set(0.5);
        //  Font style
        this.gamingPracticeText.font = 'Arial Black';
        this.gamingPracticeText.fontSize = 40;
        this.gamingPracticeText.fontWeight = 'bold';
        //  Stroke color and thickness
        this.gamingPracticeText.stroke = '#000000';
        this.gamingPracticeText.strokeThickness = 6;
        this.gamingPracticeText.fill = '#43d637';
        //  Center align
        this.presentText.anchor.set(0.5);
        this.gamingPracticeText.align = 'center';
        //  Font style
        this.presentText.font = 'Arial Black';
        this.presentText.fontSize = 30;
        this.presentText.fontWeight = 'bold';
        //  Stroke color and thickness
        this.presentText.stroke = '#000000';
        this.presentText.strokeThickness = 6;
        this.presentText.fill = '#43d637';
        this.presentText.scale.setTo(0.3);
        this.gamingPracticeText.scale.setTo(0.5);
        var tweenGamingPractice = this.game.add.tween(this.gamingPracticeText.scale).to({
            x: 1,
            y: 1
        }, 3000, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Bounce.Out, true);
        var tweenPresentText = this.game.add.tween(this.presentText.scale).to({
            x: 1,
            y: 1
        }, 3000, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Easing"].Bounce.Out, true);
        this.game.stage.disableVisibilityChange = true;
    };
    ;
    /**
      * The function is called when the the assets are fully loaded and intiate the trailer state.
      */
    LoadingState.prototype.loadComplete = function () {
        this.game.state.start('Trailer');
    };
    ;
    /**
     * The update (and render) functions are called every frame
     */
    LoadingState.prototype.update = function () {
    };
    ;
    return LoadingState;
}());
/* harmony default export */ __webpack_exports__["a"] = (LoadingState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/auto-play.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return autoPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetAutoPlaySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return triggerPendingSpins; });
/**
 * The function define for enable the auto play spin in the game.
 * Spin the reel number of times as specified
 */
var autoPlay = function () {
    if (this.game.angularContainer.autoStop) {
        this.methods.resetAutoPlaySettings.apply(this, [false, false, true, -1]);
        if (this.spinResponse.prize > 0 && this.stateAssets.reels[4].spinSpeed === 0) {
            this.methods.enableButtonsOnSpin();
        }
    }
    else if (!this.isAutoPlayRunning) {
        if (this.game.angularContainer.autoPlayCounter > 0) {
            --this.game.angularContainer.autoPlayCounter;
            this.game.angularContainer.totalSpin++;
            this.game.angularContainer.autoStop = false;
            this.methods.resetAutoPlaySettings.apply(this, [true, true, false]);
            this.methods.autoSpin();
        }
        else if (this.game.angularContainer.autoPlayCounter <= 0) {
            this.methods.resetAutoPlaySettings.apply(this, [false, false, true]);
            this.game.angularContainer.autoPlayCounter = -1;
        }
    }
};
/**
 * The function set the auto play running or not.
 * set the visibility of auto-play and auto-play counter
 * @param isAutoPlay Define the auto play running or not
 * @param isAutoHidden Define for set the visibility of auto-play
 * @param isAutoCounterHidden Define for set the visibility of auto-play counter
 */
var resetAutoPlaySettings = function (isAutoPlay, isAutoHidden, isAutoCounterHidden) {
    this.isAutoPlayRunning = isAutoPlay;
    this.game.angularContainer.isAutoHidden = isAutoHidden;
    this.game.angularContainer.autoCounterHidden = isAutoCounterHidden;
};
/**
 * The function define for spin the reels in case of free spin.
 * and if free spins over then set the reels as before the free spins
 */
var triggerScatterSpin = function () {
    if (this.freeSpinsPending > -1) {
        --this.freeSpinsPending;
        if (this.freeSpinsPending === -1) {
            this.isScatterRunning = false;
            this.methods.revertScatterWinAnimations.apply(this);
            this.spinResponse = this.lastResponseBeforeFreeSpins;
            this.spinResponse.isScatterWin = false;
            this.methods.tweekReelWithRandom.apply(this, [true, false]);
        }
        else {
            this.methods.autoSpin.apply(this);
        }
    }
};
/**
 * The function define for trigger auto play when auto-play running is active
 * and if auto-play spins over or scatter free spins over then enable buttons.
 */
var triggerAutoSpin = function () {
    if (this.isAutoPlayRunning) {
        if (this.game.angularContainer.autoPlayCounter > 0) {
            --this.game.angularContainer.autoPlayCounter;
            ++this.game.angularContainer.totalSpin;
            this.methods.autoSpin.apply(this);
        }
        else if (this.game.angularContainer.autoPlayCounter <= 0) {
            this.methods.resetAutoPlaySettings.apply(this, [false, false, true]);
            this.game.angularContainer.autoPlayCounter = -1;
            this.methods.enableButtonsOnSpin();
        }
    }
    else if (!this.isScatterRunning) {
        this.methods.enableButtonsOnSpin();
    }
};
/**
 * The function define for trigger pending spins
 * first it will detect the case then depending on
 * call the scatter spin or auto spin
 */
var triggerPendingSpins = function () {
    if (!this.game.angularContainer.isJackpotState) {
        if (this.freeSpinsPending > -1) {
            triggerScatterSpin.apply(this);
        }
        else {
            triggerAutoSpin.apply(this);
        }
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/auto-play.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/backgroud-renderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawBackground; });
/**
 * The function define for add the images to background of game.
 */
var drawBackground = function () {
    this.game.background = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'space');
    this.game.background.anchor.set(0.5);
    this.game.background.alpha = this.styles.background.alphaMainBackground;
    this.game.scatterBackground = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'scatterBackground');
    this.game.scatterBackground.anchor.set(0.5);
    this.game.scatterBackground.alpha = 0;
    this.game.add.tween(this.game.scatterBackground)
        .to({ angle: 10 }, 2000, 'Linear', true, 0, -1, true);
    this.game.add.tween(this.game.scatterBackground)
        .to({ x: this.game.world.centerX + 30 }, 900, 'Linear', true, 0, -1, true);
    drawParticleEmmiter.apply(this);
};
/**
 * The function define for draw particle emitter.
 * it will emit the particle but at that time it's not visible.
 */
var drawParticleEmmiter = function () {
    this.game.winShowerEmitter = this.game.add.emitter(this.game.world.width, 10, 200);
    this.game.winShowerEmitter.makeParticles('win-shower-particles', [0, 1, 2, 3]);
    this.game.winShowerEmitter.minParticleScale = 0.3;
    this.game.winShowerEmitter.maxParticleScale = 1;
    this.game.winShowerEmitter.gravity = 150;
    this.game.winShowerEmitter.bounce.setTo(0.5, 0.5);
    this.game.winShowerEmitter.angularDrag = 30;
    // false means don't explode all the sprites at once,
    // but instead release at a rate of 20 particles per frame
    // The 6000 value is the lifespan of each particle
    this.game.winShowerEmitter.start(false, 6000, 20);
    this.game.winShowerEmitter.visible = false;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/backgroud-renderer.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/bet-lines.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configureBetLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return drawBetLines; });
/* unused harmony export betLineMouseOver */
/* unused harmony export tweenTint */
/* unused harmony export betLineMouseOut */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return drawGridLine; });
/**
 * The function define for draw the betlines, left side and right side
 * and set all the assest for bet line.
 */
var configureBetLines = function () {
    var _this = this;
    var topPaddinng = this.coordinates.reelY + this.dimensions.betLines.betLineTopOffset;
    this.stateAssets.betLinesLeft.forEach(function (item, index) {
        var bmd = _this.game.add.bitmapData(30, 30, 'numberBMD');
        bmd.ctx.arc(_this.dimensions.betLines.betLineNumberRadius, _this.dimensions.betLines.betLineNumberRadius, 10, 0, 2 * Math.PI);
        bmd.ctx.fillStyle = '#FFF';
        bmd.ctx.fill();
        bmd.ctx.font = '8pt Arial';
        bmd.ctx.fillStyle = '#46f';
        bmd.ctx.textAlign = 'center';
        bmd.ctx.fillText(item, 15, 19);
        var betLineSprite = _this.game.add.sprite(_this.dimensions.betLines.horizontalPadding, topPaddinng + (index * (2 * _this.dimensions.betLines.betLineNumberRadius) + _this.dimensions.betLines.betLineNumberSpacing), bmd);
        betLineSprite.alpha = 0.5;
        betLineSprite.anchor.set(0.5);
        betLineSprite.data.lineNumber = item;
        betLineSprite.inputEnabled = true;
        betLineSprite.events.onInputOver.add(betLineMouseOver, _this);
        betLineSprite.events.onInputOut.add(betLineMouseOut, _this);
        // TODO: use betLineClickAnimation later
        // betLineSprite.events.onInputDown.add(betLineClickAnimation, this);
        for (var _i = 0, _a = _this.stateAssets.betLineDetails; _i < _a.length; _i++) {
            var betLine = _a[_i];
            if (betLine.lineNumber === item) {
                betLine.lineNumberSprite = betLineSprite;
                betLine.coordinates = [];
                for (var _b = 0, _c = betLine.tileNumbers; _b < _c.length; _b++) {
                    var tileNumber = _c[_b];
                    for (var _d = 0, _e = _this.stateAssets.tileCoordinates; _d < _e.length; _d++) {
                        var tileDetail = _e[_d];
                        if (tileNumber === tileDetail.tileNumber) {
                            betLine.coordinates.push(tileDetail.coordinate);
                        }
                    }
                }
            }
        }
    });
    this.stateAssets.betLinesRight.forEach(function (item, index) {
        var bmd = _this.game.add.bitmapData(30, 30, 'numberBMD');
        bmd.ctx.arc(_this.dimensions.betLines.betLineNumberRadius, _this.dimensions.betLines.betLineNumberRadius, 10, 0, 2 * Math.PI);
        bmd.ctx.fillStyle = '#FFF';
        bmd.ctx.fill();
        bmd.ctx.font = '8pt Arial';
        bmd.ctx.fillStyle = '#46f';
        bmd.ctx.textAlign = 'center';
        bmd.ctx.fillText(item, 15, 19);
        var betLineSprite = _this.game.add.sprite(_this.game.world.width - _this.dimensions.betLines.horizontalPadding, topPaddinng + (index * (2 * _this.dimensions.betLines.betLineNumberRadius) + _this.dimensions.betLines.betLineNumberSpacing), bmd);
        betLineSprite.alpha = 0.50;
        betLineSprite.anchor.set(0.5);
        betLineSprite.data.lineNumber = item;
        betLineSprite.inputEnabled = true;
        betLineSprite.events.onInputOver.add(betLineMouseOver, _this);
        betLineSprite.events.onInputOut.add(betLineMouseOut, _this);
        // TODO: use betLineClickAnimation later
        // betLineSprite.events.onInputDown.add(betLineClickAnimation, this);
        for (var _i = 0, _a = _this.stateAssets.betLineDetails; _i < _a.length; _i++) {
            var betLine = _a[_i];
            if (betLine.lineNumber === item) {
                betLine.lineNumberSprite = betLineSprite;
                betLine.coordinates = [];
                for (var _b = 0, _c = betLine.tileNumbers; _b < _c.length; _b++) {
                    var tileNumber = _c[_b];
                    for (var _d = 0, _e = _this.stateAssets.tileCoordinates; _d < _e.length; _d++) {
                        var tileDetail = _e[_d];
                        if (tileNumber === tileDetail.tileNumber) {
                            betLine.coordinates.push(tileDetail.coordinate);
                        }
                    }
                }
            }
        }
    });
};
/**
 * The function define for draw betlines over the win symbol
 * when the win comes then over the symbol bet line visible
 */
var drawBetLines = function () {
    var graphics = this.game.add.graphics(0, 0);
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        // for info bet-lines (hover)
        var bmdHover = this.game.add.bitmapData(1152, 648, 'betLineBMDHover');
        bmdHover.ctx.beginPath();
        for (var i = 0; i < line.coordinates.length - 1; i++) {
            bmdHover.ctx.moveTo(line.coordinates[i].x, line.coordinates[i].y);
            bmdHover.ctx.lineTo(line.coordinates[i + 1].x, line.coordinates[i + 1].y);
        }
        bmdHover.ctx.lineWidth = 4;
        bmdHover.ctx.strokeStyle = '#ddeeff';
        bmdHover.ctx.lineCap = 'round';
        bmdHover.ctx.stroke();
        var spriteHover = this.game.add.sprite(0, 0, bmdHover);
        spriteHover.visible = false;
        line.hoverSprite = spriteHover;
        // for win bet-lines (hover)
        var bmd = this.game.add.bitmapData(1152, 648, 'betLineBMDWin');
        bmd.ctx.beginPath();
        for (var i = 0; i < line.coordinates.length - 1; i++) {
            bmd.ctx.moveTo(line.coordinates[i].x, line.coordinates[i].y);
            bmd.ctx.lineTo(line.coordinates[i + 1].x, line.coordinates[i + 1].y);
        }
        bmd.ctx.lineWidth = 9;
        bmd.ctx.strokeStyle = '#ddeeff';
        bmd.ctx.lineCap = 'round';
        bmd.ctx.stroke();
        var spriteWin = this.game.add.sprite(0, 0, bmd);
        spriteWin.visible = false;
        line.winSprite = spriteWin;
    }
};
/**
 * This function is executed when the mouse pointer hovers on any bet-line number block.
 * @param {object} sprite - The sprite on which the mouse pointer was hovered.
 * @param {object} pointer - The object referring to the mouse pointer.
 */
var betLineMouseOver = function (sprite, pointer) {
    sprite.alpha = 1;
    sprite.scale.setTo(1.2);
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        if (sprite.data.lineNumber === line.lineNumber) {
            line.hoverSprite.visible = true;
        }
    }
};
/**
 * This function is executed when the one clicks on any bet-line number block.
 * @param {object} sprite - The sprite on which the mouse pointer was clicked.
 * @param {object} pointer - The object referring to the mouse pointer.
 */
var betLineClickAnimation = function (sprite, pointer) {
    if (sprite.tint === 0xffffff) {
        sprite.tint = this.styles.betLines.clickTintMultiplier * 0xffffff;
    }
    else {
        sprite.tint = 0xffffff;
    }
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        if (sprite.data.lineNumber === line.lineNumber) {
            line.winSprite.visible = !line.winSprite.visible;
        }
    }
};
/**
 * This function is used to apply tween on the tint on any sprite.
 * @param {object} obj - The sprite on which the tween is to be applied.
 * @param {object} startColor - .
 * @param {object} endColor - .
 * @param {object} time - .
 */
var tweenTint = function (obj, startColor, endColor, time) {
    // create an object to tween with our step value at 0
    var colorBlend = { step: 0 };
    // create the tween on this object and tween its step property to 100
    var colorTween = this.game.add.tween(colorBlend).to({ step: 100 }, time, 'Linear', true);
    // run the interpolateColor function every time the tween updates, feeding it the
    // updated value of our tween each time, and set the result as our tint
    colorTween.onUpdateCallback(function () {
        obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
    });
    // set the object to the start color straight away
    obj.tint = startColor;
    // start the tween
    colorTween.start();
    colorTween.yoyo(true, 500);
};
/**
 * This function is executed when the mouse pointer hovers outs of any bet-line number block.
 * @param {object} sprite - The sprite from which the mouse pointer was hovered out.
 * @param {object} pointer - The object referring to the mouse pointer.
 */
var betLineMouseOut = function (sprite, pointer) {
    sprite.alpha = 0.5;
    sprite.scale.setTo(1);
    for (var _i = 0, _a = this.stateAssets.betLineDetails; _i < _a.length; _i++) {
        var line = _a[_i];
        if (sprite.data.lineNumber === line.lineNumber) {
            line.hoverSprite.visible = false;
        }
    }
};
var drawGridLine = function () {
    var lines = [
        [
            { 'x': 0, 'y': this.coordinates.reelY },
            { 'x': this.game.world.width, 'y': this.coordinates.reelY },
        ],
        [
            { 'x': 0, 'y': this.coordinates.reelY + 110 },
            { 'x': this.game.world.width, 'y': this.coordinates.reelY + 110 },
        ],
        [
            { 'x': 0, 'y': this.coordinates.reelY + 220 },
            { 'x': this.game.world.width, 'y': this.coordinates.reelY + 220 },
        ],
        [
            { 'x': 0, 'y': this.coordinates.reelY + 330 },
            { 'x': this.game.world.width, 'y': this.coordinates.reelY + 330 },
        ]
    ];
    var graphics = this.game.add.graphics(0, 0);
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        for (var i = 0; i < line.length - 1; i++) {
            graphics.lineStyle(2, 0xFFFFFF, 0.05);
            graphics.moveTo(line[i].x, line[i].y);
            graphics.lineTo(line[i + 1].x, line[i + 1].y);
        }
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/bet-lines.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/configure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configure; });
/**
 * Define the values which are used while booting the game.
 * These values are used for intialising the cordinates, dimensions, volume levels and cash-bet statistics.
 */
var configure = function () {
    this.gameData = this.game.angularContainer.gameData;
    this.game.angularContainer.isInfoFooterLineHidden = false;
    this.stateAssets.betLineDetails = this.gameData.betLineDetails;
    this.stateAssets.reels = [];
    this.styles = {
        background: {
            alphaMainBackground: 0.8,
            alphaScatterBackground: 0.6,
        },
        statsBlock: {
            label: {
                color: 'rgb(224,224,224)',
                fontSize: 15,
                fontSizeSmall: 12,
                fontWeight: 'bold',
                hoverColor: 0x9999ff,
                whiteColor: 0xffffff,
                strokeColor: 'rgb(160,000,200)',
                yellowColor: 0xbebe00
            }
        },
        betLines: {
            clickTintMultiplier: 250
        },
        toastMessages: {
            colorGradientCenter: 'rgba(50,200,240,0.9)',
            colorGradientEdges: 'rgba(100,100,240,0)'
        },
        lineWinBackdrop: {
            colorGradientCenter: 'rgba(100,150,200,0.8)',
            colorGradientEdges: 'rgba(100,150,200,0)'
        }
    };
    this.coordinates = {
        reelY: 120,
        statsBlock: {
            spinButton: { x: this.game.world.centerX + 5, y: 537 },
            betLabel: { x: 235, y: 568 },
            levelLabel: { x: 338, y: 568 },
            autoPlayButton: { x: 436, y: 519 },
            maxBetButton: { x: 639, y: 519 },
            coinValueLable: { x: 767, y: 568 },
            coinsLable: { x: 890, y: 568 },
            levelIncreaseButton: { x: 375, y: 600 },
            levelDecreaseButton: { x: 325, y: 600 },
            coinValueIncreaseButton: { x: 820, y: 600 },
            coinValueDecreaseButton: { x: 770, y: 600 },
            levelText: { x: 358, y: 610 },
            coinValueText: { x: 804, y: 610 },
            totalCoinsText: { x: 910, y: 610 },
            betText: { x: 250, y: 610 },
            infoButton: { x: 150, y: 638 },
            imageBet: { x: 576 - 325, y: 324 + 250 },
            imageLevel: { x: 576 - 220, y: 324 + 250 },
            imageCoinValue: { x: 576 + 230, y: 324 + 250 },
            imageCoins: { x: 576 + 335, y: 324 + 250 },
            imageAutoplay: { x: 576 - 95, y: 550 },
            imageMaxBet: { x: 576 + 108, y: 550 }
        }
    };
    this.stats = {
        intialLevel: 1,
        bet: this.gameData.betMultiplier,
        totalCash: this.gameData.cash,
        coinValueArray: this.gameData.coinValue,
        IntialCoinValue: this.gameData.coinValue[0],
        coinValueArrayLength: this.gameData.coinValue.length,
        totalCoins: this.gameData.totalCoins,
    };
    this.stats.level = this.stats.intialLevel;
    this.stats.coinLevel = this.stats.IntialCoinValue;
    this.stats.calculateTotalCoins = this.stats.totalCoins;
    this.stats.calculateTotalCash = this.stats.totalCash;
    this.dimensions = {
        reel: {
            reelY: 110,
            blurContentHeight: 1980,
            tilesTop: 90,
            tilesLeft: 130,
            tileWidth: 180,
            tileHeight: 110,
            blurReelHeight: 990,
        },
        statsBlock: {
            autoPlayBlockHeight: 87,
            autoPlayBlockWidth: 78,
        },
        betLines: {
            horizontalPadding: 80,
            betLineNumberRadius: 15,
            betLineNumberSpacing: 3,
            betLineTopOffset: 25
        }
    };
    this.soundVolumeMultipliers = {
        backgroundScore: 1,
        spinSound: 0.7,
        winSound: 0.4,
        reelStopSound: 0.4,
        buttonClickSound: 0.9,
        ScatterBackgroundScore: 0.7,
        ScatterStopSound: 0.8,
        spinningSound: 0.5,
        scatterSpinningSound: 0.7
    };
    this.bigWinThreashHoldMultiplier = 15;
    calculateAndAssignTileCoordinates.apply(this);
};
/**
 * Define and assign values to the 15 tiles(5 x 3)
 */
var calculateAndAssignTileCoordinates = function () {
    var d = this.dimensions.reel;
    for (var reelCounter = 0; reelCounter < this.stateAssets.reelCount; reelCounter++) {
        this.stateAssets.tileCoordinates.push({
            'tileNumber': ((3 * reelCounter) + 1),
            'coordinate': {
                'x': d.tilesLeft + reelCounter * d.tileWidth + d.tileWidth / 2,
                'y': d.reelY + d.tileHeight / 2
            }
        });
        this.stateAssets.tileCoordinates.push({
            'tileNumber': ((3 * reelCounter) + 2),
            'coordinate': {
                'x': d.tilesLeft + reelCounter * d.tileWidth + d.tileWidth / 2,
                'y': d.reelY + (1 * d.tileHeight) + d.tileHeight / 2
            }
        });
        this.stateAssets.tileCoordinates.push({
            'tileNumber': ((3 * reelCounter) + 3),
            'coordinate': {
                'x': d.tilesLeft + reelCounter * d.tileWidth + d.tileWidth / 2,
                'y': d.reelY + (2 * d.tileHeight) + d.tileHeight / 2
            }
        });
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/configure.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/enable-disable-controls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enableButtonsOnSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return disableButtonsOnSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hidePopUps; });
/**
 * The function enable various buttons within the game
 */
var enableButtonsOnSpin = function () {
    this.game.spinButton.inputEnabled = true;
    this.game.levelIncreaseButton.inputEnabled = true;
    this.game.levelDecreaseButton.inputEnabled = true;
    this.game.coinValueIncreaseButton.inputEnabled = true;
    this.game.coinValueDecreaseButton.inputEnabled = true;
    this.game.maxBetButton.inputEnabled = true;
    this.game.autoPlayButton.inputEnabled = true;
    this.game.spaceBar.enabled = true;
    this.game.spinButton.setFrames(1, 0, 2);
};
/**
 * The function disable various buttons while the spin, auto play is active.
 */
var disableButtonsOnSpin = function () {
    this.game.spinButton.inputEnabled = false;
    this.game.levelIncreaseButton.inputEnabled = false;
    this.game.levelDecreaseButton.inputEnabled = false;
    this.game.coinValueIncreaseButton.inputEnabled = false;
    this.game.coinValueDecreaseButton.inputEnabled = false;
    this.game.maxBetButton.inputEnabled = false;
    this.game.autoPlayButton.inputEnabled = false;
    this.game.spaceBar.enabled = false;
    this.game.spinButton.setFrames(3, 3, 3);
};
/**
 * The function hide the paytable, help document when a spin is trigger and when win animations are going on
 */
var hidePopUps = function () {
    if (this.game.angularContainer.isPaytableHidden === false || this.game.angularContainer.isHelpHidden === false) {
        this.game.angularContainer.isPaytableHidden = true;
        this.game.angularContainer.isHelpHidden = true;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/enable-disable-controls.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/event-handling.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_post_spin_dto__ = __webpack_require__("../../../../../src/app/contracts/api-calls/post-spin-dto.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return bindStatsBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return bindSpaceBarToSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bindSpinButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bindInfoButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return bindAutoplayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return bindMaxBetButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return bindLevelIncreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return bindLevelDecreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return bindCoinValueIncreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return bindCoinValueDecreaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tweekReelWithRandom; });

/**
 * It enable the user to activate spin feature with spacebar click
 */
var bindSpaceBarToSpin = function () {
    this.game.spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.game.spaceBar.onDown.add(function () {
        var isSpinning = false;
        for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
            var reel = _a[_i];
            isSpinning = isSpinning || reel.isSpinning;
        }
        if (isSpinning === false) {
            if (this.game.angularContainer.isSpacebarToSpin && this.game.angularContainer.isGameFocused) {
                var boundSpinClick = spinClick.bind(this);
                boundSpinClick();
            }
        }
        /*TODO 1.change frame when performing spin through spacebar and
         TODO 2.when cursor is focussed outside canvas spacebar spin should not work*/
    }, this);
};
/**
 *  Bind a function when the spin buttoon is clickec up i.e. when a button is pressed and left.
 */
var bindSpinButton = function () {
    this.game.spinButton.onInputUp.add(spinClick, this);
};
/**
 * The function intialise the level, coin value increase/decrease button i.e. whether they are intailled enavbled or disabled
 */
var bindStatsBlock = function () {
    this.game.levelDecreaseButton.inputEnabled = false;
    this.game.levelDecreaseButton.events.onInputUp.add(this.methods.levelDecrease, this);
    this.game.levelIncreaseButton.inputEnabled = true;
    this.game.levelIncreaseButton.events.onInputUp.add(this.methods.levelIncrease, this);
    this.game.coinValueDecreaseButton.inputEnabled = false;
    this.game.coinValueDecreaseButton.events.onInputUp.add(this.methods.coinValueDecrease, this);
    this.game.coinValueIncreaseButton.inputEnabled = true;
    this.game.coinValueIncreaseButton.events.onInputUp.add(this.methods.coinValueIncrease, this);
};
/**
 * This function is responsible for updating the reels visually.
 * once a spin-response is fetched from the server.
 *
 * @param wasScatter A boolean flag determining whether the previous spin triggered the scatter feature or not.
 * @param wasJackpot A boolean flag determining whether the previous spin triggered the jackpot feature or not.
 */
var tweekReelWithRandom = function (wasScatter, wasJackpot) {
    var _this = this;
    this.stateAssets.randomNumbers = [];
    var scatterTweenTimeout = 400;
    if ((this.spinResponse.randomNumbers !== undefined) && (this.spinResponse.randomNumbers !== null)) {
        for (var _i = 0, _a = this.spinResponse.randomNumbers; _i < _a.length; _i++) {
            var num = _a[_i];
            this.stateAssets.randomNumbers.push(this.game.angularContainer.gameData.symbolSetMap.get(num));
        }
        this.stateAssets.reels.forEach(function (reel, index) {
            var _loop_1 = function (child) {
                if (child.data.isLandingSymbol) {
                    if (wasScatter) {
                        var scatterTween = _this.game.add.tween(child).to({ alpha: 0 }, scatterTweenTimeout / 2, Phaser.Easing.Linear.None, true);
                        scatterTween.onComplete.add(function () {
                            child.frame = this.stateAssets.randomNumbers[child.data.tileNumber - 1];
                            this.scatterTweenFadeIn = this.game.add.tween(child).to({ alpha: 1 }, scatterTweenTimeout / 2, Phaser.Easing.Linear.None, true);
                        }, _this);
                    }
                    else {
                        child.frame = _this.stateAssets.randomNumbers[child.data.tileNumber - 1];
                    }
                }
                else if ((child.data.isLandingSymbol !== 'undefined') && (child.data.isLandingSymbol === false)) {
                    child.frame = _this.methods.mockRandom(1, 9);
                }
            };
            for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _loop_1(child);
            }
        });
    }
    ;
    if (wasScatter) {
        this.game.time.events.add(scatterTweenTimeout, function () {
            var winAnimationTween = this.methods.showWinAnimations(this.spinResponse);
        }, this);
    }
    if (wasJackpot) {
        this.methods.jackpotWinAnimation(this.spinResponse);
    }
};
/**
 * Define the messages displayed to the user in case the cash become negative.
 */
var popUpOnNegativeCash = function () {
    this.game.angularContainer.errorPopUpheader = 'Insufficient Funds';
    this.game.angularContainer.errorPopUpInnerText = 'Please add cash or reduce your bet to continue playing.';
    this.game.angularContainer.isErrorPopupHidden = false;
};
/**
 * Define the messages displayed in case an error occur.
 */
var popUpOnError = function (errorMessage) {
    this.game.angularContainer.errorPopUpheader = ' ERROR!';
    this.game.angularContainer.errorPopUpInnerText = errorMessage;
    this.game.angularContainer.isErrorPopupHidden = false;
};
/**
 * Th function is called when user click the spin button on game page not in jackpot state.
 * 1. Remove the previous win animations.
 * 2. Check to see if user have enough cash to proceed with the game and disable the cash-bet stats, hide all the pop-ups
 * 3. Make the http call to postSpinData() to get the result
 * Success: Give the spin response
 * Error: Display error pop ups
*/
var spinClick = function () {
    var _this = this;
    if (!(this.game.angularContainer.isJackpotState)) {
        var isTotalCoinsValid = (this.stats.calculateTotalCoins - (this.stats.bet * this.stats.level)) >= 0;
        if (this.spinResponse && this.spinResponse.prize > 0) {
            this.methods.removeWinAnimations();
        }
        if (isTotalCoinsValid) {
            // Because the spin sound is faded at reel stop
            this.game.spinSound.volume = this.volume * this.soundVolumeMultipliers.spinSound;
            // play spin sound
            this.game.spinSound.play();
            this.game.spinningSound.play();
            this.spinResponse = {};
            this.methods.disableButtonsOnSpin();
            this.methods.hidePopUps();
            var _loop_2 = function (reel) {
                this_1.game.time.events.add((Phaser.Timer.SECOND * (reel.number - 1)) / 10, function () {
                    reel.isSpinning = true;
                }, this_1);
            };
            var this_1 = this;
            for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
                var reel = _a[_i];
                _loop_2(reel);
            }
            var postSpinDTO = new __WEBPACK_IMPORTED_MODULE_0__contracts_api_calls_post_spin_dto__["a" /* default */](this.game.angularContainer.gameData.gameId, this.stats.bet, this.stats.level, this.stats.coinLevel, this.stats.calculateTotalCash, this.stats.IntialCoinValue, []);
            if (this.game.angularContainer.isTestModeActive && !this.game.angularContainer.isTestPanelHidden) {
                var tiles = this.game.angularContainer.element.nativeElement.getElementsByClassName('test-panel-tiles');
                for (var _b = 0, tiles_1 = tiles; _b < tiles_1.length; _b++) {
                    var element = tiles_1[_b];
                    postSpinDTO.cheatSymbolArray[element.getAttribute('tile-number') - 1] = element.innerText;
                }
            }
            this.httpService.postSpinData(postSpinDTO)
                .subscribe(function (response) {
                if (_this.freeSpinsPending < 0) {
                    updateStats.apply(_this);
                }
                _this.spinResponse = response.body;
                _this.methods.updateReelsWithScatterFlags();
                _this.methods.updateReelsWithJackpotFlags();
                _this.game.time.events.add(Phaser.Timer.SECOND * 1, stop, _this);
            }, function (error) {
                _this.game.time.events.add(Phaser.Timer.SECOND * 1, stop, _this);
                var errorMessage = _this.methods.popUpMessageGenerator(error);
                popUpOnError.call(_this, [errorMessage]);
            });
        }
        else {
            this.methods.resetAutoPlaySettings.apply(this, [false, true, true, -1]);
            this.game.angularContainer.autoPlay = false;
            popUpOnNegativeCash.apply(this);
            this.methods.enableButtonsOnSpin();
        }
    }
};
/**
 * It stops the reels and fade out the spin sound
 */
var stop = function () {
    tweekReelWithRandom.apply(this);
    var _loop_3 = function (reel) {
        this_2.game.time.events.add(Phaser.Timer.SECOND * reel.stopLag, function () {
            reel.isSpinning = false;
        }, this_2);
    };
    var this_2 = this;
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_3(reel);
    }
    this.game.spinSound.fadeOut(1000);
};
/**
 * It bind the information button with user input action such as mouse down, mouse over, mouse out
 */
var bindInfoButton = function () {
    this.game.infoButton.inputEnabled = true;
    this.game.infoButton.events.onInputDown.add(togglePaytable, this);
    this.game.infoButton.events.onInputOver.add(hoverPaytable, this);
    this.game.infoButton.events.onInputOut.add(mouseOutPaytable, this);
};
/**
 * Represents toggling of paytable button
 */
var togglePaytable = function () {
    if (this.game.angularContainer.isHelpHidden === false) {
        this.game.angularContainer.isHelpHidden = true;
    }
    this.game.angularContainer.resetPaytableSlidecounter();
    this.game.angularContainer.isPaytableHidden = !this.game.angularContainer.isPaytableHidden;
};
/**
 * Represents hovering of paytable button
 */
var hoverPaytable = function () {
    this.game.canvas.style.cursor = 'pointer';
    this.game.infoButton.scale.setTo(1.2);
};
/**
 *  Represents mouse out event of paytable button
 */
var mouseOutPaytable = function () {
    this.game.canvas.style.cursor = 'default';
    this.game.infoButton.scale.setTo(1);
};
/**
 * The function update the cash-bet statistics as soon as the spin button is clicked.
 */
var updateStats = function () {
    this.game.angularContainer.gameData.win = 0;
    this.stats.calculateTotalCash = Math.round((this.stats.calculateTotalCash - (this.game.angularContainer.gameData.maxBet)) * 100) / 100;
    this.game.angularContainer.gameData.cash = this.stats.calculateTotalCash;
    this.stats.calculateTotalCoins = this.stats.calculateTotalCoins - (this.stats.bet * this.stats.level);
    this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
};
/**
 * It bind the autoplay button with user input action such as mouse down, mouse over, mouse out and mouse up.
 */
var bindAutoplayButton = function () {
    this.game.autoPlayButton.onInputUp.add(autoplayClickUp, this);
    this.game.autoPlayButton.onInputOver.add(autoplayClickOver, this);
    this.game.autoPlayButton.onInputOut.add(autoplayClickOut, this);
    this.game.autoPlayButton.onInputDown.add(autoplayClickDown, this);
};
/**
 * It bind the max-bet button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindMaxBetButton = function () {
    this.game.maxBetButton.onInputUp.add(maxBetClickUp, this);
    this.game.maxBetButton.onInputOver.add(maxBetClickOver, this);
    this.game.maxBetButton.onInputOut.add(maxBetClickOut, this);
    this.game.maxBetButton.onInputDown.add(maxBetClickDown, this);
};
/**
 * It bind the level increase button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindLevelIncreaseButton = function () {
    this.game.levelIncreaseButton.events.onInputUp.add(levelIncreaseClickUp, this);
    this.game.levelIncreaseButton.events.onInputOver.add(levelIncreaseClickOver, this);
    this.game.levelIncreaseButton.events.onInputOut.add(levelIncreaseClickOut, this);
    this.game.levelIncreaseButton.events.onInputDown.add(levelIncreaseClickDown, this);
};
/**
 * It bind the level decrease button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindLevelDecreaseButton = function () {
    this.game.levelDecreaseButton.events.onInputUp.add(levelDecreaseClickUp, this);
    this.game.levelDecreaseButton.events.onInputOver.add(levelDecreaseClickOver, this);
    this.game.levelDecreaseButton.events.onInputOut.add(levelDecreaseClickOut, this);
    this.game.levelDecreaseButton.events.onInputDown.add(levelDecreaseClickDown, this);
};
/**
 * It bind the coin value increase button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindCoinValueIncreaseButton = function () {
    this.game.coinValueIncreaseButton.events.onInputUp.add(coinValueIncreaseClickUp, this);
    this.game.coinValueIncreaseButton.events.onInputOver.add(coinValueIncreaseOver, this);
    this.game.coinValueIncreaseButton.events.onInputOut.add(coinValueIncreaseOut, this);
    this.game.coinValueIncreaseButton.events.onInputDown.add(coinValueIncreaseClickDown, this);
};
/**
 * It bind the coin value decrease button with user input action such as mouse down, mouse over, mouse out and mouse up
 */
var bindCoinValueDecreaseButton = function () {
    this.game.coinValueDecreaseButton.events.onInputUp.add(coinValueDecreaseClickUp, this);
    this.game.coinValueDecreaseButton.events.onInputOver.add(coinValueDecreaseOver, this);
    this.game.coinValueDecreaseButton.events.onInputOut.add(coinValueDecreaseOut, this);
    this.game.coinValueDecreaseButton.events.onInputDown.add(coinValueDecreaseClickDown, this);
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse up action
 */
var autoplayClickUp = function () {
    if (this.game.imageAutoplay.y === this.coordinates.statsBlock.imageAutoplay.y) {
        this.game.add.tween(this.game.imageAutoplay).to({ y: this.coordinates.statsBlock.imageAutoplay.y - 10 }, 300, Phaser.Easing.Quadratic.In, true, 0, 0, true);
    }
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse over action
 */
var autoplayClickOver = function () {
    this.game.add.tween(this.game.imageAutoplay.scale).to({ x: 0.65, y: 1.3 }, 400, Phaser.Easing.Bounce.Out, true);
    this.game.imageAutoplay.tint = 200 * this.styles.statsBlock.label.hoverColor;
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse out action
 */
var autoplayClickOut = function () {
    this.game.add.tween(this.game.imageAutoplay.scale).to({ x: 0.65, y: 1 }, 250, 'Linear', true);
    this.game.imageAutoplay.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * It add easing tween effect to the 'Autoplay' text when user perform mouse down action
 */
var autoplayClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.imageAutoplay.tint = 200 * this.styles.statsBlock.label.hoverColor;
    this.game.angularContainer.isAutoHidden = !this.game.angularContainer.isAutoHidden;
};
/**
 * When user perform the mouse up action on the max bet this function is fired.
 * It activate spin in case the level is 10.
 * It set level to 10 if the level is less than 10
 */
var maxBetClickUp = function () {
    if (this.game.imageMaxBet.y === this.coordinates.statsBlock.imageMaxBet.y) {
        this.game.add.tween(this.game.imageMaxBet).to({ y: this.coordinates.statsBlock.imageMaxBet.y - 10 }, 300, Phaser.Easing.Quadratic.In, true, 0, 0, true);
    }
    if (this.stats.level !== this.game.angularContainer.gameData.maxBetLevel) {
        this.game.levelIncreaseButton.inputEnabled = false;
        this.game.levelIncreaseButton.alpha = 0.5;
        this.game.levelDecreaseButton.inputEnabled = true;
        this.game.levelDecreaseButton.alpha = 1;
        this.stats.level = this.game.angularContainer.gameData.maxBetLevel;
        this.game.levelTextButton.text = this.stats.level.toString();
        this.game.betTextButton.text = this.stats.bet * this.stats.level;
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    else {
        spinClick.apply(this);
    }
};
/**
 * It add easing tween effect to the 'Max bet' text when user perform mouse over action
 */
var maxBetClickOver = function () {
    this.game.add.tween(this.game.imageMaxBet.scale).to({ x: 0.65, y: 1.3 }, 250, 'Linear', true);
    this.game.imageMaxBet.tint = 200 * this.styles.statsBlock.label.hoverColor;
};
/**
 * It add easing tween effect to the 'Max bet' text when user perform mouse out action
 */
var maxBetClickOut = function () {
    this.game.add.tween(this.game.imageMaxBet.scale).to({ x: 0.65, y: 1 }, 250, 'Linear', true);
    this.game.imageMaxBet.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * It paly a sound when the user perform mouse down action
 */
var maxBetClickDown = function () {
    this.game.buttonClickSound.play();
};
var levelIncreaseClickUp = function () {
};
/**
 * Intailly the button is tinted with white color till the level is <=9
 */
var levelIncreaseClickOver = function () {
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level <= 9) {
        this.game.levelIncreaseButton.tint = 200 * this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when the user perform mouse out action on the button
 */
var levelIncreaseClickOut = function () {
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when the user perform mouse out action on the button
 */
var levelIncreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level === 9) {
        this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};
/**
 * Define the behaviour when user perform mouse down event on level decrease button
 */
var levelDecreaseClickUp = function () {
};
/**
 * Intailly the button is tinted with white color till the level is >1
 */
var levelDecreaseClickOver = function () {
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level > 1) {
        this.game.levelDecreaseButton.tint = 200 * this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when the user perform mouse out action on the button
 */
var levelDecreaseClickOut = function () {
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when the user perform mouse down action on the button
 */
var levelDecreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.levelIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.level === 2) {
        this.game.levelDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};
/**
 * Define the behaviour when user perform mouse up event on coin value increase button
 */
var coinValueIncreaseClickUp = function () {
};
/**
 * Define the behaviour when user perform mouse over event on coin value increase button
 */
var coinValueIncreaseOver = function () {
    this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel < this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
        this.game.coinValueIncreaseButton.tint = 200 * this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when user perform mouse out event on coin value increase button
 */
var coinValueIncreaseOut = function () {
    this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when user perform mouse down event on coin value increase button
 */
var coinValueIncreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel === this.stats.coinValueArray[this.stats.coinValueArrayLength - 2]) {
        this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};
/**
 * Define the behaviour when user perform mouse up event on coin value decrease button
 */
var coinValueDecreaseClickUp = function () {
};
/**
 * Define the behaviour when user perform mouse over event on coin value decrease button
 */
var coinValueDecreaseOver = function () {
    this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel > this.stats.coinValueArray[0]) {
        this.game.coinValueDecreaseButton.tint = 200 * this.styles.statsBlock.label.hoverColor;
    }
};
/**
 * Define the behaviour when user perform mouse out event on coin value decrease button
 */
var coinValueDecreaseOut = function () {
    this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
};
/**
 * Define the behaviour when user perform mouse down event on coin value decrease button
 */
var coinValueDecreaseClickDown = function () {
    this.game.buttonClickSound.play();
    this.game.coinValueIncreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    if (this.stats.coinLevel === this.stats.coinValueArray[1]) {
        this.game.coinValueDecreaseButton.tint = this.styles.statsBlock.label.whiteColor;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/event-handling.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/event-listner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listenExternal; });
/**
 * The function listen to the external event fired by the user and perform the appropriate function accordingly
 *
 * @param eventName define the name of the event namely toggle mute, auto play and auto stop
 *
 */
var listenExternal = function (eventName) {
    switch (eventName) {
        case this.game.angularContainer.gameCustomEvents.toggleMute:
            this.methods.toggleMute();
            break;
        case this.game.angularContainer.gameCustomEvents.autoPlay:
            this.methods.autoplayClickDownEventListner();
            break;
        case this.game.angularContainer.gameCustomEvents.autoStop:
            this.methods.autoplayClickDownEventListner();
            break;
        default:
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/event-listner.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backgroud_renderer__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/backgroud-renderer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bet_lines__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/bet-lines.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configure__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/configure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reel_renderer__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/reel-renderer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__panel_renderer__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/panel-renderer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_handling__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/event-handling.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jackpot_counter__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/jackpot-counter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__spin__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/spin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sounds__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/sounds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_listner__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/event-listner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__update_statistics__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/update-statistics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__jackpot_state_backlog__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/jackpot-state-backlog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__win_animations__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/win-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__enable_disable_controls__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/enable-disable-controls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auto_play__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/auto-play.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__jackpot_symbol__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/jackpot-symbol.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__scatter__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/main-screen-state/scatter.ts");

// state modules


















/**
 * The class defines the MainScreen State.
 * It will design the state and handle all the event for MainScreen state.
 */
var MainScreenState = (function () {
    /**
     * Represents the main-state of the slot game. The game-screen on which reels are visible and slot game is played.
     *  @param _httpservice An object of GamePageService type
     */
    function MainScreenState(_httpService) {
        this.name = 'MainScreen';
        this.isInitial = false;
        this.coordinates = {};
        this.config = new __WEBPACK_IMPORTED_MODULE_17__app_config__["a" /* AppConfig */]();
        this.stateAssets = {
            isWinAnimationOver: false,
            isAutoSpinActive: false,
            ready: false,
            colors: null,
            point: null,
            group: null,
            reels: [],
            reelCount: 5,
            randomNumbers: [],
            betLinesRight: [12, 18, 20, 16, 11, 14, 15, 17, 13, 19],
            betLinesLeft: [4, 2, 6, 8, 1, 10, 9, 7, 3, 5],
            betLinesCoordinates: [],
            tileCoordinates: [],
            betLineDetails: [],
            winAnimationTime: 2
        };
        this.volume = 1;
        this.httpService = _httpService;
        this.methods = {};
        this.winAnimations = {};
        this.isAutoPlayRunning = false;
        this.freeSpinsPending = -1;
        this.lastResponseBeforeFreeSpins = {};
        this.isScatterRunning = false;
    }
    /**
    * Define method for which is responsible for call jackpotHeader method for set the value of jackpot counter.
    */
    MainScreenState.prototype.getJackpotCash = function () {
        __WEBPACK_IMPORTED_MODULE_7__jackpot_counter__["a" /* jackpotHeader */].apply(this);
    };
    /**
    *  This function is called first. It should contain code to handle the loading of assets needed by your game
    */
    MainScreenState.prototype.preload = function () {
    };
    ;
    /**
    * The create function is called automatically once the preload has finished.
    * set the visibility of test panel and activate current test panel.
    * bind all the methods which is required further.
    * draw the state using drawbackground, drawpanel
    * set all the designs for main screen state and attached all the animations.
    */
    MainScreenState.prototype.create = function () {
        var _this = this;
        this.game.angularContainer.isJackpotTestModeHidden = true;
        this.game.angularContainer.isJackpotTestModeActive = false;
        this.methods.removeWinAnimations = __WEBPACK_IMPORTED_MODULE_13__win_animations__["a" /* removeWinAnimations */].bind(this);
        this.methods.showWinAnimations = __WEBPACK_IMPORTED_MODULE_13__win_animations__["b" /* showWinAnimations */].bind(this);
        this.methods.levelDecrease = __WEBPACK_IMPORTED_MODULE_11__update_statistics__["a" /* levelDecrease */].bind(this);
        this.methods.levelIncrease = __WEBPACK_IMPORTED_MODULE_11__update_statistics__["b" /* levelIncrease */].bind(this);
        this.methods.jackpotWinAnimation = __WEBPACK_IMPORTED_MODULE_13__win_animations__["c" /* jackpotWinAnimation */].bind(this);
        this.methods.coinValueDecrease = __WEBPACK_IMPORTED_MODULE_11__update_statistics__["c" /* coinValueDecrease */].bind(this);
        this.methods.coinValueIncrease = __WEBPACK_IMPORTED_MODULE_11__update_statistics__["d" /* coinValueIncrease */].bind(this);
        this.methods.winCalculations = __WEBPACK_IMPORTED_MODULE_11__update_statistics__["e" /* winCalculations */].bind(this);
        this.methods.enableButtonsOnSpin = __WEBPACK_IMPORTED_MODULE_14__enable_disable_controls__["a" /* enableButtonsOnSpin */].bind(this);
        this.methods.disableButtonsOnSpin = __WEBPACK_IMPORTED_MODULE_14__enable_disable_controls__["b" /* disableButtonsOnSpin */].bind(this);
        this.methods.hidePopUps = __WEBPACK_IMPORTED_MODULE_14__enable_disable_controls__["c" /* hidePopUps */].bind(this);
        this.methods.mockRandom = __WEBPACK_IMPORTED_MODULE_4__reel_renderer__["a" /* mockRandom */];
        this.methods.popUpMessageGenerator = __WEBPACK_IMPORTED_MODULE_0__shared__["c" /* popUpMessageGenerator */].bind(this);
        this.methods.toggleMute = __WEBPACK_IMPORTED_MODULE_9__sounds__["a" /* toggleMute */].bind(this);
        this.methods.externalEventListner = __WEBPACK_IMPORTED_MODULE_10__event_listner__["a" /* listenExternal */].bind(this);
        this.methods.autoSpin = __WEBPACK_IMPORTED_MODULE_6__event_handling__["a" /* spinClick */].bind(this);
        this.methods.autoplayClickDownEventListner = __WEBPACK_IMPORTED_MODULE_15__auto_play__["a" /* autoPlay */].bind(this);
        this.methods.resetAutoPlaySettings = __WEBPACK_IMPORTED_MODULE_15__auto_play__["b" /* resetAutoPlaySettings */].bind(this);
        this.methods.triggerPendingSpins = __WEBPACK_IMPORTED_MODULE_15__auto_play__["c" /* triggerPendingSpins */].bind(this);
        this.methods.revertScatterWinAnimations = __WEBPACK_IMPORTED_MODULE_13__win_animations__["d" /* revertScatterWinAnimations */].bind(this);
        this.methods.tweekReelWithRandom = __WEBPACK_IMPORTED_MODULE_6__event_handling__["b" /* tweekReelWithRandom */].bind(this);
        this.methods.updateReelsWithScatterFlags = __WEBPACK_IMPORTED_MODULE_18__scatter__["a" /* updateReelsWithScatterFlags */].bind(this);
        this.methods.updateReelsWithJackpotFlags = __WEBPACK_IMPORTED_MODULE_16__jackpot_symbol__["a" /* updateReelsWithjackpotSymbol */].bind(this);
        this.methods.JackpotStateBacklog = __WEBPACK_IMPORTED_MODULE_12__jackpot_state_backlog__["a" /* showpendingJackpotAnimations */].bind(this);
        __WEBPACK_IMPORTED_MODULE_3__configure__["a" /* configure */].apply(this);
        __WEBPACK_IMPORTED_MODULE_1__backgroud_renderer__["a" /* drawBackground */].apply(this);
        __WEBPACK_IMPORTED_MODULE_2__bet_lines__["a" /* configureBetLines */].apply(this);
        __WEBPACK_IMPORTED_MODULE_2__bet_lines__["b" /* drawBetLines */].apply(this);
        __WEBPACK_IMPORTED_MODULE_2__bet_lines__["c" /* drawGridLine */].apply(this);
        __WEBPACK_IMPORTED_MODULE_4__reel_renderer__["b" /* drawReels */].apply(this);
        __WEBPACK_IMPORTED_MODULE_5__panel_renderer__["a" /* drawPanels */].apply(this);
        __WEBPACK_IMPORTED_MODULE_5__panel_renderer__["b" /* addButtons */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["c" /* bindSpinButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["d" /* bindSpaceBarToSpin */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["e" /* bindInfoButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_9__sounds__["b" /* addMusic */].apply(this);
        __WEBPACK_IMPORTED_MODULE_13__win_animations__["e" /* drawWinToast */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["f" /* bindAutoplayButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["g" /* bindMaxBetButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["h" /* bindLevelIncreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["i" /* bindLevelDecreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["j" /* bindCoinValueIncreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["k" /* bindCoinValueDecreaseButton */].apply(this);
        __WEBPACK_IMPORTED_MODULE_6__event_handling__["l" /* bindStatsBlock */].apply(this);
        __WEBPACK_IMPORTED_MODULE_7__jackpot_counter__["b" /* addJackpotHeader */].apply(this);
        setInterval(function () {
            _this.getJackpotCash();
        }, this.config.Timeouts.jackpotCashInterval);
        if (this.game.angularContainer.isJackpotState) {
            this.methods.JackpotStateBacklog();
        }
    };
    ;
    /**
      * The update (and render) functions are called every frame.
      * resposible for reel spinning.
      * Define the animation on spin button.
      * Remove the diamond animation when they collide.
      */
    MainScreenState.prototype.update = function () {
        __WEBPACK_IMPORTED_MODULE_8__spin__["a" /* spin */].apply(this);
        __WEBPACK_IMPORTED_MODULE_8__spin__["b" /* animateBackground */].apply(this);
    };
    ;
    MainScreenState.prototype.render = function () {
        /* this.game.debug.start(450, 500, 'yellow');
           this.game.debug.line('mouse x');
           this.game.debug.line('mouse y');
           this.game.debug.stop();
    
           this.game.debug.start(550, 500, 'yellow');
           this.game.debug.line(":");
           this.game.debug.line(":");
           this.game.debug.stop();
    
           this.game.debug.start(560, 500, 'yellow');
           this.game.debug.line(this.game.input.mousePointer.x);
           this.game.debug.line(this.game.input.mousePointer.y);
           this.game.debug.stop();*/
    };
    ;
    return MainScreenState;
}());
/* harmony default export */ __webpack_exports__["a"] = (MainScreenState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/jackpot-counter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jackpotHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addJackpotHeader; });
/**
 * the function define for get the jackpot counter value
 */
var jackpotHeader = function () {
    var _this = this;
    this.httpService.getJackpotCounter()
        .subscribe(function (response) {
        _this.game.angularContainer.jackpotCounter = response.body.jackpotCounter;
        updateJackpotAmount.apply(_this);
    }, function (error) {
        console.log('error');
    }, function () { updateJackpotAmount.apply(_this); });
};
/**
 * the function add the jackpot value to the game main-screen state
 */
var addJackpotHeader = function () {
    var frameHeight = this.game.cache.getImage('jackpotCounterFrame').height / 5;
    var frameWidth = this.game.cache.getImage('jackpotCounterFrame').width;
    this.jackpotHeader = this.game.add.group();
    this.jackpotHeader.x = this.game.world.width - frameWidth + 30;
    this.jackpotHeader.y = -15;
    var bmd = this.game.add.bitmapData(frameWidth, frameHeight);
    bmd.ctx.beginPath();
    bmd.ctx.moveTo(100, (frameHeight / 2) - 23);
    bmd.ctx.lineTo(400, (frameHeight / 2) - 23);
    bmd.ctx.moveTo(100, (frameHeight / 2) - 15);
    bmd.ctx.lineTo(400, (frameHeight / 2) - 15);
    bmd.ctx.moveTo(100, (frameHeight / 2) + 15);
    bmd.ctx.lineTo(400, (frameHeight / 2) + 15);
    bmd.ctx.moveTo(100, (frameHeight / 2) + 23);
    bmd.ctx.lineTo(400, (frameHeight / 2) + 23);
    bmd.ctx.lineWidth = 5;
    bmd.ctx.strokeStyle = '#ffdd66';
    bmd.ctx.stroke();
    var jackpotCounterFrameHolder = this.game.add.sprite(150, frameHeight / 2, bmd);
    jackpotCounterFrameHolder.anchor.setTo(0.5);
    var jackpotCounterFrame = this.game.add.sprite(frameWidth / 2, frameHeight / 2, 'jackpotCounterFrame', 5);
    jackpotCounterFrame.anchor.setTo(0.5);
    jackpotCounterFrame.scale.setTo(0.7);
    jackpotCounterFrame.animations.add('blink', [0, 1, 2, 3, 4], 1, true);
    jackpotCounterFrame.play('blink', 12, true);
    this.jackpotLable = this.game.add.text(frameWidth / 2, (frameHeight / 2) - 10, 'JACKPOT');
    this.jackpotLable.anchor.setTo(0.5);
    this.jackpotLable.font = 'Arial Black';
    this.jackpotLable.fontSize = 24;
    this.jackpotLable.stroke = '#284';
    this.jackpotLable.strokeThickness = 0.5;
    this.jackpotLable.fill = '#aa4';
    this.jackpotLable.smoothed = false;
    this.jackpotCounterValue = this.game.add.text(frameWidth / 2, (frameHeight / 2) + 15, '');
    this.jackpotCounterValue.anchor.setTo(0.5);
    this.jackpotCounterValue.font = 'Arial Black';
    this.jackpotCounterValue.fontSize = 24;
    this.jackpotCounterValue.stroke = '#000';
    this.jackpotCounterValue.strokeThickness = 1;
    this.jackpotCounterValue.fill = '#c24';
    this.jackpotCounterValue.smoothed = false;
    this.jackpotCounterValue.text = '$' + this.game.angularContainer.jackpotCounter;
    this.jackpotHeader.add(jackpotCounterFrameHolder, true);
    this.jackpotHeader.add(jackpotCounterFrame, true);
    this.jackpotHeader.add(this.jackpotCounterValue, true);
    this.jackpotHeader.add(this.jackpotLable, true);
    addJacpotAnimations.apply(this);
};
/**
 * the function add the animations to jackpot header
 */
var addJacpotAnimations = function () {
    var _this = this;
    var colorBlend = { step: 0 };
    var colorTween = this.game.add.tween(colorBlend).to({ step: 100 }, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    colorTween.onUpdateCallback(function () {
        _this.jackpotLable.tint = Phaser.Color.interpolateColor(0xff6622, 0xaaff00, 100, colorBlend.step);
    });
    colorTween.start();
    colorTween.onComplete.add(function () {
        _this.jackpotLable.tint = 0xbebe00;
    });
    this.game.add.tween(this.jackpotLable)
        .to({ alpha: 0.9 }, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
};
/**
 * the function define for update the value of jackpot header
 */
var updateJackpotAmount = function () {
    if ('$' + this.game.angularContainer.jackpotCounter !== this.jackpotCounterValue.text) {
        this.jackpotCounterValue.text = '$' + this.game.angularContainer.jackpotCounter;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-counter.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/jackpot-state-backlog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showpendingJackpotAnimations; });
/**
 * the function define for make the state same again as before move the
 * jackpot state. enable the all the asset and set the spin response
 */
var showpendingJackpotAnimations = function () {
    this.methods.disableButtonsOnSpin();
    this.game.scatterBackgroundScore.play();
    this.spinResponse = this.jackpotLastResponse;
    this.methods.tweekReelWithRandom.apply(this, [false, true]);
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-state-backlog.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/jackpot-symbol.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateReelsWithjackpotSymbol; });
/**
 * the function define for update the  reels data with jackpot symbol
 * and update the jackpot array
 */
var updateReelsWithjackpotSymbol = function () {
    var _this = this;
    this.jackpotArray = [];
    var _loop_1 = function (reel) {
        var preIndex = Number.MIN_SAFE_INTEGER;
        var isjackpotSymbolPresent = false;
        this_1.spinResponse.randomNumbers.forEach(function (item, index) {
            index = index + 1;
            if ((index > ((reel.number - 1) * 3)) && (index <= (reel.number * 3)) && (item === 'Z')) {
                isjackpotSymbolPresent = true;
                if (index - preIndex > 2) {
                    preIndex = index;
                    _this.jackpotArray.push(preIndex);
                }
            }
        });
    };
    var this_1 = this;
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_1(reel);
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-symbol.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/panel-renderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addButtons; });
/**
 * the function define for draw panel.
 * add the images to pannel area(bottom area of main screen)
 */
var drawPanels = function () {
    this.game.cockpitGlass = this.game.add.image(0, 0, 'broken-glass-line');
    this.game.cockpitGlass.alpha = 0.4;
    this.game.cockpitHeader = this.game.add.image(0, -120, 'cockpit-header');
    var imageHeight = this.game.cache.getImage('cockpit-panel').height;
    this.game.cockpitPanel = this.game.add.image(0, this.game.height - imageHeight, 'cockpit-panel');
};
/**
 * the function define for add the button to the panel area(bottom area of main screen),
 * design all the panel area, set the font
 */
var addButtons = function () {
    this.game.spinButton = this.game.add.button(this.coordinates.statsBlock.spinButton.x, this.coordinates.statsBlock.spinButton.y, 'spinButton', this.spin, this, 1, 0, 2);
    this.game.spinButton.anchor.set(0.5);
    this.game.spinButton.scale.setTo(0.6, 0.5);
    this.game.maxBetButton = this.game.add.button(this.coordinates.statsBlock.maxBetButton.x, this.coordinates.statsBlock.maxBetButton.y, 'maxBetButton', this.spin, this, 1, 0, 2);
    this.game.autoPlayButton = this.game.add.button(this.coordinates.statsBlock.autoPlayButton.x, this.coordinates.statsBlock.autoPlayButton.y, 'autoplayButton', this.spin, this, 1, 0, 2);
    this.game.levelTextButton = this.game.add.text(this.coordinates.statsBlock.levelText.x, this.coordinates.statsBlock.levelText.y, this.stats.intialLevel);
    this.game.levelTextButton.stroke = this.styles.statsBlock.label.strokeColor;
    this.game.levelTextButton.strokeThickness = 1;
    this.game.levelTextButton.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.levelTextButton.fill = this.styles.statsBlock.label.color;
    this.game.levelTextButton.anchor.set(0.5);
    this.game.totalCoinsButton = this.game.add.text(this.coordinates.statsBlock.totalCoinsText.x, this.coordinates.statsBlock.totalCoinsText.y, this.stats.totalCoins);
    this.game.totalCoinsButton.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.totalCoinsButton.fill = this.styles.statsBlock.label.color;
    this.game.totalCoinsButton.anchor.set(0.5);
    this.game.totalCoinsButton.stroke = this.styles.statsBlock.label.strokeColor;
    this.game.totalCoinsButton.strokeThickness = 1;
    this.game.coinValueText = this.game.add.text(this.coordinates.statsBlock.coinValueText.x, this.coordinates.statsBlock.coinValueText.y, this.stats.IntialCoinValue);
    this.game.coinValueText.stroke = this.styles.statsBlock.label.strokeColor;
    this.game.coinValueText.strokeThickness = 1;
    this.game.coinValueText.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.coinValueText.fill = this.styles.statsBlock.label.color;
    this.game.coinValueText.anchor.set(0.5);
    this.game.betTextButton = this.game.add.text(this.coordinates.statsBlock.betText.x, this.coordinates.statsBlock.betText.y, this.stats.bet);
    this.game.betTextButton.fontSize = this.styles.statsBlock.label.fontSize;
    this.game.betTextButton.fill = this.styles.statsBlock.label.color;
    this.game.betTextButton.anchor.set(0.5);
    this.game.betTextButton.stroke = this.styles.statsBlock.label.strokeColor;
    this.game.betTextButton.strokeThickness = 1;
    this.game.levelIncreaseButton = this.game.add.image(this.coordinates.statsBlock.levelIncreaseButton.x, this.coordinates.statsBlock.levelIncreaseButton.y, 'rightArrow');
    this.game.levelIncreaseButton.scale.setTo(0.8);
    this.game.levelDecreaseButton = this.game.add.image(this.coordinates.statsBlock.levelDecreaseButton.x, this.coordinates.statsBlock.levelDecreaseButton.y, 'leftArrow');
    this.game.levelDecreaseButton.scale.setTo(0.8);
    this.game.levelDecreaseButton.alpha = 0.5;
    this.game.coinValueIncreaseButton = this.game.add.image(this.coordinates.statsBlock.coinValueIncreaseButton.x, this.coordinates.statsBlock.coinValueIncreaseButton.y, 'rightArrow');
    this.game.coinValueIncreaseButton.scale.setTo(0.8);
    this.game.coinValueDecreaseButton = this.game.add.image(this.coordinates.statsBlock.coinValueDecreaseButton.x, this.coordinates.statsBlock.coinValueDecreaseButton.y, 'leftArrow');
    this.game.coinValueDecreaseButton.scale.setTo(0.8);
    this.game.coinValueDecreaseButton.alpha = 0.5;
    this.game.fontAutoplay = this.game.add.retroFont('RetroFontStatsBlock', 16, 15, Phaser.RetroFont.TEXT_SET6, 20, 0, 0);
    this.game.fontAutoplay.text = 'AUTOPLAY';
    this.game.imageAutoplay = this.game.add.image(this.coordinates.statsBlock.imageAutoplay.x, this.coordinates.statsBlock.imageAutoplay.y, this.game.fontAutoplay);
    this.game.imageAutoplay.anchor.set(0.5);
    this.game.imageAutoplay.scale.setTo(0.65, 1);
    this.game.fontMaxBet = this.game.add.retroFont('RetroFontStatsBlock', 16, 15, Phaser.RetroFont.TEXT_SET6, 20, 0, 0);
    this.game.fontMaxBet.text = 'MAX BET';
    this.game.imageMaxBet = this.game.add.image(this.coordinates.statsBlock.imageMaxBet.x, this.coordinates.statsBlock.imageMaxBet.y, this.game.fontMaxBet);
    this.game.imageMaxBet.anchor.set(0.5);
    this.game.imageMaxBet.scale.setTo(0.65, 1);
    this.game.fontBet = this.game.add.retroFont('RetroFontStatsBlock', 16, 15, Phaser.RetroFont.TEXT_SET6, 20, 0, 0);
    this.game.fontBet.text = 'BET';
    this.game.imageBet = this.game.add.image(this.coordinates.statsBlock.imageBet.x, this.coordinates.statsBlock.imageBet.y, this.game.fontBet);
    this.game.imageBet.anchor.set(0.5);
    this.game.imageBet.scale.setTo(0.45, 0.7);
    this.game.fontLevel = this.game.add.retroFont('RetroFontStatsBlock', 16, 15, Phaser.RetroFont.TEXT_SET6, 20, 0, 0);
    this.game.fontLevel.text = 'LEVEL';
    this.game.imageLevel = this.game.add.image(this.coordinates.statsBlock.imageLevel.x, this.coordinates.statsBlock.imageLevel.y, this.game.fontLevel);
    this.game.imageLevel.anchor.set(0.5);
    this.game.imageLevel.scale.setTo(0.45, 0.7);
    this.game.fontCoinValue = this.game.add.retroFont('RetroFontStatsBlock', 16, 15, Phaser.RetroFont.TEXT_SET6, 20, 0, 0);
    this.game.fontCoinValue.text = 'COIN\n VALUE';
    this.game.imageCoinValue = this.game.add.image(this.coordinates.statsBlock.imageCoinValue.x, this.coordinates.statsBlock.imageCoinValue.y, this.game.fontCoinValue);
    this.game.imageCoinValue.anchor.set(0.5);
    this.game.imageCoinValue.scale.setTo(0.45, 0.7);
    this.game.fontCoins = this.game.add.retroFont('RetroFontStatsBlock', 16, 15, Phaser.RetroFont.TEXT_SET6, 20, 0, 0);
    this.game.fontCoins.text = 'COINS';
    this.game.imageCoins = this.game.add.image(this.coordinates.statsBlock.imageCoins.x, this.coordinates.statsBlock.imageCoins.y, this.game.fontCoins);
    this.game.imageCoins.anchor.set(0.5);
    this.game.imageCoins.scale.setTo(0.45, 0.7);
    // The button deals with the paytable functionality.
    this.game.infoButton = this.game.add.sprite(this.coordinates.statsBlock.infoButton.x, this.coordinates.statsBlock.infoButton.y, 'info');
    this.game.infoButton.anchor.set(0.5);
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/panel-renderer.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/reel-renderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return drawReels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mockRandom; });
/**
 * the function defined for generate random number form start number
 * @param start An number from random number generation start.
 * @param end An number for max limit index for random number gererations.
 * @return an random number in the range of start index to start+end
 */
var mockRandom = function (start, end) {
    return Math.floor(Math.random() * end) + start;
};
/**
 * the function define for design the reel, add the symbol to the reel
 * add all the information to the reel which is required
 */
var drawReels = function () {
    var d = this.dimensions.reel;
    for (var reelCounter = 0; reelCounter < this.stateAssets.reelCount; reelCounter++) {
        var reel = this.game.add.group();
        reel.isSpinning = false;
        reel.spinSpeed = 0;
        reel.spinTimeStamp = 0;
        reel.number = reelCounter + 1;
        this.stateAssets.reels.push(reel);
        this.stateAssets.reels[reelCounter].y = d.reelY - d.blurContentHeight - d.tilesTop;
        this.stateAssets.reels[reelCounter].x = d.tilesLeft + d.tileWidth * reelCounter;
        var reelBlurred1 = this.game.add.sprite(d.tilesTop, 0, 'reel-blurred'); // tilesTop
        var reelBlurred2 = this.game.add.sprite(d.tilesTop, d.blurReelHeight, 'reel-blurred');
        var symbol1 = this.game.add.sprite(d.tilesTop, 0, 'reel', mockRandom(3, 7));
        var symbol2 = this.game.add.sprite(d.tilesTop, 0, 'reel', reel.number);
        var symbol3 = this.game.add.sprite(d.tilesTop, 0, 'reel', reel.number + 2);
        var symbol4 = this.game.add.sprite(d.tilesTop, 0, 'reel', reel.number);
        var symbol5 = this.game.add.sprite(d.tilesTop, 0, 'reel', mockRandom(3, 7));
        var symbol6 = this.game.add.sprite(d.tilesTop, 0, 'reel', mockRandom(3, 7));
        var symbol7 = this.game.add.sprite(d.tilesTop, 0, 'reel', mockRandom(3, 7));
        symbol1.y = d.blurContentHeight + d.tileHeight / 2;
        symbol2.y = d.blurContentHeight + (1 * d.tileHeight) + d.tileHeight / 2;
        symbol3.y = d.blurContentHeight + (2 * d.tileHeight) + d.tileHeight / 2;
        symbol4.y = d.blurContentHeight + (3 * d.tileHeight) + d.tileHeight / 2;
        symbol5.y = d.blurContentHeight + (4 * d.tileHeight) + d.tileHeight / 2;
        symbol6.y = d.blurContentHeight + (5 * d.tileHeight) + d.tileHeight / 2;
        symbol7.y = d.blurContentHeight + (6 * d.tileHeight) + d.tileHeight / 2;
        symbol1.data.isLandingSymbol = false;
        symbol2.data.isLandingSymbol = true;
        symbol2.data.tileNumber = (3 * reelCounter) + 1;
        symbol3.data.isLandingSymbol = true;
        symbol3.data.tileNumber = (3 * reelCounter) + 2;
        symbol4.data.isLandingSymbol = true;
        symbol4.data.tileNumber = (3 * reelCounter) + 3;
        symbol5.data.isLandingSymbol = false;
        symbol6.data.isLandingSymbol = false;
        symbol7.data.isLandingSymbol = false;
        symbol1.anchor.set(0.5);
        symbol2.anchor.set(0.5);
        symbol3.anchor.set(0.5);
        symbol4.anchor.set(0.5);
        symbol5.anchor.set(0.5);
        symbol6.anchor.set(0.5);
        symbol7.anchor.set(0.5);
        reelBlurred1.anchor.set(0.5, 0);
        reelBlurred2.anchor.set(0.5, 0);
        this.stateAssets.reels[reelCounter].add(reelBlurred1, true);
        this.stateAssets.reels[reelCounter].add(reelBlurred2, true);
        this.stateAssets.reels[reelCounter].add(symbol1, true);
        this.stateAssets.reels[reelCounter].add(symbol2, true);
        this.stateAssets.reels[reelCounter].add(symbol3, true);
        this.stateAssets.reels[reelCounter].add(symbol4, true);
        this.stateAssets.reels[reelCounter].add(symbol5, true);
        this.stateAssets.reels[reelCounter].add(symbol6, true);
        this.stateAssets.reels[reelCounter].add(symbol7, true);
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/reel-renderer.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/scatter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateReelsWithScatterFlags; });
/**
 * the function define for check scatter symbol in reels
 * if scatter symbol is available then add to the scatter array
 */
var updateReelsWithScatterFlags = function () {
    // Variable for a single spin.
    var scattersLanded = 0;
    var stopLag = 0;
    var _loop_1 = function (reel) {
        var isScatterSymbolPresent = false;
        this_1.spinResponse.randomNumbers.forEach(function (item, index) {
            index = index + 1;
            if ((index > ((reel.number - 1) * 3)) && (index <= (reel.number * 3)) && (item === 'S')) {
                isScatterSymbolPresent = true;
            }
        });
        // Calculating this as per the
        // previous landed scatter's count.
        var isScatterImpossible = false;
        if (reel.number === 4) {
            isScatterImpossible = scattersLanded <= 0;
        }
        else if (reel.number === 5) {
            isScatterImpossible = scattersLanded <= 1;
        }
        // now appending the scatter count to be used for future reels.
        if (isScatterSymbolPresent) {
            scattersLanded++;
        }
        reel.isScatterSoundNeeded = isScatterSymbolPresent && !isScatterImpossible && this_1.freeSpinsPending < 0;
        if (reel.number < 4) {
            // Initialy zero, for the first reel
            reel.stopLag = stopLag;
            // Now is the time to decide and set the stop-lag
            // which is to be set for the next reel
            stopLag += (scattersLanded > 0) && !isScatterImpossible && this_1.freeSpinsPending < 0 ? 2 : 0.3;
        }
        else if (reel.number === 4) {
            // for second last reel we will skip this step because
            // isScatterImpossible is being calculated according to
            // previous reels.
            // Instead we will do it for the last reel then and there.
            reel.stopLag = stopLag;
        }
        else if (reel.number === 5) {
            // If there are no possibilities of scatter win
            // set the stop-lag to usual
            stopLag += (scattersLanded > 0) && !isScatterImpossible && this_1.freeSpinsPending < 0 ? 2 : 0.3;
            reel.stopLag = stopLag;
        }
    };
    var this_1 = this;
    // Calculations for each reel.
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_1(reel);
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/scatter.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/sounds.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toggleMute; });
/**
 * It add different type of audio's required in the game and play only the background image.
 */
var addMusic = function () {
    this.game.backgroundScore = this.game.add.audio('backgroundScore', this.game.angularContainer.volume * this.soundVolumeMultipliers.backgroundScore, true);
    this.game.spinSound = this.game.add.audio('spinSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.spinSound);
    this.game.winSound = this.game.add.audio('winSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.winSound);
    this.game.reelStopSound = this.game.add.audio('reelStopSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.reelStopSound);
    this.game.buttonClickSound = this.game.add.audio('buttonClickSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.buttonClickSound);
    this.game.scatterBackgroundScore = this.game.add.audio('ScatterBackgroundScore', this.game.angularContainer.volume * this.soundVolumeMultipliers.ScatterBackgroundScore);
    this.game.ScatterStopSound = this.game.add.audio('ScatterStopSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.ScatterStopSound);
    this.game.spinningSound = this.game.add.audio('spinningSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.spinningSound);
    this.game.scatterSpinningSound = this.game.add.audio('scatterSpinningSound', this.game.angularContainer.volume * this.soundVolumeMultipliers.scatterSpinningSound);
    // play background Sound
    this.game.backgroundScore.play();
};
/**
 * The function toggel the music/audio when clicked on volume button
 */
var toggleMute = function () {
    if (this.game.angularContainer.muteAudio) {
        this.volume = 0;
        this.game.sound.volume = this.volume;
    }
    else {
        this.volume = 1;
        this.game.sound.volume = this.volume;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/sounds.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/spin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return animateBackground; });
/**
 * The function is responsible for moving the reel along y-axis
 */
var spinAnimate = function () {
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        reel.y += reel.spinSpeed;
        if (reel.y >= 0) {
            reel.y = -990;
        }
    }
};
/**
 * The function handle
 * 1.the speed of the reels
 * 2.in case the reels have scatter symbol a different audio is played.
 * 3. if there is a win it initiaite the win animations and calculate the win
 * 4.Enable/disable the control by checking the auto spinning and scatter is running or not
 */
var varySpeed = function () {
    var _this = this;
    var _loop_1 = function (reel) {
        var maxSpeed = 50; // 0 + 2500/50
        if (reel.isSpinning) {
            if (reel.spinTimeStamp < 100) {
                // to check - if (reel.spinTimeStamp < ("20*reel.number - " + (20*reel.number))) {
                // console.log("20*reel.number - " + (20*reel.number));
                // console.log("reel.spinTimeStamp" + reel.spinTimeStamp);
                // console.log("reel.spinSpeed" + reel.spinSpeed);
                //
                // currently this is breaking
                // the spin stopping functionality.
                // but we need to achieve different spin start lifting heights for different reels.
                //
                reel.spinTimeStamp += 10;
                reel.spinSpeed = -reel.spinTimeStamp / 20;
            }
            else if (reel.spinTimeStamp < 2500) {
                reel.spinTimeStamp += 50;
                reel.spinSpeed = reel.spinTimeStamp / 50;
            }
        }
        else {
            if (reel.spinSpeed > 0) {
                reel.spinTimeStamp = 0;
                reel.spinSpeed = 0;
                reel.y = this_1.coordinates.reelY - 1980 - 110 - 330; // some offset;
                var reelSpinStopTween = this_1.game.add.tween(reel)
                    .to({ y: this_1.coordinates.reelY - 1980 - 110 }, 350, Phaser.Easing.Sinusoidal.Out, true);
                reelSpinStopTween.onComplete.add(function () {
                    if (reel.isScatterSoundNeeded) {
                        _this.game.ScatterStopSound.play();
                        _this.game.scatterSpinningSound.play();
                    }
                    else {
                        _this.game.reelStopSound.play();
                    }
                    reel.spinTimeStamp = 0;
                    reel.spinSpeed = 0;
                    if (reel.number === _this.stateAssets.reelCount) {
                        _this.game.spinningSound.stop();
                        _this.game.scatterSpinningSound.stop();
                        // handling the spin response
                        if (_this.spinResponse.gameId) {
                            _this.methods.winCalculations(_this.spinResponse);
                            _this.methods.showWinAnimations(_this.spinResponse);
                        }
                        if (!_this.isAutoPlayRunning && !_this.isScatterRunning) {
                            _this.methods.enableButtonsOnSpin();
                        }
                        else {
                            _this.methods.disableButtonsOnSpin();
                        }
                    }
                });
            }
        }
    };
    var this_1 = this;
    for (var _i = 0, _a = this.stateAssets.reels; _i < _a.length; _i++) {
        var reel = _a[_i];
        _loop_1(reel);
    }
};
/**
 * The function intiate the spinning of reels, movement of the reels
 */
var spin = function () {
    var boundSpinAnimate = spinAnimate.bind(this);
    boundSpinAnimate();
    var boundVarySpeed = varySpeed.bind(this);
    boundVarySpeed();
};
/**
 * The function is called in update and handle the movement of backround image in space storm.
 */
var animateBackground = function () {
    this.game.background.angle += 0.03;
    if (this.stateAssets.isSpinning) {
        this.game.background.angle += 0.06;
    }
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/spin.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/update-statistics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levelDecrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return levelIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return coinValueIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return coinValueDecrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return winCalculations; });
/**
 * The function is called when the user decrease the level, thus changing the bet in euro and bet.
 */
var levelDecrease = function () {
    if ((this.stats.level > 1) && (this.stats.level <= this.gameData.maxBetLevel)) {
        if (this.stats.level === this.gameData.maxBetLevel) {
            this.game.levelIncreaseButton.inputEnabled = true;
            this.game.levelIncreaseButton.alpha = 1;
        }
        this.stats.level--;
        this.game.levelTextButton.text = this.stats.level.toString();
        this.game.betTextButton.text = this.stats.bet * this.stats.level;
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index];
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.level === 1) {
        this.game.levelDecreaseButton.inputEnabled = false;
        this.game.levelDecreaseButton.alpha = 0.5;
    }
};
/**
 * The function is called when the user increase the level, thus changing the bet in euro and bet.
 */
var levelIncrease = function () {
    if (this.stats.level < this.gameData.maxBetLevel) {
        if (this.stats.level === 1) {
            this.game.levelDecreaseButton.inputEnabled = true;
            this.game.levelDecreaseButton.alpha = 1;
        }
        this.stats.level++;
        this.game.levelTextButton.text = this.stats.level.toString();
        this.game.betTextButton.text = this.stats.bet * this.stats.level;
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index];
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.level === this.gameData.maxBetLevel) {
        this.game.levelIncreaseButton.inputEnabled = false;
        this.game.levelIncreaseButton.alpha = 0.5;
    }
};
/**
 * The function is called when the user increase the coin value, thus changing the bet in euro and coins.
 */
var coinValueIncrease = function () {
    if (this.stats.coinLevel < this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
        if (this.stats.coinLevel === this.stats.IntialCoinValue) {
            this.game.coinValueDecreaseButton.inputEnabled = true;
            this.game.coinValueDecreaseButton.alpha = 1;
        }
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index + 1];
        this.game.coinValueText.text = this.stats.coinValueArray[index + 1];
        this.stats.calculateTotalCoins = Math.floor(this.stats.calculateTotalCash / this.stats.coinLevel);
        this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.coinLevel === this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
        this.game.coinValueIncreaseButton.inputEnabled = false;
        this.game.coinValueIncreaseButton.alpha = 0.5;
    }
};
/**
 * The function is called when the user decrease the coin value, thus changing the bet in euro and coins.
 */
var coinValueDecrease = function () {
    if ((this.stats.coinLevel > this.stats.coinValueArray[0]) &&
        (this.stats.coinLevel <= this.stats.coinValueArray[this.stats.coinValueArrayLength - 1])) {
        if (this.stats.coinLevel === this.stats.coinValueArray[this.stats.coinValueArrayLength - 1]) {
            this.game.coinValueIncreaseButton.inputEnabled = true;
            this.game.coinValueIncreaseButton.alpha = 1;
        }
        var index = this.stats.coinValueArray.indexOf(this.stats.coinLevel);
        this.stats.coinLevel = this.stats.coinValueArray[index - 1];
        this.game.coinValueText.text = this.stats.coinValueArray[index - 1];
        this.stats.calculateTotalCoins = Math.floor(this.stats.calculateTotalCash / this.stats.coinLevel);
        this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
        this.gameData.maxBet = Math.round(((this.stats.bet * this.stats.level) * this.stats.coinLevel) * 100) / 100;
    }
    if (this.stats.coinLevel === this.stats.IntialCoinValue) {
        this.game.coinValueDecreaseButton.inputEnabled = false;
        this.game.coinValueDecreaseButton.alpha = 0.5;
    }
};
/**
 * The function update the statistics block in case the user win prize
 * @param spinResponse The response of post spin data i.e. the data recieved from backend when the user spin the reel
 */
var winCalculations = function (spinResponse) {
    this.stats.calculateTotalCash = Math.round(this.spinResponse.cash * 100) / 100;
    this.game.angularContainer.gameData.cash = this.stats.calculateTotalCash;
    this.stats.calculateTotalCoins = Math.round(this.stats.calculateTotalCash / this.stats.coinLevel);
    this.game.totalCoinsButton.text = this.stats.calculateTotalCoins;
    this.game.angularContainer.gameData.win = Math.round((this.spinResponse.prize * this.stats.coinLevel) * 100) / 100;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/update-statistics.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/main-screen-state/win-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return drawWinToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showWinAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeWinAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return revertScatterWinAnimations; });
/* unused harmony export moveToJackpotState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return jackpotWinAnimation; });
/**
 * Draw win toast when the user win a prize
 *
 * @param topOffset Define the hieght from the top where the toast should be displayed
 *
 */
var drawToast = function (topOffset) {
    var bmd = this.game.add.bitmapData(this.game.world.width, 70, 'winToast');
    var gradientIncrease = bmd.ctx.createLinearGradient(0, 0, this.game.world.width / 2, 0);
    gradientIncrease.addColorStop(0, this.styles.toastMessages.colorGradientEdges);
    gradientIncrease.addColorStop(1, this.styles.toastMessages.colorGradientCenter);
    bmd.ctx.fillStyle = gradientIncrease;
    bmd.ctx.fillRect(0, 0, this.game.world.width / 2, 70);
    var gradientDecrease = bmd.ctx.createLinearGradient(this.game.world.width / 2, 0, this.game.world.width, 0);
    gradientDecrease.addColorStop(0, this.styles.toastMessages.colorGradientCenter);
    gradientDecrease.addColorStop(1, this.styles.toastMessages.colorGradientEdges);
    bmd.ctx.fillStyle = gradientDecrease;
    bmd.ctx.fillRect(this.game.world.width / 2, 0, this.game.world.width / 2, 70);
    return this.game.add.sprite(0, topOffset, bmd);
};
/**
 * Draw the background of winning lines
 *
 * @param x X- cordinate of the winning line
 * @param y Y- cordinate of the winning line
 * @return the sprite
 *
 */
var drawLineWinBackdrop = function (x, y) {
    var bmd = this.game.add.bitmapData(200, 200, 'lineWinBackdrop');
    var gradientIncrease = bmd.ctx.createRadialGradient(100, 100, 10, 100, 100, 90);
    gradientIncrease.addColorStop(0, this.styles.lineWinBackdrop.colorGradientCenter);
    gradientIncrease.addColorStop(1, this.styles.lineWinBackdrop.colorGradientEdges);
    bmd.ctx.fillStyle = gradientIncrease;
    bmd.ctx.fillRect(0, 0, 200, 200);
    var sprite = this.game.add.sprite(x, y, bmd);
    sprite.anchor.setTo(0.5);
    return sprite;
};
/**
 * The function intiate the drawing of winning lines
 */
var drawWinToast = function () {
    var boundDrawToast = drawToast.bind(this, 10);
    this.game.winToast = boundDrawToast();
    this.game.winToast.alpha = 0;
};
var tweenTint = function (obj, startColor, endColor, time) {
    if (obj) {
        var colorBlend_1 = { step: 0 };
        var colorTween = this.game.add.tween(colorBlend_1).to({ step: 100 }, time);
        colorTween.onUpdateCallback(function () {
            obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend_1.step);
        });
        obj.tint = startColor;
        colorTween.start();
        colorTween.onComplete.add(function () {
            obj.tint = startColor;
        });
    }
};
/**
 * Remove the ongoing win animations.
 */
var removeWinAnimations = function () {
    var _this = this;
    this.stateAssets.reels.forEach(function (reel, index) {
        for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.data.isLandingSymbol) {
                child.scale.setTo(1);
                child.angle = 0;
            }
        }
    }, this);
    this.game.winSound.stop();
    if (this.winAnimations.events) {
        this.winAnimations.events.forEach(function (event) {
            _this.game.time.events.remove(event);
        });
    }
    if (this.winAnimations.tweens) {
        this.winAnimations.tweens.forEach(function (tween) {
            tween.stop();
        });
    }
    this.game.winToast.alpha = 0;
    if (this.winAnimations.timerForBlinking) {
        this.winAnimations.timerForBlinking.stop();
        this.winAnimations.timerForBlinking.destroy();
    }
    if (this.winAnimations.line) {
        for (var i = 0; i < this.winAnimations.line.length; i++) {
            this.winAnimations.line[i].lineNumberSprite.alpha = 0.5;
            this.winAnimations.line[i].winSprite.visible = false;
            this.winAnimations.line[i].lineNumberSprite.scale.setTo(1);
            this.winAnimations.line[i].lineNumberSprite.tint = 255 * this.styles.statsBlock.label.yellowColor;
        }
    }
    if (this.winAnimations.winText) {
        this.winAnimations.winText.text = '';
    }
    // this.winAnimations.lineWinText.text = '';
    if (this.winAnimations.lineSplash) {
        this.winAnimations.lineSplash.removeChild(this.winAnimations.lineWinText);
        this.winAnimations.lineSplash.destroy();
    }
    if (this.winAnimations.scatterWinText) {
        this.winAnimations.scatterWinText.text = '';
    }
    if (this.winAnimations.bigWinText) {
        this.winAnimations.bigWinText.text = '';
        this.game.winShowerEmitter.visible = false;
    }
};
/**
 * Handle win animations and there display depending on whether it is a normal win or big win
 * @param response Define the response of spin from backened
 */
var showWinnings = function (response) {
    var winningLinesCount = 0;
    for (var _i = 0, _a = response.betLineData; _i < _a.length; _i++) {
        var winningLine = _a[_i];
        for (var _b = 0, _c = this.stateAssets.betLineDetails; _b < _c.length; _b++) {
            var line = _c[_b];
            if (winningLine.betLineNumber === line.lineNumber) {
                this.winAnimations.line.push(line);
                showWinAnimationForALine.apply(this, [winningLine, line, winningLinesCount]);
                winningLinesCount++;
            }
        }
    }
    this.winAnimations.winText = this.game.add.text(this.game.world.centerX, 45, '');
    var winShowerTween;
    if (response.prize > 0) {
        if (response.prize >= (response.bet * this.bigWinThreashHoldMultiplier)) {
            bigWinAnimationCounter.apply(this);
            this.game.winShowerEmitter.x = this.game.world.width;
            this.game.winShowerEmitter.visible = true;
            winShowerTween = this.game.add.tween(this.game.winShowerEmitter)
                .to({ x: -1 }, 2500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            this.winAnimations.tweens.push(winShowerTween);
        }
        this.winAnimations.timerForBigWin = this.game.time.create(false);
        this.winAnimations.timerForBigWin.loop(10, function () {
        }, this);
        this.winAnimations.timerForBigWin.start();
        this.methods.hidePopUps();
        var winToastTween = this.game.add.tween(this.game.winToast).to({ alpha: 1 }, 1500, 'Linear', true);
        this.winAnimations.tweens.push(winToastTween);
        this.winAnimations.winText.anchor.setTo(0.5);
        this.winAnimations.winText.font = 'Arial Black';
        this.winAnimations.winText.fontSize = 40;
        this.winAnimations.winText.stroke = '#008';
        this.winAnimations.winText.strokeThickness = 1;
        this.winAnimations.winText.fill = '#fff';
        this.winAnimations.winText.smoothed = false;
        if (response.prize >= (response.bet * this.bigWinThreashHoldMultiplier)) {
            this.winAnimations.winText.text = 'BIG WIN : ' + response.prize;
        }
        else {
            this.winAnimations.winText.text = 'WIN : ' + response.prize;
        }
        for (var _d = 0, _e = response.betLineData; _d < _e.length; _d++) {
            var winningLine = _e[_d];
            for (var _f = 0, _g = this.stateAssets.betLineDetails; _f < _g.length; _f++) {
                var line = _g[_f];
                if (winningLine.betLineNumber === line.lineNumber) {
                    line.lineNumberSprite.scale.setTo(1.5);
                    line.lineNumberSprite.alpha = 1;
                }
            }
        }
        var animationTime = this.stateAssets.winAnimationTime;
        var removeWinToast = this.game.time.events.add(Phaser.Timer.SECOND * animationTime * response.betLineData.length, function () {
            if (response.prize >= (response.bet * this.bigWinThreashHoldMultiplier)) {
                this.game.winShowerEmitter.visible = false;
                winShowerTween.stop();
            }
            this.winAnimations.timerForBigWin.stop();
            this.winAnimations.timerForBigWin.destroy();
            var removeWinToastTween = this.game.add.tween(this.game.winToast).to({ alpha: 0 }, 1500, 'Linear', true);
            var removeWinTextTween = this.game.add.tween(this.winAnimations.winText).to({ alpha: 0 }, 1500, 'Linear', true);
            this.winAnimations.tweens.push(removeWinToastTween);
            this.winAnimations.tweens.push(removeWinTextTween);
            for (var _i = 0, _a = response.betLineData; _i < _a.length; _i++) {
                var winningLine = _a[_i];
                for (var _b = 0, _c = this.stateAssets.betLineDetails; _b < _c.length; _b++) {
                    var line = _c[_b];
                    if (winningLine.betLineNumber === line.lineNumber) {
                        line.lineNumberSprite.tint = 255 * this.styles.statsBlock.label.yellowColor;
                        line.lineNumberSprite.scale.setTo(1);
                        line.lineNumberSprite.alpha = 0.5;
                    }
                }
            }
            removeWinTextTween.onComplete.add(function () {
                this.game.angularContainer.isJackpotState = false;
                this.methods.triggerPendingSpins();
            }, this);
        }, this);
        this.winAnimations.events.push(removeWinToast);
    }
    else {
        this.game.angularContainer.isJackpotState = false;
        this.methods.triggerPendingSpins();
    }
};
/**
 * Show animations related to jackpot
 * @param response The response of spin
 */
var jackpotWinAnimation = function (response) {
    scatterWinAnimation.apply(this, [response]);
    showWinnings.apply(this, [response]);
};
/**
 * Display the big win animation counter
 */
var bigWinAnimationCounter = function () {
    this.winAnimations.bigWinText = this.game.add.text(this.game.world.centerX, 255, '');
    this.winAnimations.bigWinText.text = 'BIG WIN';
    this.winAnimations.bigWinText.anchor.setTo(0.5);
    this.winAnimations.bigWinText.scale.setTo(0.2);
    this.winAnimations.bigWinText.font = 'Arial Black';
    this.winAnimations.bigWinText.fontSize = 240;
    this.winAnimations.bigWinText.stroke = '#008';
    this.winAnimations.bigWinText.strokeThickness = 1;
    this.winAnimations.bigWinText.fill = '#adf';
    this.winAnimations.bigWinText.smoothed = false;
    var bigWinToastAlphaTween = this.game.add.tween(this.winAnimations.bigWinText)
        .from({ alpha: 0 }, 1500, 'Linear', 1500, -1, true);
    var bigWinToastScaleTween = this.game.add.tween(this.winAnimations.bigWinText.scale)
        .to({ x: 1, y: 1 }, 3000, 'Linear', true);
    this.winAnimations.tweens.push(bigWinToastAlphaTween);
    this.winAnimations.tweens.push(bigWinToastScaleTween);
};
/**
 * Display the winning animations when the scatter feature is triggered
 */
var scatterWinAnimationCounter = function () {
    this.winAnimations.scatterWinText.text = 'Won ' + this.freeSpinsPending + ' Free Spins';
    this.winAnimations.scatterWinText.anchor.setTo(0.5);
    this.winAnimations.scatterWinText.scale.setTo(0.2);
    this.winAnimations.scatterWinText.font = 'Arial Black';
    this.winAnimations.scatterWinText.fontSize = 240;
    this.winAnimations.scatterWinText.stroke = '#008';
    this.winAnimations.scatterWinText.strokeThickness = 1;
    this.winAnimations.scatterWinText.fill = '#fff';
    this.winAnimations.scatterWinText.smoothed = false;
    var scatterWinToastAlphaTween = this.game.add.tween(this.winAnimations.scatterWinText)
        .from({ alpha: 0 }, 2000, 'Linear', 1500, -1, true);
    var scatterWinToastScaleTween = this.game.add.tween(this.winAnimations.scatterWinText.scale)
        .to({ x: 1, y: 1 }, 4000, 'Linear', true);
    this.winAnimations.tweens.push(scatterWinToastAlphaTween);
    this.winAnimations.tweens.push(scatterWinToastScaleTween);
    scatterWinToastScaleTween.onComplete.add(function () {
        this.methods.triggerPendingSpins();
    }, this);
};
/**
 * Change the background image when the user hit the scatter feature
 */
var scatterWinAnimationBackground = function () {
    this.game.add.tween(this.game.background)
        .to({ alpha: 0 }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
    this.game.add.tween(this.game.scatterBackground)
        .to({ alpha: this.styles.background.alphaScatterBackground }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
};
/**
 * Handle the sounds played during a scatter is hit
 */
var scatterSoundBackground = function () {
    this.game.backgroundScore.fadeOut(4500);
    this.game.scatterBackgroundScore.play();
    this.game.scatterBackgroundScore.loop = true;
    this.game.scatterBackgroundScore.volume = 0;
    this.game.scatterBackgroundScore.fadeTo(4500, this.volume * this.soundVolumeMultipliers.ScatterBackgroundScore);
};
/**
 * Remove the scatter animations when free spins are finished
 */
var revertScatterWinAnimations = function () {
    this.game.add.tween(this.game.background)
        .to({ alpha: this.styles.background.alphaMainBackground }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
    this.game.add.tween(this.game.scatterBackground)
        .to({ alpha: 0 }, 4500, Phaser.Easing.Sinusoidal.InOut, true);
    this.winAnimations.freeSpinsRemainingText.text = '';
    this.game.backgroundScore.fadeIn(4500);
    this.game.backgroundScore.play();
    this.game.backgroundScore.loop = true;
    this.game.scatterBackgroundScore.fadeOut(4500);
    this.game.time.events.add(Phaser.Timer.SECOND * 4.5, function () {
        this.game.scatterBackgroundScore.stop();
    }, this);
};
/**
 * The function display the' free spins remaining' animations in case scatter is triggered
 */
var scatterStatusAnimation = function () {
    this.winAnimations.freeSpinsRemainingText = this.game.add.text(0, 70, '');
    this.winAnimations.freeSpinsRemainingText.text = this.freeSpinsPending + ' Free Spins Remaining';
    this.winAnimations.freeSpinsRemainingText.font = 'Arial Black';
    this.winAnimations.freeSpinsRemainingText.fontSize = 20;
    this.winAnimations.freeSpinsRemainingText.stroke = '#00a';
    this.winAnimations.freeSpinsRemainingText.strokeThickness = 1;
    this.winAnimations.freeSpinsRemainingText.fill = '#fff';
    var runningTextTween = this.game.add.tween(this.winAnimations.freeSpinsRemainingText)
        .to({ x: this.game.world.width - 450 }, 8000, 'Linear', true, 0, -1, true);
    // runningTextTween.onLoop.add(function () {
    //   this.winAnimations.freeSpinsRemainingText.x = -200;
    // }, this);
};
/**
 * The function show the animations related to scatter feature
 * @param response The response of spin from backened
 */
var scatterWinAnimation = function (response) {
    scatterWinAnimationCounter.apply(this);
    scatterWinAnimationBackground.apply(this);
    scatterStatusAnimation.apply(this);
    scatterSoundBackground.apply(this);
};
/**
 * The function is called when the user hit the big win, scatter or jackpot fetaure
 * @param response The response of spin from backened
 */
var showWinAnimations = function (response) {
    this.winAnimations.scatterWinText = this.game.add.text(this.game.world.centerX, 255, '');
    this.winAnimations.bigWinText = this.game.add.text(this.game.world.centerX, 255, '');
    this.winAnimations.line = [];
    this.winAnimations.tweens = [];
    this.winAnimations.events = [];
    if (response.isScatterWin && this.freeSpinsPending === -1) {
        // save the current response for later
        this.lastResponseBeforeFreeSpins = response;
        this.isScatterRunning = true;
        this.freeSpinsPending = response.numberOfFreeSpins;
        scatterWinAnimation.apply(this, [response]);
    }
    else {
        if (this.isScatterRunning) {
            this.winAnimations.freeSpinsRemainingText.text = this.freeSpinsPending + ' Free Spins Remaining';
        }
        if (response.isJackpotWin) {
            this.game.state.paused = true;
            this.game.angularContainer.isJackpotState = true;
            this.jackpotLastResponse = response;
            showBeforeJackpotAnimation.apply(this);
        }
        else {
            showWinnings.apply(this, [response]);
        }
    }
};
/**
 * The function shows animations on the line on which the user has won some amount
 *
 * @param winningLine The line which yield the win. It define the corinates of the winning line
 * @param line The line which yield the win. it define the win amount for the line
 * @param winningLinesCount The number of lines on which the user has wo
 *
 */
var showWinAnimationForALine = function (winningLine, line, winningLinesCount) {
    var eventTime = 900;
    var animationTime = this.stateAssets.winAnimationTime;
    this.winAnimations.lineWinText = this.game.add.text(0, 0, '');
    // blink the line
    this.winAnimations.timerForBlinking = this.game.time.create(false);
    var timedEventForWinningLine = this.game.time.events.add(Phaser.Timer.SECOND *
        animationTime * winningLinesCount, function () {
        var _this = this;
        this.game.winSound.play();
        this.winAnimations.timerForBlinking.loop(eventTime / 6, function () {
            line.winSprite.visible = !line.winSprite.visible;
        }, this);
        this.winAnimations.timerForBlinking.timeCap = 2000;
        this.winAnimations.timerForBlinking.start();
        // this.winAnimations.lineWinText.x = line.coordinates[2].x;
        // this.winAnimations.lineWinText.y = line.coordinates[2].y;
        this.winAnimations.lineWinText.text = winningLine.winAmount;
        this.winAnimations.lineWinText.anchor.setTo(0.5);
        this.winAnimations.lineWinText.font = 'Arial Black';
        this.winAnimations.lineWinText.fontSize = 40;
        this.winAnimations.lineWinText.stroke = '#008';
        this.winAnimations.lineWinText.strokeThickness = 3;
        this.winAnimations.lineWinText.fill = '#fff';
        this.winAnimations.lineSplash = drawLineWinBackdrop.apply(this, [line.coordinates[2].x, line.coordinates[2].y]);
        this.winAnimations.lineSplash.anchor.setTo(0.5);
        this.winAnimations.lineSplash.scale.setTo(0.9);
        this.winAnimations.lineSplash.alpha = 0.9;
        this.winAnimations.lineSplash.addChild(this.winAnimations.lineWinText);
        // shake the winning symbols
        this.stateAssets.reels.forEach(function (reel, index) {
            var _loop_1 = function (child) {
                if (child.data.isLandingSymbol) {
                    if (winningLine.winPattern.indexOf(child.data.tileNumber) > -1) {
                        var symbolTween_1 = _this.game.add.tween(child.scale).to({ x: 1.2, y: 1.2 }, eventTime / 6, 'Linear', true, 0, -1, true);
                        var symbolTween2_1 = _this.game.add.tween(child).to({ angle: 10 }, eventTime / 3, 'Linear', true, 0, -1, true);
                        _this.winAnimations.tweens.push(symbolTween_1);
                        _this.winAnimations.tweens.push(symbolTween2_1);
                        setTimeout(function () {
                            symbolTween_1.stop();
                            symbolTween2_1.stop();
                        }, eventTime, _this);
                    }
                }
            };
            for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _loop_1(child);
            }
        });
    }, this);
    this.winAnimations.events.push(timedEventForWinningLine);
    // stop the blink and hide line
    var removeTimedEvent = this.game.time.events.add(Phaser.Timer.SECOND * animationTime * (winningLinesCount + eventTime / 1000), function () {
        this.game.winSound.stop();
        this.winAnimations.timerForBlinking.stop();
        this.winAnimations.timerForBlinking.destroy();
        this.winAnimations.lineSplash.removeChild(this.winAnimations.lineWinText);
        this.winAnimations.lineSplash.destroy();
        line.winSprite.visible = false;
        this.winAnimations.visible = line.winSprite.visible;
        // this.winAnimations.lineWinText.text = '';
        this.stateAssets.isWinAnimationOver = true;
        this.stateAssets.reels.forEach(function (reel, index) {
            for (var _i = 0, _a = reel.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.data.isLandingSymbol) {
                    child.scale.setTo(1);
                    child.angle = 0;
                }
            }
        });
    }, this);
    this.winAnimations.events.push(removeTimedEvent);
};
/**
 * Th function display the animations that are required before a jackpot feature is triggred
 */
var showBeforeJackpotAnimation = function () {
    var _this = this;
    this.winAnimations.jackpotWinText = this.game.add.text(this.game.world.centerX, 255, '');
    this.winAnimations.jackpotWinText.text = 'Jackpot Feature';
    this.winAnimations.jackpotWinText.anchor.setTo(0.5);
    this.winAnimations.jackpotWinText.scale.setTo(0.2);
    this.winAnimations.jackpotWinText.font = 'Arial Black';
    this.winAnimations.jackpotWinText.fontSize = 240;
    this.winAnimations.jackpotWinText.stroke = '#008';
    this.winAnimations.jackpotWinText.strokeThickness = 1;
    this.winAnimations.jackpotWinText.fill = '#fff';
    this.winAnimations.jackpotWinText.smoothed = false;
    var jackpotWinToastAlphaTween = this.game.add.tween(this.winAnimations.jackpotWinText)
        .from({ alpha: 0 }, 2000, 'Linear', 1500, -1, true);
    var jackpotWinToastScaleTween = this.game.add.tween(this.winAnimations.jackpotWinText.scale)
        .to({ x: 1, y: 1 }, 4000, 'Linear', true);
    this.winAnimations.tweens.push(jackpotWinToastAlphaTween);
    this.winAnimations.tweens.push(jackpotWinToastScaleTween);
    this.jackpotArray.forEach(function (index) {
        _this.stateAssets.tileCoordinates.forEach(function (tile) {
            if (tile.tileNumber === index) {
                _this.game.JackpotEmitter = _this.game.add.emitter(tile.coordinate.x, tile.coordinate.y, _this.dimensions.reel.tileHeight);
                _this.game.JackpotEmitter.makeParticles('flareblue16', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 200, true, true);
                _this.game.JackpotEmitter.start(true, 4000, null, 10);
                _this.game.JackpotEmitter.alpha = 0.8;
                _this.game.JackpotEmitter.visible = true;
            }
        }, _this);
    }, this);
    jackpotWinToastScaleTween.onComplete.add(function () {
        moveToJackpotState.apply(this);
    }, this);
};
/**
 * The function intiate the jackpot state by changing the background image, stopping the music.
 */
var moveToJackpotState = function () {
    this.game.scatterBackgroundScore.stop();
    this.game.black = this.game.add.image(0, 0, 'black');
    this.game.black.alpha = 0;
    var blackOut = this.game.add.tween(this.game.black).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
    this.game.time.events.add(Phaser.Timer.SECOND * 1, function () {
        this.game.state.start('Jackpot');
    }, this);
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/win-animations.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/trailer-state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce__ = __webpack_require__("../../../../phaser-ce/build/phaser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typewriter__ = __webpack_require__("../../../../../src/app/games/space-storm/main/states/trailer-state/typewriter.ts");


/** Define the trailer state of the game */
var TrailerState = (function () {
    /**
     * Intailise the basic structure of the game
     *
     * @param _httpService An object of Http type.
     *
     */
    function TrailerState(_httpService) {
        this.name = 'Trailer';
        this.isInitial = false;
        this.stateAssets = {
            trailerImageHeight: 0,
            trailerImageWidth: 0,
            skipButton: {}
        };
        this.httpService = _httpService;
        this.meteorCount = 30;
        this.meteors = [];
        this.hasCollisionOccurred = false;
        this.hasbigMeteorHit = false;
    }
    /**
     * This function is called first in phaser. Here it is used for adding different sounds played in trailer state.
     */
    TrailerState.prototype.preload = function () {
        this.game.trailerSound = this.game.add.audio('trailerSound');
        this.game.hitSound = this.game.add.audio('hitSound');
    };
    ;
    /**
     * The create function is called automatically once the preload has finished.
     * The function is adding the sprite of trailer image, rocket and meteor and the text skip button.
     */
    TrailerState.prototype.create = function () {
        this.stateAssets.trailerImageHeight = this.game.cache.getImage('trailer').height;
        this.stateAssets.trailerImageWidth = this.game.cache.getImage('trailer').width;
        this.game.trailerImage = this.game.add.image(0, -1 * this.stateAssets.trailerImageHeight + this.game.height, 'trailer');
        // play Trailer Sound
        this.game.trailerSound.play();
        this.game.bigMeteor = this.game.add.image(this.game.world.width, 0 - this.game.height - 200, 'meteor-transparent');
        this.game.bigMeteor.anchor.set(0.5);
        this.game.bigMeteor.scale.setTo(3);
        this.game.bigMeteor.angle = -40;
        this.game.bigMeteor.visible = false;
        var randomNumber = 10;
        for (var count = 0; count < this.meteorCount / 2; count++) {
            randomNumber = Math.floor(Math.random() * 50) + 10;
            var meteor = this.game.add.image(this.game.world.width - (randomNumber * count), 0 - (randomNumber * randomNumber), 'meteor-transparent');
            meteor.anchor.set(0.5);
            meteor.scale.setTo(0.1 * (randomNumber / 10));
            meteor.angle = -45;
            meteor.visible = false;
            this.game.physics.enable(meteor, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Physics"].ARCADE);
            this.meteors.push(meteor);
        }
        this.game.trailerRocket = this.game.add.sprite(0, this.game.world.centerY, 'white-rocket');
        this.game.trailerRocket.anchor.set(0.5);
        this.game.trailerRocket.scale.setTo(0.2);
        this.game.trailerRocket.angle = 45;
        this.game.physics.enable(this.game.trailerRocket, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Physics"].ARCADE);
        this.game.trailerRocket.body.collideWorldBounds = false;
        this.game.trailerRocket.body.checkCollision.up = true;
        this.game.trailerRocket.body.checkCollision.down = false;
        this.game.trailerRocket.body.immovable = false;
        for (var count = this.meteorCount / 2; count < this.meteorCount; count++) {
            randomNumber = Math.floor(Math.random() * 50) + 10;
            var meteor = this.game.add.image(this.game.world.width - (randomNumber * count), 0 - (randomNumber * randomNumber), 'meteor-transparent');
            meteor.anchor.set(0.5);
            meteor.scale.setTo(0.1 * (randomNumber / 10));
            meteor.angle = -45;
            meteor.visible = false;
            this.game.physics.enable(meteor, __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Physics"].ARCADE);
            this.meteors.push(meteor);
        }
        this.stateAssets.skipButton = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 300, 'Skip Intro', { fill: '#fff' });
        this.stateAssets.skipButton.anchor.set(0.5);
        this.stateAssets.skipButton.font = 'Arial Black';
        this.stateAssets.skipButton.fontSize = 40;
        this.stateAssets.skipButton.fontWeight = 'bold';
        //  Stroke color and thickness
        this.stateAssets.skipButton.stroke = '#000000';
        this.stateAssets.skipButton.strokeThickness = 3;
        this.stateAssets.skipButton.fill = '#fff';
        // Events on text click
        this.stateAssets.skipButton.inputEnabled = true;
        this.stateAssets.skipButton.events.onInputOver.add(this.over, this);
        this.stateAssets.skipButton.events.onInputOut.add(this.out, this);
        this.stateAssets.skipButton.events.onInputDown.add(this.down, this);
        var typewriter = __WEBPACK_IMPORTED_MODULE_1__typewriter__["a" /* typewriter */]();
        typewriter.init(this.game, {
            time: __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Timer"].SECOND / 5,
            x: 40,
            y: 40,
            fontFamily: 'carrier_command',
            fontSize: 14,
            maxWidth: 800,
            sound: null,
            text: 'Somewhere in the past ...  \r\nWhile on a space exploration trip ... \r\nAn extra-terrestrial slot game was discovered...'
        });
        typewriter.start();
        this.game.brokenGlass = this.game.add.sprite(0, 0, 'brokenGlass');
        this.game.brokenGlass.visible = false;
        this.game.brokenGlass.anchor.set(0.5);
    };
    ;
    /**
     * Represents a event that is fired when the Pointer moves over the skip Button.
     *
     * @param {object} sprite - Represent the sprite of the button
     *
     */
    TrailerState.prototype.over = function (sprite) {
        this.stateAssets.skipButton.fill = '#ffff44';
    };
    ;
    /**
     * Represents a event that is fired when the Pointer is pressed down on the skip Button
     *
     * @param {object} sprite - Represent the sprite of the button
     *
     */
    TrailerState.prototype.down = function (sprite) {
        this.moveToNextStage.apply(this);
    };
    ;
    /**
     * Represents a event that is fired when the Pointer that was previously over the skip Button moves out of it.
     *
     * @param {object} sprite - Represent the sprite of the button
     *
     */
    TrailerState.prototype.out = function (sprite) {
        this.stateAssets.skipButton.fill = '#fff';
    };
    ;
    TrailerState.prototype.collisionHandler = function (obj, bullet) {
        obj.angle += 0.1;
    };
    /**
     * Check to see whether the two sprites are overlapping
     *
     * @param spriteA Define the sprite for rocket.
     * @param spriteB Define the sprite for meteor.
     * @return true when two sprites overlap
     *
     */
    TrailerState.prototype.checkOverlap = function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return __WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Rectangle"].intersects(boundsA, boundsB);
    };
    /**
     * The update (and render) functions are called every frame.
     * It move the trailer state image, rocket and the meteor.
     */
    TrailerState.prototype.update = function () {
        if (this.game.trailerImage.y === -this.stateAssets.trailerImageHeight / 4) {
            for (var _i = 0, _a = this.meteors; _i < _a.length; _i++) {
                var meteor = _a[_i];
                meteor.visible = true;
            }
        }
        if (this.game.trailerImage.y > -this.stateAssets.trailerImageHeight / 4) {
            for (var _b = 0, _c = this.meteors; _b < _c.length; _b++) {
                var meteor = _c[_b];
                if (this.checkOverlap(this.game.trailerRocket, meteor)) {
                    this.collisionHandler(this.game.trailerRocket, meteor);
                    this.hasCollisionOccurred = true;
                }
                var randomNumber = Math.floor(Math.random() * 10) + 1;
                meteor.y += randomNumber;
                meteor.x += -4;
            }
            if (this.hasCollisionOccurred) {
                this.game.trailerRocket.angle += 2;
                this.game.trailerRocket.scale.setTo(this.game.trailerRocket.scale.x + 0.005);
            }
        }
        this.game.trailerRocket.angle += 0.03;
        this.game.trailerRocket.x += 0.5;
        if (this.game.trailerImage.y < 0) {
            this.game.trailerImage.y += 1;
        }
        if (this.game.trailerImage.x > -1 * (this.stateAssets.trailerImageWidth - this.game.width)) {
            this.game.trailerImage.x -= 3;
        }
        if ((this.game.trailerImage.y >= 0) && (this.game.trailerImage.x <= -1 * (this.stateAssets.trailerImageWidth - this.game.width))) {
            this.game.bigMeteor.visible = true;
            this.game.bigMeteor.scale.setTo(this.game.bigMeteor.scale.x + 0.01);
            this.game.bigMeteor.y += 5;
            this.game.bigMeteor.x -= 5;
            if (this.game.bigMeteor.x < this.game.world.width / 2) {
                this.game.trailerRocket.scale.setTo(this.game.trailerRocket.scale.x + 0.2);
            }
            if (this.game.bigMeteor.x < 0) {
                this.moveToNextStage.apply(this);
                this.hasbigMeteorHit = true;
            }
        }
    };
    ;
    /**
     * Move to the next state after the current state is complete
     */
    TrailerState.prototype.moveToNextStage = function () {
        if (this.hasbigMeteorHit === false) {
            if (this.game.bigMeteor.x < 0) {
                this.game.brokenGlass.scale.setTo(3);
                this.game.brokenGlass.x = this.game.world.centerX;
                this.game.brokenGlass.y = this.game.world.centerY;
            }
            else {
                this.game.brokenGlass.x = this.game.input.mousePointer.x;
                this.game.brokenGlass.y = this.game.input.mousePointer.y;
            }
            this.game.trailerSound.stop();
            this.game.brokenGlass.visible = true;
            this.game.hitSound.play();
            this.game.time.events.add(__WEBPACK_IMPORTED_MODULE_0_phaser_ce__["Timer"].SECOND * 0.2, function () {
                this.game.state.start('MainScreen');
            }, this);
        }
    };
    return TrailerState;
}());
/* harmony default export */ __webpack_exports__["a"] = (TrailerState);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/main/states/trailer-state/typewriter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return typewriter; });
/**
 * The function handle the text printed in the trailer state of the game
 */
var typewriter = function () {
    // this.typedText;
    // this.timer;
    var _that = this;
    var game;
    function init(gameInstance, options) {
        game = gameInstance;
        _that.time = options.time || Phaser.Timer.SECOND / 10;
        _that.sound = options.sound || null;
        _that.soundMarker = options.soundMarker || null;
        _that.writerFn = options.writerFn || null;
        _that.endFn = options.endFn || null;
        _that.times = options.times || 10;
        _that.text = options.text || '';
        _that.x = options.x || 100;
        _that.y = options.y || 100;
        _that.maxWidth = options.maxWidth || 200;
        _that.fontFamily = options.fontFamily || 'blackFont';
        _that.fontSize = options.fontSize || 28;
        _that.writerObj = options.writerObj || null;
    }
    function start() {
        enableTypingSpecificMessage(_that.text, _that.x, _that.y);
    }
    function stop() {
        if (_that.timer !== undefined) {
            _that.timer.stop();
            game.time.events.remove(_that.timer);
        }
        if (_that.sound !== null) {
            _that.sound.stop();
        }
        // if(_that.typedText !== undefined){ // This can cause problems if you repeatedly type to a text object. ~Tilde
        //    _that.typedText.destroy();
        // }
    }
    function enableTypingSpecificMessage(text, x, y) {
        if (_that.writerObj === null) {
            _that.typedText = game.add.bitmapText(x, y, _that.fontFamily, text, _that.fontSize);
        }
        else {
            _that.typedText = _that.writerObj;
        }
        _that.typedText.maxWidth = _that.maxWidth;
        _that.currentLetter = 0;
        var length = _that.typedText.children.length;
        for (var i = 0; i < length; i++) {
            var letter = _that.typedText.getChildAt(i);
            letter.alpha = 0;
        }
        if (_that.sound !== null) {
            if (_that.soundMarker !== null) {
                _that.sound.play(_that.soundMarker, null, 1, true, true);
            }
            else {
                _that.sound.play('', null, 1, true, true);
            }
        }
        _that.typedText.x = x;
        _that.typedText.y = y;
        _that.typedText.tint = 0x00ff00;
        if (_that.endFn !== null) {
            countdown(typeWriter, length, _that.endFn);
        }
        else {
            countdown(typeWriter, length, null);
        }
    }
    /**
     * [countDown description]
     * @param  {Function} fn    [description]
     * @param  {[type]}   endFn [description]
     * @return {[type]}         [description]
     */
    function countdown(fn, times, endFn) {
        var _timer = game.time.create(false);
        _timer.start();
        endFn = endFn || function () {
            game.time.events.remove(_timer);
            if (_that.sound !== null) {
                _that.sound.stop();
            }
        };
        _timer.onComplete.add(endFn);
        _timer.repeat(_that.time, times, fn, this);
        _that.timer = _timer;
    }
    function typeWriter(text) {
        if (_that.sound !== null) {
            if (_that.sound.isPlaying === false) {
                _that.sound.play();
            }
        }
        var letter = _that.typedText.getChildAt(_that.currentLetter);
        letter.alpha = 1;
        _that.currentLetter++;
    }
    return {
        init: function (gameInstance, options) {
            init(gameInstance, options);
        },
        start: function () {
            stop();
            start();
        },
        destroy: function () {
            _that.typedText.destroy();
        },
        hideText: function () {
            _that.typedText.visible = false;
        },
        showText: function () {
            _that.typedText.visible = true;
        },
        moveToTop: function () {
            game.bringToTop(_that.typedText);
        }
    };
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/typewriter.js.map

/***/ }),

/***/ "../../../../../src/app/games/space-storm/resources/images/background-repeat.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-repeat.dede705006c6b60fe9da.png";

/***/ }),

/***/ "../../../../../src/app/games/space-storm/resources/images/infoPaytable.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANFSURBVDhPLVTJjttGFORf5RAjI4lkr+zmInEZSzMSJVIUSe0aTOS5+hI4gAF/gHMKkImRIMghh/hq2PEhwHzE2MjyE0qRikAIZDfrvXpV1TQYH3bNUdeeMqfkTu0HO8fdWmzGnFz5S6FroUvlbagopVtJd+F4dce60l4RJ0vDZkMd4I2Cyrn2t0wue2Rm8ylTM7e/BhjrAAu19AY7XNHl8aveOIz2nrcwmEhNOjF5KryKqToIjz2SdsmI64w5hc3nJp1+fLmeTO6ImPXIuGtfx8Pbi841VowLc4QlqnLVX6lg64dHInKsOF7J1QJNqHx9Op2A18EKW6gILmCXPN0ZPesKz117gmfQk3qH8biqLJYP4lupV9n9XwCfPv1usxKPKCfdJZOVowuD8illcwxj0gwzS43x1sBjSO3vLbpAZ7TFv6Pqnjm2yBiCQdQ4uTG0V0o1V7rq2ZnjrrHq+wf0BBj6u/0tkSVKoxXYYWwqMyIKkO3He4Ow1PWW2q1BifBKeTt0A+14eJT6u3cN44dv+Bx1WzsL+Od4KyiCy7DslIu5kDB5BcIYjMgahoPnhwZ5Oj3+to8OJimC8NYkOaqgDVNpNNwZHDRoTlmBaaPLOzc4eIOvw+TZy49n6L/3ZZ4M71AXWwAP4mOD97JouDEQL5tMhazAuWNmkAo31ouHM/Tzr6+oqJ90rlAaN9gFEkaYbNRHwqA24zmUhNTY8AcH5a9/+twgH988h2YgiWmBRPgQOMQGVhGZemHd+AwD/KAJ5lkq6PnmE7B/vnCaSCSjZ2r79udXBzQ8h8QPtzrYJE8PTTwheNDfNVLxCt7gANw/Avz3j+sCtfa//IOEbIIddKZygeZYhKNhvDW8oKQsAxko3LFSu1Uu+6FN1f+/h2/bLRgL/vASL/jhPozXhnByQmeg5A02KNkG60YH378/A/94jRWLziFEeHmD/LaxqxB7nMoGjJ7t6ZnAbSGWhLfDOzWMgbzg8sWXCU4F5gyiA0RtE5aHSW2AM+GLRgyZSmeh9dYNmjDinCDtmBBb+AAADBiocTV3+0vh5tElrGIZAoAAI7d+sLbtAoVx6DrWGApBPDDESbgwr8EZYBUsnnRDrqf9KP8P5OG4qg96sA4AAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/app/games/space-storm/resources/images/paytable-background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "paytable-background.b7f131f5af217c3e638f.jpg";

/***/ }),

/***/ "../../../../../src/app/games/space-storm/resources/images/spin_button_sprite_sheet.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbwAAABNCAYAAADdCdHXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABmJLR0QA/wD/AP+gvaeTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTIyVDExOjQ4OjQ1KzAyOjAwTgw9awAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0yMlQxMTo0ODo0NSswMjowMD9RhdcAAB51SURBVHhe7Z0JdFRVmsf/tWWDLCaBsARCggmIemgQWxgQWgTRIa04gg2NAja2MH2EAUU2QaGBRnCBQY4tNraojdItLtg4GqFxEBjiQEMzKA3BsAZIyEI2stU293u5RapevapUklfLq9zfOXVy732pV8n71/u+99373Xt1dgYEAoFAIAhzfHJ4Vd/uQuWBb1CX90/YKq/BbrHwIwI10BmN0MfdhKisWxA39B7EDh/Nj7Qd0u567reoO/1PmK+Vwm428yMCtdCZTDDdlISozFvQYfBwVfUTaBe53awoKuRHBGoQn9KlxXbTq8Mr+/hPKP3Lu7DZbKhnxtJqtrCyFSIoVBedTge93gCDyYhIZjj1ej2SHp2KxEce47/Rcki7a9vfR2THWERHRiCyQweYIiOhY+cWqIud3R/m+nrUX7+O2voG1FdX4abxj7dJP4F28WQ3Xzt3lf+GQA2e6dW5xXZT0eHVn8nD5bVLUV98FbUlxbBaRUQXSAwGI6KTOyGyU2d0m78CkRlZ/EjzkHaFr/0WRnM94hMSEBEdzY8IAkVDbS0qysthMUWiyzMvtEg/gXaR281XzlzhRwSBYF5G12btppvDq/nHIVxa8RxqK8rRUFfHWwXBICIqCtHxCei+9GXE/ORO3uoZSbuV85HYpStik5N5qyBYVJWUoKzwCrovWeuTfgLt4mw315y6yFsFwWBBnx4e7aaLw6MnlAvPPYXr18pgaWjgrYJgYoyIQIebEtHz5be8RgqSdvNnoFOPHohhYgtCgxpmAIsvXkTPtZtaFemJMVj/osb4q7PdfPn0Jd4qCCbPZXZXtJsuDu/szF+g6sdTIrILMSjSi725D9Lf/DNvcef804+hI2wisgtBKNKrhh5pG//EW5rHMQYb0aEDYpj+YgzWPziPv9Ywu9fAfrZ0/NVhN0VkF1pQpCe3mzfuHrrBqO9ZOLvQgzQhbUgjJaidxuyEswtNSBfSx5N+zlC0QA8v17/8BCk9eyIlNVV6P43FCmenPnRN6drSNaZrTdecrj1pQFo0h8NuCmcXepAmcrt54w6irCIaaBWEJqQNaaQERQKUoCIIXUgf0skbNA5E3dIUqZPxFQlHgYeuOV170oC0IE28IexmaCO3m5LDo3ECSqEV2ZihC2lDGpFWzlCdph4I4xjakD6kk1w/BxRNXFoxXxqDFZF68CENSAvSxFOk57CbIhszdCFtnO2m5PBociTNFxGENqQRaeUMJTTQPDtB6EM6kV5KFL66HIldu4qEoxCCtCBNSBslhN3UBs52U3J4tBIATY4UhDakEWnlDGXvUUKDIPQhnUgvOdIYw/UqEdmFIJImTBul8VdhN7WBs92UHB4te0MrAQhCG9KItHKGUtUpe08Q+pBOpJec0j+/g6SUFF4ThBqkDWkkR9hNbeBsNyWHR2tjyuafC0IQ0ki+jinNyxLZe9qAdJLPo6OxBUNEpBiDDWFIG9JIPv5Ka2OK5cJCH9LIsY6psJQCQRC5+sUnIsNWA5BGpJVA2wiHJxAEEfP5fDEGqwFII9JKoG2EwxMIgoiurlaMwWoAaZUbppVA2wiHJxAEEZ3dLsZgNQBpRFoJtI240wQCgUDQLhAOTyAQCATtAuHwBAKBQNAuEA5PIBAIBO0C4fAEAoFA0C4QDk8gEAgE7QLh8AQCgUDQLhAOTyAQCATtAuHwBAKBQNAu0NkZeQ8NQ2VpCW/yB7cgecZ0JA0djJiusTBENy2lZKsuQUNeLq59vh6XdhfwVldSXtmPHoOb2SvMWs/OVYy6/H+gIudtXPrCfd+xRrKRsXUVEtOc/oaKXFwZOw3yfYtTfrcb3Yenuj4VsM+pP/R75M97EzW8SYnIWdtw6/ifQG/gDWV7cfHBGSji1dYSl5SMrB37eQ0g7XoNGMhr/iAJ+qEjoe/TD/oucUCEibczGmphLzwL2w87Yf1OWTsMmQnT6H7QNfdoRecquQh7/t9h/dtBeFrTQv/w8zDentL0qGaphW3fAlj28rqDIdNhurc/dEZed1B+Ata/vAnrZV5XInEcTDNHQufYV9dWCduuJbAc5PU2cO7okQDrJ1ALuXaHh/XFuvPFvKY+c9OGS3ZzS/5h3uLODOzHvLeP8pormdNn8ZJvzIg8hnlvKG9QPDftCewc1ZHXmvj17m2YL7sGnj530f0Jkt1c5eWaKb13OvuMhW28znPTOmHQ/pP+j/AiRy1Fv68+Ra/HsxGbkezi7Ah9x2REDcxG12W7MWDzUsTz9iaeQMJtPmyMaYiEPj4VMXSuRZ9iwHuvoHMqP+ZCJ5iSZH9DfCe4r2bIPnegzNkR7HMiB89BxqLBvEGZhMyMJmdHJKZCcxvAdLsPxjmLYRx9N/Q9k1ydHRERDV3PfjA8MB8Rc2bCkMjbnTBkpTfv7Ag6V7cs6O+eBNNC5tTuZJ+ngC6OOV3n8xnZ+xQ2GzBkZbk7OyKB/b3/Nsn7F79PapOzI/Rx0HXmZYEgACycvoE5mP5enR2xCcMkJ7GMGXRn5qbN5yXf2VTfXzrX6qGu52pEqY3Zd/7TgbfPXf1VebN2Uwk17aZ/Hd7QlchcPBkx7g8Gihj6Tkb3lj2UeMSQkY2em7YgRdHptZ2oETMR1lt2Jo6E8bFs6BNkTs4TzJHoxwzilTYSlQL92PkwDlV2em0mmUXeQ3hZIAgx5v5yEz7GaV7zDbXsJvHHvhPxkqLTazsvHeqFl2TOOZD40eGNR+aC8YhyflL2Ab2PztEn4gej+4oFCtGbCnQcjKQ5fvKmQScJhkfHQh/Dqz6ii2DRl2pEQ3/PdMWose2wc/efAB2vCQShwty0f8fO6O95zXdUtZuMt5nTa2mXqK8E0276z+FNG49YN2NVibqc9Tj9ZF+p//vwkzNw4f1dqKvgh30mHyX0fv46PnsWLuXkw6qw274+czS638krKhMzcil86GzVHr2Zs+sij+zMsJ/dB8u7y9GwbDYaNmyEhcbayl138PYF+1H2fjrHjfMchr2OH3TGmMqcXhavqEyX/jAM4OUwRpc+EobJc2Ga/yoiXtiAiGX8tYTV58yF8YG7PTv+3pNgWuz0Hk+vxWtgeprONRJ6bw8oI552/RteYO97WKFXoPc4mBY6/Z7jNX8+DLc3F/UPgXGO03teeBWmn/vpO+QPmN1UYuGQBEwu2IbTb7+O7IIr+FXvofxIy3h69zaYPvyD9HqkrBS/HvI4P+LO7IptvKQua78fhlVBivL85vA6989wO7k5dy2+X/EmKk7yhpN7cXXTLHw/dhTO/PkfMFvrYZFnjvhA/ZFduLJiLE5syoW7z0tFh/vVeaIwl8kSexJHoHM4Rnn9ergbwcJc5uw+gu1saWO9LA+2fR/CvP5ZmL88BruFObJqD4kr3pDO8x7Mb30Gm4LT03UfrE4kVl0pS4SJg/6ucI7yUpmjexGmqeNgyEyHLoY9wDjfkEZWT0iXroFpyYvK3ce3ZbiOZXqCxl+T6VzjYPwNO9fofvyAjIR4179Bz95HY7JybrsVuihediaG/U9jJ8F5aNydXq5junoTdInauUd3FnzGS008f78F059cgWU5jYkb63K2Y9HiicjevR9TbhkntbXGbn6e8wm2zB6ORzrfz1tcUctuKhEsu+k3h6dT+FZSNqQyBSh7fSKOjeiPk1t4Uyuo/+BNVCoIb+w0mpfahi3vKOpkHjUsozylb0VtqcfMSft3b8O8cjbMH+fxllZQtge2fO5MnYlhjokX24SlAHZ5InLYRnlJMEydxRydj2OgxiToh0xQ5zrTuYZOh+khD06vrURlQf+Qn8Z2QxRPdnPd+aNYOu9eKeqbsbz1WYxkN5VQy24uut89GiW7GYwoz28OT4nIwSv9lkTSSC6qr1TysvoYI46g9Id6XuMkDkbnWWEY5cnpMQTGPrzsJ2yXFRyeWkQZYT9+llccUJQ3LuyiPN2Y6TCktzC3zWhU8TqwqGrAL2H008OELlMl56wRVh8c5rckEiKneBcv+YfVXx3gpSaWbfgGW0ZN5LXA4bfvTVGBwhNH/GD02PwFMsbfwhvUJyJWzcQJd65s/RauLi8SMaPDLMorVBhUNaZAP+FFGMcM8p+D6NjCLJmWsjcHtnJedtBlUJhFeVkw9FF4AKvMg/WvG2GWxk6Xw/LRTtgusAcMGz/uK2c/axp/XbYWli/3sWuqNI7LHiYG3MfLKtORpsKEZ5SXPVB5TI2SSF5/djivaY/sWuUxx0BHef57UPrgW9Q08LIzHXsjcc6nGPj5J+g9YzzUNXFPIKYrLzphqfA0Cb0VHFiDMoUoL/nJMIryvvs7bNW87IzU9TWlcZ7cz5tJUGgFhi4KRqyu1mNXass5AesxhSjvjuwwivLugE6ui60A1i0bYf17Hr+WpbD98DUsf1yOhs0fwVbGHFaNfIzTFwpg++4jWNa/zc7Bm5zpzJwvL7aJOva3yRyz7tYwjfKY3fTEhvLGeXIbf/fveF5FRzGm02xeckVtu6lEoO2m/74zBWtwaVe+xwdIfWI/3PT4SvTbsx/9lk5WxfHFLxqPDm7puSWo2+9p7LA1FODSe+5RXscxCxQmzWuVg7Ae9DIeR/Pk7hgH49NrYJo8Th3H12cS9D3cu+HsRcdaHIR4w/6NQpSXegeLing5HGmoAZQcEnF5HywbnkXDhvfacJ1PwOLWXcyIilfnQUJfCvv5Wl7hdMyEYUz4RXnrDszDqFGjeE2Z/8w34i+jJuIPm+eo4vjIbiqhpt2k8UalKO+Vc8PcJs37E78+JFWsnoGCb9hTIK8rEpGMmDG0GssXyHi4dd4+Zuhk9NywG73H9nb/h8p+wLUcXlaLA7Nw9YhsrLDrcHQNoyjPfmAjLAfOuj1Zu0BZdpkjvWfmNUc36p56GqYJQxRWRmFP9ie9rzTRcphx/k7uzFnkenc4RXkyotKh91cSiYNjnpOa2kwEexze/4Ps/Cbobg/PKC9q4TL8asSTvOaZtQetkuN7fU7r+uQfHjcT5km/xtZD7/MWV9S2m+s+UB6zC6Td9PP3pQBXl47CyfU7m59rR12dz36CPr/05Z/vjeT9J6W10ejVb81SdFZaBowZzKptK1iMpz5F738ty9hkUd6oOYjltXDAtmsdLJ/u8TBG40QLM/N0A5zmST01E4a7PCwDdnYPrMrLBLaNg1/DJv9SUJTXm5c1TQHsbou8UhIJ02eqStG4Ej38PP6a/wVsBbLvYbhGeSwaWjSlPx5N8G3log1Vw/DmIt+c3kbmIMnJ0esv0QoTlznPdt6P5/2wTmh2xW281ARFeS8EKMoLyANSzfZ50ly7U29sR/UV2fiXC3GIfeIVdFfF4dej7ovncOqDVswN84VDS1B4SGY1U0ej+zReDhPsxz+Dheba7WBO4qqsW8kFMqoT1MvkLDkIy7t7/BQ15LHo9YTs3Mxpj/BTkkVA2QfbRaVMZaZPOovGqRt66iQY0tV1FLpeSe4RckONivqVwrpPrhn7n25hTpzXwo1Vr06V5tpN6uzuJOS8enUYXlEpk3PhnVcwc7U/njSZM98+g5dcCZTdDOB3pQBVHyzByQn9cXz2GpSd8TB9IPonSHyy5QuMutBAnzUb36+WL6GvLiXr/ypLzGFR3uiVYRXlObAf3QnLGwvQ8NaHsDomn7tBkV5bnQat6LIHlo0fqjp258bRj2ArlEUMqXfCGAZRni2HReWetvKgbuj0ITBMfRERT7PoutmVS3wgcSQMfRRWli07q7AQRBs49Zl7lEeLgd8TflGeA4r2frt6hjTX7pEy71NN2mw3Gc9mXcH0mdt5zT9kn0zjpSZeKZgYkCgvKA9H9UfewZkpP8WJzUorozC3kZHNS75jq62E+Uwuyt5fghMjKZr0r7OToMScA7IIMu1n6DKWRbUV/psPGFQuH4T13eUwf3xYWl3FjeRWZOZZmBGrLILt2NewvMWiyXeZYeOH/AeLGL6RRQz6FOgGDwFYJOufyDJAlLEHhh0sOlbKtHUmmTmLRxY3dnXyphaRSLtbTIHpKfZ+tx7NxqXo1IU0Y987ly8Hi/L6h2+U58xLn66VHN+jqcoro7TGbjqY3duCR3dvw8wF/nV2BCXmKEF2c5IPY5dtIajfk5ot03AxV2GErVmL6bqWJr2OjP4pjk2ZhjObtnvdp05tKjbtRLVLT18yYh+cg4Yab1232sd+/D1Y/q7QXezDN8plLU16rXwWDa+tguXTnbB526dObRQiBl3aYBiuBfIb5CfY/2b+43uN0bjXpwdHV2czWyY5SB/XNP46+2kY7x2kvAxYyWFYc/ywkEA+i/zlGZsU5Y3g5XbAquXMMyjhw5MmraVJTlP+mrX49173qVOb7JNdeKmJdfUT8eHezbzmH4L+YFRVobRqsIYoWO8W5elvzUZ3P4/hhwL2Sq07BooYjrlGcxHp0N8TJuKVMadDi31v/hDWfxZ5d3zJQ2CYoFImZ00erB/4r0va+lelKG9Ku4jywoV1B57npcDip+/IZPT54iQGfrQFPUZ5y0AZge63uh+3lubzkjaoWrYVVS7dR6mI7a/dWXnG37Cnd5pcfpc37ZJguLkHLztRXRqA7kgVyX8PtrOuEYMuPZ2XwgTqhv7zKjT8dq00JUOxK5qhyxzT9oniV5mT3bwRVk/z/tSg7CNYT8uGDBJv1fweh3PT5kgTy+n12nTPWZdz05TnzWnNbmbvDvyW2H5yeLfARAujdx2MFNrJfOsWZMyYjPi+/DA7Hj9+KTK3vUwbgcsoQXXOO7ysFd7Bua9O8HIjpkStLjY2kpJlGyeX007mz8yH8YH7oL+R1ZfEItj7YHxqruJ6jfb8rzU3/uUWMXSMC9M5eQWwfbkR5jeYky+RJX8QEV2gu4uXfYXGX2tKYT+9rzGaZOf2q7Pj2HJyYXdJGHPscVgFKK3wpAmallz8Pd/J/PXfzcGyMY3JHHPThmPZs7QTusJyUgyt2c1159fyUuAISC+AIW0wEh9nDm6zY+7cp8icwxxgqvu6l7Yz/43CL3hFQ9Sv/wAVAbjRA05cKvR3ZcNIWX3S2M2LME7Ihr6bwpqlNXnMoPpxAWh/oRQxhDNlh2H5gDkMpVC8OYvgspYmH39duxzmrewaesze9QNlO5lmss/r0g+GPjXeF0vQGBvyrdia2rgZ685R/bG1XHkn9Bem3KZJu5m920N3g5/wk8PLh7m5DDElynJxafESekbTINtxYdcJbXXnKXKMOS5ebAmWIth2bFQ3DT2A2HI8ZJ2GK2UsKtNsJNSI7aODsv+BpsWoMok3SLS+S5Ls5m8DmHSiFuvO/56XAoOfHN47KPw8F/U+31D1jVMVfjMNRX6aJx4I6l//T5Sd95Cdaa3XiDMohfUgM/4tySWicZs/roLlFK9rkbLPYD1exCsKaCW36ufP853EvexkztAN7Qe9W3Yli3I1peHXsP4g0yw1S7Pd0dTFNzlLecqBJxY9mIYpJ7dh4QHtOTsH2bu9716rpt30W5dmxRvTcHzkwzj3/k5UnSyAtVbmCJgDsFUUoDp3Ky7OHts4GV3R2RXDUu76XltFsWzx5pZQDHOpL+eTfS77e83FzX2p9uLcgvWocFtNhjn03L/iKq+FOvZD78H80nJYdu2D7UIRc35mdpH4QcLG6rSC/Vnm6HasbRy38TCdwF7DwkXn91pqYZcv3twC7JXMKPtwPrfPddvx3B3bjjdhPaWQxl/OIvdDvBziGBLj2F0dDV3/CTAtXgnT5Akw3NrkBHTp/WF4eD6M92TxFicK8wIy/qYmth17XHf20McpT5PQCMsWjGUO4Bim9fa+rNi8+zMxvWw/fvXQPCxVdHbKtqotdlMJJbspZ+EQ79196857nvu3aHS0qnZTZ2fkPTQMlaX+WHFSoDZxScnI2rGf1wDSrteAgbwmCHXOHT3iV/0MU9e0fPNXiVrYchbAcpBXiYdYtDhAtoIKjeG9u4dXWoiv53P7vSLYlq2Cpx5n3Zj5MA3x0pXZlr/ZCbl2NP93nQa7Edsjc9M6SfkjAUlaEQgEgcHWqrmRZtiPvuvq7DSEPWef8v6NAoEM4fAEgjDCvndPM4t8y6hj0dOX62De4TqtRlt437/R3tCOMnAFXhEOTyAIJ8r2SYt803qk1tNnYa9kzk/eF9hQC/vVPNj2fQjzS6tg+c5Dpph8HNTG3kdjqK2lvMK388k/t6ai2fFXaf9G+j/k4691BbAdUXtPRYFWEWN4GkOM4Wkbf4/hCfyHGMPTLmIMTyAQCATtCsnh2ex26HThuZhSOEEakVbOUM1uk/fjCEIR0klry64JPNMxMQnP9OrMa4JQhTQirQjJ4dVZLNDr27xsrMDPkEaklTP1NjvM9a2fXSMIHKQT6SUID4Td1AbOdlNyeGW1DTCYjFKDIHQhjUgrZ8rqmBG9fp3XBKEM6UR6CcIDYTe1gbPdlBzepeoaICJSahCEMEwjSSsnLpZXobxMgws2t0NIJ9JLEB4Iu6kRnOym5PAuVFbDwMI+g0E8rYQqpA1pRFo5Q/UGFjk01LZg7pUg4JA+pJNcP4F2cdjNeRnK2/UIgg9p42w3JYdHyRAnyypgiGkH23RrFNKGNJInF1H9RPE1FF+6xFsEoQjpQzrJ9RNJR9pAKeFI2M3QR243JYcXnXATTpaWw8wUjYjS8MqrYQppQtqQRqSVMw7tysvLUVUi5lKGIqQL6aOkXwPTVSQdhT6kEWnlDGn5zLEfpXtzQR+F3f8FQYU0IW1II8d9Jzm8pIzeUiX3SjEiYjrAGBEh1QXBh7QgTUgbwqGVA0f9fy5eQcnFC6ipaMNWBALVIT1IF9KHkOtXCZ1IOtIApBFp5Yzcbj6X2V2qC4IPaaFkNyWHlzrwp1KlvK4B+wuKENUxVkR6IQBpQFqQJqQN4dDKgbN2+y4WoujMGRHphQikA+lBunjSryapi0g60gCkEWnljEPLtT9evmE3RaQXfEgDh90kbQiHVpLDy7r3PqlCFF2vxd/OX4bZyCKL2DiRyBIE6JrTtScNSAvSxIGzVoRcu93nLuHCuXO49OOPIpElSNB1p+tPOpAe3vRLGPmASDoKcRwJR6SVM85arjh18YbdXHBbb5HIEgTomtO1d9hN0sSBQytpLU0qvP/YI7hwKFdqdNA3KQF9E+NhtVmZ6vWwmi2wsTJ/i0AlaECVJkdKc3oiIqWsIhpopTEfZ3reORiP/+ljXmvCk3b9Ot2EiA4dkJCYhEj20xQZCZ1eesYRqAglNEiTyplRpEiAjCMlqPiiX3XJVeQ8eA8GZqSh+80381ZBKEEPL0fOnMeYz79Bx2TXlVXo3lvy6U5ea+S1/jcr2s3XzmllC2htQCuoKNlNGrNzZuXD2TfuuxsOL//bPdj268elRjk94zqie8cYJEZHIMpohF6WaSZoG7RcGK0EQJMjab6Ip9T1iX94H72Hj+S1JprTrkdCLBKjIhGp18lGIQRqQDcQraBCk8ppnl1L9ftq2SKkHN6Lnr16ITY5mbcKQgHqlqZIvWjQCNy/bDVvbYLuvZEPuEZ+Dlb26yXZzThzrbS0VbXoulYdY1z8Dbu55MQ53urKni+/vHHf3XB4RM6KJTj8p3d4TRBKDHrsCYxZupLX3BHahTbe9KMob9uD9+LuTvFIychATHwCPyIIJpRwJI3BFldg4ud/c4vuHNC999RLL/OaIJR4a+FzLvedYRmDl3HziJG48v0xlJ07y1sEocDNP7sXD738Oq8pI7QLXZrTj7LJIlO64cCOT5BkM8NoMiFSzO0KKhTZFZ8/JyUcDXnhJaT+5A5+xB2697pdOI1d//cDbxGEAmsf+4Xbfefi8Ijbfv4wivNOoiT/NG8RBJO+9/0rJrzhW+QmtAs9fNWvc1ZfmCMisf+rLxFnt8JcU4Oo6GgYmPMTBA5KUCk8fx5FhYXYe+EyBvzHAgz4xWP8qGfo3utZeAE5R4/xFkEwee1XUxTvOzeHR/T71wehNxpxPvcAbxEEgxFz5uP+F1bxmm8I7UKHluqXOmAQIjql4L+2b4e5rg6RtdW4XlUJvZ0nNhkMN1aMEKiDlHDErnVNRQWuFlzEtSuX8X+XCnHw0lXcu3wNBk2exn+zeejeuzMxDp98vYu3CILB1lfWerzvXMbw5Fy7cA7/++5mHN+xHfVVYtHbQBAZG4vbHxqPn059Ejf17MVbW47QLjiooV/x6VP47/VrkLc7RyQd+RmlhKOsUWPwszkL0CmzT+MvtRDne+/1f4ohhkAw65Z0n+47rw7PmbP/sw+FPxxHxeUCmMWcIVUxRUcjvlsqutx6O9L/5W7eqh5CO//iL/0KjhzC959/gvx936CcRR8C/5GQ2gO9774Htz34b0gdeCdvbTvi3vMfrbnvfHZ4AoEgeFAmZ+XlyzDXCaOpJqaoaMR16+YxA1MQXgiHJxAIBIJ2APD/xZiiPbfy1bwAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/app/games/space-storm/resources/images/symbols/reel.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reel.af5b458cd077099eae34.png";

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngp-logo{\r\n    color: gold;\r\n    float:left;\r\n    clear:left;\r\n    cursor: pointer;\r\n}\r\n\r\n.ngp-logo:hover{\r\n    color: lightgoldenrodyellow;\r\n}\r\n\r\n.ngp-logo:hover .logo-image{\r\n   border: 2px ridge lightgoldenrodyellow;\r\n}\r\n.ngp-logo:hover .logo-text{\r\n    box-shadow: 2px 0px 10px lightgoldenrodyellow;\r\n    background-color: #322;\r\n}\r\n\r\n.logo-image{\r\n    height: 75px;\r\n    width: 160px;\r\n    border: 2px ridge #A60;\r\n    border-radius: 15px;\r\n    animation: bannner-shadow 0.4s ease infinite;\r\n}\r\n\r\n@keyframes bannner-shadow {\r\n\t0%,100%{\r\n        box-shadow: 2px 0px 15px darkgoldenrod;\r\n\t}\r\n\t50%{\r\n        box-shadow: 2px 0px 10px gold;\r\n    }\r\n}\r\n\r\n.logo-image-container{\r\n    border-top: 4px double;\r\n    padding-right: 10px;\r\n    border-bottom: 4px double;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.logo-text{\r\n    display: inline-block;\r\n    font-size: 24px;\r\n    vertical-align: middle;\r\n    border-left: 4px double;\r\n    font-weight: 400;\r\n    font-family: neon;\r\n    line-height: 1;\r\n    box-shadow: 1px 0px 5px #322;\r\n    padding-right: 10px;\r\n\r\n    margin-top: 3px;\r\n    border-right: 0.2px solid #433;\r\n    border-top: 0.5px solid #433;\r\n    border-bottom: 0.5px solid #433;\r\n    padding-top: 3px;\r\n\r\n}\r\n\r\n.n-animate{\r\n    animation: n-flicker 3s linear infinite;\r\n}\r\n\r\n.g-animate{\r\n    animation: g-flicker 3s linear infinite;\r\n}\r\n\r\n.p-animate{\r\n    animation: p-flicker 3s linear infinite;\r\n}\r\n\r\n@keyframes n-flicker {\r\n\t0%, 100%{\r\n        opacity: 1;\r\n        color: white;\r\n        text-shadow: 0 0 10px #FA1C16, 0 0 3px #FA1C16, 0 0 10px #FA1C16, 0 0 10px #FA1C16, 0 0 15px #FED128, .5px .5px 8px #806914;\r\n\t}\r\n\t25%,50%,75%{\r\n        opacity: 0.8;\r\n        color: gold;\r\n\t\ttext-shadow: 0 0 .5px #800E0B, 0 0 1.5px #800E0B, 0 0 5px #800E0B, 0 0 5px #800E0B, 0 0 .2px #800E0B, .5px .5px .1px #40340A;\r\n\t}\r\n}\r\n\r\n@keyframes g-flicker {\r\n\t25%{\r\n        opacity: 1;\r\n        color: white;\r\n        text-shadow: 0 0 10px #FA1C16, 0 0 3px #FA1C16, 0 0 10px #FA1C16, 0 0 10px #FA1C16, 0 0 15px #FED128, .5px .5px 8px #806914;\r\n\t}\r\n\t0%,50%,100%{\r\n        opacity: 0.8;\r\n        color: gold;\r\n\t\ttext-shadow: 0 0 .5px #800E0B, 0 0 1.5px #800E0B, 0 0 5px #800E0B, 0 0 5px #800E0B, 0 0 .2px #800E0B, .5px .5px .1px #40340A;\r\n\t}\r\n}\r\n\r\n@keyframes p-flicker {\r\n\t50%{\r\n        opacity: 1;\r\n        color: white;\r\n        text-shadow: 0 0 10px #FA1C16, 0 0 3px #FA1C16, 0 0 10px #FA1C16, 0 0 10px #FA1C16, 0 0 15px #FED128, .5px .5px 8px #806914;\r\n\t}\r\n\t0%,25%,75%,100%{\r\n        opacity: 0.8;\r\n        color: gold;\r\n\t\ttext-shadow: 0 0 .5px #800E0B, 0 0 1.5px #800E0B, 0 0 5px #800E0B, 0 0 5px #800E0B, 0 0 .2px #800E0B, .5px .5px .1px #40340A;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"homePage()\" class=\"col-md-6 col-sm-6 col-xs-6\">\n    <div class=\"ngp-logo\">\n      <span class=\"logo-image-container\">\n        <img src=\"./assets/Images/logo-slot.gif\" class=\"logo-image\" >\n      </span>\n      <div class=\"logo-text\">\n        <div class=\"n-animate\">__Nuendo</div>\n        <div class=\"g-animate\">__Gaming</div>\n        <div class=\"p-animate\">__Portal</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-sm-6 col-xs-6\">\n    <div [hidden]=\"isUserLoggedInP\">\n      <app-login [isUserLoggedIn]=\"isUserLoggedInP\" (loggedInUserName)=\"userNameReceivedHandler($event)\" (logInStatus)=\"loginStatusChangedHandler($event)\"></app-login>\n    </div>\n    <div [hidden]=\"!isUserLoggedInP\">\n      <app-dropdown (dropDownStatus)=\"loginStatusChangedHandler($event)\" [profileName]=\"profileName\"></app-dropdown>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_service__ = __webpack_require__("../../../../../src/app/shared/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contracts_component_toggel_service__ = __webpack_require__("../../../../../src/app/contracts/component-toggel-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    /**
     * Create an instance of HeaderComponent and set isUserLoggedInP to either true or false
     * depending on the prsence of auth token
     *
     * @param _navService An object of SharedService type
     * @param _router An object of Router type
     *
     */
    function HeaderComponent(_navService, _router) {
        this._navService = _navService;
        this._router = _router;
        var authToken = localStorage.getItem('auth_token');
        if (authToken) {
            this.isUserLoggedInP = true;
            this.profileName = localStorage.getItem('username');
        }
        else {
            this.isUserLoggedInP = false;
        }
        this.sharedService = _navService;
        this.router = _router;
    }
    /**
     * Toggle the login status of the user
     *
     * @param status Represent the user login status
     *
     */
    HeaderComponent.prototype.loginStatusChangedHandler = function (status) {
        this.isUserLoggedInP = status;
    };
    /**
     * Set the name of the user
     *
     * @param username Represent the name of the currently logged in user
     *
     */
    HeaderComponent.prototype.userNameReceivedHandler = function (username) {
        this.profileName = username;
    };
    /**
     * Navigate the user to homepage when user click on the NGP logo in header
     */
    HeaderComponent.prototype.homePage = function () {
        this.router.navigateByUrl('');
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup, rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_2__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.sharedService.toggelDisplayPanel(componentVisibilityObject);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    })
    /**Define the elements of header section of the home page( the logo, sign up, and dropdown section) */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderService = (function () {
    /**
     * Create an instance of App config and HeaderService
     *
     * @param _http An object of Http type.
     *
     */
    function HeaderService(_http) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */]();
        this.httpServiceProvider = _http;
    }
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of
     * Shared so that a user can login.
     *
     * @param userName The username of the user.
     * @param password The password of the user.
     * @return An observable of ApiResponse type.
     *
     */
    HeaderService.prototype.login = function (userName, password) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post,
            url: this.config.RouteConstants.loginRoute,
            body: "username=" + userName + "&password=" + password,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* apiCall */](request, this.httpServiceProvider, false);
    };
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of
     * Shared for logging out the currently logged in user.
     *
     * @return An observable of ApiResponse type.
     *
     */
    HeaderService.prototype.logout = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Delete,
            url: this.config.RouteConstants.loginRoute,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of
     * Shared for getting user cash from cash bucket.
     *
     * @return  An observable of ApiResponse type.
     *
     */
    HeaderService.prototype.getcash = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get,
            url: this.config.RouteConstants.getCash,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* apiCall */](request, this.httpServiceProvider, true);
    };
    return HeaderService;
}());
HeaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /**Define the services used for login, logout and getting user cash */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], HeaderService);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/header.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".central-area{\r\n    height: 65%; \r\n}\r\n\r\n.right-panel{\r\n    margin-top: 10px;\r\n} \r\n\r\n.left-panel{\r\n    min-height: 500px;\r\n} \r\n\r\n.about-section{\r\n  height: 32.33%; \r\n  display:block; \r\n  margin-top:10px;\r\n}\r\n.jackpot-section{\r\n  height: 30%;\r\n  display: block;\r\n}\r\n.news-section{\r\n height: 33.33%;\r\n display: block;\r\n margin-top:8px;\r\n}\r\n.team-info-section{\r\n  height: 32.35%;\r\n  display: block;\r\n  margin-top:10px;\r\n} \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid body-container-wrapper\">\n    <div class=\"row\">\n        <div class=\"left-panel col-md-3 col-sm-3 col-xs-3 full-height-wrapper\">\n            <app-left-panel (slotGameListStatus)=\"slotGameListChangedHandler($event)\" (tableGameListStatus)=\"tableGameListChangedHandler($event)\"\n                (blackjackListStatus)=\"blackjackListChangedHandler($event)\" (sportsBettingListStatus)=\"sportsBettingListChangedHandler($event)\"\n                (casinoListStatus)=\"casinoListChangedHandler($event)\" (pokerListStatus)=\"pokerListChangedHandler($event)\">\n            </app-left-panel>\n        </div>\n        <div class=\"right-panel\">\n            <div class=\"col-md-9 col-sm-9 col-xs-9\" [hidden]=\"isRightPanelHidden\">\n                <!-- <div class=\"row\"> -->\n                    <div class=\"col-md-8 col-sm-8 col-xs-8 full-height-wrapper\">\n                        <div class=\"central-area right-panel-UI\">\n                            <app-promotion-carousel [hidden]=\"isPromotionalCarouselHidden\"></app-promotion-carousel>\n                            <app-slot-game-list [hidden]=\"isSlotGameListHidden\"></app-slot-game-list>\n                            <app-table-game-list [hidden]=\"isTableGameListHidden\"></app-table-game-list>\n                            <app-blackjack-game [hidden]=\"isBlackjackListHidden\"></app-blackjack-game>\n                            <app-sports-betting-list [hidden]=\"isSportsBettingListHidden\"></app-sports-betting-list>\n                            <app-casino-list [hidden]=\"isCasinoListHidden\"></app-casino-list>\n                            <app-poker-games [hidden]=\"isPokerListHidden\"></app-poker-games>\n\n                        </div>\n                        <app-about-section class=\"right-panel-UI about-section\"></app-about-section>\n\n                    </div>\n                    <div class=\"col-md-4 col-sm-4 col-xs-4 full-height-wrapper\">\n                        <app-jackpot-section class=\"right-panel-UI jackpot-section\"></app-jackpot-section>\n                        <app-news class=\"right-panel-UI news-section\"></app-news>\n                        <app-compliance-section class=\"right-panel-UI team-info-section\"></app-compliance-section>\n                    </div>\n                <!-- </div> -->\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-9 right-panel-UI\" [hidden]=\"!isRightPanelHidden\">\n                <app-transaction-history [hidden]=\"isTransactionHistoryHidden\"></app-transaction-history>\n                <app-promotion-links [hidden]=\"isPromotionalLinksHidden\"></app-promotion-links>\n                <app-account-details [hidden]=\"isMyAccountDetailsHidden\"></app-account-details>\n                <app-article-list [hidden]=\"isActivityListHidden\"></app-article-list>\n                <app-project-list [hidden]=\"isProjectListHideden\"></app-project-list>\n                <app-quality-regulations-list [hidden]=\"isRegulationListHidden\"></app-quality-regulations-list>\n                <app-responsible-gaming [hidden]=\"isResponsibleGamingHidden\"></app-responsible-gaming>\n            </div>\n        </div>\n       \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_service__ = __webpack_require__("../../../../../src/app/shared/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    /**
     * Create an instance of HomeComponent and intially hide all the components expect the right panel.
     * @param _navService An object of SharedService type.
     */
    function HomeComponent(_navService) {
        this._navService = _navService;
        this.isPromotionalCarouselHidden = false;
        this.sharedService = _navService;
        this.isSlotGameListHidden = true;
        this.isTableGameListHidden = true;
        this.isBlackjackListHidden = true;
        this.isSportsBettingListHidden = true;
        this.isCasinoListHidden = true;
        this.isPokerListHidden = true;
    }
    /**
     * Method provided by OnInit and it is mandatory to overide the function when using OnInit.
     * It is subscriber for shared service that toggles the different list visibilty on home page
     * depending on the message recived.
     */
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.sharedService.observableToggelDisplayPanel().subscribe(function (message) {
            _this.isTransactionHistoryHidden = message.transactionHistory;
            _this.isPromotionalLinksHidden = message.promotionLinks;
            _this.isMyAccountDetailsHidden = message.accountDetails;
            _this.isActivityListHidden = message.articlesList;
            _this.isProjectListHideden = message.projectList;
            _this.isRegulationListHidden = message.regulationList;
            _this.isResponsibleGamingHidden = message.responsibleGamingList;
            _this.isRightPanelHidden = message.rightPanel;
        });
    };
    /**
      * Method provided by OnInit.
      * It prevent memory leak when component is destroyed.
      */
    HomeComponent.prototype.OnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
      * Handle the visibilty of slot game list on home page by hiding the other components/list.
      * @param slotGameListStatus Define the visibility status of slot game list.
      * @return void
      */
    HomeComponent.prototype.slotGameListChangedHandler = function (slotGameListStatus) {
        this.isSlotGameListHidden = slotGameListStatus;
        this.isPromotionalCarouselHidden = true;
        this.isTableGameListHidden = true;
        this.isBlackjackListHidden = true;
        this.isSportsBettingListHidden = true;
        this.isCasinoListHidden = true;
        this.isPokerListHidden = true;
    };
    /**
      * Handle the visibilty of table game list on home page by hiding the other components/list.
      * @param tableGameListStatus Define the visibility status of table game list.
      * @return void
      */
    HomeComponent.prototype.tableGameListChangedHandler = function (tableGameListStatus) {
        this.isTableGameListHidden = tableGameListStatus;
        this.isPromotionalCarouselHidden = true;
        this.isSlotGameListHidden = true;
        this.isBlackjackListHidden = true;
        this.isSportsBettingListHidden = true;
        this.isCasinoListHidden = true;
        this.isPokerListHidden = true;
    };
    /**
      * Handle the visibilty of blackjack list on home page by hiding the other components/list.
      * @param blackjackListStatus Define the visibility status of blackjack list.
      * @return void
      */
    HomeComponent.prototype.blackjackListChangedHandler = function (blackjackListStatus) {
        this.isBlackjackListHidden = blackjackListStatus;
        this.isPromotionalCarouselHidden = true;
        this.isSlotGameListHidden = true;
        this.isTableGameListHidden = true;
        this.isSportsBettingListHidden = true;
        this.isCasinoListHidden = true;
        this.isPokerListHidden = true;
    };
    /**
      * Handle the visibilty of sports betting list on home page by hiding the other components/list.
      * @param sportsBettingListStatus Define the visibility status of sports betting list.
      * @return void
      */
    HomeComponent.prototype.sportsBettingListChangedHandler = function (sportsBettingListStatus) {
        this.isSportsBettingListHidden = sportsBettingListStatus;
        this.isPromotionalCarouselHidden = true;
        this.isSlotGameListHidden = true;
        this.isTableGameListHidden = true;
        this.isBlackjackListHidden = true;
        this.isCasinoListHidden = true;
        this.isPokerListHidden = true;
    };
    /**
      * Handle the visibilty of casino list on home page by hiding the other components/list.
      * @param casinoListStatus Define the visibility status of casino list.
      * @return void
      */
    HomeComponent.prototype.casinoListChangedHandler = function (casinoListStatus) {
        this.isCasinoListHidden = casinoListStatus;
        this.isPromotionalCarouselHidden = true;
        this.isSlotGameListHidden = true;
        this.isTableGameListHidden = true;
        this.isBlackjackListHidden = true;
        this.isSportsBettingListHidden = true;
        this.isPokerListHidden = true;
    };
    /**
     * Handle the visibilty of poker list on home page by hiding the other components/list.
     *
     * @param pokerListStatus Define the visibility status of poker list.
     * @return void
     *
     */
    HomeComponent.prototype.pokerListChangedHandler = function (pokerListStatus) {
        this.isPokerListHidden = pokerListStatus;
        this.isPromotionalCarouselHidden = true;
        this.isSlotGameListHidden = true;
        this.isTableGameListHidden = true;
        this.isBlackjackListHidden = true;
        this.isSportsBettingListHidden = true;
        this.isCasinoListHidden = true;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
    })
    /** Define the elements oh home page including left and right panel */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/jackpot-section/jackpot-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jackpot-section{\r\n    border: 1px solid transparent;\r\n    border-radius: 2px;\r\n    height: 100%;\r\n    text-align: center;\r\n    padding: 20px;\r\n }\r\n.odometer{\r\n    font-size: 33px;\r\n}\r\n.dollar{\r\n    color: #fff;\r\n    font-size: x-large;\r\n    line-height: inherit;\r\n}\r\n.jackpot-text{\r\n    margin-bottom: 20px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jackpot-section/jackpot-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jackpot-section \">\n  <div class=\"text-heading jackpot-text\">\n    NGP Jackpot Prize\n  </div>\n  <div class=\"fa fa-usd fa-lg dollar\" aria-hidden=\"true\"></div>&nbsp;&nbsp;<span id=\"odometer\" class=\"odometer\" format=\"dddd.dd\">1000</span>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/jackpot-section/jackpot-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jackpot_section_jackpot_section_service__ = __webpack_require__("../../../../../src/app/jackpot-section/jackpot-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JackpotSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JackpotSectionComponent = (function () {
    /**
     * Create an instance of AppConfig and JackpotSectionComponent.
     * Call getjackpotCash() so that the jackpot counter is visible when page is refreshed.
     *
     * @param _renderer An object of ElementRef type.
     * @param _jackpotService An object of JackpotSectionService type.
     *
     */
    function JackpotSectionComponent(_jackpotService) {
        this._jackpotService = _jackpotService;
        this.jackpotService = _jackpotService;
        this.config = new __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]();
        this.getjackpotCash();
    }
    /**
     * Call the getjackpotCash() so as to update the jackpot counter at a specific interval.
     */
    JackpotSectionComponent.prototype.ngOnInit = function () {
        setInterval(function () {
            //this.getjackpotCash();
        }, this.config.Timeouts.jackpotCashInterval);
    };
    /**
      * Call the jackpot service API and updated the jackpot counter accordingly.
      * Success Update the jackpot counter.
      * Error Log the error in console.
      *
      * @returns void
      *
      */
    JackpotSectionComponent.prototype.getjackpotCash = function () {
        // this.jackpotService.getJackpotCounter()
        //   .subscribe(
        //   (response) => {
        //     this.odometerInstance = document.getElementById('odometer');
        //     this.odometerInstance.format = '(,ddd).dd';
        //     this.odometerInstance.innerHTML = response.body.jackpotCounter;
        //   },
        //   (error) => {
        //     // popUpToast(this.config.StringConstants.genericApiError, this.config.Timeouts.toastDuration)
        //     console.log('ERROR!');
        //   }
        //   )
    };
    return JackpotSectionComponent;
}());
JackpotSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-jackpot-section',
        template: __webpack_require__("../../../../../src/app/jackpot-section/jackpot-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jackpot-section/jackpot-section.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__jackpot_section_jackpot_section_service__["a" /* JackpotSectionService */]]
    })
    /** Define the jackpot counter dispalyeds on the home page  */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__jackpot_section_jackpot_section_service__["a" /* JackpotSectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__jackpot_section_jackpot_section_service__["a" /* JackpotSectionService */]) === "function" && _a || Object])
], JackpotSectionComponent);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/jackpot-section/jackpot-section.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JackpotSectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JackpotSectionService = (function () {
    /**
     * Create an instance of App config and JackpotSectionService.
     * @param _http An object of HTTP type.
     */
    function JackpotSectionService(_http) {
        this.config = new __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */]();
        this.httpServiceProvider = _http;
    }
    /**
     *  Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * to get the value of jackpot counter.
     *
     * @return An observable of ApiResponse type.
     *
     */
    JackpotSectionService.prototype.getJackpotCounter = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get,
            url: this.config.RouteConstants.getJackpotCash,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* apiCall */](request, this.httpServiceProvider, false);
    };
    return JackpotSectionService;
}());
JackpotSectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
    /** Define the service required to fetch the jackpot counter data */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], JackpotSectionService);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/jackpot-section.service.js.map

/***/ }),

/***/ "../../../../../src/app/left-panel/left-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-side-menu {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-weight: 200;\r\n  width: 100%;\r\n \r\n}\r\n.nav-side-menu .brand {\r\n  background-color: #23282e;\r\n  line-height: 50px;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.nav-side-menu .toggle-btn {\r\n  display: none;\r\n}\r\n.nav-side-menu ul,\r\n.nav-side-menu li {\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  line-height: 27px;\r\n  cursor: pointer;\r\n  text-overflow:ellipsis;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  \r\n }\r\n\r\n .upper-nav-side-menu{\r\n  height: 62%;\r\n  /* margin-top:18px; */\r\n }\r\n\r\n .lower-nav-side-menu{\r\n  height: 30%;\r\n  display:block;\r\n  margin-top:15px;\r\n }\r\n\r\n /* Required in case we want the left panel list to be collapsed intially */\r\n /* .nav-side-menu ul :not(collapsed).arrow:before,\r\n.nav-side-menu li :not(collapsed).arrow:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f078\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n  float: right;\r\n  \r\n} */\r\n.nav-side-menu ul .active,\r\n.nav-side-menu li .active {\r\n  border-left: 3px solid #d19b3d;\r\n  background-color: #4f5b69;\r\n}\r\n\r\n.nav-side-menu ul .sub-menu li.active,\r\n.nav-side-menu li .sub-menu li.active {\r\n  color: #d19b3d;\r\n  \r\n}\r\n.nav-side-menu ul .sub-menu li.active a,\r\n.nav-side-menu li .sub-menu li.active a {\r\n  color: #d19b3d;\r\n}\r\n.nav-side-menu ul .sub-menu li,\r\n.nav-side-menu li .sub-menu li {\r\n  background: rgba(28, 26, 26, 1);\r\n  border-left: 3px solid #2e353d;\r\n  line-height: 28px;\r\n  border-bottom: 1px solid #23282e;\r\n  margin-left: 0px;\r\n  /* When text overflow beyond the space provided */\r\n  text-overflow:ellipsis;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  \r\n}\r\n\r\n.nav-side-menu li:hover,\r\n.nav-side-menu ul .sub-menu li:hover,\r\n.nav-side-menu li .sub-menu li:hover {\r\n  border-left: 3px solid #ff5252; \r\n  background-color: rgba(66, 50, 50, 1);\r\n}\r\n.nav-side-menu ul .sub-menu li:before,\r\n.nav-side-menu li .sub-menu li:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F105\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n}\r\n.nav-side-menu li {\r\n  padding-left: 0px;\r\n  border-left: 3px solid #2e353d;\r\n  border-bottom: 1px solid #23282e;\r\n  \r\n }\r\n\r\n.nav-side-menu li a {\r\n  text-decoration: none;\r\n  color:beige;\r\n  margin: 10px;\r\n  font-size: 24px;\r\n  font-weight: inherit;\r\n } \r\n\r\n .upper-menu-list li{\r\n  margin-bottom: 15px;\r\n  background: rgba(28, 26, 26, 1);\r\n  box-shadow: 0 3px 3px 0 rgba(100,80,80,0.5); \r\n  transition: all 1s;\r\n  }\r\n\r\n.upper-menu-list li > .image-container {\r\n  display: inline-block;\r\n  width: 68px;\r\n  height: 10%;\r\n  padding-left :5px; \r\n    transition: all 1s;\r\n}\r\n\r\n.nav-side-menu li.selected a{\r\n    color: darkgoldenrod; \r\n}\r\n.nav-side-menu li.selected .image-container{\r\n    padding-left :30px;\r\n}\r\n.nav-side-menu li.selected,\r\n.nav-side-menu ul .sub-menu li.selected{\r\n  border-left: 3px solid beige; \r\n  background-color: rgba(90, 50, 50, 1);\r\n}\r\n\r\n.upper-menu-list li:hover > .image-container {\r\n    padding-left :30px;\r\n}\r\n\r\n.nav-side-menu li a:hover{\r\n   color: #ff5252; \r\n}\r\n .lower-menu-list li a{\r\n   font-size: 16px;\r\n   margin-left:10px; \r\n}\r\n  \r\n.lower-menu-list{\r\n  margin-top:100px;\r\n \r\n}\r\n.nav-side-menu li img{\r\n  height: 38px;\r\n}\r\n\r\n.nav-side-menu li:focus{\r\n  color:red\r\n}\r\n@media (max-width: 767px) {\r\n  .nav-side-menu {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  .nav-side-menu .toggle-btn {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 10 !important;\r\n    padding: 3px;\r\n    background-color: #ffffff;\r\n    color: #000;\r\n    width: 40px;\r\n    text-align: center;\r\n  }\r\n  .brand {\r\n    text-align: left !important;\r\n    font-size: 22px;\r\n    padding-left: 20px;\r\n    line-height: 50px !important;\r\n  }\r\n}\r\n@media (min-width: 767px) {\r\n  .nav-side-menu .menu-list .menu-content {\r\n    display: block;\r\n  }\r\n}\r\n.menu-list{\r\n  margin-top:15px;\r\n \r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-panel/left-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu upper-nav-side-menu\">\n    <!-- <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i> -->\n    <div class=\"menu-list\">\n        <div class=\"menu-list upper-menu-list\">\n            <ul id=\"menu-content\" class=\"menu-content out misc-text\">\n                <li (click)=\"showSportsBetList($event)\">\n                    <span class=\"image-container\">\n                        <img src=\"./assets/Images/sports.png\" alt=\"Sports\">\n                    </span>\n                    <a href=\"#\">Sports</a>\n                </li>\n                <!-- Required in case we want the left panel list to be collapsed intially  -->\n                <!-- <li (click)=\"showCasinoList()\" data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\"> -->\n                <li (click)=\"showCasinoList($event)\" data-target=\"#service\" class=\"collapsed\">\n                    <span class=\"image-container\">\n                        <img src=\"./assets/Images/casino.png\" alt=\"Casino\">\n                    </span>\n                    <a href=\"#\"><i></i> Casino <span class=\"arrow\"></span></a>\n                </li>\n                <!-- Required in case we want the left panel list to be collapsed intially  -->\n                <!-- <ul class=\"sub-menu collapse\" id=\"service\"> if we want initial collapse -->\n                <ul class=\"sub-menu\" id=\"service\">\n                    <li (click)=\"showBlackJackGames($event)\">\n                        <span class=\"image-container\">\n                            <img src=\"./assets/Images/blackjack.png\" alt=\"Blackjack\">\n                        </span>\n                        <a href=\"#\">Blackjack Games</a>\n                    </li>\n                    <li (click)=\"showTableList($event)\">\n                        <span class=\"image-container\">\n                            <img src=\"./assets/Images/table.png\" alt=\"Table Games\">\n                        </span>\n                        <a href=\"#\">Table Games</a>\n                    </li>\n\n                    <li (click)=\"showSlotGameList($event)\">\n                        <span class=\"image-container\">\n                            <img src=\"./assets/Images/slot.png\" alt=\"Slot Games\">\n                        </span>\n                        <a href=\"#\">Slot Games </a>\n                    </li>\n                </ul>\n                <li (click)=\"showPokerList($event)\">\n                    <span class=\"image-container\">\n                        <img src=\"./assets/Images/poker.png\" alt=\"Poker\">\n                    </span>\n                    <a href=\"#\">Poker</a>\n                </li>\n            </ul>\n        </div>\n        <!--here  -->\n    </div>\n</div>\n\n\n<div class=\"nav-side-menu lower-nav-side-menu\">\n    <div class=\"menu-list\">\n        <div class=\"menu-list lower-menu-list\">\n            <ul id=\"menu-content\" class=\"menu-content out\">\n                <li (click)=\"showQuickLinkList($event,true,true,true,false,true,true,true,true)\">\n                    <a>Articles</a>\n                </li>\n\n                <li (click)=\"showQuickLinkList($event,true,true,true,true,false,true,true,true)\">\n                    <a>Projects</a>\n                </li>\n\n                <li (click)=\"showQuickLinkList($event,true,true,true,true,true,false,true,true)\">\n                    <a>Quality & Regulations</a>\n                </li>\n                <li (click)=\"showQuickLinkList($event,true,true,true,true,true,true,false,true)\">\n                    <a>Responsible Gamings</a>\n                </li>\n\n            </ul>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/left-panel/left-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__ = __webpack_require__("../../../../../src/app/contracts/component-toggel-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_service__ = __webpack_require__("../../../../../src/app/shared/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftPanelComponent = (function () {
    /**
     * Create an instance of LeftPanelComponent.
     *
     * @param _navService An object of SharedService type.
     * @param _renderer An object of ElementRef type.
     *
     */
    function LeftPanelComponent(_navService, _renderer) {
        this._navService = _navService;
        this._renderer = _renderer;
        /**Used for emitting the  visibility status of slot game to home component */
        this.slotGameListStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        /**Used for emitting the  visibility status of table game to home component */
        this.tableGameListStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        /**Used for emitting the  visibility status of blackjack game to home component */
        this.blackjackListStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        /**Used for emitting the  visibility status of sportsbetting game to home component */
        this.sportsBettingListStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        /**Used for emitting the  visibility status of casino game to home component */
        this.casinoListStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        /**Used for emitting the  visibility status of poker game to home component */
        this.pokerListStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.navService = _navService;
        this.element = _renderer;
    }
    /**
     * It highlight the currently selected list in the left pannel by removing/add the
     * appropriate css class.
     *
     * @param event Define a click event.
     *
     */
    LeftPanelComponent.prototype.toggleSelectedClass = function (event) {
        var listItems = this.element.nativeElement.getElementsByTagName('li');
        for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
            var element = listItems_1[_i];
            element.classList.remove('selected');
        }
        event.currentTarget.classList.add('selected');
    };
    /**
     * Unhide the slot game list and hide rest of the components by calling the toggelDisplayPanel()
     * of Shared service and emit an event to be subscribed by HomePage Component for notifying the status of slot game list.
     * @param event Define a click event
     * @return void
     */
    LeftPanelComponent.prototype.showSlotGameList = function (event) {
        this.toggleSelectedClass(event);
        this.isSlotGameListHidden = false;
        this.slotGameListStatus.emit(this.isSlotGameListHidden);
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup,rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    /**
     * Unhide the sports betting list and hide rest of the components by calling the toggelDisplayPanel()
     * of Shared service and emit an event to be subscribed by HomePage Component for notifying the status of sports betting list.
     * @param event Define a click event
     * @return void
     */
    LeftPanelComponent.prototype.showSportsBetList = function (event) {
        this.toggleSelectedClass(event);
        this.isSportsBettingListHidden = false;
        this.sportsBettingListStatus.emit(this.isSportsBettingListHidden);
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup,rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    /**
     * Unhide the casino list and hide rest of the components by calling the toggelDisplayPanel()
     * of Shared service and emit an event to be subscribed by HomePage Component for notifying the status of casino list.
     * @param event Define a click event
     * @return void
     */
    LeftPanelComponent.prototype.showCasinoList = function (event) {
        this.toggleSelectedClass(event);
        this.isCasinoListHidden = false;
        this.casinoListStatus.emit(this.isCasinoListHidden);
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup,rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    /**
    * Unhide the blackjack list and hide rest of the components by calling the toggelDisplayPanel()
    * of Shared service and emit an event to be subscribed by HomePage Component for notifying the status of blackjack list.
    * @param event Define a click event
    * @return void
    */
    LeftPanelComponent.prototype.showBlackJackGames = function (event) {
        this.toggleSelectedClass(event);
        this.isBlackjackListHidden = false;
        this.blackjackListStatus.emit(this.isBlackjackListHidden);
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup,rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    /**
     * Unhide the table game list and hide rest of the components by calling the toggelDisplayPanel()
      * of Shared service and emit an event to be subscribed by HomePage Component for notifying the status of table game list.
      * @param event Define a click event
      * @return void
      */
    LeftPanelComponent.prototype.showTableList = function (event) {
        this.toggleSelectedClass(event);
        this.isTableGameListHidden = false;
        this.tableGameListStatus.emit(this.isTableGameListHidden);
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup,rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    /**
     * Unhide the poker list and hide rest of the components by calling the toggelDisplayPanel()
     * of Shared service and emit an event to be subscribed by HomePage Component for notifying the status of poker list.
     *
     * @param event Define a click event
     * @return void
     *
     */
    LeftPanelComponent.prototype.showPokerList = function (event) {
        this.toggleSelectedClass(event);
        this.isPokerListHidden = false;
        this.pokerListStatus.emit(this.isPokerListHidden);
        // parameters(transactionHistory, promotionLinks, accountDetails,articlesList,projectList,regulationList,
        // responsibleGamingList, createAccountPopup,rightPanel)
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    /**
     * Display the component for which the parameter is set as false and hide the rest of the components
     * by calling the toggelDisplayPanel() of Shared service
     *
     * @param event A click event
     * @param transactionHistory Used to notify the visibility status of transaction-history component.
     * @param promotionLinks Used  to notify the visibility status of promotion-link component.
     * @param accountDetails Used  to notify the visibility status of account-detail component.
     * @param articlesList Used  to notify the visibility status of article-list component.
     * @param projectList Used to notify the visibility status of project list component.
     * @param regulationList Used  to notify the visibility status of regulation list component.
     * @param responsibleGamingList Used  to notify the visibility status of responsibleGamingList component.
     * @param rightPanel Used  to notify the visibility status of rightPanel component.
     * @return void
     *
     */
    LeftPanelComponent.prototype.showQuickLinkList = function (event, transactionHistory, promotionLinks, accountDetails, articlesList, projectList, regulationList, responsibleGamingList, rightPanel) {
        this.toggleSelectedClass(event);
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_1__contracts_component_toggel_service__["a" /* default */](transactionHistory, promotionLinks, accountDetails, articlesList, projectList, regulationList, responsibleGamingList, rightPanel);
        this.navService.toggelDisplayPanel(componentVisibilityObject);
    };
    return LeftPanelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LeftPanelComponent.prototype, "slotGameListStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LeftPanelComponent.prototype, "tableGameListStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LeftPanelComponent.prototype, "blackjackListStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LeftPanelComponent.prototype, "sportsBettingListStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LeftPanelComponent.prototype, "casinoListStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LeftPanelComponent.prototype, "pokerListStatus", void 0);
LeftPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-left-panel',
        template: __webpack_require__("../../../../../src/app/left-panel/left-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/left-panel/left-panel.component.css")]
    })
    /** Define the elements of left panel including both the upper and lower navigation list*/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object])
], LeftPanelComponent);

var _a, _b;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/left-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-sign-in{\r\n        background: #ff5252;\r\n        color: #e1ffff;\r\n        border-radius: 1px solid transparent; \r\n}\r\n\r\n.btn-sign-in:hover{\r\n    transition: all 500ms ease;\r\n    background: rgba(48, 46, 45, 1);\r\n    border-color: #ff5252;\r\n    white-space: normal;\r\n    border-radius: 1px solid transparent;\r\n\r\n}\r\n.login-textbox{\r\n    color:grey;\r\n    background-color:beige;\r\n    border: solid transparent;\r\n    border-radius: 1px;\r\n}\r\n\r\n.user-account-links { display:-ms-grid; display:grid; cursor: pointer; }\r\n\r\n.user-account-error{height: 20px; font-size: 16px;color:#ff5252;}\r\n\r\n.closeButton{\r\n    font-size: x-large;\r\n    color: #ff5252;\r\n    opacity: 1;\r\n}\r\n\r\n.panel-login {\r\n    background: rgba(66, 50, 50, 1);\r\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n}\r\n\r\n.panel-login>.panel-heading a{\r\n\ttext-decoration: none;\r\n\ttransition: all 0.1s linear;\r\n}\r\n\r\n.not-active {\r\n    cursor: not-allowed;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (keydown)=\"keyDownFunction($event)\">\n    <form class=\"navbar-form navbar-right\">\n      <div class=\"form-group\">\n        <div class=\"user-account-error hidden-xs\"></div>\n        <input class=\"form-control login-textbox\" type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"createModel.username\"\n        />\n        <a class=\"user-account-links link-color\" data-toggle=\"modal\" data-target=\"#myModal\">Create Account</a>\n        <!-- <a class=\"user-account-links link-color not-active\">Create Account</a> -->\n      </div>\n      <div class=\"form-group\">\n        <div class=\"user-account-error hidden-xs\">\n          {{message}}\n        </div>\n        <input class=\"form-control login-textbox\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"createModel.password\"\n        />\n        <a class=\"user-account-links link-color not-active\">Forget Passowrd  </a>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default btn-custom btn-sign-in\" (click)=\"login()\">Sign In</button>\n    </form>\n  </div>\n  <div class=\"sign-up-modal modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"panel panel-login modal-content\">\n        <div class=\"panel-heading \">\n          <button type=\"button\" class=\"closeButton fa fa-times close\"\n           data-dismiss=\"modal\" #closeBtn></button>\n          <div class=\"col-xs-6 \">\n            <h4 class=\"modal-title text-heading\" style=\"text-align:left;\">Register</h4>\n          </div>\n        </div>\n        <div class=\"panel-body \">\n          <div class=\"col-lg-12\">\n            <div class=\"modal-body\">\n              <app-create-account (formSubmitted)=\"closeModal()\"></app-create-account>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__ = __webpack_require__("../../../../../src/app/shared/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contracts_component_toggel_service__ = __webpack_require__("../../../../../src/app/contracts/component-toggel-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    /**
     * Create an instance of AppConfig and LoginComponent.
     *
     * @param _loginService An object of HeaderService type.
     * @param _router An object of Router type.
     * @param _navService An object of  SharedService type.
     *
     */
    function LoginComponent(_loginService, _router, _navService) {
        this._loginService = _loginService;
        this._router = _router;
        this._navService = _navService;
        /** Object for folding user related information*/
        this.createModel = {};
        /** Emit the  log in status to header component  */
        this.logInStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        /** Set the name of the current user and emit to header component to be used by dropdown component */
        this.loggedInUserName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.router = _router;
        this.loginService = _loginService;
        this.config = new __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]();
        this.sharedService = _navService;
        this.isCreateAccountPopupHidden = true;
    }
    /**
     * Method provided by OnInit and it is mandatory to overide the function when using OnInit.
     * It is subscriber for shared service to show the appropriate error message in case a error occur while the user login
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.sharedService.displayLoginError().subscribe(function (loginErrorMessage) {
            _this.message = loginErrorMessage;
        });
    };
    /**
     * Method provided by OnInit.
     * It prevent memory leak when component is destroyed.
     */
    LoginComponent.prototype.OnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    /**
     * Succes: Set the auth_token and username from the body recieved from the response.
     * Error: Show the error message if the body does not contain the token.
     *
     * @param responseBody Contain the body of response.
     *
     */
    LoginComponent.prototype.setTokenAndProceed = function (responseBody) {
        if (responseBody.token) {
            localStorage.setItem('auth_token', responseBody.token);
            localStorage.setItem('username', responseBody.username);
        }
        else {
            this.message = this.config.StringConstants.invalidCredentialsMessage;
        }
    };
    /**
     * Call the  login() method of loginService by passing the username and password specified by the user.
     * Success: Hide the Login component and unhide the dropdown component by calling toggelDisplayPanel() the of Shared service
     * and emit an event to be subscribed by Header Component to notify the user login status and user name.
     * Error:Display the Invalid credential message in a popup.
     */
    LoginComponent.prototype.login = function () {
        // this.loginService.login(this.createModel.username, this.createModel.password)
        //   .subscribe(
        //   (response) => {
        this.isUserLoggedIn = true;
        // parameters for ComponentToggleService =>
        // transactionHistory, promotionLinks, accountDetails,
        // articlesList,projectList,regulationList, responsibleGamingList,
        // createAccountPopup,rightPanel
        var componentVisibilityObject = new __WEBPACK_IMPORTED_MODULE_5__contracts_component_toggel_service__["a" /* default */](true, true, true, true, true, true, true, false);
        this.sharedService.toggelDisplayPanel(componentVisibilityObject);
        this.logInStatus.emit(this.isUserLoggedIn);
        this.loggedInUserName.emit('xyz'); // response.body.username);
        //this.setTokenAndProceed(response.body);
        this.message = '';
        //   },
        //   (error) => {
        //     this.message = this.config.StringConstants.invalidCredentialsMessage;
        //   },
        // );
    };
    /**
     * Enable the user to login by pressing the enter key.
     *
     * @param event A keyboard event
     *
     */
    LoginComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode === 13) {
            this.login();
        }
    };
    /**
     * It is called whenever we need to close modal(submit form)
     */
    LoginComponent.prototype.closeModal = function () {
        this.closeBtn.nativeElement.click();
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "logInStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "loggedInUserName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LoginComponent.prototype, "isUserLoggedIn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('closeBtn'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], LoginComponent.prototype, "closeBtn", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__header_header_service__["a" /* HeaderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__header_header_service__["a" /* HeaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news-section-wrap{\r\n    border: 1px solid transparent;\r\n    border-radius: 2px;\r\n    height: 100%;\r\n    text-align: left;\r\n    padding-left:10px;\r\n }\r\n\r\n .news-section a{\r\n   color: beige;\r\n }\r\n\r\n .news-section a:hover{\r\n    color:  #ff5252;\r\n  }\r\n  \r\n.news-section{\r\n  margin-top: 15px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"news-section-wrap text-heading\">\n  News:\n\n  <div class=\"news-section text-content\">\n    <marquee behavior=\"scroll\" scrollamount=\"3\" direction=\"up\" height=100px onmouseover=\"this.stop();\" onmouseout=\"this.start();\">\n      <ul>\n        <li><a target=\"_blank\" href=\"https://calvinayre.com/2017/09/18/business/atlantic-lottery-corp-profit-falls-uncompetitive-online/\"\n            class=\"link-color\">Atlantic Lottery Corp profit falls due to lagging digital product.</a><br></li>\n        <li><a target=\"_blank\" href=\"https://calvinayre.com/2017/09/14/business/new-zealand-tab-blocks-australia-bettors/\" class=\"link-color\">New Zealand TAB site forced to block Australian bettors.</a><br></li>\n        <li><a target=\"_blank\" href=\"https://calvinayre.com/2017/09/14/business/opap-profits-fall-one-third/\" class=\"link-color\">OPAP profits fall one-third on costs of new product rollouts.</a><br></li>\n        <li><a target=\"_blank\" href=\"https://calvinayre.com/2017/09/11/business/red-rake-gaming-signs-new-collaboration-agreement-avento/\"\n            class=\"link-color\">Red Rake Gaming signs new collaboration agreement with Avento.</a><br></li>\n        <li><a target=\"_blank\" href=\"https://calvinayre.com/2017/09/11/business/australia-links-illegal-gambling-operators-asian-crime-gangs/\"\n            class=\"link-color\">Australia links illegal gambling operators to Asian crime gangs.</a><br></li>\n      </ul>\n    </marquee>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/news.component.js.map

/***/ }),

/***/ "../../../../../src/app/poker-games/poker-games.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poker-section{\r\npadding: 10px;\r\ntext-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poker-games/poker-games.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"poker-section text-heading\">\n  Poker\n</div>\n<app-coming-soon></app-coming-soon>"

/***/ }),

/***/ "../../../../../src/app/poker-games/poker-games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerGamesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PokerGamesComponent = (function () {
    function PokerGamesComponent() {
    }
    PokerGamesComponent.prototype.ngOnInit = function () {
    };
    return PokerGamesComponent;
}());
PokerGamesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-poker-games',
        template: __webpack_require__("../../../../../src/app/poker-games/poker-games.component.html"),
        styles: [__webpack_require__("../../../../../src/app/poker-games/poker-games.component.css")]
    })
    /**
     * Define the poker game section of the home page
     */
    ,
    __metadata("design:paramtypes", [])
], PokerGamesComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/poker-games.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-list/project-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-list{\r\n    border: 2px solid transparent;\r\n    width:100%;\r\n    height:calc(100vh - 170px);\r\n    padding: 10px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project-list text-heading\">\n  Projects\n  <app-coming-soon></app-coming-soon>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectListComponent = (function () {
    function ProjectListComponent() {
    }
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-project-list',
        template: __webpack_require__("../../../../../src/app/project-list/project-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-list/project-list.component.css")]
    })
    /** Define the different project list  */
    ,
    __metadata("design:paramtypes", [])
], ProjectListComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/project-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/promotion-carousel/promotion-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n .promotion-carousel{\r\n     overflow:hidden;\r\n     height: 100%;\r\n}\r\n\r\n .promotion-carousel-image{\r\n height:100%;\r\n width:100%;\r\n opacity: 0.3;\r\n }\r\n\r\n.promotion-carousel-image-cointainer{\r\n height:400px;\r\n padding:20px;\r\n}\r\ndiv.description{\r\n    padding: 40px 100px 20px 100px;\r\n    position: absolute;\r\n    left:9px;\r\n    color: white;\r\n    top: 45px;\r\n    filter: alpha(opacity=60);\r\n}\r\np.description_content{\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    text-align: justify;\r\n}\r\n\r\n.promotional-heading{\r\n    font-size: 30px;\r\n     font-weight: bold;\r\n    top: 22px;\r\n    position: absolute;\r\n    color: white;\r\n    width:100%;\r\n}\r\n.heading-centre-align{\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promotion-carousel/promotion-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"promotion-carousel\">\n\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n        </ol>\n\n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\">\n            <div class=\"item active\">\n                <div class=\"promotion-carousel-image-cointainer\">\n                    <div class=\"promotional-heading\">\n                            <h1 class=\"heading-centre-align\">{{complianceHeading}}</h1>\n                    </div>\n                    <img src=\"./assets/Images/compliance.jpg\" alt=\"Slide 1\" class=\"promotion-carousel-image\">\n                    <div class='description'>\n                        <!-- description content -->\n                        <p class='description_content'>{{complianceText }}</p>\n                        <!-- end description content -->\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"item\">\n                <div class=\"promotion-carousel-image-cointainer\">\n                        <div class=\"promotional-heading demo_1\">\n                                <h1 class=\"heading-centre-align\">{{multiChannelHeading}}</h1>\n                            </div>\n                    <img src=\"./assets/Images/multichannel.jpg\" alt=\"Slide 2\" class=\"promotion-carousel-image\">\n                    <div class='description'>\n                        <!-- description content -->\n                        <p class='description_content'>{{multiChannelText}}</p>\n                        <!-- end description content -->\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"item\">\n                <div class=\"promotion-carousel-image-cointainer\">\n                        <div class=\"promotional-heading\">\n                                <h1 class=\"heading-centre-align\">{{ animationHeading}}</h1>\n                            </div>\n                    <img src=\"./assets/Images/customgaming.jpg\" alt=\"Slide 3\" class=\"promotion-carousel-image\">\n                    <div class='description'>\n                        <!-- description content -->\n                        <p class='description_content'>{{animationText }}</p>\n                        <!-- end description content -->\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"item\">\n                <div class=\"promotion-carousel-image-cointainer\">\n                        <div class=\"promotional-heading\">\n                                <h1 class=\"heading-centre-align\">{{ customGamingHeading}}</h1> \n                            </div>\n                    <img src=\"./assets/Images/animation.jpg\" alt=\"Slide 4\" class=\"promotion-carousel-image\">\n                    <div class='description'>\n                        <!-- description content -->\n                        <p class='description_content'>{{customGamingText}}</p>\n                        <!-- end description content -->\n                    </div>\n                </div>\n\n            </div>\n            <!-- Left and right controls -->\n            <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n            <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n        </div>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/promotion-carousel/promotion-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionCarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromotionCarouselComponent = (function () {
    /**
     * Create an instance of AppConfig and PromotionCarouselComponent.
     * Set the content of different slides in the carousel.
     */
    function PromotionCarouselComponent() {
        this.config = new __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */]();
        this.complianceHeading = this.config.StringConstants.complianceHeading;
        this.complianceText = this.config.StringConstants.complianceText;
        this.multiChannelHeading = this.config.StringConstants.multiChannelHeading;
        this.multiChannelText = this.config.StringConstants.multiChannelText;
        this.animationHeading = this.config.StringConstants.animationHeading;
        this.animationText = this.config.StringConstants.animationText;
        this.customGamingHeading = this.config.StringConstants.customGamingHeading;
        this.customGamingText = this.config.StringConstants.customGamingText;
    }
    PromotionCarouselComponent.prototype.ngOnInit = function () {
    };
    return PromotionCarouselComponent;
}());
PromotionCarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-promotion-carousel',
        template: __webpack_require__("../../../../../src/app/promotion-carousel/promotion-carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/promotion-carousel/promotion-carousel.component.css")]
    })
    /** Define the Promotion Carousel as the user land up on the home page*/
    ,
    __metadata("design:paramtypes", [])
], PromotionCarouselComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/promotion-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/promotion-links/promotion-links.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".promotionLinks{\r\n    border: 2px solid transparent;\r\n    width:100%;\r\n    height:calc(100vh - 170px);\r\n    padding: 10px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promotion-links/promotion-links.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"promotionLinks text-heading\">\n  Promotion Links \n  <app-coming-soon></app-coming-soon>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/promotion-links/promotion-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromotionLinksComponent = (function () {
    function PromotionLinksComponent() {
    }
    PromotionLinksComponent.prototype.ngOnInit = function () {
    };
    return PromotionLinksComponent;
}());
PromotionLinksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-promotion-links',
        template: __webpack_require__("../../../../../src/app/promotion-links/promotion-links.component.html"),
        styles: [__webpack_require__("../../../../../src/app/promotion-links/promotion-links.component.css")]
    })
    /** Define the promotional links the user can consume and is part of dropdown component */
    ,
    __metadata("design:paramtypes", [])
], PromotionLinksComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/promotion-links.component.js.map

/***/ }),

/***/ "../../../../../src/app/quality-regulations-list/quality-regulations-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quality-section{\r\n    border: 2px solid transparent;\r\n    width:100%;\r\n    height:calc(100vh - 170px);\r\n    padding: 10px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quality-regulations-list/quality-regulations-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"quality-section text-heading\">\n  Quality & Regulations\n  <app-coming-soon></app-coming-soon>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quality-regulations-list/quality-regulations-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityRegulationsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QualityRegulationsListComponent = (function () {
    function QualityRegulationsListComponent() {
    }
    QualityRegulationsListComponent.prototype.ngOnInit = function () {
    };
    return QualityRegulationsListComponent;
}());
QualityRegulationsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-quality-regulations-list',
        template: __webpack_require__("../../../../../src/app/quality-regulations-list/quality-regulations-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quality-regulations-list/quality-regulations-list.component.css")]
    })
    /** Define the Quality Regulations List that is part of left component */
    ,
    __metadata("design:paramtypes", [])
], QualityRegulationsListComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/quality-regulations-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/responsible-gaming/responsible-gaming.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".responsible-gaming{\r\n    border: 2px solid transparent;\r\n    width:100%;\r\n    height:calc(100vh - 170px);\r\n    padding: 10px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/responsible-gaming/responsible-gaming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"responsible-gaming text-heading\">\n  Responsible Gaming \n  <app-coming-soon></app-coming-soon>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/responsible-gaming/responsible-gaming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsibleGamingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponsibleGamingComponent = (function () {
    function ResponsibleGamingComponent() {
    }
    ResponsibleGamingComponent.prototype.ngOnInit = function () {
    };
    return ResponsibleGamingComponent;
}());
ResponsibleGamingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-responsible-gaming',
        template: __webpack_require__("../../../../../src/app/responsible-gaming/responsible-gaming.component.html"),
        styles: [__webpack_require__("../../../../../src/app/responsible-gaming/responsible-gaming.component.css")]
    })
    /** Define the ResponsibleGaming List that is part of left component */
    ,
    __metadata("design:paramtypes", [])
], ResponsibleGamingComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/responsible-gaming.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/api-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiCall; });


/**
 * Makes an Http call by appending the auth token and content-type in headers depending on the request recived.
 *
 * @param request An object of Request type containing the header, body,url and method for the request.
 * @param httpServiceProvider  An object of Http type.
 * @param isRequestHeaderRequired  Define whether auth_toek is required or not
 * @return An observale of ApiResponse type.
 *
 */
var apiCall = function (request, httpServiceProvider, isRequestHeaderRequired) {
    var config = new __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]();
    if (isRequestHeaderRequired === true) {
        request = generateRequestHeaders(request);
    }
    if (request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestMethod */].Post) {
        request.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    else {
        request.headers.append('Content-Type', 'application/json');
    }
    return [];
    // return httpServiceProvider.request(request)
    //       .map((res: Response) => {
    //             const body = res['_body'] === '' ? '' : res.json();
    //             const apiResponse = new ApiResponse(res.status, res.statusText, body);
    //             return apiResponse;
    //       })
    //       .retryWhen(error => error.delay(config.Timeouts.apiRetryDelay))
    //       .timeout(config.Timeouts.apiTimeout)
    //       .catch(function (err) {
    //             popUpToast(config.StringConstants.genericApiError, config.Timeouts.toastDuration)
    //             return Observable.throw(err);
    //       });
};
/**
 * Append auth_token to the headers in the request
 *
 * @param request The Http request
 * @return updated request with auth token in the headers
 *
 */
var generateRequestHeaders = function (request) {
    var authToken = localStorage.getItem('auth_token');
    request.headers.append('X-Auth-Token', authToken);
    return request;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/api-service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pop_ups__ = __webpack_require__("../../../../../src/app/shared/pop-ups.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NGPErrorHandler = (function (_super) {
    __extends(NGPErrorHandler, _super);
    function NGPErrorHandler() {
        // The true paramter tells Angular to rethrow exceptions,
        // so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        return _super.call(this, true) || this;
    }
    NGPErrorHandler.prototype.handleError = function (error) {
        var config = new __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__pop_ups__["a" /* popUpToast */])(config.StringConstants.unexpectedError, config.Timeouts.toastDuration);
        // TODO:send the error to the server
        // delegate to the default handler
        _super.prototype.handleError.call(this, error);
    };
    return NGPErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ErrorHandler */]));
NGPErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NGPErrorHandler);
/* harmony default export */ __webpack_exports__["a"] = (NGPErrorHandler);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/error-handler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/api-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pop_ups__ = __webpack_require__("../../../../../src/app/shared/pop-ups.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler__ = __webpack_require__("../../../../../src/app/shared/error-handler.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__pop_ups__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__error_handler__["a"]; });




//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/paytable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_phaser_data_object_mapper__ = __webpack_require__("../../../../../src/app/contracts/phaser/data-object-mapper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
// JavaScript source code

/**
 *  The function is used to set variables required for creation of betlines in paytable
 *
 * @param numBetLines represents number of bet/pay lines in slot game
 * @param numReels represents number of reels in slot game
 * @param numTiles represents number of tiles in each reel in slot game
 * @param squareSize represents the size of payline to denote in paytable
 * @param rowsPaytable represents the rows required to depict all paylines in paytable
 * @param widthGap represents width gap in two different payline box
 * @param heightGap represents height gap in two different payline box
 * @param borderSize represents border size of payline box
 * @param paytableColor	represents backgroundColor of paytable
 * @param PayTableGridStyle represents grid styling used in paytable
 * @param TileColor represents payline color used in paytable
 * @param textColor represents text color used in paytable for numbering lines
 *
 */
var setVariables = function (numBetLines, numReels, numTiles, squareSize, rowsPaytable, widthGap, heightGap, borderSize, paytableColor, PayTableGridStyle, TileColor, textColor) {
    this.paytableVariables = {};
    this.paytableVariables.paytable = document.createElement('div');
    // change according to data in payLines Array
    // can be changed to vary things
    this.paytableVariables.betLines = numBetLines;
    this.paytableVariables.reels = numReels; // number of reels in game
    this.paytableVariables.tiles = numTiles; // number of symbols visible in one reel
    this.paytableVariables.square = squareSize; // size to depict betLine
    this.paytableVariables.numberOfRows = rowsPaytable; // number of rows required in paytable
    this.paytableVariables.widthGap = widthGap; // width gap between two betLines
    this.paytableVariables.heightGap = heightGap; // height gap between two betLines
    this.paytableVariables.borderSize = borderSize;
    this.paytableVariables.lineNumberGap = this.paytableVariables.square;
    this.paytableVariables.paytableColor = paytableColor;
    this.paytableVariables.PayTableGridStyle = PayTableGridStyle;
    this.paytableVariables.TileColor = TileColor;
    this.paytableVariables.textColor = textColor;
    // data to come from db
    var dmapper;
    dmapper = new __WEBPACK_IMPORTED_MODULE_0__contracts_phaser_data_object_mapper__["a" /* DataObjectMapper */]();
    this.paytableVariables.payLines = dmapper.betLinemapper();
};
/**
 * The function is used to add box to paytable and along with adding grid style to paytable
 *
 * @param boxdiv represents box which contain payline of paytable
 * @returns boxdiv returns boxdiv after appending gridstyle
 */
var createTable = function (boxdiv) {
    var tilesToHighLight = [];
    var temp = boxdiv.getAttribute('lineNumber');
    var lineNumber = parseInt(temp, 10);
    for (var line = 0; line < this.paytableVariables.payLines.length; line++) {
        if (lineNumber === this.paytableVariables.payLines[line].lineNumber) {
            tilesToHighLight = this.paytableVariables.payLines[line].tileNumbers;
        }
    }
    var table = document.createElement('table');
    table.style.position = 'absolute';
    table.style.width = this.paytableVariables.reels * this.paytableVariables.square + 'px';
    table.style.height = this.paytableVariables.tiles * this.paytableVariables.square + 'px';
    table.style.marginTop = this.paytableVariables.square + 'px';
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (var tr = 0; tr < this.paytableVariables.tiles; tr++) {
        var table_row = document.createElement('tr');
        tbody.appendChild(table_row);
        for (var td = 0; td < this.paytableVariables.reels; td++) {
            var table_data = document.createElement('td');
            table_data.style.border = this.paytableVariables.PayTableGridStyle;
            if (tilesToHighLight.indexOf((td) * 3 + (tr + 1), 0) > -1) {
                table_data.style.backgroundColor = this.paytableVariables.TileColor;
            }
            table_row.appendChild(table_data);
        }
    }
    boxdiv.appendChild(table);
    return boxdiv;
};
/**
 * function is used to create one particular box to show particular payline
 *
 * @param row represents which rpw this box will belong to
 * @param number represents which column this box will belong to
 * @param lineNumber represents payline number of paytable
 * @returns the newly created box to represent pay line
 */
var createbox = function (row, number, lineNumber) {
    var boxdivId = row + '_' + number;
    var boxdiv = document.createElement('div');
    boxdiv.style.position = 'absolute';
    boxdiv.style.width = this.paytableVariables.reels * this.paytableVariables.square +
        2 * this.paytableVariables.borderSize + 'px';
    boxdiv.style.height = this.paytableVariables.tiles * this.paytableVariables.square +
        2 * this.paytableVariables.borderSize + this.paytableVariables.lineNumberGap + 'px';
    boxdiv.setAttribute('lineNumber', lineNumber);
    var paragraph = document.createElement('p');
    paragraph.innerHTML = lineNumber;
    paragraph.style.textAlign = 'center';
    paragraph.style.color = this.paytableVariables.textColor;
    paragraph.style.fontSize = this.paytableVariables.square;
    paragraph.style.width = this.paytableVariables.square * this.paytableVariables.reels + 'px';
    paragraph.style.position = 'absolute';
    paragraph.style.height = this.paytableVariables.square + 'px';
    boxdiv.appendChild(paragraph);
    boxdiv.style.marginLeft = number * (this.paytableVariables.reels * this.paytableVariables.square +
        this.paytableVariables.widthGap + 2 * this.paytableVariables.borderSize) + 'px';
    boxdiv.style.marginTop = row * (this.paytableVariables.tiles * this.paytableVariables.square +
        this.paytableVariables.heightGap + this.paytableVariables.lineNumberGap) + 'px';
    boxdiv.style.border = this.paytableVariables.borderSize + 'px';
    boxdiv.style.borderStyle = 'solid';
    boxdiv.setAttribute('box-id', boxdivId);
    boxdiv.style.backgroundColor = this.paytableVariables.paytableColor;
    return boxdiv;
};
/**
 * function is called to construct winning bet lines div according to data obtained
 */
var setPaytableData = function () {
    this.paytableVariables.paytable.style.height = this.paytableVariables.numberOfRows *
        ((this.paytableVariables.tiles + 1) * this.paytableVariables.square + this.paytableVariables.borderSize +
            this.paytableVariables.heightGap) + 'px';
    this.paytableVariables.paytable.style.width = (this.paytableVariables.betLines / this.paytableVariables.numberOfRows) *
        (this.paytableVariables.square * this.paytableVariables.reels + this.paytableVariables.
            widthGap + this.paytableVariables.borderSize) + 'px';
    this.paytableVariables.paytable.style.margin = '0 auto';
};
/**
 * function is used to create all boxes required to depict one particular payline
 */
var createAllBoxes = function () {
    var row = 0;
    var number = 0;
    var lineNumber = 0;
    var boxdiv = {};
    for (row = 0; row < this.paytableVariables.numberOfRows; row++) {
        for (number = 0; number < this.paytableVariables.betLines / this.paytableVariables.numberOfRows; number++) {
            ++lineNumber;
            boxdiv = createbox.apply(this, [row, number, lineNumber]);
            boxdiv = createTable.apply(this, [boxdiv]);
            this.paytableVariables.paytable.appendChild(boxdiv);
            boxdiv = {};
        }
    }
};
/**
 * function is called to construct winning bet lines
 *
 * @param numBetLines represents number of bet/pay lines in slot game
 * @param numReels represents number of reels in slot game
 * @param numTiles represents number of tiles in each reel in slot game
 * @param squareSize represents the size of payline to denote in paytable
 * @param rowsPaytable represents the rows required to depict all paylines in paytable
 * @param widthGap represents width gap in two different payline box
 * @param heightGap represents height gap in two different payline box
 * @param borderSize represents border size of payline box
 * @param paytableColor	represents backgroundColor of paytable
 * @param PayTableGridStyle represents grid styling used in paytable
 * @param TileColor represents payline color used in paytable
 * @param textColor represents text color used in paytable for numbering lines
 * @returns newly created winning bet lines in the paytable
 *
 */
var init = function (numBetLines, numReels, numTiles, squareSize, rowsPaytable, widthGap, heightGap, borderSize, paytableColor, PayTableGridStyle, TileColor, textColor) {
    setVariables.apply(this, [numBetLines, numReels, numTiles, squareSize,
        rowsPaytable, widthGap, heightGap, borderSize, paytableColor, PayTableGridStyle, TileColor, textColor]);
    setPaytableData.apply(this);
    createAllBoxes.apply(this);
    return this.paytableVariables.paytable;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/paytable.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pop-ups.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return popUpMessageGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return popUpToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return successPopUpToast; });

/**
 * Create a error popup toast whenever a error occur in the application.
 *
 * @param message The message shown to the user in popup
 * @param timeout The time interval after which the messgae is displayed
 *
 */
var popUpToast = function (message, timeout) {
    var toastBar = document.getElementById('errorSnackbar');
    toastBar.innerText = message;
    // Add the 'show' class to DIV
    toastBar.className = 'snackbar show';
    // After a predefined timeout, remove the show class from DIV
    setTimeout(function () {
        toastBar.className = toastBar.className.replace('show', '');
    }, timeout);
};
/**
 * Create a popup toast whenever a operation is successfull.
 *
 * @param message The message shown to the user in popup
 * @param timeout The time interval after which the messgae is displayed
 *
 */
var successPopUpToast = function (message, timeout) {
    var toastBar = document.getElementById('successSnackbar');
    toastBar.innerText = message;
    // Add the 'show' class to DIV
    toastBar.className = 'snackbar show';
    // After a predefined timeout, remove the show class from DIV
    setTimeout(function () {
        toastBar.className = toastBar.className.replace('show', '');
    }, timeout);
};
/**
 * The function create a error popup displaying the user defined message depending upon the error code recieved from the backend.
 *
 * @param error Error return from the backend.
 *
 */
var popUpMessageGenerator = function (error) {
    var config = new __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* AppConfig */]();
    var errorMessage;
    switch (error.status) {
        case 400:
            var parsedError = JSON.parse(error._body);
            switch (parsedError.errorCode) {
                case 10001:
                    errorMessage = config.StringConstants.customApiError_10001;
                    break;
                case 10002:
                    errorMessage = config.StringConstants.customApiError_10002;
                    break;
                case 10005:
                    errorMessage = config.StringConstants.customApiError_10005;
                    break;
            }
            break;
        case 401:
            errorMessage = config.StringConstants.apiError_401;
            break;
        case 404:
            errorMessage = config.StringConstants.apiError_404;
            break;
        case 500:
            errorMessage = config.StringConstants.apiError_500;
            break;
        case 0:
            errorMessage = config.StringConstants.apiError_0;
            break;
        default:
            errorMessage = config.StringConstants.apiDefaultErrorMsg;
            break;
    }
    return errorMessage;
};

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/pop-ups.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = (function () {
    function SharedService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({
            'transactionHistory': true,
            'promotionLinks': true,
            'accountDetails': true,
            'articlesList': true,
            'projectList': true,
            'regulationList': true,
            'responsibleGamingList': true,
            'rightPanel': false,
        });
        this.loginSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    }
    /**
     *
     * @param transactionSharedObject
     */
    SharedService.prototype.toggelDisplayPanel = function (transactionSharedObject) {
        this.subject.next(transactionSharedObject);
    };
    /**
     *
     */
    SharedService.prototype.observableToggelDisplayPanel = function () {
        return this.subject.asObservable();
    };
    /**
     *
     * @param loginMessage
     */
    SharedService.prototype.showLoginerror = function (loginMessage) {
        this.loginSubject.next(loginMessage);
    };
    /**
     *
     */
    SharedService.prototype.displayLoginError = function () {
        return this.loginSubject.asObservable();
    };
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/slot-game-list/slot-game-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-list-container{\r\n    padding-top:10px; \r\n   height: 100%;\r\n   display: block;\r\n     /* the following css will be used in case \r\n      we have a more than 3-4 slot game list. \r\n      After Removal of col-sm-4 */\r\n     /*overflow: auto;\r\n     position: relative;\r\n     white-space: nowrap; \r\n     padding-bottom: 14px;\r\n     */\r\n }\r\n\r\n .game-list-container > div,\r\n .game-list-container > div > div {\r\n   height: 100%;\r\n   display: block;\r\n }\r\n \r\n .game-list-item{\r\n   margin: 10px;\r\n   height: calc(100% - 20px)\r\n    /* the following css will be used in case \r\n    we have a more than 3-4 slot game list.\r\n    After Removal of col-sm-4 */\r\n   /* display: inline-block; \r\n   padding: 8px; \r\n   position: relative;  */\r\n }\r\n\r\n .game-list-item .img-wrapper {\r\n   position: relative;\r\n   height: calc(100% - 90px);\r\n   overflow: hidden;\r\n }\r\n\r\n .game-list-item .img-wrapper > img {\r\n   position: absolute;\r\n   left: 50%;\r\n   top: 50%;\r\n   transform: translate(-50%, -50%);\r\n   max-width: 100%;\r\n   height: auto;\r\n }\r\n \r\n .game-list-item:hover{\r\n   background: rgba(66, 50, 50, 1);\r\n }\r\n \r\n .game-name{\r\n   text-transform: uppercase;\r\n   text-overflow:ellipsis;\r\n   font-size: 25px;\r\n   overflow:hidden;\r\n   white-space:nowrap;\r\n   /* width:200px;\r\n   display: block; */\r\n }\r\n \r\n \r\n \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slot-game-list/slot-game-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"game-list-container\">\n    <div class=\"row\">\n  \n    <div class=\"col-md-6 col-sm-6 col-xs-6\" *ngFor=\"let game of gameList\">\n      <div class=\"coal-box game-list-item\">\n        <div class=\"logo\">\n          <div class=\"logo-caption game-name\">{{ game.gameName }}</div>\n        </div>\n        <div class=\"img-wrapper\">\n           <img [src]=\" game.gameImagePath \" class=\"game-image\"> \n        </div>\n        <div>\n          <button class=\"btn btn-default btn-block btn-custom text-content\" (click)=\"startGame(game)\">PLAY NOW</button>\n        </div>\n      </div>\n      </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/slot-game-list/slot-game-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slot_game_list_service__ = __webpack_require__("../../../../../src/app/slot-game-list/slot-game-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pop_ups__ = __webpack_require__("../../../../../src/app/shared/pop-ups.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlotGameListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlotGameListComponent = (function () {
    /**
     * Create an instance of AppConfig and SlotGameListComponent.
     *
     * @param _gameListService An object of SlotGameListService type.
     * @param _router An object of Router type.
     *
     */
    function SlotGameListComponent(_gameListService, _router) {
        this._gameListService = _gameListService;
        this._router = _router;
        this.gameListService = _gameListService;
        this.router = _router;
        this.config = new __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]();
    }
    /**
     * Call the getGameList() when component is intalised.
     */
    SlotGameListComponent.prototype.ngOnInit = function () {
        this.getGameList();
    };
    /**
     * Get the auth_token. If present
     * Success: Create a URL by appending the game name with current URL and open the game in new window.
     * Error:Show the not logged in message to the user ( if auth token is not present).
     *
     * @param game The name of the game the user wish to play
     *
     */
    SlotGameListComponent.prototype.startGame = function (game) {
        //const authToken = localStorage.getItem('auth_token');
        var authToken = true;
        if (authToken) {
            var startGameRoute = game.gameUrl;
            localStorage.setItem('gameUrl', startGameRoute);
            // For Opening in new tab
            // window.open(this.router.url + 'slot-game/' + startGameRoute,);
            this.router.navigate([this.router.url + '/slot-game/' + startGameRoute]);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__shared_pop_ups__["a" /* popUpToast */])(this.config.StringConstants.notLoggedInMessage, this.config.Timeouts.toastDuration);
        }
    };
    /**
     * Call the getGameList() of gameListService to consume list of games from service.
     * Success: return the list of game available.
     * Error: Navigate the user to error page.
     */
    SlotGameListComponent.prototype.getGameList = function () {
        this.gameList = [
            {
                gameName: "space-storm",
                gameImagePath: "./src/app/games/space-storm/resources/images/Outer_Space.jpg",
                gameUrl: "space-storm"
            },
            {
                gameName: "frozen-knights",
                gameImagePath: "./src/app/games/chess/resources/images/poster.png",
                gameUrl: "frozen-knights"
            }
        ];
        // this.gameListService.getGameList().subscribe(
        //   (response) => {
        //     this.gameList = response.body.gameList;
        //   },
        //   (error) => {
        //     this.router.navigateByUrl('error');
        //   },
        //   () => { }
        // );
    };
    return SlotGameListComponent;
}());
SlotGameListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-slot-game-list',
        template: __webpack_require__("../../../../../src/app/slot-game-list/slot-game-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slot-game-list/slot-game-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__slot_game_list_service__["a" /* SlotGameListService */]]
    })
    /** Define the varoius slot games the user can play */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__slot_game_list_service__["a" /* SlotGameListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__slot_game_list_service__["a" /* SlotGameListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SlotGameListComponent);

var _a, _b;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/slot-game-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/slot-game-list/slot-game-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlotGameListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SlotGameListService = (function () {
    /**
     * Create an instance of App config and SlotGameListService
     *
     * @param _http An object of HTTP type.
     *
     */
    function SlotGameListService(http) {
        this.http = http;
        this.configRoutes = new __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]();
        this.httpServiceProvider = http;
    }
    /**
     * Create RequestOptions and Request to make a actuall Http call by calling the apiCall() of Shared
     * to consume list of games from service
     *
     * @return An observable of ApiResponse type.
     *
     */
    SlotGameListService.prototype.getGameList = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get,
            url: this.configRoutes.RouteConstants.gameListRoute,
        });
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        return __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* apiCall */](request, this.httpServiceProvider, false);
    };
    return SlotGameListService;
}());
SlotGameListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], SlotGameListService);

var _a;
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/slot-game-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/sports-betting-list/sports-betting-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sports-section{\r\npadding: 10px;\r\ntext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sports-betting-list/sports-betting-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sports-section text-heading\">  \n  Sports\n</div>\n<app-coming-soon></app-coming-soon>"

/***/ }),

/***/ "../../../../../src/app/sports-betting-list/sports-betting-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsBettingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SportsBettingListComponent = (function () {
    function SportsBettingListComponent() {
    }
    SportsBettingListComponent.prototype.ngOnInit = function () {
    };
    return SportsBettingListComponent;
}());
SportsBettingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sports-betting-list',
        template: __webpack_require__("../../../../../src/app/sports-betting-list/sports-betting-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sports-betting-list/sports-betting-list.component.css")]
    })
    /**Define the sports betting list available to the user */
    ,
    __metadata("design:paramtypes", [])
], SportsBettingListComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/sports-betting-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-game-list/table-game-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabel-section{\r\npadding: 10px;\r\ntext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-game-list/table-game-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabel-section text-heading\">\n  Table Games\n</div>\n<app-coming-soon></app-coming-soon>\n"

/***/ }),

/***/ "../../../../../src/app/table-game-list/table-game-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableGameListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableGameListComponent = (function () {
    function TableGameListComponent() {
    }
    TableGameListComponent.prototype.ngOnInit = function () {
    };
    return TableGameListComponent;
}());
TableGameListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-table-game-list',
        template: __webpack_require__("../../../../../src/app/table-game-list/table-game-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table-game-list/table-game-list.component.css")]
    })
    /**Define the table game list available to the user */
    ,
    __metadata("design:paramtypes", [])
], TableGameListComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/table-game-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/transaction-history/transaction-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".transactions{\r\n    border: 2px solid transparent;\r\n    width:100%;\r\n    height:calc(100vh - 170px);\r\n    padding: 10px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transaction-history/transaction-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactions text-heading\">\n  Transaction History\n  <app-coming-soon></app-coming-soon>\n</div>"

/***/ }),

/***/ "../../../../../src/app/transaction-history/transaction-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionHistoryComponent = (function () {
    function TransactionHistoryComponent() {
    }
    TransactionHistoryComponent.prototype.ngOnInit = function () {
    };
    return TransactionHistoryComponent;
}());
TransactionHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-transaction-history',
        template: __webpack_require__("../../../../../src/app/transaction-history/transaction-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/transaction-history/transaction-history.component.css")]
    })
    /**Define the transaction history of the currently logged in user */
    ,
    __metadata("design:paramtypes", [])
], TransactionHistoryComponent);

//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/transaction-history.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/environment.prod.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Personal/Code/NGP/Dev-UI/NAGBU5GP/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map