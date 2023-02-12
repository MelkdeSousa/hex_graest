import { Author as PrismaAuthor, Book as PrismaBook } from '@prisma/client'
import Book from '../../domain/entity/Book'
import mapEntityAuthorToPrismaAuthor from './mapEntityAuthorToPrismaAuthor'

export default (entityBook: Book): PrismaBook & { author?: PrismaAuthor[] } => {
  return {
    id: entityBook.id,
    title: entityBook.title,
    price: entityBook.price,
    author:
      entityBook.authors.length > 0
        ? entityBook.authors.map(mapEntityAuthorToPrismaAuthor)
        : undefined,
    createdAt: entityBook.createdAt,
    updatedAt: entityBook.updatedAt,
  }
}
