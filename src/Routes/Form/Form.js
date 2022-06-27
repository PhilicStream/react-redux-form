import BackArrow from "../../global/Components/backarrow";
import FormField from "./Components/FormField";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import userSlice from "../../features/UserDetails/UserDetailSlice";
const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  var [user, setUser] = useState({ name: "", class: "", phone: "" });
  const detailUpdate = useSelector((state) => state.user);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(userSlice.actions.savedUser(user));
    navigate("/result");
  };

  const handleChangeValue = (text) => {
    setUser({ ...user, name: text });
  };
  const handleChangeValue1 = (text) => {
    setUser({ ...user, class: text });
  };
  const handleChangeValue2 = (text) => {
    setUser({ ...user, phone: text });
  };
  if (user.name === "") {
    user = detailUpdate;
  }
  return (
    <div
      className="form"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Enter Details
      <Link
        to="/"
        onClick={() => {
          console.log(detailUpdate.name + user.name);
        }}
      >
        <BackArrow />
      </Link>
      <form onSubmit={handleSubmitForm}>
        <FormField
          label="Name"
          type="text"
          inputClassName="form-control"
          id="name"
          value={user.name}
          onChange={(e) => {
            console.log(detailUpdate.name);
            handleChangeValue(e.target.value);
          }}
        />
        <FormField
          label="Class"
          type="text"
          inputClassName="form-control"
          id="class"
          value={user.class}
          onChange={(e) => {
            handleChangeValue1(e.target.value);
          }}
        />
        <FormField
          label="Phone Number"
          type=""
          inputClassName="form-control"
          id="number"
          value={user.phone}
          onChange={(e) => {
            handleChangeValue2(e.target.value);
          }}
        />

        <button
          disabled={user.name === "" || user.class === "" || user.phone === ""}
          type="submit"
          className="btn btn-primary"

          // onClick={() => {
          //   console.log(user);
          // }}
        >
          Submit and View
        </button>
      </form>
    </div>
  );
};

export default Form;
