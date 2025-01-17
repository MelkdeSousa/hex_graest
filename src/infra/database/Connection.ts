import pgp from 'pg-promise'

export class Connection {
  connection: any

  constructor() {
    this.connection = pgp()('postgres://postgres:123456@localhost:5432/app')
  }

  query(statement: string, params: any) {
    return this.connection.query(statement, params)
  }

  close() {
    return this.connection.$pool.end()
  }
}

const connection = new Connection()

export default connection
