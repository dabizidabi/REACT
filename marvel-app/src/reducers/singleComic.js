const initState = {
  comic: [{}],
  loading: false,
  error: false,
  comicId: null,
};

const singleComic = (state = initState, action) => {
  switch (action.type) {
    case "FETCHING_COMIC":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "COMIC_FETCHED":
      return {
        ...state,
        loading: false,
        error: false,
        comic: action.payload,
      };
    case "GET_COMIC_ID":
      return {
        ...state,
        comicId: action.payload,
      };
    case "SET_INIT_STATE":
      return initState;
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

export default singleComic;
