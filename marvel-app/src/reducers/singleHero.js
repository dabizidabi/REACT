const initState = {
  hero: [],
  loading: true,
  error: false,
};

const singleHero = (state = initState, action) => {
  switch (action.type) {
    case "FETCHING_HERO":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "HERO_FETCHED":
      return {
        ...state,
        loading: false,
        error: false,
        hero: action.payload,
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

export default singleHero;
