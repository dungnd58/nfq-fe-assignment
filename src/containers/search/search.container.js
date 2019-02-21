import { connect } from 'react-redux';
import SearchComponent from '../../components/search/search.component';
import { searchActions } from '../../actions';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    search: state.search
  }
};

const mapDispatchToProps = dispatch => {
  const { search } = searchActions;
  return {
    actions: bindActionCreators({search},dispatch)
  }
} 

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent));