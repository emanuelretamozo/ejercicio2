import Restaurant from "../models/Restaurants.js";

export default async () =>{
    const restaurants = await Restaurant.find( { }, {
        borough: Bronx
    })
}
