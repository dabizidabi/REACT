import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);

  const catsURL =
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10";

  const _transformCats = (cat) => {
    return {
      id: cat._id,
      fact: cat.text,
      likes: 0,
      dislike: false,
      pin: false,
    };
  };

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, error ${response.status}`);
      }
      const data = await response.json();
      return data.map((cat) => _transformCats(cat));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData(catsURL).then((data) => {
      setCats(data);
    });
  }, []);

  const addLikes = (id) => {
    setCats((prevCats) =>
      prevCats.map((oldCat) => {
        return oldCat.id === id
          ? {
              ...oldCat,
              likes: oldCat.likes + 1,
              dislike: false,
            }
          : oldCat;
      }),
    );
  };

  const disLike = (id) => {
    setCats((prevCats) =>
      prevCats.map((oldCat) => {
        return oldCat.id === id
          ? {
              ...oldCat,
              likes: -1,
              dislike: true,
            }
          : oldCat;
      }),
    );
  };

  const pin = (id) => {
    setCats((prevCats) =>
      prevCats.map((oldCat) => {
        return oldCat.id === id
          ? {
              ...oldCat,
              pin: !oldCat.pin,
            }
          : oldCat;
      }),
    );
  };

  const catsList = cats
    .sort((a, b) => Number(a.dislike) - Number(b.dislike))
    .sort((a, b) => Number(b.pin) - Number(a.pin))
    .map((cat) => {
      return (
        <li key={cat.id}>
          {cat.fact}
          <button onClick={() => addLikes(cat.id)}>Like</button>
          {cat.likes}
          <button onClick={() => disLike(cat.id)}>Dislike</button>
          <button onClick={() => pin(cat.id)}>
            {cat.pin ? "unpin" : "pin"}
          </button>
        </li>
      );
    });
  return (
    <div>
      <ul>{catsList}</ul>
    </div>
  );
}

export default App;
