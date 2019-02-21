import React from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import * as apiUrl from '../../../actions/api';

export default function renderCardItem (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.getThumbnailImg = this.getThumbnailImg.bind(this);
      this.state = {
        thumbnailImg: ''
      }
    }

    componentWillMount(){
      const { item } = this.props;
      const { data } = item;
      const mainData = data[0];
      this.getThumbnailImg(mainData.nasa_id);
    }

    getThumbnailImg(nasa_id) {
      axios.get(apiUrl.getAssets(nasa_id))
      .then(response => {
        const { items } = response.data.collection;
        if(items && items.length) {
          this.setState({
            thumbnailImg: items[0].href
          })
        }
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
      const { thumbnailImg } = this.state;
      const { item } = this.props;
      const { data, links, href } = item;
      const mainData = data[0];
      const mainLink = links[0];
      return (
        <div className="col col-sm-12 col-md-4 item-card">
          <Card.Link href={mainLink.href} rel={mainLink.rel}>
            {mainLink.render === 'image' &&
              <Card.Img variant="top" src={thumbnailImg} />}
          </Card.Link>
          <Card.Body>
            <Card.Title>{mainData.title}</Card.Title>
            <Card.Text className="item-card__description description">
              {mainData.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="item-card__footer footer">
            <Component></Component>
          </Card.Footer>
        </div>
      )
    }
  }
}