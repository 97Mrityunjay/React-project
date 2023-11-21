import RestaurantCard from "./RestaurantCard";
// import {restaurants} from "../utils/restaurants";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import Shimmer from "./Shimmer";
import {useOnline} from "../utils/useOnline";
import {Link} from "react-router-dom"
const Body = ()=>{
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    useEffect(()=>{
      fetchData();
    },[]);
    
   async function fetchData(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const response = await data.json();
      console.log(response);
      // console.log(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //optional chaining
      setFilteredRestaurant(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllRestaurants(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    function filteredRestaurantCards(){
      const filteredData = allRestaurants.filter((restaurant)=>{
        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
      })
      console.log(filteredData);
      setFilteredRestaurant(filteredData);
     
    }

    function filteredTopRatedRestaurants(restaurant){
        setFilteredRestaurant(restaurant)
    }

    let isOnline = useOnline();
    if(!isOnline)
    {
      return<h1 style={{color:"#fff"}}>Please check your Internet connection</h1>
    }
    return(
        <div>
            <input className="input"placeholder="Search Restaurant" type="text" onChange = {(e)=>setSearchText(e.target.value)}/>
            <button className = "search-btn" onClick={filteredRestaurantCards}>Search</button>
             <TopRatedRestaurants topRatedRestaurants={filteredTopRatedRestaurants} filteredRestaurant = {filteredRestaurant} />
             {filteredRestaurant.length===0?(<Shimmer/>): (
               <div className="restaurant-cards">
                {
                   
                    filteredRestaurant.map((restaurant)=>(
                       
                
                           <RestaurantCard key = {restaurant.info.id} details = {restaurant.info} />
                     
                     
                        
                    ))
                    
               } 
             </div>
            )
         }
 
        </div>
    )
}
export default Body;

/**`
 *  default export----> export default ComponentName
 *  default import----> import ComponentName from "path"
 * 
 * named export-----> export ComponentName
 * named import------> import {...} from "Path" 
 */

 