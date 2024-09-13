
//Loops

//While Loop
//Printing 1 to 10
let i = 0;
while(i < 10){
  i++;
  console.log(i);
}


const cities = ["Hyderabad", "Chennai", "Nellore", "Bangalore"];

//for Loop
for(let i=0; i < cities.length; i++){
  console.log("Printing from for Loop " + cities[i]);
}

//For Each Loop
function printCityName(c){
  console.log("Printing from forEach loop " + c);
}

cities.forEach(printCityName)

const year = [1994, 1995, 1996, 2001, 2002, 2004];
//.map
const newYear = year.map((y) => {
  return y + 5;
})
console.log(newYear);

//.filter
const filteredYear = year.filter((y) => {
  if(y > 2000){
    return true
  }
})

console.log(filteredYear);

//Object Looping
const india = {
  population: 150000,
  statesCount: 32,
  languages: ['Hindi', 'Telugu', 'Tamil', "Gujarati"],
};

console.log(india.statesCount)

for (let a in india){
  console.log(a, india[a]);
}


//Every loop example.
const ageArr = [3, 5, 7, 60, 75, 8];

let isOkay = false;

isOkay = ageArr.every(age => {
  if(age > 21){
  	return true;
  } else {
  	return false;
  }
})

console.log(isOkay);

if(isOkay){
	console.log("Bar is open");
} else {
	console.log("Bar is Closed because of minor");
}