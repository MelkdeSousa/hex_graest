import { Author as PrismaAuthor } from '@prisma/client'
import Author from '../../domain/entity/Author'

export default (entityAuthor: Author): PrismaAuthor => {
  return {
    id: entityAuthor.id,
    name: entityAuthor.name,
    createdAt: entityAuthor.createdAt,
    updatedAt: entityAuthor.updatedAt,
  }
}
