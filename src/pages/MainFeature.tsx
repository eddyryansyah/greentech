import Navbar from "@/components/common/Navbar";
import Background from "../assets/bg.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@/components/common/Button";
import icChecklist from "../assets/ic-fi-bs-list-check.svg";

const MainFeature = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Navbar />
      <div className="mt-20 flex flex-col items-center">
        <h1 className="font-bold text-2xl pb-2">PILIH FITUR</h1>
        <h3 className="font-bold mb-8">
          Tentukan fitur apa yang ingin Anda gunakan!
        </h3>
        <div className="flex gap-36">
          <Card className="rounded-lg shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <img
                src={icChecklist}
                alt="Checklist Icon"
                className="size-24 mb-4"
              />
              <CardTitle className="text-xl font-bold">OTOMATIS</CardTitle>
              <CardDescription className="text-center text-gray-500">
                Sesuaikan Kebutuhan Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <Button
                variant="contained"
                className="bg-hijau py-2 rounded-xl"
                block
              >
                Pilih
              </Button>
            </CardContent>
          </Card>
          <Card className="rounded-lg shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <img
                src={icChecklist}
                alt="Checklist Icon"
                className="size-24 mb-4"
              />
              <CardTitle className="text-xl font-bold">MANUAL</CardTitle>
              <CardDescription className="text-center text-gray-500">
                Sesuaikan Kebutuhan Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <Button
                variant="contained"
                className="bg-hijau py-2 rounded-xl"
                block
              >
                Pilih
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainFeature;
