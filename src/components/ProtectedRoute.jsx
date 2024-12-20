import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

let ProtectedRoute = ({ children }) => {
    let { user } = useContext(AuthContext);
    if (user) {
        return (
            <div>{children}</div>
        )
    } else {
        return <Navigate to={'/login'} />
    }
}

export default ProtectedRoute;