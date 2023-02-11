import SaveBook from "../../../application/SaveBook";
import connection from "../../database/Connection";
import BookRepositoryDatabase from "../../repository/BookRepositoryDatabase";

export default {
    async saveBook (_: any, args: any) {
        const bookRepository = new BookRepositoryDatabase(connection);
        const saveBook = new SaveBook(bookRepository);
        const output = saveBook.execute(args.book);
        return output;
    }
}