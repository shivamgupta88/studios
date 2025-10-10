import Link from 'next/link';
import Head from 'next/head';
import { Home, RefreshCw } from 'lucide-react';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | agency.texttoreels.in</title>
        <meta name="description" content="We're experiencing technical difficulties. Our team is working to fix the issue. Please try again later." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 500 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            500
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Server Error
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Something went wrong on our end. We&apos;re working to fix it. Please try again later.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-200"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Retry</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 opacity-20">
          <svg
            className="w-full h-48 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
