import { SET_FILTER } from "../Actions";

export const VISIBILITY_FILTERS = {
	ALL: "all",
	COMPLETED: "completed",
	INCOMPLETE: "incomplete",
};

export const visibilityFilter = (
	state = VISIBILITY_FILTERS.INCOMPLETE,
	action
) => {
	switch (action.type) {
		case SET_FILTER: {
			return action.payload.filter;
		}
		default: {
			return state;
		}
	}
};
