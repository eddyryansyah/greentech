import Description from "@/components/common/Description";
import Logo from "@/components/common/Logo";
import Navbar from "@/components/common/Navbar";
import Button from "@/components/common/Button";
import BackgroundSection from "../layout/BackgroundSection";
import PlantSection from "../layout/PlantSection";
import DownSection from "../layout/DownSection";
import Footer from "../layout/Footer";
import LPImage from "../assets/landingpage-img.svg";
// import icGreentech from "../assets/ic-greentech(logoGreen).svg";
import Background from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import { MAINFEATURE_URL } from "@/components/router";
import { FaAngleRight } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Navbar />
        <div className="flex-1 flex justify-evenly items-center p-4">
          <div className="flex flex-col items-start text-start w-1/2 p-4">
            <Logo className="text-8xl font-bold">
              <span className="text-hijau">
                Green<span className="text-hitam">Tech.</span>
              </span>
            </Logo>
            <Description classname="font-bold text-lg mb-4">
              “Menemukan Tanaman Ideal untuk Setiap Tanah!”
            </Description>
            <Button
              variant="contained"
              rounded="lg"
              className="justify-start font-semibold py-3 px-6"
              onClick={() => navigate(MAINFEATURE_URL)}
              iconSuffix={<FaAngleRight className="size-4" />}
            >
              Mulai Sekarang!
            </Button>
          </div>
          <div className="relative bg-cover bg-no-repeat">
            <img src={LPImage} alt="LandingPage" className="size-96" />
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
