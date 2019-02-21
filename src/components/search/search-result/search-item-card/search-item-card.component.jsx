import React from 'react';
import {Button} from 'react-bootstrap';

class SearchItemCardComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <Button variant="outline-secondary" size="lg" block>
        <small>Add to NASA collecion</small>
      </Button>
		)
	}
}

export default SearchItemCardComponent;