//merge two arrays based on idk and idg use filter with some and then two maps for two arrays and push the changes by object.assign into a new array
import React from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

const App = (props) => {
  const obj1 = [
    { idk: 1, name: "rohu" },
    { idk: 2, name: "vinni" },
    { idk: 3, name: "rahul" }
  ];

  const obj2 = [
    { idg: 1, city: "nagpur" },
    { idg: 2, city: "hyderabad" }
  ];

  const result1 = obj1.filter((x) => obj2.some((item) => x.idk === item.idg));
  let arrNew = [];
  result1.map((itemObj1) =>
    obj2.map((itemObj2) => {
      if (itemObj1.idk === itemObj2.idg) {
        arrNew.push(Object.assign({}, itemObj1, itemObj2));
      }

      return arrNew;
    })
  );
  console.log(arrNew);
  return (
    <div>
      <h2>Message List</h2>
      {arrNew.map((item) => (
        <div key={item.idg}>
          <span>{item.idg}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));
