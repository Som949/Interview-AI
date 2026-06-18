import {Navigate} from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth.js";

const ProtectedRoute = ({children}) => {
    const {user,loading} = useAuth();
    if (loading) return <p style={{ padding: "2rem", color: "#17212b" }}>Loading...</p>;
    return user? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
