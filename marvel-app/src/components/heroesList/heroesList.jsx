import "./heroesList.css";
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { getHeroes } from "../services/marvel";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";

const HeroesList = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(600);
  const [hasMoreHeroes, setHasMoreHeroes] = useState(true);

  const onRequest = (newHeroes) => {
    setHasMoreHeroes(newHeroes.length >= 5);
    setHeroes((prevHeroes) => [...prevHeroes, ...newHeroes]);
  };

  const loadNewHeroes = (offset) => {
    getHeroes(offset)
      .then((data) => {
        setError(false);
        onRequest(data);
        setOffset((prevOffset) => prevOffset + 5);
      })
      .catch(onError);
  };

  useEffect(() => {
    getHeroes()
      .then((data) => {
        setError(false);
        setHeroes(data);
        setOffset((prevOffset) => prevOffset + 5);
        setLoading(false);
      })
      .catch(onError);
  }, []);

  const onError = () => {
    setLoading(false);
    setError(true);
  };

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
      loadMore={() => loadNewHeroes(offset)}
      hasMore={hasMoreHeroes}
      loader={<Spinner key={0} />}
    >
      {renderHeroes}
    </InfiniteScroll>
  );
};

export default HeroesList;
