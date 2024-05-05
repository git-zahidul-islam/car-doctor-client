import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";



const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>;
    }

    if(user) {
        return children;
    }
    return(
        <Navigate to={'/login'} state={location.pathname} replace></Navigate>
    )
};

export default PrivateRouter;