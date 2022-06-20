'use strict';


function getFibonacci(num) {

    function* getNumberFibonacci() {
        let a;
        let b;
        let current = a = b = 1;

        yield 1;

        while (true) {
            current = b;
            yield current;
            b = a + b;
            a = current;
        }
    }

    let fibonacci = getNumberFibonacci();
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(fibonacci.next().value);
    }
    return result;

}


function cacheEl(fn) {

    const cash = new Map();

    return function () {

        const arg = Array.from(arguments)[0];


        if (cash.has(arg)) {
            return cash.get(arg);
        }

        const result = fn.call(this, arg);

        cash.set(arg, result);

        return result;

    }

};


let callNumber = cacheEl(getFibonacci);
console.log(callNumber(7));
console.log(callNumber(7));
console.log(callNumber(8));
console.log(callNumber(11));












