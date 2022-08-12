import Restaurant from "../models/Restaurants.js";

// Función que imprima los nombres de los restaurantes que
// tengan al menos una calificación (grade) mayor a 9
export default async () => {
  const restaurants = await Restaurant.find(
    {
        grades: { $elemMatch: {
             score: { $gte: 9 } } 
            }
     }, {grades: 1, name: 1}
  );
  console.log(restaurants);
};
