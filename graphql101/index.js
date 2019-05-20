const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

//simulate some static dummy data
const dummyData = {
	users: [
		{
			age: 27,
			id: 1,
			name: 'Ephra The CodeBender'
		},
		{
			age: 17,
			id: 2,
			name: 'King Wanyama'
		},
		{
			age: 30,
			id: 3,
			name: 'Kaberia'
		},
		{
			age: 21,
			id: 4,
			name: 'Koi Karanja'
		}
	]
}

const schema = buildSchema(`
	type User {
		age: Int
		id: ID
		name: String
	}
	type Query {
		getUser(id: Int!): User
		getUsers(userIds: [Int]!): [User]
		getWelcome: String
	}
`);

const root = {
	getUser: (args) => {
		const { id } = args;
		return dummyData.users.find(user => user.id === id);
	},
	getUsers: (args) => {
		const {userIds} = args;
		const foundUsers = dummyData.users.filter(user => {
			return userIds.some(id => id === user.id);
		});
		return foundUsers;
	},
	getWelcome: () => {
		return 'Welcome to GraphQL';
	}
}

//Instatiate express
const app = express();

//create an express route for /graphql
app.use('/graphql', graphqlHTTP({
	schema: schema, //use our schema
	rootValue: root, //use our resolver(s)
	graphiql: true, //use GraphQL's built-in GUI
}));

app.listen(4000, console.log("Running a GraphQL API server at 127.0.0.1:4000/graphql"));


