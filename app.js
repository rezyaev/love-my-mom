/** @type {HTMLButtonElement} */
const getCongratulationsButton = document.querySelector('button');
/** @type {HTMLParagraphElement} */
const congratulationParagraph = document.querySelector('.congratulation');
/** @type {HTMLParagraphElement} */
const authorParagraph = document.querySelector('.author');

const congratulations = [
	{
		congratulation:
			'Сам себя в этом году ты найдешь, стихи, и книги писать начнешь!',
		author: 'Любовь'
	},
	{
		congratulation: 'Ожидай любви ты много, а ещё — к родным дорогу!',
		author: 'Любовь'
	},
	{
		congratulation:
			'Пусть жизнь тебе в подарок зафигачит отпадный микс из счастья и удачи!',
		author: 'Любовь'
	}
];

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

getCongratulationsButton.addEventListener('click', () => {
	const randomCongratulationIndex = getRandomIntInclusive(
		0,
		congratulations.length - 1
	);

	const { congratulation, author } = congratulations[randomCongratulationIndex];

	congratulationParagraph.textContent = congratulation;
	authorParagraph.textContent = author;
});
