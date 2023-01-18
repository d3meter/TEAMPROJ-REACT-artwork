import { useParams } from "react-router-dom";
import "./ArtworkDetail.css";

function ArtworkDetail({ filterData }) {
  let { id } = useParams();

  let foundId;

  console.log(filterData);

  if (filterData.length > 0) {
    foundId = filterData.find((el) => el.id === Number(id));
  }

  //console.log(foundId)

  return (
    <div className="ArtworkDetail">
      <div className="detail-section-left">
        <img className="artwork-img" src={foundId.primaryimageurl} alt="alt" />
      </div>
      <div className="detail-section-right">
        <span>Title:</span>
        <p className="title">{foundId.title}</p>
        <span>Year:</span>
        <p className="year">{foundId.dated}</p>
        <span>Medium:</span>
        <p className="medium">{foundId.medium}</p>
        <span>Division:</span>
        <p className="division">{foundId.division}</p>
        <span>Culture:</span>
        <p className="culture">{foundId.culture}</p>
      </div>
    </div>
  );
}

export default ArtworkDetail;
