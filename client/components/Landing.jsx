import React from 'react'

const Landing = ({ setView }) => {

    const handleClick = (evt) => {
        setView(false)
      }
    
    return (
        <>
            <div className='landingWrapper'>
                <div className='landingHeader'>
                    <h1>Taine Rasmussen</h1>
                </div>
                <div className='landingBtnWrapper'>
                    <button className='landingBtn' onClick={handleClick}>Enter</button>
                </div>    
                <div>
                    <footer>icon links to profiles to go here</footer>
                </div>   
            </div>

        </>
    )
}


export default Landing

