import React from "react";
import Home from "../Home/Home";

const List = ({ habits }) => {
  return (
    <div className="Lists">
      {habits.map((habit) => (
        <Home habit={habit} key={habit.id} />
      ))}
    </div>
  );
};

export default List;
