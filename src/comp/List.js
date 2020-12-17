import React from "react";
const List = ({ data }) => {
  const list = data.map((item, index) => (
    <div className="shop" key={index}>
      {item.shop} :{" "}
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {" "}
        <span
          style={
            item.availability !== "DOSTĘPNY"
              ? { color: "#f94144", fontWeight: "bold" }
              : { color: "#90be6d", fontWeight: "bold" }
          }
        >
          {item.availability}
        </span>{" "}
      </a>{" "}
    </div>
  ));




  data.forEach((item) => {
    if(item.availability === 'DOSTĘPNY'){
    document.title = `Dostępny w ${item.shop}!`
    }
  });



  

  return <>{list}</>;
};

export default List;
