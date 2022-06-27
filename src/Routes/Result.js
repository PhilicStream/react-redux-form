import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import userSlice from "../features/UserDetails/UserDetailSlice";
const Result = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const DeleteInfo = () => {
    dispatch(userSlice.actions.deleteuser());
  };

  return (
    <div>
      {/* <Link to="/form">
        <BackArrow />
      </Link> */}
      <h1>View Result</h1>
      {user.name && (
        <div>
          {" "}
          <div>Name: {user.name}</div>
          <div>Class: {user.class}</div>
          <div>Phone number: {user.phone}</div>
        </div>
      )}
      {!user.name && (
        <div>
          <h2>Data deleted</h2>
        </div>
      )}
      <br />
      {user.name !== "" && (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            dispatch(userSlice.actions.savedUser(user));
            navigate("/form");
          }}
        >
          Update info
        </button>
      )}
      {user.name === "" && (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            navigate("/form");
          }}
        >
          Go Back
        </button>
      )}
      <hr />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          DeleteInfo();
          //   navigate("/");
        }}
      >
        Delete info
      </button>
    </div>
  );
};

export default Result;
