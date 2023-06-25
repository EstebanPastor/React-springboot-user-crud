import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EditUser from "./user/EditUser";
import Home from "./pages/Home";
import AddUser from "./user/AddUser";
import ViewUser from "./user/ViewUser";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
