import React from 'react'
import List from '../../components/List'
import Form from '../../components/Form'
import styles from './styles.module.css'

const Articles = () => (
  <div className='row mt-5'>
    <div className='col-md-4 offset-md-1'>
      <h2 className={styles.title} >Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2 className={styles.title} >Add a new article</h2>
      <Form />
    </div>
  </div>
)

export default Articles
