"use strict";
/**
 * MIT License
 * Copyright (c) 2019 Elijah Mooring
 *
 * @license MIT
 * @author Elijah Mooring
 * @file https://github.com/Vehmloewff/shineup/blob/master/lib/attach-styles.js
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createStyles = exports.attachStyles = void 0;
var inject_1 = require("./inject");
var parse_1 = require("./parse");
var css_in_js_utils_1 = require("css-in-js-utils");
var autoprefixer_1 = __importDefault(require("autoprefixer"));
var postcss_1 = __importDefault(require("postcss"));
var attachStyles = function (styles, key) {
    if (styles === void 0) { styles = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var str, css;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!styles || typeof styles !== "object")
                        throw new Error("'styles' must be a defined object.");
                    if (!key || typeof key !== "string" || key.length < 1)
                        throw new Error("'key' must be a defined string and not be empty.");
                    str = "";
                    Object.keys(styles).forEach(function (key) {
                        str += key + "{" + css_in_js_utils_1.cssifyObject(styles[key]) + "}";
                    });
                    return [4 /*yield*/, postcss_1["default"]([
                            autoprefixer_1["default"]({
                                overrideBrowserslist: 'cover 99.5%'
                            }),
                        ]).process(str, { from: undefined, to: undefined })];
                case 1:
                    css = (_a.sent()).css;
                    inject_1.inject(css, key);
                    return [2 /*return*/];
            }
        });
    });
};
exports.attachStyles = attachStyles;
var createStyles = function (obj, key) {
    if (obj === void 0) { obj = {}; }
    if (key === void 0) { key = 'svelte'; }
    var _a = parse_1.parse(obj, key), css = _a.css, classes = _a.classes;
    var newParsed = {};
    var length = 0;
    for (var className in css) {
        var selector = "." + key + className;
        newParsed[selector] = css[className];
        length++;
    }
    classes.get = function (className) { return classes[className]; };
    exports.attachStyles(newParsed, key);
    if (length === 1 && classes["default"])
        return classes["default"];
    else
        return classes;
};
exports.createStyles = createStyles;
