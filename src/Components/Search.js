import { useState } from "react";

const Search =({restaurants , setRestaurants}) =>{
    const [searchTxt, setSearchTxt] = useState("");
  
    const filterData =  (searchTxt,restaurants) => {
      return restaurants.filter((restaurant) =>{
        return restaurant.info.name.includes(searchTxt);
    })}
  
    return (
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
      //onclick it shoud seach data from restaurant list and filter that cards only
       >Search
       </button>
      </>
    )
  }
  
  export default Search ;