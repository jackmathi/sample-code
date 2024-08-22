import { useState, useEffect } from "react";

export default function SingleUser() {
  const [user, setUser] = useState({});

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users?id=2")
      .then((res) => res.json())
      .then((data) => {
        console.log("****** ", data[0]);
        setUser(data[0]);
        console.log("*** user", user);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="single">
      <h1>
        Name: <span>{user.name}</span>
      </h1>
      <div>
        Username: <span>{user.username}</span>
      </div>
      <div>
        Email: <span>{user.email}</span>
      </div>
      <div>
        Address:
        <span>
          {user.address.street}, {user.address.city}
        </span>
      </div>
    </div>
  );
}
