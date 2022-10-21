import { Book } from "./book"

export class Library {

    private books: Book[];
    private addres: string;
    private manager: string;

    constructor(books: Book[], addres: string, manager: string) {

        this.books = books;
        this.addres = addres;
        this.manager = manager;

    }

    public setBooks(books: Book[]) {
        this.books = books;
        return books;
    }

    public getBooks(): Book[] {
        return this.books;
    }

    public setAddres(addres: string) {
        this.addres = addres;
        return addres;
    }

    public getAddres(): string {
        return this.addres;
    }

    public setManager(manager: string) {
        this.manager = manager;
        return manager;
    }

    public getManager(): string {
        return this.manager;
    }

    public toString(): string {
        let resultado: string = "";
        for (let i: number = 0; i < this.books.length; i++) {
            resultado += "Book" + (i + 1) + ": " + this.books[i] + "\n"
        }

        return resultado
    }


    public getNumberOfBooks(): number {
        return this.books.length;

    }

    public findByAuthor(author: string): Book[] {
        let rest: Book[] = []
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                rest.push(this.books[i])
            }

        } return rest;
    }
}

