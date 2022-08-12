import mongoose from "mongoose";

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection open to ' + db.host + ':' + db.port);
});

db.on('connecting', () => {
    console.log('Intentando conectar a la base')
});

db.on('error', () => {
    console.log('Error de conexión a la base')
});

mongoose.connect('mongodb://localhost:27017', () => {
    console.log('Ejercicios')
});
