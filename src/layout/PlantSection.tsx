import Button from "@/components/common/Button";
import CardComponent from "@/components/common/CardComponent";

const PlantSection = () => {
  return (
    <>
      <div className="h-auto bg-slate-50 p-12">
        <div className="bg-blue-200 w-fit p-4">Tanaman/Buah</div>
        <div className="bg-yellow-300 flex flex-col items-start h-fit mt-8">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet.</div>
          <Button className="self-end mt-2 p-2 border border-black">Detail</Button>
          <div className=" w-full flex justify-around gap-4 mt-4">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantSection;
