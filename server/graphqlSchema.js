const {
	GraphQLString,
	GraphQLSchema,
	GraphQLObjectType,
} = require('graphql');

const {
	getJonSnow,
	getSansaStark,
} = require('./character');

const characterType = new GraphQLObjectType({
	name: 'Character',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		title: { type: GraphQLString },
	}),
});

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: () => ({
			jonSnow: {
				type: characterType,
				resolve: getJonSnow,
			},
			sansaStark: {
				type: characterType,
				resolve: getSansaStark,
			},
		})
	})
})