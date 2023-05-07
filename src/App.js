import { useDispatch } from 'react-redux';
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { getToken } from './store/app/appSelectors';
import { appActions, resetStore } from './store/app/appSlice';

function App() {
  const isLogined = useSelector(getToken);
	const dispatch = useDispatch();

  const logOut = () => {
    dispatch(resetStore);
  } 

  return (
    <div className="App">
      {isLogined ? (
        <Dashboard userName ='Ivan'>
          <div>HTML From APP</div>
          <button onClick={logOut}>LOG OUT</button>
        </Dashboard>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
