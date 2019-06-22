import React from 'react'

function ChairTable(props) {
  return (
    <div className="Chair-table">
      <h1>FRONT</h1>
      <table>
        <tbody>
          {props.state.tableData.map(el => (
            <tr key={el.id}>
              {/* <td>{el.id}</td> */}
              {el.columns.map(el => (
                <td key={el !== undefined ? el + Math.floor(Math.random() * 100) : Math.random() * 55}>{el}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default ChairTable