import React from "react";

export default (props) => (
	<li className={props.activeState}>
		<a href="#" className="side-nav__link" onClick={props.handler}>
			<svg className="side-nav__icon">
				<use xlinkHref={props.icon} />
			</svg>
			<span>{props.text}</span>
		</a>
	</li>
);
