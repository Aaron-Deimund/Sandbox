export function isValidUrl(string) {

	let valid = false;
	const requestOptions = {
		method: "GET",
		redirect: "follow"
	};

	fetch(string, requestOptions)
		.then((response) => valid = true)
		.then((result) => valid = true)
		.catch((error) => valid = false);

	return valid;
}


export function findCollectionUrl(model) {
	const host = "https://shoptrueoemparts.truemfg.com"
	const collections = "/collections/"
	let modelBase = model.split(" ")[0];
	let url = host + collections + modelBase
	if (isValidUrl(url)) return url;
	return false;
}