import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import socketMiddleware  from './socketMiddleware'

const store = createStore(
    rootReducer, 
    undefined,
    applyMiddleware(thunk, socketMiddleware)
)

export default store