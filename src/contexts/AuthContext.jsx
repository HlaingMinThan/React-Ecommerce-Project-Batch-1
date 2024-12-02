import axios from "axios";
import { createContext, useEffect, useState } from "react";

// AuthContext
const AuthContext = createContext();

//AuthContextProvider componet
function AuthContextProvider({ children }) {
    let [user, setUser] = useState(null);

    let getUser = async (token) => {
        let res = await axios.get('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (res.data[0]?.errors?.message === 'Unauthenticated.') {
            setUser(null);
            localStorage.removeItem('token');
        } else {
            setUser(res.data)
        }
    }
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            getUser(token)
        }
    }, [])
    return (
        <AuthContext.Provider value={{ user, getUser , setUser }}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }