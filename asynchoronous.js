
//Asynchronous Javascript
//setTimeout

function executeMe(){
    console.log("I am being called after a timeout");
  }
  
  setTimeout(executeMe, 500);
  
  for(var k=0; k<3; k++){
    setTimeout(() => {
      console.log(k)
    }, 1000)
  }
  
  //Callbacks
  
  const addOne = (number) => {
    return number + 1;
  }
  
  const addTwo = (number) => {
     return number + 2;
  }
  
  const addThree = (number) => {
    return number + 3;
  }
  
  function doOperation(){
    let result;
    result = addOne(0);
    result = addTwo(result)
    result = addThree(result)
    return result;
  }
  
  console.log(doOperation())
  
  //---------------------
  
  const addOneC = (number, callb) => {
    return callb(number+1)
  }
  
  const addTwoC = (number, callb) => {
    return callb(number + 2);
  }
  
  const addThreeC = (number) => {
    return number + 3
  }
  
  const outC = addOneC(0, (result) => {
    return addTwoC(result, (result) => {
      return addThreeC(result)
    })
  })
  
  console.log(outC);
  
  
  const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("Resolving with some data");
    }, 2000)
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am second Promise");
    }, 1000)
  })
  
  p1.then((data) => {
    console.log(data)
    // return data;
    return p2;
  }).then((d) => {
    console.log(d, "being Chained");
  }).catch(() => {
    console.log("rejected")
  });
  
  console.log(p1)
  


//Async Await
function delayedResolve() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('async resolved');
      }, 2000);
    });
  }
  
  async function asyncExample() {
    console.log('Before Async');
    const result = await delayedResolve();
    console.log(result);
    console.log('After Async');
    
  }
  
  asyncExample();