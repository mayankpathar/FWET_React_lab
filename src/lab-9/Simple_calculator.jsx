import React, { useState } from 'react'
function SimpleCalc() {


    const [input, setInput] = useState("")
    const [result, setResult] = useState("")
    const handleClick = (value) => {
        setResult("")
        setInput((prev) => prev + value)
    }

    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1))
    }

    const handleClear = () => {
        setInput("")
        setResult("")
    }

    const handleCalculate =() => {
        const ans=eval(input)
        setResult(String(ans))
    }





    return (
        <>
   <style>{`
     .calculator {
       border: 2px solid #333;
       border-collapse: collapse;
       margin: 0 auto;
     }

     h1 {
       text-align: center;
     }

     .calculator input {
       width: 100%;
       box-sizing: border-box;
       text-align: center;
     }

     .calculator button {
       border: 2px solid #333;
       width: 50px;
       height: 50px;
     }
   `}</style>
   <h1>calculator</h1>
         
         <table className="calculator">
          <thead>
            <tr>
              <td colSpan={4}><input type="text" value={result||input} readOnly /></td>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td><button onClick={() => handleClick('7')}>7</button></td>
              <td><button onClick={() => handleClick('8')}>8</button></td>
              <td><button onClick={() => handleClick('9')}>9</button></td>
              <td><button onClick={() => handleClick('/')}>/</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleClick('4')}>4</button></td>
              <td><button onClick={() => handleClick('5')}>5</button></td>
              <td><button onClick={() => handleClick('6')}>6</button></td>
              <td><button onClick={() => handleClick('*')}>*</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleClick('1')}>1</button></td>
              <td><button onClick={() => handleClick('2')}>2</button></td>
              <td><button onClick={() => handleClick('3')}>3</button></td>
              <td><button onClick={() => handleClick('-')}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleClick('0')}>0</button></td>
              <td><button onClick={() => handleClick('.')}>.</button></td>
              <td><button onClick={handleClear}>C</button></td>
              <td><button onClick={handleCalculate}>=</button></td>
            </tr>
          </tbody>
         </table>
          
        </>
    )
}

export default SimpleCalc