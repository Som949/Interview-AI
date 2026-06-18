import "../auth.form.scss";
import { Link,useNavigate } from "react-router";
import useAuth from "../hooks/useAuth.js";
import { useState} from "react";

const Login = () => {
  const {loading,error,handleLogin,setError} = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleLogin(formData);
    if (success) {
      navigate("/");
    }
  }

  const handleChange = (e) => {
    setError(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <button
            className="button primary-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </main>
  );
};
export default Login;
