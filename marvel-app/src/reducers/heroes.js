const initState = {
  heroes: [],
  loading: true,
  error: false,
  offset: 600,
  hasMoreHeroes: true,
};

const heroes = (state = initState, action) => {
  switch (action.type) {
    case "FETCHING_HEROES":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        loading: false,
        error: false,
        heroes: action.payload.heroes,
        offset: state.offset + action.payload.offset,
      };
    case "NEW_HEROES_FETCHED":
      return {
        ...state,
        loading: false,
        error: false,
        heroes: [...state.heroes, ...action.payload.heroes],
        offset: state.offset + action.payload.offset,
        hasMoreHeroes: action.payload.heroes.length >= 5,
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

export default heroes;
