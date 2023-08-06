import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../../src/config"

const Body = () => {
    return(
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key= {restaurant.info.id} />
      })}
      </div>
    )
  }
export default Body;  