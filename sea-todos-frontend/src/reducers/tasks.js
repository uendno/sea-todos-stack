import {ACTIONS} from '../constants';

export default (state = {
  ids: [],
  byId: {}
}, action) => {
  switch (action.type) {
    case ACTIONS.GET_TASKS_COMPLETE: {
      const tasks = action.tasks;
      const ids = [];
      const byId = {};

      tasks.forEach(task => {
        ids.push(task.id);
        byId[task.id] = task;
      });

      return {
        ...state,
        ids,
        byId
      };
    }

    default:
      return state;
  }
}

export const getTaskList = (state) => {
  return state.ids.map(id => state.byId[id]);
}
