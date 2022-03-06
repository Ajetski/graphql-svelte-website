import { gql } from 'apollo-server-express';

export default gql`
	type Query {
		currentUser: User
		users: [User!]!
		posts: [Post!]!
	}

	type Mutation {
		register(userInfo: UserInfo!): Login!
		login(username: String, password: String): Login!
	}

	type User {
		id: ID!
		username: String!
		posts: [Post!]!
		lengthOfUsername: Int!
		age: Int
	}

	input UserInfo {
		username: String!
		password: String!
		age: Int
	}

	type Post {
		id: ID!
		text: String!
		poster: User!
	}

	type Login {
		user: User
		token: ID # change type to use real access tokens later
	}
`;
