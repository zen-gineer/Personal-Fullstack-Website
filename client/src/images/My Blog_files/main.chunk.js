(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n\tmargin: 10;\n\tpadding: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n\t\t'Droid Sans', 'Helvetica Neue', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\t/* width: 30%; */\n\tmargin: auto;\n\tbackground-color: rgb(245, 245, 250);\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./images/giphy.gif */ "./src/images/giphy.gif")) + ");\n\tbackground-color: #cccccc; /* Used if the image is unavailable */\n\theight: 1000px; /*You must set a specified height */\n\tbackground-position: center; /* Center the image */\n\tbackground-repeat: no-repeat; /* Do not repeat the image */\n\tbackground-size: cover; /* Resize the background image to cover the entire container */ \n}\n\n.navbar.transparent {\n\tborder-width: 0px;\n\tbox-shadow: 0px 0px;\n\tbackground-color: rgba(0, 0, 0, 0);\n\tbackground-image: -webkit-gradient(\n\t\tlinear,\n\t\t50% 0%,\n\t\t50% 100%,\n\t\tcolor-stop(0%, rgba(0, 0, 0, 0)),\n\t\tcolor-stop(100%, rgba(0, 0, 0, 0))\n\t);\n\tbackground-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));\n\tbackground-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);\n\tbackground-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\n.container {\n\tmargin: 100;\n}\n\n.blog {\n\twidth: 80%;\n\tbackground-color: #4c304e;\n\tbackground-image: -webkit-gradient(linear, left top, right bottom, from(rgb(203, 188, 226)), to(rgb(50, 180, 219)));\n\tbackground-image: -webkit-linear-gradient(top left, rgb(203, 188, 226), rgb(50, 180, 219));\n\tbackground-image: linear-gradient(to bottom right, rgb(203, 188, 226), rgb(50, 180, 219));\n\tborder: 10px rgb(117, 116, 114) solid;\n\tpadding-top: 20px;\n\tmargin: auto;\n\tmargin-top: 10px;\n\t/* /* -webkit-text-stroke-color: aliceblue; */\n\tbox-shadow: 10px 10px 16px; \n\theight: 80%;\n\t/* transform: matrix(0,0,0,0,0,20); */\n\t/* opacity: 0;\n\tvisibility: hidden; */\n\t\n\t/*make background transparent\n\tmargin-bottom: 10px;\n\toverflow: auto;\n\tbackground-color: rgba(0, 0, 0, 0);\n\tbackground-image: -webkit-gradient(\n\t\tlinear,\n\t\t50% 0%,\n\t\t50% 100%,\n\t\tcolor-stop(0%, rgba(0, 0, 0, 0)),\n\t\tcolor-stop(100%, rgba(0, 0, 0, 0))\n\t);\n\tbackground-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);\n\tbackground-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);\n\t*/\n}\n\n.github {\n\twidth: 80%;\n\tbackground-color: rgb(222, 211, 223);\n\tborder: 10px rgb(117, 116, 114) solid;\n\tpadding-top: 20px;\n\tmargin: auto;\n\tmargin-top: 10px;\n\t-webkit-text-stroke-color: aliceblue;\n\n\t/* height: 80%; */\n}\n\n.blog-body {\n\tmargin: 0;\n\twidth: 100%;\n\t/* margin-top:20px */\n\tpadding: 0;\n\t/* height: 100px; */\n}\n\n.blog-title {\n\tmargin: auto;\n\twidth: 80%;\n\t/* margin:20px */\n}\n\n.section-title {\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.blog-description {\n\tmargin-left: 10px;\n\tpadding-bottom: 10px;\n\tpadding-top: 10px;\n}\n\n.blog-text-area {\n\twidth: 80%;\n\t/* height: 200px */\n}\n\n.blog-form {\n\twidth: 100%;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n\n.blog-title-input {\n\twidth: 60%;\n}\n.blog-title-button {\n\twidth: 60%;\n}\n\n/* .blog-table-row{\n\topacity: 0;\n\tvisibility: hidden;\n} */\n\n.ml-image {\n\twidth: 90%;\n\tmargin-left: 5%;\n\tmargin-right: 5%;\n\tmargin-top: 20px;\n\tmargin-bottom: 20px;\n\tpadding-top: 0px;\n\tmargin-top: 10px;\n\tbox-shadow: 10px 10px 16px;\n}\n.ml-image-2 {\n\twidth: 90%;\n\tmargin-left: 5%;\n\tmargin-right: 5%;\n\tmargin-top: 20px;\n\tmargin-bottom: 20px;\n\t/* margin: auto; */\n\tborder-width: 20%;\n\tborder-color: rgba(153, 56, 56, 0.795);\n\t/* padding: 2%; */\n\tbox-shadow: 10px 10px 16px;\n}\n.ml-image-eq {\n\twidth: 80%;\n\tmargin: auto;\n\t/* align-content: left; */\n\t/* margin: 0px; */\n\tpadding-top: 0px;\n\tmargin-top: 10px;\n}\n\n.log-button {\n\ttext-align: center;\n\tpadding-top: 1px;\n\twidth: 200px;\n\theight: 50px;\n\tbackground-color: grey;\n\tborder-color: black;\n\tborder-width: 1px;\n\tbox-shadow: 5px 5px 10px;\n}\n\n.ml-navbar {\n\twidth: 100%;\n}\n\n.log-plot {\n\tborder-color: black;\n\tborder-width: 10px;\n\tpadding-top: 10px;\n\twidth: 50%;\n\tmargin: 0px;\n}\n\n.sklearn-scatter-plot {\n\tbox-shadow: 5px 5px 10px;\n}\n\n.log-plot-outer-div {\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\t/* padding-bottom: 20px; */\n\twidth: 96%;\n\t/* height: ; */\n\tpadding: 0px;\n\tborder: 2px;\n\tborder-style: solid;\n\tborder-color: darkslategrey;\n}\n\n#activation,\n#hidden_nodes {\n\tmargin: 6px;\n\tbackground-color: grey;\n\tborder-color: black;\n\tcolor: white;\n}\n\n.model-drawing-outer {\n\twidth: 100%;\n\tborder: 2px;\n\tborder-style: solid;\n\tborder-color: darkslategrey;\n\tmargin: auto;\n\tpadding: 1%;\n}\n\n.model-drawing {\n\twidth: 80%;\n\n\tmargin: auto;\n\talign: center;\n\t/* margin-left:0px; */\n\tborder: 2px;\n\tborder-style: solid;\n\tborder-color: darkslategrey;\n\tbackground-color: #9aa1a1;\n\tpadding-bottom: 10px;\n\tbox-shadow: 5px 5px 10px;\n}\n\n.data-chart-description {\n\tpadding-top: 10px;\n\tmargin-bottom: 0px;\n}\n\n.log-plot-setup-divs {\n\tmargin-left: 10px;\n}\n\n.model-nodes {\n\tpadding: 8px;\n\ttext-align: center;\n\tmargin: auto;\n\tmargin-bottom: 6px;\n\t-webkit-border-radius: 25px;\n\t-moz-border-radius: 25px;\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 25px;\n\tbackground-color: rgb(252, 248, 248);\n}\n\n.model-input-layer {\n\tmargin: auto;\n\ttext-align: center;\n\t/* margin-top:100px;\n  margin-bottom:100px; */\n\tmargin-left: 60px;\n}\n\n.model-hidden-layer {\n\tmargin: auto;\n\ttext-align: center;\n\tpadding: 0;\n\t/* margin-top:100px;\n  margin-bottom:100px; */\n}\n\n.model-output-layer {\n\ttext-align: center;\n\tmargin: auto;\n\tpadding: 0;\n\t/* margin-top:100px;\n  margin-bottom:100px; */\n}\n\n.ml-model-outer-box {\n\tmargin: 20px;\n\tpadding: 0px;\n\tmargin-bottom: 10px;\n\tmargin-top: 10px;\n}\n\n.button-popup {\n\theight: 300px;\n\twidth: 800px;\n}\n\n.readme-popup {\n\theight: 500px;\n\twidth: 800px;\n}\n.readme {\n\twidth: 100%;\n\theight: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/components/blogposts.jsx":
/*!**************************************!*\
  !*** ./src/components/blogposts.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");








var _jsxFileName = "/Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/components/blogposts.jsx";

 // import { Button, View, Text } from 'react-native';
// var reactNavBar = require('react-nav-bar');
// var NavBar = reactNavBar.NavBar;
// var Menu = reactNavBar.Menu;
// import { createStackNavigator, createAppContainer } from 'react-navigation'; //
// import Request from 'superagent';

var BlogPosts =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(BlogPosts, _Component);

  function BlogPosts() {
    var _this;

    Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BlogPosts);

    _this = Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BlogPosts).call(this));
    _this.toggle = _this.toggle.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.handleTitleChange = _this.handleTitleChange.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.handleBodyChange = _this.handleBodyChange.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.myTween = new gsap_all__WEBPACK_IMPORTED_MODULE_9__["TimelineLite"]({
      paused: true
    });
    _this.myElements = []; // this.cardsTween;

    _this.state = {
      posts: [],
      buttonToggle: 'Create Post',
      title: '',
      body: ''
    };
    return _this;
  } // static navigationOptions = {
  // 	title: 'Blog',
  // };


  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BlogPosts, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      console.log('fetching posts');
      fetch('/api/blogposts').then(function (res) {
        return res.json();
      }).then(function (posts) {
        return _this2.setState({
          posts: posts
        }, function () {
          return console.log('Posts fetched', posts);
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('stagger effect', this.myElements); // this.myTween.staggerTo(this.myElements, 2, { y: -20, autoAlpha: 1 }, 1);

      this.myTween.staggerFrom(this.myElements, 0.5, {
        opacity: 0,
        y: 70
      }, 0.1);
      this.myTween.play();
    }
  }, {
    key: "render",
    value: function render() {
      this.myTween.kill().clear().pause(0);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog jumbotron z-depth-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.Title(), this.Description(), this.PostGetButton(), this.state.buttonToggle === 'Create Post' ? this.Table() : this.CreatePost());
    }
  }, {
    key: "CreatePost",
    value: function CreatePost() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: "blog-form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "blog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "col-8-sm",
        name: "title",
        type: "text",
        value: this.state.title,
        onChange: this.handleTitleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "col-4-sm",
        name: "submitPost",
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "blog-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Body", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        className: "blog-text-area",
        name: "body",
        type: "text",
        checked: this.state.body,
        onChange: this.handleBodyChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))));
    }
  }, {
    key: "PostGetButton",
    value: function PostGetButton() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggle,
        className: "btn btn-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.state.buttonToggle);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          buttonToggle: state.buttonToggle === 'Create Post' ? 'See Posts' : 'Create Post'
        };
      });

      if (this.state.buttonToggle === 'Create Post') {
        this.componentWillMount();
      } else {
        console.log("myTween", this.myElements[0]);
        this.myTween.restart();
      }

      console.log(this.state.buttonToggle);
    }
  }, {
    key: "Table",
    value: function Table() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        className: this.state.titleCol,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        className: this.state.bodyCol,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Body"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, this.state.posts.map(function (post, index) {
        // console.log(index)
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
          className: "blog-table-row",
          key: post.id,
          ref: function ref(tr) {
            return _this3.myElements.push(tr);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: _this3.state.titleCol,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, post.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: _this3.state.bodyCol,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, post.body));
      }))));
    }
  }, {
    key: "Title",
    value: function Title() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("font", {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Blog Posts")));
    }
  }, {
    key: "Description",
    value: function Description() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("font", {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "This blog was meant to practice front-end / back-end developement. As well as communication with a sql database. It is functional and will take your thoughts and save them for later in a post."));
    }
  }, {
    key: "handleTitleChange",
    value: function handleTitleChange(event) {
      this.setState({
        title: event.target.value
      });
      console.log(this.state.title);
      event.preventDefault();
    }
  }, {
    key: "handleBodyChange",
    value: function handleBodyChange(event) {
      this.setState({
        body: event.target.value
      });
      console.log(this.state.body);
      event.preventDefault();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log('submitted');
      event.preventDefault(); // console.log(this);

      var newPost = {
        title: this.state.title,
        body: this.state.body
      };
      var settings = {
        async: true,
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        },
        processData: false,
        body: JSON.stringify(newPost)
      };
      var url = '/api/newblogpost';
      fetch(url, settings).then(function (res) {
        return res.json();
      }).then(function (data) {
        return console.log(data);
      });
      this.waitToFunction(this.toggle);
    }
  }, {
    key: "resolveAfter2Seconds",
    value: function resolveAfter2Seconds(x) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(x);
        }, 2000);
      });
    }
  }, {
    key: "waitToFunction",
    value: function () {
      var _waitToFunction = Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(myFunc) {
        var x;
        return _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolveAfter2Seconds(1000);

              case 2:
                x = _context.sent;
                console.log(x); // 10

                myFunc();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function waitToFunction(_x) {
        return _waitToFunction.apply(this, arguments);
      }

      return waitToFunction;
    }()
  }]);

  return BlogPosts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BlogPosts);

/***/ }),

