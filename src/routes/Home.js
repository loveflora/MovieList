import { useState } from "react";
import { useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await // API
    (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
      )
    ).json();
    setMovies(json.data.movies);
    // API로 얻은 data로 State 변경
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  // useEffect(() => {
  //   fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              // props로 컴포넌트에 넘겨줌
              // props는 object -- 이걸 열어서 item을 꺼내 쓰는거임
              // Movie({id:movie})
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
