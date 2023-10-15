import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'; 
import { useSearchParams, Link } from 'react-router-dom';
import { verify } from '../../service/userService/authService';
const Verify = () => {

    const[ queryParams ] = useSearchParams();
    const [load, setLoad] = useState(true)
    const token = queryParams.get('token');

const verifyUser = async () => {

    try{
        
        const res = await verify(token)
        if (res){
            console.log(res)
            toast.success(res.message)
            setLoad(true)
            return;
        }
console.log(res)
    }catch(err){
        console.log(err)
    }

}

useEffect(() => { 
    verifyUser()
})

return(
    <>
    {load ?(<div className='   flex justify-center h-screen items-center'> 
      <h1 className='w-auto py-12 px-10 font-serif rounded-lg shadow-lg font-bold text-3xl'>
        Email Verified go to <Link className=" font-serif text-blue-500 hover:text-sky-700" to={"/login"}>Login</Link> Page  </h1>  
        </div>) : (
<div className=' font-serif flex justify-center  h-screen items-center '>
            <div className=' bg-slate-200  w-auto py-12 px-10 rounded-lg shadow-lg'>
            <h1 className='font-bold text-5xl font-sans text-black'>
       Wait...
        </h1>
        </div>
        </div>
        )}
        </>
)

}

export default Verify