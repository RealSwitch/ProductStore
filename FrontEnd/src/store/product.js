import {create} from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) =>{
        if (!newProduct.name || !newProduct.image || !newProduct.price || !newProduct.description){
            return {success:false, message:'All fields are required.'}
        }
        const res = await fetch(`/api/products`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        }) 
        const data = await res.json();
        set((state) => ({products:[...state.products,data.data]}));
        return {success:true, message:'Product added to the stock.'}

    },
    fetchProducts : async () => {
        const res = await fetch(`/api/products`);
        const data = await res.json();
        set({products:data})
    },
    deleteProduct: async (product_id) =>{
        const res = await fetch(`/api/products/${product_id}`,{method:"DELETE",});
        const data = await res.json();
        if (!data.success) return {success:false,message:data.message};
        set((state) => ({products:state.products.filter(product => product._id !== product_id)}));
        return {success:true,message:data.message}

    },
    updateProduct: async (product_id,updatedProduct) =>{
        const res = await fetch(`/api/products/${product_id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(updatedProduct),
        });
        const data = await res.json();
        console.log(data);
        if (!data.success) return {success:false,message:data.message};
        set((state) => ({products:state.products.map(product => product._id === product_id?data.data:product)}));
        return {success:true,message:data.message}

    }
}));
export default useProductStore;