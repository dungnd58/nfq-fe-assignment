import React from 'react';
import { Link } from 'react-router-dom';
import { routeNames } from '../../config';
import SearchInputComponent from './search-input/search-input.component';
import SearchResultComponent from './search-result/search-result.component';

class SearchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		};
		this.updateSearchTerm = this.updateSearchTerm.bind(this);
	}

	componentWillMount(){
		console.log(this.props);
	}

	updateSearchTerm(term) {
		this.setState({
			searchTerm: term
		});
	}

	render() {
		const { isLoaded, collections } = this.props.search;
		const { actions } = this.props;
		const { searchTerm } = this.state;
		return (
      <div className="container search">
				<Link to={routeNames.HOME}>Back to Collection</Link>
				<h1>Search from Nasa</h1>

				<SearchInputComponent actions={actions} updateSearchTerm={this.updateSearchTerm}></SearchInputComponent>

				{searchTerm.trim() && isLoaded && collections.collection &&
					<SearchResultComponent 
						collection={collections.collection} 
						searchTerm={searchTerm}>
					</SearchResultComponent>
				}
      </div>
		)
	}
}

export default SearchComponent;