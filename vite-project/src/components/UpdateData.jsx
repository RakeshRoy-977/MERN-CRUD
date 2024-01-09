import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateData = () => {
  const { id } = useParams();
  console.log(id);
  const [userData, setuserData] = useState({
    title: "",
    note: "",
    tag: "",
  });

  const [err, seterr] = useState(null);

  const handelchange = (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
    console.log(userData);
  };
  const handelSumit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3003/api/update/${id}`,
        userData
      );
      seterr(null);
      setuserData({ title: "", note: "", tag: "" });
    } catch (error) {
      seterr(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3003/api/${id}`);
        setuserData(res.data);
      } catch (error) {
        return console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <form onSubmit={handelSumit}>
        <input
          type="text"
          placeholder="Title"
          onChange={handelchange}
          value={userData.title}
          name="title"
        />
        <input
          type="text"
          placeholder="Note"
          onChange={handelchange}
          value={userData.note}
          name="note"
        />
        <input
          type="text"
          placeholder="tag"
          onChange={handelchange}
          value={userData.tag}
          name="tag"
        />
        <button type="submit">Update</button>
      </form>
      {err && <p>{err}</p>}
    </div>
  );
};

export default UpdateData;
