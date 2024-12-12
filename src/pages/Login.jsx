import { useContext, useState } from 'react';
import InputError from '../components/InputError';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
    let [form, setForm] = useState({
        email: '',
        password: ''
    })
    let [errors, setErrors] = useState(null);
    let { getUser } = useContext(AuthContext);
    let navigate = useNavigate();

    //Delcartive thinking pattern
    let login = async (e) => {
        try {
            e.preventDefault();
            let res = await axios.post("/api/login", form);
            //password incorrect error handling
            if (res.data.message !== 'login success') {
                setErrors({
                    email: res.data.message
                })
                return;
            }

            //login user
            let token = res.data.token;
            localStorage.setItem("token", token);
            getUser(token);
            navigate('/');
        } catch (e) {
            console.log(e);
            setErrors(e.response.data.errors);
        }
    }
    return (
        <div className="my-10 flex items-center">
            <div
                className="border-[1px] border-black/20 rounded-lg w-[40%] mx-auto py-[40px] px-[40px]"
            >
                <div className="flex items-end gap-2 mb-8">
                    <h1 className="text-[50px] leading-[0.8] text-primary font-bold">
                        Login
                    </h1>
                    <div className="w-[10px] h-[10px] bg-primary rounded-full"></div>
                </div>
                <form className="flex flex-col gap-5" onSubmit={login}>
                    <div className="flex flex-col">
                        <label className="font-semibold text-sm">Email</label>
                        <input
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="outline-none px-4 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                            type="text"
                            placeholder="Enter your Email"
                        />
                        <InputError errorMessage={errors?.email} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-sm">Password</label>
                        <input
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="outline-none px-4 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <InputError errorMessage={errors?.password} />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 text-white font-bold text-xl rounded-full bg-primary block"
                    >
                        Login
                    </button>
                    <p className="text-sm text-center font-semibold">
                        new user ?
                        <Link className="text-primary underline" to="/register">Register here.</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login