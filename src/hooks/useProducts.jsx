import { useEffect, useState } from "react";
import axios from 'axios';

function useProducts() {
    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState("");
    let getProducts = async (search) => {
        let res = await axios.get('/api/products?name=' + search);
        setProducts(res.data.products)
    }

    useEffect(() => {
        getProducts(search);
    }, [search])

    return {
        products,
        search,
        setSearch
    }
}

export default useProducts