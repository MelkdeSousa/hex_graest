import Book from '../../domain/entity/Book'
import BookRepository from '../../domain/repository/BookRepository'
import { prisma } from '../database/Prisma'
import mapEntityBookToPrismaBook from '../mappers/mapEntityBookToPrismaBook'
import mapPrismaBookToEntityBook from '../mappers/mapPrismaBookToEntityBook'

export class BookRepositoryPrisma implements BookRepository {
  async get(id: string): Promise<Book | undefined> {
    const data = await prisma.book.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    })

    if (!data) return

    const { author: authors, ...book } = data

    return mapPrismaBookToEntityBook(book, authors)
  }

  async search(criteria: string): Promise<Book[]> {
    const books = await prisma.book.findMany({
      where: {
        title: {
          contains: criteria,
        },
      },
      include: {
        author: true,
      },
    })

    return books.map(({ author: authors, ...book }) =>
      mapPrismaBookToEntityBook(book, authors),
    )
  }

  async save(book: Book): Promise<void> {
    const { author, ...prismaBook } = mapEntityBookToPrismaBook(book)
    await prisma.book.create({
      data: {
        ...prismaBook,
        ...(author && {
          author: {
            connectOrCreate: author.map((author) => ({
              where: { id: author.id },
              create: author,
            })),
          },
        }),
      },
    })
  }
}
