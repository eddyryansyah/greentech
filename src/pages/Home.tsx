import Description from "@/components/common/Description";
import Logo from "@/components/common/Logo";
import Navbar from "@/components/common/Navbar";
import Button from "@/components/common/Button";
import Background from "./Background";

const Home = () => {
  return (
    <>
      <div className="min-h-screen p-4 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center">
          <div className="space-y-6 bg-slate-200 w-1/2 p-4">
            <Logo showLabel />
            <Description />
            <Button>wkwkwk</Button>
          </div>
          <div
            className="absolute inset-y-0 right-0 z-[-1] w-1/2 bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('./BG.png')" }}
          >
            {/* Background image */}
          </div>
        </div>
      </div>
      <Background />
    </>
  );
};

export default Home;
