import { useRouteError, Link } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4 text-center">
      <div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Page not found or an error occurred.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
