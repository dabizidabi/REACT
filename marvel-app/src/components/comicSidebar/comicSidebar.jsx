import "./comicSidebar.css";
import { getSingleComic } from "../services/marvel";
import { useEffect } from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { useDispatch, useSelector } from "react-redux";
import { fetchComic, setInitState } from "../../actions/singleComic";

const ComicSidebar = () => {
  const dispatch = useDispatch();
  const { comic, loading, error, comicId } = useSelector(
    (state) => state.singleComic,
  );

  useEffect(() => {
    if (comicId) {
      dispatch(fetchComic(() => getSingleComic(comicId)));
    }
  }, [comicId]);

  useEffect(() => {
    return () => {
      dispatch(setInitState());
    };
  }, []);

  const { description, img, format, creators, url, title } = comic[0];
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
