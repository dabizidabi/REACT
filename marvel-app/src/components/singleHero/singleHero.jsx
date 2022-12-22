import "./singleHero.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { getHero } from "../services/marvel";

const SingleHero = () => {
  const { heroId } = useParams();
  const [hero, setHero] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getHero(heroId)
      .then((data) => {
        setError(false);
        setHero(data);
        setLoading(false);
      })
      .catch(onError);
  }, [heroId]);

  const onError = () => {
    setLoading(false);
    setError(true);
  };
  if (loading) return <Spinner />;
  if (error) return <Error />;

  const renderHero = hero.map((item) => {
    console.log(item.urls);
    return (
      <div key={item.id} className="single-hero-box">
        <h3 className="hero-title">{item.name}</h3>
        <img className="single-hero-image" src={item.img} alt="hero-image" />
        <ul className="hero-urls">
          {item.urls.map((url, i) => {
            return (
              <li key={url.url}>
                <a href={url.url}>{`${
                  i + 1
                }. ${url.type.toUpperCase()}-url`}</a>
              </li>
            );
          })}
        </ul>
        <Link to="/characters" className="back-btn">
          &#9754; Back to all
        </Link>
      </div>
    );
  });

  return <>{renderHero}</>;
};

export default SingleHero;
