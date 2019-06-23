import React from 'react'

function RowsAndColumnsSelector(props) {
  return (
    <div className="Rows-and-columns-selector">
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                Columns: <br />
                <select name="columns" value={props.state.columns} onChange={props.handleChange} className="selector">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  {/* <option value="7">7</option>
                  <option value="8">8</option> */}
                </select>
              </label>
            </td>
            <td>
              <label>
                Rows: <br />
                <select name="rows" value={props.state.rows} onChange={props.handleChange} className="selector">
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
          </tr>
          <tr>
            <td colSpan="2">
              <label>
                Seats Per Table: <br />
                <select name="seatsPerTable" value={props.state.seatsPerTable} onChange={props.handleChange} className="selector">
                  <option value="1">One Seat per Table</option>
                  <option value="2">Two Seats per Table</option>
                </select>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RowsAndColumnsSelector