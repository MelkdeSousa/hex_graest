import crypto from 'crypto'

import Author from './Author'

export default class Book {
  id: string
  authors: Author[] = []

  constructor(
    id: string | undefined,
    readonly title: string,
    readonly price: number,
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date(),
  ) {
    if (!id) {
      this.id = crypto.randomUUID()
    } else {
      this.id = id
    }
  }

  addAuthor(author: Author) {
    this.authors.push(author)
  }
}
