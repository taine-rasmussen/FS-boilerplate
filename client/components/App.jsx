import React from 'react'
import { connect } from 'react-redux'

//Components
import Header from './Header'


const apiKey = process.env.apiKey

function App () {
 

  return (
    <>
      <Header />
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    
  }
}

export default connect(mapStateToProps)(App)
