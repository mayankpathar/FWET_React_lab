import React from 'react'
import { useState } from 'react'
function Hideshowhook() {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <p>This is a simple text element.</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default Hideshowhook
