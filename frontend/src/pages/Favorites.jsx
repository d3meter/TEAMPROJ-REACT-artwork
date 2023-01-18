import React from "react";
import Favorite from "../components/Favorite";
import "./Favorites.css";
import Masonry from "react-masonry-css";

function Favorites({ painting, statue, drawing, photograph, favorites }) {
  let myArtworks;

  if (
    painting.length > 0 &&
    statue.length > 0 &&
    drawing.length > 0 &&
    photograph.length > 0 &&
    favorites.length > 0
  ) {
    let all = painting.concat(statue, drawing, photograph);
    let newArray = all.filter((art) => favorites.some((fav) => fav === art.id));
    //console.log(newArray)
    myArtworks = newArray;
  }

  return (
    <div className="Artworks">
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {myArtworks !== undefined
          ? myArtworks.map((favArt, i) => <Favorite favArt={favArt} key={i} />)
          : null}
      </Masonry>
    </div>
  );
}

export default Favorites;
