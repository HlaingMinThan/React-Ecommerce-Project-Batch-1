import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { CartContext } from "../contexts/CartContext";

export default function ProductDetail() {

    let { id } = useParams();
    let { product } = useProduct(id);
    let navigate = useNavigate();
    let { setCartCount } = useContext(CartContext);

    let [quantity, setQuantity] = useState(1)
    let [selectedIndex, setSelectedIndex] = useState(0);

    const addToCart = () => {
        const item = {
            ...product,
            quantity: Number(quantity)
        };

        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

        const productIndex = cart.findIndex(cartItem => cartItem.id == id);

        if (productIndex > -1) {
            // Product already exists, update quantity
            cart[productIndex].quantity += item.quantity;
        } else {
            // Add new product to cart
            cart.push(item);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        setCartCount(cart.length);
        navigate('/checkout')
    }

    return (
        <>
            {product && (
                <div className="xl:px-32 sm:px-5 px-2">
                    <div className="mt-10 flex md:flex-row flex-col xl:gap-10 gap-5">
                        <div className="lg:basis-[65%] md:basis-[60%] overflow-hidden">
                            <div className="flex lg:flex-row flex-col-reverse gap-5">
                                <div className="basis-[10%] flex lg:flex-col flex-row gap-4">

                                    {product.images.map((image, index) => {
                                        return (
                                            <div
                                                onClick={() => setSelectedIndex(index)}
                                                key={image.id}
                                                className="w-full h-auto rounded-lg overflow-hidden group cursor-pointer"
                                            >
                                                <img
                                                    className="w-full h-full group-hover:scale-[1.1] transition-all"
                                                    src={'http://localhost:8000/storage/' + image.url}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="basis-[90%]">
                                    <div
                                        className="w-full h-auto cursor-pointer group rounded-xl overflow-hidden"
                                    >
                                        <img
                                            className="w-full h-full group-hover:scale-[1.1] transition-all duration-200"
                                            src={'http://localhost:8000/storage/' + product.images?.[selectedIndex]?.url}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-black/10 my-16"></div>
                            <div
                                className="border-[1px] md:hidden block border-black/10 rounded-xl py-6 px-6"
                            >
                                <div
                                    className="inline-block px-3 py-1 bg-primary rounded-full text-white font-semibold text-sm"
                                >
                                    {product.category.name}
                                </div>
                                <h1 className="text-2xl mt-3 font-medium">{product.name}</h1>
                                <a
                                    href="#description"
                                    className="mt-2 text-[16px] mb-5 line-clamp-3 text-black/70 font-medium"
                                >{product.description}</a
                                >
                                <div className="flex items-end mt-1 gap-2">
                                    <p className="font-bold text-2xl">{product.price} MMK</p>
                                </div>
                                <div className="my-8 h-[1px] w-full bg-black/20"></div>
                                <p className="font-semibold text-lg">Product information</p>
                                <div className="flex flex-col gap-2 mt-3">
                                    <div className="flex items-center">
                                        <p className="basis-[35%] font-semibold">Category:</p>
                                        <p className="basis-[65%] text-black/70">{product.category.name}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="basis-[35%] font-semibold">Stock:</p>
                                        <p className="basis-[65%] text-black/70">1000</p>
                                    </div>
                                </div>
                                <div className="my-8 h-[1px] w-full bg-black/20"></div>
                                <div
                                    className="flex lg:items-center lg:flex-row flex-col gap-3 mt-4 mb-2"
                                >
                                    <div className="lg:basis-[40%]">
                                        <p className="font-bold mb-2">Quantity</p>
                                        <input
                                            className="w-full border-black/10 border-2 rounded-full py-3 pl-5"
                                            type="number"
                                            value="1"
                                        />
                                    </div>
                                </div>
                                <button
                                    className="w-full h-full disabled:opacity-45 disabled:cursor-not-allowed text-white bg-primary rounded-full py-4 font-bold mt-3"
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <div className="md:mt-0 mt-10">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-semibold">Latest Products</h1>
                                    <a href="/home.html" className="text-sm text-primary underline"
                                    >View all</a
                                    >
                                </div>
                                <div className="grid lg:grid-cols-3 mb-10 mt-7 gap-3">
                                    <a className="h-min block" href="/productDetail.html">
                                        <div
                                            className="rounded-lg h-full flex lg:flex-col flex-row cursor-pointer hover:translate-y-[-10px] transition-all duration-200 group shadow-md hover:shadow-lg overflow-hidden"
                                        >
                                            <div className="w-full lg:w-full basis-[40%] overflow-hidden">
                                                <img
                                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                                    className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200"
                                                />
                                            </div>
                                            <div className="py-4 lg:-w-full basis-[60%] px-6">
                                                <p className="text-sm text-primary">Clothes</p>
                                                <h1
                                                    className="mt-2 md:text-lg text-base line-clamp-1 font-bold group-hover:text-primary transition-all duration-200"
                                                >
                                                    Product Name
                                                </h1>
                                                <div
                                                    className="flex xl:flex-row flex-col xl:items-center font-semibold mt-2 xl:gap-2"
                                                >
                                                    <p className="text-primary">100000 MMK</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="h-min block" href="/productDetail.html">
                                        <div
                                            className="rounded-lg h-full flex lg:flex-col flex-row cursor-pointer hover:translate-y-[-10px] transition-all duration-200 group shadow-md hover:shadow-lg overflow-hidden"
                                        >
                                            <div className="w-full lg:w-full basis-[40%] overflow-hidden">
                                                <img
                                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                                    className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200"
                                                />
                                            </div>
                                            <div className="py-4 lg:-w-full basis-[60%] px-6">
                                                <p className="text-sm text-primary">Clothes</p>
                                                <h1
                                                    className="mt-2 md:text-lg text-base line-clamp-1 font-bold group-hover:text-primary transition-all duration-200"
                                                >
                                                    Product Name
                                                </h1>
                                                <div
                                                    className="flex xl:flex-row flex-col xl:items-center font-semibold mt-2 xl:gap-2"
                                                >
                                                    <p className="text-primary">100000 MMK</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="h-min block" href="/productDetail.html">
                                        <div
                                            className="rounded-lg h-full flex lg:flex-col flex-row cursor-pointer hover:translate-y-[-10px] transition-all duration-200 group shadow-md hover:shadow-lg overflow-hidden"
                                        >
                                            <div className="w-full lg:w-full basis-[40%] overflow-hidden">
                                                <img
                                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                                    className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200"
                                                />
                                            </div>
                                            <div className="py-4 lg:-w-full basis-[60%] px-6">
                                                <p className="text-sm text-primary">Clothes</p>
                                                <h1
                                                    className="mt-2 md:text-lg text-base line-clamp-1 font-bold group-hover:text-primary transition-all duration-200"
                                                >
                                                    Product Name
                                                </h1>
                                                <div
                                                    className="flex xl:flex-row flex-col xl:items-center font-semibold mt-2 xl:gap-2"
                                                >
                                                    <p className="text-primary">100000 MMK</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-black/10 my-16"></div>
                            <div>
                                <h1 className="text-2xl font-semibold">Product information</h1>
                                <div className="mt-4" id="description">
                                    <div dangerouslySetInnerHTML={{ __html: product.description }} className="no-tailwindcss-base" />
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-black/10 my-16"></div>
                            <div className="my-16">
                                <h1 className="text-2xl font-semibold">Shipping Information Updated</h1>
                                <p className="text-lg text-black/50">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                                    arcu enim urna adipiscing praesent velit viverra sit semper lorem
                                    eu cursus vel hendrerit elementum morbi curabitur etiam nibh
                                    justo, lorem aliquet donec sed sit mi dignissim at ante massa
                                    mattis. Viverra aliquet eget sit amet tellus cras. Cursus sit amet
                                    dictum sit amet. Diam donec adipiscing tristique risus nec. Diam
                                    donec adipiscing tristique risus nec feugiat in. Quisque egestas
                                    diam in arcu cursus euismod quis viverra nibh. Quis imperdiet
                                    massa tincidunt nunc.
                                </p>
                            </div>
                        </div>
                        <div className="lg:basis-[35%] md:basis-[40%]">
                            <div
                                className="border-[1px] md:block hidden border-black/10 rounded-xl py-6 px-6"
                            >
                                <div
                                    className="inline-block px-3 py-1 bg-primary rounded-full text-white font-semibold text-sm"
                                >
                                    {product.category.name}
                                </div>
                                <h1 className="text-2xl mt-3 font-medium">{product.name}</h1>

                                <div className="flex items-end mt-1 gap-2">
                                    <p className="font-bold text-2xl">{product.price} MMK</p>
                                </div>
                                <div className="my-8 h-[1px] w-full bg-black/20"></div>
                                <p className="font-semibold text-lg">Product information</p>
                                <div className="flex flex-col gap-2 mt-3">
                                    <div className="flex items-center">
                                        <p className="basis-[35%] font-semibold">Category:</p>
                                        <p className="basis-[65%] text-black/70">{product.category.name}</p>
                                    </div>
                                </div>
                                <div className="my-8 h-[1px] w-full bg-black/20"></div>
                                <div
                                    className="flex lg:items-center lg:flex-row flex-col gap-3 mt-4 mb-2"
                                >
                                    <div className="lg:basis-[40%]">
                                        <p className="font-bold mb-2">Quantity</p>
                                        <input
                                            value={quantity}
                                            onChange={e => setQuantity(e.target.value)}
                                            className="w-full border-black/10 border-2 rounded-full py-3 pl-5"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={addToCart}
                                    className="w-full h-full disabled:opacity-45 disabled:cursor-not-allowed text-white bg-primary rounded-full py-4 font-bold mt-3"
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <div className="mt-12">
                                <div className="flex items-center justify-between mb-7">
                                    <h1 className="text-2xl font-medium">Related Product</h1>
                                    <a href="/home.html" className="text-sm text-primary underline"
                                    >View all</a
                                    >
                                </div>
                                <div className="flex flex-col gap-7">
                                    <a href="/productDetail.html">
                                        <div className="flex items-center gap-5 group cursor-pointer">
                                            <div className="basis-[30%] h-auto rounded-xl overflow-hidden">
                                                <img
                                                    className="w-full h-full group-hover:scale-[1.1] transition-all duration-200 object-cover"
                                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                                />
                                            </div>
                                            <div className="basis-[70%]">
                                                <p
                                                    className="text-lg group-hover:text-primary transition-all duration-200 font-semibold"
                                                >
                                                    Product Name
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-bold">100000 MMK</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/productDetail.html">
                                        <div className="flex items-center gap-5 group cursor-pointer">
                                            <div className="basis-[30%] h-auto rounded-xl overflow-hidden">
                                                <img
                                                    className="w-full h-full group-hover:scale-[1.1] transition-all duration-200 object-cover"
                                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                                />
                                            </div>
                                            <div className="basis-[70%]">
                                                <p
                                                    className="text-lg group-hover:text-primary transition-all duration-200 font-semibold"
                                                >
                                                    Product Name
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-bold">100000 MMK</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/productDetail.html">
                                        <div className="flex items-center gap-5 group cursor-pointer">
                                            <div className="basis-[30%] h-auto rounded-xl overflow-hidden">
                                                <img
                                                    className="w-full h-full group-hover:scale-[1.1] transition-all duration-200 object-cover"
                                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                                />
                                            </div>
                                            <div className="basis-[70%]">
                                                <p
                                                    className="text-lg group-hover:text-primary transition-all duration-200 font-semibold"
                                                >
                                                    Product Name
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-bold">100000 MMK</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-black/10 mt-16"></div>
                </div>
            )}
        </>
    )
}
