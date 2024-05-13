import { FaArrowRight } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  url?: string;
};

const Card = ({ title, description, icon, url }: Props) => {
  const handleClickLink = () => {
    console.log("Link clicked");
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("No URL provided");
    }
  };

  return (
    <div className="flex flex-col w-96 h-96 bg-gradient-to- from bg-MainBackground to-SecondaryBackground rounded-lg border-ThirdBackground border-2 m-4">
      <div className="w-20 h-20 bg-ThirdBackground rounded-full mt-4 ml-4 mb-2 flex justify-center items-center">
        <div className="text-6xl text-MainButton">{icon}</div>
      </div>
      <h2 className="text-MainText flex px-4 text-2xl text-start">{title}</h2>
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

export default Card;
