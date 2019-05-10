import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showSuccessMessage } from 'utils/toast';
import Task from './Task';
import Form from './Form';
import Filter from './Filter';
import { getTasks, toggleTask, addTask } from '../actions/tasks';
import { getFilteredTaskListSelector } from '../reducers';

export class App extends Component {
  static propTypes = {
    getTasks: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
  }

  async componentDidMount() {
    const {getTasks} = this.props;
    getTasks();
  }

  addTask = async (text) => {
    const {addTask} = this.props;
    await addTask(text);
    showSuccessMessage('Success!', 'Add new task successfully!');
  };

  render() {
    const {tasks, toggleTask} = this.props;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos 2</h1>
          <Form onSubmit={this.addTask}/>
        </header>
        <section className="main">
          <ul className="todo-list">
            {tasks
              .map(task => (
              <Task
                key={task.id}
                task={task}
                toggleTask={toggleTask}
              />
            ))}
          </ul>
        </section>
        <footer className="footer">
          <Filter />
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: getFilteredTaskListSelector(state)
  }
};

const mapDispatchToProps = {
  getTasks,
  toggleTask,
  addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
