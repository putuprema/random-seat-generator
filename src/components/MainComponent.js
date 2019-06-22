import React from 'react';
import RowsAndColumnsSelector from './RowsAndColumnsSelector'
import ChairTable from './ChairTable'
import Buttons from './Buttons'
import NamesForm from './NamesForm'

class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: 4,
      rows: 5,
      tableData: [],
      names: ["Putu", "Budi", "Dora", "Ahmad", "Santoso"],
      isNamesFormShown: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateNames = this.updateNames.bind(this)
  }

  componentDidMount() {
    this.generateTableData("rows", this.state.rows, this.state.names)
  }

  generateTableData(rows_or_columns, value, studentNames) {
    let nameIdxAssigned = [];
    let n_namesAssigned = 0;
    let arr = [];
    if (rows_or_columns === "rows") {
      for (let i = 0; i < value; i++) {
        arr[i] = {id: i, columns: []};

        for (let j = 0; j < this.state.columns; j++) {
          let idx;

          do {
            idx = Math.floor(Math.random() * studentNames.length);
          } while (n_namesAssigned < studentNames.length && nameIdxAssigned[idx] === "true");

          if (n_namesAssigned < studentNames.length) {
            arr[i].columns[j] = studentNames[idx];
            nameIdxAssigned[idx] = "true";
            n_namesAssigned++;
          }
          else arr[i].columns[j] = undefined
        }
      }
    }
    else if (rows_or_columns === "columns") {
      for (let i = 0; i < this.state.rows; i++) {
        arr[i] = {id: i, columns: []};
        
        for (let j = 0; j < value; j++) {
          let idx;

          do {
            idx = Math.floor(Math.random() * studentNames.length);
          } while (n_namesAssigned < studentNames.length && nameIdxAssigned[idx] === "true");

          if (n_namesAssigned < studentNames.length) {
            arr[i].columns[j] = studentNames[idx];
            nameIdxAssigned[idx] = "true";
            n_namesAssigned++;
          }
          else arr[i].columns[j] = undefined
        }
      }
    }

    this.setState(
      {tableData: arr, names: studentNames}
    )
  }

  handleChange(event) {
    const {name, value} = event.target
    if (name === "columns" || name === "rows") {
      this.generateTableData(name, value, this.state.names)
      this.setState (
        {[name]: parseInt(value, 10)}
      )
    }
    else {
      this.setState (
        {[name]: value}
      )
    }
  }

  handleClick(event) {
    const {name} = event.target
    switch (name) {
      case "gen": this.generateTableData("rows", this.state.rows, this.state.names); break;
      case "updateName": this.setState(prevState => ( {isNamesFormShown: !prevState.isNamesFormShown} )); break;
      case "reset": window.location.reload(); break;
      default: break;
    }
  }

  updateNames(studentNames) {
    this.generateTableData("rows", this.state.rows, studentNames.split(", "));
  }
  
  render() {
    // console.log(this.state)
    return (
      <div className="MainComponent">
        <RowsAndColumnsSelector handleChange={this.handleChange} state={this.state} /> <br />
        <ChairTable state={this.state} /> <br />
        <Buttons handleClick={this.handleClick} /> <br />
        <NamesForm updateNames={this.updateNames} enabled={this.state.isNamesFormShown} /> <br />
      </div>
    )
  }
}

export default MainComponent;