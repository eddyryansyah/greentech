import Button from "@/components/common/Button";
import ApelImage from "../assets/apel.jpg";
import Background from "../assets/bg-yellowCloud.png";
import icGreenTech from "../assets/ic-greentech(logoWhite).svg";

const BackgroundSection = () => {
  return (
    <div
      className="h-auto bg-slate-50 p-12 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Top Section with Circular Element and Title */}
      <div className="relative flex items-center justify-start">
        {/* Circular Element */}
        <div className="absolute left-0 top-0 bg-hijau rounded-tl-3xl rounded-br-3xl ring-8 ring-[#ebded1] z-50">
          <img src={icGreenTech} alt="Circle" className="size-24" />
        </div>
        {/* Title */}
        <h1 className="text-3xl font-bold text-start p-3 px-6 bg-[#ffffff] ml-28 mb-4">
          Apa itu GreenTech?
        </h1>
      </div>
      <div className="bg-[#FFFFFF]/30 backdrop-blur-md flex justify-between items-center h-fit pt-8">
        <div className="p-6">
          <div>wkwk</div>
          <div>wkwk</div>
          <div>wkwk</div>
          <Button className="mt-20">kwkwk</Button>
        </div>
        <div>
          <img src={ApelImage} alt="gambar" />
          <div className="flex justify-between">
            <div>wkwk</div>
            <div>wkwk</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
