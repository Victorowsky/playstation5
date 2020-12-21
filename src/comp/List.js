import React from "react";
// import SoundEffect from "./SoundEffect";



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
      {item.availabilityDE && 

      <a href={item.linkDE} target="_blank" rel="noopener noreferrer">
        <span style={
            item.availabilityDE !== "DOSTĘPNY"
              ? { color: "#f94144", fontWeight: "bold" }
              : { color: "#90be6d", fontWeight: "bold" }
          }> <span style={{color:"white"}}>|</span>  {item.availabilityDE}</span>

      </a>}
    </div>
  ));

  data.forEach((item) => {
    if(item.availability === 'DOSTĘPNY'){
    document.title = `Dostępny w ${item.shop}!`;

    }else{
      document.title = "Playstation 5"

    }
  });

  return <>{list}</>;
};

export default List;

