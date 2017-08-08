const express = require('express');
const graphQLHTTP = require('express-graphql');
const graphqlSchema = require('./graphqlSchema');
const app = express();

app.use('/graphql', graphQLHTTP({
	graphiql: true,
	pretty: true,
	schema: graphqlSchema,
}));

app.listen(3000, () => {
	console.log("App is running on 3000");
});