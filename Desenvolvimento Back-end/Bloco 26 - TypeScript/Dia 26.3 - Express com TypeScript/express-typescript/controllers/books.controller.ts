import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/books.service';

class BookController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await this.bookService.getById(Number(id));

    if (!book) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Book not found' });
    }

    return res.status(StatusCodes.OK).json(book);
  };
}

export default BookController;
