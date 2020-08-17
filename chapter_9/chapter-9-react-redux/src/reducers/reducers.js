import C from '../constants'

/**
 * These functions represents Redux reducers, which each are responsible for 
 * modifying a specific section of the application state. They do so by receiving
 * the current state as one argument, and receiving a triggering action as the
 * second argument. These reducers then return the updated state of the particular
 * portion of the state they impact as the result.
 */

/**
 * The color reducer is responsible for updating a single color in the
 * Redux store (application state).
 *
 * In this application, the only actions that can update a color are: 
 * - RATE_COLOR
 * - ADD_COLOR
 */
export const color = (state={}, action) => {
	let supportedActions = new Map();
	supportedActions.set(C.ADD_COLOR, {
		id: action.id,
		title: action.title,
		color: action.color,
		timestamp: action.timestamp,
		rating: action.rating
	});
	supportedActions.set(C.RATE_COLOR,
		(state.id !== action.id) ? state : {
			...state,
			rating: action.rating
		}
	);
	return supportedActions.has(action.type) ?
		supportedActions.get(action.type) : state;
};

/**
 * The colors reducer is responsible for ensuring the entire list of colors in 
 * the Redux store (application state) is updated by delegating to the color reducer.
 *
 * In this application, the only actions that can update the color list are: 
 * - RATE_COLOR
 * - ADD_COLOR
 * - REMOVE_COLOR
 */
export const colors = (state=[], action) => {
	let supportedActions = new Map();
	supportedActions.set(C.ADD_COLOR, [
		...state,
		color({}, action)
	]);
	supportedActions.set(C.RATE_COLOR,
		state.map(c => color(c, action))
	);
	supportedActions.set(C.REMOVE_COLOR,
		state.filter(c => c.id !== action.id)
	);
	return supportedActions.has(action.type) ?
		supportedActions.get(action.type) : state;
};

/**
 * The sort reducer is responsible for ensuring the sort order in the Redux
 * store (application state) is updated.
 *
 * In this application, the only actions that can update sort order are: 
 * - SORT_COLORS
 */
export const sort = (state="SORTED_BY_DATE", action) => {
	return action.type === C.SORT_COLORS ? action.sortBy : state;
};
