// WAP in ReactJS to display the element if it has attribute called isDisplay to be true (using conditional rendering) (A)
import React from 'react'

function B1() {
  const isDisplay = true;
  return (
    <div>
     
      {isDisplay && <p>This element is displayed.</p>}
       {!isDisplay && <p>This element is not displayed.</p>}
     
      {isDisplay ? <p>This element is displayed.</p> : <p>This element is not displayed.</p>}
   
        {ifel(isDisplay)}

    </div>
  );
}
function ifel (isDisplay){
      if (isDisplay) {
            return<p>This element is displayed.</p>;
        } else {
         return<p>This element is not displayed.</p>;
        }
}

export default B1
