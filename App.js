import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 2"
);

const div = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeSk-3zPPiceGUYgvhvHoPl4omtV7Oztp5qHZ00ZEhg&usqp=CAU&ec=48600112"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restrauntList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "32603",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      uuid: "86532b0a-3c6f-4b5f-ab05-0b39c876ab54",
      city: "1",
      area: "Indiranagar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "mtfco4meitoh97jynjxd",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 5.699999809265137,
      slugs: {
        restaurant: "leon-grill-indiranagar-indiranagar",
        city: "bangalore",
      },
      cityState: "1",
      address: "#298, 100ft Rd, Indiranagar, Bangalore-560038",
      locality: "Indiranagar",
      parentId: 371281,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6417992~p=1~eid=00000187-5ce6-8d03-16d8-c2c000830109",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "32603",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 5.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "69720",
      name: "Raidan- Authentic Arabian Restaurant",
      uuid: "c5ab218e-20ce-47bb-99c8-42bfcc98cf47",
      city: "1",
      area: "Kammanahalli/Kalyan Nagar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "euo9db9sbvsrgi4v7lhq",
      cuisines: ["Arabian", "Chinese", "Beverages", "Mughlai"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 8.600000381469727,
      slugs: {
        restaurant: "raidan-restaurant-kammanahalli-kammanahallikalyan-nagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "#33/4, Kammanahalli main road, near old sathya hospital bangalore 560084",
      locality: "Kacharakanahalli",
      parentId: 21058,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT100 off",
        shortDescriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 8000,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 8000,
        message: "",
        title: "Delivery Charge",
        amount: "8000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "69720",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 8.600000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "237469",
      name: "Edesia by Freshmenu",
      uuid: "4cf8d6c0-f430-43ad-bd2a-af40ba136059",
      city: "1",
      area: "R T Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "kskvsuk31oxh77zinizr",
      cuisines: ["Desserts", "Bakery", "Sweets"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 6.900000095367432,
      slugs: {
        restaurant: "edesia-dinnur-main-road-rt-nagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "The Orchid,No 68,3rd floor,HMT Layout,Next to Geetha nursing home,Dinnur Main road,RT nagar,Banglore:560032",
      locality: "HMT Layout",
      parentId: 11246,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6400,
        message: "",
        title: "Delivery Charge",
        amount: "6400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "237469",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 6.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "939",
      name: "Rolls On Wheels",
      uuid: "8af1720e-e923-4268-92fe-b87a03b53e3f",
      city: "1",
      area: "Domlur",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "cd378225ea0b386708df030ff9640e62",
      cuisines: ["Fast Food", "North Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "rolls-on-wheels-2nd-stage-indiranagar",
        city: "bangalore",
      },
      cityState: "1",
      address: "#3145,Hal 2nd stage,Near ESI Hospital",
      locality: "2nd Stage",
      parentId: 784,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6309870~p=4~eid=00000187-5ce6-8d03-16d8-c2c10083040e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "939",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Burger"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{area}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restrauntList.map((restaurent) => {
        return <RestrauntCard {...restaurent.data} key={restaurent.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
