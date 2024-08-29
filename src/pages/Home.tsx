import Description from "@/components/common/Description";
import Logo from "@/components/common/Logo";
import Navbar from "@/components/common/Navbar";
import Button from "@/components/common/Button";
import BackgroundSection from "../layout/BackgroundSection";
import PlantSection from "../layout/PlantSection";
import DownSection from "../layout/DownSection";
import Footer from "../layout/Footer";
import LPImage from "../assets/landingpage-img.svg"

const Home = () => {
  return (
    <>
      <div className="min-h-screen p-4 flex flex-col">
        <Navbar className="font-bold" />
        <div className="flex-1 flex justify-evenly items-center">
          <div className="space-y-6 bg-slate-200 w-1/2 p-4">
            <Logo className="text-8xl font-bold">
              <span className="text-hijau">
                Green<span className="text-hitam">Tech.</span>
              </span>
            </Logo>
            <Description />
            <Button>wkwkwk</Button>
          </div>
          <div className="relative bg-cover bg-no-repeat">
            <img src={LPImage} alt="LandingPage" />
          </div>
        </div>
      </div>
      <BackgroundSection />
      <PlantSection />
      <DownSection />
      <Footer />
    </>
  );
};

export default Home;
