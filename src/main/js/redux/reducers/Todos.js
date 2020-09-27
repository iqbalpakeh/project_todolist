import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../Actions";

const initialState = {
	allIds: [],
	byIds: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return addTodo(state, action);
		case DELETE_TODO:
			return deleteTodo(state, action);
		case TOGGLE_TODO:
			return toggleTodo(state, action);
		default: {
			return state;
		}
	}

	function addTodo(state, action) {
		const { content, id, status, timestamp } = action.payload;
		return {
			allIds: [...state.allIds, id],
			byIds: {
				...state.byIds,
				[id]: {
					content,
					id,
					status,
					timestamp,
				},
			},
		};
	}

	function deleteTodo(state, action) {
		const { id } = action.payload;
		const deleteIdFromAllIds = (id) => {
			return state.allIds.filter((entryId) => id !== entryId);
		};
		const deleteIdFromByIds = (id) => {
			delete state.byIds[id];
			return state.byIds;
		};
		return {
			allIds: deleteIdFromAllIds(id),
			byIds: deleteIdFromByIds(id),
		};
	}

	function toggleTodo(state, action) {
		const { id } = action.payload;
		return {
			...state,
			byIds: {
				...state.byIds,
				[id]: {
					...state.byIds[id],
					completed: !state.byIds[id].completed,
				},
			},
		};
	}
}
