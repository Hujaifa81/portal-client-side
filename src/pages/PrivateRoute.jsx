import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/sign-in' state={location.pathname}></Navigate>
    }
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default PrivateRoute;