import React from "react";
import "../movieBox.css";

class MovieBox extends React.Component {
  render() {
    const pos = "https://image.tmdb.org/t/p/w500" + this.props.poster;
    return (
      // 프라너먼트? <> </> 여러게의 컴포넌트를 하나로 묶을수 있음 하지만 class를 줄수 없음
      <div className="movieBox">
        <div className="movieBox__poster">
          <img src={pos} alt="poster" width="65px" height="80px" />
        </div>
        <div className="movieBox__desc">
          <div>{this.props.title}</div>
          <div>{this.props.vote}</div>
          <div>{this.props.release}</div>
          <div>
            {this.props.overview.length > 123
              ? this.props.overview.slice(0, 123) + "..."
              : this.props.overview}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieBox;
