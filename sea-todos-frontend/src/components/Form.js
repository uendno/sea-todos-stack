import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    text: ''
  };

  onTextChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  onKeyPress = (e) => {
    const {onSubmit} = this.props;
    const {text} = this.state;

    if (e.key === 'Enter' && text !== '') {
      onSubmit(text);
      this.setState({
        text: ''
      })
    }
  };

  render() {
    const {text} = this.state;

    return (
      <div>
        <input
          className="new-todo"
          value={text}
          placeholder="What needs to be done?"
          onChange={this.onTextChange}
          onKeyPress={this.onKeyPress}
        />
      </div>
    )
  }
}
