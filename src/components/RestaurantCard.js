import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Burger" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{area}</h4>
    </div>
  );
};

export default RestrauntCard;
