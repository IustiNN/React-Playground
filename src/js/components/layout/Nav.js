import React from 'react';
import NavLink from '../NavLink'
class Nav extends React.Component {

  render() {
    return (
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
    );
  }

}

export default Nav;
