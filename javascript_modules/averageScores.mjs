export function myFunction(scores) {
	let total = scores.reduce((a, c) => a + c);
	let average = total/scores.length;
	return Math.round(average);
}