const {
	GraphQLString,
	GraphQLSchema,
	GraphQLObjectType,
} = require('graphql');

const {
	globalIdField,
	nodeDefinitions,
	fromGlobalId,
	connectionDefinitions,
	connectionArgs,
	connectionFromPromisedArray,
} = require('graphql-relay');

const {
	getJonSnow,
	getSansaStark,
	getCharacterById,
	getAllCharacters,
} = require('./character');

const { nodeField, nodeInterface } = nodeDefinitions((globalId) => {
	const { type, id } = fromGlobalId(globalId);
	switch(type) {
		case 'Character':
			return getCharacterById(id);
	}
})

const characterType = new GraphQLObjectType({
	name: 'Character',
	fields: () => ({
		id: globalIdField('Character'),
		name: { type: GraphQLString },
		title: { type: GraphQLString },
	}),
	interfaces: [ nodeInterface ],
	isTypeOf: (character) => true
});

const { connectionType } = connectionDefinitions({ nodeType: characterType });

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: () => ({
			characters: {
				type: connectionType,
				args: connectionArgs,
				resolve: (_, pArgs) =>
					connectionFromPromisedArray(getAllCharacters(), pArgs)
			},
			node: nodeField,
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