/***/ "./src/components/gitrepos.jsx":
/*!*************************************!*\
  !*** ./src/components/gitrepos.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");





var _jsxFileName = "/Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/components/gitrepos.jsx";


 // import marked from 'marked';
// import Markdown from 'markdown-to-jsx';
// import ReactMarkdown from 'react-markdown';

var GitRepo =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GitRepo, _Component);

  function GitRepo() {
    var _this;

    Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GitRepo);

    _this = Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GitRepo).call(this));
    _this.myTween = new gsap_all__WEBPACK_IMPORTED_MODULE_7__["TimelineLite"]({
      paused: true
    });
    _this.myElement = null;
    _this.myElements = [];
    _this.state = {
      repos: [],
      readmes: {}
    };
    return _this;
  }

  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GitRepo, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var url = 'https://api.github.com/users/zen-gineer/repos';
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log('gitrepo');

        _this2.setState({
          repos: data
        });

        console.log(_this2.state);
      }); // var thing = require('../reporeadmes/Dr-Seuss-Machine-Learning-LSTM.pdf');
      // console.log('thing', thing);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.myTween.staggerTo(this.myElements, 0.5, { auto: 0, y: 70, yoyo: true, repeat: 1 }, 0.1);
      this.myTween = this.myTween.from(this.myElement, 2, {
        y: 700
      }, 0.1); // console.log('tweentest', this.myElements);

      this.myTween.restart();
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render');
      this.myTween.kill().clear().pause(0);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog jumbotron",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.Title(), this.Description(), this.CreateRepoList());
    }
  }, {
    key: "tweentest",
    value: function tweentest() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        key: "1",
        ref: function ref(li) {
          return _this3.myElements[0] = li;
        },
        className: "blog-table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "tween 1 "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        key: "2",
        ref: function ref(li) {
          return _this3.myElements[1] = li;
        },
        className: "blog-table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "tween 2"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        key: "3",
        ref: function ref(li) {
          return _this3.myElements[2] = li;
        },
        className: "blog-table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "tween 3"));
    }
  }, {
    key: "Title",
    value: function Title() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("font", {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "My Git Repositories")));
    }
  }, {
    key: "Description",
    value: function Description() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-description",
        ref: function ref(div) {
          return _this4.myElement = div;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("font", {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Find more at ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/zen-gineer.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "https://github.com/zen-gineer."), ' '), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Hover"), " to see detailed descriptions."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn gsap-btn",
        onClick: function onClick() {
          console.log('play', _this4.myTween);

          _this4.myTween.restart();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Play"))));
    }
  }, {
    key: "CreateRepoList",
    value: function CreateRepoList() {
      var _this5 = this;

      console.log('createRepoList', this.state);
      var popupStyle = {
        width: '600px'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "repo-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, this.state.repos.map(function (repo, index) {
        console.log(_this5.state.readmes[repo.name]);

        try {
          var readmePdf = __webpack_require__("./src/reporeadmes sync recursive ^\\.\\/.*\\.pdf$")("./" + repo.name + ".pdf");

          return (// var readmePdf = require('../reporeadmes/' + repo.name + '.pdf')
            // console.log("repoHtml",repoHtml)
            // return(
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
              key: repo.name,
              className: "blog-table-row",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
              contentStyle: popupStyle,
              className: "readme-popup",
              trigger: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
                href: repo.html_url,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                },
                __self: this
              }, repo.name),
              position: "right center",
              on: "hover",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("embed", {
              className: "readme",
              src: readmePdf,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            })))
          );
        } catch (err) {
          console.log(err);
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            key: repo.name,
            ref: function ref(li) {
              return _this5.myElements[index] = li;
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: repo.html_url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          }, repo.name));
        }
      }));
    }
  }]);

  return GitRepo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GitRepo);

/***/ }),

