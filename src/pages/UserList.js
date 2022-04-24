import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Darkmode from "../components/Darkmode";
import Footer from "../components/Footer";
import Headerland from "../components/Headerland";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=7da52767b907afa2fc1a26fa44ff20c5&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div>
      <Darkmode />
      <section>
        <div className="user-list-page">
          <Headerland />
          <h2>
            Coup de coeur <span>💖</span>
          </h2>
          <div className="result">
            {listData.length > 0 ? (
              listData.map((movie) => <Card movie={movie} key={movie.id} />)
            ) : (
              <h2>Aucun coup de coeur pour le moment</h2>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserList;
