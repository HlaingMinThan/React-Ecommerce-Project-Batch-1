import { Link, Outlet } from "react-router-dom"
import Logo from '../assets/cc.jpg';

function AdminLayout() {
    return (
        <>
            <div className="flex h-screen overflow-hidden font-roboto">
                <aside
                    className="absolute left-0 top-0 z-[9999] flex h-screen w-[270px] flex-col overflow-y-hidden text-white bg-secondary duration-300 ease-linear lg:static transition-all lg:translate-x-0"
                >
                    <div className="flex items-center justify-between gap-2 py-5.5 lg:py-6.5">
                        <Link to="/" className="block w-full">
                            <div
                                className="py-[1rem] border-b border-b-gray-300 px-6 w-full flex items-center space-x-3"
                            >
                                <img src={Logo} alt="logo" className="w-[80px]" />
                                <h3 className="font-bold text-md text-center">P & P Market</h3>
                            </div>
                        </Link>
                    </div>

                    <div
                        className="flex flex-col overflow-y-auto scroll duration-300 ease-linear"
                    >
                        <div className="py-4 px-3">
                            <div className="my-3.5 mx-4">
                                <h1 className="font-bold text-xs uppercase text-gray-200">
                                    Dashboard Administration
                                </h1>
                            </div>
                            <nav className="">
                                <div className="flex flex-col h-auto overflow-y-auto scroll pb-12">
                                    <div>
                                        <div
                                            className="w-full rounded-[4px] transition-all duration-150 mb-3 hover:bg-primary"
                                        >
                                            <Link
                                                to="/admin"
                                                className="relative flex items-center gap-2.5 rounded-sm py-3 px-4 font-semibold text-sm duration-300 ease-in-out"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                                                    />
                                                </svg>

                                                Product
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div
                        className="w-full px-3 font-roboto transition-all duration-150 absolute left-0 bottom-2 bg-secondary"
                    >
                        <a
                            className="font-bold text-md rounded-[4px] flex h-[48px] items-center cursor-pointer mb-1 pl-3 bg-[#BE1700]"
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                className="mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.75 3.66757H4.58331V16.5009C4.58331 16.9871 4.77647 17.4535 5.12028 17.7973C5.4641 18.1411 5.93042 18.3342 6.41665 18.3342H13.75M14.6666 13.7509L17.4166 11.0009M17.4166 11.0009L14.6666 8.25091M17.4166 11.0009H8.24998"
                                    stroke="#FDFDFD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Logout
                        </a>
                    </div>
                </aside>
                <div
                    className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
                >
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminLayout