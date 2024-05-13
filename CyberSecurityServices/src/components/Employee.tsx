import { FaArrowRight, FaCloud } from "react-icons/fa6";

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
      <h2 className="text-MainText flex px-4 text-2xl text-start bg-ThirdBackground">
        {name}
      </h2>
      <div className="w-72 h-20  mt-4 flex justify-center items-center">
        <div className="text-6xl text-MainButton">
          <img src={image} />
        </div>
      </div>

      <p className="text-MainText flex px-4 text-base opacity-80 mt-2 text-start">
        {description}
      </p>
      <div className="text-MainButton flex px-4 text-base opacity-80 text-start justify-between mt-auto mb-5">
        <a onClick={handleClickLink} className="hover:scale-110">
          Les mer
        </a>
        <FaArrowRight
          onClick={handleClickLink}
          className="text-SecondButton mt-1 w-5 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default EmployeeCard;
