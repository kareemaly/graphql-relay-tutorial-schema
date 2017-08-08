const getJonSnow = () => ({
	id: '1',
	name: 'Jon Snow',
	title: `Lord Commander of the Night's Watch`,
});

const getSansaStark = () => ({
	id: '2',
	name: 'Sansa Stark',
	title: `Princess, Lady of Winterfall`,
});

const getAllCharacters = () => ([
	getJonSnow(),
	getSansaStark(),
]);

const getCharacterById = (id) =>
	getAllCharacters()
		.filter((character) => character.id === id)[0];


module.exports = {
	getJonSnow,
	getSansaStark,
	getAllCharacters,
	getCharacterById,
};