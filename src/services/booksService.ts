import db from '../database/database';
import Book from '../models/Book';
import book from '../models/Book';

export const listBooks = async () => {
    return db<Book>('Books').select('*');
};

export const getBook = async (id: number) => {
    return db<Book>('Books').where('BookID', id);
};

export const createBook = async (bookBody: Book) => {
    return db<Book>('Books')
        .insert({
            AuthorID: bookBody.AuthorID,
            Title: bookBody.Title,
            ISBN: bookBody.ISBN,
        })
        .returning('*');
};

export const validateCreateBookRequest = (bookBody: Book) => {
    return (
        typeof bookBody.Title === 'string' &&
        typeof bookBody.AuthorID === 'number' &&
        typeof bookBody.ISBN === 'number'
    );
};
