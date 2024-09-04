import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="p-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="flex items-start">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24 object-cover rounded-md mr-4 " // Adjust width and height as needed
              />
              <div className="flex flex-col justify-between flex-grow">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-800">
                    {item.card.info.name}
                  </span>
                  <span className="text-lg text-gray-600">
                    ₹{(item.card.info.price / 100).toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600">
                  {item.card.info.description || "No description available"}
                </p>
                <div className=" flex flex-row-reverse"> 
                <button className="w-20 mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Add +
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
