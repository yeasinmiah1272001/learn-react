import banner from "../../assets/Images/Banner/intro-banner.png";

const ChoiceUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-base-100 shadow-lg mt-12 gap-8 p-6 md:p-12">
      <figure>
        <img className=" md:w-full lg:w-full" src={banner} alt="Banner" />
      </figure>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">WHY CHOOSE US?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          We have high-quality doctors who are ready to help you recover. We
          provide all kinds of medical treatment. We have various research
          laboratory and expert doctors. MediSure ensures the best health care
          as well as clinical service with outstanding personal service. The
          motto of Medisure is that human care is more than healthcare. We
          prefer quality over anything.
        </p>
      </div>
    </div>
  );
};

export default ChoiceUs;
