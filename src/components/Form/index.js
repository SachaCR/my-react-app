import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import { addArticle } from '../../actions/index'
import styles from './styles.module.css'

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title } = this.state
    const id = uuidv1()
    this.props.addArticle({ title, id })
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button className={styles.buttonForm} type='submit'>
          SAVE
        </button>
      </form>
    )
  }
}

ConnectedForm.propTypes = {
  addArticle: PropTypes.func,
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form