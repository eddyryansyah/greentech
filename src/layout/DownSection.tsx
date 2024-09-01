import Button from "@/components/common/Button";

const DownSection = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-xl leading-snug">
          <span className="bg-[#CB2828] px-1 rounded-md text-white">
            Jangan Biarkan
          </span>
          Ketidaktahuan Tentang Tanah <br />
          <span className="bg-[#CB2828] px-1 rounded-md text-white">
            Menghambat
          </span>{" "}
          Hobi Berkebun Anda!
        </h1>
        <p className="font-bold text-sm my-4">
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
