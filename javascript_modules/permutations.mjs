export function getPermutations(string) {
	let characters = string.split('');
	let allVariations = [];
	let uniqueVariations = [];
	let duplicateVariations = [];
	let maxVariations;

	// Calculate maximum number of variations. It's just string.length factorial.
	if (string.length < 2) {
		maxVariations = string.length;
	} else {
		maxVariations = 1
		for (let i = 2; i <= string.length; i++) maxVariations *= i;
	}


	// Initialize the array of variations.
	for (let i = 0; i < maxVariations; i++) allVariations.push([]);

	// Get all variations, dupes included.
	let devisor = 1;

	characters.forEach((character, characterIndex) => {
		let totalItems = 0;
		devisor *= characterIndex + 1;
		let duration = maxVariations / devisor;
		let frequency = maxVariations / duration;
		for (let outer = 0; outer < frequency; outer++) {
			for (let inner = 0; inner < duration; inner++) {
				let currentIndex = outer;
				let variationLength = allVariations[totalItems].length;
				while (currentIndex > variationLength) currentIndex = currentIndex - (variationLength + 1);
				allVariations[totalItems].splice(currentIndex, 0, character);
				totalItems++;
			};
		}
	});


	// Remove duplicate Variations
	allVariations.forEach(variation => {
		let joinedVariation = variation.join('');
		if (!uniqueVariations.includes(joinedVariation)) {
			uniqueVariations.push(joinedVariation);
		} else {
			duplicateVariations.push(joinedVariation);
		}
	});

	return uniqueVariations;
}