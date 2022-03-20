import React from 'react'
import './Table.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const Table = ({users}) => {
  const DisplayData=users.map((user)=>{
    return(
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><EditIcon onClick={() => setEdit({ id: todo.id, value: todo.text })}/></td>
        <td><DeleteOutlineIcon className='delete-icon' type="button" onClick={() => this.onRemoveItem(user.id)} /></td>
      </tr>
    )
  }
)
    return (
    <div className="container">
    <h1 className='title'>Medical Records</h1>
      <form className='form'>
        <table className="user-info">
          <tr>
            <th>UserID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          <tbody className="table"> 
            {DisplayData}     
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Table
