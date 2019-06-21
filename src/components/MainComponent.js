import React from 'react';
import RowsAndColumnsSelector from './RowsAndColumnsSelector'
import ChairTable from './ChairTable'

class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: 4,
      rows: 5,
      tableData: [],
      names: ["Putu", "Budi", "Dora", "Ahmad", "Santoso"]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.generateTableData("rows", this.state.rows)
  }

  // generateColumns(n_columns) {
  //   let arr = [];
  //   for (let i = 0; i < n_columns; i++) {
  //     arr[i] = this.state.names[Math.floor(Math.random() * 5)];
  //   }
  //   return arr;
  // }

  generateTableData(name, value) {
    let nameIdxAssigned = [];
    let n_namesAssigned = 0;
    let arr = [];
    if (name === "rows") {
      for (let i = 0; i < value; i++) {
        arr[i] = {id: i, columns: []};

        for (let j = 0; j < this.state.columns; j++) {
          let idx = Math.floor(Math.random() * this.state.names.length);

          do {
            idx = Math.floor(Math.random() * this.state.names.length);
          } while (n_namesAssigned < this.state.names.length && nameIdxAssigned[idx] === "true");

          if (n_namesAssigned < this.state.names.length) {
            arr[i].columns[j] = this.state.names[idx];
            nameIdxAssigned[idx] = "true";
            n_namesAssigned++;
          }
          else arr[i].columns[j] = undefined
        }
      }
    }
    else if (name === "columns") {
      for (let i = 0; i < this.state.rows; i++) {
        arr[i] = {id: i, columns: []};
        
        for (let j = 0; j < value; j++) {
          let idx = Math.floor(Math.random() * this.state.names.length);

          do {
            idx = Math.floor(Math.random() * this.state.names.length);
          } while (n_namesAssigned < this.state.names.length && nameIdxAssigned[idx] === "true");

          if (n_namesAssigned < this.state.names.length) {
            arr[i].columns[j] = this.state.names[idx];
            nameIdxAssigned[idx] = "true";
            n_namesAssigned++;
          }
          else arr[i].columns[j] = undefined
        }
      }
    }

    this.setState(
      {tableData: arr}
    )
  }

  handleChange(event) {
    const {name, value} = event.target
    if (name === "columns" || name === "rows") {
      this.generateTableData(name, value)
    }
    this.setState (
      {[name]: parseInt(value, 10)}
    )
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="MainComponent">
        <RowsAndColumnsSelector handleChange={this.handleChange} state={this.state} /> <br />
        <ChairTable state={this.state} />
      </div>
    )
  }
}

export default MainComponent;