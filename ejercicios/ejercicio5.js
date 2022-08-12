import Restaurant from "../models/Restaurants.js";

// 5.- Función que imprima los primeros 10 restaurantes que lleven 
// cocina americana(cousine) ordenados por su nombre alfabéticamente
export default async () => {
  const restaurants = await Restaurant.find(
    { cuisine: "American" }, {name: 1}
  ).limit(10).sort({name: 1});
  console.log(restaurants);
};