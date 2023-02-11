export const BookType = `#graphql
    type Book {
        id: String
        title: String
        price: Int
        authors: [Author]
    }
`

export const BookInputType = `#graphql
    input BookInput {
        title: String,
        price: Int
        authorName: String
    }
`