/***/ "./src/components/home.jsx":
/*!*********************************!*\
  !*** ./src/components/home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





var _jsxFileName = "/Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/components/home.jsx";

 // import { Button, View, Text } from 'react-native';
// var reactNavBar = require('react-nav-bar');
// var NavBar = reactNavBar.NavBar;
// var Menu = reactNavBar.Menu;
// import { createStackNavigator, createAppContainer } from 'react-navigation'; //
// import Request from 'superagent';

var HomePage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomePage, _Component);

  function HomePage() {
    var _this;

    Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    _this = Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage).call(this));
    _this.myTween = new gsap__WEBPACK_IMPORTED_MODULE_6__["TimelineLite"]({
      paused: true
    });
    _this.myElement = null; // this.myElement = [];

    _this.state = {};
    return _this;
  } // componentDidMount() {
  // 	fetch('/api/HomePage')
  // 		.then(res => res.json())
  // 		.then(posts => this.setState({ posts }, () => console.log('Posts fetched', posts)));
  // }


  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.myTween = gsap__WEBPACK_IMPORTED_MODULE_6__["default"].from(this.myElement, 1, {
        scale: .5,
        y: 70,
        x: 30,
        opacity: 0
      }); // this.myTween.staggerTo(this.myElements, 0.5, { y: 70, autoAlpha: 1 }, 0.1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.myTween.kill().clear().pause(0);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        ref: function ref(div) {
          return _this2.myElement = div;
        },
        className: "blog jumbotron z-depth-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.Description()));
    }
  }, {
    key: "Title",
    value: function Title() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("font", {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Home Page")));
    }
  }, {
    key: "Description",
    value: function Description() {
      return (// <div className="blog-description" ref={div => this.myElement.push(div)}>
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "blog-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("font", {
          color: "black",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "This personal website is to showcase some skills and accomplishments I have, and to practice some new ones. It uses node/express backend with a mySQL database connection and React front end. This readme is available as a description of this website and how to use it. And will also show up as a pdf on the github repo page as popup description."))
      );
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/components/ml.jsx":
/*!*******************************!*\
  !*** ./src/components/ml.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/DropdownButton.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/ButtonToolbar */ "./node_modules/react-bootstrap/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_Coursera_3RLZA3C7PQTX_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/Coursera_3RLZA3C7PQTX.png */ "./src/images/Coursera_3RLZA3C7PQTX.png");
