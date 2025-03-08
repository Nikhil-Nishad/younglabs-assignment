import { useState } from "react";


function Greeting() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGetGreeting = async () => {
    if (!name) {
      setError("Name is required.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/greet?name=${name}`
      );
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to fetch greeting.", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-500 p-6 rounded-lg shadow-sm dark:text-gray-100 dark:shadow-amber-50">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleGetGreeting}
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isLoading ? "Loading..." : "Get Greeting"}
      </button>
      {message && <p className="mt-4 text-green-600 dark:text-green-400">{message}</p>}
      {error && <p className="mt-4 text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

export default Greeting;
