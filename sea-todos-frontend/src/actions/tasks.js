import { ACTIONS } from '../constants';
import { get, put, post } from '../utils/request';
import { showErrorMessage } from '../utils/toast';

export const getTasks = () => async (dispatch, getState) => {
  dispatch({
    type: ACTIONS.GET_TASKS
  });

  try {
    const tasks = await get('/tasks');
    dispatch({
      type: ACTIONS.GET_TASKS_COMPLETE,
      tasks
    })
  } catch(error) {
    showErrorMessage(error.message);
    dispatch({
      type: ACTIONS.GET_TASKS_ERROR,
      error
    })
  }
}

export const toggleTask = (task) => async (dispatch, getState) => {
  dispatch({
    type: ACTIONS.TOGGLE_TASK,
    task,
  });

  try {
    await put('/tasks/' + task.id, {
      completed: !task.completed
    });

    dispatch({
      type: ACTIONS.TOGGLE_TASK_COMPLETE,
      task,
    });
  } catch (error) {
    showErrorMessage('Error', error.message);
    dispatch({
      type: ACTIONS.TOGGLE_TASK_ERROR,
      error
    })
  }

  dispatch(getTasks());
};

export const addTask = (text) => async (dispatch, getState) => {
  dispatch({
    type: ACTIONS.ADD_TASK,
    text,
  });
  
  try {
    const task = await post('/tasks', {
      text
    });

    dispatch({
      type: ACTIONS.ADD_TASK_COMPLETE,
      task
    });

  } catch (error) {
    showErrorMessage('Error', error.message);
    dispatch({
      type: ACTIONS.ADD_TASK_ERROR,
      error,
    })
  }

  dispatch(getTasks()); 
};

export const setFilter = option => {
  return {
    type: ACTIONS.SET_FILTER,
    option
  }
}