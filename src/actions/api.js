const host = 'https://images-api.nasa.gov';

export const search = (term) => {
	return `${host}/search?q=${term}`;
}

export const getAssets = (nasa_id) => {
	return `${host}/asset/${nasa_id}`;
}