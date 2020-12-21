import { useEffect, useState } from "react";
import "./App.css";
import List from "./comp/List";
import CircularProgress from "@material-ui/core/CircularProgress";
// import RefreshTimer from "./comp/RefreshTimer";
import Dialog from "./comp/Dialog";
import moment from "moment";

function App() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(1);
  const [lastUpdate, setLastUpdate] = useState();
  const URL = "https://shielded-inlet-52440.herokuapp.com";
  useEffect(() => {
    fetch(`${URL}/dostepnosc`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
    setLastUpdate(
      moment()
        .utc(+1)
        .format("HH:mm:ss")
    );
  }, [refresh]);

  useEffect(() => {
    setInterval(() => {
      setRefresh((prev) => prev + 1);
    }, 20000);
  }, []);

  return (
    <>
      {data ? (
        
        <div className="app">
          
          <div className="playstation5">
            <div className="image">
              <img
                src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$"
                alt="Playstation 5"
              />
            </div>
            <div className="shops">
              <List data={data} />

            </div>
            {/* <RefreshTimer value={value} setRefresh={setRefresh} /> REFRESH HERE */}
          </div>
          <Dialog />
          <div className="update">Ostatnia aktualizacja: {lastUpdate}</div>

        </div>
        
      ) : (
        <div
          className="progress"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default App;
