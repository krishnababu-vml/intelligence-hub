import { useEffect, useState } from "react";
import InputField from "./InputField";

export default function ({ loggedIn }) {
  const passCode = "Ford@123";
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);

  const submitClickHandler = (e) => {
    e.preventDefault();
    loggedIn(password === passCode);
    setError(password === passCode);
  };

  useEffect(() => {
    setError(true);
  }, [password]);

  return (
    //min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 p-8
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 p-6 flex items-start justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6">
        <header className="mb-4">
          <h1 className="font-bold text-gray-800 flex items-center gap-3">
            <span className="text-2xl">🔑</span>
            Login
          </h1>
          <p className="text-sm text-left text-gray-500 mt-1">Use Password to proceed.</p>
        </header>
        <form className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-200 login-form">
          <InputField
            onChange={setPassword}
            value={password}
            label="Password"
            className="mb-4"
            type="password"
            helperText={error ? "" : "Wrong password"}
          />
          <button
            onClick={submitClickHandler}
            className="w-full p-3 bg-purple-600 text-white font-bold border-gray-200 border rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
