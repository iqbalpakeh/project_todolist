import axios from "axios";
import { addTodo, deleteTodo } from "../redux/Actions";

var root = "http://localhost:8080/api";

/**
 * Fetch all todos from backend server and then store to redux store
 *
 * @param {*} dispatch is bypassed function to access redux store
 */
export const fetchTodos = (dispatch) => {
	axios({
		method: "GET",
		url: `${root}/todos`,
	}).then(
		(response) => {
			response.data.map((todo) => {
				dispatch(addTodo(todo));
			});
		},
		(error) => console.log(error)
	);
};

/**
 * Create new todo item on the backend and then store to redux store
 *
 * @param {*} dispatch is bypassed function to access redux store
 * @param {*} content is one of the todo property, the remaining property will be given by backend server
 */
export const createTodo = (dispatch, content) => {
	axios({
		method: "POST",
		url: `${root}/todos`,
		data: { content },
	}).then(
		(response) => {
			dispatch(addTodo(response.data));
		},
		(error) => console.log(error)
	);
};

/**
 * Delete single todo by id and then remove the id from redux storessss
 *
 * @param {*} dispatch is bypassed function to access redux store
 * @param {*} id of the todo note to be deleted
 */
export const deleteTodoById = (dispatch, id) => {
	axios({
		method: "DELETE",
		url: `${root}/todos/${id}`,
	}).then(
		(response) => {
			console.log(response);
			dispatch(deleteTodo(id));
		},
		(error) => {
			console.log(error);
		}
	);
};
