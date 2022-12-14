// import React from "react";
import React, { useState } from "react";
import Button from "./Button";
import Fooditem from "./Fooditem";
import { Images } from "./Images";

export default function Gallery() {
  const [item, setitem] = useState(Images);

  const filteritem = (a) => {
    const brk = Images.filter((e) => {
      return e.category === a;
    });
    setitem(brk);
  };

  return (
    <>
      <h1>order ur food</h1>
      <div className="btns">
        <Button filteritem={filteritem} setfirst={setitem} />
      </div>
      <div className="cards">
        {item.map((event, ind) => {
          return <Fooditem e={event} key={ind} />;
        })}
      </div>
    </>
  );
}
