import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from '../../pages/Home'
import Articles from '../../pages/Articles'

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/articles'>Articles</Link>
          </li>
        </ul>
      </nav>

      <Route path='/' exact component={Home} />
      <Route path='/articles' component={Articles} />

    </div>
  </Router>
)

export default AppRouter