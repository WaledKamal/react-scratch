import React, { useEffect } from "react";
import "./sass/App.sass";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "./store/slices/userSlice";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUserName(data.username));
      });
  };

  const changeUserName = (e) => {
    const value = e.target.value;
    dispatch(setUserName(value));
  };

  useEffect(() => fetchUserData(), []);

  return (
    <>
      <h1>Hi {user.username} ! - Welcome from React 💫⚠ !!</h1>
      <input type={"text"} onChange={changeUserName}></input>
    </>
  );
};

export default App;
