// src/Form.js
import React, { useState } from "react";

const List = (props) => {
    const { name, email, mobile } = props.userData;
  
    return (
      <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{mobile}</td>
      </tr>
      </>
    );
  };

const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.mobile !== "" &&
      formData.email !== ""
    ) {
      setUser((prev) => [...prev, formData]);
      setFormData({
        name: "",
        email: "",
        mobile: "",
      });
    } else {
      alert("plese enter Your Name, Email and Mobile Number");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      <h2 className="userCardHeader cardHeader">User List</h2>
      {user.length >= 1 && (
        <table className="userListCardContainer">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
          {user &&
            user.map((eachUser) => {
              return <List userData={eachUser} />;
            })}
        </table>
      )}
      {user.length == 0 && <h4 className="noCardHeader">No users </h4>}
    </div>
  );
};

export default User;
