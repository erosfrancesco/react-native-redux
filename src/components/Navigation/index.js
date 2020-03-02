import Component from './Navigation';

// Paths
import Home from '../../views/home';
import Reload from '../../views/reload';
import Debug from '../../views/debug';
import Docs from '../../views/docs';
const screensMap = {
  Home,
  Reload,
  Debug,
  Docs,
};
const Navigation = Component(screensMap);

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  path: {
    current: (state && state.currentPath) || '',
    all: (state && state.pathsMap) || {},
  },
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
