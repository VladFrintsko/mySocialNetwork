import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import { removePost, addLike, addPost, addMessage } from "./redux/state";

export let rerenderTree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} removePost={removePost} addLike={addLike} addPost={addPost} addMessage={addMessage} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
rerenderTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
