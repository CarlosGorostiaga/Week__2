import { Book } from "./book"
import { Library } from "./library"

let book1 = new Book("Introduccion a Java", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let book2 = new Book("Lords of Rings", 1875, "789654-VGF789", "J.R.R Tolkien", "Imprentas Fellows")
let book3 = new Book("Danza de los Dragones", 973, "2378512-YU46287", "J.R.Martin", "Gigamesh Editorial")

let books = [book1, book2, book3];

let library = new Library(books, "addres", "manager"); 

console.log(library.toString());

console.log(library.getNumberOfBooks());

console.log(library.findByAuthor("J.R.R Tolkien"));