/* harmony import */ var _images_Coursera_3RLZA3C7PQTX_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_Coursera_3RLZA3C7PQTX_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_berkeley_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/berkeley.jpg */ "./src/images/berkeley.jpg");
/* harmony import */ var _images_berkeley_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_berkeley_jpg__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/components/ml.jsx";




 // import Alert from 'react-bootstrap/Alert';

 // import { useState } from 'react';

 // import View from 'react-native';
// import ml_eq from '../images/functions.png';


 // import model_diagram from '../images/model_diagram.png';
// import update from 'react-addons-update'; // ES6
// import logGraph from './LogisticRegression.jsx';
// const keys = require('../keys');
// const Twitter = require('twitter');

var ML =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ML, _Component);

  function ML() {
    var _this;

    Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ML);

    _this = Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ML).call(this));
    _this.toggle = _this.toggle.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.Trends = _this.Trends.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.CalcSklearnLog = _this.CalcSklearnLog.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this._rememberValue = _this._rememberValue.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.state = {
      navFontColor: 'white',
      myInput: react__WEBPACK_IMPORTED_MODULE_12___default.a.createRef(),
      courseraCert: ['https://www.coursera.org/account/accomplishments/certificate/3RLZA3C7PQTX'],
      content: 'Projects',
      isOpen: false,
      value: null,
      logData: [],
      sklearnLogPredict: null,
      CHART_MARGINS: {
        left: 50,
        right: 10,
        top: 10,
        bottom: 25
      },
      chartBorderStyle: {
        bottom: {
          fill: '#fff'
        },
        left: {
          fill: '#fff',
          opacity: 0.3
        },
        right: {
          fill: '#fff'
        },
        top: {
          fill: '#fff'
        }
      },
      model: {
        activation: 'relu',
        hidden_nodes: 4
      }
    };
    return _this;
  }

  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ML, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount ', this.state.myInput); //.current.offsetWidth);

      this.setState({
        logData: this.GenerateValues()
      });
    }
  }, {
    key: "_rememberValue",
    value: function _rememberValue(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "blog z-depth-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.Nav(), this.Content());
    }
  }, {
    key: "Description",
    value: function Description(place) {
      switch (place) {
        case 'main':
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            className: "ml-model-outer-box",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, "I'm going to run through interactive explinations and calculations of some machine learning fundamentals I've learned. This, for my own solidification of knowledge, and for you, in case you are interested.");

        case 'sklearn':
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            className: "blog-description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, "Linear regression is the simplest learning model. It attempts to fit data into a linear trend line, Y = W*X + b."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, "Where ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "X"), " is an ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "(n,m)"), " matrix with rows ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "(n)"), ' ', "representing each feature, in this simple case, the \"x\" and \"y\" axis. and columns", ' ', react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, "(m)"), " correspond with the # of data points."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, "W"), " is a matrix of ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, "(n,h)"), " where n is the number of features in ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, "X"), " and ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, "h"), " is the number of nodes in the next layer."));
      }
    }
  }, {
    key: "Content",
    value: function Content() {
      switch (this.state.content) {
        case 'Certificates':
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
            alt: "Certificate from Berkeley",
            className: "ml-image-2",
            src: _images_berkeley_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
            alt: "",
            className: "ml-image",
            src: _images_Coursera_3RLZA3C7PQTX_png__WEBPACK_IMPORTED_MODULE_13___default.a,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }));

        case 'Projects':
          // console.log('logData', this.state.logData);
          return this.Projects();
      }
    }
  }, {
    key: "Projects",
    value: function Projects() {
      // below is an attempt to seporate this to another file
      // how do I deal with state values that need to be set and read from?
      // const graph = logGraph({
      // 	logData: this.state.logData,
      // 	OnClick: this.CalcSklearnLog(),
      // 	onNearestXYFunc: (value, thing) => {
      // 		return this.setState({ value });
      // 	},
      // 	OnMouseLeave: () => this.setState({ value: false })
      // }); //
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, this.Description('main'), this.LogGraph());
    } // ---------------------------------------
    // ---------------------------------------

  }, {
    key: "CalcSklearnLog",
    value: function CalcSklearnLog() {
      var _this2 = this;

      var sendData = {
        task: 'sklearn',
        logData: this.state.logData
      };
      console.log('caluculate log called');
      var settings = {
        async: true,
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        },
        processData: false,
        body: JSON.stringify(sendData)
      };
      var url = '/api/mllog';
      fetch(url, settings).then(function (res) {
        return res.json();
      }).then(function (data) {
        var jsonData = JSON.parse(data.sklearnLogAscii.replace(/'/g, '"').replace(/p/g, 'color').replace(/v/g, 'train_color'));

        _this2.setState({
          sklearnLogPredict: jsonData
        }); // this.AddSklearnPredictGraph()

      });
    }
  }, {
    key: "LogGraph",
    value: function LogGraph() {
      var _this3 = this;

      var train = {
        red: [],
        blue: []
      };
      this.state.logData.forEach(function (value) {
        if (value.v === 1) {
          train.red.push({
            x: value.x,
            y: value.y
          });
        } else {
          train.blue.push({
            x: value.x,
            y: value.y
          });
        }
      });
      var popupStyle = {
        width: '600px'
      };
      var markSeriesProps = {
        animation: true,
        className: 'mark-series-example',
        sizeRange: [5, 15],
        seriesId: 'generated-scatter-plot',
        colorRange: ['#EFC1E3', '#59E4EC'],
        opacityType: 'literal',
        data: this.state.logData,
        onNearestXY: function onNearestXY(value) {
          return _this3.setState({
            value: value
          });
        }
      };
      var markSeriesSklearnProps = {
        animation: true,
        className: 'sklearn-scatter-plot',
        sizeRange: [5, 15],
        seriesId: 'my-example-scatterplot',
        colorRange: ['#EFC1E3', '#59E4EC'],
        opacityType: 'literal',
        data: this.state.sklearnLogPredict,
        onNearestXY: function onNearestXY(value) {
          return _this3.setState({
            value: value
          });
        }
      }; // console.log('sklearnLogPlot: ', markSeriesSklearnProps);

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "blog-description log-plot-outer-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, this.Description('sklearn'), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        contentStyle: popupStyle,
        className: "button-popup",
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
          className: "row log-plot-setup-divs btn-sml btn log-button",
          onClick: this.CalcSklearnLog,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, "Run python sklearn's Linear Regression"),
        position: "right center",
        on: "hover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("embed", {
        className: "readme",
        src: "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "log-plot-setup-divs row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "log-plot cl-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["XYPlot"], {
        width: 250,
        height: 250,
        margin: {
          left: 50,
          right: 10,
          top: 10,
          bottom: 25
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.setState({
            value: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["Borders"], {
        style: this.state.ChartBorderStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["MarkSeries"], Object.assign({}, markSeriesProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      })), this.state.value ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["Hint"], {
        value: this.state.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }) : null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "log-plot cl-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["XYPlot"], {
        width: 250,
        height: 250,
        margin: this.state.CHART_MARGINS,
        onMouseLeave: function onMouseLeave() {
          return _this3.setState({
            value: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["Borders"], {
        style: this.state.chartBorderStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }), this.state.sklearnLogPredict ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["MarkSeries"], Object.assign({}, markSeriesSklearnProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      })) : null, this.state.value ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_11__["Hint"], {
        value: this.state.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }) : null))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "log-plot-setup-divs row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        className: "data-chart-description col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Randomly generated training data"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, this.state.sklearnLogPredict ? "Predicted colors from python's sklearn library" : '')), this.state.sklearnLogPredict ? this.MyLogReg() : null);
    }
  }, {
    key: "MyLogReg",
    value: function MyLogReg() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row model-drawing-outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "blog-description row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
        className: "blog-description row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Our Model")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row model-drawing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
        title: 'activation (' + this.state.model.activation + ')',
        variant: "primary",
        id: "activation",
        key: "activation" // className="model-dropdowns"
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, ['relu', 'tanh'].map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
          className: "model-dropdowns",
          eventKey: option,
          onSelect: function onSelect(eventKey, event) {
            console.log('eventKey: ', eventKey, 'event: ', event);
            _this4.state.model.activation = eventKey;

            _this4.forceUpdate();

            console.log('model: ', _this4.state.model);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, option);
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
        title: '# nodes in hidden layer (' + this.state.model.hidden_nodes + ')',
        variant: "primary",
        id: "hidden_nodes",
        key: "hidden_nodes" // className="model-dropdowns"
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, [2, 3, 4, 5, 6].map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
          className: "model-dropdowns",
          eventKey: option,
          onSelect: function onSelect(eventKey, event) {
            console.log('eventKey: ', eventKey, 'event: ', event);
            _this4.state.model.hidden_nodes = eventKey;

            _this4.forceUpdate();

            console.log('model: ', _this4.state.model);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          },
          __self: this
        }, option);
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        id: "activation",
        onClick: this.CalcMyLog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "Run Logistic Regression")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-3 model-input-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "Input Layer", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "model-nodes",
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "x", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sub", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "1")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "model-nodes",
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "x", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sub", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, "2"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-3 model-hidden-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "Hidden Layer", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }), this.state.model.activation, this.DrawHiddenNodes()), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-3 model-output-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "Output Layer", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }), "sigmoid", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "model-nodes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "Out"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: " row blog-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-3 model-hidden-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-3 model-hidden-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "z", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "[1](i)"), " = W", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "[1]"), "X", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "(i)"), " + b", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "[1]"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }), "a", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "[1](i)"), " = ", this.state.model.activation, "(z", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "[1](i)"), ")", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-3 model-output-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "z", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "[2](i)"), " = W", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "[2]"), "a", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "[1](i)"), " + b", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "[1]"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }), "\u0177", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "(i)"), " = a", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "[1](i)"), " = sigmoid(z", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "[1](i)"), ")", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "Activation Functions")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "Activation Functions")));
    }
  }, {
    key: "CalcMyLog",
    value: function CalcMyLog() {
      var sendData = {
        task: 'myLog',
        logData: this.state.logData,
        model: this.state.model
      };
      console.log('caluculate log called');
      var settings = {
        async: true,
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        },
        processData: false,
        body: JSON.stringify(sendData)
      };
      var url = '/api/mllog';
      fetch(url, settings).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data); // var jsonData = JSON.parse(
        // 	data.sklearnLogAscii
        // 		.replace(/'/g, '"')
        // 		.replace(/p/g, 'color')
        // 		.replace(/v/g, 'train_color')
        // );
        // this.setState({ sklearnLogPredict: jsonData });
        // this.AddSklearnPredictGraph()
      });
    }
  }, {
    key: "DrawHiddenNodes",
    value: function DrawHiddenNodes() {
      var views = [];
      var i = 1;

      for (i; i <= this.state.model.hidden_nodes; i++) {
        views.push(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "model-nodes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          },
          __self: this
        }, 'a', react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sub", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 422
          },
          __self: this
        }, i), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("sup", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 423
          },
          __self: this
        }, "[1]")));
      }

      return views;
    }
  }, {
    key: "GenerateValues",
    value: function GenerateValues() {
      //100 datapoints, 2-d, r=a*sin(nTheta)
      //x=r*cos(Theta), y=r*sin(Theta)
      return Array(100).fill(0).map(function (x) {
        return {
          x: Math.floor(Math.random() * 100),
          y: Math.floor(Math.random() * 100),
          color: Math.floor(Math.random() * 2)
        };
      });
    } // --------------------------------------------
    // --------------------------------------------

  }, {
    key: "Trends",
    value: function Trends() {
      fetch('/api/twitter').then(function (res) {
        return res.json();
      }).then(function (data) {
        return console.log(data);
      });
    }
  }, {
    key: "Nav",
    value: function Nav() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
        className: "ml-navbar",
        color: "dark",
        light: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        onClick: function onClick() {
          return _this5.setState({
            content: 'Certificates'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("font", {
        color: this.state.navFontColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      }, "Certificates"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        onClick: function onClick() {
          return _this5.setState({
            content: 'Projects'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("font", {
        color: this.state.navFontColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, "Projects")))))));
    }
  }]);

  return ML;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ML);

