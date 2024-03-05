import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsCart = () => {
  const cardDetails = useLoaderData();
  const [card, setCard] = useState([]);
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    const cardFilter = cardDetails.filter((item) => item.id === idInt);
    setCard(cardFilter); // Update the card state with filtered result
  }, [cardDetails, idInt]); // Add cardDetails and idInt to the dependency array
  return (
    <div>
      <h1>Details</h1>
      {/* Render card details here */}
      {card.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          {/* Add other details you want to display */}
        </div>
      ))}
    </div>
  );
};

export default DetailsCart;
