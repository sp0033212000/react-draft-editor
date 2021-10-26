(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("draft-js"), require("immutable"), require("joi"), require("react"), require("react-dom"), require("react-hook-form"), require("react-textarea-autosize"), require("uuid"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "draft-js", "immutable", "joi", "react", "react-dom", "react-hook-form", "react-textarea-autosize", "uuid"], factory);
	else if(typeof exports === 'object')
		exports["DraftEditor"] = factory(require("classnames"), require("draft-js"), require("immutable"), require("joi"), require("react"), require("react-dom"), require("react-hook-form"), require("react-textarea-autosize"), require("uuid"));
	else
		root["DraftEditor"] = factory(root["classnames"], root["draft-js"], root["immutable"], root["joi"], root["react"], root["react-dom"], root["react-hook-form"], root["react-textarea-autosize"], root["uuid"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_draft_js__, __WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_joi__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_hook_form__, __WEBPACK_EXTERNAL_MODULE_react_textarea_autosize__, __WEBPACK_EXTERNAL_MODULE_uuid__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/assets/icons/akar-icons_cross.svg":
/*!***************************************************!*\
  !*** ./src/lib/assets/icons/akar-icons_cross.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAkarIconsCross(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 10L2 2m8 0l-8 8",
    stroke: "#828282",
    strokeLinecap: "round"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgAkarIconsCross);

/***/ }),

/***/ "./src/lib/assets/icons/align_center.svg":
/*!***********************************************!*\
  !*** ./src/lib/assets/icons/align_center.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAlignCenter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 5h16c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zM3 11h26c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM8 15c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1H8zM29 21H3c-.6 0-1 .4-1 1s.4 1 1 1h26c.6 0 1-.4 1-1s-.4-1-1-1zM24 27H8c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1z"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgAlignCenter);

/***/ }),

/***/ "./src/lib/assets/icons/align_left.svg":
/*!*********************************************!*\
  !*** ./src/lib/assets/icons/align_left.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAlignLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 5h16c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM3 11h26c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM3 17h16c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM29 21H3c-.6 0-1 .4-1 1s.4 1 1 1h26c.6 0 1-.4 1-1s-.4-1-1-1zM19 27H3c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1z"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgAlignLeft);

/***/ }),

/***/ "./src/lib/assets/icons/align_right.svg":
/*!**********************************************!*\
  !*** ./src/lib/assets/icons/align_right.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _style, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAlignRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "align_right_svg__Icons",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _style || (_style = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null, ".align_right_svg__st0{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "align_right_svg__st0",
    d: "M29 4H13M29 10H3M29 16H13M29 22H3M29 28H13"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgAlignRight);

/***/ }),

/***/ "./src/lib/assets/icons/arrow_down.svg":
/*!*********************************************!*\
  !*** ./src/lib/assets/icons/arrow_down.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrowDown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 .666v10.667M1.334 6.666l4.667 4.667 4.666-4.667",
    stroke: "#F6F6F6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowDown);

/***/ }),

/***/ "./src/lib/assets/icons/arrow_up.svg":
/*!*******************************************!*\
  !*** ./src/lib/assets/icons/arrow_up.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrowUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 11.334V.667M1.334 5.334L6.001.667l4.666 4.667",
    stroke: "#F6F6F6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowUp);

/***/ }),

/***/ "./src/lib/assets/icons/caret_down.svg":
/*!*********************************************!*\
  !*** ./src/lib/assets/icons/caret_down.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCaretDown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 6 3",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 3l2.598-3H.402L3 3z",
    fill: "#333"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCaretDown);

/***/ }),

/***/ "./src/lib/assets/icons/link.svg":
/*!***************************************!*\
  !*** ./src/lib/assets/icons/link.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.03 8.97a2.912 2.912 0 00-4.118 0l-2.06 2.059a2.912 2.912 0 004.118 4.118l1.03-1.03",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.97 11.03a2.912 2.912 0 004.118 0l2.059-2.06a2.912 2.912 0 10-4.118-4.118l-1.03 1.03",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLink);

/***/ }),

/***/ "./src/lib/assets/icons/order_list.svg":
/*!*********************************************!*\
  !*** ./src/lib/assets/icons/order_list.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgOrderList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17 5.117a.485.485 0 00-.485-.486H6.118v.971h10.397A.486.486 0 0017 5.117zM16.515 8.515H6.118v.97h10.397a.486.486 0 000-.97zM16.515 12.398H6.118v.97h10.397a.485.485 0 100-.97zM4.324 4.02a.262.262 0 00-.498-.116c-.048.086-.104.169-.166.247a1.55 1.55 0 01-.502.42.262.262 0 10.235.47c.157-.08.292-.177.406-.278v1.354a.262.262 0 10.525 0V4.02zM3.088 8.029a.262.262 0 00.369.372l.003-.003a.78.78 0 01.501-.184.49.49 0 01.275.078c.05.036.086.089.086.184a.266.266 0 01-.11.228c-.08.066-.183.118-.325.188l-.076.037c-.164.083-.368.191-.527.366-.168.185-.273.429-.273.753a.262.262 0 00.262.262h1.31a.262.262 0 100-.524h-1a.487.487 0 01.089-.139c.087-.095.21-.167.374-.249l.063-.031c.138-.067.307-.15.438-.26a.788.788 0 00.299-.631.73.73 0 00-.298-.606 1.002 1.002 0 00-.58-.18h-.004c-.32 0-.629.118-.868.33l-.005.005-.002.002-.001.002zm.008-.008l-.008.008s.053-.048.008-.008zM3.93 12.67a.262.262 0 100 .524c.18 0 .279.05.33.096a.195.195 0 01.067.156c-.005.102-.098.272-.397.272-.216 0-.328-.053-.38-.087a.215.215 0 01-.045-.04l-.002-.002a.262.262 0 00-.463.246v.002l.002.002.001.003.006.008a.728.728 0 00.212.217c.145.098.361.175.669.175.54 0 .905-.354.92-.776a.719.719 0 00-.207-.534.719.719 0 00.207-.534c-.015-.423-.38-.777-.92-.777-.308 0-.524.078-.67.175a.737.737 0 00-.212.217l-.005.009-.001.003-.001.002a.262.262 0 00.462.248l.002-.003a.218.218 0 01.046-.04c.05-.033.162-.087.379-.087.299 0 .393.17.397.272a.196.196 0 01-.068.157c-.05.045-.15.095-.33.095zm-.427-.395l-.001.001.003-.004.001-.005.002-.002v-.002a.289.289 0 01-.005.012z",
    fill: "currentColor"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgOrderList);

/***/ }),

/***/ "./src/lib/assets/icons/text_bold.svg":
/*!********************************************!*\
  !*** ./src/lib/assets/icons/text_bold.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTextBold(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.318 10.534c.6-.571.968-1.342.968-2.19v-.166C14.286 6.423 12.713 5 10.773 5H5.49C5.22 5 5 5.2 5 5.447v11.072c0 .266.236.481.527.481h5.69C13.308 17 15 15.464 15 13.568v-.18c0-1.19-.668-2.238-1.682-2.854zM6.714 6.565h4.013c1.02 0 1.844.724 1.844 1.62v.154c0 .894-.826 1.62-1.844 1.62H6.714V6.564zm6.547 7.001c0 1.026-.923 1.857-2.063 1.857H6.714v-3.89h4.484c1.14 0 2.063.832 2.063 1.857v.176z",
    fill: "#333"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTextBold);

/***/ }),

/***/ "./src/lib/assets/icons/text_color.svg":
/*!*********************************************!*\
  !*** ./src/lib/assets/icons/text_color.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTextColor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.094 13.333h1.452l.762-2.386h3.39l.756 2.386h1.452L10.75 4h-1.5l-3.156 9.333zm2.652-3.74l1.218-3.86h.072l1.218 3.86H8.746zM16 15.334H4V18h12v-2.666z",
    fill: "#333"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTextColor);

/***/ }),

/***/ "./src/lib/assets/icons/text_italic.svg":
/*!**********************************************!*\
  !*** ./src/lib/assets/icons/text_italic.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTextItalic(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.863 5H7.48a.137.137 0 00-.137.136v1.091c0 .075.061.137.137.137h3.097L7.91 15.636H5.137a.137.137 0 00-.137.137v1.09c0 .076.062.137.137.137h7.384a.137.137 0 00.137-.136v-1.091a.137.137 0 00-.137-.137h-3.19l2.667-9.272h2.865A.137.137 0 0015 6.227v-1.09A.137.137 0 0014.863 5z",
    fill: "#333"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTextItalic);

/***/ }),

/***/ "./src/lib/assets/icons/text_underline.svg":
/*!*************************************************!*\
  !*** ./src/lib/assets/icons/text_underline.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTextUnderline(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.875 15.76h-9.75a.125.125 0 00-.125.125v.991c0 .069.056.124.125.124h9.75a.125.125 0 00.125-.124v-.991a.125.125 0 00-.125-.124zM10 14.523a3.956 3.956 0 002.872-1.243 4.3 4.3 0 001.19-2.996V5.196A.192.192 0 0013.876 5h-.938a.192.192 0 00-.187.196v5.087c0 1.581-1.234 2.87-2.75 2.87s-2.75-1.289-2.75-2.87V5.196A.192.192 0 007.062 5h-.937a.192.192 0 00-.188.196v5.087a4.31 4.31 0 001.191 2.996A3.947 3.947 0 0010 14.522z",
    fill: "#333"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTextUnderline);

/***/ }),

/***/ "./src/lib/assets/icons/trash.svg":
/*!****************************************!*\
  !*** ./src/lib/assets/icons/trash.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTrash(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 13 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.689 15H2.31a1.286 1.286 0 01-.511-.12 1.345 1.345 0 01-.43-.318 1.427 1.427 0 01-.28-.467 1.484 1.484 0 01-.09-.544V4h.917v9.55a.472.472 0 00.102.329.43.43 0 00.292.155h8.378a.41.41 0 00.292-.155.456.456 0 00.102-.328V4H12v9.55c.004.187-.027.372-.09.545a1.428 1.428 0 01-.28.467 1.345 1.345 0 01-.43.317 1.286 1.286 0 01-.511.121zM12.532 4H.468a.453.453 0 01-.33-.146A.518.518 0 010 3.5c0-.133.05-.26.137-.354A.453.453 0 01.468 3h12.064c.124 0 .243.053.33.146.089.094.138.221.138.354 0 .133-.05.26-.137.354a.453.453 0 01-.331.146z",
    fill: "#F6F6F6"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 5h1v7H8V5zM4 5h1v7H4V5zM9 2h-.95v-.964h-3.1V2H4v-.964c0-.266.098-.522.275-.715A.985.985 0 014.95 0h3.1a.985.985 0 01.675.321c.177.193.275.45.275.715V2z",
    fill: "#F6F6F6"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTrash);

/***/ }),

/***/ "./src/lib/assets/icons/un_order_list.svg":
/*!************************************************!*\
  !*** ./src/lib/assets/icons/un_order_list.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgUnOrderList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.171 6.727a.943.943 0 100-1.886.943.943 0 000 1.886zM4.171 10.498a.943.943 0 100-1.886.943.943 0 000 1.886zM4.171 14.27a.943.943 0 100-1.886.943.943 0 000 1.886zM17 5.703a.472.472 0 00-.471-.471h-10.1v.943h10.1A.472.472 0 0017 5.703zM16.529 9.004h-10.1v.943h10.1a.472.472 0 000-.943zM16.529 12.776h-10.1v.943h10.1a.471.471 0 100-.943z"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgUnOrderList);

/***/ }),

/***/ "./src/lib/assets/icons/unlink.svg":
/*!*****************************************!*\
  !*** ./src/lib/assets/icons/unlink.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgUnlink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "unlink",
    className: "unlink_svg__svg-inline--fa unlink_svg__fa-unlink unlink_svg__fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgUnlink);

/***/ }),

