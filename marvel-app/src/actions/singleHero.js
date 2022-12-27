const FETCHING_HERO = "FETCHING_HERO";
const HERO_FETCHED = "HERO_FETCHED";
const ERROR = "ERROR";

export const fetchHero = (fetchFunc) => (dispatch) => {
  dispatch(fetchingHero());
  fetchFunc()
    .then((data) => dispatch(heroFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchingHero = () => {
  return {
    type: FETCHING_HERO,
  };
};

export const heroFetched = (hero) => {
  return {
    type: HERO_FETCHED,
    payload: hero,
  };
};

export const onError = () => {
  return {
    type: ERROR,
  };
};
