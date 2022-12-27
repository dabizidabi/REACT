const initState = {
  comics: [],
  loading: true,
  error: false,
  offset: 600,
  loadingNewComics: false,
  comicsEnded: false,
};

const comics = (state = initState, action) => {
  switch (action.type) {
    case "FETCHING_COMICS":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "COMICS_FETCHED":
      return {
        ...state,
        loading: false,
        error: false,
        comics: action.payload.comics,
        offset: state.offset + action.payload.offset,
      };
    case "FETCHING_NEW_COMICS":
      return {
        ...state,
        loadingNewComics: true,
        error: false,
      };
    case "NEW_COMICS_FETCHED":
      return {
        ...state,
        error: false,
        loadingNewComics: false,
        comics: [...state.comics, ...action.payload.comics],
        offset: state.offset + action.payload.offset,
        comicsEnded: action.payload.comics.length < 10,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default comics;
