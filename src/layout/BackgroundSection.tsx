import Button from "@/components/common/Button";
import ApelImage from "../assets/apel.jpg";

const BackgroundSection = () => {
  return (
    <div className="h-auto bg-slate-50 p-12">
      <div className="bg-blue-200 w-fit p-4">Latar Belakang</div>
      <div className="bg-yellow-300 flex justify-between items-center h-fit mt-8">
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
