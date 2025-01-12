import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  });

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8800/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:8800/users/${userId}`);
    getUsers();
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List Users</h2>
      <Link to="/users/add" className="button is-primary mb-2">
        Add Users <BiAddToQueue />
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Telpon</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.telp}</td>
              <td>{user.role}</td>
              <Link
                to={`/users/edit/${user.uuid}`}
                className="button is-small is-info"
              >
                Edit <CiEdit />
              </Link>
              <button
                onClick={() => deleteUser(user.uuid)}
                className="button is-small is-danger"
              >
                Delete <AiOutlineDelete />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
