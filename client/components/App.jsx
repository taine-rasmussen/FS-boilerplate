import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Home from './Home'
import whatWeDo from './Whatwedo'
import Fees from './Fees'
import bookingForm from './bookingForm'
import Staff from './Staff'
import Patron from './Patron'
import Clients from './Clients'

function App () {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route path='/' component={Header} />
      <Route exact path='/' component={Home} />
      <Route exact path='/whatwedo' component={whatWeDo} />
      <Route exact path='/fees' component={Fees} />
      <Route exact path='/bookingForm' component={bookingForm} />
      <Route exact path='/staff' component={Staff} />
      <Route exact path='/patron' component={Patron} />
      <Route exact path='/clients' component={Clients} />
    {/* <Route path='/' component={Register} />
    <Route path='/signin' component={SignIn} /> */}
    </>
  )
}


const mapStateToProps = (globalState) => {
  return {
    
  }
}


export default connect(mapStateToProps)(App)
