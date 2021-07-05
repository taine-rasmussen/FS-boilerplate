import React, { useState } from 'react'


//components
import Landing from './Landing'
import Menu from './Menu'




function App () {

  const [view, setView] = useState(true)
 
  return (
    <>
      {view ? <Landing setView={setView} /> : <Menu setView={setView} /> }
    </>
  )
}


export default App
