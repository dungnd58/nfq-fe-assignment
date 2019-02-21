import React from 'react';
import { Provider } from 'react-redux'; 
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { routeNames } from '../../config';
import {
  HomeContainer,
  SearchContainer
} from '../../containers';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router basename="/nfq-fe-assignment">
          <div>
            <Route exact path={`${routeNames.HOME}`} component={HomeContainer} />
            <Route path={`/${routeNames.SEARCH}`} component={SearchContainer}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default Root;