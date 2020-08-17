import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors, sort } from '../reducers/reducers'
import data from '../data/data'
import { logger, persistToLocal } from '../middleware/middleware'

/**
 * Composes the singular Redux store for the application, essentially representing
 * the authority over the application state. The store is constructed by providing
 * the various reducers of the application. The "state object" is then constructed
 * such that the keys are the names of the reducer functions themselves. For example,
 * the store created below will have "sort" and "colors" fields in the application
 * state.
 */

export const newStore = 
	(initialState=data) => {
		return applyMiddleware(logger, persistToLocal)(createStore)(
			combineReducers({colors, sort}),
			(localStorage['redux-store']) ? 
			JSON.parse(localStorage['redux-store']) :
			initialState
		);
	};
