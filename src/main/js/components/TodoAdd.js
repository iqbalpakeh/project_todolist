import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../api/Api";

class TodoAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: "" };
	}

	handleUpdateInput = (input) => {
		this.setState({ input });
	};

	handleAddTodo = () => {
		if (this.state.input) {
			createTodo(this.props.dispatch, this.state.input);
			this.setState({ input: "" });
		} else {
			// todo: add error message here!
		}
	};

	handleClearTodo = () => {
		this.setState({ input: "" });
	};

	render() {
		return (
			<div className="todo-add">
				<input
					type="text"
					className="todo-add__content"
					placeholder="Add todo here"
					onChange={(e) => this.handleUpdateInput(e.target.value)}
					value={this.state.input}
				/>
				<nav className="todo-add__nav">
					<div
						className="todo-add__nav__icon-box"
						onClick={this.handleClearTodo}
					>
						<svg className="todo-add__nav__icon">
							<use xlinkHref="/images/sprite.svg#icon-cross" />
						</svg>
					</div>
					<div className="todo-add__nav__icon-box" onClick={this.handleAddTodo}>
						<svg className="todo-add__nav__icon">
							<use xlinkHref="/images/sprite.svg#icon-plus" />
						</svg>
					</div>
				</nav>
			</div>
		);
	}
}

export default connect(undefined, undefined)(TodoAdd);
