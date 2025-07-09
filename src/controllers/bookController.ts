import { Router, Request, Response } from 'express';
import { createBook, getBook, listBooks } from '../services/booksService';

class BookController {
    router: Router;

    constructor() {
        this.router = Router();

        this.router.get('/', this.getBooks.bind(this));

        this.router.get('/:id', this.getBook.bind(this));

        this.router.post('/', this.createBook.bind(this));
    }

    async getBooks(_req: Request, res: Response) {
        const books = await listBooks();
        return res.status(200).json(books);
    }

    async getBook(req: Request, res: Response) {
        const bookID = parseInt(req.params.id);
        const book = await getBook(bookID);
        return res.status(200).json(book);
    }

    async createBook(req: Request, res: Response) {
        console.log(req.body);
        const created = await createBook(req.body);
        return res.status(201).json(created);
    }
}

export default new BookController().router;
