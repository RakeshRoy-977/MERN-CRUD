import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const ReadData = () => {
  const [data, setdata] = useState([]);

  const handelDelete = async (e) => {
    await axios.delete(`http://localhost:3003/api/delete/${e}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3003/api/getdata");
        setdata(res.data);
      } catch (error) {
        return console.log(error);
      }
    };
    fetchData();
  }, [handelDelete]);

  return (
    <div>
      <Link to={"/create"}>Create</Link>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Note</th>
            <th>Tag</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e._id}>
              <td>{e.title}</td>
              <td>{e.note}</td>
              <td>{e.tag}</td>
              <td>
                <button onClick={() => handelDelete(e._id)}>Delete</button>
                <Link to={`/${e._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadData;
