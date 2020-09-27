import React from "react";
import TodoAdd from "../components/TodoAdd.js";
import TodoList from "../components/TodoList.js";

export default class MainView extends React.Component {
	render() {
		return (
			<div className="todos-view">
				<TodoAdd />
				<TodoList />
			</div>
		);
	}
}
