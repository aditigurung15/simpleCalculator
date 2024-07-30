import React, { useState } from 'react'
import './App.css'

const App = () => {

const [input, setInput] = useState('')

const handlebutton=(value)=>{
  if (value==='c'){
    setInput("")
  }
  else if(value==='<'){
    setInput(input.slice(0, -1))
  }
  
  else if (value=== '='){
    setInput(eval(input))
  }

  else{
    setInput((preval)=> preval + value)
  }
}

  return (
    <div className='container'>
    <div className="calc">
    <h1 id='input'>{input}</h1>
    <div className="row">
   <div className="row1">
    <button type="button" onClick={()=>{handlebutton('c')}}>C</button>
    <button type="button" onClick={()=>{handlebutton('<')}}>AC</button>
    <button type="button" onClick={()=>{handlebutton('%')}}>%</button>
    <button type="button" onClick={()=>{handlebutton('/')}}>/</button>

   </div>

   <div className="row2">
   <button type="button" onClick={()=>{handlebutton('7')}}>7</button>
   <button type="button" onClick={()=>{handlebutton('8')}}>8</button>
   <button type="button" onClick={()=>{handlebutton('9')}}>9</button>
   <button type="button" onClick={()=>{handlebutton('*')}}>*</button>

   </div>

   <div className="row3">
   <button type="button" onClick={()=>{handlebutton('4')}}>4</button>
   <button type="button" onClick={()=>{handlebutton('5')}}>5</button>
   <button type="button" onClick={()=>{handlebutton('6')}}>6</button>
   <button type="button" onClick={()=>{handlebutton('-')}}>-</button>

   </div>

   <div className="row4">
   <button type="button" onClick={()=>{handlebutton('1')}}>1</button>
   <button type="button" onClick={()=>{handlebutton('2')}}>2</button>
   <button type="button" onClick={()=>{handlebutton('3')}}>3</button>
   <button type="button" onClick={()=>{handlebutton('*')}}>*</button>

   </div>

   <div className="row5">
   <button type="button" onClick={()=>{handlebutton('00')}}>00</button>
   <button type="button" onClick={()=>{handlebutton('0')}}>0</button>
   <button type="button" onClick={()=>{handlebutton('.')}}>.</button>
   <button type="button" onClick={()=>{handlebutton('=')}}>=</button>

</div>
   </div>
</div>
    </div>
  )
}

export default App