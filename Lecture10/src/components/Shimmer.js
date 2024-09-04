const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-between gap-4 p-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="shimmer-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-md bg-white animate-pulse">
          <div className="shimmer-image bg-gray-300 h-40 rounded-lg mb-4"></div>
          <div className="shimmer-lines space-y-2">
            <div className="shimmer-line bg-gray-300 h-4 rounded w-1/2 mb-2"></div>
            <div className="shimmer-line bg-gray-300 h-4 rounded w-2/3 mb-2"></div>
            <div className="shimmer-line bg-gray-300 h-4 rounded w-3/4 mb-2"></div>
            <div className="shimmer-line bg-gray-300 h-4 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
