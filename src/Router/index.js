import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomePage from '../pages/Home'
import ArticlesPage from '../pages/Articles'

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

      <Route path='/' exact component={HomePage} />
      <Route path='/articles' component={ArticlesPage} />

    </div>
  </Router>
)

export default AppRouter