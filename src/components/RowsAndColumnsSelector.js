import React from 'react';
import { connect } from 'react-redux';
import {
  generateTable,
  changeRows,
  changeColumns,
  changeSeatPerTable
} from '../actions/appActions';

class RowsAndColumnsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'columns':
        this.props.generateTable(
          this.props.seatsPerTable,
          name,
          value,
          this.props.names
        );
        this.props.changeColumns(parseInt(value, 10));
        break;
      case 'rows':
        this.props.generateTable(
          this.props.seatsPerTable,
          name,
          value,
          this.props.names
        );
        this.props.changeRows(parseInt(value, 10));
        break;
      case 'seatsPerTable':
        this.props.generateTable(
          value,
          'rows',
          this.props.rows,
          this.props.names
        );
        this.props.changeSeatPerTable(parseInt(value, 10));
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="Rows-and-columns-selector">
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  Columns: <br />
                  <select
                    name="columns"
                    value={this.props.columns}
                    onChange={this.handleChange}
                    className="selector"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </label>
              </td>
              <td>
                <label>
                  Rows: <br />
                  <select
                    name="rows"
                    value={this.props.rows}
                    onChange={this.handleChange}
                    className="selector"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label>
                  Seats Per Table: <br />
                  <select
                    name="seatsPerTable"
                    value={this.props.seatsPerTable}
                    onChange={this.handleChange}
                    className="selector"
                  >
                    <option value="1">One Seat per Table</option>
                    <option value="2">Two Seats per Table</option>
                  </select>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.tables.columns,
  rows: state.tables.rows,
  names: state.tables.names,
  seatsPerTable: state.tables.seatsPerTable
});

export default connect(
  mapStateToProps,
  {
    generateTable,
    changeRows,
    changeColumns,
    changeSeatPerTable
  }
)(RowsAndColumnsSelector);
