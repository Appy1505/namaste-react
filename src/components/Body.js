import { useState } from "react";
import resList from '../utils/mockData';
import ResCard from "./RestaurantCard";
  

const BodyContainer = ()=>{
    const[restaurantFilteredList,setrestaurantFilteredList] = useState(resList);
    return (<div className="body-container">
      <div className="filterContainer">
      <button className="topRated" onClick={()=>{
        const filteredList = 
            restaurantFilteredList.filter(
                (res)=> res.info.avgRating > 4
            );
        setrestaurantFilteredList(filteredList);
      }}>Top Rated Restaurants</button>
    </div>
    <div className="res-container">
      {
        restaurantFilteredList.map((restaurant) => 
            (<ResCard key={restaurant.info.id} resList={restaurant}/>))
      } 
    </div>
    </div>)
  }
  export default BodyContainer;