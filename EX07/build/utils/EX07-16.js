"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
var var1 = exports.var1 = 1000;
function add(a, b) {
    return a + b;
}
/*

같은 동작, 다른 방법

let var1 = 1000;
function add(a, b) {
    return a + b;
}
export { var1, add };

*/