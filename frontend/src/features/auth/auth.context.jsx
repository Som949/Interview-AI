import { createContext, useState ,useEffect} from "react";
import { getMe } from "./services/auth.api";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  
  useEffect(() => {
  const getUser = async () => {
    try {
      const data = await getMe();
      setUser(data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  getUser();
}, []);


  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };