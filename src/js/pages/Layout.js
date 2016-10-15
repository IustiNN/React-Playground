import React from 'react'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import '../../App.css'


export default class Layout extends React.Component {
	render() {
		const { history } = this.props;
		console.log(history.isActive("articles"));
		return (
			<div>
				<Nav />
				{this.props.children}
				<Footer />
			</div>

		)

	}
}
