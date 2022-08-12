import mongoose from "mongoose";
import ejercicio1 from "./ejercicios/ejercicio1.js";
import ejercicio2 from "./ejercicios/ejercicio2.js";
import ejercicio3 from "./ejercicios/ejercicio3.js";
import ejercicio4 from "./ejercicios/ejercicio4.js";
import ejercicio5 from "./ejercicios/ejercicio5.js";

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection open to ' + db.host + ':' + db.port);
});

db.on('connecting', () => {
    console.log('Intentando conectar a la base')
});

db.on('error', (error) => {
    console.log('Error de conexión a la base', error)
});

mongoose.connect('mongodb://localhost:27017/ejercicios2', async () => {
  console.log('Ejercicios:');
   await ejercicio1();
   // await ejercicio2();
  // await ejercicio3();
  // await ejercicio4();
  /**
   * 1.- Entregue todos los documentos de la colección restaurants
   * 2.- Entregue los campos restaurant_id, name, borough y couisine de todos los documentos
   * 3.- Función que imprima los primeros 5 restaurantes de "Bronx" que se encuentren en la base
   * 4.- Función que imprima los nombres de los restaurantes que
   * // tengan al menos una calificación (grade) mayor a 90
   * 5.- Función que imprima los primeros 10 restaurantes que lleven 
   * cocina americana(cousine) ordenados por su nombre alfabéticamente
   */
    //await ejercicio5();
});
