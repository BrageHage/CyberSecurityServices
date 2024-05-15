import { useEffect, useState } from "react";

const CookieComponent = () => {
  const [acceptCookie, setAcceptCookie] = useState(false);
  const handleCookie = () => {
    if (!acceptCookie) {
      // Set cookie in localStorage
      document.cookie = "cookie=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      setAcceptCookie(true);
    }
  };
  useEffect(() => {
    if (document.cookie.includes("cookie=true")) {
      setAcceptCookie(true);
    }
  }, []);

  if (acceptCookie) {
    return null;
  } else {
    return (
      <div className="flex flex-col justify-center w-80 h-64 bg-gradient-to- from bg-MainBackground to-SecondaryBackground rounded-lg border-ThirdBackground border-2 m-4 text-MainText z-20 sticky bottom-80">
        <div className="px-4">
          <p className="text-start mb-5">
            We use cookies to ensure that we give you the best experience on our
            website. If you continue to use this site we will assume that you
            are happy with it.
          </p>
          <div className="flex w-full justify-between px-10">
            <button
              onClick={handleCookie}
              className="flex justify-center items-center text-center border-2 border-ForthBackground bg-gradient-to-t from-SecondGradient to-FirstGradient text-MainText font-bold rounded-lg w-24 h-10 hover:bg-SecondButton hover:scale-110 border-SecondButton transition-all duration-300 ease-in-out"
            >
              <p>Godta</p>
            </button>

            <button
              onClick={handleCookie}
              className="hover:scale-110 transition-all duration-300 ease-in-out text-sm"
            >
              Ikke Godta
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default CookieComponent;
