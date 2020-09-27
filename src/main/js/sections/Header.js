import React from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/Selectors";
import { VISIBILITY_FILTERS } from "../redux/reducers/VisibilityFilter";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header">
				<img src="/images/logo.png" alt="trillo logo" className="logo" />
				<SearchBar />
				<nav className="user-nav">
					<Notification
						icon="/images/sprite.svg#icon-emoji-neutral"
						number={this.props.incomplete.length}
					/>
					<Notification
						icon="/images/sprite.svg#icon-emoji-happy"
						number={this.props.completed.length}
					/>
					<UserPicture />
				</nav>
			</div>
		);
	}
}

const SearchBar = () => (
	<form action="#" className="search">
		<input type="text" className="search__input" placeholder="Search todo" />
		<button className="search__button">
			<svg className="search__icon">
				<use xlinkHref="/images/sprite.svg#icon-magnifying-glass" />
			</svg>
		</button>
	</form>
);

const UserPicture = () => (
	<div className="user-nav__user">
		<img src="/images/pic.png" alt="User" className="user-nav__user-photo" />
		<span className="user-nav__user-name">Iqbal</span>
	</div>
);

const Notification = ({ icon, number }) => (
	<div className="user-nav__icon-box">
		<svg className="user-nav__icon">
			<use xlinkHref={icon} />
		</svg>
		<span className="user-nav__notification">{number}</span>
	</div>
);

const mapStateToProps = (state) => {
	const incomplete = getTodosByVisibilityFilter(
		state,
		VISIBILITY_FILTERS.INCOMPLETE
	);
	const completed = getTodosByVisibilityFilter(
		state,
		VISIBILITY_FILTERS.COMPLETED
	);
	return { incomplete, completed };
};

export default connect(mapStateToProps)(Header);
