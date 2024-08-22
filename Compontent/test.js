import React, { useEffect, useState } from 'react';
import ListOfUser from './Compontent/ListOfProduct';
import axios from 'axios';
function Test() {

var id = 1;
  const [users, setUsers] = useState([]);
  const[name, setName] = useState("");
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => setUsers(res.data)) 
},[])

const postUser = () => {
  axios.post('https://jsonplaceholder.typicode.com/users',{id:id++,name:name})
  .then(res => setUsers([...users,res.data]))
}

  return (
    <div className="App">
      <h1>Favorite Programming Language: </h1>
    {users.map( item => {
      return(
        <div key={item.id}>
          {item.username}
          </div>
      )
    }

    )}
    {/* <ListOfUser/> */}
    <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick={postUser}>Add</button>
    </div>
  );
}

export default Test;


