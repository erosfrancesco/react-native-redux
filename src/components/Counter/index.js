import Component from './Counter';

import {connect} from 'react-redux';
import incrementAction from '../../redux/actions/increment';
import decrementAction from '../../redux/actions/decrement';

const mapStateToProps = state => ({
  count: (state && state.count) || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(incrementAction(props)),
  decrement: () => dispatch(decrementAction(props)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
