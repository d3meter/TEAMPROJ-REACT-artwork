import React from "react";
import Artwork from "./Artwork";
import "./Artworks.css";
import Masonry from "react-masonry-css";

function Artworks({ artworks, filterTitle, favourite, setFav }) {

  console.log(artworks)

  return (
    <div className="Artworks">
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {artworks
        .filter((artwork) =>
          artwork.title.toLowerCase()
          .includes(filterTitle.toLowerCase())
        )
        .map((artwork, i) => (
        <Artwork key={i} artworkData={artwork} fav={favourite} setFav={setFav} />
      ))}
      </Masonry>
    </div>
  );
}

export default Artworks;
