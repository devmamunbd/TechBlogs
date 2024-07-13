/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Login = () => {
  const navigate = useNavigate()
  const {GoogleLogin} = useAuth()
  const googleHandle=()=> {
    GoogleLogin()
    .then(result =>{
      console.log(result.user)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div>
    <div>
      <h1 className="text-black text-4xl px-5 text-center mb-10 font-bold">Sign In</h1>
    </div>

  <div className="bg-white shadow-lg w-[400px] rounded-lg mx-auto px-10 py-10">
  <form onSubmit={handleSubmit(onSubmit)}>
  <div >
    
    <div className="mb-3">
      <label className="text-xs" htmlFor="">Email Address</label><br />
      <input {...register("email")} className="p-2 mt-1 w-full border-solid border-[1px] rounded-lg border-sky-600 outline-none" type="text" placeholder="Enter Email" />
    </div>
   
    <div className="mb-3">
      <label className="text-xs" htmlFor="">Password</label><br />
      <input {...register("password")} className="p-2 mt-1 w-full border-solid border-[1px] rounded-lg border-sky-600 outline-none" type="text" placeholder="Enter Password" />
    </div>
    <button className="w-full bg-blue-500 py-3 text-white font-semibold rounded-lg">Sign In</button>
    <p>New in here? <Link to="/register" className="text-blue-500 underline ">please sign up</Link></p>
  </div>
  </form>
  <div>
    <button onClick={googleHandle}
     className="bg-transparent border-[1px] border-gray-700 hover:bg-black text-black  hover:text-white mx-auto mt-6 w-full py-3 rounded-lg">
    <FaGoogle className="mx-auto" />

    </button>
  </div>
  </div>
  </div>
  )
}

export default Login