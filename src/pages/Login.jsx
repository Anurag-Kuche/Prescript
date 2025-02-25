import { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form 
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center  p-8"
    >
      <div className="w-full max-w-md bg-gray-200 p-6 rounded-2xl shadow-lg">
        <p className="text-2xl font-semibold text-gray-700 text-center mb-2">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-gray-600 text-center mb-6">
          Please {state === "Sign Up" ? "sign up" : "login"} to book an appointment
        </p>

        {state === "Sign Up" && (
          <div className="mb-4">
            <p className="text-gray-700 mb-1">Full Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div className="mb-4">
          <p className="text-gray-700 mb-1">Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-1">Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          {state === "Sign Up" ? "Create Account" : "Log In"}
        </button>

        <p className="text-center text-gray-600 mt-4">
          {state === "Sign Up" ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-gray-700 font-semibold ml-1 hover:underline"
          >
            {state === "Sign Up" ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </form>
  );
}

export default Login;