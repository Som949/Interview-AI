import api from "./axios.api";

const login = async ({ email, password }) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  } catch (error) {
    console.log(error.response?.data); // debug
    throw error;
  }
};

const register = async ({ name, email, password }) => {
  try {
    const res = await api.post("/auth/register", { name, email, password });
    return res.data;
  } catch (error) {
    console.log(error.response?.data); // debug
    throw error;
  }
};

const logout = async () => {
  try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (error) {
    console.log(error.response?.data); // debug
    throw error;
  }
};

const getMe = async () => {
  try {
    const res = await api.get("/auth/get-me");
    return res.data;
  } catch (error) {
    console.log(error.response?.data); // debug
    throw error;
  }
}

export { login, register, logout , getMe };
