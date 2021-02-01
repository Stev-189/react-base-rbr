import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import * as reducers from '../reducers'// se crea un unuico archivo donde se exportan los reducer

const rootReducer = combineReducers(reducers)

export const store= createStore(rootReducer, applyMiddleware(thunk));