/***/ "./src/lib/assets/icons/upload_square.svg":
/*!************************************************!*\
  !*** ./src/lib/assets/icons/upload_square.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgUploadSquare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 28,
    height: 28,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M21.272 10.304l-6.462-3.77a.538.538 0 00-.542 0l-6.462 3.77a.54.54 0 00-.267.465v7.539a.538.538 0 00.267.465l6.462 3.77a.538.538 0 00.542 0l6.462-3.77a.54.54 0 00.267-.465v-7.539a.54.54 0 00-.267-.465zm-6.733-2.68l5.393 3.145-5.393 3.146-5.393-3.146 5.393-3.145zm-5.923 4.082l5.385 3.141v6.293l-5.385-3.141v-6.293zm6.462 9.434v-6.292l5.384-3.141v6.292l-5.384 3.141z",
    fill: "#000"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgUploadSquare);

/***/ }),

/***/ "./src/lib/announcementEditor.tsx":
/*!****************************************!*\
  !*** ./src/lib/announcementEditor.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcementEditor.module.scss */ "./src/lib/announcementEditor.module.scss");
/* harmony import */ var _hooks_useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useInteractiveOutsideTargetHandler */ "./src/lib/hooks/useInteractiveOutsideTargetHandler/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/lib/utils/index.ts");
/* harmony import */ var _assets_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/arrow_down.svg */ "./src/lib/assets/icons/arrow_down.svg");
/* harmony import */ var _assets_icons_arrow_up_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/arrow_up.svg */ "./src/lib/assets/icons/arrow_up.svg");
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/trash.svg */ "./src/lib/assets/icons/trash.svg");
/* harmony import */ var _components_common_flexbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/common/flexbox */ "./src/lib/components/common/flexbox/index.tsx");
/* harmony import */ var _components_common_fragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/fragment */ "./src/lib/components/common/fragment/index.tsx");
/* harmony import */ var _lib_draft_component_feature_cEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/draft/component/feature/cEditor */ "./src/lib/lib/draft/component/feature/cEditor/index.tsx");
/* harmony import */ var _components_feature_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/feature/image */ "./src/lib/components/feature/image/index.tsx");
/* harmony import */ var _components_feature_multiImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/feature/multiImage */ "./src/lib/components/feature/multiImage/index.tsx");
/* harmony import */ var _components_feature_attachmentSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/feature/attachmentSection */ "./src/lib/components/feature/attachmentSection/index.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var AnnouncementEditor = function AnnouncementEditor(_ref) {
  var content = _ref.content,
      readOnly = _ref.readOnly,
      attachment = _ref.attachment,
      attachmentChangeHandler = _ref.attachmentChangeHandler,
      fileUploader = _ref.fileUploader,
      useUploadFiles = _ref.useUploadFiles,
      useTranslation = _ref.useTranslation,
      contentChangeHandler = _ref.contentChangeHandler,
      moveTowardHandler = _ref.moveTowardHandler,
      moveBackwardHandler = _ref.moveBackwardHandler,
      removeContent = _ref.removeContent,
      uploadFilesErrorFeedback = _ref.uploadFilesErrorFeedback;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].announcementEditor)
  }, content.map(function (contentDetail, index, array) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnnouncementEditorFunctionalWrapper, {
      disable: readOnly,
      index: index,
      id: contentDetail.id,
      key: contentDetail.id,
      isFirst: index === 0,
      isLast: index + 1 === array.length,
      moveTowardHandler: moveTowardHandler,
      moveBackwardHandler: moveBackwardHandler,
      removeContent: removeContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnnouncementEditorContentDispatchers, {
      id: contentDetail.id,
      type: contentDetail.type,
      contentType: contentDetail.contentType,
      content: contentDetail.content,
      readOnly: readOnly,
      onChange: function onChange(newContent) {
        return contentChangeHandler === null || contentChangeHandler === void 0 ? void 0 : contentChangeHandler(contentDetail.id, newContent);
      },
      fileUploader: fileUploader,
      useUploadFiles: useUploadFiles,
      uploadFilesErrorFeedback: uploadFilesErrorFeedback
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_fragment__WEBPACK_IMPORTED_MODULE_9__["default"], {
    condition: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isSet)(attachment)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnnouncementEditorFunctionalWrapper, {
    disable: readOnly,
    removeContent: function removeContent() {
      return attachmentChangeHandler === null || attachmentChangeHandler === void 0 ? void 0 : attachmentChangeHandler(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_feature_attachmentSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
    files: attachment,
    onChange: attachmentChangeHandler,
    useUploadFiles: useUploadFiles,
    fileUploader: fileUploader,
    readOnly: readOnly,
    useTranslation: useTranslation,
    uploadFilesErrorFeedback: uploadFilesErrorFeedback
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnouncementEditor);

var AnnouncementEditorContentDispatchers = function AnnouncementEditorContentDispatchers(props) {
  switch (props.type) {
    case 'editor':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_draft_component_feature_cEditor__WEBPACK_IMPORTED_MODULE_10__["default"], {
        styleType: props.contentType,
        editorState: props.content,
        setEditorState: props.onChange,
        readOnly: props.readOnly
      });

    case 'image':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_feature_image__WEBPACK_IMPORTED_MODULE_11__["default"], {
        fileUploader: props.fileUploader,
        useUploadFiles: props.useUploadFiles,
        recommendWidth: 1200,
        recommendHeight: 540,
        data: props.content,
        onChange: function onChange(image) {
          return props.onChange(image);
        },
        readOnly: props.readOnly,
        uploadFilesErrorFeedback: props.uploadFilesErrorFeedback
      });

    case 'multi-image':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_feature_multiImage__WEBPACK_IMPORTED_MODULE_12__["default"], {
        fileUploader: props.fileUploader,
        useUploadFiles: props.useUploadFiles,
        contentType: props.contentType,
        data: props.content,
        onChange: props.onChange,
        readOnly: props.readOnly,
        uploadFilesErrorFeedback: props.uploadFilesErrorFeedback
      });

    default:
      return null;
  }
};

var AnnouncementEditorFunctionalWrapper = function AnnouncementEditorFunctionalWrapper(_ref2) {
  var children = _ref2.children,
      isLast = _ref2.isLast,
      isFirst = _ref2.isFirst,
      moveTowardHandler = _ref2.moveTowardHandler,
      moveBackwardHandler = _ref2.moveBackwardHandler,
      removeContent = _ref2.removeContent,
      index = _ref2.index,
      id = _ref2.id,
      disable = _ref2.disable;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focusing = _useState2[0],
      setFocusing = _useState2[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var _ref$current;

    ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollIntoView();
  }, []);
  (0,_hooks_useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(ref.current, function () {
    return setFocusing(false);
  });
  if (disable) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    onFocus: function onFocus() {
      return setFocusing(true);
    },
    onClick: function onClick() {
      return setFocusing(true);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].announcementEditor__functionalWrapper)
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_flexbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    condition: focusing,
    direction: 'col',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["announcementEditor__functionalWrapper--container"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_fragment__WEBPACK_IMPORTED_MODULE_9__["default"], {
    condition: !isFirst && (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isSet)(isFirst)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-index": index,
    "data-id": id,
    onClick: moveTowardHandler,
    type: 'button',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["announcementEditor__functionalWrapper--btn"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_arrow_up_svg__WEBPACK_IMPORTED_MODULE_6__.ReactComponent, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["announcementEditor__functionalWrapper--divider"])
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_fragment__WEBPACK_IMPORTED_MODULE_9__["default"], {
    condition: !isLast && (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isSet)(isLast)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-index": index,
    "data-id": id,
    onClick: moveBackwardHandler,
    type: 'button',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["announcementEditor__functionalWrapper--btn"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["announcementEditor__functionalWrapper--divider"])
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-id": id,
    onClick: removeContent,
    type: 'button',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_announcementEditor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["announcementEditor__functionalWrapper--btn"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_7__.ReactComponent, null))));
};

/***/ }),

/***/ "./src/lib/components/common/flexbox/flexbox.tsx":
/*!*******************************************************!*\
  !*** ./src/lib/components/common/flexbox/flexbox.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flexbox": () => (/* binding */ Flexbox),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flexbox.module.scss */ "./src/lib/components/common/flexbox/flexbox.module.scss");
var _excluded = ["as", "condition", "children", "className", "direction", "justify", "align", "expand", "wrap", "customRef"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Flexbox = function Flexbox(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$condition = _ref.condition,
      condition = _ref$condition === void 0 ? true : _ref$condition,
      children = _ref.children,
      className = _ref.className,
      direction = _ref.direction,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'center' : _ref$justify,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'center' : _ref$align,
      expand = _ref.expand,
      wrap = _ref.wrap,
      customRef = _ref.customRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var _className = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _classNames, _classNames2, _classNames3, _classNames4;

    return classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox, (_classNames = {}, _defineProperty(_classNames, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__wrap, wrap === 'wrap'), _defineProperty(_classNames, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__wrapReverse, wrap === 'wrap-reverse'), _defineProperty(_classNames, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__nowrap, wrap === 'nowrap'), _classNames), (_classNames2 = {}, _defineProperty(_classNames2, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__row, direction === 'row'), _defineProperty(_classNames2, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__col, direction === 'col'), _classNames2), (_classNames3 = {}, _defineProperty(_classNames3, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__justifyStart, justify === 'start'), _defineProperty(_classNames3, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__justifyEnd, justify === 'end'), _defineProperty(_classNames3, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__justifyCenter, justify === 'center'), _defineProperty(_classNames3, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__justifyBetween, justify === 'between'), _defineProperty(_classNames3, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__justifyAround, justify === 'around'), _defineProperty(_classNames3, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__justifyEvenly, justify === 'evenly'), _classNames3), (_classNames4 = {}, _defineProperty(_classNames4, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__itemsStart, align === 'start'), _defineProperty(_classNames4, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__itemsEnd, align === 'end'), _defineProperty(_classNames4, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__itemsCenter, align === 'center'), _defineProperty(_classNames4, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__itemsBaseline, align === 'baseline'), _defineProperty(_classNames4, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__itemsStretch, align === 'stretch'), _classNames4), _defineProperty({}, _flexbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].flexbox__expand, expand));
  }, [className, direction, justify, align, expand, wrap]);

  if (!condition) return null;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(as, _objectSpread(_objectSpread({
    className: _className
  }, props), {}, {
    ref: customRef
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flexbox);

/***/ }),

/***/ "./src/lib/components/common/flexbox/index.tsx":
/*!*****************************************************!*\
  !*** ./src/lib/components/common/flexbox/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _flexbox__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _flexbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flexbox */ "./src/lib/components/common/flexbox/flexbox.tsx");


/***/ }),

/***/ "./src/lib/components/common/fragment/fragment.tsx":
/*!*********************************************************!*\
  !*** ./src/lib/components/common/fragment/fragment.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/lib/utils/index.ts");
var _excluded = ["condition", "children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Fragment = function Fragment(_ref) {
  var _ref$condition = _ref.condition,
      condition = _ref$condition === void 0 ? true : _ref$condition,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isFalse)(condition)) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), props, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fragment);

/***/ }),

/***/ "./src/lib/components/common/fragment/index.tsx":
/*!******************************************************!*\
  !*** ./src/lib/components/common/fragment/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _fragment__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment */ "./src/lib/components/common/fragment/fragment.tsx");


/***/ }),

/***/ "./src/lib/components/feature/attachmentSection/attachmentSection.tsx":
/*!****************************************************************************!*\
  !*** ./src/lib/components/feature/attachmentSection/attachmentSection.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachmentSection.module.scss */ "./src/lib/components/feature/attachmentSection/attachmentSection.module.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/lib/utils/index.ts");
