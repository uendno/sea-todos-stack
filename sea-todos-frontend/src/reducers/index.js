import { combineReducers } from 'redux';
import {FILTER_OPTIONS} from '../constants';
import tasks, * as fromTasks from './tasks';
import filter, * as fromFilter from './filter';

export default combineReducers({
  tasks,
  filter
});

export const getTaskListSelector = (state) => fromTasks.getTaskList(state.tasks);

export const getCurrentFilterOptionSelector = state => fromFilter.getCurrentFilterOption(state.filter);

export const getFilteredTaskListSelector = (state) => {
  const tasks = getTaskListSelector(state);
  const filterOption = getCurrentFilterOptionSelector(state);

  switch (filterOption) {
    case FILTER_OPTIONS.ALL: {
      return tasks;
    }

    case FILTER_OPTIONS.ACTIVE: {
      return tasks.filter(task => !task.completed)
    }

    case FILTER_OPTIONS.COMPLETED: {
      return tasks.filter(task => !!task.completed)
    }
  
    default:
      return tasks;
  }
}

export const getNumberOfRemainingItemsSelector = state => {
  const tasks = getTaskListSelector(state);
  return tasks.filter(task => !task.completed).length;
}