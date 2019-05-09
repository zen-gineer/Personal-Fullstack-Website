webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.f1743224a9d25d8f50af.hot-update.js.map