/* harmony import */ var _assets_icons_upload_square_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/upload_square.svg */ "./src/lib/assets/icons/upload_square.svg");
/* harmony import */ var _assets_icons_akar_icons_cross_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/akar-icons_cross.svg */ "./src/lib/assets/icons/akar-icons_cross.svg");
/* harmony import */ var _common_flexbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/flexbox */ "./src/lib/components/common/flexbox/index.tsx");
/* harmony import */ var _common_fragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/fragment */ "./src/lib/components/common/fragment/index.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var AttachmentSection = function AttachmentSection(_ref) {
  var files = _ref.files,
      onChange = _ref.onChange,
      fileUploader = _ref.fileUploader,
      useUploadFiles = _ref.useUploadFiles,
      readOnly = _ref.readOnly,
      useTranslation = _ref.useTranslation,
      uploadFilesErrorFeedback = _ref.uploadFilesErrorFeedback;

  var removeHandler = function removeHandler(event) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(onChange)) return;
    var targetIndex = Number(event.currentTarget.getAttribute('data-index'));
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(targetIndex) || isNaN(targetIndex)) return;
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(files)) return;
    onChange(files.filter(function (_, index) {
      return index !== targetIndex;
    }));
  };

  var fileUploadHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(attach) {
      var result, allFile;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(onChange)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(fileUploader) || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(plugin))) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _context.next = 6;
              return fileUploader(attach);

            case 6:
              result = _context.sent;

              if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(result) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotEmptyArray)(result)) {
                allFile = result.map(function (_ref3) {
                  var fileName = _ref3.fileName,
                      filePath = _ref3.filePath;
                  return {
                    attachName: fileName,
                    attachUrl: filePath
                  };
                });
                onChange([].concat(_toConsumableArray(files || []), _toConsumableArray(allFile)));
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [onChange, files]);
  var plugin = useUploadFiles === null || useUploadFiles === void 0 ? void 0 : useUploadFiles({
    callback: fileUploadHandler,
    allowTypes: ['.csv', 'text/csv', 'text/comma-separated-values', 'application/csv', 'application/excel', 'application/vnd.ms-excel', 'application/vnd.msexcel', 'text/anytext', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    isMultiple: true,
    isNeedValidate: true,
    errorFeedback: uploadFilesErrorFeedback
  });
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(files)) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-readonly": readOnly,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attachmentSection)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    condition: !readOnly,
    justify: 'between',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attachmentSection__header)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u6587\u7AE0\u9644\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: plugin === null || plugin === void 0 ? void 0 : plugin.createFileInput,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attachmentSection__uploadBtn)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_upload_square_svg__WEBPACK_IMPORTED_MODULE_4__.ReactComponent, null), "\u4E0A\u50B3\u9644\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-readonly": readOnly,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attachmentSection__content)
  }, files === null || files === void 0 ? void 0 : files.map(function (file, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AttachmentItem, {
      key: file.attachUrl,
      attachUrl: file.attachUrl,
      attachName: file.attachName,
      index: index,
      removeHandler: removeHandler,
      readOnly: readOnly,
      useTranslation: useTranslation
    });
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachmentSection);

var AttachmentItem = function AttachmentItem(_ref4) {
  var index = _ref4.index,
      removeHandler = _ref4.removeHandler,
      attachName = _ref4.attachName,
      attachUrl = _ref4.attachUrl,
      readOnly = _ref4.readOnly,
      useTranslation = _ref4.useTranslation;
  var langPlugin = useTranslation === null || useTranslation === void 0 ? void 0 : useTranslation();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    justify: 'start',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attachmentSection__attach)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_fragment__WEBPACK_IMPORTED_MODULE_7__["default"], {
    condition: !readOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-index": index,
    onClick: removeHandler,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attachmentSection__removeBtn)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_akar_icons_cross_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, attachName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_fragment__WEBPACK_IMPORTED_MODULE_7__["default"], {
    condition: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isTrue)(readOnly)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_attachmentSection_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attachmentSection__download),
    href: attachUrl,
    target: '_blank',
    rel: 'noreferrer noopener'
  }, (langPlugin === null || langPlugin === void 0 ? void 0 : langPlugin.t("share.download")) || '下載')));
};

/***/ }),

/***/ "./src/lib/components/feature/attachmentSection/index.tsx":
/*!****************************************************************!*\
  !*** ./src/lib/components/feature/attachmentSection/index.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _attachmentSection__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _attachmentSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachmentSection */ "./src/lib/components/feature/attachmentSection/attachmentSection.tsx");


/***/ }),

/***/ "./src/lib/components/feature/image/image.tsx":
/*!****************************************************!*\
  !*** ./src/lib/components/feature/image/image.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.module.scss */ "./src/lib/components/feature/image/image.module.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/lib/utils/index.ts");
/* harmony import */ var _common_flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/flexbox */ "./src/lib/components/common/flexbox/index.tsx");
/* harmony import */ var _common_fragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/fragment */ "./src/lib/components/common/fragment/index.tsx");
/* harmony import */ var _assets_images_fake_img_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/fake_img.jpg */ "./src/lib/assets/images/fake_img.jpg");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var Image = function Image(_ref) {
  var width = _ref.width,
      maxWidth = _ref.maxWidth,
      height = _ref.height,
      data = _ref.data,
      onChange = _ref.onChange,
      recommendWidth = _ref.recommendWidth,
      recommendHeight = _ref.recommendHeight,
      readOnly = _ref.readOnly,
      className = _ref.className,
      fileUploader = _ref.fileUploader,
      useUploadFiles = _ref.useUploadFiles,
      _ref$keepAspectRatio = _ref.keepAspectRatio,
      keepAspectRatio = _ref$keepAspectRatio === void 0 ? false : _ref$keepAspectRatio,
      uploadFilesErrorFeedback = _ref.uploadFilesErrorFeedback;
  var fileUploadHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(files) {
      var result, _image;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(fileUploader) || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(plugin))) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return fileUploader(files);

            case 4:
              result = _context.sent;

              if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(result) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotEmptyArray)(result)) {
                _image = result[0];
                onChange({
                  url: _image.filePath,
                  name: _image.fileName
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [onChange]);
  var plugin = useUploadFiles === null || useUploadFiles === void 0 ? void 0 : useUploadFiles({
    callback: fileUploadHandler,
    allowTypes: ["image/jpeg", "image/png"],
    isMultiple: false,
    isNeedValidate: true,
    errorFeedback: uploadFilesErrorFeedback
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      width: width,
      height: height,
      maxWidth: maxWidth
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].image, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(data) && _image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].imageSettle, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    condition: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(data) && !readOnly || keepAspectRatio,
    style: {
      paddingTop: "".concat(recommendHeight / recommendWidth * 100, "%")
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].image__placeholder, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(data) && _image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["image__placeholder--hidden"])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_fragment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    condition: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(data) || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isTrue)(readOnly)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "aria-readonly": readOnly,
    src: data !== null && data !== void 0 && data.url ? data.url : typeof _assets_images_fake_img_jpg__WEBPACK_IMPORTED_MODULE_6__["default"] === "string" ? _assets_images_fake_img_jpg__WEBPACK_IMPORTED_MODULE_6__["default"] : _assets_images_fake_img_jpg__WEBPACK_IMPORTED_MODULE_6__["default"].src,
    alt: data === null || data === void 0 ? void 0 : data.name,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(keepAspectRatio && _image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["image__preview--keepAspectRatio"], (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(data) && _image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["image__preview--image"], (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNotSet)(data) && readOnly && _image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["image__preview--placeholder"])
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    direction: "col",
    condition: !readOnly,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].image__functional, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(data) && _image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["image__functional--hidden"], (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSet)(data) && "imageSettle__functional")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: plugin === null || plugin === void 0 ? void 0 : plugin.createFileInput,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["image__functional--btn"])
  }, "\u4E0A\u50B3\u5716\u7247"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_image_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["image__functional-recommend"])
  }, "\u5EFA\u8B70\u5716\u7247\u6BD4\u4F8B", recommendWidth, "x", recommendHeight)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./src/lib/components/feature/image/index.tsx":
/*!****************************************************!*\
  !*** ./src/lib/components/feature/image/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "./src/lib/components/feature/image/image.tsx");


/***/ }),

/***/ "./src/lib/components/feature/modal/index.tsx":
/*!****************************************************!*\
  !*** ./src/lib/components/feature/modal/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/lib/components/feature/modal/modal.tsx");


/***/ }),

/***/ "./src/lib/components/feature/modal/modal.tsx":
/*!****************************************************!*\
  !*** ./src/lib/components/feature/modal/modal.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.module.scss */ "./src/lib/components/feature/modal/modal.module.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/flexbox */ "./src/lib/components/common/flexbox/index.tsx");
var _excluded = ["children", "visible", "onBackdrop", "className", "disableDefaultZIndex", "customRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Modal = function Modal(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      onBackdrop = _ref.onBackdrop,
      className = _ref.className,
      disableDefaultZIndex = _ref.disableDefaultZIndex,
      customRef = _ref.customRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var clickHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    event.stopPropagation();
    onBackdrop === null || onBackdrop === void 0 ? void 0 : onBackdrop(event);
  }, [onBackdrop]);
  if (!visible) return null;
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    customRef: customRef,
    onClick: clickHandler,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, _modal_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modal, _defineProperty({}, _modal_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modal__defaultZindex, !disableDefaultZIndex))
  }, props), children), document.querySelector('body'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/lib/components/feature/multiImage/index.tsx":
/*!*********************************************************!*\
  !*** ./src/lib/components/feature/multiImage/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _multiImage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _multiImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiImage */ "./src/lib/components/feature/multiImage/multiImage.tsx");


/***/ }),

/***/ "./src/lib/components/feature/multiImage/multiImage.tsx":
/*!**************************************************************!*\
  !*** ./src/lib/components/feature/multiImage/multiImage.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiImage.module.scss */ "./src/lib/components/feature/multiImage/multiImage.module.scss");
/* harmony import */ var _utils_dataHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dataHandler */ "./src/lib/utils/dataHandler.ts");
/* harmony import */ var _common_flexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/flexbox */ "./src/lib/components/common/flexbox/index.tsx");
/* harmony import */ var _feature_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../feature/image */ "./src/lib/components/feature/image/index.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var MultiImage = function MultiImage(_ref) {
  var data = _ref.data,
      contentType = _ref.contentType,
      onChange = _ref.onChange,
      readOnly = _ref.readOnly,
      fileUploader = _ref.fileUploader,
      useUploadFiles = _ref.useUploadFiles,
      uploadFilesErrorFeedback = _ref.uploadFilesErrorFeedback;
  var changeHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, newData) {
    var target = (data === null || data === void 0 ? void 0 : data[index]) || {
      image: null,
      title: '',
      body: ''
    };
    var result = (0,_utils_dataHandler__WEBPACK_IMPORTED_MODULE_4__.deepClone)(data || []);
    result[index] = _objectSpread(_objectSpread({}, target), newData);
    onChange(result);
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].multiImage),
    align: 'start'
  }, _toConsumableArray(new Array(contentType === 'twins' ? 2 : contentType === 'triplet' ? 3 : 0)).map(function (_, index, ary) {
    var recommendSize = contentType === 'twins' ? 540 : 360;
    var itemData = data === null || data === void 0 ? void 0 : data[index];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].multiImage__contentBox),
      key: index,
      style: {
        width: "".concat(100 / ary.length, "%")
      },
      direction: 'col'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_feature_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: '100%',
      recommendWidth: recommendSize,
      recommendHeight: recommendSize * (2 / 3),
      data: itemData === null || itemData === void 0 ? void 0 : itemData.image,
      onChange: function onChange(image) {
        return changeHandler(index, {
          image: image
        });
      },
      readOnly: readOnly,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].multiImage__image),
      fileUploader: fileUploader,
      useUploadFiles: useUploadFiles,
      keepAspectRatio: true,
      uploadFilesErrorFeedback: uploadFilesErrorFeedback
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].multiImage__textarea, _multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["multiImage__textarea--title"]),
      readOnly: readOnly,
      placeholder: '請輸入標題',
      value: itemData === null || itemData === void 0 ? void 0 : itemData.title,
      onChange: function onChange(event) {
        return changeHandler(index, {
          title: event.target.value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].multiImage__textarea, _multiImage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["multiImage__textarea--body"]),
      readOnly: readOnly,
      placeholder: '請輸入內容文字',
      value: itemData === null || itemData === void 0 ? void 0 : itemData.body,
      onChange: function onChange(event) {
        return changeHandler(index, {
          body: event.target.value
        });
      }
    }));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiImage);

