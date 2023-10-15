import { GetProducts } from "../../service/productService/productsService";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await GetProducts();
        setProductData(response.pr);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);
  console.log(productData);

  const arr = [];
  productData.map((item) => {
    return arr.push(item.category);
  });
  let newArr = [...new Set(arr)];
  let sum = 0;
const totalProducts = productData.length
  productData.map((item) => {
    return (sum += item.price);
  });
  console.log("sum", sum);

  let outOfStock = 0;
  productData.filter((item) => {
    if (item.quantity == 0) {
      return (outOfStock += 1);
    }
    console.log("outOfStock", outOfStock);
  });
  const quantity = productData.reduce((a, b) => a + b.quantity, 0);
  console.log("quantity", quantity);
  const totalStoreWorth = quantity * sum;
  console.log("totalStoreWorth", totalStoreWorth);
  console.log();

  const name  = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).name : ""

  return (
    <div className=" w-[calc(100%-16%)] absolute left-48 top-0 ">
            <div className="border-b-4 flex justify-center items-center w-full border-gray-300 ml-9 h-24">
        <div className=" mb-4 text-3xl font-serif font-bold text-shadow-2 text-black ">{name}{"'s"}<span className="text-orange-800 font-serif">&nbsp; Inventory</span></div></div>
      <div className=" grid gap-3 mt-7  ml-9 gap-y-5 grid-cols-1 sm:grid-cols-1 grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3">

         <div className="bg-white h-32 flex  justify-center items-center w-full  rounded-xl shadow-lg mb-4">
          <div className="text-lg font-bold text-emerald-600"><span className="text-sky-600">Total Category:</span> {newArr.length}</div>
        </div>
        <div className="bg-white h-32  flex justify-center items-center w-full rounded-xl shadow-lg mb-4">
          <div className="text-lg font-bold text-amber-900"><span className="text-lime-800">Total Quantity:</span> {quantity}</div>
        </div>
        <div className="bg-white h-32 flex  justify-center items-center w-full rounded-xl shadow-lg mb-4">
          <div className="text-lg font-bold text-pink-800"><span className="text-red-500">Total Products:</span> {totalProducts}</div>
        </div>
        <div className="bg-white h-32 flex justify-center items-center w-full rounded-xl shadow-lg mb-4">
          <div className="text-lg font-bold text-yellow-700"><span className="text-blue-700">Total Store Worth:</span> ₹{totalStoreWorth}</div>
        </div>

        <div className="bg-white h-32 flex justify-center items-center w-full  rounded-xl shadow-lg mb-4">
          <div className="text-lg font-bold text-orange-500"><span className="text-green-500">Out Of Stock:</span> {outOfStock}</div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
