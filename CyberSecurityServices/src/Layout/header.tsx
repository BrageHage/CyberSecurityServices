import { FaTwitter } from "react-icons/fa6";
import Logo from "../assets/LogoMain.png";
import "../Styles/index.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { handleClickUrl } from "../Functions/utils";

const Header = () => {
  return (
    <div className="flex justify-between w-full md:px-24 px-2 animate-gradient bg-gradient-to-t from-MainBackground via-SecondaryBackground to-ForthBackground">
      <img
        src={Logo}
        className="md:*: w-40 my-4"
        onClick={() => {
          handleClickUrl("/", false);
        }}
      />
      <div className="hidden md:*: lg:flex flex-row mt-8 text-l text-MainText text-opacity-80 ">
        <p className="px-12">Om Oss</p>
        <p className="px-12 ">Finn oss</p>
        <p
          className="px-12 "
          onClick={() => {
            handleClickUrl("/kontakt", false);
          }}
        >
          Kontakt oss
        </p>
      </div>
      <div className="flex flex-row my-4  ">
        <div
          className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton mx-2"
          onClick={() =>
            handleClickUrl("https://twitter.com/home?lang=en", true)
          }
        >
          <FaTwitter color="#39ECF3" />
        </div>
        <div
          className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton mx-2"
          onClick={() => handleClickUrl("https://www.linkedin.com/", true)}
        >
          <FaLinkedinIn color="#39ECF3" />
        </div>
        <div
          className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton mx-2"
          onClick={() => handleClickUrl("https://www.instagram.com/", true)}
        >
          <FaInstagram color="#39ECF3" />
        </div>
        <div
          className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton mx-2"
          onClick={() => handleClickUrl("https://www.facebook.com/", true)}
        >
          <FaFacebookF color="#39ECF3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
