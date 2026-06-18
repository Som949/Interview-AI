import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, logout, register, getMe } from "../services/auth.api.js";

const useAuth = () => {
  const { user, setUser, loading, setLoading, error, setError } =
    useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await login({ email, password });
      setUser(data.user);
      return true;
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ name,email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register({ name, email, password });
      setUser(data.user);
      return true;
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await logout();

      setUser(null);
      return true;
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleGetMe = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMe();

      setUser(data.user);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  

  return {
    user,
    loading,
    error,
    setError,
    handleLogin,
    handleRegister,
    handleLogout,
    handleGetMe,
  };
};

export default useAuth;
