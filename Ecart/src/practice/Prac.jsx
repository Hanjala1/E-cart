import React, { useState } from 'react'
function Prac  ()  {
  return (
    <div className='App'>
      <HocRed cmp ={Counter}/>
      <HocGren cmp={Counter}/>
      <HocBlue cmp={Counter}/>
    </div>
  )
}
export default Prac
function HocRed(props){
  return<h4 style={{backgroundColor:'red',width:200,height:200}}><props.cmp />Red</h4>
}
function HocGren(props){
  return<h4 style={{backgroundColor:'green',width:200,height:200}}><props.cmp />Green</h4>
}
function HocBlue(props){
  return<h4 style={{backgroundColor:'blue',width:200,height:200}}><props.cmp />Blue</h4>
}

function Counter(){
  const [count,setCount]=useState(0)
  return(
    <div>
      <h3>Count:{count}</h3>
   <p>   <button onClick={()=>setCount(count+1)}>Click</button></p>
    </div>
  )
}
