"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isItAPrime = void 0;
const numberInput = 7;
const isItAPrime = (param) => {
    for (let i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
};
exports.isItAPrime = isItAPrime;
// isItAPrime(numberInput)
//   ? console.log(`${numberInput} é primo`)
//   : console.log(`${numberInput} não é primo`);
