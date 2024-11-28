import { useState } from "react";
import useCategories from "../../hooks/useCategories";
import axios from "axios";

function AdminProductCreate() {
    let { categories } = useCategories();
    console.log(categories)
    let [form, setForm] = useState({
        name: '',
        price: '',
        category_id: 2,
        description: ''
    })

    let createProduct = async () => {
        let res = await axios.post('/api/products', form);
        console.log(res);
    }

    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gray-50">
            <h1 className="text-xl font-bold my-4">Product Create Form</h1>
            <div className="border p-10 bg-white rounded-md">
                <form className="space-y-4 md:space-y-6">
                    <div className="">
                        <div className="image-wrapper">
                            <input type="file" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col">
                            <label className="font-semibold text-sm">Product Name {form.name}</label>
                            <input
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="outline-none px-4 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                                type="text"
                                placeholder="Enter your product Name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-sm">Price</label>
                            <input
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                                className="outline-none px-4 focus:ring-0 border-[1px] border-black/10 py-4 rounded-lg focus:border-primary transition-all mt-2"
                                type="text"
                                placeholder="Enter price"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-sm">Category </label>
                        <select
                            onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                            className="w-full border-[1px] mt-2 px-3 border-black/20 focus:border-primary transition-all py-3 rounded-lg"
                        >
                            {categories.map(category => (
                                <option
                                    selected={category.id == form.category_id}
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div>
                            <label className="font-semibold text-sm">Description</label>
                            <textarea
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                className="w-full border-[1px] border-black/10 py-3 px-3 rounded-[5px]"
                                placeholder="Enter Description"
                                rows="5"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-end space-x-5">
                        <a
                            href="/admin.html"
                            className="text-sm px-4 bg-gray-600 hover:bg-gray-700 text-white flex items-center gap-3 shadow-md py-3 font-semibold rounded-md transition-all active:animate-press"
                        >
                            Cancel
                        </a>
                        <button
                            type="button"
                            onClick={createProduct}
                            className="text-sm px-4 flex items-center gap-3 shadow-md py-3 text-white bg-primary hover:bg-blue-900 font-semibold rounded-md transition-all active:animate-press"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminProductCreate