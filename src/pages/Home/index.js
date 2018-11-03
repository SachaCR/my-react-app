import React from 'react'
import { connect } from 'react-redux'

const ConnectedHome = () => (
  <div>
    <h2>Home</h2>
    <p>Voici l'accueil</p>
  </div>
)

const Home = connect()(ConnectedHome)

export default Home
