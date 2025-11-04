import { useState } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
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
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("✅ Registration successful! Redirecting...");
      setTimeout(() => navigate("/home"), 1000);
    } catch (error) {
      setMessage(
        "❌ Registration failed: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-700 bg-gray-100 dark:bg-gray-900 dark:text-white relative">
        

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

        {/* 🧾 Register Card */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 w-[400px] transition-colors duration-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Create Account ✨
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none dark:bg-gray-700 dark:text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none dark:bg-gray-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none dark:bg-gray-700 dark:text-white"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Register
            </button>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
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
