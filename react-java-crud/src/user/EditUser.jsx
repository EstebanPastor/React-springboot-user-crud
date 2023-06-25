import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import NavBar from "../layout/NavBar";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      await axios.put(`http://localhost:8080/user/${id}`, user);
      navigate("/");
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
    }
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <NavBar title={"Home"} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit user here</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name..."
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username..."
                  name="username"
                  value={username}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email..."
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link
                to={"/"}
                type="button"
                className="btn btn-outline-danger mx-4"
              >
                Go back home
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
