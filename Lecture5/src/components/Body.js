// Body Componenet
const Body = () => {
  return (
    <div className="body">
      <h1 className="heropage-heading">
        Delicious Food Delivered to Your Doorstep
      </h1>
      <p className="heropage-para">
        Order from the best restaurants in your area
      </p>
      <div className="search-bar">
        <input type="text" placeholder="What do you want to have?" />
        <button className="Search-button">🔍</button>
      </div>

    </div>
  );
};

export default Body;
