export function rejson(data) {
	return JSON.stringify(JSON.parse(data), null, '\t');
}
