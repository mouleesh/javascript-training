
//Events
function handleMouseEnter(){
    console.log("Mouse Entered")
  }
  
  function handleMouseOut(){
    console.log("Mouse Exited")
  }
  
  function handleMouseMove(e){
    console.log("Mouse Moving...", e.clientX, e.clientY);
  }
  
  function handleBlueBoxClick(){
    console.log("User Clicked On the Blue Box")
  }
  
  function handleDoubleClick(){
    console.log("User Double Clicked on the Blue Box")
  }
  
  function handleUserInput(ev){
    console.log(ev.target.value)
  }
  
  function buttonClicked(e){
    e.stopPropagation();
    console.log("Child Button is Clicked")
  }
  
  function divClicked(){
    console.log("Parent Div is Clicked")
  }
  
  const parentDiv = document.getElementById("parent-div");
  const childButton = document.getElementById("child-button");
  
  parentDiv.addEventListener('click', () => {
    console.log("Parent Div is Clicked");
  }, true)
  
  childButton.addEventListener('click', () => {
    console.log("Child Button is Clicked");
  })
  
  document.getElementById('list').addEventListener('click', function(e) {
    console.log(`You clicked on item: ${e.target.innerHTML}`);
  });
  
  