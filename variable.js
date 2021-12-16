// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// 변수: 변경될 수 있는 값
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'Jinnie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (dont't ever use this!)
// var hoisting
// has no block scope
console.log(age);
age = 4;
console.log(age);
var age;

// 3. Contant, r(read only)
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes

const dayInWeek = 7;
const maxNumber = 5; 

// Note!
// Immutable data types: premetive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class functions 

const count = 17; // integer 정수
const size = 17.1; // decimal number 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - specail numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // flase
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true 

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing: dynamically typed language

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);

// objext, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;
