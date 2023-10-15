import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { resetpassword } from "../../service/userService/authService";
import { toast } from "react-toastify";
import Input from "../../components/inputForm";
import Button from "../../components/button";
// import Label from "../../components/label";
import inv11 from "../svg/inv11.png"
const ResetPassword = () => {
  const navigate = useNavigate();
  const [queryParam] = useSearchParams();

  const token = queryParam.get("token");

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    email:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const {oldPassword, newPassword} = formData
  const handleSubmit = async(e) => {
    e.preventDefault();
if(newPassword.length && oldPassword.length < 8){
toast.error("Password must be 8 characters long")
return;
}
if(newPassword !== formData.confirmNewPassword){
toast.error("New Password and Confirm Password doesn't match")
return;
}
    try {
      const response = await resetpassword(token, formData);
      
      console.log(response);
      toast.success(response.message);
      navigate("/login");
    } catch (err) {
        console.log(err.response.data.error)
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="w-full  gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

    <div className="flex justify-center w-full   items-center h-screen">

      <form className="bg-slate-50  py-10 px-12 rounded-lg shadow-lg" onSubmit={handleSubmit}>

      <h1 className="text-center font-bold text-2xl">Reset Password</h1>
<br /><br />
        {/* <Label htmlFor="old-password" text="Old Password" /> */}
        <Input
          type="password"
          name="oldPassword"
          value={formData.oldPassword}
          placeholder="Old Password"
          onChange={handleChange}
          min={8}
          required={true}
        />
        <br />
        {/* <Label htmlFor="password" text="New Password" /> */}
        <Input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          placeholder="New Password"
          onChange={handleChange}
          min={8}
          required={true}

        /> <br />
        {/* <Label htmlFor="password" text="Confirm Password" /> */}
        <Input
          type="password"
          name="confirmNewPassword"
          value={formData.confirmNewPassword}
          placeholder="Confirm New Password"
          onChange={handleChange}
          min={8}
          required={true}

        /> <br />
       
       
        <Button type="submit" text="Set Password" />
      </form>
    </div>
    <div className=" bg-white  rounded-lg shadow-2xl">
<img src={inv11}  alt="" />
</div>
    </div>
  );
};
export default ResetPassword;