import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ArtworkDetail from "./components/ArtworkDetail";

function App() {
  const apiKey = "3642227d-4538-41ac-8d8d-f019147029d5";
  const dataSize = 50;
  const dataType = "object";

  const [dataWorktype, setDataWorkType] = useState("painting");

  let fetchUrl = `https://api.harvardartmuseums.org/${dataType}?apikey=${apiKey}&hasimage=1&size=${dataSize}&worktype=${dataWorktype}`;

  const [filterData, setFilterData] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [painting, setPainting] = useState([]);
  const [statue, setStatue] = useState([]);
  const [drawing, setDrawing] = useState([]);
  const [photograph, setPhotograph] = useState([]);

  const fetchApi = () => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.records.filter(
          (data) => data.primaryimageurl !== null
        );
        setFilterData(filtered);
      });
    fetch(
      `https://api.harvardartmuseums.org/${dataType}?apikey=${apiKey}&hasimage=1&size=${dataSize}&worktype=painting`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.records.filter(
          (data) => data.primaryimageurl !== null
        );
        setPainting(filtered);
      });
    fetch(
      `https://api.harvardartmuseums.org/${dataType}?apikey=${apiKey}&hasimage=1&size=${dataSize}&worktype=statue`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.records.filter(
          (data) => data.primaryimageurl !== null
        );
        setStatue(filtered);
      });
    fetch(
      `https://api.harvardartmuseums.org/${dataType}?apikey=${apiKey}&hasimage=1&size=${dataSize}&worktype=drawing`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.records.filter(
          (data) => data.primaryimageurl !== null
        );
        setDrawing(filtered);
      });
    fetch(
      `https://api.harvardartmuseums.org/${dataType}?apikey=${apiKey}&hasimage=1&size=${dataSize}&worktype=photograph`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.records.filter(
          (data) => data.primaryimageurl !== null
        );
        setPhotograph(filtered);
      });
  };

  useEffect(() => fetchApi(), [dataWorktype]);

  const changeWorkType = (changeType) => {
    setDataWorkType(changeType);
  };

  const changeTitle = (changeTitle) => {
    setFilterTitle(changeTitle);
  };

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favoritesArt"));
    if (favoritesItem) {
      setFavorites(favoritesItem);
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favoritesArt", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout changeWorkType={changeWorkType} changeTitle={changeTitle} />
          }
        >
          <Route
            path="/"
            element={
              <Home
                filterData={filterData}
                filterTitle={filterTitle}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

          <Route
            path="/:id"
            element={<ArtworkDetail filterData={filterData} />}
          />

          <Route
            path="favorite"
            element={
              <Favorites
                painting={painting}
                statue={statue}
                drawing={drawing}
                photograph={photograph}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/:id"
            element={<ArtworkDetail filterData={filterData} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
