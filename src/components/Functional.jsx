import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Functional = () => {
  const [state, setState] = useState('red')
  const inputRef = useRef()
  const [value, setValue] = useState('Value')
  const focus = () => {
    inputRef.current.focus()
  }
  //every render
  useEffect(() => {
    console.log('everyTime from functional');
  })
  //one time render
  useEffect(() => {
    console.log('oneTime from functional');
  }, [])
  //conditional render
  useEffect(() => {
    console.log('onChange from functional');
  }, [value])

  const handelChange = (e) => {
    setValue(e.target.value)
  }

  return (<div>
    <h1>Functional</h1>
    <h2>State</h2>
    <h3>I am a {state} Car!</h3>
    <h2>Ref</h2>
    <div>
      <input type='text' ref={inputRef} onChange={handelChange} />
      <button onClick={focus}>Focus</button>
    </div>
    <h2>Use Effect</h2>
    <h3>{value}</h3>
    <hr /></div>)
}

export default Functional