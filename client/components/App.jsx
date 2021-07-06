import React, { useState } from 'react'
import { Router } from 'react-router-dom'

//components
import Landing from './Landing'
import Menu from './Menu'
import WY from './WY'
import Wellington from './Wellington'
import Travel from './Travel'
import Contact from './Contact'



function App () {

  const [view, setView] = useState(true)
 
  return (
    <>
      {view ? <Landing setView={setView} /> : <Menu setView={setView} /> }
      
      <Router path='/Wellington' component={Wellington} />
    </>
  )
}


export default App
