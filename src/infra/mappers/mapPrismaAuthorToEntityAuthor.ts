import { Author as PrismaAuthor } from '@prisma/client'
import Author from '../../domain/entity/Author'

export default (prismaAuthor: PrismaAuthor): Author => {
  return new Author(prismaAuthor.id, prismaAuthor.name)
}
