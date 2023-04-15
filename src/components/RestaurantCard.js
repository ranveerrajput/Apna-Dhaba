import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-md">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Burger" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{area}</h4>
    </div>
  );
};

export default RestrauntCard;
