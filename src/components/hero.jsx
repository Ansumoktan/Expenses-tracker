import React from 'react'
 import { useNavigate } from 'react-router-dom';

const hero = () => {
      const navigate = useNavigate();
  return (
    <div className='container'>
        <div className="mid-sec">
<h1>Expanse   Tracker</h1>
      <button onClick={() => navigate("/Main")}>Open</button>
        </div>
    </div>
  )
}

export default hero
