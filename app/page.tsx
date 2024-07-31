export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My Website
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Your one-stop destination for amazing content and resources.
      </p>

      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Learn More
        </button>

        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
