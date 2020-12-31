import React, { useState } from "react";
import SoundEffect from "./SoundEffect";
import UnAvailable from "./UnAvailable";
import Available from "./Available";


const List = ({ data, isMuted }) => {
  const [isPlaying, setIsPlaying] = useState(false);



  const list = data.map((item, index) => (
    <div className="shop" key={index}>
      {item.shop} :
      <div className="availability" style={{ display: "flex", padding: "0" }}>
        <a
          title="Standard"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.availability === "DOSTĘPNY" ? (
            <Available />
          ) : (
            <UnAvailable value={item.availability} />
          )}
        </a>
        {item.availabilityDE && (
          <a
            title="Digital Edition"
            href={item.linkDE}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.availabilityDE === "DOSTĘPNY" ? (
              <Available />
            ) : (
              <UnAvailable value={item.availabilityDE} />
            )}
          </a>
        )}
      </div>
    </div>
  ));

  data.forEach((item) => {
    if (item.availability === "DOSTĘPNY") {
      document.title = `Dostępny w ${item.shop}!`;
    } else {
      document.title = "Playstation 5";
    }
  });

  // eslint-disable-next-line array-callback-return
  const doesAvailable = data.filter((item) => {
    if (
      item.availability === "DOSTĘPNY" ||
      item.availabilityDE === "DOSTĘPNY"
    ) {
      return item;
    }
  });

  // PLAY SOUND IF AT LEAST 1 AVAILABLE
  if (doesAvailable.length > 0) {
    if (!isPlaying) setIsPlaying(true);
  } else {
    if (isPlaying) setIsPlaying(false);
  }
  /////////////////////////////////////

  return (
    <>
      {list} <SoundEffect isPlaying={isPlaying} isMuted={isMuted} />
    </>
  );
};

export default List;
