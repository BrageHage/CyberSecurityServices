import { FaCircleArrowDown, FaCloudArrowDown } from "react-icons/fa6";
import Card from "./components/Card";
import { GiProtectionGlasses } from "react-icons/gi";
import { SiHackaday } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import EmployeeCard from "./components/Employee";

const handleScroll = () => {
  const element = document.getElementById("cardSection");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-screen ">
      <h1 className="text-MainText text-9xl font-extrabold shadow-lg mt-32 mb-14">
        Cyber Security Services
      </h1>
      <p className="text-MainText opacity-80 font-sans text-xl">
        “Cyber Security Services” er et amerikansk basert cybersikkerhetsselskap
        som også har kontorer på Hamar leverer tjenester og håndterer
        cyber-risiko
        <br />
        på vegne av våre verdsatte distribusjons- og teknologipartnere.
      </p>

      <button className="flex justify-center align-middle text-center mt-24">
        <p
          className="w-48 h-16 text-2xl text-MainText bg-gradient-to-t from-SecondGradient to-FirstGradient  font-bold rounded-lg flex items-center justify-center"
          onClick={handleScroll}
        >
          Les Mer Her
        </p>
      </button>
      <FaCircleArrowDown className="w-16 h-16 text-MainButton animate-bounce mt-20 mb-24" />
      <div className="flex flex-wrap md:flex-nowrap py-24" id="cardSection">
        <Card
          title="Administrert deteksjon og respons"
          icon={<FaCloudArrowDown />}
          description="Vi tar nummer 1 programvaren for forebygging av brudd, CrowdStrike, og kobler den sammen med 100 % amerikanske trusseljakt- og responstjenester 24x7x365..."
          url="https://www.crowdstrike.com/"
        />
        <Card
          title="Virtual CISO"
          icon={<GiProtectionGlasses />}
          description="Vi kan fungere som din virtuelle Chief Information Security Officer (vCISO), og bringe spesialisert cybersikkerhetsekspertise til organisasjonen din, utforme et modent cybersikkerhetsprogram og spesielt redusere risiko."
        />
        <Card
          title="Penetrasjonstesting"
          icon={<SiHackaday />}
          description="Vårt team for penetrasjonstesting kan identifisere cybersikkerhetssårbarheter før en inntrenger får muligheten til å infiltrere nettverket eller datasystemet ditt. Vi vil avdekke svakheter på nettverket ditt eller i applikasjoner."
        />
        <Card
          title="Cybersikkerhet"
          icon={<MdOutlineSecurity />}
          description="Vårt team for penetrasjonstesting kan identifisere cybersikkerhetssårbarheter før en inntrenger får muligheten til å infiltrere nettverket eller datasystemet ditt. Vi vil avdekke svakheter på nettverket ditt eller i applikasjoner."
        />
      </div>
      <h1 className="text-MainText text-7xl font-extrabold shadow-lg mt-32 mb-14">
        Våre Ansatte
      </h1>
      <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-20">
        <EmployeeCard
          name="Frode Alfredsen"
          image="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256"
        />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
}

export default App;
