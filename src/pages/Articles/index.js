import React, { Component } from 'react'
import { connect } from 'react-redux'

import ArticlesList from './components/ArticlesList'
import AddArticleForm from './components/AddArticleForm'
import styles from './styles.module.css'

class ArticlesPage extends Component {
  render() {
    return (
      <div className='row mt-5'>
        <div className='col-md-4 offset-md-1'>
          <h2 className={styles.title} >Articles</h2>
          <ArticlesList />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2 className={styles.title} >Add a new article</h2>
          <AddArticleForm />
        </div>
      </div>
    )
  }
}

export default connect()(ArticlesPage)
