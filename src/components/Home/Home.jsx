import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../redux/reducer/HabitReducer";
import { toast } from "react-toastify";

const Home = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let count = 0;

  // Done days add in this
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      count++;
    }
  }

  // using navigate to open new page
  const navigate = useNavigate();

  const dispatch = useDispatch();


  //Delete function for deleting habits
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    toast.error("Habit deleted successfully", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // set id to navigate to the week-view page
  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  };

  return (

    // container for seeing you week status
    <div className="container mb-3 w-75">
      <div className="card">
        <div className="habits">
          <div className="left">
            <div>
              <h4>{habit.name}</h4>
              <p className="day-complete">
                {count}/{todayDay + 1}days
              </p>
            </div>
          </div>
          <div className="right">
            <div className="log-btn btn btn-light" onClick={setId}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4992/4992462.png"
                alt="calender"
              />
              Week View
            </div>
            <img
              className="delete"
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
              alt="delete"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
