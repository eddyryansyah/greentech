import icCopyrights from "../assets/ic-fi-bs-copyright.svg";

const Footer = () => {
  return (
    <div className="flex justify-center p-4 gap-2">
      <img src={icCopyrights} alt="@" />
      <span className="font-bold">2024 GreenTech Engineers</span>
    </div>
  );
};

export default Footer;
