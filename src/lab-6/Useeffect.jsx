import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Useeffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [count]);
    return (
        <div>
            <h1>count= {count} </h1>
        </div>
    )
}

export default Useeffect
