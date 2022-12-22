export const fetchComics = (request) => (dispatch) => {
  dispatch(fetchingComics());
  request()
    .then((data) => dispatch(comicsFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchNewComics = (request) => (dispatch) => {
  dispatch(fetchingNewComics());
  request()
    .then((data) => dispatch(newComicsFetched(data)))
    .catch(() => dispatch(onError()));
};

export const fetchingComics = () => {
  console.log("fetchingComics");
  return {
    type: "FETCHING_COMICS",
  };
};

export const comicsFetched = (comics) => {
  console.log("comicsFetched");
  return {
    type: "COMICS_FETCHED",
    payload: { comics, offset: 10 },
  };
};

export const fetchingNewComics = () => {
  return {
    type: "FETCHING_NEW_COMICS",
  };
};

export const newComicsFetched = (comics) => {
  return {
    type: "NEW_COMICS_FETCHED",
    payload: { comics, offset: 10 },
  };
};

export const onError = () => {
  return {
    type: "ERROR",
  };
};
