import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isDark, setDark] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDark(!isDark);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("✅ Login successful!");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      setMessage("❌ Invalid email or password");
    }
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        className="min-h-screen flex flex-col items-center justify-center 
        bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 relative"
      >
        {/* 🌗 Theme Toggle */}
        <div className="absolute top-5 right-5">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full shadow-md transition-all duration-500 
              ${isDark ? "bg-gray-700 text-yellow-400" : "bg-yellow-300 text-gray-800"} 
              hover:scale-110`}
            title="Toggle Theme"
          >
            {isDark ? (
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21.752 15.002A9.718 9.718 0 0112 21a9.75 9.75 0 01-8.485-14.563A9.002 9.002 0 0012 18a9.002 9.002 0 009.752-2.998z" />
              </svg>
            ) : (
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                <path
                  fillRule="evenodd"
                  d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm6.364 3.636a1 1 0 010 1.414l-1.415 1.415a1 1 0 01-1.414-1.415l1.415-1.414a1 1 0 011.414 0zM21 11a1 1 0 110 2h-2a1 1 0 110-2h2zm-9 9a1 1 0 011-1h0a1 1 0 011 1v2a1 1 0 11-2 0v-2zm-8.364-3.636a1 1 0 010-1.414l1.415-1.415a1 1 0 011.414 1.415L5.05 15.778a1 1 0 01-1.414 0zM3 13a1 1 0 110-2h2a1 1 0 110 2H3zm2.636-7.364a1 1 0 011.414 0L8.05 7.05a1 1 0 11-1.414 1.415L4.636 7.05a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

   
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 max-w-md w-full mx-auto transition-colors duration-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 text-black dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 text-black dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register
              </a>
            </p>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
