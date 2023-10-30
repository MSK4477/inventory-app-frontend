import  { useState } from "react";
import { register }from "../../service/userService/authService.js";
import { toast } from "react-toastify";
import Input from "../../components/inputForm";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import inv9 from "../svg/inv9.jpg"
const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
const [load, setLoad] = useState(true)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      if(response.message){
        toast.success("User Registred Succesfully");
        toast.success("Verify Your Email By Clicking On The Link We Sent To Your Email");
        setLoad(false)

      }
      console.log("hi")

      console.log(response);
    } catch (err) {
      toast.error(err.response.data);
      console.log(err.response.data.error)
    }
  };

  return (
    <>

    {load ?(
      <>
        <div className="w-full  gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

    <div className="  mt-7 rounded-lg shadow-2xl flex items-center justify-center h-screen">

    <form className="bg-slate-100  p-10 rounded-lg shadow-xl" onSubmit={handleSubmit}>
    <h1 className='className="font-bold text-3xl font-serif text-center "'>Sign up</h1>
    <br />
        <Input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          min={3}
          required={true}

        />
    <br />
        <Input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required={true}

        />
    <br />
        <Input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          min={8}
          required={true}

        />
     <br />
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleChange}          
          min={10}
          required={true}
        /> <br />
        <div>Already have an Account <Link to="/login"   className="text-blue-500 hover:text-blue-700"> login</Link></div>
      <Button type="submit" text="Register" />
    </form>
    </div>
    <div className=" bg-white  rounded-lg shadow-2xl">
<img src={inv9}  alt="" />
</div>
    </div>
    </>
    ) :(

<div className="flex justify-center items-center w-full h-screen">
    <div className='font-bold text-3xl font-serif  text-black'>Email has sent check your mail</div>
    </div>
    )}
    
 
    </>
  );
};

export default Register;
