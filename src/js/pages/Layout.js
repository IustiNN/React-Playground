import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../../logo.svg';
import '../../App.css';


export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Go away"
		}
	}
	changeTitle(title) {
		this.setState({title});
	}
	render() {
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<Footer />
			</div>
		)
	}
}