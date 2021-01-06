import React from "react";

function Result({ result, openPopup }) {
  return (
    <div
      className="result pt-5 container align-items-center"
      onClick={() => openPopup(result.imdbID)}
    >
      <div className="card bg-secondary text-white w-100 inner">
        <img className="card-img-top" src={result.Poster} alt={result.Title} />
        <h2 className="text-hover border border-light rounded-pill">
          Click here for more details
        </h2>
        <div className="card-body h-100">
          <h3 className="card-title">{result.Title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Result;
