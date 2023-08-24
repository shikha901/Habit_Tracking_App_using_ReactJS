import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  return (
    <div className="Navbar mb-4">
      <nav
        className="navbar navbar-light justify-content-between"
        style={{ backgroundColor: "#f7ccf3" }}
      >
        <Link to="/" className="navbar-brand m-2 ms-5">
          <h1 className="font-monospace"> Habit Tracker</h1>
        </Link>
        <form action="" className="form-inline">
          <Link
            to="/add"
            className="btn btn-info  me-5 my-sm-0 m-2 "
            type="submit"
          >
            Add Habits
          </Link>
        </form>
      </nav>
      <h2 className="text-center mt-4 fs-1 fw-bold">
        good &nbsp;
        {hour <= 12
          ? "Morning"
          : hour <= 17
          ? "Afternoon"
          : hour <= 21
          ? "Evening"
          : "Night"}
      </h2>
    </div>
  );
};

export default Navbar;