/***/ }),

/***/ "./src/lib/hooks/useAsyncPrompt/useAsyncPrompt.ts":
/*!********************************************************!*\
  !*** ./src/lib/hooks/useAsyncPrompt/useAsyncPrompt.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAsyncPrompt": () => (/* binding */ useAsyncPrompt),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useAsyncPrompt = function useAsyncPrompt() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      resolver = _useState4[0],
      setResolver = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      rejecter = _useState6[0],
      setRejecter = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      forceShutdown = _useState8[0],
      setForceShutdown = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isOpen) return;
    if (!forceShutdown) return;
    setRejecter(null);
    setResolver(null);
    setIsOpen(false);
    setForceShutdown(false);
  }, [isOpen, forceShutdown]);
  var prompt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return new Promise(function (res) {
      setIsOpen(true);
      setResolver(function () {
        return function (value) {
          setResolver(null);
          setIsOpen(false);
          res(value);
        };
      });
      setRejecter(function () {
        return function (value) {
          setRejecter(null);
          setIsOpen(false);
          res(value);
        };
      });
    });
  }, // eslint-disable-next-line
  [isOpen]);
  var handleConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    return resolver === null || resolver === void 0 ? void 0 : resolver.apply(void 0, arg);
  }, [resolver]);
  var handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arg[_key2] = arguments[_key2];
    }

    return rejecter === null || rejecter === void 0 ? void 0 : rejecter.apply(void 0, arg);
  }, [rejecter]);
  var forceStopAsyncPrompt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setForceShutdown(true);
  }, []);
  return {
    prompt: prompt,
    handleConfirm: handleConfirm,
    handleClose: handleClose,
    isAsyncPromptOpen: isOpen,
    forceStopAsyncPrompt: forceStopAsyncPrompt
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAsyncPrompt);

/***/ }),

/***/ "./src/lib/hooks/useInteractiveOutsideTargetHandler/index.ts":
/*!*******************************************************************!*\
  !*** ./src/lib/hooks/useInteractiveOutsideTargetHandler/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useInteractiveOutsideTargetHandler */ "./src/lib/hooks/useInteractiveOutsideTargetHandler/useInteractiveOutsideTargetHandler.tsx");


/***/ }),

/***/ "./src/lib/hooks/useInteractiveOutsideTargetHandler/useInteractiveOutsideTargetHandler.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/lib/hooks/useInteractiveOutsideTargetHandler/useInteractiveOutsideTargetHandler.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInteractiveOutsideTargetHandler": () => (/* binding */ useInteractiveOutsideTargetHandler),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/lib/utils/index.ts");


var useInteractiveOutsideTargetHandler = function useInteractiveOutsideTargetHandler(el, cb) {
  var excludeEls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var clickHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNotSet)(el)) return;

    if (el instanceof HTMLElement && event.target instanceof HTMLElement && !el.contains(event.target)) {
      var isExcludedElement = excludeEls.includes(event.target);
      var isInExcludedElement = excludeEls.some(function (excludeEl) {
        return excludeEl === null || excludeEl === void 0 ? void 0 : excludeEl.contains(event.target);
      });

      if (!isExcludedElement && !isInExcludedElement) {
        cb();
      }
    }
  }, [cb, el]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener('mousedown', clickHandler);
    document.addEventListener('touchstart', clickHandler);
    return function () {
      document.removeEventListener('mousedown', clickHandler);
      document.removeEventListener('touchstart', clickHandler);
    };
  }, [clickHandler]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInteractiveOutsideTargetHandler);

/***/ }),

/***/ "./src/lib/lib/draft/blockRenderMap/blockRenderMap.tsx":
/*!*************************************************************!*\
  !*** ./src/lib/lib/draft/blockRenderMap/blockRenderMap.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blockRenderMap_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockRenderMap.module.scss */ "./src/lib/lib/draft/blockRenderMap/blockRenderMap.module.scss");






var UnOrderListBlockWrapper = function UnOrderListBlockWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('public-DraftStyleDefault-ul', _blockRenderMap_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["draft-list"], _blockRenderMap_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["draft-list__un-order"])
  }, children);
};

var OrderListBlockWrapper = function OrderListBlockWrapper(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('public-DraftStyleDefault-ol', _blockRenderMap_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["draft-list"], _blockRenderMap_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["draft-list__order"])
  }, children);
};

var blockRenderObject = {
  'unordered-list-item': {
    element: 'li',
    wrapper: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UnOrderListBlockWrapper, null)
  },
  'ordered-list-item': {
    element: 'li',
    wrapper: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OrderListBlockWrapper, null)
  }
};
var blockRenderMap = immutable__WEBPACK_IMPORTED_MODULE_2___default().Map(blockRenderObject);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (draft_js__WEBPACK_IMPORTED_MODULE_1___default().DefaultDraftBlockRenderMap.merge(blockRenderMap));

/***/ }),

/***/ "./src/lib/lib/draft/blockRenderMap/index.ts":
/*!***************************************************!*\
  !*** ./src/lib/lib/draft/blockRenderMap/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _blockRenderMap__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _blockRenderMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockRenderMap */ "./src/lib/lib/draft/blockRenderMap/blockRenderMap.tsx");


/***/ }),

/***/ "./src/lib/lib/draft/component/feature/cEditor/cEditor.tsx":
/*!*****************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/cEditor/cEditor.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cEditor_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cEditor.module.scss */ "./src/lib/lib/draft/component/feature/cEditor/cEditor.module.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../decorator */ "./src/lib/lib/draft/decorator/index.tsx");
/* harmony import */ var _hooks_useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../hooks/useInteractiveOutsideTargetHandler */ "./src/lib/hooks/useInteractiveOutsideTargetHandler/index.ts");
/* harmony import */ var _inlineStyle_inlineStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inlineStyle/inlineStyle */ "./src/lib/lib/draft/inlineStyle/inlineStyle.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils */ "./src/lib/utils/index.ts");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../toolbar */ "./src/lib/lib/draft/component/feature/toolbar/index.tsx");
/* harmony import */ var _blockRenderMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blockRenderMap */ "./src/lib/lib/draft/blockRenderMap/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var DEFAULT_PRIMARY_HEADING_CONTENT = (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.convertFromRaw)({
  blocks: [{
    key: (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.genKey)(),
    type: 'primary-heading',
    depth: 0,
    text: '',
    inlineStyleRanges: [],
    entityRanges: []
  }],
  entityMap: {}
});
var DEFAULT_SECONDARY_HEADING_CONTENT = (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.convertFromRaw)({
  blocks: [{
    key: (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.genKey)(),
    type: 'secondary-heading',
    depth: 0,
    text: '',
    inlineStyleRanges: [],
    entityRanges: []
  }],
  entityMap: {}
});
var DEFAULT_PRIMARY_BODY_CONTENT = (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.convertFromRaw)({
  blocks: [{
    key: (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.genKey)(),
    type: 'primary-body',
    depth: 0,
    text: '',
    inlineStyleRanges: [],
    entityRanges: []
  }],
  entityMap: {}
});
var DEFAULT_SECONDARY_BODY_CONTENT = (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.convertFromRaw)({
  blocks: [{
    key: (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.genKey)(),
    type: 'secondary-body',
    depth: 0,
    text: '',
    inlineStyleRanges: [],
    entityRanges: []
  }],
  entityMap: {}
});
var STYLE_EDITOR_STATE = {
  'primary-heading': draft_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.createWithContent(DEFAULT_PRIMARY_HEADING_CONTENT, _decorator__WEBPACK_IMPORTED_MODULE_4__.decorator),
  'secondary-heading': draft_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.createWithContent(DEFAULT_SECONDARY_HEADING_CONTENT, _decorator__WEBPACK_IMPORTED_MODULE_4__.decorator),
  'primary-body': draft_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.createWithContent(DEFAULT_PRIMARY_BODY_CONTENT, _decorator__WEBPACK_IMPORTED_MODULE_4__.decorator),
  'secondary-body': draft_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.createWithContent(DEFAULT_SECONDARY_BODY_CONTENT, _decorator__WEBPACK_IMPORTED_MODULE_4__.decorator)
};

var CEditor = function CEditor(_ref) {
  var styleType = _ref.styleType,
      editorState = _ref.editorState,
      setEditorState = _ref.setEditorState,
      readOnly = _ref.readOnly,
      fixedToolbar = _ref.fixedToolbar,
      containerClassName = _ref.containerClassName,
      editorClassName = _ref.editorClassName;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focusing = _useState2[0],
      setFocusing = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      promptRef = _useState4[0],
      setPromptRef = _useState4[1];

  var draftRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var rawEditorDataString = editorState ? JSON.stringify((0,_utils__WEBPACK_IMPORTED_MODULE_7__.convertEditorStateToServerData)(editorState)) : null;
  (0,_hooks_useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(containerRef.current, function () {
    return setFocusing(false);
  }, [promptRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isNotSet)(editorState)) {
      setEditorState(STYLE_EDITOR_STATE[styleType]);
    }
  }, [editorState]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    focusElement();
  }, [rawEditorDataString]);
  var focusElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _window$getSelection, _window$getSelection$;

    var parentElement = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : (_window$getSelection$ = _window$getSelection.focusNode) === null || _window$getSelection$ === void 0 ? void 0 : _window$getSelection$.parentElement;
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isNotSet)(parentElement)) return;
    parentElement.focus();
  }, []);

  var focusEventHandler = function focusEventHandler() {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isNotSet)(draftRef.current)) return;
    draftRef.current.focus();
    setFocusing(true);
  };

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isNotSet)(editorState)) return null;

  var keyBindingFn = function keyBindingFn(e) {
    //prevent cursor from selecting the next interactive element
    if (e.key === 'Tab') {
      e.preventDefault(); // assign a constant for the new editorState

      var newState = draft_js__WEBPACK_IMPORTED_MODULE_3__.RichUtils.onTab(e, editorState, 1); // if a new editor state exists, set editor state to new state
      // and return 'handled', otherwise return 'not-handled

      setEditorState(newState);
      return null;
    }

    return (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultKeyBinding)(e);
  }; // const handlePastedText: ComponentProps<typeof Editor>['handlePastedText'] = (
  //   _,
  //   html,
  //   editorState
  // ) => {
  //   if (isNotSet(html)) return 'not-handled'
  //   const dataFromHTML = convertFromHTML(html)
  //   dataFromHTML.contentBlocks = dataFromHTML.contentBlocks.map(block => {
  //     let handledBlock = block
  //
  //     if (block.getType() === 'unstyled' && isSet(styleType)) {
  //       handledBlock = block.set('type', styleType) as ContentBlock
  //     }
  //     return handledBlock
  //   })
  //   const contentState = ContentState.createFromBlockArray(
  //     dataFromHTML.contentBlocks,
  //     dataFromHTML.entityMap
  //   )
  //   const newEditorState = EditorState.createWithContent(contentState, decorator)
  //   setEditorState(newEditorState)
  //   return 'handled'
  // }


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: containerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_cEditor_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cEditor, containerClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    tabIndex: 2,
    onFocus: focusEventHandler,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_cEditor_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cEditor__container, editorClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fixed: fixedToolbar,
    readOnly: readOnly,
    styleType: styleType,
    editorState: editorState,
    setEditorState: setEditorState,
    containerEl: containerRef.current,
    focusing: focusing,
    promptRef: setPromptRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(fixedToolbar && _cEditor_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cEditor__fixed, _cEditor_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["cEditor__".concat(styleType)])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(draft_js__WEBPACK_IMPORTED_MODULE_3__.Editor, {
    readOnly: readOnly,
    ref: draftRef,
    editorState: editorState,
    onChange: setEditorState,
    tabIndex: 2,
    blockStyleFn: (0,_inlineStyle_inlineStyle__WEBPACK_IMPORTED_MODULE_6__.getBlockStyle)(styleType),
    customStyleMap: _inlineStyle_inlineStyle__WEBPACK_IMPORTED_MODULE_6__.customStyleMap,
    blockRenderMap: _blockRenderMap__WEBPACK_IMPORTED_MODULE_9__["default"],
    keyBindingFn: keyBindingFn // handlePastedText={handlePastedText}
    ,
    placeholder: '請輸入內文'
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CEditor); // export default React.memo(CEditor, (prev, next) => {
//   const prevEditorState = prev.editorState
//   const prevRawDataString = prevEditorState ? convertEditorStateToServerData(prevEditorState) : null
//   const nextEditorState = next.editorState
//   const nextRawDataString = nextEditorState ? convertEditorStateToServerData(nextEditorState) : null
//   if (prevRawDataString !== nextRawDataString) return false
//   if (prev.styleType !== next.styleType) return false
//   if (prev.readOnly !== next.readOnly) return false
//   if (prev.fixedToolbar !== next.fixedToolbar) return false
//   if (prev.containerClassName !== next.containerClassName) return false
//   if (prev.editorClassName !== next.editorClassName) return false
//
//   return true
// })

/***/ }),

