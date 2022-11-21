const MarvelApi = () => {
    const _apiKey = "9096b9c167f28e2a4eb1cc0f3bfdaf09"
    const marvelApi = `https://gateway.marvel.com:443/v1/public/characters?apikey=${_apiKey}`

    async function getMarvelData(ur) {
        try {
           const result = await fetch(url);
           return await result.json();  
        }
        catch (error) {
            console.log(error);
        }
    }

    const marvelData = getMarvelData(marvelApi);
    console.log(marvelData);
}

export default MarvelApi;