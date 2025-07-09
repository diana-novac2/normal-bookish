import { Router, Request, Response } from 'express';
import {
    createBook,
    getBook,
    listBooks,
    validateCreateBookRequest,
} from '../services/booksService';

class BookController {
    router: Router;

    constructor() {
        this.router = Router();

        this.router.get('/', this.getBooks.bind(this));

        this.router.get('/:id', this.getBook.bind(this));

        this.router.post('/', this.createBook.bind(this));
    }

    async getBooks(_req: Request, res: Response) {
        try {
            const books = await listBooks();
            return res.status(200).json(books);
        } catch (error) {
            return res
                .status(500)
                .json({ 'Internal Server Error': error.message });
        }
    }

    async getBook(req: Request, res: Response) {
        try {
            const bookID = parseInt(req.params.id);
            const book = await getBook(bookID);
            return res.status(200).json(book);
        } catch (error) {
            return res.status(404).json({ Error: 'Book not found' });
        }
    }

    async createBook(req: Request, res: Response) {
        if (!validateCreateBookRequest(req.body)) {
            return res.status(400).json({
                error: 'Invalid book parameters',
            });
        }
        try {
            const created = await createBook(req.body);
            return res.status(201).json(created);
        } catch (error) {
            return res
                .status(500)
                .json({ 'Internal Sever Error': error.message });
        }
    }
}

export default new BookController().router;
