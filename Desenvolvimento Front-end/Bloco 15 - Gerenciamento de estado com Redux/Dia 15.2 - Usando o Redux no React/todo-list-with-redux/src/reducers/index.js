const INITIAL_STATE = {
  tasks: [],
}

const saveTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.newTask]
      }
    default:
      return state;
  }
}

export default saveTaskReducer;