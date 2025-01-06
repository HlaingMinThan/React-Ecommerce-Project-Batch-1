import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CartContext } from "../contexts/CartContext";

function Checkout() {
    const MySwal = withReactContent(Swal);
    let [products, setProducts] = useState([]);
    let [shipping_address, setShippingAddress] = useState('');
    let [notes, setNotes] = useState('');
    let { setCartCount } = useContext(CartContext);
    let navigate = useNavigate()

    let total = useMemo(() => products.reduce((acc, product) => {
        console.log('calculation');
        return acc + product.price * product.quantity;
    }, 0), [products]); //computed property

    let orderCreate = async (e) => {
        try {
            e.preventDefault();
            console.log(products);
            if (!products.length) {
                await MySwal.fire({
                    title: 'Please select an item to order',
                    text: "you have no item in your cart.",
                })
                navigate('/');
                return;
            }
            let order_products = products.map(p => {
                return {
                    product_id: p.id,
                    quantity: p.quantity
                };
            })
            let payload = {
                shipping_address,
                notes,
                total_amount: total,
                order_products,
            };
            let res = await axios.post('/api/orders', payload, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (res.status === 200) {
                localStorage.setItem('cart', []);
                setCartCount(0);
                await MySwal.fire({
                    title: 'Order created successfully',
                    text: "your order is reported to the admin and we will contact you soon.",
                })
                navigate('/')
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        let carts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        console.log(carts);
        setProducts(carts);
    }, [])



    return (
        <div
            className="flex lg:flex-row flex-col gap-5 xl:px-32 sm:px-5 px-2 mt-10 mb-10"
        >
            <div className="basis-[60%]">
                <h1 className="font-bold text-2xl">Billing Details
                </h1>
                <div className="mt-6 border-[1px] border-black/10 px-6 pt-8 pb-8">
                    <form className="md:grid md:grid-cols-2 flex flex-col gap-4" onSubmit={orderCreate}>
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <label className="font-semibold text-sm">Shipping Address</label>
                            <input
                                required
                                value={shipping_address}
                                onChange={e => setShippingAddress(e.target.value)}
                                className="md:col-span-2 outline-none px-3 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                                placeholder="Enter your shipping address"
                            />
                        </div>
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <label className="font-semibold text-sm">Paid ScreenShot</label>
                            <input type="file" />
                        </div>
                        <div className="flex md:col-span-2 flex-col">
                            <label className="font-semibold text-sm">Order Notes(optional)</label>
                            <textarea
                                value={notes}
                                onChange={e => setNotes(e.target.value)}
                                rows="5"
                                className="outline-none focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-full col-span-2 text-white bg-primary rounded-full py-4 font-bold mt-3"
                        >
                            Confirm order
                        </button>
                    </form>
                </div>
            </div>
            <div className="basis-[40%]">
                <h1 className="font-bold text-2xl">Your Order</h1>
                <div className="mt-6 border-[1px] border-black/10 px-6 pt-8 pb-8">
                    <p className="font-semibold">Product</p>
                    <div
                        className="mt-3 pb-7 flex flex-col text-sm gap-3 border-b-[1px] border-b-black/10"
                    >
                        {products.map(product => (
                            <Link to={`/products/${product.id}`} className="flex items-center gap-8" key={product.id}>
                                <div className="flex font-bold items-center justify-between grow">
                                    <p>{product.name}</p>
                                </div>
                                <div className="font-bold flex gap-2 shrink-0">
                                    <p className="text-black/50">x {product.quantity}</p>
                                    <p className="">{product.price * product.quantity} MMK</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-6 pb-8 border-b-[1px] border-b-black/10">
                        <p className="font-semibold">Shipping</p>
                        <div
                            className="mt-3 text-sm font-bold flex items-center justify-between"
                        >
                            <p>Delivery Fees:</p>
                            <p>0 Ks</p>
                        </div>
                    </div>
                    <div
                        className="mt-8 pb-8 flex border-b-[1px] border-b-black/10 items-center justify-between"
                    >
                        <p className="font-semibold">Total</p>
                        <p className="font-extrabold">{total} Ks</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-semibold mb-3">Bank Transfer</p>
                        <div className="grid grid-cols-5 gap-2">
                            <div className="border rounded-md overflow-hidden border-black/30">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://tbqmall.co/wp-content/uploads/2023/09/tbqhs-uabpay-checkout.png"
                                />
                            </div>
                            <div className="border rounded-md overflow-hidden border-black/30">
                                <img
                                    className="w-full h-full object-cover"
                                    src="http://localhost:8000/storage/screenshot/YtolYlJ6uWPHWK30PbgbzktpvCYgnM7Y1hdMANXI.png"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-sm font-bold text-black/50">
                            Make your payment directly into our bank account. Please use your
                            Order ID as the payment reference. Your order will not be shipped
                            until the funds have cleared in our account.
                        </p>
                        <div className="mt-5 flex-col gap-3">
                            <div>
                                <p className="font-semibold text-lg">Acc No.</p>
                                <p className="font-semibold text-black">09876322323</p>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Username.</p>
                                <p className="font-semibold text-black">Unknown</p>
                            </div>
                            <div>
                                <h1 className="font-semibold text-lg">QR Code.</h1>
                                <img
                                    className="w-[300px] mx-auto h-auto"
                                    src="https://www.narrativeindustries.com/wp-content/uploads/2020/05/PayPal-QR-Code-Scan-Me-2-862x523.png"
                                />
                            </div>
                            <div v-if="payment?.description">
                                <h1 className="font-semibold text-lg">Description</h1>
                                <p className="font-semibold text-black">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Consectetur odio error, placeat cum quo perspiciatis?
                                    Laudantium numquam necessitatibus quam dignissimos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer gap-2">
                        <input
                            id="termandcondition"
                            type="checkbox"
                            className="outline-none focus:ring-0 border-2 border-black/10"
                            name=""
                        />
                        <label
                            htmlFor="termandcondition"
                            className="text-sm font-bold text-black/50 my-4"
                        >I have read and agree to the website
                            <span className="underline text-black"
                            >terms and conditions</span
                            ></label
                        >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout