import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

import { addArticle } from '../../../../actions'
import styles from './styles.module.css'

class AddArticleForm extends Component {
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
        <div>
          <label>Title</label>
          <input
            type='text'
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

AddArticleForm.propTypes = {
  addArticle: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

export default  connect(null, mapDispatchToProps)(AddArticleForm)
