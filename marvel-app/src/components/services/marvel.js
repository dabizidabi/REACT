const _public_api_key = "9096b9c167f28e2a4eb1cc0f3bfdaf09";
const _marvel_url = "https://gateway.marvel.com:443/v1/public/";
const _comicsLimit = 10;
const _heroesLimit = 5;
const _offset = 600;

const getData = async (
  url,
  method = "GET",
  body = null,
  headers = { "Content-Type": "application/json" },
) => {
  try {
    const response = await fetch(url, { method, body, headers });
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

//Get all comics
export const getComics = async (offset = _offset) => {
  const response = await getData(
    `${_marvel_url}comics?limit=${_comicsLimit}&offset=${offset}&apikey=${_public_api_key}`,
  );
  return response.data.results.map((comic) => _transformComics(comic));
};

//Get single comic
export const getSingleComic = async (comicId) => {
  const response = await getData(
    `${_marvel_url}comics/${comicId}?apikey=${_public_api_key}`,
  );
  return response.data.results.map((comic) => _transformComic(comic));
};

//Get all heroes
export const getHeroes = async (offset = _offset) => {
  const response = await getData(
    `${_marvel_url}characters?limit=${_heroesLimit}&offset=${offset}&apikey=${_public_api_key}`,
  );
  return response.data.results.map((heroes) => _transformHeroes(heroes));
};

//Get single hero
export const getHero = async (heroId) => {
  const response = await getData(
    `${_marvel_url}characters/${heroId}?apikey=${_public_api_key}`,
  );
  return response.data.results.map((hero) => _transformHero(hero));
};

const _transformComics = (comics) => {
  return {
    id: comics.id,
    title: comics.title,
    img: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
  };
};

const _transformComic = (comic) => {
  return {
    id: comic.id,
    title: comic.title,
    description: comic.description || "There is no description for this comic",
    img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    format: comic.format,
    creators: comic.creators,
    url: comic.urls[0].url,
  };
};

const _transformHeroes = (hero) => {
  return {
    id: hero.id,
    name: hero.name,
    img: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    stories: hero.stories.items.map((item) => item.name),
  };
};

const _transformHero = (hero) => {
  return {
    id: hero.id,
    name: hero.name,
    img: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    urls: hero.urls,
  };
};
