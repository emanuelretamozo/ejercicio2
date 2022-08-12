import Restaurant from "../models/Restaurants.js";

//Entregue los campos restaurant_id, name, borough y couisine de todos los documentos
export default async () => {
  const restaurants = await Restaurant.find(
    {},
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
  );
  console.log(restaurants);
};
