import { FaCircleArrowDown, FaCloudArrowDown } from "react-icons/fa6";
import Card from "./components/Card";
import { GiProtectionGlasses } from "react-icons/gi";
import { SiHackaday } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import EmployeeCard from "./components/Employee";
import { Map } from "./components/MapComponent";

const handleScroll = () => {
  const element = document.getElementById("cardSection");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-screen ">
      <h1 className="text-MainText md:text-9xl text-5xl font-extrabold shadow-lg mt-32 mb-14">
        Cyber Security Services
      </h1>
      <p className="text-MainText opacity-80 font-sans md:text-xl">
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
      <div onClick={handleScroll}>
        <FaCircleArrowDown className="w-16 h-16 text-MainButton animate-bounce mt-20 mb-24" />
      </div>

      <div className="flex flex-wrap py-24 sm: justify-center" id="cardSection">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EmployeeCard
          name="Frode Alfredsen"
          image="https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256"
          description="Frode Alfredsen er en av våre mest erfarne sikkerhetsanalytikere. Han har jobbet med cybersikkerhet i over 20 år og har en doktorgrad i informatikk fra Universitetet i Oslo."
          url="https://github.com/BrageHage"
        />
        <EmployeeCard
          name="Alfred kongen"
          //give me random image link
          image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
          description="Alfred Kongen er en sikkerhetsanalytiker med en mastergrad i informatikk fra NTNU. Han har jobbet med cybersikkerhet i over 10 år og har spesialisert seg på nettverkssikkerhet."
          url="https://github.com/BrageHage"
        />
        <EmployeeCard
          name="Rolf Hansen"
          image="https://www.w3schools.com/w3images/team2.jpg"
          description="Rolf Hansen er en etisk hacker som har jobbet med cybersikkerhet i over 15 år. Han har en bachelorgrad i informatikk fra Universitetet i Bergen og har spesialisert seg på penetrasjonstesting."
          url="https://github.com/BrageHage"
        />
        <EmployeeCard
          name="Jacub Elfenbein"
          image="https://www.w3schools.com/w3images/team3.jpg"
          description="Jacub Hansen spesielliserer seg på sikkerhet i skyen. Han har jobbet med cybersikkerhet i over 10 år og har en mastergrad i informatikk fra NTNU."
          url="https://github.com/BrageHage"
        />
        <EmployeeCard
          name="Morten Mortensen"
          image="https://www.w3schools.com/w3images/team4.jpg"
          description="Morten Mortensen er en sikkerhetsanalytiker med en bachelorgrad i informatikk fra Universitetet i Oslo. Han har jobbet med cybersikkerhet i over 5 år og har spesialisert seg på trusseljakt."
          url="https://github.com/BrageHage"
        />
        <EmployeeCard
          name="Kari Karlsen"
          image="https://www.w3schools.com/w3images/team1.jpg"
          description="Kari Karlsen er en sikkerhetsanalytiker med en mastergrad i informatikk fra NTNU. Hun har jobbet med cybersikkerhet i over 10 år og har spesialisert seg på datasikkerhet."
          url="https://github.com/BrageHage"
        />
      </div>
      <h1 className="text-MainText text-7xl font-extrabold shadow-lg mt-64 mb-14">
        Finn oss
      </h1>
      <div className="md:mt-20 mt-0">
        <Map />
      </div>
    </div>
  );
}

export default App;
