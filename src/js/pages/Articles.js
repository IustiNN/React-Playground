import React from 'react';

export default class Articles extends React.Component {
	render() {
		console.log(this.props);
		const { query } = this.props.location;
		const { params } = this.props;
		const { article } = params;
		const { date, filter } = query;
		return (
			<div>
				<h1>Article ({article})</h1>
				<h4>date: {date}, filter: {filter}</h4>
			</div>
		)
	}
}