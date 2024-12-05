import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="cursor-pointer">
            <Link to={`/products/${product.id}`}>
                <div
                    className="w-full h-auto bg-[#F7F8F9] group rounded-xl overflow-hidden"
                >
                    <img
                        className="w-full h-full group-hover:scale-[1.1] transition-all duration-200"
                        src={product.images.length ? product.images[0].url : "https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"}
                    />
                </div>
                <p className="mt-3 font-semibold">{product.name}</p>
                <div className="flex gap-2 text-sm items-center font-semibold mt-1">
                    <p className="text-primary">{product.price} MMK</p>
                </div>
            </Link>
        </div>
    )
}
