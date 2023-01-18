import React from 'react'
import { Link } from "react-router-dom";
import "./Favorite.css";

function Favorite({favArt}) {

const id = favArt.id;
  
    return (
      <div className='Artwork Favorite'>
        <Link className="Artwork" to={"/" + id}>
        <p className="title">{favArt.title}</p>
        <p className="year">{favArt.dated}</p>

        <img
          className="artwork-img"
          src={favArt.primaryimageurl}
          alt="alt"
        />
      </Link>



      </div>
    );
  }
  
  export default Favorite;