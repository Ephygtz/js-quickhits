const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Query {
		getWelcome: String
	}
`);

const root = {
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

app.listen(4000, console.log("Running a GraphQL API server at localhost:4000/graphql"));


