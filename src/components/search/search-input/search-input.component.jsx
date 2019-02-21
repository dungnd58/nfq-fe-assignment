import React from 'react';
import { debounce } from '../../../helper';

class SearchInputComponent extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.search = debounce(this.search.bind(this),300);
	}

	componentWillMount() {}

  search() {
    const { actions, updateSearchTerm } = this.props;
    const { searchTerm } = this.state;
    updateSearchTerm(searchTerm);
    if(searchTerm) actions.search(searchTerm);
  }

  handleSearch(event) {
    this.setState({
      searchTerm: event.target.value.trim()
    });
    this.search();
  }

	render() {
		return (
      <div className="search-input form-group">
        <input className="form-control form-control-lg" type="text" 
          value={this.state.searchTerm} placeholder="Type somthing to search..." 
          onChange={this.handleSearch}/>
      </div>
		)
	}
}

export default SearchInputComponent;