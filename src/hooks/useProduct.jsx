import { useEffect, useState } from "react";

function useProduct(id) {
    let [product, setProduct] = useState(null);

    let getProduct = async (id) => {
        let res = await fetch('http://localhost:8000/api/products/' + id);
        let data = await res.json()
        console.log(data.product)
        setProduct(data.product)
    }

    useEffect(() => {
        getProduct(id);
    }, [id])
    return { product };
}

export default useProduct