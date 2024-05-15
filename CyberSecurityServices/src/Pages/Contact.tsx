import CookieComponent from "../components/CookieComponent";

const KontaktSkjema = () => {
  const handleSubmit = () => {
    alert("Din melding er sendt!");
  };
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col w-[60rem] h-[32rem] bg-gradient-to- from bg-MainBackground to-SecondaryBackground rounded-lg border-ThirdBackground border-2 m-4">
        <h2 className="text-MainText flex px-4 text-3xl text-start mt-4">
          Kontakt oss med epost
        </h2>
        <div className="flex flex-col justify-start mt-8">
          <p className="text-MainText flex px-4 text-base opacity-80 mt-2 mr-4 text-start">
            Din epost
            <p className="text-MainButton">*</p>
          </p>
          <input
            type="text"
            className="w-96 h-10 bg-ThirdBackground rounded-lg border-ThirdBackground border-2 mt-2 ml-2 text-MainText flex px-4 text-base opacity-80 text-start "
            placeholder="Skriv din epost her"
          />
        </div>
        <div className="flex flex-col justify-start mt-8">
          <p className="text-MainText flex px-4 text-base opacity-80 mt-2 mr-4 text-start">
            Din melding
            <p className="text-MainButton">*</p>
          </p>
          <textarea
            className="w-[40rem] h-48 bg-ThirdBackground rounded-lg border-ThirdBackground border-2 mt-2 ml-2 text-MainText flex px-4 text-base opacity-80 text-start resize-none"
            placeholder="Maks 500 tegn"
          />
        </div>
        <div className="flex flex-row justify-start mt-4 px-2">
          <button
            className="flex justify-center items-center text-center border-2 border-ForthBackground bg-gradient-to-t from-SecondGradient to-FirstGradient text-MainText font-bold rounded-lg w-24 h-10 hover:bg-SecondButton hover:scale-110 border-SecondButton transition-all duration-300 ease-in-out mr-4"
            onClick={handleSubmit}
          >
            <p>Send</p>
          </button>
        </div>
      </div>
      <CookieComponent />
    </div>
  );
};

export default KontaktSkjema;
