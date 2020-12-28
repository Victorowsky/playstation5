import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import List from "./comp/List";
import CircularProgress from "@material-ui/core/CircularProgress";
import Admin from "./comp/Admin";
import Dialog from "./comp/Dialog";

function App() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(1);
  const [isValidate, setIsValidate] = useState("");

  const URL = "https://shielded-inlet-52440.herokuapp.com";
  useEffect(() => {
    fetch(`${URL}/dostepnosc`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [refresh]);

  useEffect(() => {
    if (localStorage.getItem("adminCode")) {
      setIsValidate(localStorage.getItem("adminCode"));
    }

    setInterval(() => {
      setRefresh((prev) => prev + 1);
    }, 25000);
  }, []);

  return (
    <>
      {data ? (
        <Router>
          <Switch>
            <Route path="/" exact>
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
                </div>
                <Dialog />
                {data[data.length - 1] && (
                  <div className="update">
                    Ostatnia aktualizacja: {data[data.length - 1].lastUpdate}
                  </div>
                )}
              </div>
            </Route>
            <Route path="/admin">
              <Admin setIsValidate={setIsValidate} />
            </Route>
          </Switch>
        </Router>
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
