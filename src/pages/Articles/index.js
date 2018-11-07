import React, { Component } from 'react'

import ArticlesList from './components/ArticlesList'
import AddArticleForm from './components/AddArticleForm'
import styles from './styles.module.css'

class ArticlesPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className={styles.title} >Add a new article</h2>
          <AddArticleForm />
        </div>
        <div>
          <h2 className={styles.title} >Articles</h2>
          <ArticlesList />
        </div>
      </div>
    )
  }
}

export default ArticlesPage
