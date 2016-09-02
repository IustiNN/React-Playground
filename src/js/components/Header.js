import React from 'react';
import Title from './Header/Title';


export default class Header extends React.Component {
	handleChange(e) {
		console.log(e);
		var title = e.target.value;
		this.props.changeTitle(title);
	}
	render() {
		return (
			<header>
				<Title title={this.props.title}/>
				<div className="ui input">
					<input onChange={this.handleChange.bind(this)} value={this.props.title}/>
				</div>
			</header>
		)
	}
}