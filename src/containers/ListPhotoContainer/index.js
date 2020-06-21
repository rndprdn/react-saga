import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from './actions';
import ListPhotoContainer from './ListPhotoContainer'

function mapStateToProps(state) {
  return {
    listPhoto: state.listPhoto
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const ListPhotoContainerWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPhotoContainer)

const ListPhotoContainerWithRouter = withRouter(ListPhotoContainerWithRedux)

export default ListPhotoContainerWithRouter;