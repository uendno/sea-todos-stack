import filterReducer from '../filter';
import {ACTIONS, FILTER_OPTIONS} from '../../constants';

describe('reducers/filter', () => {
  it('should handle SET_FILTER correctly', () => {
    const result = filterReducer(undefined, {
      type: ACTIONS.SET_FILTER,
      option: FILTER_OPTIONS.ACTIVE
    });

    expect(result.option).toEqual(FILTER_OPTIONS.ACTIVE);
  })
});
