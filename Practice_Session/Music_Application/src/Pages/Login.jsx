import { Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
        <p className="text-neutral-400 text-sm mt-1">
          Sign in to continue your journey.
        </p>
        <form>
          {/* Email */}

          <div className="mt-6">
            <label className="text-xs tracking-widest text-neutral-400 font-medium">
              EMAIL ADDRESS
            </label>
            <div className="mt-2 flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-3">
              <Mail className="w-4 h-4 text-neutral-500" />
              <input
                type="email"
                placeholder="name@example.com"
                className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <label className="text-xs tracking-widest text-neutral-400 font-medium">
                PASSWORD
              </label>
              <a
                href="#"
                className="text-xs text-violet-400 hover:text-violet-300"
              >
                Forgot Password?
              </a>
            </div>
            <div className="mt-2 flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-3">
              <Lock className="w-4 h-4 text-neutral-500" />
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-full"
              />
              <Eye className="w-4 h-4 text-neutral-500 cursor-pointer" />
            </div>
          </div>

          {/* Remember me */}
          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-neutral-600 bg-neutral-900 accent-violet-500"
            />
            <label htmlFor="remember" className="text-sm text-neutral-300">
              Remember Me
            </label>
          </div>

          {/* Login button */}
          <button
            type="button"
            className="mt-6 w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Login <ArrowRight className="w-4 h-4" />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-neutral-800 flex-1" />
            <span className="text-xs text-neutral-500">OR</span>
            <div className="h-px bg-neutral-800 flex-1" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-neutral-700 rounded-lg py-3 text-sm text-neutral-200 hover:bg-neutral-800 transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.2 29.6 4 24 4c-7.5 0-14 4.1-17.7 10.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.4 0 10.3-2.1 14-5.5l-6.5-5.4C29.4 34.6 26.9 35.5 24 35.5c-5.3 0-9.8-3.4-11.3-8.1l-6.6 5.1C9.9 39.9 16.4 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6.5 5.4C40.6 36.5 44 30.7 44 24c0-1.3-.1-2.7-.4-3.5z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider line */}
          <div className="h-px bg-neutral-800 mt-6 mb-6" />

          {/* Register */}
          <p className="text-center text-sm text-neutral-400">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              href="#"
              className="text-violet-400 hover:text-violet-300 font-medium"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