/***/ }),

/***/ "./src/components/navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/navbar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/components/navbar.jsx";



var NavBar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavBar, _Component);

  function NavBar(props) {
    var _this;

    Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.state = {
      isOpen: false,
      fontColor: "black"
    };
    return _this;
  }

  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
        className: "navbar",
        light: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarBrand"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: this.state.fontColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "zen-gineer")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarToggler"], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        color: "dark",
        className: "navbar",
        href: "/resume/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: this.state.fontColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Resume"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "navbar",
        href: "/Blog/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: this.state.fontColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "navbar",
        href: "/GitRepo/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: this.state.fontColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "GitRepo"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "navbar",
        href: "/ml/",
        onClick: console.log("woohoo!"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: this.state.fontColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Machine Learning")))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/resume.jsx":
/*!***********************************!*\
  !*** ./src/components/resume.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/components/resume.jsx";


var Resume =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Resume, _Component);

  function Resume() {
    Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resume);

    return Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Resume).apply(this, arguments));
  }

  Object(_Users_Jennifer_dev_node_FullStackPractice_node_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resume, [{
    key: "render",
    // constructor() {
    // 	super();
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("embed", {
        className: "",
        src: "https://resume.creddle.io/resume/27m4xt3l91n" // src="https://github.com/zen-gineer/Dr-Seuss-Machine-Learning-LSTM/blob/master/README.md"
        ,
        width: "100%",
        height: "1100px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      });
    }
  }, {
    key: "Title",
    value: function Title() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Blog Posts"));
    }
  }]);

  return Resume;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./src/images/Coursera_3RLZA3C7PQTX.png":
/*!**********************************************!*\
  !*** ./src/images/Coursera_3RLZA3C7PQTX.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Coursera_3RLZA3C7PQTX.239a54cb.png";

/***/ }),

