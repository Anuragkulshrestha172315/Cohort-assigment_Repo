import {
  Music,
  Mic2,
  User,
  AtSign,
  Mail,
  Lock,
  RotateCcw,
  ArrowRight,
  Headphones,
  Radio,
  Tv,
} from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthContextData } from "../ContexAPI/AuthContext";

const Register = () => {

    const registerUser = useContext(AuthContextData)

  const [role, setRole] = useState("listener");
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = (data) => {
    const newUser = {
      ...data,
      role
    };
    registerUser(newUser)
    reset();
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-black to-neutral-950 flex flex-col items-center justify-center p-6 border-t-2 border-violet-700">
      {/* Header */}
      <h1 className="text-lg font-bold text-violet-300 tracking-wide">
        MusicHub
      </h1>
      <p className="text-neutral-400 text-xs mt-1 mb-6">
        Join the sound revolution.
      </p>

      {/* Card */}
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="w-full max-w-md bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6">
          {/* Role toggle */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setRole("listener")}
              type="button"
              className={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl border ${
                role === "listener"
                  ? "border-violet-500 bg-violet-950/40 text-violet-300"
                  : "border-neutral-700 bg-neutral-900 text-neutral-400"
              }`}
            >
              <Music className="w-4 h-4" />
              <span className="text-[10px] tracking-widest">LISTENER</span>
            </button>
            <button
              onClick={() => setRole("artist")}
              type="button"
              className={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl border ${
                role === "artist"
                  ? "border-violet-500 bg-violet-950/40 text-violet-300"
                  : "border-neutral-700 bg-neutral-900 text-neutral-400"
              }`}
            >
              <Mic2 className="w-4 h-4" />
              <span className="text-[10px] tracking-widest">ARTIST</span>
            </button>
          </div>

          {/* Full Name */}
          <div className="mt-5 flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-3">
            <User className="w-4 h-4 text-neutral-500" />
            <input
              {...register("fullName")}
              type="text"
              placeholder="Full Name"
              className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-full"
            />
          </div>

          {/* Username */}
          <div className="mt-3 flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-3">
            <AtSign className="w-4 h-4 text-neutral-500" />
            <input
              {...register("userName")}
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-full"
            />
          </div>

          {/* Email */}
          <div className="mt-3 flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-3">
            <Mail className="w-4 h-4 text-neutral-500" />
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-full"
            />
          </div>

          {/* Password + Confirm */}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-3">
              <Lock className="w-4 h-4 text-neutral-500" />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-full min-w-0"
              />
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-3">
              <RotateCcw className="w-4 h-4 text-neutral-500" />
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm"
                className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-full min-w-0"
              />
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-neutral-600 bg-neutral-900 accent-violet-500"
            />
            <label htmlFor="terms" className="text-xs text-neutral-400">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="mt-5 w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Register <ArrowRight className="w-4 h-4" />
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-neutral-400 mt-4">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              href="#"
              className="text-violet-400 hover:text-violet-300 font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </form>
      {/* Footer icons */}
      <div className="flex items-center gap-6 mt-8 text-neutral-500">
        <Music className="w-4 h-4" />
        <Headphones className="w-4 h-4" />
        <Radio className="w-4 h-4" />
        <Tv className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Register;
