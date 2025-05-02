import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <>
    <div className="body">
    <h1 id='hj' style={{fontSize:"50px"}}>welding shop</h1>
    <div className="n">
      <div className="sn">
      <h1>service quality</h1>
      <h3 id='d'>⭐⭐⭐⭐⭐</h3>
      </div>
      <h1>Timeliness of Work:</h1>
      <h3><input type="checkbox" /> Very Fast <input type="checkbox" /> On Time <input type="checkbox" /> Slight Delay <input type="checkbox" /> Major Delay</h3>
      <h1>Was the staff professional and helpful?</h1>
      <h3><input type="checkbox" />Yes <input type="checkbox" />Somewhat <input type="checkbox" /> No</h3>
      <h1>Are you satisfied with the weld quality and finish?</h1>
      <h3><input type="checkbox" /> Very Satisfied <input type="checkbox" /> Satisfied <input type="checkbox" /> Neutral <input type="checkbox" /> Dissatisfied</h3>
      <h1>Would you recommend us to others?</h1>
      <h3><input type="checkbox" /> Yes <input type="checkbox" /> No</h3>
    </div>
    </div>
    
    </>
  )
}

export default Contact