/***/ "./src/lib/lib/draft/component/feature/cEditor/index.tsx":
/*!***************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/cEditor/index.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _cEditor__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _cEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cEditor */ "./src/lib/lib/draft/component/feature/cEditor/cEditor.tsx");


/***/ }),

/***/ "./src/lib/lib/draft/component/feature/draftLinkPrompt/draftLinkPrompt.tsx":
/*!*********************************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/draftLinkPrompt/draftLinkPrompt.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draftLinkPrompt.module.scss */ "./src/lib/lib/draft/component/feature/draftLinkPrompt/draftLinkPrompt.module.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! joi */ "joi");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/icons/unlink.svg */ "./src/lib/assets/icons/unlink.svg");
/* harmony import */ var _components_feature_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/feature/modal */ "./src/lib/components/feature/modal/index.tsx");
/* harmony import */ var _components_common_flexbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/common/flexbox */ "./src/lib/components/common/flexbox/index.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var DraftLinkPrompt = function DraftLinkPrompt(_ref) {
  var _errors$url, _errors$url2;

  var open = _ref.open,
      confirmHandler = _ref.confirmHandler,
      cancelHandler = _ref.cancelHandler,
      currentSelectionURL = _ref.currentSelectionURL,
      customRef = _ref.customRef;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    mode: 'all',
    defaultValues: {
      url: ''
    }
  }),
      register = _useForm.register,
      errors = _useForm.formState.errors,
      handleSubmit = _useForm.handleSubmit,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!currentSelectionURL) {
      reset({
        url: ''
      });
    } else {
      reset({
        url: currentSelectionURL
      });
    }
  }, [currentSelectionURL]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_feature_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    customRef: customRef,
    onFocus: function onFocus(event) {
      return event.stopPropagation();
    },
    visible: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].draftLinkPrompt)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('text-2xl', 'font-bold', 'text-gray-900', 'mb-4')
  }, "\u8ACB\u8F38\u5165\u9023\u7D50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({}, register('url', {
    validate: function validate(value) {
      var _Joi$string$uri$valid;

      return value && value.length !== 0 && (_Joi$string$uri$valid = joi__WEBPACK_IMPORTED_MODULE_4___default().string().uri().validate(value)) !== null && _Joi$string$uri$valid !== void 0 && _Joi$string$uri$valid.error ? '請輸入正確的網址連結格式。' : undefined;
    }
  }), {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].draftLinkPrompt__input)
  })), ((_errors$url = errors.url) === null || _errors$url === void 0 ? void 0 : _errors$url.message) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].draftLinkPrompt__error)
  }, (_errors$url2 = errors.url) === null || _errors$url2 === void 0 ? void 0 : _errors$url2.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_flexbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].draftLinkPrompt__btnGroup)
  }, !!currentSelectionURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return confirmHandler('');
    },
    type: 'button',
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].draftLinkPrompt__unlinkBtn)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: cancelHandler,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].draftLinkPrompt__btn, _draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["draftLinkPrompt__btn--accept"])
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: handleSubmit(function (_ref2) {
      var url = _ref2.url;
      return confirmHandler(url);
    }),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].draftLinkPrompt__btn, _draftLinkPrompt_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["draftLinkPrompt__btn--denied"])
  }, "\u78BA\u5B9A"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DraftLinkPrompt);

/***/ }),

/***/ "./src/lib/lib/draft/component/feature/draftLinkPrompt/index.tsx":
/*!***********************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/draftLinkPrompt/index.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _draftLinkPrompt__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _draftLinkPrompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draftLinkPrompt */ "./src/lib/lib/draft/component/feature/draftLinkPrompt/draftLinkPrompt.tsx");


/***/ }),

/***/ "./src/lib/lib/draft/component/feature/toolbar/index.tsx":
/*!***************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/toolbar/index.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _toolbar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar */ "./src/lib/lib/draft/component/feature/toolbar/toolbar.tsx");


/***/ }),

/***/ "./src/lib/lib/draft/component/feature/toolbar/toolbar.tsx":
/*!*****************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/toolbar/toolbar.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar.module.scss */ "./src/lib/lib/draft/component/feature/toolbar/toolbar.module.scss");
/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../assets/icons/align_center.svg */ "./src/lib/assets/icons/align_center.svg");
/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/icons/align_left.svg */ "./src/lib/assets/icons/align_left.svg");
/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../assets/icons/align_right.svg */ "./src/lib/assets/icons/align_right.svg");
/* harmony import */ var _assets_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/icons/caret_down.svg */ "./src/lib/assets/icons/caret_down.svg");
/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../assets/icons/link.svg */ "./src/lib/assets/icons/link.svg");
/* harmony import */ var _assets_icons_text_bold_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../assets/icons/text_bold.svg */ "./src/lib/assets/icons/text_bold.svg");
/* harmony import */ var _assets_icons_text_color_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../assets/icons/text_color.svg */ "./src/lib/assets/icons/text_color.svg");
/* harmony import */ var _assets_icons_text_italic_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../assets/icons/text_italic.svg */ "./src/lib/assets/icons/text_italic.svg");
/* harmony import */ var _assets_icons_text_underline_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../assets/icons/text_underline.svg */ "./src/lib/assets/icons/text_underline.svg");
/* harmony import */ var _assets_icons_un_order_list_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../assets/icons/un_order_list.svg */ "./src/lib/assets/icons/un_order_list.svg");
/* harmony import */ var _assets_icons_order_list_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../assets/icons/order_list.svg */ "./src/lib/assets/icons/order_list.svg");
/* harmony import */ var _hooks_useAsyncPrompt_useAsyncPrompt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../hooks/useAsyncPrompt/useAsyncPrompt */ "./src/lib/hooks/useAsyncPrompt/useAsyncPrompt.ts");
/* harmony import */ var _hooks_useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../hooks/useInteractiveOutsideTargetHandler */ "./src/lib/hooks/useInteractiveOutsideTargetHandler/index.ts");
/* harmony import */ var _inlineStyle_inlineStyle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../inlineStyle/inlineStyle */ "./src/lib/lib/draft/inlineStyle/inlineStyle.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../utils */ "./src/lib/utils/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/lib/utils/utils.ts");
/* harmony import */ var _draftLinkPrompt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../draftLinkPrompt */ "./src/lib/lib/draft/component/feature/draftLinkPrompt/index.tsx");
/* harmony import */ var _components_common_flexbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../components/common/flexbox */ "./src/lib/components/common/flexbox/index.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
























// const toolbar: React.FC<ReadOnlyToolBarProps | ToolBarProps> = ({ editorState, setEditorState, containerEl, styleType, readOnly }) => {
var Toolbar = function Toolbar(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState,
      containerEl = _ref.containerEl,
      styleType = _ref.styleType,
      readOnly = _ref.readOnly,
      focusing = _ref.focusing,
      promptRef = _ref.promptRef,
      fixed = _ref.fixed;
  var toolbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var axisCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // toolbar Position

  var axis = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_18__.isNotSet)(containerEl)) return null;
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_18__.isNotSet)(toolbarRef.current)) return null;
    if (readOnly) return null;
    if (fixed) return null;
    var currentSelection = document.getSelection();
    var currentSelectionRangeCount = currentSelection === null || currentSelection === void 0 ? void 0 : currentSelection.rangeCount;
    var currentSelectedDOM = currentSelectionRangeCount && currentSelectionRangeCount > 0 ? currentSelection === null || currentSelection === void 0 ? void 0 : currentSelection.getRangeAt(0) : null;
    var currentSelectedDOMBoundingRect = currentSelectedDOM === null || currentSelectedDOM === void 0 ? void 0 : currentSelectedDOM.getBoundingClientRect();
    var containerBoundingRect = containerEl.getBoundingClientRect();
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_18__.isNotSet)(currentSelectedDOMBoundingRect)) return null; // const containerTop = containerBoundingRect.top

    var containerLeft = containerBoundingRect.left;
    var selectionTop = currentSelectedDOMBoundingRect.top;
    var selectionLeft = currentSelectedDOMBoundingRect.left;
    if (selectionLeft === 0 && selectionTop === 0) return axisCache.current;
    var selectionHeight = currentSelectedDOMBoundingRect.height + 8; // 8 is offset;

    var containerWidth = containerEl.clientWidth;
    var toolbarWidth = toolbarRef.current.scrollWidth;
    var toolbarHeight = toolbarRef.current.scrollHeight + 8; // 8 is offset;
    // keep toolbar stay in editor

    var x = selectionLeft + toolbarWidth < containerLeft + containerWidth ? selectionLeft : containerLeft + containerWidth - toolbarWidth;
    var y = selectionTop - toolbarHeight > 0 ? selectionTop - toolbarHeight : selectionTop + selectionHeight + toolbarHeight;
    axisCache.current = {
      x: x,
      y: y
    };
    return {
      x: x,
      y: y
    }; // eslint-disable-next-line
  }, [// eslint-disable-next-line react-hooks/exhaustive-deps
  editorState.getSelection().getAnchorOffset(), // eslint-disable-next-line react-hooks/exhaustive-deps
  editorState.getSelection().getAnchorKey(), readOnly]); // URL Prompt

  var _useAsyncPrompt = (0,_hooks_useAsyncPrompt_useAsyncPrompt__WEBPACK_IMPORTED_MODULE_15__["default"])(),
      isAsyncPromptOpen = _useAsyncPrompt.isAsyncPromptOpen,
      prompt = _useAsyncPrompt.prompt,
      handleClose = _useAsyncPrompt.handleClose,
      handleConfirm = _useAsyncPrompt.handleConfirm;

  var isSelectionInLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var selection = editorState.getSelection();
    var entities = (0,_utils__WEBPACK_IMPORTED_MODULE_18__.getEntitiesFromSelection)(editorState, 'LINK');
    var entity = entities.find(function (_ref2) {
      var start = _ref2.start,
          end = _ref2.end,
          blockKey = _ref2.blockKey;
      return (0,_utils__WEBPACK_IMPORTED_MODULE_18__.isSelectionInRange)(selection, {
        start: start,
        end: end,
        blockKey: blockKey
      });
    });
    return {
      entity: entity,
      inLink: !!entity
    };
  }, [editorState]);
  if (readOnly || !focusing && !fixed) return null; // Style Handler

  var italicStyleHandler = function italicStyleHandler() {
    setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  var boldStyleHandler = function boldStyleHandler() {
    setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  var underlineStyleHandler = function underlineStyleHandler() {
    setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  var unOrderListHandler = function unOrderListHandler() {
    setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };

  var orderListHandler = function orderListHandler() {
    setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };

  var linkAttributeHandler = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url, entity, entitySelection;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return prompt();

            case 2:
              url = _context.sent;

              if (!(url === false)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              if (!isSelectionInLink.inLink) {
                _context.next = 13;
                break;
              }

              entity = isSelectionInLink.entity;

              if (entity) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return");

            case 9:
              entitySelection = (0,_utils__WEBPACK_IMPORTED_MODULE_18__.getSelectionStateByRange)(editorState, entity);

              if (url.length === 0) {
                setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleLink(editorState, entitySelection, null));
              } else {
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_19__.editLinkEntity)(editorState, {
                  entityKey: entity.entityKey,
                  url: url,
                  selectionState: entitySelection
                });
              }

              _context.next = 18;
              break;

            case 13:
              if (!(url.length === 0)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return");

            case 17:
              setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState((0,_utils__WEBPACK_IMPORTED_MODULE_18__.createLinkEntity)(editorState, url));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function linkAttributeHandler() {
      return _ref3.apply(this, arguments);
    };
  }();

  var selection = editorState.getSelection();
  var currentBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
  var blockType = currentBlock.getType(); // const currentInlineStyle = currentBlock.getInlineStyleAt(selection.getAnchorOffset())
  // console.log(currentInlineStyle.map(style => console.log(style)))

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_draftLinkPrompt__WEBPACK_IMPORTED_MODULE_20__["default"], {
    customRef: promptRef,
    open: isAsyncPromptOpen,
    confirmHandler: handleConfirm,
    cancelHandler: function cancelHandler() {
      return handleClose(false);
    },
    currentSelectionURL: (0,_utils__WEBPACK_IMPORTED_MODULE_18__.getURLFromLinkEntity)(isSelectionInLink.entity)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_flexbox__WEBPACK_IMPORTED_MODULE_21__["default"], {
    customRef: toolbarRef,
    style: {
      top: axis === null || axis === void 0 ? void 0 : axis.y,
      left: axis === null || axis === void 0 ? void 0 : axis.x,
      display: (0,_utils__WEBPACK_IMPORTED_MODULE_18__.isFalse)(fixed) && (0,_utils__WEBPACK_IMPORTED_MODULE_18__.isNotSet)(axis) ? 'none' : undefined
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar, fixed ? _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__fixed : _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__float, (0,_utils__WEBPACK_IMPORTED_MODULE_18__.isNotSet)(axis) && !fixed && _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__hidden)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: italicStyleHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_text_italic_svg__WEBPACK_IMPORTED_MODULE_11__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: boldStyleHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_text_bold_svg__WEBPACK_IMPORTED_MODULE_9__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: underlineStyleHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_text_underline_svg__WEBPACK_IMPORTED_MODULE_12__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__divider)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ColorPicker, {
    colorHandler: function colorHandler(color) {
      return setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleInlineStyle(editorState, color));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__divider)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__link, isSelectionInLink.inLink && _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["toolbar__link--active"]),
    onClick: linkAttributeHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_8__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__divider)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextAlignmentPicker, {
    textAlignHandler: function textAlignHandler(alignType) {
      return setEditorState === null || setEditorState === void 0 ? void 0 : setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleBlockType(editorState, "".concat(styleType, "-").concat(alignType)));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__divider)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: unOrderListHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_un_order_list_svg__WEBPACK_IMPORTED_MODULE_13__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn, blockType === 'unordered-list-item' && _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["toolbar__iconBtn--active"])
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: orderListHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_order_list_svg__WEBPACK_IMPORTED_MODULE_14__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn, blockType === 'ordered-list-item' && _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["toolbar__iconBtn--active"])
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toolbar);

