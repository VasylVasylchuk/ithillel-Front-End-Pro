import { useState, createContext, useContext, useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Component5 from "./Context";
import { TimePicker } from 'antd';
export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("FUCK Moscow");
  setTimeout(() => setUser('New App'), 1500);

  return (
    <UserContext.Provider value={ { user, setUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user='smit'/>
    </UserContext.Provider>
  );
}

function Component2({user}) {
  const logDate = useCallback((...arr) => {
    console.log(arr);
  }, []);

  return (
    <>
      <h1>Component 2 {user}</h1>
      <TimePicker.RangePicker 
      onSelect={logDate}
      onChange={logDate}/>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}
