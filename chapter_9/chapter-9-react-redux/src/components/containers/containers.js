import { connect } from 'react-redux'
import AddColorForm from '../AddColorForm'
import SortMenu from '../SortMenu'
import ColorList from '../ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../../actions/actions'

// TODO(FREER) put this sort function elsewhere.
function doSort(sortType) {
	let nameSort = (f, s) => f.title < s.title
	let ratingSort = (f, s) => f.rating < s.rating
	if(sortType === "SORT_BY_TITLE"){
		return nameSort;
	}
	return ratingSort;
}

/*
 * These container components pass our Redux store as properties to our
 * presentational components. With Redux's connect(), we don't have to define
 * this components ourselves, inject the store into each component's context, etc.
 *
 * For connect(), the first argument is a function that maps Redux state to
 * component properties. This function returns a object representing the
 * properties of the target component. The second argument is a function that
 * is responsible for defining handlers that dispatch Redux actions. It returns
 * an objects with all of the handlers.
 */

/*
 * Menu represents a container component for the sort menu. This components
 * sole purpose is connect our data storage framework (Redux) and our
 * presentational components.  
 */
export const Menu = connect(
	state => ({
		sort: state.sort
	}),
	dispatch => ({
		onClick(sortBy) {
			dispatch(sortColors(sortBy));
		}
	})
)(SortMenu);

/*
 * NewColor represents a container component for the color form used to create
 * new colors. This components sole purpose is connect our data storage
 * framework (Redux) and our presentational components.  
 */
export const NewColor = connect(
	null,
	dispatch => ({
		onNewColor(title, color) {
			dispatch(addColor(title, color));
		}
	})
)(AddColorForm);

/*
 * Colors represents a container component for the color list that displays all of
 * the colors. This components sole purpose is connect our data storage
 * framework (Redux) and our presentational components.  
 */
export const Colors = connect(
	state => ({
		colors: [...state.colors].sort(doSort(state.sort))
	}),
	dispatch => ({
		onRemove(id) {
			dispatch(removeColor(id));
		},
		onRate(id, rating) {
			dispatch(rateColor(id, rating));
		}
	})
)(ColorList);
