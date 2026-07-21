import React, { useState } from 'react'
import './child.css'

const child = () => {
  const[title,settitle] = useState("")
  const[amount,setamount] = useState("")
  const [type, setType] = useState("");
  const[transcation,settranscation] = useState([])
  const addtranslation = () => {
  if(title === "" || amount === "" || type === ""
  )
  {
    alert("fill the inputs");
  }
  else{
   settranscation([
    ...transcation,{
      title,
      amount: Number(amount),
      type
    },
   ]);
   setamount("");
   settitle("");
   setType("");

}
  
  }
  return (
    <div className='child-container'>
        <div className="mini-container">

      
        <h1>Transcation</h1>
        <div className="inputs">
          <div>
  <label>Title</label>
            <input type="text" 
            value={title}
              onChange={(e) => settitle(e.target.value)}
/>
          </div>
          <div>
<label>Amount</label>
            <input type="text"
            value={amount} 
              onChange={(e) => setamount(e.target.value)}
/>
          </div>
             
        
            <label>Type</label>
   <div className="labbl">
    <label >
<input
  type="radio"
  name="type"
  value="Income"
  checked={type === "Income"}
  onChange={(e) => setType(e.target.value)}
/>
Income</label>
<label>
<input
  type="radio"
  name="type"
  value="Expense"
  checked={type === "Expense"}
  onChange={(e) => setType(e.target.value)}
/>
Expense</label>
          </div>     
        </div>
        <button onClick={addtranslation}>Add transcation Details</button>

     
        </div>
        <div className="showinput">
         {transcation.map((item, index) => (
  <div className="transaction-card" key={index}>
    <h3>{item.title}</h3>
    <p>Rs. {item.amount}</p>
    <p>{item.type}</p>
  </div>
))}
        </div>
    </div>
  )
}

export default child
