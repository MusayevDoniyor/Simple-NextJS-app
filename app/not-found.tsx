import TimerMsg from "@/components/notFoundMsg/TimerMsg";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>

        <p className="text-gray-500 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <TimerMsg sec={3} />
      </div>
    </div>
  );
};

export default NotFound;