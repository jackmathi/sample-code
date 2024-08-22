import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, EditableText, InputGroup } from '@blueprintjs/core';

export const Tablelist = () => {

const [users, setUser] = useState([]);
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [city, setCity] = useState("")

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => setUser(res.data))
},[])

function addUser(){
    const newName = name.trim();
    const newEmail = email.trim();
    const newCity = city.trim();

    if(newName && newEmail && newCity)
    {
        axios.post('https://jsonplaceholder.typicode.com/users')
    }

}

  return (
    <div>
        <table className='bp4-html-table modifier'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Action</th>

            </thead>
            <tbody>
{users.map(item =>{
    return(
        <tr key="{users.id}">
                    <td>{item.id}</td>
                    <td>{item.username}</td>
      <td><EditableText value={item.email}/></td>
       <td><EditableText value={item.address.city}/></td>
                    <td>
                    <Button intent='primary'>Update</Button>
                    <Button intent='danger'>Delete</Button>
                    </td>
                    
                </tr>
    )
}
)}         
            </tbody>
<tfoot>
    <tr>
        <td></td>
        <td>
<InputGroup value={name} onChange={(e) => setName(e.target.value)}
placeholder='Entery you Name...'
/> 
        </td>
        <td>
<InputGroup value={email} onChange={(e) => setEmail(e.target.value)}
placeholder='Entery you Email id...'
/> 
        </td>
        <td>
<InputGroup value={city} onChange={(e) => setCity(e.target.value)}
placeholder='Entery City...'
/>
        </td>
        <td>
            <Button intent='success' onClick={addUser}>Add User</Button>
        </td>
    </tr>
</tfoot>

        </table>
    </div>
  );
}
