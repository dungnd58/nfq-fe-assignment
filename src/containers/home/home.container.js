import { connect } from 'react-redux';
import HomeComponent from '../../components/home/home.component';
import { searchActions } from '../../actions';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
} 

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent));