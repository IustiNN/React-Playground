import React from 'react'
import NavLink from '../components/NavLink'
import Footer from '../components/Footer'
import '../../App.css'


export default class Layout extends React.Component {
	render() {
		const { history } = this.props;
		console.log(history.isActive("articles"));
		return (
			<div>
				<div className="ui large top fixed hidden menu">
					<div className="ui container">
					<NavLink onlyActiveOnIndex className="item" to="/">Home</NavLink>
					<NavLink className="item" to="/work">Work</NavLink>
					<NavLink className="item" to="/company">Company</NavLink>
					<NavLink className="item" to="/articles">Articles</NavLink>
					<div className="right menu">
						<div className="item">
						<a className="ui button">Log in</a>
						</div>
						<div className="item">
						<a className="ui primary button">Sign Up</a>
						</div>
					</div>
					</div>
				</div>
				{this.props.children}		
				<Footer />	
			</div>
			
		)

		
	}
}