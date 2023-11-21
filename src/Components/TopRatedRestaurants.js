// import { restaurants } from "../utils/restaurants";
const TopRatedRestaurants = (props)=>{
     function getTopRatedRestaurants(){
        console.log(props);
        console.log(props.filteredRestaurant)
        const topRatedRestaurants = props.filteredRestaurant.filter((restaurant)=>{
            return restaurant.info.avgRating>4;
        })
        props.topRatedRestaurants(topRatedRestaurants);
        console.log(topRatedRestaurants);
     }
    return(  
        <button className="toprated-btn" onClick={getTopRatedRestaurants}>TopRatedRestaurants</button>
    )
}
export default TopRatedRestaurants;