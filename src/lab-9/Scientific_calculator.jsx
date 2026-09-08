import React, { useState } from 'react'

function Scientific_calculator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const addValue = (value) => {
    setResult('')
    setInput((current) => current + value)
  }

  const calculate = () => {
    try {
      setResult(String(Function(`"use strict"; return (${input})`)()))
    } catch {
      setResult('Error')
    }
  }

  const scientificOperation = (operation) => {
    const value = Number(input)
    if (Number.isNaN(value)) {
      setResult('Error')
      return
    }

    const operations = {
      sin: Math.sin(value * Math.PI / 180),
      cos: Math.cos(value * Math.PI / 180),
      tan: Math.tan(value * Math.PI / 180),
      sqrt: Math.sqrt(value),
      square: value ** 2,
    }
    setResult(String(operations[operation]))
  }

  const clear = () => {
    setInput('')
    setResult('')
  }

  return (
    <div
      style={{
        border: '2px solid #333',
        width: '300px',
        minHeight: '200px',
        padding: '10px',
      }}
    >
      <h2>Scientific Calculator</h2>
      <input
        type="text"
        value={result || input}
        readOnly
        style={{ width: '100%', boxSizing: 'border-box', marginBottom: '8px' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {['sin', 'cos', 'tan', 'sqrt'].map((operation) => (
          <button key={operation} onClick={() => scientificOperation(operation)}>{operation}</button>
        ))}
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'].map((value) => (
          <button key={value} onClick={() => addValue(value)}>{value}</button>
        ))}
        <button onClick={() => scientificOperation('square')}>x²</button>
        <button onClick={() => addValue(String(Math.PI))}>π</button>
        <button onClick={() => setInput((current) => current.slice(0, -1))}>DEL</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default Scientific_calculator
