import React, { useState } from "react";
import Search from "./Search";

const Logo = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFzY7CNCsygf7Hi2pwSekFKEpncFa6wNn0AwDn6NHOSd_6NskU"
      alt="Food Villa"
    />
  </a>
);

const Header = ({
  restaurants,
  setRestaurants,
  fillteredRestaurants,
  setFilltererdRestaurants,
  onSearchTxtChange,
}) => {
  console.log("Head rendered");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>
            <Search
              restaurants={restaurants}
              setRestaurants={setRestaurants}
              fillteredRestaurants={fillteredRestaurants}
              setFilltererdRestaurants={setFilltererdRestaurants}
              onSearchTxtChange={onSearchTxtChange}
            />
          </li>
          <a href="/">
            <li>Home</li>
          </a>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
