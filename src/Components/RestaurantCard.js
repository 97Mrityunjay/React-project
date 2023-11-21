import {CDN_Img_Url} from "../utils/constant";
const RestaurantCard = (props)=>{
   console.log(props);
   //Object destructuring
   const {name, cuisines, avgRating, costForTwo} = props.details;
    return(
     <div className="restaurant-card">
       <div className="restaurant-logo">
          <img src = {`${CDN_Img_Url}${props.details.cloudinaryImageId}`}/>
       </div>
       <div className="restaurant-details">
          <div>
            <h3>{name}</h3>
            <h3>{cuisines}</h3>
          </div>
          <div>
             <h3>{avgRating}</h3>
             <h3>{costForTwo}</h3>
          </div>
       </div>
     </div>
    
    )
 }
 export default RestaurantCard;