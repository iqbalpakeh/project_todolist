export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_FILTER = "SET_FILTER";

/**
 * Action to add note into redux store
 *
 * @param {*} content is note information to be stored
 */
export const addTodo = (todo) => ({
	type: ADD_TODO,
	payload: todo,
});

/**
 * Action to delete note in redux store by id
 *
 * @param {*} id is identifier of note in redux store (Completed, Incompleted, All)
 */
export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	payload: { id },
});

/**
 * Action to switch the status of a node on the redux store
 *
 * @param {*} id is identifier of note in redux store
 */
export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

/**
 * Action to set the filter of a node before getting show in to the list
 *
 * @param {*} filter is type of supported filter
 */
export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: { filter },
});
