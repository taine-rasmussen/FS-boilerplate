import React, { useState } from 'react'
import { connect } from 'react-redux'

//Components
import Header from './Header'
import Input from './Input'



function App () {
 
  return (
    <>
     <Header />
     <Input />
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    
  }
}

export default connect(mapStateToProps)(App)
