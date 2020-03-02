const initialState = {count: 39};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };

    // case 'GHIBLI':
    //   return state;
    case 'GHIBLI_FETCH_SUCCESS':
      return {...state, species: action.payload};

    default:
      return state;
  }
};
