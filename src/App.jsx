
import React, { useState, useEffect } from 'react';
import './App.scss'
import data from './data.json'
import Widgetorderstats from './components/Widgetorderstats';


function App() {
 const [orderstats, setorderstats] = useState()
  
 useEffect(() => {
   setorderstats (data) 
 }, [])
 
  return (
  <div>
    <h1>order stat</h1>
    {orderstats && <Widgetorderstats data={orderstats}/>}
  </div>
  )
}

export default App
