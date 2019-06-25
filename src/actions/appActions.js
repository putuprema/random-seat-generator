import {
  GENERATE_TABLE,
  CHANGE_ROWS,
  CHANGE_COLUMNS,
  CHANGE_SEATPERTABLE,
  NAMEFORM_TOGGLE
} from './types';

export const generateTable = (tableData, studentNames) => dispatch => {
  dispatch({
    type: GENERATE_TABLE,
    payload: { tableData, studentNames }
  });
};

export const changeSeatPerTable = seatPerTable => dispatch => {
  dispatch({
    type: CHANGE_SEATPERTABLE,
    payload: seatPerTable
  });
};

export const changeRows = rows => dispatch => {
  dispatch({
    type: CHANGE_ROWS,
    payload: rows
  });
};

export const changeColumns = columns => dispatch => {
  dispatch({
    type: CHANGE_COLUMNS,
    payload: columns
  });
};

export const nameformToggle = () => dispatch => {
  dispatch({
    type: NAMEFORM_TOGGLE
  });
};
