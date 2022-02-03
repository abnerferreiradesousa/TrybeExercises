import { INCREMENT_COUNTER } from '../reducers';
import { DECREMENT_COUNTER } from '../reducers';

const myIncrementAction = (countValue) => {
  return {
    type: INCREMENT_COUNTER,
    countValue,
  }
};

const myDecrementAction = (countValue) => {
  return {
    type: DECREMENT_COUNTER,
    countValue,
  }
};

const myActions = {
  inc: myIncrementAction,
  dec: myDecrementAction,
}

export default myActions;