import {useContext, useState } from "react";
import { Eye, EyeOff, Mail, Lock, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AuthContext";
const Login = ()=> {
  let navigate = useNavigate();
 let {login, setLogin, registerUser,} = useContext(Auth)
   let {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    let formSubmit = (data) => {
      let user = registerUser.find((val)=>{
        return val.email === data.email && val.password === data.password
      })

      if(!user){
        alert("user not found")
        return
      }
      setLogin(user)
      navigate('/main')
      localStorage.setItem("loginUser",JSON.stringify(user))

    };


  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      <div className="relative flex-1 border-b lg:border-b-0 lg:border-r border-neutral-800 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-lime-400/5 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-16 py-16 lg:py-0 min-h-[420px] lg:min-h-screen">
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 lg:top-12 lg:left-16 flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-lime-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-black fill-black" strokeWidth={2.5} />
            </div>
            <span className="text-lg sm:text-xl font-bold">
              Sky<span className="text-lime-400">Mart</span>
            </span>
          </div>

          <div className="max-w-lg mt-20 lg:mt-0">
            <p className="text-lime-400 text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 sm:mb-5">
              WELCOME BACK
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
              Shop the future.
              <span className="block text-lime-400">Today.</span>
            </h1>
            <p className="mt-5 sm:mt-6 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
              Thousands of products,,  lightnin delry, and cethat
              make your wallet happy.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-10 sm:mt-12">
              {[
                { value: "20K+", label: "Products" },
                { value: "50K+", label: "Users" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-neutral-800 rounded-2xl px-6 sm:px-7 py-4 sm:py-5 text-center min-w-[110px] sm:min-w-[130px]"
                >
                  <div className="text-lime-400 text-xl sm:text-2xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-neutral-500 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-10 sm:py-16">
        <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1.5">Sign in</h2>
          <p className="text-neutral-500 text-sm mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
              <input
              {...register("email", {
                required: "Email is required",
              })}
                type="email"
                placeholder="Email address"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-4 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
              />
            {errors.email && <p>{errors.email.message}</p>}

            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
              <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "At Least 6 characters   ",
                },
              })}
                type="password"
                placeholder="Password"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-11 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
              />
            {errors.password && <p>{errors.password.message}</p>}

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                aria-label="Toggle password visibility"
              >
          
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 hover:brightness-110 active:scale-[0.99] text-black font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-all"
            >
              Sign in
              <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </button>
          </form>

          <p className="text-center text-neutral-500 text-sm mt-6">
            Don't have an account?{" "}
            <button onClick={()=>navigate('/register')} href="#" className="text-lime-400 font-semibold hover:underline">             
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login