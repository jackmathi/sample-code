import axios from "axios";
import React, { useEffect, useState } from "react";

const ListOfUser = () => {
    const [users, setUsers] = useState([])
  
    const fetchUserData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
    useEffect(() => {
      fetchUserData()
    }, [])
  
    return (
      <div>
        {users.length > 0 && (
          <div>
            {users.map(user => (
              <div key={user.id}>{user.id} {user.name}
              <p>{user.email}</p>
              </div>

            ))}
          </div>
        )}
      </div>
    );
  }
  export default ListOfUser;

