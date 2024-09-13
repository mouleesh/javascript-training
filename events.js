
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



  //The below HTMLs are required for the above js to work.

  

  
// <div style="background:blue; width:50px; height:50px; margin-bottom:10px"
//      onmouseenter="handleMouseEnter()" 
//      onmouseout="handleMouseOut()"
//      onmousemove="handleMouseMove(event)"
//      onclick="handleBlueBoxClick()"
//      ondblclick="handleDoubleClick()">
// </div>

// <input oninput="handleUserInput(event)"/>

// <!-- Bubbling -->
// <div style="width:150px; height:30px; background:green; margin-top:10px; padding: 5px 0px 0px 5px;" onclick="divClicked()">
//   <button onclick="buttonClicked(event)">Bubble Button</button>
// </div>

// <div id="parent-div" style="width:150px; height:30px; background:olive; margin-top:10px; padding: 5px 0px 0px 5px;">
//   <button id="child-button">Capturing Button</button>
// </div>


// <ul id="list">
//   <li>1</li>
//   <li>2</li>
// </ul>