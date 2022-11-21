import Comics from "../components/comicsList/comicsList";
import ComicSidebar from "../components/comicSidebar/comicSidebar";
import { useState } from "react";

const MainPage = () => {
  const [selectedComic, setSelectedComic] = useState();

  const onSelectComic = (id) => setSelectedComic(id);
  return (
    <>
      <div className="main-section">
        <div className="comics-area">
          <Comics onSelectComic={onSelectComic} />
        </div>
        <div className="comics-sidebar">
          <ComicSidebar comicId={selectedComic} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
