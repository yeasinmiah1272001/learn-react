import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";


const Doctor = ({ doctor, handlShowAll }) => {
  const { pic, fees, time, weekDays, categories, name, id } = doctor;
  return (
    <div>
      <Card className="">
        <CardHeader shadow={false} floated={false} className="w-full">
          <img src={pic} alt="card-image" className="h-full w-auto" />
          <h1 className="text-center text-2xl font-semibold mt-2">{name}</h1>
        </CardHeader>
        <CardBody>
          <div className=" items-center justify-between">
            <Typography color="blue-gray" className="font-semibold text-xl">
              {categories}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-semibold text-sm"
          >
            Open: {weekDays} {time}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-semibold text-sm"
          >
            Fee: {fees}$
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="items-center text-center justify-between">
            <Link to={`appoint/${id}`}>
              <AwesomeButton type="secondary">Appointment</AwesomeButton>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Doctor;