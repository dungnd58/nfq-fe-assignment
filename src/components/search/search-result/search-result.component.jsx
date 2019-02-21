import React from 'react';
import renderCardItem from '../../shared/item-card/item-card.component';
import SearchItemCardComponent from './search-item-card/search-item-card.component';
import { CardDeck } from 'react-bootstrap';
import { debounce, isElementInViewport } from '../../../helper';

const ItemCardSearchResult = renderCardItem(
  SearchItemCardComponent
);

class SearchResultComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentPage: 1,
			totalItems: 0,
			itemsPerPage: 9
		}
		this.onScroll = debounce(this.onScroll.bind(this), 250);
		this.endPageRef = React.createRef()
	}

	componentWillMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentDidMount() {
		const { collection } = this.props;
		let numberOfItems = collection.items.length < this.state.itemsPerPage ? collection.items.length : this.state.itemsPerPage;
		this.setPaging(numberOfItems,1);
	}

	setPaging(numberOfItems, currentPage) {
		const { collection } = this.props;
		this.setState({ //page 1
			...this.state,
			currentPage: currentPage,
			totalItems: collection.items.length,
			items: collection.items.slice(0,numberOfItems)
		});
	}

	onScroll() {
		if(!isElementInViewport(this.endPageRef.current)) return;
		const {totalItems, items, itemsPerPage, currentPage} = this.state;
		if(totalItems.length === items.length) return;
		else {
			let numberOfItems = itemsPerPage * (currentPage + 1);	
			this.setPaging(numberOfItems,currentPage+1);
		}
	}

	render() {
		const { searchTerm } = this.props;
		const { items, totalItems } = this.state;
		return (
      <div className="search-result">
				<div>{totalItems} result{totalItems > 1 && 's'} of "{searchTerm}"</div>
				<CardDeck className="row list-item-card">
					{items.map((item, key) => (
							<ItemCardSearchResult key={`search-card-item-${key}`} item={item}></ItemCardSearchResult>
						))
					}
				</CardDeck>
				<div className="endlist p-3 col-12" ref={this.endPageRef}></div>
      </div>
		)
	}
}

export default SearchResultComponent;