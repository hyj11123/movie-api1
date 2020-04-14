import React from "react";
import "./app.css";
import MovieBox from "./components/MovieBox";

// movie api key : 6f468133ad08eef8c7a50210567d8a1b

class App extends React.Component {
  state = {
    movieList: null,
  };

  render() {
    const { movieList } = this.state;

    return (
      <div className="app">
        <div className="headerEmp"></div>
        <div className="btnArea">
          <button className="btn" onClick={this._nowBtnHandler}>
            최신영화
          </button>
          <button className="btn" onClick={this._popularBtnHandler}>
            인기영화
          </button>
        </div>
        <div className="movieArea">
          {movieList ? (
            <>
              {movieList.map((movie, idx) => {
                return (
                  <MovieBox
                    key={idx}
                    title={movie.original_title}
                    vote={movie.vote_average}
                    release={movie.release_data}
                    overview={movie.overview}
                    poster={movie.poster_path}
                  />
                );
              })}
            </>
          ) : (
            <div>조회 된 영화가 없습니다.</div>
          )}
        </div>
      </div>
    );
  }

  _popularBtnHandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6f468133ad08eef8c7a50210567d8a1b&language=en-US&page=1"
    ).then((response) => response.json());

    this.setState({
      movieList: data.results,
    });
  };

  _nowBtnHandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6f468133ad08eef8c7a50210567d8a1b&language=en-US&page=1"
    ).then((response) => response.json());

    this.setState({
      movieList: data.results,
    });
  };
}

export default App;
