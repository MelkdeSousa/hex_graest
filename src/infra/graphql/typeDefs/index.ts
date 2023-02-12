import { AuthorType } from './Author'
import { BookInputType, BookType } from './Book'
import { MutationType } from './Mutation'
import { QueryType } from './Query'

export default [
  AuthorType,
  BookType,
  BookInputType,
  QueryType,
  MutationType,
].join('\n')
