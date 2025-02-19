"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    // do stuff
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // do stuff
};
addTwo(5);
getUpper('ildar');
signUpUser('Ildar', 'Ildar@', true);
loginUser('Ildar', 'Ildar@');
var getHello = function (s) {
    return '';
};
var heroes = ['thor', 'spiderman', 'ironman'];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
// function returns nothing
function consoleError(errmsg) {
    console.log(errmsg);
}
// function never returns a value
function handleError(errmsg) {
    throw new Error(errmsg);
}
