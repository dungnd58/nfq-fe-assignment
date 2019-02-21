import React from 'react';
import { Link } from 'react-router-dom';
import { routeNames } from '../../config';

class HomeComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){}

	render() {
		return (
			<div className="container home">
				<h1>NASA Collection</h1>
				<Link to={routeNames.SEARCH}>Go to search page</Link>
			</div>
		)
	}
}

export default HomeComponent;