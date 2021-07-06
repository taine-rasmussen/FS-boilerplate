import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router >
      <App />
    </Router>,
    document.getElementById('app')
  )
})
