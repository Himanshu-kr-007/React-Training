import { useState } from "react";
import ItemList from "./ItemList";
import "../CSS/customScrollbar.css"; // Import custom CSS for the scrollbar

function RestaurantCategory({ data, showItems, setShowIndex, index }) {
  const handleClick = () => {
    setShowIndex(showItems ? null : index); // Toggles the visibility of the current category
  };

  return (
    <div className="w-full max-w-xxl mx-auto my-4 border border-gray-200 rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-lg font-medium">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          🔽
        </span>
      </div>
      {/* Accordion Body */}
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden 
          ${showItems ? "max-h-screen" : "max-h-0"}
        `}
      >
        <div className="p-4 bg-white">
          <div
            className={`overflow-y-scroll custom-scrollbar ${
              data.itemCards.length > 4 ? "max-h-56" : "max-h-full"
            }`}
          >
            <ItemList items={data.itemCards} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCategory;
