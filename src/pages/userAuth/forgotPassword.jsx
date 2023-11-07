import { useState } from "react";
import { forgotpassword } from "../../service/userService/authService";
import { toast } from "react-toastify";
import inv10 from "../svg/inv10.jpg"
const ForgotPassword = () => {
  const [email, setEmail] = useState({email:""});
  const [load, setLoad] = useState(true)

  const handleChange = (e) => {
const {name, value} = e.target
    setEmail({
      ...email,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotpassword(
        email 
      );
      if (response.message) {
        toast.success(response.message);
        console.log(response);
        setLoad(false)
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>

      { load ? (
    <div className="w-full p-[5vmax]    gap-6 grid grid-cols-1 max-xl:grid-cols-1 xl:grid-cols-2">

        <>
        <div className="  flex items-center justify-center h-screen shadow-2xl rounded-xl ">
      <form className="relative bg-slate-100 max-md:w-[90%] w-[76%]  p-10 pt-28 rounded-lg shadow-xl" onSubmit={handleSubmit}>
        <h1 className=' py-8 absolute top-2 text-3xl font-serif text-center'>Forgot Password?</h1>
        <input
          type="email"
          name="email"
          required={true}
          value={email.email}
          placeholder="Email"
          onChange={handleChange}
          className="w-96 h-14 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <br />
        <br />
        <button type="submit" className="w-full bg-blue-500 py-3 rounded-lg text-white hover:bg-sky-700">Reset Password</button>
      </form>
      </div>
      <div className="flex max-xl:hidden items-center justify-center bg-white rounded-lg shadow-2xl">
      <img src={inv10} alt="forgot password" />
    </div>
      </>
     
     </div>

     )
    : ( <div className="w-full h-screen flex justify-center items-center ">
    <div className='w-auto py-12 px-10 font-serif rounded-lg shadow-lg font-bold text-3xl'>Email has sent check your mail</div>
    </div>)}

    
    </>
  );
};

export default ForgotPassword;
