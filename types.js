const str = "country";
const num = 24;
const bol = true;
const arr = [str, num, bol];
const obj = {str, num, arr, bol};
const nul = null;
const und = undefined;
const fun = () => {};
const nan = NaN;
const pro = new Promise(() => {});



console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof nul); // object
console.log(typeof und); // undefined
console.log(typeof fun); // function
console.log(typeof nan); // number
console.log(typeof pro); // object
