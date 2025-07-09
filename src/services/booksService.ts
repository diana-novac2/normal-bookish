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
    return db<Book>('Books').insert(bookBody).returning('*');
};
