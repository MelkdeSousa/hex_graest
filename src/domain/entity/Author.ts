import crypto from 'crypto'

export default class Author {
  id: string

  constructor(
    id: string | undefined,
    readonly name: string,
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date(),
  ) {
    if (!id) {
      this.id = crypto.randomUUID()
    } else {
      this.id = id
    }
  }
}
