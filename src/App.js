import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login/Login";
import { LOCAL_STORAGE_NAMES } from './constants';
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [isLogined, setLoginedStatus] = useState(null);

  useEffect(() => {
    try {
      const isLoginedStatus = localStorage.getItem(LOCAL_STORAGE_NAMES.isLogined);
      setLoginedStatus(JSON.parse(isLoginedStatus));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleLoginStatus = () => {
    setLoginedStatus(true);
    try {
      localStorage.setItem(LOCAL_STORAGE_NAMES.isLogined, true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      {isLogined ? (
        <Dashboard userName ='Ivan'>
          <div>HTML From APP</div>
        </Dashboard>
      ) : (
        <Login onLoginSuccssesfull={handleLoginStatus} />
      )}
    </div>
  );
}

export default App;
