import SearchBooks from "../../../application/SearchBooks";
import connection from "../../database/Connection";
import BookRepositoryDatabase from "../../repository/BookRepositoryDatabase";

export default {
    async books (_: any, args: any) {
        const bookRepository = new BookRepositoryDatabase(connection);
        const searchBooks = new SearchBooks(bookRepository);
        const output = await searchBooks.execute(args.criteria);
        return output;
    }
}