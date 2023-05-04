import React from 'react'
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from 'react-redux'
import {Increment, Reset,} from "./counterAction"
import "./Clicker.css"
import smajic from "./img/smajic.jpg"
const Clicker = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
   <div className='clicker'>
    <button className='increment' onClick={() => dispatch(Increment())}>Increment</button> 
    <Typography gutterBottom variant="h5" component="div">
    {counter}
              </Typography>
     <button className='reset' onClick={() => dispatch(Reset())}>Reset</button>

   </div>
  </div>
  )
}

export default Clicker