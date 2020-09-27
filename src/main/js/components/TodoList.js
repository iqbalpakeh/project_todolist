import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodosByVisibilityFilter } from "../redux/Selectors";

const TodoList = ({ todos }) => (
	<ul>
		{todos && todos.length
			? todos.map((todo, index) => {
					return <TodoItem key={`todo-${todo.id}`} todo={todo} />;
			  })
			: []}
	</ul>
);

const mapStateToProps = (state) => {
	console.log(state);
	const { visibilityFilter } = state;
	const todos = getTodosByVisibilityFilter(state, visibilityFilter);
	return { todos };
};

export default connect(mapStateToProps)(TodoList);
