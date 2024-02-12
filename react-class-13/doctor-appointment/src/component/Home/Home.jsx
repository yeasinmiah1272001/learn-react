import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TimeSchedule from "../TimeSchedule/TimeSchedule";
import Doctors from "../Doctors/Doctors";

const Home = () => {
  const cards = useLoaderData();
  console.log(cards);
  return (
    <div>
      <div>
        <Banner></Banner>
        <ChoiceUs></ChoiceUs>
      </div>

      <div className="grid lg:grid-cols-3 mt-6 gap-6 md:grid-cols-2">
        {cards.slice(0, 6).map((card) => (
          <div key={card.id}>
            <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg w-96 mx-auto h-52"
                  src={card.pic}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                    {card.name}
                  </h5>
                </a>
                <div className=" items-center mt-2.5 mb-5">
                  <h1 className=" text-xl">
                    Specialised Doctors:{card.countDoctors}
                  </h1>

                  <h1 className=" text-xl">open:{card.openDays}</h1>
                  <br />
                  <p>{card.details.slice(0, 70)}</p>
                </div>
                <div className="items-center text-center justify-between">
                  <Link to={`/details/${card.id}`}>
                    <AwesomeButton type="secondary">Details</AwesomeButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* end */}

      <Link to="/service" className="flex justify-center mt-4">
        <AwesomeButton type="secondary">Show all</AwesomeButton>
      </Link>

      <h1 className="text-center font-semibold text-4xl mt-4 text-black">
        Our Time Schedule
      </h1>

      <TimeSchedule></TimeSchedule>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
