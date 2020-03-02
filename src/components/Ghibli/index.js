import Component from './Ghibli';

import {connect} from 'react-redux';
import ghibli from '../../redux/actions/ghibli';

const mapStateToProps = state => ({
  species: (state && state.species) || [],
});

const mapDispatchToProps = (dispatch, props) => ({
  getData: () => dispatch(ghibli(props)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
