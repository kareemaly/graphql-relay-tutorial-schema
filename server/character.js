const delay = (value) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(value), 500);
	});
}

const getJonSnow = () => delay({
	id: '1',
	name: 'Jon Snow',
	title: `Lord Commander of the Night's Watch`,
});

const getSansaStark = () => delay({
	id: '2',
	name: 'Sansa Stark',
	title: `Princess, Lady of Winterfall`,
});

const getAllCharacters = () => delay([
	{
		id: '1',
		name: 'Jon Snow',
		title: `Lord Commander of the Night's Watch`,
	},
	{
		id: '2',
		name: 'Sansa Stark',
		title: `Princess, Lady of Winterfall`,
	},
]);

const getCharacterById = (id) =>
	getAllCharacters()
		.then((characters) => characters.filter((character) => character.id === id)[0]);


module.exports = {
	getJonSnow,
	getSansaStark,
	getAllCharacters,
	getCharacterById,
};