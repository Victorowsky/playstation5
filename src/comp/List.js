import React from "react";
const List = ({ data }) => {
  const list = data.map((item, index) => (
    <div className="shop" key={index}>
      {item.shop} :{" "}
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {" "}
        <span
          style={
            item.availablity === "NIEDOSTĘPNY"
              ? { color: "#f94144" }
              : { color: "#90be6d" }
          }
        >
          {item.availablity}
          {/* SPELLING MISTAKE POTEM availability BEDZIE */}
        </span>{" "}
      </a>{" "}
    </div>
  ));

  data.forEach((item) => {
    if (item.availablity !== "NIEDOSTĘPNY") {
      alert(`Dostępne w ${item.shop}!`);
    }
  });

  return <>{list}</>;
};

export default List;
