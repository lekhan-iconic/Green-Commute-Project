import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredUsers = users.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* <Navbar /> */}
      <br />
      <h3 className="text-center text-success-emphasis fs-4 fw-bold rounded-pill">
        This is the Users page
      </h3>

      <input
        className="form-control"
        type="text"
        placeholder="Search Based on Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <table className="table table-secondary table-bordered ">
        <thead>
          <tr className="text-center">
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((val, index) => (
            <tr key={index}>
              <td className="text-center">{val.id}</td>
              <td>{val.title}</td>
              <td className="text-center">{val.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
