import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import LogoMain from "../assets/LogoMain.png";
import Stores from "../assets/stores.png";

const Footer = () => {
  return (
    <div className=" hidden md:grid grid-flow-row gap-6 mt-32 animate-gradient bg-gradient-to-t from-MainBackground via-SecondaryBackground to-ForthBackground">
      <div className="flex flex-row justify-center space-x-40 mt-5">
        <div className="w-64 hidden md:block">
          <img src={LogoMain} alt="" className="w-40 " />
          <p className="text-start text-sm text-MainText opacity-50 w-64 mt-5">
            En ledende leverandør av cybersikkerhetstjenester og løsninger for
            distribusjons- og teknologipartnere rundt om i USA.
          </p>
        </div>
        <div className="flex flex-col space-y-2 ">
          <h2 className="text-2xl text-MainText font-semibold">Om Oss</h2>
          <p className="text-MainText opacity-50">Vårt team</p>
          <p className="text-MainText opacity-50">Karriere</p>
          <p className="text-MainText opacity-50">Partnere</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl text-MainText font-semibold">Kontakt oss</h2>
          <p className="text-MainText opacity-50">
            Adresse: Satkhira, Kalihanj, BD
          </p>
          <p className="text-MainText opacity-50">
            Email: aburaihan.it009@gmail.com
          </p>
          <p className="text-MainText opacity-50">Telefon: +880 1715-662-988</p>
        </div>
        <div>
          <h2 className="text-2xl text-MainText font-semibold">Finn oss</h2>
          <div className="flex flex-row space-x-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton">
              <FaTwitter color="#39ECF3" />
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton">
              <FaLinkedinIn color="#39ECF3" />
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton">
              <FaInstagram color="#39ECF3" />
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-MainButton">
              <FaFacebookF color="#39ECF3" />
            </div>
          </div>
        </div>
        <img src={Stores} alt="" className="w-64" />
      </div>
      <hr className="border-1 my-2 border-ThirdBackground" />
      <div>
        <p className="text-MainText text-center text-sm opacity-50 mb-5 ">
          © 2023 Cyber Security Services. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
