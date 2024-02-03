import { useEffect, useState } from "react";
import Card from "./Card";


const HomeCard = () => {
 const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default HomeCard;