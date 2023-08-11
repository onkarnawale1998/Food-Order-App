import RestaurantCard from "./RestaurantCard";
import Header from "./Header";
import {restaurantList} from "../../src/config"
import { useState } from "react";

const Body = () => {

  const[restaurants, setRestaurants]=useState(restaurantList)
  
 
  // const [searchClicked, setSearchClicked] = useState("")

  
    return(
    <>
    <Header restaurants={restaurants} setRestaurants={setRestaurants} />
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key= {restaurant.info.id} />
      })}
      </div>
    </>
    )
  }
export default Body;  