import React from 'react'
import { } from 'react-router-dom'

function  bookingForm () {
    return (
      <>


    <h1>Booking Form</h1>
    <form action="/my-handling-form-page" method="post">

    <label>First Name</label>
    <input type='text'/>
    <br></br>
    <label>Last Name</label>
    <input type='text'/>
    <br></br>
    <label>D.O.B</label>
    <input type='text'placeholder="eg: 19.11.1996"/>
    <br></br>
    <label>Age</label>
    <input type='text'/>
    <br></br>
    <label>Medical Needs</label>
    <textarea name="message" rows="10" cols="30"></textarea>
    <br></br>
    <label>Contact One Name</label>
    <input type='text'/>
    <br></br>
    <label>Contact One Number</label>
    <input type='text'/>
    <br></br>
    <label>Contact Two Name</label>
    <input type='text'/>
    <br></br>
    <label>Contact Two Number</label>
    <input type='text'/>
    <br></br>
    <label>Email</label>
    <input type='email'/>
    <br></br>
    <label>How did you hear about us?</label>
    <input type='text'/>
    <br></br>
  
</form>
    
    </>
    )}

    export default bookingForm