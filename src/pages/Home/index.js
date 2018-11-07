import React from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css'

const HomePage = () => (
  <div>
    <h2 className={styles.title} >Home</h2>
    <p>Voici l'accueil</p>
  </div>
)

export default connect()(HomePage)
