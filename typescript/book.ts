export class Book {

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author
        this.editorial = editorial
    }

    // Getters y Setters 

    public setTitle(title: string) {
        this.title = title
        return title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setNPages(nPages: number) {
        this.nPages = nPages
        return nPages;

    }

    public getNPages(): number {
        return this.nPages
    }

    public setIsbn(isbn: string) {
        this.isbn = isbn
        return isbn;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public setAuthor(author: string) {
        this.author = author
        return author;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setEditorial(editorial: string) {
        this.editorial = editorial
        return editorial;

    }

    public getEditorial(): string {
        return this.editorial;
    }

    public toString(): string {
        return " Title - " + this.title + "\n" + " Number of Pages - " + this.nPages + "\n" + " ISBN - " + this.isbn + "\n" + " Author - " + this.author + "\n" + " Editorial - " + this.editorial;
    }

}
// let book1 = new Book("Introduccion a Java",233,"2344433-BC23333","Joseph Smith","Now Editions" )
// console.log(book1.toString());


