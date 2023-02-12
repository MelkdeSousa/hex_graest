import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import resolvers from './infra/graphql/resolvers'
import typeDefs from './infra/graphql/typeDefs'

async function main() {
  const server = new ApolloServer({ typeDefs, resolvers })

  await startStandaloneServer(server, {
    listen: { port: 4000 },
  })
}

main()