/***/ "./src/images/berkeley.jpg":
/*!*********************************!*\
  !*** ./src/images/berkeley.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/berkeley.4b9fdf05.jpg";

/***/ }),

/***/ "./src/images/giphy.gif":
/*!******************************!*\
  !*** ./src/images/giphy.gif ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/giphy.f81dff99.gif";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _components_blogposts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blogposts */ "./src/components/blogposts.jsx");
/* harmony import */ var _components_gitrepos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gitrepos */ "./src/components/gitrepos.jsx");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.jsx");
/* harmony import */ var _components_ml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ml */ "./src/components/ml.jsx");
/* harmony import */ var _components_resume__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resume */ "./src/components/resume.jsx");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home */ "./src/components/home.jsx");
var _jsxFileName = "/Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/index.js";






 // import registerServiceWorker from './registerServiceWorker';







var All = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  exact: true,
  path: "/",
  component: _components_home__WEBPACK_IMPORTED_MODULE_12__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  exact: true,
  path: "/Resume",
  component: _components_resume__WEBPACK_IMPORTED_MODULE_11__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  exact: true,
  path: "/Blog",
  component: _components_blogposts__WEBPACK_IMPORTED_MODULE_7__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  exact: true,
  path: "/GitRepo",
  component: _components_gitrepos__WEBPACK_IMPORTED_MODULE_8__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  exact: true,
  path: "/ml",
  component: _components_ml__WEBPACK_IMPORTED_MODULE_10__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}))));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(All, document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

/***/ }),

