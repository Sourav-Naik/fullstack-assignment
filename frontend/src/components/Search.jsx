import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

export default function Search() {
  const location = useLocation();
  const { card } = location.state || {};

  return (
    <div className="mx-auto container flex justify-center py-10 px-4">
      <div className="flex-1 max-w-3xl">
        {card ? (
          <Card title={card.title} description={card.description} />
        ) : (
          <p>No card data found.</p>
        )}
      </div>
    </div>
  );
}
