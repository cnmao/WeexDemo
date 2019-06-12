// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(61)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/views/index/6f50fdfd5e97495893dd581a7bc5f251.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-781a1928"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "show_view_div": {
	    "backgroundColor": "#ffffff"
	  },
	  "scroller": {
	    "width": "750",
	    "height": "200"
	  },
	  "one-row-one-img": {
	    "marginTop": "0"
	  },
	  "one-row-two-img": {
	    "marginTop": "0"
	  },
	  "one-row-three-img": {
	    "marginTop": "0"
	  },
	  "one-row-one-img_img": {
	    "width": "750",
	    "height": "400"
	  },
	  "product-name": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "40",
	    "fontSize": "30",
	    "height": "92",
	    "marginTop": "5",
	    "marginLeft": "10",
	    "fontFamily": "微软雅黑!important",
	    "color": "#333333"
	  },
	  "product-price": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "marginLeft": "10"
	  },
	  "product-fsPrice": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "40",
	    "marginRight": "20",
	    "lineHeight": "60"
	  },
	  "product-dest-price": {
	    "color": "#cccccc",
	    "fontSize": "28",
	    "textDecoration": "line-through"
	  },
	  "one-row-two-product_btn": {
	    "backgroundColor": "rgb(239,72,101)",
	    "width": "150",
	    "height": "60",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": "5"
	  },
	  "one-row-two-product_btnText": {
	    "fontSize": "28",
	    "color": "#ffffff"
	  },
	  "one-row-two-product1-1": {
	    "width": "750",
	    "marginBottom": "10"
	  },
	  "one-row-two-product1-2": {
	    "width": "750",
	    "marginBottom": "10"
	  },
	  "one-row-two-product1-3": {
	    "width": "750",
	    "marginBottom": "10"
	  },
	  "one-row-two-product1-4": {
	    "width": "750",
	    "marginBottom": "10"
	  },
	  "one-row-two-product1-5": {
	    "width": "750",
	    "marginBottom": "10"
	  },
	  "one-row-two-product_div": {
	    "width": "370",
	    "backgroundColor": "#ffffff",
	    "paddingBottom": "5"
	  },
	  "one-row-two-product-name": {
	    "width": "350"
	  },
	  "one-row-two-product-Img": {
	    "width": "370",
	    "height": "370"
	  },
	  "one-row-two-product-price": {
	    "width": "350",
	    "height": "80",
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "one-row-two-product1-1_price": {
	    "height": "40",
	    "marginBottom": "10"
	  },
	  "one-row-two-product1-2_price": {
	    "justifyContent": "flex-start",
	    "height": "40",
	    "marginBottom": "10"
	  },
	  "one-row-two-product1-4_price": {
	    "height": "60"
	  },
	  "one-row-two-product1-2_btn": {
	    "backgroundColor": "rgb(239,72,101)",
	    "fontSize": "28",
	    "color": "#ffffff",
	    "width": "350",
	    "marginLeft": "10",
	    "textAlign": "center",
	    "lineHeight": "60",
	    "marginBottom": "10"
	  },
	  "one-row-two-product1-3_name": {
	    "width": "350",
	    "height": "32",
	    "marginLeft": "10",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "32",
	    "fontSize": "30",
	    "marginTop": "15",
	    "color": "#333333"
	  },
	  "one-row-two-product1-5_name": {
	    "width": "350",
	    "height": "32",
	    "marginLeft": "10",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "32",
	    "fontSize": "30",
	    "marginTop": "15",
	    "color": "#333333"
	  },
	  "one-row-two-product1-3_desc": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "35",
	    "height": "70",
	    "fontSize": "26",
	    "width": "350",
	    "fontFamily": "微软雅黑!important",
	    "color": "#999999",
	    "marginTop": "10",
	    "marginLeft": "10"
	  },
	  "one-row-two-product1-5_desc": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "35",
	    "height": "70",
	    "fontSize": "26",
	    "width": "350",
	    "fontFamily": "微软雅黑!important",
	    "color": "#999999",
	    "marginTop": "10",
	    "marginLeft": "10"
	  },
	  "one-row-two-product1-5_BtnImg": {
	    "width": "60",
	    "height": "60"
	  },
	  "one-row-three-product1-1": {
	    "width": "750",
	    "marginBottom": "10"
	  },
	  "one-row-three-product1-2": {
	    "width": "750",
	    "marginBottom": "10"
	  },
	  "one-row-three-product-name": {
	    "width": "220",
	    "marginLeft": "10"
	  },
	  "one-row-three-product-Img": {
	    "width": "240",
	    "height": "240"
	  },
	  "one-row-three-product-price": {
	    "width": "220",
	    "height": "40"
	  },
	  "one-row-three-product-price1-2": {
	    "alignItems": "center",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "height": "60",
	    "width": "220"
	  },
	  "one-row-three-product-price1-2_BtnImg": {
	    "width": "60",
	    "height": "60"
	  },
	  "slider": {
	    "width": "750",
	    "height": "360",
	    "marginBottom": "10"
	  },
	  "sliderFrame": {
	    "width": "750",
	    "height": "360",
	    "position": "relative"
	  },
	  "indicator": {
	    "width": "750",
	    "height": "50",
	    "itemColor": "#999999",
	    "itemSelectedColor": "rgb(239,72,101)",
	    "itemSize": "15",
	    "position": "absolute",
	    "bottom": "0",
	    "left": "0"
	  },
	  "one-row-one-product2-1": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": "10"
	  },
	  "one-row-one-product2-2": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": "10"
	  },
	  "one-row-one-product2-3": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": "10"
	  },
	  "seller-show-product": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": "10",
	    "paddingBottom": "15"
	  },
	  "one-row-one-product2-1_Img": {
	    "width": "750",
	    "height": "750"
	  },
	  "one-row-one-product2-2_Img": {
	    "width": "750",
	    "height": "750"
	  },
	  "one-row-one-product2-3_Img": {
	    "width": "750",
	    "height": "750"
	  },
	  "seller-show-product_Img": {
	    "width": "750",
	    "height": "460"
	  },
	  "one-row-one-product2-1_name": {
	    "width": "730",
	    "marginLeft": "10",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "60",
	    "height": "60",
	    "fontSize": "32",
	    "fontFamily": "微软雅黑!important",
	    "marginTop": "5",
	    "color": "#333333"
	  },
	  "one-row-one-product2-3_name": {
	    "width": "730",
	    "marginLeft": "10",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "60",
	    "height": "60",
	    "fontSize": "32",
	    "fontFamily": "微软雅黑!important",
	    "marginTop": "5",
	    "color": "#333333"
	  },
	  "seller-show-product_name": {
	    "width": "730",
	    "marginLeft": "10",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "60",
	    "height": "60",
	    "fontSize": "32",
	    "fontFamily": "微软雅黑!important",
	    "marginTop": "5",
	    "color": "#333333"
	  },
	  "one-row-one-product2-2_name": {
	    "width": "730",
	    "marginLeft": "10",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "50",
	    "height": "100",
	    "fontSize": "32",
	    "fontFamily": "微软雅黑!important",
	    "marginTop": "5",
	    "color": "#333333"
	  },
	  "one-row-one-product2-1_desc": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "40",
	    "height": "80",
	    "fontSize": "28",
	    "width": "730",
	    "marginLeft": "10",
	    "fontFamily": "微软雅黑!important",
	    "color": "#999999"
	  },
	  "one-row-one-product2-3_desc": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "40",
	    "height": "80",
	    "fontSize": "28",
	    "width": "730",
	    "marginLeft": "10",
	    "fontFamily": "微软雅黑!important",
	    "color": "#999999"
	  },
	  "seller-show-product_desc": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "40",
	    "fontSize": "28",
	    "marginLeft": "10",
	    "fontFamily": "微软雅黑!important",
	    "paddingTop": "10",
	    "paddingRight": "10",
	    "paddingBottom": "10",
	    "paddingLeft": "10",
	    "width": "730",
	    "backgroundColor": "#f5f5f5",
	    "color": "#999999"
	  },
	  "one-row-one-product2-1_pricDiv": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginLeft": "10",
	    "height": "80"
	  },
	  "one-row-one-product2-2_pricDiv": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginLeft": "10",
	    "height": "80"
	  },
	  "one-row-one-product2-3_pricDiv": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginLeft": "10",
	    "height": "80"
	  },
	  "one-row-one-product2-1_price1": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "40",
	    "marginRight": "20"
	  },
	  "one-row-one-product2-2_price1": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "40",
	    "marginRight": "20"
	  },
	  "one-row-one-product2-3_price1": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "40",
	    "marginRight": "20"
	  },
	  "one-row-one-product2-1_price2": {
	    "color": "#cccccc",
	    "fontSize": "32",
	    "textDecoration": "line-through"
	  },
	  "one-row-one-product2-2_price2": {
	    "color": "#cccccc",
	    "fontSize": "32",
	    "textDecoration": "line-through"
	  },
	  "one-row-one-product2-3_price2": {
	    "color": "#cccccc",
	    "fontSize": "32",
	    "textDecoration": "line-through"
	  },
	  "one-row-one-product2-2_btn": {
	    "borderWidth": "2",
	    "borderColor": "rgb(239,72,101)",
	    "width": "150",
	    "height": "60",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": "5",
	    "marginRight": "10"
	  },
	  "one-row-one-product2-3_btn": {
	    "borderWidth": "2",
	    "borderColor": "rgb(239,72,101)",
	    "width": "150",
	    "height": "60",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": "5",
	    "marginRight": "10"
	  },
	  "one-row-one-product2-2_btnText": {
	    "fontSize": "28",
	    "color": "rgb(239,72,101)"
	  },
	  "one-row-one-product2-3_btnText": {
	    "fontSize": "28",
	    "color": "rgb(239,72,101)"
	  },
	  "homeMenuDiv": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "space-around",
	    "backgroundColor": "#ffffff",
	    "paddingTop": "15",
	    "marginBottom": "10"
	  },
	  "homeMenuText": {
	    "width": "160",
	    "fontSize": "30",
	    "color": "#333333",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "50",
	    "height": "50",
	    "marginBottom": "10",
	    "textAlign": "center"
	  },
	  "scrollProductList": {
	    "showScrollbar": "false",
	    "flexDirection": "row",
	    "paddingLeft": "15",
	    "width": "750",
	    "height": "350",
	    "alignItems": "flex-start",
	    "marginBottom": "10",
	    "backgroundColor": "#ffffff",
	    "paddingTop": "10",
	    "paddingBottom": "10"
	  },
	  "scrollProducts": {
	    "flexDirection": "column",
	    "width": "210",
	    "justifyContent": "center",
	    "marginRight": "15",
	    "position": "relative"
	  },
	  "scrollProduct_name": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "35",
	    "height": "70",
	    "fontSize": "30",
	    "width": "210",
	    "marginTop": "5",
	    "fontFamily": "微软雅黑!important",
	    "textAlign": "left",
	    "marginBottom": "5",
	    "color": "#333333"
	  },
	  "scrollProduct_Img": {
	    "width": "210",
	    "height": "210"
	  },
	  "scrollProduct_price": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "35",
	    "textAlign": "center"
	  },
	  "saleIcon1": {
	    "backgroundColor": "#fcae28",
	    "color": "#ffffff",
	    "width": "80",
	    "height": "60",
	    "position": "absolute",
	    "top": "0",
	    "left": "0",
	    "lineHeight": "60",
	    "textAlign": "center",
	    "fontSize": "25"
	  },
	  "saleIcon2": {
	    "backgroundColor": "#eb3737",
	    "width": "80",
	    "height": "70",
	    "position": "absolute",
	    "top": "0",
	    "left": "0",
	    "paddingTop": "5"
	  },
	  "saleIcon2text": {
	    "lineHeight": "30",
	    "textAlign": "center",
	    "fontSize": "22",
	    "color": "#ffffff"
	  },
	  "saleIcon3": {
	    "backgroundColor": "#ff0036",
	    "color": "#ffffff",
	    "width": "80",
	    "height": "60",
	    "position": "absolute",
	    "top": "0",
	    "left": "0",
	    "lineHeight": "60",
	    "textAlign": "center",
	    "fontSize": "25"
	  },
	  "couponComponent": {
	    "marginBottom": "10"
	  },
	  "couponInfo": {
	    "position": "absolute",
	    "top": "0",
	    "left": "0",
	    "alignItems": "center",
	    "paddingLeft": "200",
	    "paddingRight": "160"
	  },
	  "couponMoney": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "couponMoneyIcon": {
	    "color": "#ad7546",
	    "fontSize": "40",
	    "lineHeight": "55",
	    "fontWeight": "bold",
	    "marginRight": "1"
	  },
	  "couponMoneyNum": {
	    "color": "#ad7546",
	    "fontSize": "55",
	    "lineHeight": "60",
	    "fontWeight": "bold"
	  },
	  "limitContent": {
	    "color": "#ad7546",
	    "fontSize": "25",
	    "marginBottom": "5",
	    "textAlign": "center",
	    "marginTop": "5"
	  },
	  "limitTime": {
	    "color": "#ad7546",
	    "fontSize": "26"
	  },
	  "couponBtn": {
	    "textAlign": "center",
	    "backgroundColor": "#97551b",
	    "color": "#f5dbca",
	    "width": "140",
	    "fontSize": "22",
	    "borderRadius": "25",
	    "paddingTop": "8",
	    "paddingBottom": "8"
	  },
	  "coupon_one": {
	    "showScrollbar": "false",
	    "flexDirection": "row",
	    "width": "750",
	    "height": "180",
	    "paddingLeft": "10",
	    "paddingRight": "10",
	    "marginTop": "10",
	    "marginBottom": "10"
	  },
	  "coupon_one_item": {
	    "width": "240",
	    "height": "180"
	  },
	  "c_o_i_img": {
	    "position": "absolute",
	    "width": "240",
	    "height": "180"
	  },
	  "c_o_i_p1": {
	    "textAlign": "center",
	    "color": "#ad7546",
	    "fontWeight": "bold",
	    "fontSize": "35",
	    "marginTop": "20"
	  },
	  "c_o_i_p2": {
	    "textAlign": "center",
	    "color": "#ad7546",
	    "fontSize": "25",
	    "marginTop": "5",
	    "marginBottom": "5"
	  },
	  "c_o_i_p3": {
	    "textAlign": "center",
	    "fontSize": "22",
	    "backgroundColor": "#97551b",
	    "color": "#f5dbca",
	    "width": "140",
	    "borderRadius": "20",
	    "paddingTop": "5",
	    "paddingBottom": "5",
	    "marginLeft": "50"
	  },
	  "newSpreeIcon": {
	    "fontSize": "24",
	    "backgroundColor": "#e7ba95",
	    "color": "#97541a",
	    "paddingTop": "6",
	    "paddingRight": "10",
	    "paddingBottom": "6",
	    "paddingLeft": "10",
	    "borderRadius": "8",
	    "width": "80",
	    "textAlign": "center"
	  },
	  "newSpreeIconBox": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "floorName": {
	    "backgroundColor": "#ffffff",
	    "marginTop": 0.5
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vImg = __webpack_require__(3);

	var _vImg2 = _interopRequireDefault(_vImg);

	var _vLimitSale = __webpack_require__(7);

	var _vLimitSale2 = _interopRequireDefault(_vLimitSale);

	var _vActivityList = __webpack_require__(25);

	var _vActivityList2 = _interopRequireDefault(_vActivityList);

	var _vSeckill = __webpack_require__(29);

	var _vSeckill2 = _interopRequireDefault(_vSeckill);

	var _vOneDaily = __webpack_require__(33);

	var _vOneDaily2 = _interopRequireDefault(_vOneDaily);

	var _router = __webpack_require__(38);

	var _api = __webpack_require__(10);

	var _vRecommendProduct = __webpack_require__(43);

	var _vRecommendProduct2 = _interopRequireDefault(_vRecommendProduct);

	var _vDynamicPrice = __webpack_require__(48);

	var _vDynamicPrice2 = _interopRequireDefault(_vDynamicPrice);

	var _vOneProductRow = __webpack_require__(52);

	var _vOneProductRow2 = _interopRequireDefault(_vOneProductRow);

	var _vSuitsProduct = __webpack_require__(56);

	var _vSuitsProduct2 = _interopRequireDefault(_vSuitsProduct);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            bizId: '6f50fdfd5e97495893dd581a7bc5f251',
	            dynamicPrice: {} //动态价格
	        };
	    },

	    components: {
	        "v-img": _vImg2.default,
	        "v-limit-sale": _vLimitSale2.default,
	        "v-activity-list": _vActivityList2.default,
	        "v-seckill": _vSeckill2.default,
	        "v-one-daily": _vOneDaily2.default,
	        "v-recommend-product": _vRecommendProduct2.default,
	        "v-dynamic-price": _vDynamicPrice2.default,
	        "v-one-product-row": _vOneProductRow2.default,
	        "v-suits-product": _vSuitsProduct2.default
	    },
	    methods: {
	        /**
	         * 跳转入口方法
	         * @param type - 跳转类型,link:url跳转,route:路由跳转
	         * @param needLogin -是否需要登录
	         * @param link - type = link 时，该值为url地址,type = router 时，该值是路由名称
	         * @param params - 路由参数
	         */
	        tapLink: function tapLink(type, needLogin, link, params) {
	            _router.router.open(type, needLogin, link, params);
	        },

	        /**
	         * 获取动态价格
	         */
	        getDynamicPrice: function getDynamicPrice() {
	            var _this = this;

	            _api.api.get("mallPageController/get/dynamic/price/" + this.bizId, function (data) {
	                _this.dynamicPrice = data;
	            });
	        },

	        scrollHandler: function scrollHandler(e) {}
	    },
	    created: function created() {
	        //获取动态价格
	        this.getDynamicPrice();
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-img.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e0352ea4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//

	exports.default = {
	    name: "v-img",
	    data: function data() {
	        return {};
	    },

	    props: {
	        theClass: {
	            type: String,
	            default: ""
	        },
	        src: {
	            type: String,
	            default: ""
	        },
	        width: {
	            type: String,
	            default: 0
	        },
	        height: {
	            type: String,
	            default: 0
	        }
	    }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    class: _vm.theClass,
	    style: {
	      width: _vm.width + 'px',
	      height: _vm.height + 'px'
	    },
	    attrs: {
	      "src": _vm.src
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(8)
	)

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-limit-sale.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0fda95fe"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = {
	  "limit_title": {
	    "width": "750",
	    "height": "100",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "rgb(243,244,245)"
	  },
	  "limitSaleDiv": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": "10"
	  },
	  "limitSale_name": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "40",
	    "fontSize": "30",
	    "width": "420",
	    "marginTop": "15",
	    "fontFamily": "微软雅黑 !important",
	    "color": "#333333"
	  },
	  "limitSale_Img": {
	    "width": "298",
	    "height": "298",
	    "borderColor": "#eeeeee",
	    "borderWidth": "1",
	    "marginRight": "20"
	  },
	  "limitSale_right": {
	    "borderColor": "#e2e2e2",
	    "height": "300",
	    "position": "relative"
	  },
	  "limitSale_right2": {
	    "flexDirection": "row",
	    "alignItems": "flex-end",
	    "justifyContent": "space-between",
	    "width": "410",
	    "position": "absolute",
	    "bottom": "20"
	  },
	  "limitSale_price1": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "35"
	  },
	  "limitSale_price2": {
	    "color": "#cccccc",
	    "fontSize": "28",
	    "textDecoration": "line-through"
	  },
	  "limitSale_status": {
	    "textAlign": "right",
	    "position": "relative",
	    "height": "110",
	    "width": "212"
	  },
	  "limitSale_btn": {
	    "backgroundColor": "rgb(239,72,101)",
	    "width": "150",
	    "height": "60",
	    "position": "absolute",
	    "right": "0",
	    "top": "0",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": "5"
	  },
	  "limitSale_btn2": {
	    "backgroundColor": "#33cd5f"
	  },
	  "limitSale_btn3": {
	    "backgroundColor": "#cccccc",
	    "top": "45"
	  },
	  "limitSale_btnText": {
	    "fontSize": "28",
	    "color": "#ffffff"
	  },
	  "limitSale_time": {
	    "lineHeight": "30",
	    "marginTop": "76",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "flex-end"
	  },
	  "limitSale_time_text": {
	    "fontSize": "28",
	    "color": "#666666"
	  },
	  "limitSale_time_time": {
	    "fontSize": "28",
	    "color": "rgb(239,72,101)"
	  }
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(10);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _timer = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: "v-limit-sale",
	  data: function data() {
	    return {
	      imgBasePath: _config2.default.$imgBasePath,
	      origin: _config2.default.$origin,
	      limitSale: []
	    };
	  },

	  methods: {
	    toDetail: function toDetail(it) {
	      var params = 'id=' + it.productId + '&activityType=1';
	      this.$emit("toDetail", "route", false, "productDetail", params);
	    }
	  },
	  created: function created() {
	    var _this = this;

	    _api.api.post('product/queryPlatformLimit', {
	      pageNum: 1,
	      pageSize: 5,
	      dateTag: 0,
	      indexShow: 1
	    }, function (res) {
	      _this.limitSale = res;

	      var _loop = function _loop(i) {
	        var temp = _this.limitSale[i];
	        (0, _timer.timer)({
	          nowTime: temp.nowTime,
	          endTime: temp.endTime,
	          onUpdate: function onUpdate(time) {
	            temp.time = time.hh + ":" + time.mm + ":" + time.ss;
	            Vue.set(_this.limitSale, i, temp);
	          }
	        });
	      };

	      for (var i = 0; i < _this.limitSale.length; i++) {
	        _loop(i);
	      }
	    });
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(11)
	)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(21)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/services/api.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6f37ce64"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.api = undefined;

	var _dialog = __webpack_require__(13);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _utils = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//

	var stream = weex.requireModule('stream');


	var doXhr = function doXhr(serviceType, method, url, body, callBack) {
	  var opt = {
	    method: method,
	    type: 'json',
	    url: (serviceType === 'cloud' ? _config2.default.$cloudBasePath : _config2.default.$serveBasePath) + url
	  };
	  if (method === "post") {
	    opt.body = body;
	    opt.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
	  }
	  stream.fetch(opt, function (res) {
	    if (res.ok) {
	      var data = res.data;
	      if (data.success) {
	        if (callBack) {
	          callBack.call(null, data.data);
	        }
	      } else {
	        if (data.message) {
	          _dialog.dialog.toast(data.message);
	        }
	      }
	    } else {
	      _dialog.dialog.toast("网络错误");
	    }
	  });
	};

	var api = exports.api = {
	  post: function post(url, params, callBack) {
	    var body = [];
	    if (params) {
	      for (var item in params) {
	        body.push(item + "=" + params[item]);
	      }
	    }
	    doXhr('wechat', "post", url, body.join("&"), callBack);
	  },

	  get: function get(url, callBack) {
	    doXhr('wechat', "get", url, null, callBack);
	  },

	  cloudPost: function cloudPost(url, params, callBack) {
	    var body = [];
	    if (params) {
	      for (var item in params) {
	        body.push(item + "=" + params[item]);
	      }
	    }
	    doXhr('cloud', "post", url, body.join("&"), callBack);
	  },
	  cloudGet: function cloudGet(url, data, callBack) {
	    url = encodeURI(url);
	    if (data) {
	      url = url + '?' + _utils.utils.serialize(data);
	    }
	    doXhr('cloud', "get", url, null, callBack);
	  }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/services/dialog.vue"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var modal = weex.requireModule('modal');
	var dialog = exports.dialog = {
	    toast: function toast(message, duration) {
	        message = message || "";
	        duration = duration || 1;

	        modal.toast({
	            message: message,
	            duration: duration
	        });
	    }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(16)
	)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/utils/config.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d401e74a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//

	exports.default = {
	  // 生产环境
	  $origin: 'http://weex-server.wawscm.com:63808', //编译后的文件服务器根路径
	  $serveBasePath: 'http://m.wawscm.com/', //服务器根路径
	  $cloudBasePath: 'http://gateway.wawscm.com/', //clould服务根路径
	  $imgBasePath: 'http://image.wawscm.com/' //图片服务器根路径
	  // 测试环境
	  // $origin: 'http://192.168.1.202:877',  //编译后的文件服务器根路径
	  // $serveBasePath: 'http://192.168.1.179:9083/', //wechat服务器根路径
	  // $cloudBasePath: 'http://192.168.1.202:8802/', //clould服务根路径
	  // $imgBasePath: 'http://testimage.wawscm.com/' //图片服务器根路径
	  // 本地环境
	  // $origin: 'http://192.168.1.125:8080',  //编译后的文件服务器根路径
	  // $serveBasePath: 'http://192.168.1.125:8086/', //wechat服务器根路径
	  // $cloudBasePath: 'http://192.168.1.202:8802/', //clould服务根路径
	  // $imgBasePath: 'http://testimage.wawscm.com/' //图片服务器根路径
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c("div")
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/services/utils.vue"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var utils = exports.utils = {
	  /**
	   * 是否为空
	   * @param obj
	   */
	  isNull: function isNull(obj) {
	    if (obj === null || obj === undefined) {
	      return true;
	    }

	    if (typeof obj === 'string' && (obj === '' || obj.trim() === '')) {
	      return true;
	    }

	    if (typeof obj === 'number' && Number.isNaN(obj)) {
	      return true;
	    }

	    if (Array.isArray(obj) && !obj.length) {
	      return true;
	    }
	    return false;
	  },

	  /**
	   * 序列为对象
	   * str格式: a=1&b=2&c=3
	   * @param str
	   */
	  serializeObj: function serializeObj(str) {
	    var result = {};
	    if (str) {
	      var arrs = str.split("&");
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = arrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var arr = _step.value;

	          var temp = arr.split("=");
	          var key = temp[0];
	          var val = temp[1];
	          result[key] = val;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	    return result;
	  },

	  /**
	   * 对象序列化为url字符串
	   * @param obj
	   */
	  serialize: function serialize(obj) {
	    if (!this.isNull(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	      var p = [];
	      for (var item in obj) {
	        p.push(item + '=' + encodeURIComponent(this.isNull(obj[item]) ? '' : obj[item]));
	      }
	      return p.join('&');
	    }
	    return '';
	  }
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c("div")
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/services/timer.vue"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var timer = exports.timer = function timer(_ref) {
	    var _this = this;

	    var _ref$nowTime = _ref.nowTime,
	        nowTime = _ref$nowTime === undefined ? new Date() : _ref$nowTime,
	        _ref$endTime = _ref.endTime,
	        endTime = _ref$endTime === undefined ? new Date() : _ref$endTime,
	        _ref$onUpdate = _ref.onUpdate,
	        onUpdate = _ref$onUpdate === undefined ? function () {} : _ref$onUpdate,
	        _ref$onEnd = _ref.onEnd,
	        onEnd = _ref$onEnd === undefined ? function () {} : _ref$onEnd,
	        _ref$interval = _ref.interval,
	        interval = _ref$interval === undefined ? 1000 : _ref$interval;


	    var nTime = nowTime instanceof Date ? nowTime.getTime() : new Date(nowTime.replace(/-/g, '/')).getTime();
	    var eTime = endTime instanceof Date ? endTime.getTime() : new Date(endTime.replace(/-/g, '/')).getTime();

	    if (nTime < eTime) {
	        var _timer = setInterval(function () {
	            var t = eTime - nTime;
	            if (t <= 0) {
	                onEnd.call(_this);
	                clearInterval(_timer); //停止定时器
	            } else {
	                var dd = Math.floor(t / 1000 / 60 / 60 / 24);
	                var hh = Math.floor(t / 1000 / 60 / 60 / 24) * 24 + Math.floor(t / 1000 / 60 / 60 % 24);
	                var mm = Math.floor(t / 1000 / 60 % 60);
	                var ss = Math.floor(t / 1000 % 60);
	                var ms = Math.floor(t / 1000);
	                var time = {
	                    dd: Number(dd) < 10 ? '0' + dd : dd,
	                    hh: Number(hh) < 10 ? '0' + hh : hh,
	                    mm: (Array(2).join("0") + mm).slice(-2),
	                    ss: (Array(2).join("0") + ss).slice(-2),
	                    ms: (Array(2).join("0") + ms).slice(-2)
	                };
	                onUpdate.call(_this, time);
	            }
	            nTime += interval;
	        }, interval);
	    } else {
	        onEnd.call(this);
	    }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.limitSale && _vm.limitSale.length) ? _c('div', {
	    staticClass: ["limitSaleDiv"]
	  }, [_c('div', {
	    staticClass: ["limit_title"]
	  }, [_c('image', {
	    staticStyle: {
	      width: "35px",
	      height: "35px",
	      marginRight: "10px"
	    },
	    attrs: {
	      "src": _vm.origin + '/assets/images/limit.png'
	    }
	  }), _c('text', [_vm._v("限时特卖")])]), _vm._l((_vm.limitSale), function(it, index) {
	    return _c('div', {
	      staticStyle: {
	        flexDirection: "row",
	        marginTop: "10px"
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(it)
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["limitSale_Img"],
	      attrs: {
	        "src": _vm.imgBasePath + it.productImage
	      }
	    }), _c('div', {
	      staticClass: ["limitSale_right"],
	      style: index == 0 ? {
	        'border-top-width': '0px'
	      } : {
	        'border-top-width': '1px'
	      }
	    }, [_c('text', {
	      staticClass: ["limitSale_right1", "limitSale_name"]
	    }, [_vm._v(_vm._s(it.productName))]), _c('div', {
	      staticClass: ["limitSale_right2"]
	    }, [_c('div', [_c('text', {
	      staticClass: ["limitSale_price1"]
	    }, [_vm._v("¥" + _vm._s(it.fsPrice))]), _c('text', {
	      staticClass: ["limitSale_price2"]
	    }, [_vm._v("¥" + _vm._s(it.retailPrice))])]), _c('div', {
	      staticClass: ["limitSale_status"]
	    }, [(it.nowTime < it.startTime) ? _c('div', [_vm._m(0, true), _c('div', {
	      staticClass: ["limitSale_time"]
	    }, [_c('text', {
	      staticClass: ["limitSale_time_text"]
	    }, [_vm._v("距开始")]), _c('text', {
	      staticClass: ["limitSale_time_time"]
	    }, [_vm._v(_vm._s(it.time))])])]) : _vm._e(), (it.nowTime >= it.startTime && it.nowTime < it.endTime) ? _c('div', [(it.remaining > 0 && it.stock > 0) ? _c('div', [_vm._m(1, true), _c('div', {
	      staticClass: ["limitSale_time"]
	    }, [_c('text', {
	      staticClass: ["limitSale_time_text"]
	    }, [_vm._v("距结束")]), _c('text', {
	      staticClass: ["limitSale_time_time"]
	    }, [_vm._v(_vm._s(it.time))])])]) : _vm._e(), (it.remaining <= 0 || it.stock <= 0) ? _c('div', {
	      staticClass: ["limitSale_btn", "limitSale_btn3"]
	    }, [_c('text', {
	      staticClass: ["limitSale_btnText"]
	    }, [_vm._v("已抢完")])]) : _vm._e()]) : _vm._e(), (it.nowTime >= it.endTime) ? _c('div', {
	      staticClass: ["limitSale_btn", "limitSale_btn3"]
	    }, [_c('text', {
	      staticClass: ["limitSale_btnText"]
	    }, [_vm._v("已结束")])]) : _vm._e()])])])])
	  })], 2) : _vm._e()
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["limitSale_btn", "limitSale_btn2"]
	  }, [_c('text', {
	    staticClass: ["limitSale_btnText"]
	  }, [_vm._v("去看看")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["limitSale_btn"]
	  }, [_c('text', {
	    staticClass: ["limitSale_btnText"]
	  }, [_vm._v("立即抢购")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(26)
	)

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(28)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-activity-list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4ee9c147"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = {
	  "activityListImg": {
	    "width": "375",
	    "height": "160"
	  }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _api = __webpack_require__(10);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    name: "v-activity-list",
	    data: function data() {
	        return {
	            imgBasePath: _config2.default.$imgBasePath,
	            activityList: []
	        };
	    },

	    methods: {
	        toDetail: function toDetail(it) {
	            this.$emit("toDetail", "route", 0, "activityHome", "activityId=" + it.id);
	        }
	    },
	    created: function created() {
	        var _this = this;

	        _api.api.get("activity/list", function (res) {
	            _this.activityList = res;
	        });
	    }
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      flexWrap: "wrap",
	      width: "750px"
	    }
	  }, _vm._l((_vm.activityList), function(it) {
	    return _c('div', {
	      staticStyle: {
	        width: "375px",
	        height: "160px"
	      }
	    }, [_c('image', {
	      staticClass: ["activityListImg"],
	      attrs: {
	        "src": _vm.imgBasePath + it.termIndexImage
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(it)
	        }
	      }
	    })])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(30)
	)

	/* script */
	__vue_exports__ = __webpack_require__(31)

	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-seckill.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8fa8fecc"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = {
	  "seckillDiv": {
	    "marginBottom": "10",
	    "paddingBottom": "5",
	    "backgroundColor": "#ffffff"
	  },
	  "seckillHeader": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingLeft": "10",
	    "paddingRight": "10",
	    "paddingTop": "10",
	    "paddingBottom": "7"
	  },
	  "seckillHeaderLeft": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "seckillTit": {
	    "fontSize": "35",
	    "color": "#e42647",
	    "marginRight": "10",
	    "alignItems": "flex-start"
	  },
	  "seckillStatus": {
	    "fontSize": "30",
	    "color": "#444444"
	  },
	  "seckillTimeHH": {
	    "fontSize": "25",
	    "color": "#444444",
	    "backgroundColor": "#f2f2f2",
	    "paddingTop": "5",
	    "paddingRight": "5",
	    "paddingBottom": "5",
	    "paddingLeft": "5",
	    "marginLeft": "5",
	    "marginRight": "5"
	  },
	  "seckillTimeMM": {
	    "fontSize": "25",
	    "color": "#444444",
	    "backgroundColor": "#f2f2f2",
	    "paddingTop": "5",
	    "paddingRight": "5",
	    "paddingBottom": "5",
	    "paddingLeft": "5",
	    "marginLeft": "5",
	    "marginRight": "5"
	  },
	  "seckillTimeSS": {
	    "fontSize": "25",
	    "color": "#e42647",
	    "backgroundColor": "#f2f2f2",
	    "paddingTop": "5",
	    "paddingRight": "5",
	    "paddingBottom": "5",
	    "paddingLeft": "5",
	    "marginLeft": "5",
	    "marginRight": "5"
	  },
	  "seckillHeaderRight": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "seckillMore": {
	    "fontSize": "25",
	    "color": "#e42647",
	    "marginRight": "5"
	  },
	  "seckillMoreIcon": {
	    "width": "30",
	    "height": "30"
	  },
	  "seckillList": {
	    "showScrollbar": "false",
	    "flexDirection": "row",
	    "paddingLeft": "15",
	    "width": "750",
	    "height": "300",
	    "alignItems": "flex-start"
	  },
	  "seckills": {
	    "flexDirection": "column",
	    "width": "210",
	    "justifyContent": "center",
	    "marginRight": "15",
	    "position": "relative"
	  },
	  "seckill_name": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "46",
	    "height": "46",
	    "fontSize": "30",
	    "width": "210",
	    "marginTop": "5",
	    "fontFamily": "微软雅黑 !important",
	    "textAlign": "center",
	    "color": "#333333"
	  },
	  "seckill_Img": {
	    "width": "210",
	    "height": "210"
	  },
	  "seckill_price": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "35",
	    "textAlign": "center"
	  },
	  "seckill_soldOut_Img": {
	    "width": "150",
	    "height": "150",
	    "position": "absolute",
	    "top": "30",
	    "left": "30"
	  }
	}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(10);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _timer = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: "v-seckill",
	  data: function data() {
	    return {
	      origin: _config2.default.$origin,
	      imgBasePath: _config2.default.$imgBasePath,
	      seckillList: [],
	      seckillStatus: "距本场结束",
	      seckillTime: { "hh": "00", "mm": "00", "ss": "00" }
	    };
	  },

	  methods: {
	    /**
	     * 跳转到整点秒杀主页
	     */
	    toSeckillIndex: function toSeckillIndex() {
	      this.$emit("toDetail", "route", 0, "seckillIndex", "");
	    },

	    /**
	     * 转到整点秒杀详情页
	     * @param it
	     */
	    toSeckillDetail: function toSeckillDetail(it) {
	      this.$emit("toDetail", "route", 0, "productDetail", 'id=' + it.productId + '&activityType=4');
	    }
	  },
	  created: function created() {
	    var _this = this;

	    _api.api.get('seckill/list/curHour', function (res) {
	      _this.seckillList = res.list;
	      (0, _timer.timer)({
	        endTime: res.timer,
	        onUpdate: function onUpdate(time) {
	          _this.seckillTime.hh = time.hh;
	          _this.seckillTime.mm = time.mm;
	          _this.seckillTime.ss = time.ss;
	        }
	      });
	    });
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.seckillList && _vm.seckillList.length) ? _c('div', {
	    staticClass: ["seckillDiv"]
	  }, [_c('div', {
	    staticClass: ["seckillHeader"],
	    on: {
	      "click": function($event) {
	        _vm.toSeckillIndex()
	      }
	    }
	  }, [_c('div', {
	    staticClass: ["seckillHeaderLeft"]
	  }, [_c('image', {
	    staticStyle: {
	      width: "50px",
	      height: "50px"
	    },
	    attrs: {
	      "src": _vm.origin + '/assets/images/seckill.png'
	    }
	  }), _c('text', {
	    staticClass: ["seckillTit"]
	  }, [_vm._v("整点秒杀")]), _c('text', {
	    staticClass: ["seckillStatus"]
	  }, [_vm._v(_vm._s(_vm.seckillStatus) + " ")]), _c('text', {
	    staticClass: ["seckillTimeHH"]
	  }, [_vm._v(_vm._s(_vm.seckillTime.hh))]), _c('text', [_vm._v(":")]), _c('text', {
	    staticClass: ["seckillTimeMM"]
	  }, [_vm._v(_vm._s(_vm.seckillTime.mm))]), _c('text', [_vm._v(":")]), _c('text', {
	    staticClass: ["seckillTimeSS"]
	  }, [_vm._v(_vm._s(_vm.seckillTime.ss))])]), _c('div', {
	    staticClass: ["seckillHeaderRight"]
	  }, [_c('text', {
	    staticClass: ["seckillMore"]
	  }, [_vm._v("更多")]), _c('image', {
	    staticClass: ["seckillMoreIcon"],
	    attrs: {
	      "src": _vm.origin + '/assets/images/rightArrow.png'
	    }
	  })])]), _c('scroller', {
	    staticClass: ["seckillList"],
	    attrs: {
	      "scrollDirection": "horizontal"
	    }
	  }, [_vm._l((_vm.seckillList), function(it) {
	    return _c('div', {
	      staticClass: ["seckills"],
	      on: {
	        "click": function($event) {
	          _vm.toSeckillDetail(it)
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["seckill_Img"],
	      attrs: {
	        "src": _vm.imgBasePath + it.productImage
	      }
	    }), _c('text', {
	      staticClass: ["seckill_name"]
	    }, [_vm._v(_vm._s(it.productName))]), _c('text', {
	      staticClass: ["seckill_price"]
	    }, [_vm._v("¥" + _vm._s(it.seckillPrice))]), (it.isSoldOut) ? _c('image', {
	      staticClass: ["seckill_soldOut_Img"],
	      attrs: {
	        "src": _vm.origin + '/assets/images/soldOut.png'
	      }
	    }) : _vm._e()])
	  }), _c('div', {
	    staticClass: ["seckills"],
	    staticStyle: {
	      position: "relative"
	    },
	    on: {
	      "click": function($event) {
	        _vm.toSeckillIndex()
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["seckill_Img"],
	    staticStyle: {
	      position: "absolute",
	      top: "0px"
	    },
	    attrs: {
	      "src": _vm.origin + '/assets/images/seckillMore.jpg'
	    }
	  })])], 2)]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(34)
	)

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(37)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-one-daily.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-55a1731d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = {
	  "oneDailyDiv": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": "10"
	  },
	  "oneDailyBg": {
	    "width": "350",
	    "height": "65",
	    "marginLeft": "200",
	    "marginTop": "15",
	    "marginBottom": "15"
	  }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(10);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _weexVueSlider = __webpack_require__(36);

	var _weexVueSlider2 = _interopRequireDefault(_weexVueSlider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: "v-one-daily",
	  data: function data() {
	    return {
	      origin: _config2.default.$origin,
	      imgBasePath: _config2.default.$imgBasePath,
	      oneDailyList: [],
	      oneDailyPicShow: 1
	    };
	  },

	  components: {
	    "slider-neighbor": _weexVueSlider2.default
	  },
	  methods: {
	    oneDailyChange: function oneDailyChange(event) {
	      this.oneDailyPicShow = event.index;
	    },
	    toDetail: function toDetail(productId) {
	      this.$emit("toDetail", "route", false, "productDetail", 'id=' + productId + '&activityType=3');
	    }
	  },
	  created: function created() {
	    var _this = this;

	    _api.api.get('product/every/products', function (res) {
	      var list = [];
	      if (res && res.length == 3) {
	        list.push(res[1]);
	        list.push(res[2]);
	        list.push(res[0]);
	        _this.oneDailyList = list;
	      }
	    });
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.weexVueSlider = factory();
	})(undefined, function () {
	  'use strict';

	  function __$styleInject(css, returnValue) {
	    if (typeof document === 'undefined') {
	      return returnValue;
	    }
	    css = css || '';
	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }
	    head.appendChild(style);
	    return returnValue;
	  }
	  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-slider-wrapper {\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.weex-slider-inner {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-slider-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent !important;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.neighbor-cell {\n  overflow: visible !important;\n}", undefined);

	  /*
	   * Licensed to the Apache Software Foundation (ASF) under one
	   * or more contributor license agreements.  See the NOTICE file
	   * distributed with this work for additional information
	   * regarding copyright ownership.  The ASF licenses this file
	   * to you under the Apache License, Version 2.0 (the
	   * "License"); you may not use this file except in compliance
	   * with the License.  You may obtain a copy of the License at
	   *
	   *   http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing,
	   * software distributed under the License is distributed on an
	   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	   * KIND, either express or implied.  See the License for the
	   * specific language governing permissions and limitations
	   * under the License.
	   */
	  var TRANSITION_TIME = 400;
	  var NEIGHBOR_SCALE_TIME = 100;
	  var MAIN_SLIDE_OPACITY = 1;
	  var THROTTLE_SCROLL_TIME = 25;
	  var INTERVAL_MINIMUM = 200;

	  var slideMixin = {
	    created: function created() {
	      this._clones = [];
	      this.innerOffset = 0;
	      this._indicator = null;
	    },

	    beforeUpdate: function beforeUpdate() {
	      this._getWrapperSize();
	    },

	    updated: function updated() {
	      var children = this.$children;
	      var len = children && children.length;
	      if (children && len > 0) {
	        for (var i = 0; i < len; i++) {
	          var vm = children[i];
	          if (vm.$options._componentTag === 'indicator' || vm.$vnode.data.ref === 'indicator') {
	            vm._watcher.get();
	            break;
	          }
	        }
	      }
	      weex.utils.fireLazyload(this.$el, true);
	      if (this._preIndex !== this.currentIndex) {
	        this._slideTo(this.currentIndex);
	      }
	    },

	    mounted: function mounted() {
	      this._getWrapperSize();
	      this._slideTo(this.currentIndex);
	      weex.utils.fireLazyload(this.$el, true);
	    },

	    methods: {
	      _getWrapperSize: function _getWrapperSize() {
	        var wrapper = this.$refs.wrapper;
	        if (wrapper) {
	          var rect = wrapper.getBoundingClientRect();
	          this._wrapperWidth = rect.width;
	          this._wrapperHeight = rect.height;
	        }
	      },

	      _formatChildren: function _formatChildren(createElement) {
	        var this$1 = this;

	        var children = this.$slots.default || [];
	        var indicatorVnode;
	        var cells = children.filter(function (vnode) {
	          if (!vnode.tag) {
	            return false;
	          }
	          if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
	            indicatorVnode = vnode;
	            return false;
	          }
	          return true;
	        }).map(function (vnode) {
	          return createElement('li', {
	            ref: 'cells',
	            staticClass: "weex-slider-cell weex-ct" + (this$1.isNeighbor ? ' neighbor-cell' : '')
	          }, [vnode]);
	        });
	        if (indicatorVnode) {
	          indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
	          indicatorVnode.data.attrs.count = cells.length;
	          indicatorVnode.data.attrs.active = this.currentIndex;
	          this._indicator = indicatorVnode;
	        }
	        return cells;
	      },

	      _renderSlides: function _renderSlides(createElement) {
	        this._cells = this._formatChildren(createElement);
	        this.frameCount = this._cells.length;
	        return createElement('nav', {
	          ref: 'wrapper',
	          attrs: { 'weex-type': this.isNeighbor ? 'slider-neighbor' : 'slider' },
	          on: weex.createEventMap(this, ['scroll', 'scrollstart', 'scrollend'], {
	            touchstart: this._handleTouchStart,
	            touchmove: weex.utils.throttle(weex.utils.bind(this._handleTouchMove, this), 25),
	            touchend: this._handleTouchEnd,
	            touchcancel: this._handleTouchCancel
	          }),
	          staticClass: 'weex-slider weex-slider-wrapper weex-ct',
	          staticStyle: weex.extractComponentStyle(this)
	        }, [createElement('ul', {
	          ref: 'inner',
	          staticClass: 'weex-slider-inner weex-ct'
	        }, this._cells), this._indicator]);
	      },

	      // get standard index
	      _normalizeIndex: function _normalizeIndex(index) {
	        var newIndex = (index + this.frameCount) % this.frameCount;
	        return Math.min(Math.max(newIndex, 0), this.frameCount - 1);
	      },

	      _startAutoPlay: function _startAutoPlay() {
	        if (!this.autoPlay || this.autoPlay === 'false') {
	          return;
	        }
	        if (this._autoPlayTimer) {
	          clearTimeout(this._autoPlayTimer);
	          this._autoPlayTimer = null;
	        }
	        var interval = parseInt(this.interval - TRANSITION_TIME - NEIGHBOR_SCALE_TIME);
	        interval = interval > INTERVAL_MINIMUM ? interval : INTERVAL_MINIMUM;
	        this._autoPlayTimer = setTimeout(weex.utils.bind(this._next, this), interval);
	      },

	      _stopAutoPlay: function _stopAutoPlay() {
	        if (this._autoPlayTimer) {
	          clearTimeout(this._autoPlayTimer);
	          this._autoPlayTimer = null;
	        }
	      },

	      _slideTo: function _slideTo(index, isTouchScroll) {
	        var this$1 = this;

	        if (this.frameCount <= 0) {
	          return;
	        }
	        if (!this.infinite || this.infinite === 'false') {
	          if (index === -1 || index > this.frameCount - 1) {
	            this._slideTo(this.currentIndex);
	            return;
	          }
	        }

	        if (!this._preIndex && this._preIndex !== 0) {
	          if (this._showNodes && this._showNodes[0]) {
	            this._preIndex = this._showNodes[0].index;
	          } else {
	            this._preIndex = this.currentIndex;
	          }
	        }

	        if (this._sliding) {
	          return;
	        }
	        this._sliding = true;

	        var newIndex = this._normalizeIndex(index);
	        var inner = this.$refs.inner;
	        var step = this._step = this.frameCount <= 1 ? 0 : this._preIndex - index;

	        if (inner) {
	          this._prepareNodes();
	          var translate = weex.utils.getTransformObj(inner).translate;
	          var match = translate && translate.match(/translate[^(]+\(([+-\d.]+)/);
	          var innerX = match && match[1] || 0;
	          var dist = innerX - this.innerOffset;
	          this.innerOffset += step * this._wrapperWidth;
	          // transform the whole slides group.
	          inner.style.webkitTransition = "-webkit-transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
	          inner.style.transition = "transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
	          inner.style.webkitTransform = "translate3d(" + this.innerOffset + "px, 0, 0)";
	          inner.style.transform = "translate3d(" + this.innerOffset + "px, 0, 0)";

	          // emit scroll events.
	          if (!isTouchScroll) {
	            this._emitScrollEvent('scrollstart');
	          }
	          setTimeout(function () {
	            this$1._throttleEmitScroll(dist, function () {
	              this$1._emitScrollEvent('scrollend');
	            });
	          }, THROTTLE_SCROLL_TIME);

	          this._loopShowNodes(step);

	          setTimeout(function () {
	            if (this$1.isNeighbor) {
	              this$1._setNeighbors();
	            }

	            setTimeout(function () {
	              inner.style.webkitTransition = '';
	              inner.style.transition = '';
	              for (var i = this$1._showStartIdx; i <= this$1._showEndIdx; i++) {
	                var node = this$1._showNodes[i];
	                if (!node) {
	                  continue;
	                }
	                var elm = node.firstElementChild;
	                elm.style.webkitTransition = '';
	                elm.style.transition = '';
	              }
	              // clean cloned nodes and rearrange slide cells.
	              this$1._rearrangeNodes(newIndex);
	            }, NEIGHBOR_SCALE_TIME);
	          }, TRANSITION_TIME);
	        }

	        if (newIndex !== this._preIndex) {
	          this.$emit('change', weex.utils.createEvent(this.$el, 'change', {
	            index: newIndex
	          }));
	        }
	      },

	      _clearNodesOffset: function _clearNodesOffset() {
	        var this$1 = this;

	        var end = this._showEndIdx;
	        for (var i = this._showStartIdx; i <= end; i++) {
	          var node = this$1._showNodes[i];
	          node = node && node.firstElementChild;
	          if (!node) {
	            continue;
	          }
	          weex.utils.addTransform(this$1._showNodes[i].firstElementChild, {
	            translate: 'translate3d(0px, 0px, 0px)'
	          });
	        }
	      },

	      _loopShowNodes: function _loopShowNodes(step) {
	        var this$1 = this;

	        if (!step || this.frameCount <= 1) {
	          return;
	        }
	        var sign = step > 0 ? 1 : -1;
	        var i = step <= 0 ? this._showStartIdx : this._showEndIdx;
	        var end = step <= 0 ? this._showEndIdx : this._showStartIdx;
	        for (; i !== end - sign; i -= sign) {
	          var nextIdx = i + step;
	          this$1._showNodes[nextIdx] = this$1._showNodes[i];
	          this$1._showNodes[nextIdx]._showIndex = nextIdx;
	          delete this$1._showNodes[i];
	        }
	        this._showStartIdx += step;
	        this._showEndIdx += step;
	      },

	      _prepareNodes: function _prepareNodes() {
	        // test if the next slide towards the direction exists.
	        // e.g. currentIndex 0 -> 1: should prepare 4 slides: -1, 0, 1, 2
	        // if not, translate a node to here, or just clone it.
	        var step = this._step;
	        if (!this._inited) {
	          this._initNodes();
	          this._inited = true;
	          this._showNodes = {};
	        }
	        if (this.frameCount <= 1) {
	          this._showStartIdx = this._showEndIdx = 0;
	          var node = this._cells[0].elm;
	          node.style.opacity = 1;
	          node.style.zIndex = 99;
	          node.index = 0;
	          this._showNodes[0] = node;
	          node._inShow = true;
	          node._showIndex = 0;
	          return;
	        }
	        var showCount = this._showCount = Math.abs(step) + 3;
	        this._showStartIdx = step <= 0 ? -1 : 2 - showCount;
	        this._showEndIdx = step <= 0 ? showCount - 2 : 1;
	        this._clearNodesOffset();
	        this._positionNodes(this._showStartIdx, this._showEndIdx, step);
	      },

	      _initNodes: function _initNodes() {
	        var total = this.frameCount;
	        var cells = this._cells;
	        for (var i = 0; i < total; i++) {
	          var node = cells[i].elm;
	          node.index = i;
	          node._inShow = false;
	          node.style.zIndex = 0;
	          node.style.opacity = 0;
	        }
	      },

	      _positionNodes: function _positionNodes(begin, end, step, anim) {
	        var this$1 = this;

	        var cells = this._cells;
	        var start = step <= 0 ? begin : end;
	        var stop = step <= 0 ? end : begin;
	        var sign = step <= 0 ? -1 : 1;
	        var cellIndex = this._preIndex + sign;
	        for (var i = start; i !== stop - sign; i = i - sign) {
	          var node = cells[this$1._normalizeIndex(cellIndex)].elm;
	          cellIndex = cellIndex - sign;
	          this$1._positionNode(node, i);
	        }
	      },

	      /**
	       * index: position index in the showing cells' view.
	       */
	      _positionNode: function _positionNode(node, index) {
	        var holder = this._showNodes[index];
	        if (node._inShow && holder !== node) {
	          if (holder) {
	            this._removeClone(holder);
	          }
	          node = this._getClone(node.index);
	        } else if (node._inShow) {
	          return;
	        }

	        node._inShow = true;
	        var translateX = index * this._wrapperWidth - this.innerOffset;
	        weex.utils.addTransform(node, {
	          translate: "translate3d(" + translateX + "px, 0px, 0px)"
	        });
	        node.style.zIndex = 99 - Math.abs(index);
	        node.style.opacity = 1;
	        node._showIndex = index;
	        this._showNodes[index] = node;
	      },

	      _getClone: function _getClone(index) {
	        var arr = this._clones[index];
	        if (!arr) {
	          this._clones[index] = arr = [];
	        }
	        if (arr.length <= 0) {
	          var origNode = this._cells[index].elm;
	          var clone = origNode.cloneNode(true);
	          clone._isClone = true;
	          clone._inShow = origNode._inShow;
	          clone.index = origNode.index;
	          clone.style.opacity = 0;
	          clone.style.zIndex = 0;
	          var ct = this.$refs.inner;
	          ct.appendChild(clone);
	          arr.push(clone);
	        }
	        return arr.pop();
	      },

	      _removeClone: function _removeClone(node) {
	        var idx = node.index;
	        this._hideNode(node);
	        var arr = this._clones[idx];
	        arr.push(node);
	      },

	      _hideNode: function _hideNode(node) {
	        node._inShow = false;
	        node.style.opacity = 0;
	        node.style.zIndex = 0;
	      },

	      /**
	       * hide nodes from begin to end in showArray.
	       * if it is clone node, just move the clone node to the buffer.
	       */
	      _clearNodes: function _clearNodes(begin, end) {
	        var this$1 = this;

	        for (var i = begin; i <= end; i++) {
	          var node = this$1._showNodes[i];
	          if (!node) {
	            return;
	          }
	          if (node._isClone) {
	            this$1._removeClone(node);
	          } else if (!node._inShow) {
	            this$1._hideNode(node);
	          }
	          delete this$1._showNodes[i];
	        }
	      },

	      /**
	       * copy node style props (opacity and zIndex) and transform status from
	       * one element to another.
	       */
	      _copyStyle: function _copyStyle(from, to, styles, transformExtra) {
	        if (styles === void 0) styles = ['opacity', 'zIndex'];
	        if (transformExtra === void 0) transformExtra = {};

	        weex.utils.extendKeys(to.style, from.style, styles);
	        var transObj = weex.utils.getTransformObj(from);
	        for (var k in transformExtra) {
	          transObj[k] = transformExtra[k];
	        }
	        weex.utils.addTransform(to, transObj);
	        var fromInner = from.firstElementChild;
	        var toInner = to.firstElementChild;
	        toInner.style.opacity = fromInner.style.opacity;
	        weex.utils.copyTransform(fromInner, toInner);
	      },

	      /**
	       * replace a clone node with the original node if it's not in use.
	       */
	      _replaceClone: function _replaceClone(clone, pos) {
	        var this$1 = this;

	        var origNode = this._cells[clone.index].elm;
	        if (origNode._inShow) {
	          return;
	        }
	        var origShowIndex = origNode._showIndex;
	        var styleProps = ['opacity', 'zIndex'];
	        var cl;
	        if (Math.abs(origShowIndex) <= 1) {
	          // leave a clone to replace the origNode in the show zone(-1 ~ 1).
	          cl = this._getClone(origNode.index);
	          this._copyStyle(origNode, cl);
	          this._showNodes[origShowIndex] = cl;
	        }
	        origNode._inShow = true;
	        var transObj = weex.utils.getTransformObj(clone);
	        transObj.translate = transObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
	          return pos * this$1._wrapperWidth - this$1.innerOffset + 'px';
	        });
	        this._copyStyle(clone, origNode, styleProps, transObj);
	        this._removeClone(clone);
	        if (!cl) {
	          delete this._showNodes[origShowIndex];
	        }
	        this._showNodes[pos] = origNode;
	        origNode._showIndex = pos;
	      },

	      _rearrangeNodes: function _rearrangeNodes(newIndex) {
	        var this$1 = this;

	        if (this.frameCount <= 1) {
	          this._sliding = false;
	          this.currentIndex = 0;
	          return;
	        }

	        // clear autoPlay timer (and restart after updated hook).
	        this._startAutoPlay();

	        /**
	         * clean nodes. replace current node with non-cloned node.
	         * set current index to the new index.
	         */
	        var shows = this._showNodes;
	        for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
	          shows[i]._inShow = false;
	        }
	        for (var i$1 = -1; i$1 <= 1; i$1++) {
	          var node = shows[i$1];
	          if (!node._isClone) {
	            node._inShow = true;
	          } else {
	            this$1._replaceClone(node, i$1);
	          }
	        }

	        this._clearNodes(this._showStartIdx, -2);
	        this._showStartIdx = -1;
	        this._clearNodes(2, this._showEndIdx);
	        this._showEndIdx = 1;
	        this._sliding = false;

	        // set current index to the new index.
	        this.currentIndex = newIndex;
	        this._preIndex = newIndex;
	      },

	      /**
	       * according to the attrs: neighborScale, neighborAlpha, neighborSpace.
	       * 1. apply the main cell transform effects.
	       * 2. set the previous cell and the next cell's positon, scale and alpha.
	       * 3. set other cells' scale and alpha.
	       */
	      _setNeighbors: function _setNeighbors() {
	        var this$1 = this;

	        for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
	          var elm = this$1._showNodes[i].firstElementChild;
	          elm.style.webkitTransition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
	          elm.style.transition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
	          var transObj = {
	            scale: "scale(" + (i === 0 ? this$1.currentItemScale : this$1.neighborScale) + ")"
	          };
	          var translateX = void 0;
	          if (!this$1._neighborWidth) {
	            this$1._neighborWidth = parseFloat(elm.style.width) || elm.getBoundingClientRect().width;
	          }
	          // calculate position offsets according to neighbor scales.
	          if (Math.abs(i) === 1) {
	            var dist = ((this$1._wrapperWidth - this$1._neighborWidth * this$1.neighborScale) / 2 + this$1.neighborSpace * weex.config.env.scale) / this$1.neighborScale;
	            translateX = -i * dist;
	          } else {
	            // clear position offsets.
	            translateX = 0;
	          }
	          transObj.translate = "translate3d(" + translateX + "px, 0px, 0px)";
	          weex.utils.addTransform(elm, transObj);
	          elm.style.opacity = i === 0 ? MAIN_SLIDE_OPACITY : this$1.neighborAlpha;
	        }
	      },

	      _next: function _next() {
	        var next = this.currentIndex + 1;
	        if (this.frameCount <= 1) {
	          next--;
	        }
	        this._slideTo(next);
	      },

	      _prev: function _prev() {
	        var prev = this.currentIndex - 1;
	        if (this.frameCount <= 1) {
	          prev++;
	        }
	        this._slideTo(prev);
	      },

	      _handleTouchStart: function _handleTouchStart(event) {
	        var touch = event.changedTouches[0];
	        this._stopAutoPlay();
	        this._touchParams = {
	          originalTransform: this.$refs.inner.style.webkitTransform || this.$refs.inner.style.transform,
	          startTouchEvent: touch,
	          startX: touch.pageX,
	          startY: touch.pageY,
	          timeStamp: event.timeStamp
	        };
	      },

	      _handleTouchMove: function _handleTouchMove(event) {
	        var tp = this._touchParams;
	        if (!tp) {
	          return;
	        }
	        if (this._sliding) {
	          {
	            console.warn("[vue-render] warn: can't scroll the slider during sliding.");
	          }
	          return;
	        }
	        var ref = this._touchParams;
	        var startX = ref.startX;
	        var startY = ref.startY;
	        var touch = event.changedTouches[0];
	        var offsetX = touch.pageX - startX;
	        var offsetY = touch.pageY - startY;
	        tp.offsetX = offsetX;
	        tp.offsetY = offsetY;
	        var isV = tp.isVertical;
	        if (typeof isV === 'undefined') {
	          isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
	          if (!isV) {
	            this._emitScrollEvent('scrollstart');
	          }
	        }
	        // vertical scroll. just ignore it.
	        if (isV) {
	          return;
	        }
	        // horizontal scroll. trigger scroll event.
	        event.preventDefault();
	        var inner = this.$refs.inner;
	        if (inner && offsetX) {
	          if (!this._nodesOffsetCleared) {
	            this._nodesOffsetCleared = true;
	            this._clearNodesOffset();
	          }
	          this._emitScrollEvent('scroll', {
	            offsetXRatio: offsetX / this._wrapperWidth
	          });
	          inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
	          inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
	        }
	      },

	      _handleTouchEnd: function _handleTouchEnd(event) {
	        this._startAutoPlay();
	        var tp = this._touchParams;
	        if (!tp) {
	          return;
	        }
	        var isV = tp.isVertical;
	        if (typeof isV === 'undefined') {
	          return;
	        }
	        var inner = this.$refs.inner;
	        var offsetX = tp.offsetX;
	        if (inner) {
	          this._nodesOffsetCleared = false;
	          // TODO: test the velocity if it's less than 0.2.
	          var reset = Math.abs(offsetX / this._wrapperWidth) < 0.2;
	          var direction = offsetX > 0 ? 1 : -1;
	          var newIndex = reset ? this.currentIndex : this.currentIndex - direction;
	          this._slideTo(newIndex, true);
	        }
	        delete this._touchParams;
	      },

	      _handleTouchCancel: function _handleTouchCancel(event) {
	        return this._handleTouchEnd(event);
	      },

	      _emitScrollEvent: function _emitScrollEvent(type, data) {
	        if (data === void 0) data = {};

	        this.$emit(type, weex.utils.createEvent(this.$el, type, data));
	      },

	      _throttleEmitScroll: function _throttleEmitScroll(offset, callback) {
	        var this$1 = this;

	        var i = 0;
	        var throttleTime = THROTTLE_SCROLL_TIME;
	        var cnt = parseInt(TRANSITION_TIME / throttleTime) - 1;
	        var sign = offset > 0 ? 1 : -1;
	        var r = Math.abs(offset / this._wrapperWidth);
	        var throttledScroll = function throttledScroll() {
	          if (++i > cnt) {
	            return callback && callback.call(this$1);
	          }
	          var ratio = this$1._step === 0 ? sign * r * (1 - i / cnt) : sign * (r + (1 - r) * i / cnt);
	          this$1._emitScrollEvent('scroll', {
	            offsetXRatio: ratio
	          });
	          setTimeout(throttledScroll, THROTTLE_SCROLL_TIME);
	        };
	        throttledScroll();
	      }
	    }
	  };

	  /*
	   * Licensed to the Apache Software Foundation (ASF) under one
	   * or more contributor license agreements.  See the NOTICE file
	   * distributed with this work for additional information
	   * regarding copyright ownership.  The ASF licenses this file
	   * to you under the Apache License, Version 2.0 (the
	   * "License"); you may not use this file except in compliance
	   * with the License.  You may obtain a copy of the License at
	   *
	   *   http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing,
	   * software distributed under the License is distributed on an
	   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	   * KIND, either express or implied.  See the License for the
	   * specific language governing permissions and limitations
	   * under the License.
	   */
	  // import { validateStyles } from '../../validator'
	  // import indicator from './indicator'
	  var slider$2 = {
	    mixins: [slideMixin],
	    props: {
	      index: {
	        type: [String, Number],
	        default: 0
	      },
	      'auto-play': {
	        type: [String, Boolean],
	        default: false
	      },
	      interval: {
	        type: [String, Number],
	        default: 3000
	      },
	      infinite: {
	        type: [String, Boolean],
	        default: true
	      }
	    },

	    watch: {
	      index: function index() {
	        this.currentIndex = this._normalizeIndex(this.index);
	      }
	    },

	    data: function data() {
	      return {
	        frameCount: 0,
	        currentIndex: this.index
	      };
	    },

	    beforeCreate: function beforeCreate() {
	      this.weexType = 'slider';
	    },

	    render: function render(createElement) {
	      /* istanbul ignore next */
	      // if ("development" === 'development') {
	      //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
	      // }
	      return this._renderSlides(createElement);
	    }
	  };

	  var slider$3 = {
	    init: function init(weex) {
	      weex.registerComponent('slider', slider$2);
	      weex.registerComponent('cycleslider', slider$2);
	    }
	  };

	  /*
	   * Licensed to the Apache Software Foundation (ASF) under one
	   * or more contributor license agreements.  See the NOTICE file
	   * distributed with this work for additional information
	   * regarding copyright ownership.  The ASF licenses this file
	   * to you under the Apache License, Version 2.0 (the
	   * "License"); you may not use this file except in compliance
	   * with the License.  You may obtain a copy of the License at
	   *
	   *   http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing,
	   * software distributed under the License is distributed on an
	   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	   * KIND, either express or implied.  See the License for the
	   * specific language governing permissions and limitations
	   * under the License.
	   */
	  var DEFAULT_NEIGHBOR_SPACE = 20;
	  var DEFAULT_NEIGHBOR_ALPHA = 0.6;
	  var DEFAULT_NEIGHBOR_SCALE = 0.8;
	  var DEFAULT_CURRENT_ITEM_SCALE = 0.9;

	  var sliderNeighbor = {
	    mixins: [slideMixin],
	    props: {
	      index: {
	        type: [String, Number],
	        default: 0
	      },
	      autoPlay: {
	        type: [String, Boolean],
	        default: false
	      },
	      interval: {
	        type: [String, Number],
	        default: 3000
	      },
	      infinite: {
	        type: [String, Boolean],
	        default: true
	      },
	      neighborSpace: {
	        type: [String, Number],
	        validator: function validator(val) {
	          val = parseFloat(val);
	          return !isNaN(val) && val > 0;
	        },
	        default: DEFAULT_NEIGHBOR_SPACE
	      },
	      neighborAlpha: {
	        type: [String, Number],
	        validator: function validator(val) {
	          val = parseFloat(val);
	          return !isNaN(val) && val >= 0 && val <= 1;
	        },
	        default: DEFAULT_NEIGHBOR_ALPHA
	      },
	      neighborScale: {
	        type: [String, Number],
	        validator: function validator(val) {
	          val = parseFloat(val);
	          return !isNaN(val) && val >= 0 && val <= 1;
	        },
	        default: DEFAULT_NEIGHBOR_SCALE
	      },
	      currentItemScale: {
	        type: [String, Number],
	        validator: function validator(val) {
	          val = parseFloat(val);
	          return !isNaN(val) && val >= 0 && val <= 1;
	        },
	        default: DEFAULT_CURRENT_ITEM_SCALE
	      }
	    },

	    watch: {
	      index: function index() {
	        this.currentIndex = this._normalizeIndex(this.index);
	      }
	    },

	    data: function data() {
	      return {
	        currentIndex: this.index,
	        frameCount: 0
	      };
	    },

	    beforeCreate: function beforeCreate() {
	      this.isNeighbor = true;
	      this.weexType = 'slider-neighbor';
	    },

	    render: function render(createElement) {
	      return this._renderSlides(createElement);
	    }
	  };

	  var neighbor = {
	    init: function init(weex) {
	      weex.registerComponent('slider-neighbor', sliderNeighbor);
	    }
	  };

	  /*
	   * Licensed to the Apache Software Foundation (ASF) under one
	   * or more contributor license agreements.  See the NOTICE file
	   * distributed with this work for additional information
	   * regarding copyright ownership.  The ASF licenses this file
	   * to you under the Apache License, Version 2.0 (the
	   * "License"); you may not use this file except in compliance
	   * with the License.  You may obtain a copy of the License at
	   *
	   *   http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing,
	   * software distributed under the License is distributed on an
	   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	   * KIND, either express or implied.  See the License for the
	   * specific language governing permissions and limitations
	   * under the License.
	   */

	  var _css = "\n.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n";

	  var extractComponentStyle;
	  var extend;
	  var extendKeys;

	  function getIndicatorItemStyle(spec, isActive) {
	    var style = {};
	    style['background-color'] = spec[isActive ? 'itemSelectedColor' : 'itemColor'];
	    style['width'] = style['height'] = spec['itemSize'];
	    return style;
	  }

	  function _render(context, h) {
	    var children = [];
	    var mergedStyle = extractComponentStyle(context);
	    var indicatorSpecStyle = extendKeys({}, mergedStyle, ['itemColor', 'itemSelectedColor', 'itemSize']);
	    for (var i = 0; i < Number(context.count); ++i) {
	      var classNames = ['weex-indicator-item weex-el'];
	      var isActive = false;
	      if (i === Number(context.active)) {
	        classNames.push('weex-indicator-item-active');
	        isActive = true;
	      }
	      children.push(h('mark', {
	        staticClass: classNames.join(' '),
	        staticStyle: getIndicatorItemStyle(indicatorSpecStyle, isActive)
	      }));
	    }
	    context.$nextTick(function () {
	      _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
	    });
	    return h('nav', {
	      attrs: { 'weex-type': 'indicator' },
	      staticClass: 'weex-indicator weex-ct',
	      staticStyle: mergedStyle
	    }, children);
	  }

	  /**
	   * get indicator's virtual rect (width, height), which is the .
	   */
	  function _getVirtualRect(context, mergedStyle) {
	    var ct = context._getParentRect();
	    var rect = ['width', 'height'].reduce(function (pre, key) {
	      var msv = mergedStyle && mergedStyle[key];
	      pre[key] = msv ? parseFloat(msv) : ct[key];
	      return pre;
	    }, {});
	    return rect;
	  }

	  /**
	   * get indicator's ltbr values (without units).
	   */
	  function _getLtbr(context, mergedStyle) {
	    return ['left', 'top', 'bottom', 'right'].reduce(function (pre, key) {
	      var msv = mergedStyle && mergedStyle[key];
	      if (!msv && msv !== 0) {
	        return pre;
	      }
	      pre[key] = parseFloat(msv);
	      return pre;
	    }, {});
	  }

	  /**
	   * get indicator's rect (width, height).
	   */
	  function _getIndicatorRect(el) {
	    var width, height;
	    if (el.children.length === 1) {
	      width = height = window.getComputedStyle(el.children[0]);
	    } else {
	      var itemComputedStyle = window.getComputedStyle(el.children[1]);
	      var padding = parseFloat(itemComputedStyle.marginLeft);
	      height = parseFloat(itemComputedStyle.height);
	      width = el.children.length * (height + padding) - padding;
	    }
	    return { width: width, height: height };
	  }

	  /**
	   * calculate and reset indicator's width, height, and ltbr.
	   * @param {object} virtualRect. width and height of indicator's virtual rect box.
	   * @param {object} ltbr. the user specified left, top, bottom, right pixels (without units).
	   */
	  function _reLayout(context, virtualRect, ltbr) {
	    var el = context.$el;
	    var rect = _getIndicatorRect(el);
	    var rectWithPx = Object.keys(rect).reduce(function (pre, key) {
	      pre[key] = rect[key] + 'px';
	      return pre;
	    }, {});
	    extend(el.style, rectWithPx);
	    var axisMap = [{
	      dir: ltbr.left || ltbr.left === 0 ? 'left' : ltbr.right || ltbr.right === 0 ? 'right' : 'left',
	      scale: 'width'
	    }, {
	      dir: ltbr.top || ltbr.top === 0 ? 'top' : ltbr.bottom || ltbr.bottom === 0 ? 'bottom' : 'top',
	      scale: 'height'
	    }];
	    Object.keys(axisMap).forEach(function (key) {
	      var ref = axisMap[key];
	      var dir = ref.dir;
	      var scale = ref.scale;
	      el.style[dir] = (ltbr[dir] || 0) + virtualRect[scale] / 2 - rect[scale] / 2 + 'px';
	    });
	  }

	  var indicator = {
	    name: 'weex-indicator',
	    methods: {
	      show: function show() {
	        this.$el.style.visibility = 'visible';
	      }
	    },
	    data: function data() {
	      return {
	        count: 0,
	        active: 0
	      };
	    },
	    render: function render(createElement) {
	      var ref = this.$vnode.data.attrs || {};
	      var count = ref.count;
	      var active = ref.active;
	      this.count = count;
	      this.active = active;
	      if (!this.count) {
	        return;
	      }
	      return _render(this, createElement);
	    },
	    _css: _css
	  };

	  var indicator$1 = {
	    init: function init(weex) {
	      extractComponentStyle = weex.extractComponentStyle;
	      extend = weex.utils.extend;
	      extendKeys = weex.utils.extendKeys;
	      weex.registerComponent('indicator', indicator);
	    }
	  };

	  /*
	   * Licensed to the Apache Software Foundation (ASF) under one
	   * or more contributor license agreements.  See the NOTICE file
	   * distributed with this work for additional information
	   * regarding copyright ownership.  The ASF licenses this file
	   * to you under the Apache License, Version 2.0 (the
	   * "License"); you may not use this file except in compliance
	   * with the License.  You may obtain a copy of the License at
	   *
	   *   http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing,
	   * software distributed under the License is distributed on an
	   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	   * KIND, either express or implied.  See the License for the
	   * specific language governing permissions and limitations
	   * under the License.
	   */

	  var slider$1 = {
	    init: function init(weex) {
	      weex.install(slider$3);
	      weex.install(neighbor);
	      weex.install(indicator$1);
	    }
	  };

	  return slider$1;
	});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.oneDailyList && _vm.oneDailyList.length) ? _c('div', {
	    staticClass: ["oneDailyDiv"]
	  }, [_c('slider-neighbor', {
	    staticStyle: {
	      width: "750px",
	      height: "368px"
	    },
	    attrs: {
	      "neighborScale": "0.8",
	      "neighborSpace": "30",
	      "currentItemScale": "0.90",
	      "interval": "3000",
	      "neighborAlpha": "0.8",
	      "autoPlay": "false"
	    },
	    on: {
	      "change": _vm.oneDailyChange
	    }
	  }, _vm._l((_vm.oneDailyList), function(it) {
	    return _c('image', {
	      staticStyle: {
	        width: "600px",
	        height: "368px",
	        backgroundColor: "#FFFFDF"
	      },
	      attrs: {
	        "src": _vm.imgBasePath + it.imageId
	      },
	      on: {
	        "click": function($event) {
	          _vm.toDetail(it.productId)
	        }
	      }
	    })
	  })), (_vm.oneDailyPicShow == 0) ? _c('image', {
	    staticClass: ["oneDailyBg"],
	    attrs: {
	      "src": _vm.origin + '/assets/images/oneDailyBg.png'
	    }
	  }) : _vm._e(), (_vm.oneDailyPicShow == 1) ? _c('image', {
	    staticClass: ["oneDailyBg"],
	    attrs: {
	      "src": _vm.origin + '/assets/images/oneDailyBg1.png'
	    }
	  }) : _vm._e(), (_vm.oneDailyPicShow == 2) ? _c('image', {
	    staticClass: ["oneDailyBg"],
	    attrs: {
	      "src": _vm.origin + '/assets/images/oneDailyBg2.png'
	    }
	  }) : _vm._e()]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(39)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/services/router.vue"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.router = undefined;

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _utils = __webpack_require__(19);

	var _dialog = __webpack_require__(13);

	var _api = __webpack_require__(10);

	var _specsDialogData = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var platform = weex.config.env.platform;
	var navigator = weex.requireModule('navigator');
	var router = exports.router = {
	  open: function open(type, needLogin, link, params, _callBack) {
	    var module = weex.requireModule('event');
	    var serveBasePath = _config2.default.$serveBasePath;
	    if (type === "route") {
	      // 添加到购物车
	      if (link === 'addToCard') {
	        var obj = _utils.utils.serializeObj(params);
	        var productId = obj.id;
	        var _type = obj.type || '';
	        var isAddToCart = obj.isAddToCart || true;
	        var promoteId = obj.promoteId || '';
	        _specsDialogData.specsDialogData.handle({
	          productId: productId,
	          type: _type,
	          isAddToCart: isAddToCart,
	          callBack: function callBack(param) {
	            param.promoteId = promoteId;
	            module.openSpecDialog(param, function (data) {
	              if (_callBack && typeof _callBack === 'function') {
	                _callBack(data);
	              }
	            });
	          }
	        });
	        return;
	      }
	      //登录
	      if (link === 'login') {
	        var loginClassName = "com.wawscm.activity.LoginActivity";
	        if (platform === "iOS") {
	          loginClassName = "LoginGaiBanViewController";
	        }
	        module.openNativePage(loginClassName, "", "false");
	        return;
	      }
	      // 签到
	      if (link === 'signIn') {
	        var signInClassName = "com.wawscm.activity.MainMineSignActivity";
	        if (platform === "iOS") {
	          signInClassName = "SignInPointsVC";
	        }
	        module.openNativePage(signInClassName, "", "true");
	        return;
	      }
	      // 活动主页
	      if (link === 'activityHome') {
	        var activityId = _utils.utils.serializeObj(params).activityId;
	        navigator.push({
	          url: _config2.default.$origin + '/assets/compiles/activity/' + activityId + '.js',
	          animated: 'true'
	        });
	        return;
	      }
	      //整点秒杀主页
	      if (link === 'seckillIndex') {
	        module.openWebPage(serveBasePath + "#/seckill/index", "false");
	        return;
	      }
	      // 商品列表
	      if (link === 'productList') {
	        var productList = _utils.utils.serializeObj(params);
	        var plType = productList.type;
	        var word = productList.word;
	        module.openWebPage(serveBasePath + "#/productList/" + plType + "/" + word, "false");
	        return;
	      }
	      // 商品详情
	      if (link === 'productDetail') {
	        var productDetail = _utils.utils.serializeObj(params);
	        var _productId = productDetail.id;
	        var activityType = productDetail.activityType || 0;
	        navigator.push({
	          url: _config2.default.$origin + ('/assets/compiles/product/detail/index.js?productId=' + _productId + '&activityType=' + activityType),
	          animated: 'true'
	        });
	        return;
	      }
	      // 店铺首页
	      if (link === 'shopHome') {
	        var shopHome = _utils.utils.serializeObj(params);
	        var shopId = shopHome.id;
	        _api.api.get("shop/is/task/new/decoration/" + shopId, function (data) {
	          if (data) {
	            navigator.push({
	              url: _config2.default.$origin + ('/assets/compiles/shop/' + shopId + '/index.js'),
	              animated: 'true'
	            });
	          } else {
	            module.openWebPage(serveBasePath + "#/app/shopHome/" + shopId, "false");
	          }
	        });
	        return;
	      }
	      // 店铺频道页
	      if (link === 'shopChannel') {
	        var shopChannel = _utils.utils.serializeObj(params);
	        var shopChannelShopId = shopChannel.shopId;
	        var shopChannelUrl = shopChannel.urlSuffix;
	        navigator.push({
	          url: _config2.default.$origin + ('/assets/compiles/shop/' + shopChannelShopId + '/' + shopChannelUrl + '.js'),
	          animated: 'true'
	        });
	        return;
	      }
	      // 店铺搜索
	      if (link === 'shopSearch') {
	        var shopSearchParams = _utils.utils.serializeObj(params);
	        var shopSearchShopId = shopSearchParams.shopId;
	        module.openWebPage(serveBasePath + "#/shopSearch/" + shopSearchShopId, "false");
	        return;
	      }
	      // 店铺分类
	      if (link === 'shopCategory') {
	        var shopCategoryParams = _utils.utils.serializeObj(params);
	        var shopCategoryShopId = shopCategoryParams.shopId;
	        module.openWebPage(serveBasePath + "#/shopCategory/" + shopCategoryShopId, "false");
	        return;
	      }
	      // 店铺商品list
	      if (link === 'shopProductList') {
	        var shopProductListParams = _utils.utils.serializeObj(params);
	        var shopProductListShopId = shopProductListParams.id;
	        var shopProductListType = shopProductListParams.type || 3;
	        var shopProductListWord = shopProductListParams.word || "";
	        module.openWebPage(serveBasePath + ('#/shopProductList/' + shopProductListShopId + '/' + shopProductListType + '/' + shopProductListWord), "false");
	        return;
	      }
	      // 专题
	      if (link === 'zhuanti') {
	        var zhuanti = _utils.utils.serializeObj(params);
	        var identification = zhuanti.identification;
	        if (identification && /.html$/.test(identification)) {
	          identification = identification.substring(0, identification.length - 5);
	        }
	        navigator.push({
	          url: _config2.default.$origin + '/assets/compiles/special/' + identification + '.js',
	          animated: 'true'
	        });
	        return;
	      }
	      // 新人专享
	      if (link === 'newSpreeList') {
	        // module.openWebPage(serveBasePath + "#/newSpreeList", "false");
	        _api.api.get('activity/get/newspree/info', function (result) {
	          var activityId = result.id;
	          navigator.push({
	            url: _config2.default.$origin + '/assets/compiles/activity/' + activityId + '.js',
	            animated: 'true'
	          });
	        });
	        return;
	      }
	      // 优惠券
	      if (link === 'couponList') {
	        var couponClassName = "com.wawscm.activity.CollarCouponsCenterActivity";
	        if (platform === "iOS") {
	          couponClassName = "Coupon_ListViewController";
	        }
	        module.openNativePage(couponClassName, "", "true");
	        return;
	      }
	      // 拼团
	      if (link === 'groupBuyingList') {
	        module.openWebPage(serveBasePath + "#/groupBuying/list", "false");
	        return;
	      }

	      // 限时特卖列表
	      if (link === 'limitSaleList') {
	        module.openWebPage(serveBasePath + "#/limitSaleList", "false");
	        return;
	      }

	      // 世航保障
	      if (link === 'genuine') {
	        module.openWebPage(serveBasePath + "#/genuine", "false");
	        return;
	      }

	      // 领取优惠券
	      if (link === 'receiveCoupon') {
	        module.openWebPage(serveBasePath + "#/genuine", "false");
	        var receiveCouponCouponNum = _utils.utils.serializeObj(params).couponNum;
	        module.openWebPage(serveBasePath + "#/receiveCoupon/" + receiveCouponCouponNum, "false");
	        return;
	      }

	      // 套餐商品列表
	      if (link === 'suitsProductList') {
	        var _obj = _utils.utils.serializeObj(params);
	        var _productId2 = _obj.productId;
	        var partnerId = _obj.partnerId;
	        module.openWebPage(serveBasePath + ('#/suitsProductList/' + _productId2 + '/' + partnerId), "false");
	        return;
	      }

	      // 攻略列表
	      if (link === 'guideList') {
	        var _signInClassName = "com.wawscm.activity.GuideActivity";
	        if (platform === "iOS") {
	          _signInClassName = "GongLueViewController";
	        }
	        module.openNativePage(_signInClassName, "", "false");
	        return;
	      }
	      // 相关攻略列表
	      if (link === 'relatedGuideList') {
	        var _obj2 = _utils.utils.serializeObj(params);
	        var bizType = _obj2.bizType;
	        var _productId3 = _obj2.productId;
	        module.openWebPage(serveBasePath + ('#/relatedGuideList?bizType=' + bizType + '&id=' + _productId3), "false");
	        return;
	      }

	      // 攻略详情
	      if (link === 'guideDetail') {
	        var _obj3 = _utils.utils.serializeObj(params);
	        var guideId = _obj3.guideId;
	        module.openWebPage(serveBasePath + ('#/guideDetail?guideId=' + guideId), "false");
	        return;
	      }

	      // 店铺促销装修页面
	      if (link === 'shopSalesDecoration') {
	        var _obj4 = _utils.utils.serializeObj(params);
	        var _shopId = _obj4.shopId;
	        var shopSalesId = _obj4.shopSalesId;
	        module.openWebPage(serveBasePath + ('#/shop/sales/decoration/' + _shopId + '/' + shopSalesId), "false");
	        return;
	      }
	      // 店铺促销列表页
	      if (link === 'shopSaleList') {
	        var _obj5 = _utils.utils.serializeObj(params);
	        var id = _obj5.id;
	        module.openWebPage(serveBasePath + ('#/shopSaleList/' + id), "false");
	        return;
	      }
	      // 推广联盟邀请注册
	      if (link === 'dealerInvitation') {
	        var _loginClassName = "com.wawscm.activity.PromoteInviteActivity";
	        if (platform === "iOS") {
	          _loginClassName = "JoinExtendViewController";
	        }
	        module.openNativePage(_loginClassName, '', 'false');
	        return;
	      }
	      // 邀请好友
	      if (link === 'inviteFriend') {
	        var _loginClassName2 = "com.wawscm.activity.InvideProActivity";
	        if (platform === "iOS") {
	          _loginClassName2 = "InvitFriendsAlterViewController";
	        }
	        module.openNativePage(_loginClassName2, '', 'true');
	        return;
	      }
	    } else {
	      module.openWebPage(link);
	    }
	  }
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/services/specs-dialog-data.vue"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.specsDialogData = undefined;

	var _activityType = __webpack_require__(42);

	var _dialog = __webpack_require__(13);

	var _api = __webpack_require__(10);

	var _utils = __webpack_require__(19);

	//
	//
	//
	//

	var specsDialogData = exports.specsDialogData = {
	  /**
	   * 处理函数
	   * @param productId - 商品id
	   * @param type - 活动类型, 参考 activityType 定义
	   * @param isAddToCart - 是否加入购物车
	   * @param callBack - 回调函数
	   */
	  handle: function handle(_ref) {
	    var productId = _ref.productId,
	        type = _ref.type,
	        _ref$isAddToCart = _ref.isAddToCart,
	        isAddToCart = _ref$isAddToCart === undefined ? true : _ref$isAddToCart,
	        callBack = _ref.callBack;

	    if (callBack && typeof callBack === 'function') {
	      var param = {
	        activityType: _activityType.productActivityCode[type],
	        activity: true,
	        details: true,
	        sales: false,
	        productDesc: false
	      };
	      _api.api.cloudGet('pds/product/packageData/' + productId, param, function (data) {
	        var wrapper = data.wrapper || {};
	        var productSpecs = wrapper.productSpecs || []; // 商品规格信息
	        var details = data.details || []; // 规格详情
	        var product = wrapper.productInfo || {}; // 商品信息
	        var images = wrapper.images || [];

	        // 封面图片处理
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _ref3 = _step.value;
	            var isCover = _ref3.isCover,
	                middleImage = _ref3.middleImage;

	            if (isCover) {
	              product.productImage = middleImage;
	              break;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        var activity = data.activity || {};
	        var detail = activity.detail || {};

	        var activityType = activity.activityType;

	        var priceDesc = ''; // 价格秒杀
	        var numDesc = ''; // 数量描述

	        // 限时特卖
	        if (activityType === _activityType.productActivityType.falshSale) {
	          // 更改商品封面价格为限时特卖的特卖价
	          product.coverPrice = detail.flashSaleDetail.fsPrice;
	          // 限制限时特卖只能购买一个
	          product.minBuyNum = 1;
	          product.maxBuyNum = detail.buyLimit || 1;
	          // 更改商品规格的价格为限时特卖的特卖价
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = details[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var temp = _step2.value;

	              temp.price = product.coverPrice;
	            }
	            // 拼团
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }
	        } else if (activityType === _activityType.productActivityType.groupBuying || activityType === _activityType.productActivityType.hotGroupBuying) {
	          // 拼团商品详情
	          var groupBuyingProductDetails = detail.groupBuyingProductDetails || [];
	          // 商品封面价格
	          product.coverPrice = detail.coverPrice;
	          // 限制拼团只能购买一个
	          product.minBuyNum = 1;
	          product.maxBuyNum = 1;

	          priceDesc = (detail.groupNum || 0) + '人拼团价';
	          numDesc = '限购1件';

	          // 更改商品规格价格为拼团价格
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            var _loop = function _loop() {
	              var temp = _step3.value;

	              var results = groupBuyingProductDetails.filter(function (item) {
	                return item.productDetailId === temp.productDetailId;
	              });
	              if (!_utils.utils.isNull(results)) {
	                temp.price = results[0].groupPrice;
	              }
	            };

	            for (var _iterator3 = details[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              _loop();
	            }
	            // 直降 or 新人专享
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        } else if (activityType === _activityType.productActivityType.discount || activityType === _activityType.productActivityType.rookies || activityType === _activityType.productActivityType.every) {
	          // 活动商品信息
	          var activityProduct = detail.activityProduct || {};
	          // 商品封面价格
	          product.coverPrice = activityProduct.coverPrice;

	          // 限制新人专享只能购买一个
	          if (type === _activityType.productActivityType.rookies) {
	            product.minBuyNum = 1;
	            product.maxBuyNum = 1;
	          }

	          // 活动商品详情信息
	          var activityProductDetails = activityProduct.activityProductDetails || [];
	          // 更改商品规格价格为活动价格
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            var _loop2 = function _loop2() {
	              var temp = _step4.value;

	              var results = activityProductDetails.filter(function (item) {
	                return item.productDetailId === temp.productDetailId;
	              });
	              if (!_utils.utils.isNull(results)) {
	                temp.price = results[0].activityPrice;
	              }
	            };

	            for (var _iterator4 = details[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              _loop2();
	            }
	            // 整点秒杀
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }
	        } else if (activityType === _activityType.productActivityType.seckill) {
	          // 商品封面价格
	          product.coverPrice = detail.seckillPrice;
	          // 整点秒杀商品详情信息
	          var seckillDetails = detail.seckillDetails || [];

	          var limitBuyNum = detail.limitBuyNum || 1;

	          product.minBuyNum = 1;
	          product.maxBuyNum = limitBuyNum;

	          priceDesc = '秒杀价';
	          numDesc = '限购' + (detail.limitBuyNum || 0) + '件';

	          // 更改商品规格价格为整点秒杀价格
	          var _iteratorNormalCompletion5 = true;
	          var _didIteratorError5 = false;
	          var _iteratorError5 = undefined;

	          try {
	            var _loop3 = function _loop3() {
	              var temp = _step5.value;

	              var results = seckillDetails.filter(function (item) {
	                return item.productDetailId === temp.productDetailId;
	              });
	              if (!_utils.utils.isNull(results)) {
	                temp.price = results[0].seckillPrice;
	              }
	            };

	            for (var _iterator5 = details[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	              _loop3();
	            }
	          } catch (err) {
	            _didIteratorError5 = true;
	            _iteratorError5 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	              }
	            } finally {
	              if (_didIteratorError5) {
	                throw _iteratorError5;
	              }
	            }
	          }
	        }

	        callBack({ productSpecs: productSpecs, details: details, product: product, isAddToCart: isAddToCart, priceDesc: priceDesc, numDesc: numDesc });
	      });
	    }
	  }
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 活动类型
	 * Created by zhangjia on 2018/5/15.
	 */

	var productActivityType = exports.productActivityType = {
	  'falshSale': 'FLASH_SALE', // 限时特卖
	  'every': 'EVERY', // 每日一款
	  'groupBuying': 'GROUP_BUYING', // 拼团购
	  'hotGroupBuying': 'HOT_GROUP_BUYING', // 人气团
	  'discount': 'DISCOUNT', // 直降
	  'rookies': 'ROOKIES', // 新人专享
	  'shopSale': 'SHOP_SALE', // 店铺促销
	  'seckill': 'SECKILL' // 整点秒杀
	};

	/**
	 * 商品活动编码
	 */
	var productActivityCode = exports.productActivityCode = {
	  'FLASH_SALE': 1, // 限时特卖
	  'GROUP_BUYING': 2, // 拼团购
	  'EVERY': 3, // 每日一款
	  'DISCOUNT': 3, // 直降
	  'SECKILL': 4, // 整点秒杀
	  'ROOKIES': 5 // 新人专享
	};

	var getActivityTypeKeyByValue = exports.getActivityTypeKeyByValue = function getActivityTypeKeyByValue(value) {
	  for (var key in productActivityType) {
	    if (productActivityType[key] === value) {
	      if (key === 'hotGroupBuying') {
	        key = 'groupBuying';
	      }
	      return key;
	    }
	  }
	  return '';
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(44)
	)
	__vue_styles__.push(__webpack_require__(45)
	)

	/* script */
	__vue_exports__ = __webpack_require__(46)

	/* template */
	var __vue_template__ = __webpack_require__(47)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-recommend-product.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-614f39ee"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = {
	  "product-name": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "35",
	    "fontSize": "30",
	    "height": "70",
	    "marginTop": "5",
	    "marginLeft": "10",
	    "fontFamily": "微软雅黑!important",
	    "color": "#333333"
	  },
	  "product-price": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "marginLeft": "10"
	  },
	  "product-fsPrice": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "35",
	    "marginRight": "10",
	    "lineHeight": "60"
	  },
	  "product-dest-price": {
	    "color": "#cccccc",
	    "fontSize": "28",
	    "textDecoration": "line-through"
	  },
	  "product-buyNow": {
	    "backgroundColor": "rgb(239,72,101)",
	    "fontSize": "24",
	    "color": "#ffffff",
	    "paddingLeft": "12",
	    "paddingRight": "12",
	    "paddingTop": "10",
	    "paddingBottom": "8",
	    "position": "absolute",
	    "right": "10",
	    "bottom": "15"
	  },
	  "one-row-two-product": {
	    "width": "370",
	    "marginBottom": "10",
	    "backgroundColor": "#ffffff"
	  },
	  "one-row-two-product-name": {
	    "width": "350",
	    "marginLeft": "10"
	  },
	  "one-row-two-product-Img": {
	    "width": "370",
	    "height": "370"
	  },
	  "one-row-two-product-price": {
	    "width": "350"
	  },
	  "one-row-three-product": {
	    "marginBottom": "10",
	    "backgroundColor": "#ffffff",
	    "width": "244"
	  },
	  "one-row-three-product-name": {
	    "width": "224",
	    "marginLeft": "10"
	  },
	  "one-row-three-product-Img": {
	    "width": "244",
	    "height": "244"
	  },
	  "one-row-three-product-price": {
	    "width": "224"
	  }
	}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = {
	  "recommend-products": {
	    "width": "750",
	    "marginBottom": "10",
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "space-between"
	  },
	  "recommend-product-buyNow1": {
	    "backgroundColor": "rgb(239,72,101)",
	    "fontSize": "24",
	    "color": "#ffffff",
	    "width": "350",
	    "marginLeft": "10",
	    "textAlign": "center",
	    "lineHeight": "60",
	    "marginBottom": "10"
	  },
	  "recommend-product-buyNow2": {
	    "backgroundColor": "rgb(239,72,101)",
	    "fontSize": "24",
	    "color": "#ffffff",
	    "width": "220",
	    "marginLeft": "10",
	    "textAlign": "center",
	    "lineHeight": "60",
	    "marginBottom": "10"
	  }
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _api = __webpack_require__(10);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _utils = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: "v-recommend-product",
	    data: function data() {
	        return {
	            origin: _config2.default.$origin,
	            imgBasePath: _config2.default.$imgBasePath,
	            oneRowProductNum: "2", //2:一行两个商品   3:一行三个商品
	            showDestPrice: "1", //1:显示划线价  0:隐藏划线价
	            showbuyNowBtn: '1', //1:显示立即购买按钮  0:隐藏立即购买按钮
	            recommendProductList: []
	        };
	    },

	    props: {
	        data: {
	            type: String,
	            default: ""
	        }

	    },
	    methods: {
	        toDetail: function toDetail(it) {
	            this.$emit("toDetail", "route", 0, "productDetail", "id=" + it.productId);
	        }
	    },
	    created: function created() {
	        var _this = this;

	        if (this.data) {
	            var _data = JSON.parse(this.data);
	            this.oneRowProductNum = _data.oneRowProductNum || "2";
	            this.showDestPrice = _data.showDestPrice || "1";
	            this.showbuyNowBtn = _data.showbuyNowBtn || "1";
	            var list = _data.list; //手动推荐
	            if (list && list.length) {
	                this.$watch(function () {
	                    return this.$root.dynamicPrice;
	                }, function (newVal, oldVal) {
	                    var tempList = [];
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var item = _step.value;

	                            var temp = {};
	                            var tempProduct = newVal[item.id] || {};
	                            temp.coverImage = item.imageSrc;
	                            temp.productName = item.name;
	                            temp.coverPrice = tempProduct.coverPrice || item.price;
	                            temp.foreignCoverPrice = tempProduct.foreignCoverPrice || item.foreignCoverPrice;
	                            temp.productId = item.id;
	                            tempList.push(temp);
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }

	                    this.recommendProductList = tempList;
	                });
	            } else {
	                var search = _data.search; //自动推荐
	                if (search) {
	                    var params = { productRecommItgeJson: JSON.stringify(search) };
	                    _api.api.post('product/get/recomm/list', params, function (res) {
	                        _this.recommendProductList = res;
	                    });
	                }
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["recommend-products"]
	  }, [_vm._l((_vm.recommendProductList), function(it, index) {
	    return _c('div', {
	      staticClass: ["recommend-product"],
	      class: [_vm.oneRowProductNum == 2 ? 'one-row-two-product' : 'one-row-three-product'],
	      on: {
	        "click": function($event) {
	          _vm.toDetail(it)
	        }
	      }
	    }, [_c('image', {
	      class: [_vm.oneRowProductNum == 2 ? 'one-row-two-product-Img' : 'one-row-three-product-Img'],
	      attrs: {
	        "src": _vm.imgBasePath + it.coverImage
	      }
	    }), _c('text', {
	      staticClass: ["product-name"],
	      class: [_vm.oneRowProductNum == 2 ? 'one-row-two-product-name' : 'one-row-three-product-name']
	    }, [_vm._v(_vm._s(it.productName || ''))]), _c('div', {
	      staticClass: ["product-price"],
	      class: [_vm.oneRowProductNum == 2 ? 'one-row-two-product-price' : 'one-row-three-product-price']
	    }, [_c('text', {
	      staticClass: ["product-fsPrice"]
	    }, [_vm._v("¥" + _vm._s(it.coverPrice || 0))]), (_vm.showDestPrice == 1) ? _c('text', {
	      staticClass: ["product-dest-price"]
	    }, [_vm._v("¥" + _vm._s(it.foreignCoverPrice || 0))]) : _vm._e()]), (_vm.showbuyNowBtn == 1) ? _c('text', {
	      class: [_vm.oneRowProductNum == 2 ? 'recommend-product-buyNow1' : 'recommend-product-buyNow2']
	    }, [_vm._v("立即购买")]) : _vm._e()])
	  }), (_vm.oneRowProductNum == 3 && _vm.recommendProductList.length % 3 == 2) ? _c('div', {
	    staticClass: ["recommend-product"],
	    staticStyle: {
	      width: "244px"
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(49)
	)

	/* script */
	__vue_exports__ = __webpack_require__(50)

	/* template */
	var __vue_template__ = __webpack_require__(51)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-dynamic-price.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6257b934"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = {
	  "product-price": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "marginLeft": "10"
	  },
	  "product-fsPrice": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "35",
	    "marginRight": "10",
	    "lineHeight": "60"
	  },
	  "product-dest-price": {
	    "color": "#cccccc",
	    "fontSize": "28",
	    "textDecoration": "line-through"
	  }
	}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    name: "v-dynamic-price",
	    data: function data() {
	        return {
	            product: {}
	        };
	    },

	    props: {
	        productId: {
	            type: String,
	            default: ''
	        },
	        showDestPrice: {
	            type: String,
	            default: '0'

	        },
	        /**
	         * 是否显示动态价格0:不显示，1：显示
	         */
	        dynPrice: {
	            type: String,
	            default: '0'
	        },
	        /**
	         * 不显示动态价格时需要价格的价格
	         */
	        price: {
	            type: String,
	            default: '0'
	        },
	        /**
	         * 不显示动态价格时需要价格的划线价格
	         */
	        coverPrice: {
	            type: String,
	            default: '0'
	        }
	    },
	    mounted: function mounted() {
	        if (this.dynPrice == "1") {
	            this.$watch(function () {
	                return this.$root.dynamicPrice;
	            }, function (newVal, oldVal) {
	                var prdocut = newVal[this.productId];
	                if (prdocut) {
	                    this.product = prdocut;
	                }
	            });
	        } else {
	            var product = {};
	            product.coverPrice = this.price;
	            product.foreignCoverPrice = this.coverPrice;
	            this.product = product;
	        }
	    }
	};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["product-price"]
	  }, [_c('text', {
	    staticClass: ["product-fsPrice"]
	  }, [_vm._v("¥" + _vm._s(_vm.product.coverPrice || 0))]), (_vm.showDestPrice == '1') ? _c('text', {
	    staticClass: ["product-dest-price"]
	  }, [_vm._v("¥" + _vm._s(_vm.product.foreignCoverPrice || 0))]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(53)
	)

	/* script */
	__vue_exports__ = __webpack_require__(54)

	/* template */
	var __vue_template__ = __webpack_require__(55)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-one-product-row.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-269ef680"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = {
	  "oneProductRow": {
	    "backgroundColor": "#ffffff",
	    "marginBottom": "10",
	    "flexDirection": "row",
	    "paddingTop": "5",
	    "paddingBottom": "5"
	  },
	  "oneProductRow_flagDiv": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginBottom": "10"
	  },
	  "oneProductRow_flag": {
	    "width": "50",
	    "height": "33",
	    "marginRight": "10"
	  },
	  "oneProductRow_countryName": {
	    "fontSize": "26",
	    "color": "#666666"
	  },
	  "oneProductRow_name": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "40",
	    "height": "80",
	    "fontSize": "30",
	    "width": "420",
	    "fontFamily": "微软雅黑 !important",
	    "color": "#333333"
	  },
	  "oneProductRow_name2": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "height": "40",
	    "fontSize": "30",
	    "color": "#333333"
	  },
	  "oneProductRow_desc": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "35",
	    "height": "70",
	    "fontSize": "26",
	    "width": "420",
	    "fontFamily": "微软雅黑 !important",
	    "color": "#999999",
	    "marginTop": "10"
	  },
	  "oneProductRow_Img": {
	    "width": "298",
	    "height": "298",
	    "borderColor": "#eeeeee",
	    "borderWidth": "1",
	    "marginRight": "20"
	  },
	  "oneProductRow_right": {
	    "borderColor": "#e2e2e2",
	    "height": "300",
	    "position": "relative",
	    "paddingTop": "15"
	  },
	  "oneProductRow_right2": {
	    "flexDirection": "row",
	    "alignItems": "flex-end",
	    "justifyContent": "space-between",
	    "width": "420",
	    "height": "62",
	    "position": "absolute",
	    "bottom": "20"
	  },
	  "oneProductRow_price1": {
	    "color": "rgb(239,72,101)",
	    "fontSize": "35",
	    "marginRight": "10"
	  },
	  "oneProductRow_price2": {
	    "color": "#cccccc",
	    "fontSize": "28",
	    "textDecoration": "line-through"
	  },
	  "oneProductRow_btn": {
	    "borderWidth": "2",
	    "borderColor": "rgb(239,72,101)",
	    "width": "150",
	    "height": "60",
	    "position": "absolute",
	    "right": 0,
	    "top": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": "5"
	  },
	  "oneProductRow_btnText": {
	    "fontSize": "28",
	    "color": "rgb(239,72,101)"
	  },
	  "oneProductRow_BtnImg": {
	    "width": "60",
	    "height": "60"
	  }
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(10);

	var _dialog = __webpack_require__(13);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	var _vDynamicPrice = __webpack_require__(48);

	var _vDynamicPrice2 = _interopRequireDefault(_vDynamicPrice);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: "v-one-product-row",
	  data: function data() {
	    return {
	      origin: _config2.default.$origin,
	      imgBasePath: _config2.default.$imgBasePath,
	      imgSrc: ""

	    };
	  },

	  components: {
	    'v-dynamic-price': _vDynamicPrice2.default
	  },
	  methods: {
	    /**
	     * 转到商品详情
	     */
	    toDetail: function toDetail() {
	      this.$emit("toDetail", "route", 0, "productDetail", 'id=' + this.productId + '&activityType=' + this.activityType);
	    },
	    addToCard: function addToCard($event) {
	      this.$emit("toDetail", "route", 0, "addToCard", "id=" + this.productId);
	      $event.cancelBubble = true;
	    }
	  },
	  props: {
	    styleType: {
	      type: String,
	      default: ""
	    },
	    imageSrc: {
	      type: String,
	      default: ""
	    },
	    productId: {
	      type: String,
	      default: ""
	    },
	    activityType: {
	      type: String,
	      default: ""
	    },
	    productName: {
	      type: String,
	      default: ""
	    },
	    desc: {
	      type: String,
	      default: ""
	    },
	    /**
	     * 国旗
	     */
	    flag: {
	      type: String,
	      default: ""
	    },
	    /**
	     * 国家名称
	     */
	    flagCountry: {
	      type: String,
	      default: ""
	    },
	    /**
	     * 是否显示动态价格0:不显示，1：显示
	     */
	    dynPrice: {
	      type: String,
	      default: '0'
	    },
	    /**
	     * 不显示动态价格时需要价格的价格
	     */
	    price: {
	      type: String,
	      default: '0'
	    },
	    /**
	     * 不显示动态价格时需要价格的划线价格
	     */
	    coverPrice: {
	      type: String,
	      default: '0'
	    }
	  }
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["oneProductRow"],
	    on: {
	      "click": function($event) {
	        _vm.toDetail()
	      }
	    }
	  }, [_c('image', {
	    staticClass: ["oneProductRow_Img"],
	    attrs: {
	      "src": _vm.imageSrc ? (_vm.imgBasePath + _vm.imageSrc) : (_vm.origin + '/assets/images/logo-img-load-fail.png')
	    }
	  }), _c('div', {
	    staticClass: ["oneProductRow_right"]
	  }, [(_vm.styleType == 3) ? _c('div', {
	    staticClass: ["oneProductRow_flagDiv"]
	  }, [_c('image', {
	    staticClass: ["oneProductRow_flag"],
	    attrs: {
	      "src": _vm.flag ? (_vm.imgBasePath + _vm.flag) : (_vm.origin + '/assets/images/logo-img-load-fail.png')
	    }
	  }), _c('text', {
	    staticClass: ["oneProductRow_countryName"]
	  }, [_vm._v(_vm._s(_vm.flagCountry || '国家'))])]) : _vm._e(), _c('text', {
	    staticClass: ["oneProductRow_right1", "oneProductRow_name"],
	    class: [_vm.styleType == 4 ? 'oneProductRow_name2' : '']
	  }, [_vm._v(_vm._s(_vm.productName || '默认商品名称'))]), (_vm.styleType == 4) ? _c('text', {
	    staticClass: ["oneProductRow_right1", "oneProductRow_desc"]
	  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e(), _c('div', {
	    staticClass: ["oneProductRow_right2"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "productId": _vm.productId,
	      "dynPrice": _vm.dynPrice,
	      "price": _vm.price,
	      "coverPrice": _vm.coverPrice,
	      "showDestPrice": "1"
	    }
	  }), (_vm.styleType == 2) ? _c('div', {
	    staticClass: ["oneProductRow_btn"]
	  }, [_c('text', {
	    staticClass: ["oneProductRow_btnText"]
	  }, [_vm._v("立即抢购")])]) : _vm._e(), (_vm.styleType == 3 || _vm.styleType == 4) ? _c('image', {
	    staticClass: ["oneProductRow_BtnImg"],
	    attrs: {
	      "src": _vm.origin + '/assets/images/shopCar.png'
	    },
	    on: {
	      "click": function($event) {
	        _vm.addToCard($event)
	      }
	    }
	  }) : _vm._e()], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(57)
	)
	__vue_styles__.push(__webpack_require__(58)
	)

	/* script */
	__vue_exports__ = __webpack_require__(59)

	/* template */
	var __vue_template__ = __webpack_require__(60)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/opt/node_projects/eagle-weex/src/components/v-suits-product.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6e8ecbd3"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-1": {
	    "flex": 1
	  },
	  "flex-center": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "flex-content-center": {
	    "justifyContent": "center"
	  },
	  "flex-content-start": {
	    "justifyContent": "flex-start"
	  },
	  "flex-content-end": {
	    "justifyContent": "flex-end"
	  },
	  "flex-align-items-center": {
	    "alignItems": "center"
	  },
	  "flex-align-items-end": {
	    "alignItems": "flex-end"
	  },
	  "flex-align-items-start": {
	    "alignItems": "flex-start"
	  },
	  "flex-direction-row": {
	    "flexDirection": "row"
	  },
	  "color-red": {
	    "color": "#e42647"
	  },
	  "border-width-1": {
	    "borderTopWidth": "1",
	    "borderRightWidth": "1",
	    "borderBottomWidth": "1",
	    "borderLeftWidth": "1"
	  },
	  "line-1": {
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "line-2": {
	    "lines": 2,
	    "textOverflow": "ellipsis"
	  },
	  "ziying": {
	    "color": "#e42647",
	    "fontSize": "25",
	    "borderLeftWidth": "1",
	    "borderLeftColor": "#e42647",
	    "borderTopWidth": "1",
	    "borderTopColor": "#e42647",
	    "borderRightWidth": "1",
	    "borderRightColor": "#e42647",
	    "borderBottomWidth": "1",
	    "borderBottomColor": "#e42647",
	    "borderRadius": "5",
	    "width": "65",
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = {
	  "content": {
	    "width": "750",
	    "paddingLeft": "10",
	    "paddingRight": "10",
	    "backgroundColor": "#ffffff"
	  },
	  "item": {
	    "height": "84",
	    "borderBottomWidth": "1",
	    "borderBottomColor": "rgb(234,234,234)"
	  },
	  "item_you": {
	    "width": "40",
	    "height": "40"
	  },
	  "item_icon": {
	    "width": "60"
	  },
	  "product_text": {
	    "fontSize": "25",
	    "color": "#333333"
	  },
	  "suits": {
	    "marginTop": "20",
	    "paddingBottom": "10"
	  },
	  "suits_box": {
	    "width": "203"
	  },
	  "suits_box_img": {
	    "width": "203",
	    "height": "203"
	  },
	  "suits_box_price": {
	    "color": "#e42647",
	    "fontSize": "30"
	  },
	  "suits_split": {
	    "width": "60"
	  },
	  "suits_split_text": {
	    "color": "#e42647",
	    "fontSize": "50"
	  }
	}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(10);

	var _dialog = __webpack_require__(13);

	var _router = __webpack_require__(38);

	var _config = __webpack_require__(15);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'v-suits-product',
	  data: function data() {
	    return {
	      imgBasePath: _config2.default.$imgBasePath,
	      origin: _config2.default.$origin,
	      suiteProducts: null
	    };
	  },

	  props: {
	    suitsId: {
	      type: String,
	      default: ''
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    _api.api.get('suitsProductController/select/by/suits/id/' + this.suitsId, function (data) {
	      _this.suiteProducts = data || [];
	    });
	  },

	  methods: {
	    /**
	     * 转到搭配套餐页面
	     * @private
	     */
	    _toSuitsProduct: function _toSuitsProduct() {
	      _router.router.open('route', false, 'suitsProduct', 'suitsId=' + this.suitsId);
	    }
	  }
	};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.suiteProducts && _vm.suiteProducts.length) ? _c('div', {
	    staticClass: ["content", "suits"],
	    on: {
	      "click": _vm._toSuitsProduct
	    }
	  }, [_c('div', {
	    staticClass: ["item", "flex-direction-row", "flex-center"],
	    staticStyle: {
	      marginBottom: "10px"
	    }
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["flex-1"]
	  }), _c('div', {
	    staticClass: ["item_icon", "flex-align-items-end"]
	  }, [_c('image', {
	    staticClass: ["item_you"],
	    attrs: {
	      "src": _vm.origin + '/assets/images/you.png'
	    }
	  })])]), _c('div', {
	    staticClass: ["flex-direction-row"]
	  }, _vm._l((_vm.suiteProducts), function(product, index) {
	    return (index <= 2) ? _c('div', {
	      key: product.productId,
	      staticClass: ["flex-direction-row", "flex-align-items-center"]
	    }, [_c('div', {
	      staticClass: ["suits_box", "flex-align-items-center"]
	    }, [_c('image', {
	      staticClass: ["suits_box_img"],
	      attrs: {
	        "src": _vm.imgBasePath + product.productImage
	      }
	    }), _c('text', {
	      staticClass: ["suits_box_price"]
	    }, [_vm._v("￥" + _vm._s(product.coverPrice))])]), ((index + 1) < _vm.suiteProducts.length) ? _c('div', {
	      staticClass: ["suits_split", "flex-center"]
	    }, [_c('text', {
	      staticClass: ["suits_split_text"]
	    }, [_vm._v("+")])]) : _vm._e()]) : _vm._e()
	  }))]) : _vm._e()
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      width: "150px"
	    }
	  }, [_c('text', {
	    staticClass: ["product_text"]
	  }, [_vm._v("搭配套餐")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticStyle: {
	      backgroundColor: "#ffffff"
	    },
	    on: {
	      "scroll": _vm.scrollHandler
	    }
	  }, [_c('div', {
	    staticClass: ["component", "slideBox"],
	    attrs: {
	      "dataName": "slide-box"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "interval": "3000",
	      "autoPlay": "true"
	    }
	  }, [_c('div', {
	    staticClass: ["sliderFrame"],
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=hufumuqinjie.html');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "750",
	      "height": "360",
	      "src": "http://image.wawscm.com/d156d566dc8c407381b193f5b08a3d7d.jpg"
	    }
	  })], 1), _c('div', {
	    staticClass: ["sliderFrame"],
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=A2pinpaizhou.html');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "750",
	      "height": "360",
	      "src": "http://image.wawscm.com/5db8aa7fc7df45a8bb44813ee4683ba0.jpg"
	    }
	  })], 1), _c('div', {
	    staticClass: ["sliderFrame"],
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=ddmask.html');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "750",
	      "height": "360",
	      "src": "http://image.wawscm.com/2296983358dd44beabf24ca3b26f1d7f.jpg"
	    }
	  })], 1), _c('indicator', {
	    staticClass: ["indicator"]
	  })])])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-four-img"],
	    attrs: {
	      "dataName": "one-row-four-img"
	    }
	  }, [_c('div', {
	    staticClass: ["margin0"]
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'signIn', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/564fbf7c5886456784be6a74f2ccab8b.png",
	      "width": "187.5",
	      "height": "130"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'inviteFriend', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/3a1ff7f6f8fc4e58832942ac2a63233f.png",
	      "width": "187.5",
	      "height": "130"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=lanxiwomen.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/1ff79993522a4ba6982164be16fa6e24.png",
	      "width": "187.5",
	      "height": "130"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'genuine', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/1a909bd0f8594ff58d92cd27286cc5d6.png",
	      "width": "187.5",
	      "height": "130"
	    }
	  })], 1)])])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    staticStyle: {
	      display: "block"
	    },
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=huiyaunzhaomu.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/3129b43c26014d3d96f8cdf9c3bb166a.png",
	      "width": "750",
	      "height": "150"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-two-img"],
	    attrs: {
	      "dataName": "one-row-two-img"
	    }
	  }, [_c('div', {
	    staticClass: ["margin0"]
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'receiveCoupon', 'couponNum=LFzlx4hJ')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/e6b678bbab944964931d8a12db659aa0.png",
	      "width": "375",
	      "height": "130"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'newSpreeList', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/915edb0b729640cda0c8a012576374ef.png",
	      "width": "375",
	      "height": "130"
	    }
	  })], 1)])])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-two-img"],
	    attrs: {
	      "dataName": "one-row-two-img"
	    }
	  }, [_c('div', {
	    staticClass: ["margin0"]
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'limitSaleList', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/5b541da1c6f74a678dc32fea1a63ce53.png",
	      "width": "375",
	      "height": "210"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'seckillIndex', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/3b6cbde2e94a4ea79f76982f6b6114c3.png",
	      "width": "375",
	      "height": "210"
	    }
	  })], 1)])])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, '', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/403fe8b62f43481ab2e562f35be9aa7a.jpg",
	      "width": "750",
	      "height": "15"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-two-img"],
	    attrs: {
	      "dataName": "one-row-two-img"
	    }
	  }, [_c('div', {
	    staticClass: ["margin0"]
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=top.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/38bcfe51b97a4f8ba0d875cedfd2b6d0.png",
	      "width": "375",
	      "height": "210"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=ziyemian.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/9d68902487544d56b183a9c5f12617d9.png",
	      "width": "375",
	      "height": "210"
	    }
	  })], 1)])])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=naifentiaozhuan.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/8b2c954d36484e23b09b23be403f8f2a.png",
	      "width": "750",
	      "height": "190"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    staticStyle: {
	      display: "block"
	    },
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=baojianziyemian.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/12088e3ae5e744a7aacbec9548e3c465.png",
	      "width": "750",
	      "height": "190"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=naifentiaozhuan.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/f690e27a35284d968b14585589313871.jpg",
	      "width": "750",
	      "height": "469"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-three-img"],
	    attrs: {
	      "dataName": "one-row-three-img"
	    }
	  }, [_c('div', {
	    staticClass: ["margin0"]
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productList', 'type=4&word=2602890f2d5741d08e5b65015e73c278')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/c50b0e4756d847ea9dd60ed63e357db1.png",
	      "width": "250",
	      "height": "300"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productList', 'type=4&word=df3211c5512a4025b69092bba2cda76b')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/7e4b7faedb4942ef91ff9bff3969eff3.png",
	      "width": "250",
	      "height": "300"
	    }
	  })], 1), _c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productList', 'type=4&word=59fd3c607eb04a518a9137b02690e1a8')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/17a4b4272ba64e1ea4153fecb2ff5e7c.png",
	      "width": "250",
	      "height": "300"
	    }
	  })], 1)])])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=599780738186874880');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/615989525046366208-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("A2奶粉白金装3段（1-3岁）900g")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "258",
	      "coverPrice": "399",
	      "productId": "599780738186874880",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=362328375584362496');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/615990871002714112-400x400.png"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("德国爱他美奶粉1+段（1岁以上）新版本")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "129",
	      "coverPrice": "229",
	      "productId": "362328375584362496",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=357311245298176000');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/634113989202153472-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("澳大利亚贝拉米有机奶粉3段（1-3岁）900g新版本")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "219",
	      "coverPrice": "299",
	      "productId": "357311245298176000",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=356976551624970240');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/613917928852557824-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("荷兰牛栏Nutrilon奶粉4段（1岁以上）800g 新版本")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "159",
	      "coverPrice": "299",
	      "productId": "356976551624970240",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=360928616852230144');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/466749389071716352-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("荷兰美素hero baby白金版3段（1岁以上）700g")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "139",
	      "coverPrice": "229",
	      "productId": "360928616852230144",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=460972051113447424');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/613865859533770752-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("德国爱他美白金版pre段800g（0-3个月）新版本")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "229",
	      "coverPrice": "298",
	      "productId": "460972051113447424",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-2"],
	    attrs: {
	      "dataName": "one-row-three-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=442510965771079680');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/513774679287140352-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("港版美赞臣婴幼儿奶粉3段 900克/罐 （1-3岁）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price", "one-row-three-product-price1-2"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "268",
	      "coverPrice": "355",
	      "productId": "442510965771079680",
	      "showDestPrice": "0"
	    }
	  }), _c('v-img', {
	    attrs: {
	      "width": "60",
	      "height": "60",
	      "src": "http://weex-server.wawscm.com:63808/assets/images/shopCar.png"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'addToCard', 'id=442510965771079680');
	      }
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=447913728390729728');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/447919000958013440-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("港版美素佳儿 Friso金装4段奶粉（3岁以上）900g")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price", "one-row-three-product-price1-2"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "199",
	      "coverPrice": "298",
	      "productId": "447913728390729728",
	      "showDestPrice": "0"
	    }
	  }), _c('v-img', {
	    attrs: {
	      "width": "60",
	      "height": "60",
	      "src": "http://weex-server.wawscm.com:63808/assets/images/shopCar.png"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'addToCard', 'id=447913728390729728');
	      }
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=362410937723916288');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/627685819536117760-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【保税仓发货】英国爱他美奶粉2段（6-12个月）800g  新版本")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price", "one-row-three-product-price1-2"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "154",
	      "coverPrice": "289",
	      "productId": "362410937723916288",
	      "showDestPrice": "0"
	    }
	  }), _c('v-img', {
	    attrs: {
	      "width": "60",
	      "height": "60",
	      "src": "http://weex-server.wawscm.com:63808/assets/images/shopCar.png"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'addToCard', 'id=362410937723916288');
	      }
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, '', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/53cc4f42699f405eb331b3df833f79e8.jpg",
	      "width": "750",
	      "height": "469"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=410248624149106688');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/418565592514039808-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("意大利 Armani/阿玛尼 唇釉红管 200# 402# 405# 500# 6.5ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "295",
	      "coverPrice": "358",
	      "productId": "410248624149106688",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=412427175677923328');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/418594858257616896-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 YSL/圣罗兰 奢华镜光黑管唇釉 5.5ml（一般贸易）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "295",
	      "coverPrice": "320",
	      "productId": "412427175677923328",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=621868983598977024');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/621868548632875008-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 YSL/圣罗兰 迷魅纯漾亮彩滋润圆管口红 49# 4.5g（一般贸易）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "295",
	      "coverPrice": "320",
	      "productId": "621868983598977024",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=626199399462080512');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/626198934812889088-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 YSL/圣罗兰 迷魅金方管口红唇膏 52#星你色 3.8g")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "295",
	      "coverPrice": "335",
	      "productId": "626199399462080512",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=399645740810375168');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/407674624483004416-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 YSL/圣罗兰 迷魅纯漾方管口红 正橘色（热卖）#13")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "285",
	      "coverPrice": "320",
	      "productId": "399645740810375168",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=399646250846130176');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/407677924733358080-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 YSL/圣罗兰 迷魅纯漾亮彩滋润圆管口红 红粉派对 #12")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "295",
	      "coverPrice": "320",
	      "productId": "399646250846130176",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=450020051790073856');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/613063340222058496-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 香奈儿/Chanel 嘉柏丽尔 女士浓香水EDP 50ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "990",
	      "coverPrice": "1326",
	      "productId": "450020051790073856",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=399693419951165440');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/399695457695043584-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 YSL/圣罗兰  Mon Paris反转巴黎女士香水 EDP 50ml （一般贸易）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "765",
	      "coverPrice": "1290",
	      "productId": "399693419951165440",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=399373472909758464');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/399372489706180608-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("英国 Jo Malone/祖马龙 英国梨和小仓兰/红玫瑰香水/鼠尾草/蓝风铃 30ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "520",
	      "coverPrice": "645",
	      "productId": "399373472909758464",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, '', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/8aa45cd2080e46ca8a2be33d7e3b8883.jpg",
	      "width": "750",
	      "height": "469"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=620401763127660544');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/620401056743952384-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("日本 黛珂/Cosme Decorte 时光活妍莹透洗颜霜 125g（一般贸易）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "295",
	      "coverPrice": "365",
	      "productId": "620401763127660544",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=528344785115680768');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/622593507592245248-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("日本 黛珂/Decorte 时光活氧亮白循环露化妆水 200ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "475",
	      "coverPrice": "526",
	      "productId": "528344785115680768",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=504425312126242816');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/622143674167332864-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("日本 雪肌精化妆水 樱花限定版 补水保湿提亮肤色 500ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "525",
	      "coverPrice": "699",
	      "productId": "504425312126242816",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=548283808776982528');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/622143511826796544-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("日本 Cosme Decorte/黛珂 紫苏水高机能化妆水 祛痘控油150ml/300ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "539",
	      "coverPrice": "768",
	      "productId": "548283808776982528",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=400739001092280320');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/622143300190605312-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 兰蔻/Lancome 大眼精华眼部肌底液眼霜 20ml（一般贸易）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "550",
	      "coverPrice": "680",
	      "productId": "400739001092280320",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=620410490773835776');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/620409555959943168-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("日本 黛珂/Cosme Decorte 肌底保湿精华美容液 黛珂小紫瓶40ml（塑封破损）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "498",
	      "coverPrice": "760",
	      "productId": "620410490773835776",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=538534525001535488');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/622142610470866944-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("日本 资生堂 怡丽丝尔/ELIXIR CB局部抗皱精华眼霜 去细纹紧致 限定款 22g")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "698",
	      "coverPrice": "765",
	      "productId": "538534525001535488",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=620752861768192000');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/620752409106321408-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 兰蔻/Lancom 新款「小黑瓶」修护面部肌底精华 20ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "650",
	      "coverPrice": "690",
	      "productId": "620752861768192000",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=400782666351251456');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/622591001621434368-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("法国 兰蔻/Lancome 清滢柔肤洁面乳 深层清洁 补水保湿洁面乳 125ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "249",
	      "coverPrice": "320",
	      "productId": "400782666351251456",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=baojianziyemian.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/34fed0a1355b40b7a2060c96e762bd24.jpg",
	      "width": "750",
	      "height": "469"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372822407653625856');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/618902022099308544-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【帮助宝宝骨骼健康发育】Bio乳钙软胶囊90粒")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "159",
	      "coverPrice": "223",
	      "productId": "372822407653625856",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=373263465147535360');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/636387263822958592-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【雪梨同款】澳佳宝妇黄金营养素180粒")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "209",
	      "coverPrice": "356",
	      "productId": "373263465147535360",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372828867083112448');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/581977676600840192-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【促进胎儿大脑发育】澳洲Bio Island孕妇DHA海藻油软胶囊 60粒")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "169",
	      "coverPrice": "199",
	      "productId": "372828867083112448",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372478161188818944');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/568227864311238656-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("Swisse钙片柠檬酸钙 维生素D 150粒澳洲")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "119",
	      "coverPrice": "168",
	      "productId": "372478161188818944",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=443956094952280064');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/582037440928157696-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("童年时光/Childlife 三驾马车VC+防御液+紫锥菊滴剂")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "299",
	      "coverPrice": "415",
	      "productId": "443956094952280064",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372449038483591168');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/562007963569491968-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【纯植物萃取清火开胃】美林Mellin清火开胃菊花晶 固体饮料全家可用 200g/罐")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "59",
	      "coverPrice": "99",
	      "productId": "372449038483591168",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372521202339549184');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/593600308597231616-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【每天一滴帮助骨骼发育】Ddrops婴儿维生素D3滴剂 400IU 90滴/瓶")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "119",
	      "coverPrice": "198",
	      "productId": "372521202339549184",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372558210248216576');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/593600200291913728-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("拉杜蓝乔latourangelle核桃油孕婴专用DHA 500ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "119",
	      "coverPrice": "218",
	      "productId": "372558210248216576",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372547680192172032');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/593602233141039104-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("康萃乐culturelle婴幼儿调理肠胃益生菌粉 30袋/盒")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "179",
	      "coverPrice": "268",
	      "productId": "372547680192172032",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'zhuanti', 'identification=xihurihua.html')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/bf17df9a21974bda96b3ae65e9c22ef1.jpg",
	      "width": "750",
	      "height": "469"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=574383754328412160');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/593621503778492416-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("日本POLA洗发护发沐浴套装  柔顺滋润 去屑控油 旅行装")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "75",
	      "coverPrice": "96",
	      "productId": "574383754328412160",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=540967992964419584');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/594244445902213120-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【舒缓保湿滋润防湿疹】艾维诺/Aveeno 婴幼儿天然燕麦湿疹保湿身体乳 舒缓润肤226g")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "99",
	      "coverPrice": "129",
	      "productId": "540967992964419584",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=634873885493301248');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/634873130245951488-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("吕Ryo Amore洗发水洗发护发三件套2洗发水1护发素400g*3")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "199",
	      "coverPrice": "299",
	      "productId": "634873885493301248",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=508816766122594304');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/562076249573298176-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【韩国进口】宝露露pororo 婴儿防晒乳液婴幼防晒乳 儿童防晒霜SPF50 60ml")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "59",
	      "coverPrice": "98",
	      "productId": "508816766122594304",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=468192504328491008');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/548958849453789184-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("【日本进口】虎牌/TIGER 儿童保温直饮杯双盖学生保温杯壶 便携男女生水杯 600ML")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "385",
	      "coverPrice": "680",
	      "productId": "468192504328491008",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=418189364753862656');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/561989465338286080-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("泰国 帕雅娜天然乳胶枕 蝶形美容按摩枕HK")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "350",
	      "coverPrice": "500",
	      "productId": "418189364753862656",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-three-product", "one-row-three-product1-1"],
	    attrs: {
	      "dataName": "one-row-three-product1"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"],
	    staticStyle: {
	      flexDirection: "row",
	      width: "750px"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=464219589861969920');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/582271108691005440-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("贝亲/pigeon便携吸管式学饮杯150ml红、黄、蓝三色可选")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "79",
	      "coverPrice": "99",
	      "productId": "464219589861969920",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      marginRight: "10px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=372110907687309312');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/562058004845826048-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("可么多么/Comotomo 宽口径防胀气硅胶奶瓶250ml（粉色）")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "189",
	      "coverPrice": "298",
	      "productId": "372110907687309312",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["show_view_div"],
	    staticStyle: {
	      width: "240px",
	      paddingBottom: "15px"
	    },
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, 'productDetail', 'id=377619670510866432');
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "width": "240",
	      "height": "240",
	      "src": "http://image.wawscm.com/product/562062526758522880-400x400.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["product-name", "one-row-three-product-name"]
	  }, [_vm._v("未来VAPE静音电子驱蚊器 孕妇儿童专用 家用台式防蚊器 150日")]), _c('div', {
	    staticClass: ["product-price", "one-row-three-product-price"]
	  }, [_c('v-dynamic-price', {
	    attrs: {
	      "dynPrice": "1",
	      "price": "108",
	      "coverPrice": "130",
	      "productId": "377619670510866432",
	      "showDestPrice": "0"
	    }
	  })], 1)], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, '', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/fb006ad240a8404e9c0d71d93610631b.jpg",
	      "width": "750",
	      "height": "469"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "imgAndLink", "one-row-one-img"],
	    attrs: {
	      "dataName": "one-row-one-img"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('div', {
	    on: {
	      "click": function($event) {
	        _vm.tapLink('route', 0, '', '')
	      }
	    }
	  }, [_c('v-img', {
	    attrs: {
	      "src": "http://image.wawscm.com/44a26d654fa6419bb404048732f385c6.png",
	      "width": "750",
	      "height": "100"
	    }
	  })], 1)])]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "258",
	      "coverPrice": "399",
	      "imageSrc": "product/615989525046366208-400x400.jpg",
	      "productId": "599780738186874880",
	      "activityType": "",
	      "productName": "【保税仓发货】新西兰A2奶粉白金装3段（1-3岁）900g"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    staticStyle: {
	      display: "block"
	    },
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "219",
	      "coverPrice": "299",
	      "imageSrc": "product/634113989202153472-400x400.jpg",
	      "productId": "357311245298176000",
	      "activityType": "",
	      "productName": "【保税仓发货】澳大利亚贝拉米有机奶粉3段（1-3岁）900g新版本"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    staticStyle: {
	      display: "block"
	    },
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "192",
	      "coverPrice": "289",
	      "imageSrc": "product/613551962385813504-400x400.jpg",
	      "productId": "361585065324449792",
	      "activityType": "",
	      "productName": "【保税仓发货】德国爱他美奶粉3段（10-12个月）新版本"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "129",
	      "coverPrice": "229",
	      "imageSrc": "product/615990871002714112-400x400.png",
	      "productId": "362328375584362496",
	      "activityType": "",
	      "productName": "【保税仓发货】德国爱他美奶粉1+段（1岁以上）新版本"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "229",
	      "coverPrice": "368",
	      "imageSrc": "product/615990187314384896-400x400.jpg",
	      "productId": "460979279308525568",
	      "activityType": "",
	      "productName": "【保税仓发货】德国爱他美白金版奶粉2段800g(6-12个月）新版本"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "189",
	      "coverPrice": "299",
	      "imageSrc": "product/615989986180730880-400x400.jpg",
	      "productId": "362750866928701440",
	      "activityType": "",
	      "productName": "【保税仓发货】澳洲爱他美金装奶粉3段（1-3岁）900g"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "249",
	      "coverPrice": "289",
	      "imageSrc": "product/615989753589796864-400x400.jpg",
	      "productId": "410130331690078208",
	      "activityType": "",
	      "productName": "【保税仓发货】澳洲爱他美白金版奶粉3段900g/罐（1-2岁）"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "142",
	      "coverPrice": "229",
	      "imageSrc": "product/466749389071716352-400x400.jpg",
	      "productId": "360928616852230144",
	      "activityType": "",
	      "productName": "【保税仓发货】荷兰美素hero baby白金版奶粉3段（1岁以上）700g"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "119",
	      "coverPrice": "198",
	      "imageSrc": "product/593600308597231616-400x400.jpg",
	      "productId": "372521202339549184",
	      "activityType": "",
	      "productName": "【每天一滴帮助骨骼发育】Ddrops婴儿维生素D3滴剂 400IU 90滴/瓶"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "168",
	      "coverPrice": "255",
	      "imageSrc": "product/593595527862423552-400x400.jpg",
	      "productId": "372518900614565888",
	      "activityType": "",
	      "productName": "【医生推荐口感好易吸收】童年时光Childlife钙镁锌成长营养液474ml 6个月以上"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "189",
	      "coverPrice": "298",
	      "imageSrc": "product/582270910006824960-400x400.jpg",
	      "productId": "372110340978118656",
	      "activityType": "",
	      "productName": "【韩国进口】可么多么/Comotomo 新生婴儿宽口径防胀气防摔硅胶奶瓶250ml（绿色）"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "189",
	      "coverPrice": "298",
	      "imageSrc": "product/562058004845826048-400x400.jpg",
	      "productId": "372110907687309312",
	      "activityType": "",
	      "productName": "【韩国进口】可么多么/Comotomo 新生婴儿宽口径防胀气防摔硅胶奶瓶250ml（粉色）"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "99",
	      "coverPrice": "129",
	      "imageSrc": "product/605167009977602048-400x400.jpg",
	      "productId": "605169009037414400",
	      "activityType": "",
	      "productName": "【新品上架】韩国 春雨/papa recipe 果蔬面膜 10片/盒（一般贸易）"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "99",
	      "coverPrice": "158",
	      "imageSrc": "product/582007500669194240-400x400.jpg",
	      "productId": "336224614873042944",
	      "activityType": "",
	      "productName": "【全新包装】韩国 春雨/papa recipe 蜂蜜保湿补水面膜贴 10片装（一般贸易）"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "495",
	      "coverPrice": "585",
	      "imageSrc": "product/593531617947947008-400x400.jpg",
	      "productId": "390226978336149504",
	      "activityType": "",
	      "productName": "美国 雅诗兰黛/Estee Lauder ANR眼部密集肌底修护精华 淡化细纹 15ml"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "950",
	      "coverPrice": "1269",
	      "imageSrc": "product/425452174034604032-400x400.jpg",
	      "productId": "425452452372811776",
	      "activityType": "",
	      "productName": "美国 雅诗兰黛/Estee Lauder 红石榴日晚霜护肤套装 50ml+50ml"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "488",
	      "coverPrice": "590",
	      "imageSrc": "product/479734695928532992-400x400.jpg",
	      "productId": "437768592285503488",
	      "activityType": "",
	      "productName": "美国 雅诗兰黛/Estee Lauder 小棕瓶新肌透修护眼部精华 15ml（一般贸易）"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "2120",
	      "coverPrice": "2558",
	      "imageSrc": "product/507010095058522112-400x400.jpg",
	      "productId": "506195446775943168",
	      "activityType": "",
	      "productName": "美国 海蓝之谜/LA MER 精华凝霜-清爽型 新品上市 60ml"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "955",
	      "coverPrice": "1320",
	      "imageSrc": "product/539575946290663424-400x400.jpg",
	      "productId": "471441951049125888",
	      "activityType": "",
	      "productName": "韩国 呼吸/SU:37 魔法弹力修复系列 水乳霜精华三件套盒"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["component", "component-product", "one-row-one-product1"],
	    attrs: {
	      "dataName": "one-row-one-product2"
	    }
	  }, [_c('div', {
	    staticClass: ["show_view", "weex"]
	  }, [_c('v-one-product-row', {
	    attrs: {
	      "styleType": "2",
	      "dynPrice": "1",
	      "price": "950",
	      "coverPrice": "1489",
	      "imageSrc": "product/443855237460004864-400x400.jpg",
	      "productId": "400108763446513664",
	      "activityType": "",
	      "productName": "韩国 后/whoo 拱辰享 水 水妍水乳霜三件套"
	    },
	    on: {
	      "toDetail": _vm.tapLink
	    }
	  })], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);