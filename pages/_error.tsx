import { NextPageContext } from 'next';
import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Status Code */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          {statusCode ? `Error ${statusCode}` : 'An Error Occurred'}
        </h1>

        {/* Message */}
        <p className="text-xl text-gray-600 mb-8">
          {statusCode === 404
            ? "The page you're looking for doesn't exist."
            : statusCode === 500
            ? 'Internal server error occurred.'
            : 'An unexpected error occurred. Please try again.'}
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <Home className="w-5 h-5" />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
