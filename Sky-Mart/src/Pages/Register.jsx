import { useContext, useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AuthContext";

const Register = () => {
  let { registerUser, setRegisterUser} = useContext(Auth)
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); 

  let formSubmit = (data) => {
    let arr = [...registerUser, data]
    setRegisterUser(arr)
    localStorage.setItem('registerUser', JSON.stringify(arr))
    reset()
  };

  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10 sm:py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-2xl bg-lime-400 flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-black fill-black" strokeWidth={2.5} />
        </div>
        <span className="text-lg sm:text-xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </span>
      </div>

      <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-1.5">
          Create account
        </h2>
        <p className="text-neutral-500 text-sm mb-8">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Full name"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-4 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

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
                  message: "At least 6 characters required",
                },
              })}
              type="password"
              placeholder="Password (min 6 chars)"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-11 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label="Toggle password visibility"
            ></button>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
            <input
              {...register("confirm_password", {
                required: "Confirm Password is required",
                minLength: {
                  value: 6,
                  message: "At least 6 characters required",
                },
              })}
              type="password"
              placeholder="Confirm password"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-11 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
            />
            {errors.confirm_password && (
              <p>{errors.confirm_password.message}</p>
            )}
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label="Toggle confirm password visibility"
            ></button>
          </div>

          <button
            type="submit"
            className="w-full bg-lime-400 hover:brightness-110 active:scale-[0.99] text-black font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-all"
          >
            Create Account
            <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </button>
        </form>

        <p className="text-center text-neutral-500 text-sm mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            href="#"
            className="text-lime-400 font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};
export default Register;
