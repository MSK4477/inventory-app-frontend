import axios from "axios"


//Create a new product
export const createProducts =  async(productData) => { 

    const response = await axios.post(`http://localhost:3000/product`,productData, {
        withCredentials:true,
    })
    return response.data

}
//Get all products
export const GetProducts =  async() => { 

    const response = await axios.get(`http://localhost:3000/product`, {
        withCredentials:true,
    })
    return response.data

}

//Get a product
export const getProduct =  async(id) => { 

    const response = await axios.get(`http://localhost:3000/product/${id}`, {
        withCredentials:true,
    })
    return response.data

}

//update a product
export const updateProduct =  async(id,productData) => { 

    const response = await axios.post(`http://localhost:3000/product/update/${id}`,productData, {
        withCredentials:true,
    })
    return response.data

}


//delete a product
export const deleteProduct =  async(id) => { 

    const response = await axios.get(`http://localhost:3000/product/delete/${id}`, {
        withCredentials:true,
    })
    return response.data

}