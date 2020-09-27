import React from "react";
import { connect } from "react-redux";
import "./App.scss";

import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import MainView from "./sections/MainView";
import { fetchTodos } from "./api/Api";

/**
 * Todo:
 * - implement rest call with cujo.js
 *   - fetch all notes [done]
 *   - delete note [...]
 *   - delete all note [...]
 * - implement resource update control (follow the spring tutorial)
 * - implement user access
 * - implement spring security
 */

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetchTodos(this.props.dispatch);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="content">
					<Sidebar />
					<MainView />
				</div>
			</div>
		);
	}
}

export default connect(null, null)(App);
