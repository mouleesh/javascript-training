//Functions

//Declarative Functions
function sayHello(name){
    console.log("Hello " + name);
  }
  sayHello("Madhav");
  
  //Function Express
  const greet = function(name){
    console.log("Howdy " + name);
  }
  greet("Prakash");
  
  //Arrow function
  const drink = (type) => {
    console.log("I drank " + type)
  }
  
  drink("Milk");
  
  // IIFE & Anonymous Function
  (() => {
    console.log("I am an IIFE function");
  })();
  
  //Binding
  function greetUser(){
    console.log("Hello "+ this.user)
  }
  const obj = {
    user: "Guru"
  }
  const bindedGreet = greetUser.bind(obj);
  bindedGreet()
  

  //Call & Apply