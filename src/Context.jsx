import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import {UserContext} from './app_context_antd';

export default function Component5() {
  const context = useContext(UserContext);
  // setTimeout(() => context.setUser('New Name from s'), 1500);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${context.user} again!`}</h2>
    </>
  );
}