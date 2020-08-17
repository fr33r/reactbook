/**
 * A redux store supported the notion of middleware, which is invoked during
 * various lifecycle events.
 */

/**
 * Logging middleware responsible for logging when actions are dispatched,
 * the application prior to processing the action, as well as the state after
 * processing teh action.
 */
export const logger = 
	store =>
		next =>
			action => {
				// prior to processing the action.
				console.groupCollapsed("dispatching", action.type);
				console.log("previous state", store.getState());
				console.log("action", action);
				// processing.
				let result
				result = next(action);
				// after processing the action.
				console.log("next state", store.getState());
				console.groupEnd();
				return result;
			}

/**
 * Persistence middleware responsible for persisting the current state of the
 * store into the browsers local storage.
 */
export const persistToLocal =
	store =>
		next =>
			action => {
				// processing.
				let result = next(action);
				// after processing the action.
				localStorage['redux-store'] = JSON.stringify(store.getState());
				return result;
			}
