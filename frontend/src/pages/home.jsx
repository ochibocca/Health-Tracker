import React, { useState } from "react";

import Navbar from"../components/navbar"
import Card from"../components/card"


function Home() {
  const [count , setCount]= useState(1)
  let nnn = "meaga ochieng"
  return (
    <header>
      <div>
        <h1>Hello World</h1>
      </div>
        <Navbar />
        <Card Name={"nnnnn"} description={"hhhhhe"}/>
         <Card Name={"reagan"} description={"ochieng"}/>
        <p>{count}</p>
        <button onClick={()=> setCount (count+1)}>jihiorj</button>
    </header>
  );
}

export default Home; 