var ColorPicker = function ColorPicker(_ref4) {
  var colorHandler = _ref4.colorHandler;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_hooks_useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_16__["default"])(ref.current, function () {
    return setIsOpen(false);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].colorPicker)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: function onClick() {
      return setIsOpen(function (prev) {
        return !prev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_text_color_svg__WEBPACK_IMPORTED_MODULE_10__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].fadeInContainer, isOpen && _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].fadeInContainer__active)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_flexbox__WEBPACK_IMPORTED_MODULE_21__["default"], {
    wrap: 'wrap',
    justify: 'start',
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].colorPicker__container)
  }, Object.keys(_inlineStyle_inlineStyle__WEBPACK_IMPORTED_MODULE_17__.colorMap).map(function (color) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: 'button',
      key: color,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].colorPicker__iconBtn),
      style: {
        backgroundColor: _inlineStyle_inlineStyle__WEBPACK_IMPORTED_MODULE_17__.colorMap[color].color
      },
      onClick: function onClick() {
        colorHandler(color);
        setIsOpen(false);
      }
    });
  }))));
};

var TEXT_ALIGNMENT_BUTTON = [{
  type: 'left',
  icon: _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent
}, {
  type: 'center',
  icon: _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_4__.ReactComponent
}, {
  type: 'right',
  icon: _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_6__.ReactComponent
}];

var TextAlignmentPicker = function TextAlignmentPicker(_ref5) {
  var textAlignHandler = _ref5.textAlignHandler;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_hooks_useInteractiveOutsideTargetHandler__WEBPACK_IMPORTED_MODULE_16__["default"])(ref.current, function () {
    return setIsOpen(false);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: 'button',
    onClick: function onClick() {
      return setIsOpen(function (prev) {
        return !prev;
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textAlignmentPicker__toggleBtn)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].toolbar__iconBtn)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_7__.ReactComponent, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].fadeInContainer, isOpen && _toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].fadeInContainer__active)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_flexbox__WEBPACK_IMPORTED_MODULE_21__["default"], {
    direction: 'col',
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textAlignmentPicker__container)
  }, TEXT_ALIGNMENT_BUTTON.map(function (align) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: 'button',
      key: align.type,
      onClick: function onClick() {
        return textAlignHandler(align.type);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_toolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textAlignmentPicker__targetBtn)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(align.icon, null));
  }))));
};

/***/ }),

/***/ "./src/lib/lib/draft/decorator/index.tsx":
/*!***********************************************!*\
  !*** ./src/lib/lib/draft/decorator/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decorator": () => (/* binding */ decorator)
/* harmony export */ });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var findLinkEntities = function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

var DraftLink = function DraftLink(_ref) {
  var contentState = _ref.contentState,
      entityKey = _ref.entityKey,
      children = _ref.children;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      url = _contentState$getEnti.url;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: url,
    style: {
      color: '#16C0C0',
      textDecoration: 'underline'
    },
    title: url,
    rel: 'noreferrer noopener',
    target: '_blank'
  }, children);
};

var decorator = new draft_js__WEBPACK_IMPORTED_MODULE_0__.CompositeDecorator([{
  strategy: findLinkEntities,
  component: DraftLink
}]);

/***/ }),

/***/ "./src/lib/lib/draft/inlineStyle/inlineStyle.ts":
/*!******************************************************!*\
  !*** ./src/lib/lib/draft/inlineStyle/inlineStyle.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockStyle": () => (/* binding */ getBlockStyle),
/* harmony export */   "styleMap": () => (/* binding */ styleMap),
/* harmony export */   "colorMap": () => (/* binding */ colorMap),
/* harmony export */   "customStyleMap": () => (/* binding */ customStyleMap)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/lib/utils/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getBlockStyle(defaultType) {
  return function (block) {
    var type = block.getType();

    if (type === 'unstyled' || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isNotSet)(type)) {
      type = defaultType || 'unstyled';
    }

    switch (type) {
      case 'blockquote':
        return 'RichEditor-blockquote';

      case 'left':
        return 'draft-align-left';

      case 'center':
        return 'draft-align-center';

      case 'right':
        return 'draft-align-right';
      // Primary Heading

      case 'primary-heading':
        return 'draft-primary-heading';

      case 'primary-heading-left':
        return 'draft-primary-heading draft-align-left';

      case 'primary-heading-center':
        return 'draft-primary-heading draft-align-center';

      case 'primary-heading-right':
        return 'draft-primary-heading draft-align-right';
      // Secondary Heading

      case 'secondary-heading':
        return 'draft-secondary-heading';

      case 'secondary-heading-left':
        return 'draft-secondary-heading draft-align-left';

      case 'secondary-heading-center':
        return 'draft-secondary-heading draft-align-center';

      case 'secondary-heading-right':
        return 'draft-secondary-heading draft-align-right';
      // Primary Body

      case 'primary-body':
        return 'draft-primary-body';

      case 'primary-body-left':
        return 'draft-primary-body draft-align-left';

      case 'primary-body-center':
        return 'draft-primary-body draft-align-center';

      case 'primary-body-right':
        return 'draft-primary-body draft-align-right';
      // Secondary Body

      case 'secondary-body':
        return 'draft-secondary-body';

      case 'secondary-body-left':
        return 'draft-secondary-body draft-align-left';

      case 'secondary-body-center':
        return 'draft-secondary-body draft-align-center';

      case 'secondary-body-right':
        return 'draft-secondary-body draft-align-right';
      // // List
      // case 'unordered-list-item':
      //   return 'draft-unordered-list'
      // case 'ordered-list-item':
      //   return 'draft-ordered-list'

      default:
        return defaultType || '';
    }
  };
}
var styleMap = {};
var colorMap = {
  PRIMARY_RED_1: {
    color: '#DF3232' // EWC Red

  },
  PRIMARY_RED_2: {
    color: '#C62829' // EWC Red2

  },
  PRIMARY_RED_3: {
    color: '#F3BBBB' // EWC Red3

  },
  PRIMARY_RED_4: {
    color: '#FFF4F4' // EWC Lavenderblush

  },
  SECONDARY_GREEN_1: {
    color: '#16C0C0' // EWC Green

  },
  SECONDARY_GREEN_2: {
    color: '#0FA0A0' // EWC Green2

  },
  SECONDARY_GREEN_3: {
    color: '#7FDCDC' // EWC Green3

  },
  SECONDARY_GREEN_4: {
    color: '#E3F2F5' // EWC Mintcream

  },
  GRAY_1: {
    color: '#515151' // EWC Gray (Midnight)

  },
  GRAY_2: {
    color: '#636363' // EWC Gray (Dark Gray)

  },
  GRAY_3: {
    color: '#C2C2C2' // EWC Gray (Medium Gray)

  },
  GRAY_4: {
    color: '#ECECEC' // EWC Gray (Gray)

  },
  GRAY_5: {
    color: '#F4F4F4' // EWC Gray (Light Gray)

  },
  BLACK_1: {
    color: '#282828' // EWC Black2 (Tints)

  },
  BLACK_2: {
    color: '#333333' // EWC BG Dark (Background – Dark)

  },
  WHITE_1: {
    color: '#FFFFFF' // EWC White

  },
  WHITE_2: {
    color: '#FBFBFB' // EWC BG Light

  }
};
var customStyleMap = _objectSpread(_objectSpread({}, colorMap), styleMap);

/***/ }),

/***/ "./src/lib/utils/dataHandler.ts":
/*!**************************************!*\
  !*** ./src/lib/utils/dataHandler.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepClone": () => (/* binding */ deepClone)
/* harmony export */ });
var deepClone = function deepClone(data) {
  return JSON.parse(JSON.stringify(data));
};

/***/ }),

/***/ "./src/lib/utils/domHelper.ts":
/*!************************************!*\
  !*** ./src/lib/utils/domHelper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScrollableParent": () => (/* binding */ getScrollableParent)
/* harmony export */ });
var getScrollableParent = function getScrollableParent(node) {
  if (node === null) return null;
  var scrollHeight = node.scrollHeight,
      clientHeight = node.clientHeight;

  if (scrollHeight > clientHeight) {
    return node;
  } else {
    return getScrollableParent(node.parentElement);
  }
};

/***/ }),

/***/ "./src/lib/utils/editorUtil.ts":
/*!*************************************!*\
  !*** ./src/lib/utils/editorUtil.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToServerData": () => (/* binding */ convertToServerData),
