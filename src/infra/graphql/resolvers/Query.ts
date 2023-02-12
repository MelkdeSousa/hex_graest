import SearchBooks from '../../../application/SearchBooks'
import { BookRepositoryPrisma } from '../../repository/BookRepositoryPrisma'

export default {
  async books(_: any, args: any) {
    const bookRepository = new BookRepositoryPrisma()
    const searchBooks = new SearchBooks(bookRepository)
    const output = await searchBooks.execute(args.criteria)
    return output
  },
}
