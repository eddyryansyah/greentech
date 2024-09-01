import Button from "@/components/common/Button";
import bgDownSection from "../assets/bg-downSection.png";

const DownSection = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgDownSection})` }}
      >
        <h1 className="font-bold text-2xl leading-snug">
          <span className="bg-[#CB2828] px-1 rounded-md text-white">
            Jangan Biarkan
          </span>
          Ketidaktahuan Tentang Tanah <br />
          <span className="bg-[#CB2828] px-1 rounded-md text-white">
            Menghambat
          </span>{" "}
          Hobi Berkebun Anda!
        </h1>
        <p className="font-bold text-lg my-4 mb-10">
          Dengan aplikasi kami, Anda tidak perlu menjadi ahli untuk menjadi{" "}
          <span className="text-hijau">sukses</span> dalam berkebun.
        </p>
        <Button variant="contained" rounded="lg" className="font-semibold">
          Mulai Sekarang!
        </Button>
      </div>
    </>
  );
};

export default DownSection;
