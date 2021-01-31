"use strict";
/**
 * MIT License
 * Copyright (c) 2019 Elijah Mooring
 *
 * @license MIT
 * @author Elijah Mooring
 * @file https://github.com/Vehmloewff/shineup/blob/master/lib/ready.js
 */
exports.__esModule = true;
exports.callOnReady = exports.ready = void 0;
var functions = [];
var isReady = false;
var ready = function () {
    isReady = true;
    functions.forEach(function (fn) { return fn(); });
};
exports.ready = ready;
var callOnReady = function (fn) {
    if (isReady)
        fn();
    else
        functions.push(fn);
};
exports.callOnReady = callOnReady;