/***/ "./src/reporeadmes sync recursive ^\\.\\/.*\\.pdf$":
/*!********************************************!*\
  !*** ./src/reporeadmes sync ^\.\/.*\.pdf$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CurrentTrendsTool.pdf": "./src/reporeadmes/CurrentTrendsTool.pdf",
	"./Dr-Seuss-Machine-Learning-LSTM.pdf": "./src/reporeadmes/Dr-Seuss-Machine-Learning-LSTM.pdf",
	"./Flask-Demo.pdf": "./src/reporeadmes/Flask-Demo.pdf",
	"./MusVisProj.pdf": "./src/reporeadmes/MusVisProj.pdf",
	"./Pandas-Exercises.pdf": "./src/reporeadmes/Pandas-Exercises.pdf",
	"./Personal-Fullstack-Website.pdf": "./src/reporeadmes/Personal-Fullstack-Website.pdf",
	"./Social-Analytics.pdf": "./src/reporeadmes/Social-Analytics.pdf",
	"./USGS.pdf": "./src/reporeadmes/USGS.pdf",
	"./Web-Scraping.pdf": "./src/reporeadmes/Web-Scraping.pdf",
	"./aliens.pdf": "./src/reporeadmes/aliens.pdf",
	"./the-newsroom.pdf": "./src/reporeadmes/the-newsroom.pdf"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/reporeadmes sync recursive ^\\.\\/.*\\.pdf$";

/***/ }),

