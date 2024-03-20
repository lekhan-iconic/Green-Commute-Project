import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Randomusers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=200")
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) ||
      user.name.last.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* <Navbar /> */}
      <br />
      <h3 className="text-center text-warning-emphasis fs-4 fw-bold rounded-pill">
        This is about the Random Users Information
      </h3>
      <input
        className="form-control"
        type="text"
        placeholder="Search Based on Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <table className="table table-secondary table-bordered ">
        <thead>
          <tr className="text-center">
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.location.city}</td>
              <td>{user.location.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Randomusers;
