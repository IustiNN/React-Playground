import React from 'react';
import { Link } from 'react-router';
import '../../App.css';


export default class Layout extends React.Component {
	render() {
		const { history } = this.props;
		console.log(history.isActive("articles"));
		return (
			<div>
				<h1>Semantic</h1>
				{this.props.children}
				<Link to="careers">Careers</Link>
				<Link to="work">Work</Link>
				<Link to="articles" activeClassName="activePage">Articles</Link>
			</div>
		)
	}
}