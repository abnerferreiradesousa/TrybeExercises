export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const INITIAL_STATE = {
  type: INCREMENT_COUNTER,
  count: 0,
}

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      break;
  }
}

export default myReducer;