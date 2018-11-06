
import {
  ADD_ARTICLE,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_ARTICLES_BY_ID,
} from '../constants/action-types'

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article })

export const getArticles = () => {

  function getArticlesRequest() { return { type: GET_ARTICLES_REQUEST } }
  function getArticlesSuccess(data) { return { type: GET_ARTICLES_SUCCESS, payload: data } }
  function getArticlesFailure(err) { return { type: GET_ARTICLES_FAILURE, payload: err} }

  return (dispatch) => {
    dispatch(getArticlesRequest())

    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(res => {
        return res.json()
      })
      .then(data => {
        return dispatch(getArticlesSuccess(data))
      })
      .catch(err => {
        return dispatch(getArticlesFailure(err))
      })
  }

}

export const getArticleById = (id) => ({ type: GET_ARTICLES_BY_ID, payload: id })
