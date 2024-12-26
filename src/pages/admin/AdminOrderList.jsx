import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function AdminOrderList() {
    const MySwal = withReactContent(Swal);
    let [orders, setOrders] = useState([]);

    let getOrders = async () => {
        let res = await axios.get('/api/orders', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(res.data.orders)
        setOrders(res.data.orders)
    }

    let updateOrderStatus = async (e, id) => {
        let updatedStatus = e.target.value;
        console.log(updatedStatus);
        let res = await axios.put(`/api/orders/${id}`, {
            status: updatedStatus
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (res.status === 200) {
            if (res.data.message === "Your order is already confirmed") {
                await MySwal.fire({
                    title: 'Your order is already confirmed',
                    text: "You can't change the status of this order",
                })
            } else {
                getOrders()
            }
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gray-50">
            <div
                className="relative border border-gray-300 bg-white rounded-md shadow-sm shadow-gray-200 px-5 py-3"
            >
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-md overflow-hidden border"
                >
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-sm text-left">
                            <thead className="text-white bg-primary">
                                <tr>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> ID </span>
                                    </th>

                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Name </span>
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Email </span>
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> phone </span>
                                    </th>

                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Address </span>
                                    </th>

                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> total_amount </span>
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> status </span>
                                    </th>
                                    <th colSpan={2} className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Action </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(o => (
                                    <tr className="border-b" key={o.id}>
                                        <td className="px-6 py-4">
                                            <span className="text-darkGray p-1.5 font-semibold block">
                                                {o.id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-darkGray p-1.5 font-semibold block">
                                                {o.user.name}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 min-w-[150px]">
                                            <span className="text-darkGray p-1.5 font-semibold block">
                                                {o.user.email}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 min-w-[150px]">
                                            <span className="text-darkGray p-1.5 font-semibold block">
                                                {o.user.phone}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 min-w-[150px]">
                                            <span className="text-darkGray p-1.5 font-semibold block">
                                                {o.address}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 min-w-[150px]">
                                            <span className="text-darkGray p-1.5 font-semibold block">
                                                {o.total_amount}
                                            </span>
                                        </td>
                                        <td className={o.status === 'confirmed' ? 'text-green-500' : 'text-yellow-500'}>
                                            <select name="" id="" value={o.status} onChange={(e) => updateOrderStatus(e, o.id)}>
                                                {['pending', 'confirmed'].map((status) => (
                                                    <option value={status} key={status} selected={status === o.status}>{status}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div
                                                className="space-x-3 flex items-center min-w-[200px] w-auto max-w-[500px]"
                                            >
                                                <a
                                                    href=""
                                                    className="text-sm px-4 flex items-center gap-3 shadow-md py-3 text-white bg-primary hover:bg-blue-900 font-semibold rounded-md transition-all active:animate-press"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                                                        />
                                                    </svg>
                                                    Edit
                                                </a>
                                                <a
                                                    href=""
                                                    className="text-sm px-4 flex items-center gap-3 shadow-md py-3 text-white bg-red-500 hover:bg-blue-900 font-semibold rounded-md transition-all active:animate-press"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z"
                                                        />
                                                    </svg>
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrderList