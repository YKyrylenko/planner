webpackHotUpdate("main",{

/***/ "./src/components/image-upload-button/image-upload-button.js":
/*!*******************************************************************!*\
  !*** ./src/components/image-upload-button/image-upload-button.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ "./node_modules/@material-ui/icons/AddPhotoAlternate.js");
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _image_upload_button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-upload-button.css */ "./src/components/image-upload-button/image-upload-button.css");
/* harmony import */ var _image_upload_button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_upload_button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/yaroslav/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/planner/frontend/src/components/image-upload-button/image-upload-button.js";






const ImageUploadButton = ({
  uploadUserPhoto
}) => {
  const [photo, setPhoto] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleUploadImage = event => {
    const photo = event.target.files[0];
    uploadUserPhoto(photo);
    setPhoto(URL.createObjectURL(photo));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "upload-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
    src: photo,
    style: {
      width: "200px",
      height: "200px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "upload-button",
    type: "file",
    onChange: handleUploadImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageUploadButton);

/***/ })

})
//# sourceMappingURL=main.e6947d1c22fce6760c33.hot-update.js.map