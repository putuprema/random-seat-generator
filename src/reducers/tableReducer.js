import {
  GENERATE_TABLE,
  CHANGE_ROWS,
  CHANGE_COLUMNS,
  CHANGE_SEATPERTABLE,
  NAMEFORM_TOGGLE
} from '../actions/types';

const initialState = {
  columns: 4,
  rows: 5,
  tableData: [],
  names: ['Putu', 'Budi', 'Dora', 'Ahmad', 'Santoso'],
  isNamesFormShown: false,
  seatsPerTable: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_TABLE:
      return {
        ...state,
        tableData: action.payload.tableData,
        names: action.payload.studentNames
      };
    case CHANGE_SEATPERTABLE:
      return {
        ...state,
        seatsPerTable: action.payload
      };
    case CHANGE_ROWS:
      return {
        ...state,
        rows: action.payload
      };
    case CHANGE_COLUMNS:
      return {
        ...state,
        columns: action.payload
      };
    case NAMEFORM_TOGGLE:
      return {
        ...state,
        isNamesFormShown: !state.isNamesFormShown
      };
    default:
      return state;
  }
}
