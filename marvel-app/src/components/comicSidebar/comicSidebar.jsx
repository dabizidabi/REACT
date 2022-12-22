import "./comicSidebar.css";
import { getSingleComic } from "../services/marvel";
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

const ComicSidebar = ({ comicId }) => {
  const [comic, setComic] = useState({
    comicObj: [{}],
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (comicId) {
      setComic({
        ...comic,
        loading: true,
        error: false,
      });

      getSingleComic(comicId)
        .then((data) => onComicLoaded(data))
        .catch(onError);
    }
  }, [comicId]);

  const onComicLoaded = (data) => {
    setComic({
      ...comic,
      loading: false,
      comicObj: data,
    });
  };

  const onError = () => {
    setComic({
      ...comic,
      loading: false,
      error: true,
    });
  };

  const { loading, error } = comic;
  const { description, img, format, creators, url, title } = comic.comicObj[0];
  const creatorsNames = creators?.items.map((creator) => creator.name + "; ");

  if (error) return <Error />;
  if (loading) return <Spinner />;

  return (
    <div className="comic-info">
      {!comicId ? (
        <p>Select a comic to see additional information</p>
      ) : (
        <ul>
          <li>
            <img src={img} alt="comic-img" />
          </li>
          <li>
            <span>Format:</span> {format}
          </li>
          <li>
            <span>Description:</span> {description}
          </li>
          {creatorsNames && (
            <li>
              <span>Creators:</span> {creatorsNames}
            </li>
          )}
          <li>
            <span>Resource: </span>
            <a href={url} target="_blank">
              {title}
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ComicSidebar;
