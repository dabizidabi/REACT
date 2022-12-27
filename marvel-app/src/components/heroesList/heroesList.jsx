import "./heroesList.css";
import { useEffect } from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { getHeroes } from "../services/marvel";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes, fetchNewHeroes } from "../../actions/heroes";

const HeroesList = () => {
  const dispatch = useDispatch();
  const { heroes, loading, error, hasMoreHeroes, offset } = useSelector(
    (state) => state.heroes,
  );

  useEffect(() => {
    dispatch(fetchHeroes(getHeroes));
  }, []);

  const renderHeroes = heroes.map((hero) => {
    return (
      <div key={hero.id} className="hero-item">
        <h3 className="hero-name">{hero.name}</h3>
        <div className="hero-flexbox">
          <Link to={`/characters/${hero.id}`}>
            <img className="hero-img" src={hero.img} alt="hero-image" />
          </Link>

          <ul>
            <li>Stories:</li>
            {hero.stories.map((story, i) => (
              <li key={story}>{`${i + 1}. "${story}"`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  });

  if (loading) return <Spinner />;
  if (error) return <Error />;

  return (
    <InfiniteScroll
      loadMore={() => dispatch(fetchNewHeroes(() => getHeroes(offset)))}
      hasMore={hasMoreHeroes}
      loader={<Spinner key={0} />}
    >
      {renderHeroes}
    </InfiniteScroll>
  );
};

export default HeroesList;
