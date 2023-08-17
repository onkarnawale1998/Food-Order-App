import { useState } from "react";

const Search = ({
  restaurants,
  setRestaurants,
  fillteredRestaurants,
  setFilltererdRestaurants,
  onSearchTxtChange,
}) => {
  const [searchTxt, setSearchTxt] = useState("");

  const filterData = (searchTxt, restaurants) => {
    return restaurants?.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchTxt?.toLowerCase());
    });
  };
  const handleSearchChange = (e) => {
    setSearchTxt(e?.target?.value);
    onSearchTxtChange(searchTxt); // Call the parent's function to update searchTxt in parent
  };
  console.log("search rendered");
  console.log(searchTxt);
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchTxt}
        onChange={handleSearchChange}
      />
      <button
        className="search-btn"
        //  onClick= {()=>{
        //   searchClicked === "false" ? setSearchClicked("true") : setSearchClicked("false");
        //  }}
        onClick={() => {
          const data = filterData(searchTxt, restaurants);
          {
            console.log(data);
          }
          setFilltererdRestaurants(data);
        }}
        //onclick it shoud seach data from restaurant list and filter that cards only
      >
        Search
      </button>
    </>
  );
};

export default Search;
