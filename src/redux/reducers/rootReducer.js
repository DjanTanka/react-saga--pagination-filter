import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import  peopleReducer  from './peopleReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  people: peopleReducer
})

export default createRootReducer