import Greeting from "../components/Greeting";
import { DockDemo } from "../components/DockDemo";
function Home() {
  return (
    <>
      <div className="flex flex-col items-center  min-h-screen bg-gray-100 dark:bg-gray-900">
      <DockDemo />
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome to Younglabs</h1>
        <Greeting />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md dark:bg-blue-500 dark:text-white mt-4 hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300 border-2 border-black" onClick={() => window.open("https://nikhil-nishad-portfolio.netlify.app/", "_blank")}>👉Visit My Portfolio</button>
      </div>
    </>
  );
}

export default Home;
