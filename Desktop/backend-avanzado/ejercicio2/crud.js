import Restaurant from "./models/Restaurants.js";


//crear libro
const createBook = async () => {
    await Book.create({
        title: 'El libro de la selva',
        author: 'Juan',
        edition: '2022 g13',
        pages: 10,
        isbn: 123456789,
        publishDate: new Date()
    })
}

//actualizar libro
const updateBook = async () => {
    await Book.updateOne(
        {
            pages: 10,
            isbn: 123456789
        },
        {
         
            author: 'Joaquin'
        }
    );
};

// leer libro
const readBook = async () => {
    const books = await Book.find({
        pages: 10
    });
    console.log(books);
}


//delete book
const deleteBook = async () => {
    await Book.deleteOne({
        pages: 10
    });
}

export { createBook, updateBook, readBook, deleteBook };
