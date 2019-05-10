import React from 'react';
import { shallow, mount } from 'enzyme';
import Task from '../Task';

describe('components/Task', () => {
  let wrapper;
  let props;

  const setup = () => {
    wrapper = shallow(<Task {...props}/>);
  }

  beforeEach(() => {
    props = {
      task: {
        text: 'Some task',
        completed: true
      },
      toggleTask: jest.fn()
    }
  })

  it('should render correctly', () => {
    setup();
    expect(wrapper).toMatchSnapshot();
  })
});
