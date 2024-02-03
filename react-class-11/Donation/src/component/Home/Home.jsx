import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";


const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.toLowerCase();

    const filteredCards = cards.filter((item) => item.category.toLowerCase().includes(searchQuery))
    setCards(filteredCards)
  };

  return (
    <div>
      <Banner handleSearch={handleSearch}></Banner>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link key={card.id} to={`/card/${card.id}`}>
              <div className=" bg-white border border-gray-300 rounded-md overflow-hidden shadow-md ">
                <img className="w-full h-52  mx-auto mt-4" src={card.picture} />

                <div
                  style={{ backgroundColor: card.category_bg_color }}
                  className="p-4"
                >
                  <div className="flex items-center justify-between mb-2 mx-auto">
                    <span
                      style={{ backgroundColor: card.text_button_bg_color }}
                      className="text-white rounded-s-md m-3 "
                    >
                      {card.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
