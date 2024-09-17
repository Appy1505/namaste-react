import { useState, useEffect } from "react";
import ResCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
  

const BodyContainer = ()=>{
    const[restaurantList, setrestaurantList] = useState([]);
    const[restaurantFilteredList, setrestaurantFilteredList] = useState([]);
    const [searchText, setsearchText] = useState("");
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData =  async () => {
      const data =  await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5514267&lng=77.3511063"
        );
         const json = await data.json();
         console.log(restaurantFilteredList.length);
         setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setrestaurantFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };

      /* if (restaurantFilteredList?.length === 0) {
        return <Shimmer />;
      } */
     //Condition Rendering
      
    return restaurantFilteredList?.length === 0 ?
    <Shimmer /> :
    (<div className="body-container">
      <div className="filterContainer">
        <div className="search">
          <input type="text" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value);
              setrestaurantFilteredList(restaurantFilteredList)
          }}  />
          <button className="search-btn" onClick={()=>{
            const filteredListSearch  = restaurantList.filter((res)=>{
             return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
            })
             setrestaurantFilteredList(filteredListSearch);
          }}>Search</button>
        </div>
      <button className="topRated" onClick={()=>{
        const filteredList = 
            restaurantList.filter(
                (res)=> res?.avgRating > 4
            );
        setrestaurantFilteredList(filteredList);
      }}>Top Rated Restaurants</button>
    </div>
    <div className="res-container">
      {
        restaurantFilteredList?.map((restaurant) => 
            (<ResCard key={restaurant?.info?.id} resList={restaurant}/>))
      } 
    </div>
    </div>)
  }
  export default BodyContainer;