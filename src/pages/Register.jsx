import axios from "axios";
import { useContext, useState } from "react";
import InputError from '../components/InputError';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Register() {
    let { getUser } = useContext(AuthContext);
    let [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });
    let navigate = useNavigate();

    let [errors, setErrors] = useState(null);
    const register = async (e) => {
        try {
            e.preventDefault();//prevent page refresh
            let res = await axios.post('/api/users', form);
            if (res.status === 201) {
                let token = res.data.token;
                localStorage.setItem("token", token);//does react know ?
                getUser(token)
                navigate('/');
            }
        } catch (e) {
            setErrors(e.response.data.errors); //errors.email
        }
    }

    return (
        <div className="my-10 flex items-center">
            <div
                className="border-[1px] border-black/20 rounded-lg w-[40%] mx-auto py-[40px] px-[40px]"
            >
                <div className="flex items-end gap-2 mb-8">
                    <h1 className="text-[50px] leading-[0.8] text-primary font-bold">
                        Register
                    </h1>
                    <div className="w-[10px] h-[10px] bg-primary rounded-full"></div>
                </div>
                <form className="flex flex-col gap-5" onSubmit={register}>
                    <div className="flex flex-col">
                        <label className="font-semibold text-sm">Name</label>
                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="outline-none px-4 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                            type="text"
                            placeholder="Enter your name"
                        />
                        <InputError errorMessage={errors?.name} />
                    </div>
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
                        <label className="font-semibold text-sm">Phone</label>
                        <input
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="outline-none px-4 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                            type="text"
                            placeholder="Enter your phone"
                        />
                        <InputError errorMessage={errors?.phone} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-sm">Address</label>
                        <input
                            value={form.address}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            className="outline-none px-4 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                            type="text"
                            placeholder="Enter your address"
                        />
                        <InputError errorMessage={errors?.address} />
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
                        Register
                    </button>
                    <p className="text-sm text-center font-semibold">
                        Already have an account? Login
                        <a className="text-primary underline" href="/login.html">here.</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register