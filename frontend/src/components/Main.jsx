import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Main() {
  const [cards, setCards] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/cards")
      .then((response) => {
        setCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex w-full justify-center">
      {" "}
      <div className="grid grid-cols-2 max-w-6xl gap-10 py-10 px-4 break-all flex-1">
        {cards &&
          cards.map((card, index) => (
            <Card
              title={card.title}
              description={card.description}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
