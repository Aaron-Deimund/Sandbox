export async function getRequest(url) { 
	const request = new Request(url, {
		method: "Get"
	});

	const r = await fetch(request);
	const j = await r.json();
	console.log(j);
};