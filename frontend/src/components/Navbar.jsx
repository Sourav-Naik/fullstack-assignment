import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const [searchTitle, setSearchTitle] = useState("");
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTitle.trim()) {
      axios
        .get(`http://localhost:3000/cards/${encodeURIComponent(searchTitle)}`)
        .then((response) => {
          setCard(response.data);
          navigate(`/search/${encodeURIComponent(searchTitle)}`, {
            state: { card: response.data },
          });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div className="bg-[#DADBF0]">
      <div className="bg-black p-3 text-white text-lg sm:text-2xl">
        <div className="container flex justify-between items-center mx-auto text-nowrap">
          <Link to="/">
            <span className="font-medium">Abstract</span> | Help Center
          </Link>
          <Link
            to="/new"
            className="border rounded-lg px-4 py-2 font-medium opacity-75 bg-white bg-opacity-15 hover:opacity-100 active:opacity-75"
          >
            Submit a request
          </Link>
        </div>
      </div>
      <div className="flex-1 py-14 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-4xl md:text-6xl font-semibold px-10 md:px-14 text-center">
            How can we help?
          </p>
          <div className="relative my-6 px-3 min-w-full max-w-md">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="outline-none border border-black rounded py-3 px-5 w-full"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              type="button"
              aria-label="Search"
              className="absolute bottom-0 right-6 material-symbols-outlined h-full flex items-center"
              onClick={handleSearch}
            >
              arrow_forward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
