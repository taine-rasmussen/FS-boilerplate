import React, { useState } from 'react'
import request from 'superagent'


const apiKey = process.env.API_KEY





const Input = () => {

    const [date, setDate] = useState('')

    function getData () {
        return request.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`)
          .then(res => {
            console.log(res.body.element_count)
          })
      }
    

    //Handle form input
    const handleInput = (e) => {
        setDate(e.target.value)
        console.log(date)
    }
    //Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
        console.log(apiKey)
    }

    return (
        <> 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Date: </label>
                    <input
                    type='text'
                    placeholder='YYYY-MM-DD'
                    onChange={(e) => handleInput(e)}
                    />
                <button>Search</button>    
            </form>
        </div>    
        </>
     )
}

export default Input