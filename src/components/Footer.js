import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-2 bg-yellow-400 flex justify-center">
      This site is developed by -{user.name}{" "}
    </div>
  );
};

export default Footer;
