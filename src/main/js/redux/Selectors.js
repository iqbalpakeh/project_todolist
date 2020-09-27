import { VISIBILITY_FILTERS } from "./reducers/VisibilityFilter";

const getTodosState = (store) => {
	return store.todos;
};

const getTodoList = (store) => {
	return getTodosState(store) ? getTodosState(store).allIds : [];
};

const getTodos = (store) => {
	return getTodoList(store).map((id) => getTodoById(store, id));
};

/**
 * Get single todo  by id
 *
 * @param {*} store of redux holding all the state data
 * @param {*} id of each todo entry
 */
export const getTodoById = (store, id) => {
	return getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};
};

/**
 * Get multiple todos filtered by defined filter
 *
 * @param {*} store of redux holding all the state data
 * @param {*} visibilityFilter is the type of supported filter
 */
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
	const allTodos = getTodos(store);
	switch (visibilityFilter) {
		case VISIBILITY_FILTERS.COMPLETED: {
			return allTodos.filter((todo) => todo.completed);
		}
		case VISIBILITY_FILTERS.INCOMPLETE: {
			return allTodos.filter((todo) => !todo.completed);
		}
		case VISIBILITY_FILTERS.ALL:
		default:
			return allTodos;
	}
};
