const FETCHING_HEROES = "FETCHING_HEROES";
const HEROES_FETCHED = "HEROES_FETCHED";
const NEW_HEROES_FETCHED = "NEW_HEROES_FETCHED";
const ERROR = "ERROR";

export const fetchHeroes = (fetchFunc) => (dispatch) => {
  dispatch(fetchingHeroes());
  fetchFunc()
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchNewHeroes = (fetchfunc) => (dispatch) => {
  fetchfunc()
    .then((data) => dispatch(newHeroesFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchingHeroes = () => {
  return {
    type: FETCHING_HEROES,
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: HEROES_FETCHED,
    payload: { heroes, offset: 5 },
  };
};

export const newHeroesFetched = (heroes) => {
  console.log(heroes.length);
  return {
    type: NEW_HEROES_FETCHED,
    payload: { heroes, offset: 5 },
  };
};

export const onError = () => {
  return {
    type: ERROR,
  };
};
