import React from "react";
import "./Artwork.css";
import { Link } from "react-router-dom";
import pinInactive from "./../pub_img/pin1.png";
import Tooltip from "@mui/material/Tooltip";

function Artwork({ artworkData, fav, setFav }) {
  const id = artworkData.id;

  const handleFavItems = () => {
    if (fav.includes(id)) {
      let removeId = fav.filter((el) => el !== id);
      return setFav([...removeId]);
    } else {
      return setFav([...fav, id]);
    }
  };

  return (
    <div className="Artwork">
      <Link className="Artwork-info" to={"/" + id}>
        <p className="title">{artworkData.title}</p>
        <p className="year">{artworkData.dated}</p>

        <img
          className="artwork-img"
          src={artworkData.primaryimageurl}
          alt="alt"
        />
      </Link>
      <Tooltip title="mark as favorite" placement="bottom">
        <button
          onClick={() => {
            handleFavItems();
          }}
        >
          <img className="pinImg" src={pinInactive} alt="favorite" />
        </button>
      </Tooltip>
    </div>
  );
}

export default Artwork;
