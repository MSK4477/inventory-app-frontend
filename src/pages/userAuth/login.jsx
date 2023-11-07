// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Input from "../../components/inputForm";
import Button from "../../components/button";
import { login } from "../../service/userService/authService.js";
import inv8 from "../svg/inv8.jpg"
const Login = () => {
  const [formData, setFormData] = useState({email:"",password:""});
const navigate = useNavigate();
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData)
       
      console.log(response.message);
      if (response.message == "User has been signed-in successfully") {
      toast.success("Logged-In Succesfull");
        navigate("/");
        const user = {
            name: response.data.name,
            email: response.data.email,
            role : response.data.role,
        }
        localStorage.setItem("user", JSON.stringify(user))
      }
    } catch (error) {
      console.log(error);
        toast.error(error.response.data.error);
      
    }
  };

  return (
    <>
    <div className="w-full    gap-6 grid grid-cols-1 max-xl:grid-cols-1 xl:grid-cols-2">
      <div className="mt-7 rounded-lg shadow-2xl flex items-center justify-center h-screen">
        <form
          className="bg-slate-100 max-md:w-[90%] p-10 rounded-lg shadow-xl"
          onSubmit={handleSubmit} 
        >
    <h1 className='className="font-bold  text-3xl font-serif text-center'>Sign in</h1>
<br /><br />
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
          <div>
            {"Didn't"} have an Account{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              register
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <Link
              className="text-blue-500 hover:text-blue-700"
              to={"/forgotPassword"}
            >
              forgotPassword
            </Link>
          </div>

          <Button type="submit" text="Login" />
        </form>
      </div>
      <div className=" flex max-xl:hidden items-center justify-center bg-white rounded-lg shadow-2xl">
    <img className="" src={inv8} alt="" />
        </div>

      </div>
    </>
  );
};

export default Login;