/* harmony export */   "convertFromServerData": () => (/* binding */ convertFromServerData),
/* harmony export */   "cloneEditorData": () => (/* binding */ cloneEditorData),
/* harmony export */   "convertEditorStateToServerData": () => (/* binding */ convertEditorStateToServerData),
/* harmony export */   "convertServerDataToEditorState": () => (/* binding */ convertServerDataToEditorState),
/* harmony export */   "isEditorEmpty": () => (/* binding */ isEditorEmpty)
/* harmony export */ });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_draft_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/draft/decorator */ "./src/lib/lib/draft/decorator/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/lib/utils/index.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var convertToServerData = function convertToServerData(editorData) {
  var result = [];
  editorData === null || editorData === void 0 ? void 0 : editorData.forEach(function (data) {
    if (data.type === 'editor') {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNotSet)(data.content)) return;
      result.push(_objectSpread(_objectSpread({}, data), {}, {
        content: convertEditorStateToServerData(data.content)
      }));
    } else {
      result.push(data);
    }
  });
  return result;
};
var convertFromServerData = function convertFromServerData(serverData) {
  var result = [];
  serverData === null || serverData === void 0 ? void 0 : serverData.forEach(function (data) {
    if (data.type === 'editor') {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNotSet)(data.content)) return;
      result.push(_objectSpread(_objectSpread({}, data), {}, {
        content: convertServerDataToEditorState(data.content)
      }));
    } else {
      result.push(data);
    }
  });
  return result;
};
var cloneEditorData = function cloneEditorData(editorData) {
  return editorData.map(function (data) {
    return _objectSpread(_objectSpread({}, data), {}, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()
    });
  });
};
var convertEditorStateToServerData = function convertEditorStateToServerData(editorState) {
  return (0,draft_js__WEBPACK_IMPORTED_MODULE_0__.convertToRaw)(editorState.getCurrentContent());
};
var convertServerDataToEditorState = function convertServerDataToEditorState(data) {
  try {
    return draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.createWithContent((0,draft_js__WEBPACK_IMPORTED_MODULE_0__.convertFromRaw)(data), _lib_draft_decorator__WEBPACK_IMPORTED_MODULE_1__.decorator);
  } catch (e) {
    return draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.createEmpty(_lib_draft_decorator__WEBPACK_IMPORTED_MODULE_1__.decorator);
  }
};
var isEditorEmpty = function isEditorEmpty(editorState) {
  console.log(editorState);
  if (editorState === null) return false;
  console.log(editorState.getCurrentContent().hasText());
  return editorState.getCurrentContent().hasText();
};

/***/ }),

/***/ "./src/lib/utils/formatChecker.ts":
/*!****************************************!*\
  !*** ./src/lib/utils/formatChecker.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isNotSet": () => (/* binding */ isNotSet),
/* harmony export */   "isNotAllSet": () => (/* binding */ isNotAllSet),
/* harmony export */   "isAry": () => (/* binding */ isAry),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isNotEmptyArray": () => (/* binding */ isNotEmptyArray),
/* harmony export */   "isTrue": () => (/* binding */ isTrue),
/* harmony export */   "isFalse": () => (/* binding */ isFalse),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isEmptyString": () => (/* binding */ isEmptyString),
/* harmony export */   "isNotEmptyString": () => (/* binding */ isNotEmptyString),
/* harmony export */   "isNumber": () => (/* binding */ isNumber)
/* harmony export */ });
var isSet = function isSet(obj) {
  return obj !== null && obj !== undefined;
};
var isNotSet = function isNotSet(obj) {
  return obj === null || obj === undefined;
};
var isNotAllSet = function isNotAllSet(obj) {
  return obj.some(isNotSet);
};
var isAry = function isAry(ary) {
  return Array.isArray(ary);
};
var isEmptyArray = function isEmptyArray(ary) {
  return isAry(ary) && ary.length === 0;
};
var isNotEmptyArray = function isNotEmptyArray(ary) {
  return isAry(ary) && ary.length !== 0;
};
var isTrue = function isTrue(_boolean) {
  return _boolean === true;
};
var isFalse = function isFalse(_boolean2) {
  return _boolean2 === false;
};
var isString = function isString(str) {
  return typeof str === 'string';
};
var isEmptyString = function isEmptyString(str) {
  return isString(str) && str.length === 0;
};
var isNotEmptyString = function isNotEmptyString(str) {
  return isString(str) && str.length !== 0;
};
var isNumber = function isNumber(any) {
  return typeof any === 'number';
};

/***/ }),

/***/ "./src/lib/utils/index.ts":
/*!********************************!*\
  !*** ./src/lib/utils/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEntitiesFromSelection": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getEntitiesFromSelection),
/* harmony export */   "getCurrentLinkEntityFromEditorState": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentLinkEntityFromEditorState),
/* harmony export */   "getURLFromLinkEntity": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getURLFromLinkEntity),
/* harmony export */   "getSelectionStateByRange": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getSelectionStateByRange),
/* harmony export */   "createLinkEntity": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.createLinkEntity),
/* harmony export */   "isSelectionInRange": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isSelectionInRange),
/* harmony export */   "isAry": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isAry),
/* harmony export */   "isEmptyArray": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isEmptyArray),
/* harmony export */   "isEmptyString": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isEmptyString),
/* harmony export */   "isFalse": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isFalse),
/* harmony export */   "isNotAllSet": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isNotAllSet),
/* harmony export */   "isNotEmptyArray": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isNotEmptyArray),
/* harmony export */   "isNotEmptyString": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isNotEmptyString),
/* harmony export */   "isNotSet": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isNotSet),
/* harmony export */   "isNumber": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isNumber),
/* harmony export */   "isSet": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isSet),
/* harmony export */   "isString": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isString),
/* harmony export */   "isTrue": () => (/* reexport safe */ _formatChecker__WEBPACK_IMPORTED_MODULE_1__.isTrue),
/* harmony export */   "deepClone": () => (/* reexport safe */ _dataHandler__WEBPACK_IMPORTED_MODULE_2__.deepClone),
/* harmony export */   "cloneEditorData": () => (/* reexport safe */ _editorUtil__WEBPACK_IMPORTED_MODULE_3__.cloneEditorData),
/* harmony export */   "convertEditorStateToServerData": () => (/* reexport safe */ _editorUtil__WEBPACK_IMPORTED_MODULE_3__.convertEditorStateToServerData),
/* harmony export */   "convertFromServerData": () => (/* reexport safe */ _editorUtil__WEBPACK_IMPORTED_MODULE_3__.convertFromServerData),
/* harmony export */   "convertServerDataToEditorState": () => (/* reexport safe */ _editorUtil__WEBPACK_IMPORTED_MODULE_3__.convertServerDataToEditorState),
/* harmony export */   "convertToServerData": () => (/* reexport safe */ _editorUtil__WEBPACK_IMPORTED_MODULE_3__.convertToServerData),
/* harmony export */   "isEditorEmpty": () => (/* reexport safe */ _editorUtil__WEBPACK_IMPORTED_MODULE_3__.isEditorEmpty),
/* harmony export */   "getScrollableParent": () => (/* reexport safe */ _domHelper__WEBPACK_IMPORTED_MODULE_4__.getScrollableParent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/utils/utils.ts");
/* harmony import */ var _formatChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatChecker */ "./src/lib/utils/formatChecker.ts");
/* harmony import */ var _dataHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataHandler */ "./src/lib/utils/dataHandler.ts");
/* harmony import */ var _editorUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editorUtil */ "./src/lib/utils/editorUtil.ts");
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domHelper */ "./src/lib/utils/domHelper.ts");






/***/ }),

/***/ "./src/lib/utils/utils.ts":
/*!********************************!*\
  !*** ./src/lib/utils/utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLinkEntity": () => (/* binding */ createLinkEntity),
/* harmony export */   "editLinkEntity": () => (/* binding */ editLinkEntity),
/* harmony export */   "getEntitiesFromSelection": () => (/* binding */ getEntitiesFromSelection),
/* harmony export */   "isSelectionInRange": () => (/* binding */ isSelectionInRange),
/* harmony export */   "getCurrentLinkEntityFromEditorState": () => (/* binding */ getCurrentLinkEntityFromEditorState),
/* harmony export */   "getURLFromLinkEntity": () => (/* binding */ getURLFromLinkEntity),
/* harmony export */   "isNumberInRange": () => (/* binding */ isNumberInRange),
/* harmony export */   "isEqual": () => (/* binding */ isEqual),
/* harmony export */   "getSelectionStateByRange": () => (/* binding */ getSelectionStateByRange)
/* harmony export */ });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var createLinkEntity = function createLinkEntity(editorState, url) {
  if (url.length === 0) return editorState;
  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();

  if (selectionState.getStartOffset() === selectionState.getEndOffset()) {
    selectionState = getSelectionStateByRange(editorState, {
      start: selectionState.getAnchorOffset(),
      end: selectionState.getAnchorOffset() + 4
    });
    contentState = draft_js__WEBPACK_IMPORTED_MODULE_0__.Modifier.insertText(contentState, editorState.getSelection(), "Link", immutable__WEBPACK_IMPORTED_MODULE_1___default().OrderedSet(["INSERT"]));
  }

  var contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", {
    url: url
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var contentStateWithLink = draft_js__WEBPACK_IMPORTED_MODULE_0__.Modifier.applyEntity(contentStateWithEntity, selectionState, entityKey);
  var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.set(editorState, {
    currentContent: contentStateWithLink
  });
  return draft_js__WEBPACK_IMPORTED_MODULE_0__.RichUtils.toggleLink(newEditorState, selectionState, entityKey);
};
var editLinkEntity = function editLinkEntity(editorState, _ref) {
  var entityKey = _ref.entityKey,
      selectionState = _ref.selectionState,
      url = _ref.url;
  var content = editorState.getCurrentContent();
  return draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.set(editorState, {
    currentContent: content.replaceEntityData(entityKey, {
      url: url,
      selectionState: selectionState
    })
  });
};
var getEntitiesFromSelection = function getEntitiesFromSelection(editorState, entityType) {
  var content = editorState.getCurrentContent();
  var entities = [];
  content.getBlocksAsArray().forEach(function (block) {
    var selectedEntity = null;
    block.findEntityRanges(function (character) {
      if (character.getEntity() !== null) {
        var entity = content.getEntity(character.getEntity());
        if (editorState.getSelection().getStartKey() !== block.getKey() && editorState.getSelection().getEndKey() !== block.getKey()) return false;

        if (!entityType || entityType && entity.getType() === entityType) {
          selectedEntity = {
            entityKey: character.getEntity(),
            blockKey: block.getKey(),
            entity: content.getEntity(character.getEntity())
          };
          return true;
        }
      }

      return false;
    }, function (start, end) {
      entities.push(_objectSpread(_objectSpread({}, selectedEntity), {}, {
        start: start,
        end: end
      }));
    });
  });
  return entities;
};
var isSelectionInRange = function isSelectionInRange(selection, range) {
  var selectionStartAt = selection.getStartOffset();
  var selectionEndAt = selection.getEndOffset();
  var selectionStartKey = selection.getStartKey();
  var selectionEndKey = selection.getEndKey();
  var rangeStartAt = range.start;
  var rangeEndAt = range.end;
  var rangeKey = range.blockKey;
  if (!isEqual(selectionStartKey, rangeKey) && !isEqual(selectionEndKey, rangeKey)) return false;
  if (selectionStartAt !== selectionEndAt) return selectionStartAt === rangeStartAt && selectionEndAt === rangeEndAt;
  if (isNumberInRange(selectionStartAt, rangeStartAt, rangeEndAt) && isEqual(selectionStartKey, rangeKey)) return true;
  if (isNumberInRange(selectionEndAt, rangeStartAt, rangeEndAt) && isEqual(selectionEndKey, rangeKey)) return true;
  if (isNumberInRange(selectionStartAt, rangeStartAt, rangeEndAt) && isNumberInRange(selectionEndAt, rangeStartAt, rangeEndAt) && isEqual(selectionStartKey, selectionEndKey, rangeKey)) return true;
  return false;
};
var getCurrentLinkEntityFromEditorState = function getCurrentLinkEntityFromEditorState(editorState) {
  var entities = getEntitiesFromSelection(editorState, "LINK");
  if (entities.length === 0) return null;else return entities[0];
};
var getURLFromLinkEntity = function getURLFromLinkEntity(entity) {
  if (!entity) return null;
  if (entity.entity.getType() !== "LINK") return null;
  return entity.entity.getData().url;
};
var isNumberInRange = function isNumberInRange(number, start, end) {
  return start <= number && number <= end;
};
var isEqual = function isEqual() {
  var equal = false;

  for (var i = 1; i < arguments.length; i++) {
    var curr = JSON.stringify(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    var prev = JSON.stringify(i - 1 < 0 || arguments.length <= i - 1 ? undefined : arguments[i - 1]);
    if (curr === prev) equal = true;else return false;
  }

  return equal;
};
var getSelectionStateByRange = function getSelectionStateByRange(editorState, entity) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var selectionKey = selection.getAnchorKey();
  var block = content.getBlockForKey(selectionKey);
  var blockKey = block.getKey();
  return new draft_js__WEBPACK_IMPORTED_MODULE_0__.SelectionState({
    anchorOffset: entity.start,
    anchorKey: blockKey,
    focusOffset: entity.end,
    focusKey: blockKey,
    isBackward: false,
    hasFocus: selection.getHasFocus()
  });
};

