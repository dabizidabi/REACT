const FETCHING_COMICS = "FETCHING_COMICS";
const COMICS_FETCHED = "COMICS_FETCHED";
const FETCHING_NEW_COMICS = "FETCHING_NEW_COMICS";
const NEW_COMICS_FETCHED = "NEW_COMICS_FETCHED";
const ERROR = "ERROR";

export const fetchComics = (fetchFunc) => (dispatch) => {
  dispatch(fetchingComics());
  fetchFunc()
    .then((data) => dispatch(comicsFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchNewComics = (fetchfunc) => (dispatch) => {
  dispatch(fetchingNewComics());
  fetchfunc()
    .then((data) => dispatch(newComicsFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchingComics = () => {
  return {
    type: FETCHING_COMICS,
  };
};

export const comicsFetched = (comics) => {
  return {
    type: COMICS_FETCHED,
    payload: { comics, offset: 10 },
  };
};

export const fetchingNewComics = () => {
  return {
    type: FETCHING_NEW_COMICS,
  };
};

export const newComicsFetched = (comics) => {
  return {
    type: NEW_COMICS_FETCHED,
    payload: { comics, offset: 10 },
  };
};

export const onError = () => {
  return {
    type: ERROR,
  };
};
