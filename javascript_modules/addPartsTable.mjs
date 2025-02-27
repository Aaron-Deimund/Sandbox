function partsToTable(jsonString) {
	let partList = JSON.parse(jsonString)
	let output = '<tr><th>Part Number</th><th>Part Description</th>'
	Object.getOwnPropertyNames(partList).forEach(partNumber => {
		output += `<tr> <td>${partNumber}</td> <td>${partList[partNumber]}</td> </tr>`
	});
	return output
}

export function addPartsTable(jsonString, containerId) {
	let partsTable = document.createElement('table')
	let tableBody = document.createElement('tbody')
	let partsRows = partsToTable(jsonString)

	tableBody.innerHTML = partsRows
	partsTable.appendChild(tableBody)

	document.getElementById(containerId).appendChild(partsTable)
}