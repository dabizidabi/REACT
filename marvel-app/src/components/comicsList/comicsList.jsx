import "./comicsList.css";
import { useEffect } from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { fetchComics, fetchNewComics } from "../../actions/comics";
import { getComicId } from "../../actions/singleComic";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../services/marvel";

const Comics = () => {
  const dispatch = useDispatch();
  const { comics, loading, error, loadingNewComics, comicsEnded, offset } =
    useSelector((state) => state.comics);

  useEffect(() => {
    dispatch(fetchComics(getComics));
  }, []);

  const comicsList = comics.map((comic) => {
    return (
      <div
        key={comic.id}
        onClick={() => dispatch(getComicId(comic.id))}
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
        onClick={() => dispatch(fetchNewComics(() => getComics(offset)))}
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
