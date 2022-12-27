import Comics from "../components/comicsList/comicsList";
import ComicSidebar from "../components/comicSidebar/comicSidebar";

const MainPage = () => {
  return (
    <>
      <div className="main-section">
        <div className="comics-area">
          <Comics />
        </div>
        <div className="comics-sidebar">
          <ComicSidebar />
        </div>
      </div>
    </>
  );
};

export default MainPage;
