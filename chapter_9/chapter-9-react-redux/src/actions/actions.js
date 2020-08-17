import C from '../constants'
import { v4 } from 'uuid'

/**
 * Action creators are simply factory functions for various Redux actions.
 * Utilizing these creators instead of call sites constructing the actions
 * themselves reaps the benefits of all factories: abstraction of object 
 * creation and loose coupling between the consumers of the constructed object 
 * and the object itself.
 */

/**
 * Factory function that constructs the action fired when a new color is added.
 */
export const addColor = (title, hex) => ({
	type: C.ADD_COLOR,
	title: title,
	color: hex,
	rating: 0,
	id: v4(),
	timestamp: new Date().toString()
});

/**
 * Factory function that constructs the action fired when an existing color is removed.
 */
export const removeColor = (id) => ({
	type: C.REMOVE_COLOR,
	id: id
});

/**
 * Factory function that constructs the action fired when an existing color is rated.
 */
export const rateColor = (id, rating) => ({
	type: C.RATE_COLOR,
	id: id,
	rating: rating
});

/**
 * Factory function that constructs the action fired when the sorting method is changed.
 */
export const sortColors = sortBy => {
	let action = { type: C.SORT_COLORS };
	if (sortBy === "rating") {
		action.sortBy = "SORTED_BY_RATING"
	}
	else if( sortBy === "title") {
		action.sortBy = "SORTED_BY_RATING"
	}
	else {
		action.sortBy = "SORTED_BY_DATE"
	}
	return action
}
