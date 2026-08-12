import React from 'react'

function handleClick(){
     alert("Button Clicked!");
}
function C1() {
  return (
    <div>
      <h1>React Event Handling</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
   }

export default C1