/***/ }),

/***/ "./src/lib/assets/images/fake_img.jpg":
/*!********************************************!*\
  !*** ./src/lib/assets/images/fake_img.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fake_img.jpg");

/***/ }),

/***/ "./src/lib/announcementEditor.module.scss":
/*!************************************************!*\
  !*** ./src/lib/announcementEditor.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"announcementEditor":"sxyt37E6BDX6a3yZkx_j","announcementEditor__functionalWrapper":"xX40cbz8SuJlxNpxSBO8","announcementEditor__functionalWrapper--container":"w75wBHRHAHV6K94fIHVu","announcementEditor__functionalWrapper--btn":"JPL7qrmTJPFwf55KfVQ5","announcementEditor__functionalWrapper--divider":"As3zvcBN7gQitGrJ_brJ"});

/***/ }),

/***/ "./src/lib/components/common/flexbox/flexbox.module.scss":
/*!***************************************************************!*\
  !*** ./src/lib/components/common/flexbox/flexbox.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"flexbox":"_S9Sw6HC6cY8T2KFnZHn","flexbox__wrap":"m4jiQiD_4XEdUwnhNJU6","flexbox__nowrap":"VakDwcr2EC3E9w7PUhSg","flexbox__wrapReverse":"AsFXlR9NslvgWvCMvRjQ","flexbox__col":"Mv1eeCxnI5Puq6qD5K59","flexbox__row":"mPXhWTiKQSgcsJnsFoRm","flexbox__justifyStart":"_aNgwFmUQNRvyWdwY277","flexbox__justifyEnd":"f5wPJjAJGu9Tj_9iqgzG","flexbox__justifyCenter":"othtBEHbyiHuTPhOpG7m","flexbox__justifyBetween":"ArKVczmXgqiccczvmepl","flexbox__justifyAround":"kzIlCBpLlSZ952g0gm95","flexbox__justifyEvenly":"szgbptZg6DWItZduAXtm","flexbox__itemsStart":"zYfMAn0us9x4Xhi1XSgb","flexbox__itemsEnd":"jrgZb42ngi7KkQmELMd_","flexbox__itemsCenter":"gSOcg__a_43yL8qjHlVt","flexbox__itemsBaseline":"sTUDPc4YF0hlKD7DBTDj","flexbox__itemsStretch":"tFrp1KWgRLBsHndw4MF7","flexbox__expand":"vl_o_aWvWmZ2io0fvAtl"});

/***/ }),

/***/ "./src/lib/components/feature/attachmentSection/attachmentSection.module.scss":
/*!************************************************************************************!*\
  !*** ./src/lib/components/feature/attachmentSection/attachmentSection.module.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"attachmentSection":"Q8rUqRb0NhAu2APL6YKy","attachmentSection__header":"KOmHzXLFmFn9JfkSZteQ","attachmentSection__uploadBtn":"nlnY2byEat2v3Ovq8CbM","attachmentSection__content":"nPtz0jR3mCz59QMJXO9K","attachmentSection__removeBtn":"wV7oHscRDY8mP6gukDuJ","attachmentSection__attach":"n0Ih2n6WjPVgUCyBadwE","attachmentSection__download":"z76pNgfoYe3KoWWsLA6R"});

/***/ }),

/***/ "./src/lib/components/feature/image/image.module.scss":
/*!************************************************************!*\
  !*** ./src/lib/components/feature/image/image.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"image":"WVQz1fHWw884kTvAWV2O","image__placeholder":"crYOBR8S3HckhyTTxuLY","image__placeholder--hidden":"VqTBesjNb5KeSXdSA8qm","image__functional":"qpBRfgo2ZgGWzdw_f4Qo","image__functional--hidden":"PZOwJixfJbv2DiSIIzDa","image__functional--btn":"mrTc3PJnOJBz8RTCLyTO","image__functional--recommend":"HcCWfQsj0jwaekcty7Tk","image__preview--keepAspectRatio":"wwdLwQy4vbLEMtziKHj9","image__preview--image":"YgDjPOdt0z2Kuc4Y5JgW","image__preview--placeholder":"ZiDIyDNIDy6GOk4_ao94","imageSettle":"LDPviBf1hOvkxxCncmC_"});

/***/ }),

/***/ "./src/lib/components/feature/modal/modal.module.scss":
/*!************************************************************!*\
  !*** ./src/lib/components/feature/modal/modal.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modal":"aJBok2VUcmvcb4n4APZF","modal__defaultZindex":"usr9jUQve9VI48BEm4W7"});

/***/ }),

/***/ "./src/lib/components/feature/multiImage/multiImage.module.scss":
/*!**********************************************************************!*\
  !*** ./src/lib/components/feature/multiImage/multiImage.module.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"multiImage":"Dr993xMTVheDmmgRKte0","multiImage__contentBox":"J10HL4CmP2e6XUhsINpI","multiImage__image":"MBacRHFb6_gz4LI0fpNn","multiImage__textarea":"aOP6g6y3c9W_bWpSonGr","multiImage__textarea--title":"MIaSoaXTppfXdFFrOk5D","multiImage__textarea--body":"olLlYS0VmlgCai7PnzIw"});

/***/ }),

/***/ "./src/lib/lib/draft/blockRenderMap/blockRenderMap.module.scss":
/*!*********************************************************************!*\
  !*** ./src/lib/lib/draft/blockRenderMap/blockRenderMap.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"draft-list":"X0uA6L1Xj9ohI8ui6GVp","draft-list__un-order":"mgrPBq6EroQQ2MslTUEn","draft-list__order":"yebLkfphD4pmEEWE_xF_"});

/***/ }),

/***/ "./src/lib/lib/draft/component/feature/cEditor/cEditor.module.scss":
/*!*************************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/cEditor/cEditor.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cEditor":"W4jq_1dCj6VA2eQOjuuj","cEditor__container":"neMltSpRtfIp8hqXfVpN","cEditor__fixed":"IDHhXYtPLInTgNdIKUoO","cEditor__primary-heading":"u9W4eu95DyN_BvE23NVg","cEditor__secondary-heading":"J4MfrcW1KbuDGMFQrzbz","cEditor__primary-body":"Nsg3i26Pzy8cZwo42WIo","cEditor__secondary-body":"dK4sxaasTWpm9Jh0kxvK"});

/***/ }),

/***/ "./src/lib/lib/draft/component/feature/draftLinkPrompt/draftLinkPrompt.module.scss":
/*!*****************************************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/draftLinkPrompt/draftLinkPrompt.module.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"draftLinkPrompt":"LQ4JW5aDi7UQ1tLuNdAR","draftLinkPrompt__input":"Pyiuak0EA461j6G7G4Ce","draftLinkPrompt__error":"KoXA30yevGZDfKu77HkQ","draftLinkPrompt__btnGroup":"V7d7FNeOGKxUEA2Ut7pw","draftLinkPrompt__unlinkBtn":"K3EpOLZ9uTux1zbA8qv_","draftLinkPrompt__btn":"X0lXgCrkkHHezp7wEaVU","draftLinkPrompt__btn--accept":"nULDb9PSDboQnh_GpSZw","draftLinkPrompt__btn--denied":"b3bTjPWHIQmkENLDnhjP"});

/***/ }),

/***/ "./src/lib/lib/draft/component/feature/toolbar/toolbar.module.scss":
/*!*************************************************************************!*\
  !*** ./src/lib/lib/draft/component/feature/toolbar/toolbar.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"toolbar__float":"siJiCP31WPMMHn6GGvuK","toolbar__fixed":"NekXZC4R8USRIHTca4vZ","toolbar__hidden":"BwGatdS1HkryMtDXU8kJ","toolbar":"dKr6olf9hBXsfs8GzCj1","toolbar__iconBtn":"ybxu1r_wmdqnFjUXAnfw","toolbar__iconBtn--active":"e6Tj1AtmiJMVwECDDuB1","toolbar__divider":"qxzNxk7hiLOYKj8hMvpF","toolbar__link":"Q1VSvNHXCjaxdGOmxwzQ","toolbar__link--active":"qIbm353vKXFYbuqraOVI","colorPicker":"kR0jjIBpotEdqHsApXfZ","colorPicker__container":"APlFfcCtCJRTYED5FQLJ","colorPicker__iconBtn":"mWdRw5XkJmbaPim0Mr7P","fadeInContainer":"vRhqzLc9_mq3mWyl1B5c","fadeInContainer__active":"zqVmiZKpGyAl3bgQTDGE","textAlignmentPicker__toggleBtn":"SU1me29cw6YfSohVmqyA","textAlignmentPicker__container":"Bmvd4NQtoiLC5SNKLKsZ","textAlignmentPicker__targetBtn":"lZyk9yEtFfCrQi1We0kF"});

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_classnames__;

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_draft_js__;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_joi__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_hook_form__;

/***/ }),

/***/ "react-textarea-autosize":
/*!******************************************!*\
  !*** external "react-textarea-autosize" ***!
  \******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_textarea_autosize__;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_uuid__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/lib/index.tsx ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CEditor": () => (/* reexport safe */ _lib_draft_component_feature_cEditor_cEditor__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _announcementEditor__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "cloneEditorData": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.cloneEditorData),
/* harmony export */   "convertEditorStateToServerData": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.convertEditorStateToServerData),
/* harmony export */   "convertFromServerData": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.convertFromServerData),
/* harmony export */   "convertServerDataToEditorState": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.convertServerDataToEditorState),
/* harmony export */   "convertToServerData": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.convertToServerData),
/* harmony export */   "createLinkEntity": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createLinkEntity),
/* harmony export */   "deepClone": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.deepClone),
/* harmony export */   "getCurrentLinkEntityFromEditorState": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getCurrentLinkEntityFromEditorState),
/* harmony export */   "getEntitiesFromSelection": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getEntitiesFromSelection),
/* harmony export */   "getScrollableParent": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getScrollableParent),
/* harmony export */   "getSelectionStateByRange": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getSelectionStateByRange),
/* harmony export */   "getURLFromLinkEntity": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getURLFromLinkEntity),
/* harmony export */   "isAry": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isAry),
/* harmony export */   "isEditorEmpty": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isEditorEmpty),
/* harmony export */   "isEmptyArray": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isEmptyArray),
/* harmony export */   "isEmptyString": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isEmptyString),
/* harmony export */   "isFalse": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isFalse),
/* harmony export */   "isNotAllSet": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isNotAllSet),
/* harmony export */   "isNotEmptyArray": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isNotEmptyArray),
/* harmony export */   "isNotEmptyString": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isNotEmptyString),
/* harmony export */   "isNotSet": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isNotSet),
/* harmony export */   "isNumber": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isNumber),
/* harmony export */   "isSelectionInRange": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isSelectionInRange),
/* harmony export */   "isSet": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isSet),
/* harmony export */   "isString": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isString),
/* harmony export */   "isTrue": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isTrue)
/* harmony export */ });
/* harmony import */ var _lib_draft_component_feature_cEditor_cEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/draft/component/feature/cEditor/cEditor */ "./src/lib/lib/draft/component/feature/cEditor/cEditor.tsx");
/* harmony import */ var _announcementEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcementEditor */ "./src/lib/announcementEditor.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/lib/utils/index.ts");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map