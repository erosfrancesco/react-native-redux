import {createLogic} from 'redux-logic';

export default createLogic({
  name: 'Counter',
  type: 'INCREMENT',
  debounce: 60,
  latest: true,

  // validate({ getState, action }, allow, reject) {
  //     // run your verification logic and then call allow or reject
  //     // with the action to pass along. You may pass the original action
  //     // or a modified/different action. Use undefined to prevent any
  //     // action from being propagated like allow() or reject()
  //     // If reject is used then the process hook will not be executed
  //     allow(action); // OR reject(action)
  // },

  process({getState, action}, dispatch, done) {
    // Perform your processing then call dispatch with an action
    // Empty or undefined dispatch can be used if nothing to dispatch
    // See advanced API for discussion of dispatching modes

    dispatch();
    done();
  },
});
