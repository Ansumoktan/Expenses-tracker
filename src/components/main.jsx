import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './main.css'

const main = () => {
    const navigate = useNavigate();
const [balance, setBalance] = useState(() => {
  return Number(localStorage.getItem("balance")) || 0;});
  
    const[input,setinput] = useState("")
    const[inpt,setinpt] = useState("")
    const[transcat,settranscat] = useState([])
    const addtranscation = () => {
        if(input === "" || inpt === "")
        {
            console.log("please fill the input");
            alert("please fill the input");
            return
        }
        else{

            settranscat([
            ...transcat,
            {
                Income:input,
                Expanse :inpt
            },
        ]);
        setinput("");
        setinpt("");
       const newBalance = balance + Number(input) - Number(inpt);

setBalance(newBalance);

localStorage.setItem("balance", newBalance);
        navigate("/Child");
        }
        
    }
  return (
    <div className="color">
    <div className='main-container'>
        <h1>Expanse Tracker</h1>
        <div className="blc">
            <h2>Current Balance</h2>
            <p>RS.{balance}</p>
        </div>
         <div className="input-section">
            <div>
               <label>Income</label>
                <input type="text" placeholder='enter your income' 
                value={input}
                  onChange={(event) => setinput(event.target.value)}/>
               </div>
               <div>
                  <label >Expanse</label>
              <input type="text" placeholder='enter your expanses'
                 value={inpt}
                  onChange={(event) => setinpt(event.target.value)}/> 
               </div>
               
              <button onClick={addtranscation}>Add New Transcation</button>
            </div> 
            </div>
         

      
    </div>
  )
}

export default main
