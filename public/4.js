(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forum/QuestionShow.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/forum/QuestionShow.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "QuestionShow",
  data: function data() {
    return {
      question: ''
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/questions/".concat(this.$route.params.slug)).then(function (res) {
      _this.question = res.data.data;
    })["catch"](function (e) {
      console.log(e.response);
    });
  },
  computed: {
    content: function content() {
      return md.parse(this.question.content);
    },
    access: function access() {
      return User.own(this.question.user.id);
    }
  },
  methods: {
    deleteQuestion: function deleteQuestion() {
      var _this2 = this;

      axios["delete"]("http://localhost:8000/api/questions/".concat(this.question.slug)).then(function (res) {
        _this2.$router.push({
          name: 'forum'
        });
      })["catch"](function (e) {
        console.log(e.response.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forum/QuestionShow.vue?vue&type=template&id=64900910&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/forum/QuestionShow.vue?vue&type=template&id=64900910&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.question
    ? _c(
        "v-card",
        { staticClass: "mx-auto" },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-list-item-avatar",
                { attrs: { color: "grey darken-3" } },
                [
                  _c("v-img", {
                    staticClass: "elevation-6",
                    attrs: {
                      src:
                        "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [
                    _vm._v(
                      _vm._s(_vm.question.user ? _vm.question.user.name : "") +
                        " said " +
                        _vm._s(_vm.question.created_at)
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "headline font-weight-bold" }, [
                _vm._v(
                  "\n            " + _vm._s(_vm.question.title) + "\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                { attrs: { align: "center", justify: "end" } },
                [
                  _c("v-btn", { attrs: { color: "accent", dark: "" } }, [
                    _vm._v("Replays")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", {
            staticClass: "font-weight-bold",
            domProps: { innerHTML: _vm._s(_vm.content) }
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-list-item",
                { staticClass: "grow" },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "end" } },
                    [
                      _vm.access
                        ? _c(
                            "v-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { icon: "" } },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "orange" } },
                                        [_vm._v("mdi-border-color")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: { click: _vm.deleteQuestion }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "red" } },
                                        [_vm._v("mdi-delete")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { md: "6" } },
                        [
                          _c("v-icon", { staticClass: "mr-1" }, [
                            _vm._v("mdi-heart")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "subheading mr-2" }, [
                            _vm._v("256")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "mr-1" }, [_vm._v("·")]),
                          _vm._v(" "),
                          _c("v-icon", { staticClass: "mr-1" }, [
                            _vm._v("mdi-share-variant")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "subheading" }, [
                            _vm._v("45")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/forum/QuestionShow.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/forum/QuestionShow.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuestionShow_vue_vue_type_template_id_64900910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionShow.vue?vue&type=template&id=64900910&scoped=true& */ "./resources/js/views/forum/QuestionShow.vue?vue&type=template&id=64900910&scoped=true&");
/* harmony import */ var _QuestionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionShow.vue?vue&type=script&lang=js& */ "./resources/js/views/forum/QuestionShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuestionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionShow_vue_vue_type_template_id_64900910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuestionShow_vue_vue_type_template_id_64900910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64900910",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/forum/QuestionShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/forum/QuestionShow.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/forum/QuestionShow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuestionShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forum/QuestionShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/forum/QuestionShow.vue?vue&type=template&id=64900910&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/forum/QuestionShow.vue?vue&type=template&id=64900910&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionShow_vue_vue_type_template_id_64900910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuestionShow.vue?vue&type=template&id=64900910&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forum/QuestionShow.vue?vue&type=template&id=64900910&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionShow_vue_vue_type_template_id_64900910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionShow_vue_vue_type_template_id_64900910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);