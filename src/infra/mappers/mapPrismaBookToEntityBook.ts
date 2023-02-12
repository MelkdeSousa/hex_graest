import { Author as PrismaAuthor, Book as PrismaBook } from '@prisma/client'
import Author from '../../domain/entity/Author'
import Book from '../../domain/entity/Book'

export default (
  prismaBook: PrismaBook,
  prismaAuthors?: PrismaAuthor[],
): Book => {
  const book = new Book(
    prismaBook.id,
    prismaBook.title,
    prismaBook.price,
    prismaBook.createdAt,
    prismaBook.updatedAt,
  )

  if (prismaAuthors !== undefined && prismaAuthors.length > 0)
    prismaAuthors.forEach((prismaAuthor) => {
      book.addAuthor(
        new Author(
          prismaAuthor.id,
          prismaAuthor.name,
          prismaAuthor.createdAt,
          prismaAuthor.updatedAt,
        ),
      )
    })

  return book
}
