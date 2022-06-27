import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const nav = useNavigate();
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <Link to={"/form"}> */}
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            nav("/form");
          }}
        >
          Welcome, click here to proceed
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default HomePage;
