import {createLogic} from 'redux-logic';
import axios from 'axios';

export default createLogic({
  name: 'Ghibli',
  type: 'GHIBLI',
  debounce: 60,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: 'GHIBLI_FETCH_SUCCESS',
    failType: 'GHIBLI_FETCH_FAILED',
  },

  process({getState, action}, dispatch, done) {
    // const state = getState();

    return axios
      .get('https://ghibliapi.herokuapp.com/species/')
      .then(res => res.data);
    // .then(species =>
    //   dispatch({type: 'GHIBLI_FETCH_SUCCESS', payload: {...state, species}}),
    // )
    // .then(() => done())
    // .catch(error => {
    //   console.error(error);

    //   dispatch();
    //   done();
    // });
  },
});
