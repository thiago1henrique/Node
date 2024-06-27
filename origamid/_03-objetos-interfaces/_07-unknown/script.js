"use strict";
function typeGuard(value) {
    if (typeof value === 'string')
        return value.toUpperCase();
    else if (typeof value === 'number')
        return value.toFixed();
}
console.log(typeGuard('thiago'));
console.log(typeGuard(34.98));
