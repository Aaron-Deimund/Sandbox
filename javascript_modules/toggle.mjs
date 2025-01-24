export function addToggleEvents() {
	let viewToggle = document.querySelector('#view-toggle__container')
	let toggleOverlay = document.querySelector('#toggle-overlay')
	const cssAnimationLength = 180;

	viewToggle.addEventListener('click', () => {
		let start = 'unflip'
		let end = 'flip'
		let selected = document.getElementsByClassName('selected-view');
		Array.from(selected).forEach(e => e.classList.remove('selected-view'));

		if (toggleOverlay.classList.contains('flip__end-state')) {
			start = 'flip'
			end = 'unflip'
			document.querySelector('#grid-toggle').classList.add('selected-view')
		} else {
			document.querySelector('#list-toggle').classList.add('selected-view')
		}

		toggleOverlay.classList.add(`${end}__in-progress`);
		setTimeout(() => {
			toggleOverlay.classList.remove(`${start}__end-state`);
			toggleOverlay.classList.add(`${end}__end-state`);
			toggleOverlay.classList.remove(`${end}__in-progress`);
		}, cssAnimationLength)
	});
}

