const FETCHING_COMIC = "FETCHING_COMIC";
const COMIC_FETCHED = "COMIC_FETCHED";
const GET_COMIC_ID = "GET_COMIC_ID";
const SET_INIT_STATE = "SET_INIT_STATE";

const ERROR = "ERROR";

export const fetchComic = (fetchFunc) => (dispatch) => {
  dispatch(fetchingComic());
  fetchFunc()
    .then((data) => dispatch(comicsFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchingComic = () => {
  return {
    type: FETCHING_COMIC,
  };
};

export const comicsFetched = (comic) => {
  return {
    type: COMIC_FETCHED,
    payload: comic,
  };
};

export const getComicId = (comicId) => {
  return {
    type: GET_COMIC_ID,
    payload: comicId,
  };
};

export const setInitState = () => {
  return {
    type: SET_INIT_STATE,
    payload: null,
  };
};

export const onError = () => {
  return {
    type: ERROR,
  };
};
