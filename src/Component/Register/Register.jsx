/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import axios from "axios"
import Swal from "sweetalert2"
import useAxiosPublic from "../../hooks/useAxiosPublic"



const Register = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const {user, CreateUser,updateUserProfile} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    CreateUser(data.name, data.email)
    .then((result)=> {
      updateUserProfile(data.name, data.photoURL)
      const userInfo = {
      name: data.name,
      email: data.email,
      photoURL: data.photoURL,
      password: data.password
      }
      
      console.log(userInfo)
      axiosPublic.post("/users", userInfo)
      .then(()=> {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Register Success",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/")
      })

    })
    .catch((error)=> {
      console.log(error)
    })

   
  }

  return (
    <div>
      <div>
        <div>
          <h1 className="text-black text-4xl px-5 text-center mb-10 font-bold">Sign Up</h1>
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white shadow-lg w-[400px] rounded-lg mx-auto px-10 py-10">
        <div className="mb-3">
          <label className="text-xs" htmlFor="">Name</label><br />
          <input {...register("name")} className="p-2 mt-1 w-full border-solid border-[1px] rounded-lg border-sky-600 outline-none" type="text" placeholder="Enter Name" />
        </div>
        <div className="mb-3">
          <label className="text-xs" htmlFor="">Email Address</label><br />
          <input {...register("email")} className="p-2 mt-1 w-full border-solid border-[1px] rounded-lg border-sky-600 outline-none" type="text" placeholder="Enter Email" />
        </div>
        <div className="mb-3">
          <label className="text-xs" htmlFor="">Image </label><br />
          {/* <input type="file" name="" id="" /> */}
          <input {...register("photoURL")} className="p-2 mt-1 w-full border-solid border-[1px] rounded-lg border-sky-600 outline-none" type="file" placeholder="Enter Name" />
        </div>
        <div className="mb-3">
          <label className="text-xs" htmlFor="">Password</label><br />
          <input {...register("password")} className="p-2 mt-1 w-full border-solid border-[1px] rounded-lg border-sky-600 outline-none" type="text" placeholder="Enter Password" />
        </div>
        <button className="w-full bg-blue-500 py-3 text-white font-semibold rounded-lg">Register</button>
        <p>Do you have an account? <Link to="/login" className="text-blue-500 underline">please login</Link></p>
      </div>


      </form>
      </div>
    </div>
  )
}

export default Register