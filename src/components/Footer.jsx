export default function Footer() {
    return (
        <div
            className="bg-secondary xl:px-32 sm:px-5 px-2 grid gap-y-10 xl:grid-cols-5 gap-4 md:grid-cols-3 py-20 text-white"
        >
            <div>
                <h1 className="text-lg font-bold">Menu</h1>
                <ul className="mt-6 gap-2 font-semibold flex flex-col">
                    <li>
                        <a href="/home.html">Home</a>
                    </li>
                    <li>
                        <a href="/home.html">Beauty</a>
                    </li>
                    <li>
                        <a href="/home.html">Clothes</a>
                    </li>
                    <li>
                        <a href="/home.html">Food</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-2">
                <h1 className="text-lg font-bold">Popular Products</h1>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <a href="/productDetail.html">
                        <div className="flex gap-4 items-center">
                            <div
                                className="w-[80px] h-[80px] shrink-0 rounded-md overflow-hidden"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                />
                            </div>
                            <div>
                                <h1 className="font-bold">Product Name</h1>
                                <p className="text-sm text-primary font-semibold">200000 MMK</p>
                            </div>
                        </div>
                    </a>
                    <a href="/productDetail.html">
                        <div className="flex gap-4 items-center">
                            <div
                                className="w-[80px] h-[80px] shrink-0 rounded-md overflow-hidden"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                />
                            </div>
                            <div>
                                <h1 className="font-bold">Product Name</h1>
                                <p className="text-sm text-primary font-semibold">200000 MMK</p>
                            </div>
                        </div>
                    </a>
                    <a href="/productDetail.html">
                        <div className="flex gap-4 items-center">
                            <div
                                className="w-[80px] h-[80px] shrink-0 rounded-md overflow-hidden"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                />
                            </div>
                            <div>
                                <h1 className="font-bold">Product Name</h1>
                                <p className="text-sm text-primary font-semibold">200000 MMK</p>
                            </div>
                        </div>
                    </a>
                    <a href="/productDetail.html">
                        <div className="flex gap-4 items-center">
                            <div
                                className="w-[80px] h-[80px] shrink-0 rounded-md overflow-hidden"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                />
                            </div>
                            <div>
                                <h1 className="font-bold">Product Name</h1>
                                <p className="text-sm text-primary font-semibold">200000 MMK</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="xl:col-span-2 md:col-span-3">
                <div className="bg-[#383E52] flex flex-col items-center p-10 rounded-xl">
                    <h1 className="text-lg font-extrabold mb-2">
                        Get 10% OFF of your first purchase
                    </h1>
                    <div
                        className="xl:w-full md:w-[50%] w-full h-[55px] bg-white rounded-full"
                    >
                        <input
                            className="w-full h-full text-black text-sm pl-6 bg-transparent border-none outline-none focus:ring-0"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <button
                        className="xl:w-full md:w-[50%] w-full h-full bg-primary rounded-full py-4 font-bold mt-3"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
