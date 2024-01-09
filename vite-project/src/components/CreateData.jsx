import React, { useState } from "react";
import axios from "axios";

const CreateData = () => {
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
      const res = await axios.post(
        "http://localhost:3003/api/create",
        userData
      );
      seterr(null);
      setuserData({ title: "", note: "", tag: "" });
    } catch (error) {
      seterr(error.response.data.message);
    }
  };
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
        <button type="submit">Add</button>
      </form>
      {err && <p>{err}</p>}
    </div>
  );
};

export default CreateData;
