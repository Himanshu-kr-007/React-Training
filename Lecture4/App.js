import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://imgs.search.brave.com/NDoVTIgKvMkU-qWZNdpiPE1ZMDbNApTExpVCbMo5GyA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY4MTAzOTA4/NGNoYXRncHQtaWNv/bi5wbmc"
          alt="Logo"
        />
      </div>
      <div className="title">
        <h2 className="title-heading">Online-Food-Service</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

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
// Data From API
const resList = [
  {
    info: {
      id: "28405",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "CST Road",
      areaName: "Santacruz East",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-20 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chinese-wok-cst-road-santacruz-east-mumbai-28405",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "41471",
      name: "Wow! Momo",
      cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
      locality: "Kurla West",
      areaName: "Kurla West",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "1776",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-19 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-kurla-west-mumbai-41471",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "105237",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "mlyxg1rnaklpgresq2k3",
      locality: "Phoenix Market city",
      areaName: "Kurla",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4,
      parentId: "10804",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-19 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-phoenix-market-city-kurla-mumbai-105237",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "78036",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Central Plaza, Kalina",
      areaName: "Santacruz East",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-20 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-central-plaza-kalina-santacruz-east-mumbai-78036",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "32399",
      name: "McDonald's",
      cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
      locality: "Kalina Artista",
      areaName: "Santacruz East",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-20 00:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-kalina-artista-santacruz-east-mumbai-32399",
      type: "WEBLINK",
    },
  }
];


// Restaurant Card Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const {  name, avgRating, costForTwo, cuisines, sla } = resData?.info;
    return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
          alt="Restaurant Image"
        />
      </div>
      <div className="restaurant-details">
        <h4 className="restaurant-card-text">Name: {name}</h4>
        <p className="restaurant-card-text">Cuisine:{cuisines.join(", ")}</p>
        <p className="restaurant-card-text">Rating: {avgRating}</p>
        <p className="restaurant-card-text">Duration: {sla.deliveryTime} minutes</p>
        <p className="restaurant-card-text">Price: {costForTwo}</p>
        <p className="restaurant-card-text">
          Offer: 20% off All orders above 300
        </p>
        <button className="order-button">Order Now</button>  
      </div>
    </div>
  );
};




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <div className="restaurant-card-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>

      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
