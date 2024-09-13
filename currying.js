//Currying
function foo(x){
    return (y) => {
        return x * y;
    }
    
  }
  
  const multiply8 = foo(8);
  const multiply9 = foo(9);
  
  console.log(multiply8(2));
  console.log(multiply8(3));
  console.log(multiply9(3));
  
  const result = foo(8)(4);
  
  console.log(result);
  
  