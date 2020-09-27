import React from "react";
import SidebarItem from "../components/SidebarItem";
import Copyright from "../components/Copyright";
import { connect } from "react-redux";
import { setFilter } from "../redux/Actions";
import { VISIBILITY_FILTERS } from "../redux/reducers/VisibilityFilter";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeStateAll: "side-nav__item",
			activeStateIncomplete: "side-nav__item side-nav__item--active",
			activeStateCompleted: "side-nav__item",
		};
	}

	showAllTasks = () => {
		this.setState({
			activeStateAll: "side-nav__item side-nav__item--active",
			activeStateIncomplete: "side-nav__item",
			activeStateCompleted: "side-nav__item",
		});
		this.props.setFilter(VISIBILITY_FILTERS.ALL);
	};

	showIncompleteTasks = () => {
		this.setState({
			activeStateAll: "side-nav__item",
			activeStateIncomplete: "side-nav__item side-nav__item--active",
			activeStateCompleted: "side-nav__item",
		});
		this.props.setFilter(VISIBILITY_FILTERS.INCOMPLETE);
	};

	showCompletedTasks = () => {
		this.setState({
			activeStateAll: "side-nav__item",
			activeStateIncomplete: "side-nav__item",
			activeStateCompleted: "side-nav__item side-nav__item--active",
		});
		this.props.setFilter(VISIBILITY_FILTERS.COMPLETED);
	};

	render() {
		return (
			<nav className="sidebar">
				<ul className="side-nav">
					<SidebarItem
						activeState={this.state.activeStateAll}
						handler={this.showAllTasks}
						icon="/images/sprite.svg#icon-list"
						text="All"
					/>
					<SidebarItem
						activeState={this.state.activeStateIncomplete}
						handler={this.showIncompleteTasks}
						icon="/images/sprite.svg#icon-emoji-neutral"
						text="Incompleted"
					/>
					<SidebarItem
						activeState={this.state.activeStateCompleted}
						handler={this.showCompletedTasks}
						icon="/images/sprite.svg#icon-emoji-happy"
						text="Completed"
					/>
				</ul>
				<Copyright />
			</nav>
		);
	}
}

export default connect(null, { setFilter })(Sidebar);
