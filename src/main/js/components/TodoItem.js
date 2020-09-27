import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/Actions";
import { deleteTodoById } from "../api/Api";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleDelete = () => {
		deleteTodoById(this.props.dispatch, this.props.todo.id);
	};

	handleComplete = () => {
		this.props.toggleTodo(this.props.todo.id);
	};

	render() {
		return (
			<li className="todo-item">
				<div className="todo-item__content">{this.props.todo.content}</div>
				<nav className="todo-item__nav">
					<div className="todo-item__nav__icon-box" onClick={this.handleDelete}>
						<svg className="todo-item__nav__icon">
							<use xlinkHref="/images/sprite.svg#icon-cross" />
						</svg>
					</div>
					<div
						className="todo-item__nav__icon-box"
						onClick={this.handleComplete}
					>
						<svg className="todo-item__nav__icon">
							<use xlinkHref="/images/sprite.svg#icon-check" />
						</svg>
					</div>
				</nav>
			</li>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleTodo: (id) => dispatch(toggleTodo(id)),
		dispatch,
	};
};

export default connect(null, mapDispatchToProps)(TodoItem);
