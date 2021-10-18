import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../redux/reducers/rootReducer'
import rootSaga from './sagas/rootSaga'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
         // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )

  sagaMiddleware.run(rootSaga)

  return store
}
