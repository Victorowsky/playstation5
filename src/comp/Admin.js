import { useState } from "react";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const Admin = ({ setIsValidate }) => {
  const URL = "http://localhost:3001";
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${URL}/login/${login}/${password}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setIsValidate(res.key);
          Cookies.set("adminCode", res.key);
          setIsLoginSuccessful(true);
        } else {
          setPassword("");
        }
      });
  };
  return (
    <div className="login">
      <Login
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      {isLoginSuccessful && <Redirect to="/" />}
    </div>
  );
};

export default Admin;
