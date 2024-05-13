import Waves from "./assets/waves.png";

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-screen ">
      <h1 className="text-MainText text-9xl font-extrabold shadow-lg mt-32 mb-14">
        Cyber Security Services
      </h1>
      <p className="text-MainText opacity-80 font-sans">
        “Cyber Security Services” er et amerikansk basert cybersikkerhetsselskap
        som også har kontorer på Hamar leverer tjenester og håndterer
        cyber-risiko
        <br />
        på vegne av våre verdsatte distribusjons- og teknologipartnere.
      </p>

      <button className="flex justify-center align-middle text-center mt-24">
        <p className="w-48 h-16 text-2xl text-MainText bg-gradient-to-t from-SecondGradient to-FirstGradient  font-bold rounded-lg flex items-center justify-center">
          Les Mer Her
        </p>
      </button>
    </div>
  );
}

export default App;
