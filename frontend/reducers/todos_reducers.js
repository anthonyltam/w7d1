import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch(action.type) {
    default:
      return state;
  }
};

export default todosReducer;
