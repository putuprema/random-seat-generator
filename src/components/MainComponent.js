import React from 'react';
import { connect } from 'react-redux';
import {
  generateTable,
  changeRows,
  changeColumns,
  changeSeatPerTable,
  nameformToggle
} from '../actions/appActions';
import RowsAndColumnsSelector from './RowsAndColumnsSelector';
import ChairTable from './ChairTable';
import Buttons from './Buttons';
import NamesForm from './NamesForm';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateNames = this.updateNames.bind(this);
  }

  componentDidMount() {
    this.generateTableData(
      this.props.seatsPerTable,
      'rows',
      this.props.rows,
      this.props.names
    );
  }

  generateTableData(seatsPerTable, rows_or_columns, value, studentNames) {
    let nameIdxAssigned = [];
    let n_namesAssigned = 0;
    let arr = [];

    if (rows_or_columns === 'rows') {
      for (let i = 0; i < value; i++) {
        arr[i] = { id: i, columns: [] };

        for (let j = 0; j < this.props.columns; j++) {
          arr[i].columns[j] = [];

          for (let k = 0; k < seatsPerTable; k++) {
            let idx;

            do {
              idx = Math.floor(Math.random() * studentNames.length);
            } while (
              n_namesAssigned < studentNames.length &&
              nameIdxAssigned[idx] === 'true'
            );

            if (n_namesAssigned < studentNames.length) {
              arr[i].columns[j][k] = studentNames[idx];
              nameIdxAssigned[idx] = 'true';
              n_namesAssigned++;
            } else arr[i].columns[j][k] = undefined;
          }
        }
      }
    } else if (rows_or_columns === 'columns') {
      for (let i = 0; i < this.props.rows; i++) {
        arr[i] = { id: i, columns: [] };

        for (let j = 0; j < value; j++) {
          arr[i].columns[j] = [];

          for (let k = 0; k < seatsPerTable; k++) {
            let idx;

            do {
              idx = Math.floor(Math.random() * studentNames.length);
            } while (
              n_namesAssigned < studentNames.length &&
              nameIdxAssigned[idx] === 'true'
            );

            if (n_namesAssigned < studentNames.length) {
              arr[i].columns[j][k] = studentNames[idx];
              nameIdxAssigned[idx] = 'true';
              n_namesAssigned++;
            } else arr[i].columns[j][k] = undefined;
          }
        }
      }
    }
    this.props.generateTable(arr, studentNames);
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (name === 'columns' || name === 'rows') {
      this.generateTableData(
        this.props.seatsPerTable,
        name,
        value,
        this.props.names
      );
      name === 'rows'
        ? this.props.changeRows(parseInt(value, 10))
        : this.props.changeColumns(parseInt(value, 10));
    } else if (name === 'seatsPerTable') {
      this.generateTableData(
        parseInt(value, 10),
        'rows',
        this.props.rows,
        this.props.names
      );
      this.props.changeSeatPerTable(parseInt(value, 10));
    }
  }

  handleClick(event) {
    const { name } = event.target;
    switch (name) {
      case 'gen':
        this.generateTableData(
          this.props.seatsPerTable,
          'rows',
          this.props.rows,
          this.props.names
        );
        break;
      case 'updateName':
        this.props.nameformToggle();
        break;
      case 'reset':
        window.location.reload();
        break;
      default:
        break;
    }
  }

  updateNames(studentNames) {
    this.generateTableData(
      this.props.seatsPerTable,
      'rows',
      this.props.rows,
      studentNames.split(', ')
    );
  }

  render() {
    return (
      <div className="MainComponent">
        <RowsAndColumnsSelector
          handleChange={this.handleChange}
          state={this.props}
        />
        <br />
        <ChairTable state={this.props} /> <br />
        <Buttons handleClick={this.handleClick} /> <br />
        <NamesForm
          updateNames={this.updateNames}
          enabled={this.props.isNamesFormShown}
        />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.tables.columns,
  rows: state.tables.rows,
  tableData: state.tables.tableData,
  names: state.tables.names,
  isNamesFormShown: state.tables.isNamesFormShown,
  seatsPerTable: state.tables.seatsPerTable
});

export default connect(
  mapStateToProps,
  {
    generateTable,
    changeRows,
    changeColumns,
    changeSeatPerTable,
    nameformToggle
  }
)(MainComponent);
