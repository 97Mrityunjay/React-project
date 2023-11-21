import { useParams } from "react-router-dom";
const RestaurantDetails = ()=>{
    const {id} = useParams();
    return(
        <>
        <h2>Restaurant Details</h2>
        <h3>{`${id}`}</h3>
        </>
    )
}
export default RestaurantDetails;