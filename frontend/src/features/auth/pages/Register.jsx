import "../auth.form.scss";
import { Link,useNavigate } from "react-router";
import useAuth from "../hooks/useAuth.js";
import { useState} from "react";

const Register = () => {
  const {handleRegister,loading,error,setError} = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

    

  const handleChange = (e) => {
    setError(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    const success = await handleRegister(formData);
    if (success) {
      navigate("/");
    }
  }
    

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" onChange={handleChange} required />
            </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
          </div>
          <button
            className="button primary-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Register"}
          </button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </main>
  );
};
export default Register;
