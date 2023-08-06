const RestaurantCard = ( {cloudinaryImageId, name , locality ,areaName,avgRating,cuisines,totalRatingsString,costForTwo, sla:{lastMileTravelString , slaString} }) => {
  
    return(
      <div className="card"> 
        <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId }  alt="Restaurant image"  />
        <p>{name}</p>
        <h4>{locality+ ", " +areaName}</h4>
        <h5>{avgRating} Stars ({totalRatingsString}ratings), {costForTwo}</h5>
        <h5>{cuisines.join(" ,")}</h5>
        <h5>{lastMileTravelString}s ,{slaString}</h5>    
      </div>
    )
  }
  export default RestaurantCard;