import React from "react";
import "./App.css";
function Coindetail(props) {
  return (
    <div className="coin_style">
      <img src={props.icon} />
      <h1>
        {" "}
        Name : <span> {props.name}</span>{" "}
      </h1>
      <h3>
        {" "}
        Symbol : <span>{props.symbol}</span>{" "}
      </h3>
      <h3>
        {" "}
        Price : <span>${props.price}</span>{" "}
      </h3>
      <h3>
        {" "}
        Volume : <span>{props.volume}</span>{" "}
      </h3>
      <h3>
        <a className="link_tag" href={props.websiteUrl}>
          Website
        </a>
      </h3>
    </div>
  );
}

export default Coindetail;
