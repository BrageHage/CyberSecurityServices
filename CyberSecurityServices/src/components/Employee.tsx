import { FaArrowRight, FaCloud, FaGithub } from "react-icons/fa6";

type Props = {
  name?: string;
  description?: string;
  image?: string;
  url?: string;
};

const EmployeeCard = ({ name, description, image, url }: Props) => {
  const handleClickLink = () => {
    console.log("Link clicked");
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("No URL provided");
    }
  };

  return (
    <div className="flex flex-col w-96 h-[40rem] bg-gradient-to- from bg-MainBackground to-SecondaryBackground rounded-lg border-ThirdBackground border-2 m-4">
      <h2 className="text-MainText h-16 flex items-center text-2xl text-center px-2 font-semibold bg-ThirdBackground ">
        {name}
      </h2>
      <div className="flex justify-center items-center">
        <div className="text-6xl text-MainButton object-fill ">
          <img
            src={image}
            className="min-w-80 min-h-80 max-w-80 max-h-80 mt-3 rounded-lg"
          />
        </div>
      </div>
      <hr className="border-1 my-2 border-ThirdBackground"></hr>
      <p className="text-MainText flex px-4 text-base opacity-80 mt-4 text-start">
        {description}
      </p>
      <div
        className="text-MainButton flex px-4 text-base opacity-80 text-start mt-auto mb-5 hover:text-xl transition-all duration-400 ease-in-out"
        onClick={handleClickLink}
      >
        <a>GitHub</a>
        <FaGithub className="text-SecondButton mt-1 w-5 ml-3" />
      </div>
    </div>
  );
};

export default EmployeeCard;
