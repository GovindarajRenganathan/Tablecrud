import React from 'react';
export default function Table1({getData,setData,deleteUser}) {
  return (
    <table className="table table-hover">
    <thead>
    <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Remove</th>
    </tr>
    </thead>
    <tbody>
    { getData.length > 0 ?
      getData.map((val,i,) => <tr key={val._id}>
      <td>{i+1}</td>
      <td>{val.name}</td>
      <td>{val.age}</td>
      <td>{val.email}</td>
      <td><button type="button" className="btn btn-primary"onClick={e =>{setData(val)}} >Edit</button></td>
      <td><button type="button" className="btn btn-danger"onClick={e =>{deleteUser(val,e)}}>delete</button></td>
      </tr>)
      :<tr><td>Nodata</td></tr>
      }
    </tbody>
  </table>
  )
}
