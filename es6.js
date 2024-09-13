//ES6 Concepts

//Destructuring
//Array
const [x, y, z] = [8, 9, 10];
console.log(x, y, z);

//Object
const {city: renamedCity, state, country, continent = "Asia"} = {city: "Hyderabad", state: "Telangana", country: "India"}
console.log(renamedCity, state, country, continent);

//SPREAD Operator
const arr = [8, 5, 2];
const newArr = arr;
arr[1] = 10;
console.log(newArr, "This is newArr");

const newArr2 = [...arr];
arr[1] = 25;
console.log(newArr2, "This is newArr2");
 

//REST Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

function greatFunc(p, q, ...remaining){
  console.log(remaining);
}
greatFunc(1, 2, 3, 4, 5, 6);


//MAP
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'), "I am a MAP");


// String Literal
const firstName = "Mouleesh";
const lastName = "Guru"
const fullName = `${firstName} ${lastName}`
console.log(`${fullName} - This is a string literal example`);

