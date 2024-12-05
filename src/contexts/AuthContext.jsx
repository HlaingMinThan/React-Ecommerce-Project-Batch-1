import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

// AuthContext
const AuthContext = createContext();

let AuthReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                ...state,
                user: null,
                loading: true,
            }
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case "UNAUTHENTICATED":
            localStorage.removeItem("token");
            return {
                ...state,
                user: null,
                loading: false
            }
        default:
            break;
    }
}

//AuthContextProvider componet
function AuthContextProvider({ children }) {
    // let [user, setUser] = useState(null);
    // let [loading, setLoading] = useState(false);

    let [state, dispatch] = useReducer(AuthReducer, {
        user: null,
        loading: false,
    })

    let getUser = async (token) => {
        try {
            dispatch({ type: 'FETCH_USER' });
            let res = await axios.get('/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTimeout(() => {
                if (res.data[0]?.errors?.message === 'Unauthenticated.') {
                    dispatch({ type: 'UNAUTHENTICATED' });
                } else {
                    dispatch({ type: 'LOGIN_USER', payload: res.data });
                }
            }, 3000);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            getUser(token)
        }
    }, [])
    return (
        <AuthContext.Provider value={{ getUser, dispatch, ...state }}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }