import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../App';
import Form from '../Form';

describe('components/App', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(<App {...props} />)
  }

  beforeEach(() => {
    props = {
      getTasks: jest.fn(),
      toggleTask: jest.fn(),
      addTask: jest.fn(),
      tasks: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    }
  });

  it('should render correctly', () => {
    setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a new task correctly', () => {
    setup();
    wrapper.find(Form).props().onSubmit();
    expect(props.addTask).toHaveBeenCalled();
  })
});
