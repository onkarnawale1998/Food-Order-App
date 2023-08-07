import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../../src/config"
import { useState } from "react";

const Body = () => {

  const[restaurants, setRestaurants]=useState(restaurantList)
  const [searchTxt, setSearchTxt] = useState("")
  // const [searchClicked, setSearchClicked] = useState("")
  const filterData =  (searchTxt,restaurants) => {
    return restaurants.filter((restaurant) =>{
      return restaurant.info.name.includes(searchTxt);
  })
  }
    return(
    <>
      <input
      type="text"
      placeholder="Search"
      className="search-input"
      value={searchTxt}
      onChange={(e) => {
       setSearchTxt(e.target.value) ;       
      }}
      
    /> 
     <button 
      className="search-btn" 
    //  onClick= {()=>{
    //   searchClicked === "false" ? setSearchClicked("true") : setSearchClicked("false");
    //  }}
      onClick={()=>{
        const data = filterData(searchTxt,restaurants);
        {console.log(data)}
        setRestaurants(data);
    }}

    //oncick it shoud seach data from restaurant list and filter that cards only
     >Search
     </button>
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key= {restaurant.info.id} />
      })}
      </div>
    </>
    )
  }
export default Body;  