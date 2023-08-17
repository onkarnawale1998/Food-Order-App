import Header from "./Header";
const Shimmer = ({
  restaurants,
  setRestaurants,
  fillteredRestaurants,
  setFilltererdRestaurants,
}) => {
  const cardDataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      <Header
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        fillteredRestaurants={fillteredRestaurants}
        setFilltererdRestaurants={setFilltererdRestaurants}
      />

      <div className="restaurant-list">
        {cardDataArray.map((cardData, index) => (
          <div className="shimmer-card" key={cardData}>
            <div className="shimmer-img" />
            <div className="shimmer-line" />
            <div className="shimmer-line" />
            <div className="shimmer-line" />
            <div className="shimmer-line" />
            <div className="shimmer-line" />
            <div className="shimmer-line" />
          </div>
        ))}
      </div>
    </>
  );
};
export default Shimmer;
