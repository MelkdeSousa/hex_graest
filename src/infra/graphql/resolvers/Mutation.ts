import SaveBook from '../../../application/SaveBook'
import { BookRepositoryPrisma } from '../../repository/BookRepositoryPrisma'

export default {
  async saveBook(_: any, args: any) {
    const bookRepository = new BookRepositoryPrisma()
    const saveBook = new SaveBook(bookRepository)
    const output = saveBook.execute(args.book)
    return output
  },
}
