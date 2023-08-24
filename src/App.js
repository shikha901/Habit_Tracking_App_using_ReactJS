import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AddHabit from "./components/AddHabit/AddHabit";
import Weekview from "./components/Weekview/Weekview";
import { useSelector } from "react-redux";
import List from "./components/List/List";
import { ToastContainer } from "react-toastify";


function App() {
  let habits=useSelector((state)=>state['habits'])
  return (
    <div className="App">
      <Router>
        {/* ToastContainer settings */}
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
        <Navbar />
        <Routes>
          <Route path="/" element={<List habits={habits} />} />
          <Route path="/add" element={<AddHabit />} />
          <Route path="/week-view" element={<Weekview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
