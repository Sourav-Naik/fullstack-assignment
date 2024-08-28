import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function New() {
  const [data, setData] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    axios
      .post("http://localhost:3000/cards", data)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  return (
    <div className="flex flex-col mx-auto gap-4 container py-10 px-5">
      <p className="font-semibold text-xl relative top-3">Title</p>
      <input
        type="text"
        name="Title"
        id="Title"
        placeholder="Title"
        className="outline-none border rounded px-4 py-2"
        onChange={(e) => {
          setData({ ...data, title: e.target.value });
        }}
      />
      <p className="font-semibold text-xl relative top-3">Description</p>
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        className="outline-none border rounded px-4 py-2"
        onChange={(e) => {
          setData({ ...data, description: e.target.value });
        }}
      />
      <button
        className="rounded w-fit px-4 py-1 ms-auto bg-blue-500 text-white hover:scale-110 active:scale-100"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
