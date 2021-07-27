import React from 'react'


const Landing = ({setView}) => {
    
    const handleClick = () =>{
        setView(false)
    }


    return (
        <>
            <div className='landingContainer'>
                <div className='landingHeader'>
                    <h1>Welcome</h1>
                        <button 
                        className='landingBtn'
                        onClick={handleClick}>enter</button>
                </div>
            </div>
        </>
    )
}


export default Landing