export const QueryType = `#graphql
	type Query {
		books (criteria: String): [Book]
	}
`