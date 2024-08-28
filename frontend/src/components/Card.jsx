import React from "react";

export default function Card(props) {
  return (
    <div className="border border-gray-300 rounded-lg bg-slate-400 bg-opacity-15 w-full">
      <p className="px-4 py-1 capitalize font-semibold text-xl break-all">
        {props.title}
      </p>
      <div className="w-full h-[1px] bg-gray-300"></div>
      <p className="pt-4 pb-8 px-4 break-all">{props.description}</p>
    </div>
  );
}
