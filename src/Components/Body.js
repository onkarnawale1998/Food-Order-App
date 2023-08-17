import RestaurantCard from "./RestaurantCard";
import Header from "./Header";
import { restaurantList } from "../../src/config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Search from "./Search.js";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [fillteredRestaurants, setFilltererdRestaurants] = useState([]);
  const [notMatchSearchTxt, setNotMatchSearchTxt] = useState("");

  console.log("body render");
  // const [searchClicked, setSearchClicked] = useState("")
  const handleSearchTextChange = (notMatchSearchTxt) => {
    setNotMatchSearchTxt(notMatchSearchTxt);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response?.json();

      setRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilltererdRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("An error occured", error);
    }
  }
  if (!restaurants) return null; // early return
  return restaurants?.length === 0 ? (
    <Shimmer
      restaurants={restaurants}
      setRestaurants={setRestaurants}
      fillteredRestaurants={fillteredRestaurants}
      setFilltererdRestaurants={setFilltererdRestaurants}
    />
  ) : (
    <>
      <Header
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        fillteredRestaurants={fillteredRestaurants}
        setFilltererdRestaurants={setFilltererdRestaurants}
        onSearchTxtChange={handleSearchTextChange}
      />
      <div className="restaurant-list">
        {fillteredRestaurants?.length === 0 ? (
          <h1>No match found for {notMatchSearchTxt}</h1>
        ) : (
          fillteredRestaurants?.map((restaurant) => {
            return (
              <RestaurantCard
                {...restaurant?.info}
                key={restaurant?.info?.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
