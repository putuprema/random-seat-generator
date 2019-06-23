import React from 'react'

function ChairTable(props) {
  return (
    <div className="Chair-table">
      <h1>FRONT</h1>
      <table>
        <tbody>
          {props.state.tableData.map(el => (
            <tr key={el.id}>
              {el.columns.map(el => (
                <td key={Math.random() * 55}>
                  <ul>
                    <li>{el[0]}</li>
                    {el[1] !== undefined ? <li>{el[1]}</li> : undefined}
                  </ul>
                </td>
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