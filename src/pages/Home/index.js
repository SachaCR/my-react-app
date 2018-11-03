import React from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css'

const ConnectedHome = () => (
  <div>
    <h2 className={styles.title} >Home</h2>
    <p>Voici l'accueil</p>
  </div>
)

const Home = connect()(ConnectedHome)

export default Home
