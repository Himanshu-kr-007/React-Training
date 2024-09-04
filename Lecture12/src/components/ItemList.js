import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action to add item
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div className="p-4">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.card.info.id}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Displaying the index of the item */}
            <div className="text-gray-700 font-semibold mb-2">Item #{index + 1}</div>

            <div className="flex items-start">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
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
                <div className="flex flex-row-reverse">
                  <button
                    className="w-20 mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={() => handleAddItem(item)}
                  >
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
