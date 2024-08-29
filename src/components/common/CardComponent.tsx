import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GApel from "../../assets/apel.jpg";
import clsx from "clsx";
import Button from "./Button";

interface ICardComponent {
  title?: string;
  description?: string;
  img?: string;
  children?: React.ReactNode;
  className?: string;
}

function CardComponent(props: ICardComponent) {
  const { title, description, img, className, children } = props;
  return (
    <Card className={clsx("bg-white flex flex-col items-center", className)}>
      <CardHeader>
        <img
          src={img ? img : GApel}
          alt="gambar"
          className="shadow-black shadow-sm"
        />
        <CardTitle className="text-hitam text-center">
          {title ? title : "Apel"}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-hitam">
        <p>{description ? description : "lorem ipsum"}</p>
        <Button className="bg-hijau rounded-3xl drop-shadow-xl p-3 text-white mt-2">
          Lebih Lanjut
        </Button>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardComponent;
