import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {FILTER_OPTIONS} from '../constants';
import { setFilter } from '../actions/tasks';
import { getNumberOfRemainingItemsSelector, getCurrentFilterOptionSelector } from '../reducers';


export function Filter({filterOption, onChange, numItemsLeft}) {
  return (
    <Fragment>
      <span className="todo-count">
        <strong>{numItemsLeft}</strong>
        {` item${numItemsLeft === 1 ? '' : 's'} left`}
      </span>
      <ul className="filters">
        <li>
          <a
            role="button"
            className={filterOption ===  FILTER_OPTIONS.ALL ? 'selected' : ''}
            onClick={() => onChange(FILTER_OPTIONS.ALL)}
          >All</a>
        </li>
        <span> </span>
        <li>
          <a
            role="button"
            className={filterOption === FILTER_OPTIONS.ACTIVE ? 'selected' : ''}
            onClick={() => onChange(FILTER_OPTIONS.ACTIVE)}
          >Active</a>
        </li>
        <span/>
        <li>
          <a
            role="button"
            className={filterOption === FILTER_OPTIONS.COMPLETED ? 'selected' : ''}
            onClick={() => onChange(FILTER_OPTIONS.COMPLETED)}
          >Completed</a>
        </li>
      </ul>
    </Fragment>
  )
}

Filter.propTypes = {
  filterOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  numItemsLeft: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  filterOption: getCurrentFilterOptionSelector(state),
  numItemsLeft: getNumberOfRemainingItemsSelector(state)
});

export default connect(mapStateToProps, {
  onChange: setFilter,
})(Filter);