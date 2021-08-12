import React from 'react'
import { Link } from 'react-router-dom'

function fees () {
    return (
      <>
    <h1>TWO WEEK TRIAL</h1>

        <img src="./Images/Tegan.png" alt="Tegan"/>

        <p>
        We offer all students a two-week trial to give them a real taster for what Spotlight is all about. This will give the students the opportunity to find out if Spotlight is for them, and you, peace of mind that you are committing to something your child really enjoys. The cost of the two-week trial will be deducted from your full term’s fees if you wish to continue with the whole term.

        A 20% deposit is required to secure your child's place and provides you with a two-week trial.

        Sibling discount
        Should more than one child from a family attend, all subsequent children will receive a 10% discount.   
        </p>

        <Link to='/bookingForm'>
          <button >Book Here</button>
        </Link>

       <h1>UNIFORMS</h1>
       <p>
        If your child decides to commit to a full term with us, they will be required to wear the Spotlight uniform. 
        The uniform consists of a Spotlight T-shirt and any black pants that are suitable for dance and drama. 
        We also have available Spotlight hoodies and Spotlight folders which are optional. Uniform orders are placed during week 3 of each term. 
        To submit an order, please select the button below.
        </p>
        <Link to='/Uniform'>
          <button >Order Uniform Here</button>
        </Link>
        </>
    )}

    export default fees

