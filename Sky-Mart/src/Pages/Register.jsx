import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate()
  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle account creation here
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10 sm:py-16">
      {/* logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-2xl bg-lime-400 flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-black fill-black" strokeWidth={2.5} />
        </div>
        <span className="text-lg sm:text-xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </span>
      </div>

      {/* card */}
      <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-1.5">
          Create account
        </h2>
        <p className="text-neutral-500 text-sm mb-8">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* full name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
            <input
              type="text"
              required
              value={form.fullName}
              onChange={handleChange("fullName")}
              placeholder="Full name"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-4 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
            />
          </div>

          {/* email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
            <input
              type="email"
              required
              value={form.email}
              onChange={handleChange("email")}
              placeholder="Email address"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-4 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
            />
          </div>

          {/* password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
            <input
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              value={form.password}
              onChange={handleChange("password")}
              placeholder="Password (min 6 chars)"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-11 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <EyeOff className="w-[18px] h-[18px]" />
              ) : (
                <Eye className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>

          {/* confirm password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-neutral-500" />
            <input
              type={showConfirm ? "text" : "password"}
              required
              value={form.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="Confirm password"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-11 pr-11 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label="Toggle confirm password visibility"
            >
              {showConfirm ? (
                <EyeOff className="w-[18px] h-[18px]" />
              ) : (
                <Eye className="w-[18px] h-[18px]" />
              )}
            </button>
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
          <button onClick={()=>navigate('/login')} href="#" className="text-lime-400 font-semibold hover:underline">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
export default Register