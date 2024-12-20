import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

let GuestUserRoute = ({ children }) => {
    let { user } = useContext(AuthContext);
    if (user) {
        return <Navigate to={'/'} />
    } else {
        return (
            <div>{children}</div>
        )
    }
}

export default GuestUserRoute;