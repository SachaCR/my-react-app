import { ADD_ARTICLE, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from '../constants/action-types'

const initialState = {
  articles: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    case GET_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload }
    case GET_ARTICLES_FAILURE:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default rootReducer
