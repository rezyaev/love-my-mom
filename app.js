import { getCongratulations } from './congratulations.js';

/** @type {HTMLButtonElement} */
const getCongratulationsButton = document.querySelector('button');
/** @type {HTMLDivElement} */
let congratulationCard = document.querySelector('.congratulation-card');

/**
 * @param {string} congratulation
 * @param {string} author
 * @returns {HTMLDivElement}
 */
const createCongratulationCard = (congratulation, author) => {
	const cardDiv = document.createElement('div');
	cardDiv.classList.add('congratulation-card');
	cardDiv.classList.add('congratulation-card-added');

	const congratulationParagraph = document.createElement('p');
	congratulationParagraph.classList.add('congratulation');
	congratulationParagraph.innerHTML = congratulation;

	const authorParagraph = document.createElement('p');
	authorParagraph.classList.add('author');
	authorParagraph.textContent = author;

	cardDiv.appendChild(congratulationParagraph);
	cardDiv.appendChild(authorParagraph);

	return cardDiv;
};

let congratulations = getCongratulations();
let congratulationIndex = 0;

getCongratulationsButton.addEventListener('click', () => {
	const { congratulation, author } = congratulations[congratulationIndex];

	congratulationIndex += 1;

	// If all congratulations have been seen, get new randomized array and reset index
	if (congratulationIndex >= congratulations.length) {
		congratulations = getCongratulations();
		congratulationIndex = 0;
	}

	// Create and append new card on old card removal
	congratulationCard.addEventListener('transitionend', (event) => {
		if (event.propertyName !== 'transform') return;

		congratulationCard.remove();

		const newCongratulationCard = createCongratulationCard(
			congratulation,
			author
		);

		document.body.appendChild(newCongratulationCard);
		setTimeout(
			() => newCongratulationCard.classList.remove('congratulation-card-added'),
			0
		);

		// Store the new card
		congratulationCard = newCongratulationCard;
	});

	// Remove old card
	congratulationCard.classList.add('congratulation-card-removed');
});
