import { UPDATE_TABLE_STATE } from '../actions/data-actions';
import Table10x from '../examples/table-10x-redux';

const initialState = Table10x;

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TABLE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
