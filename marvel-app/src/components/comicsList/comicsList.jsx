import "./comicsList.css";
import { useEffect, useState } from "react";
import { getComics } from "../services/marvel";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

const Comics = ({ onSelectComic }) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(600);
  const [loadingNewComics, setLoadingNewComics] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);

  const onRequest = (newComics) => {
    setComicsEnded(newComics.length < 10);
    setComics((prevComics) => [...prevComics, ...newComics]);
  };

  const getNewComics = (offset) => {
    setLoadingNewComics(true);
    getComics(offset)
      .then((data) => {
        onRequest(data);
        setError(false);
        setOffset((prevOffset) => prevOffset + 10);
        setLoadingNewComics(false);
      })
      .catch(onError);
  };

  useEffect(() => {
    getComics()
      .then((data) => {
        setError(false);
        setComics(data);
        setOffset((prevOffset) => prevOffset + 10);
        setLoading(false);
      })
      .catch(onError);
  }, []);

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const comicsList = comics.map((comic) => {
    return (
      <div
        key={comic.id}
        onClick={() => onSelectComic(comic.id)}
        className="comic-box"
      >
        <img src={comic.img} alt="comic-image" className="comic-img" />
        <figure>{comic.title}</figure>
      </div>
    );
  });

  if (error) return <Error />;
  if (loading) return <Spinner />;

  return (
    <>
      <div className="comics-flexbox">{comicsList}</div>
      <button
        disabled={loadingNewComics}
        onClick={() => getNewComics(offset)}
        style={{
          display: comicsEnded || loadingNewComics ? "none" : "inline-block",
        }}
        className="btn-long"
      >
        Load more
      </button>
      <div style={{ display: loadingNewComics ? "inline-block" : "none" }}>
        <Spinner />
      </div>
    </>
  );
};

export default Comics;
