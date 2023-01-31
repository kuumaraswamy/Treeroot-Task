import React from 'react'
import './Table.css';
const Table = (props) => {
  return (
    
    <table className="table">
  <thead className="table-header">
    <tr>
      <th>Name</th>
      <th>Company</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    {props.data.map((item, index) => (
      <tr key={index} className="table-row">
        <td className="table-cell">{item.name}</td>
        <td className="table-cell">{item.company}</td>
        <td className="table-cell">{item.location}</td>
      </tr>
    ))}
  </tbody>
</table>

  )
}

export default Table
