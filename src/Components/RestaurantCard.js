import {IMG_CDN_URL} from "../../src/config"
const RestaurantCard = ( {cloudinaryImageId, name , locality ,areaName,avgRating,cuisines,totalRatingsString,costForTwo, sla:{lastMileTravelString , slaString} }) => {
  
    return(
      <div className="card"> 
        <img src= {IMG_CDN_URL + cloudinaryImageId }  alt="Restaurant image"  />
        <p>{name}</p>
        <h4>{locality+ ", " +areaName}</h4>
        <h5>{avgRating} Stars ({totalRatingsString}ratings), {costForTwo}</h5>
        <h5>{cuisines.join(" ,")}</h5>
        <h5>{lastMileTravelString}s ,{slaString}</h5>    
      </div>
    )
  }
  export default RestaurantCard;