/***/ "./src/reporeadmes/CurrentTrendsTool.pdf":
/*!***********************************************!*\
  !*** ./src/reporeadmes/CurrentTrendsTool.pdf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CurrentTrendsTool.116886c6.pdf";

/***/ }),

/***/ "./src/reporeadmes/Dr-Seuss-Machine-Learning-LSTM.pdf":
/*!************************************************************!*\
  !*** ./src/reporeadmes/Dr-Seuss-Machine-Learning-LSTM.pdf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Dr-Seuss-Machine-Learning-LSTM.e54bd6a2.pdf";

/***/ }),

/***/ "./src/reporeadmes/Flask-Demo.pdf":
/*!****************************************!*\
  !*** ./src/reporeadmes/Flask-Demo.pdf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Flask-Demo.427aa032.pdf";

/***/ }),

/***/ "./src/reporeadmes/MusVisProj.pdf":
/*!****************************************!*\
  !*** ./src/reporeadmes/MusVisProj.pdf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MusVisProj.b7f67dc0.pdf";

/***/ }),

/***/ "./src/reporeadmes/Pandas-Exercises.pdf":
/*!**********************************************!*\
  !*** ./src/reporeadmes/Pandas-Exercises.pdf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pandas-Exercises.66aaf05f.pdf";

/***/ }),

/***/ "./src/reporeadmes/Personal-Fullstack-Website.pdf":
/*!********************************************************!*\
  !*** ./src/reporeadmes/Personal-Fullstack-Website.pdf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Personal-Fullstack-Website.4de5b012.pdf";

/***/ }),

/***/ "./src/reporeadmes/Social-Analytics.pdf":
/*!**********************************************!*\
  !*** ./src/reporeadmes/Social-Analytics.pdf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Social-Analytics.b928ade8.pdf";

/***/ }),

/***/ "./src/reporeadmes/USGS.pdf":
/*!**********************************!*\
  !*** ./src/reporeadmes/USGS.pdf ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/USGS.fb942310.pdf";

/***/ }),

/***/ "./src/reporeadmes/Web-Scraping.pdf":
/*!******************************************!*\
  !*** ./src/reporeadmes/Web-Scraping.pdf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Web-Scraping.7f376bd4.pdf";

/***/ }),

/***/ "./src/reporeadmes/aliens.pdf":
/*!************************************!*\
  !*** ./src/reporeadmes/aliens.pdf ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/aliens.8bc06e03.pdf";

/***/ }),

/***/ "./src/reporeadmes/the-newsroom.pdf":
/*!******************************************!*\
  !*** ./src/reporeadmes/the-newsroom.pdf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/the-newsroom.e22420fe.pdf";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Jennifer/dev/node/FullStackPractice/node_app/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Jennifer/dev/node/FullStackPractice/node_app/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map