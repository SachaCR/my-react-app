import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getArticles, getArticleById } from '../../../../actions'

class ArticlesList extends Component{

  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() { this.props.getArticles() }

  componentWillReceiveProps(nextProps) {
    if (this.props.articles !== nextProps.articles) {
      this.setState({ articles: nextProps.articles })
    }
  }

  render() {
    return  (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    )
  }
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
  getArticles: PropTypes.func,
  getArticleById: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: () => dispatch(getArticles()),
    getArticleById: id => dispatch(getArticleById(id)),
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
