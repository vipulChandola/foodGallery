import React from "react";

export default function Fooditem({e}) {
  return (
    <div className="card " style={{ width: "18rem", margin: "5vh" }}>
      <img className="card-img-top" src={e.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{e.category}</h5>
        <p className="card-text">
          <b>{e.name}</b>
          <br />
          Some quick example text to build on the card title
        </p>
        <a href="#" className="btn btn-primary">
          order now
        </a>
      </div>
    </div>
  );
}
