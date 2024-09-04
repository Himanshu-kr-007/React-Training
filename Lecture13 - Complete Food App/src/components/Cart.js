import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"; // Updated import for Heroicons v2
import { useState } from "react"; // Import useState for managing input state

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // State to manage user input for item index to remove
  const [itemIndex, setItemIndex] = useState("");

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = () => {
    const index = parseInt(itemIndex, 10); // Convert input value to an integer
    if (!isNaN(index) && index >= 0 && index < cartItems.length) {
      dispatch(removeItem(index)); // Dispatch removeItem action with the index of the item to be removed
      setItemIndex(""); // Clear the input field after removing the item
    } else {
      alert("Please enter a valid index."); // Display an alert if the index is invalid
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      <div className="flex space-x-4 mb-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 transform hover:scale-105 transition-transform duration-200"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 transform hover:scale-105 transition-transform duration-200">
          Proceed to Checkout
        </button>
      </div>

      {/* Input field and button to remove item based on user input */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="number"
          value={itemIndex}
          onChange={(e) => setItemIndex(e.target.value)}
          placeholder="Enter index to remove"
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transform hover:scale-105 transition-transform duration-200"
          onClick={handleRemoveItem}
        >
          Remove Item
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-8 p-4 border border-dashed border-gray-300 rounded-lg animate-bounce">
          <ExclamationCircleIcon className="h-12 w-12 text-yellow-500 mb-4" />
          <h1 className="text-lg text-gray-600 font-semibold">
            Your Cart is Empty
          </h1>
          <p className="text-gray-500">Add items to your cart to get started!</p>
        </div>
      ) : (
         <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
