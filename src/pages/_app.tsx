import type { AppProps } from 'next/app'
import '@/styles/globals.css';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return(
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
          <header className="w-full max-w-md text-center">
              <h1 className="text-3xl font-bold mb-2">TU SmartPark</h1>
              <p className="text-gray-600 text-sm">Real-time Parking App</p>
          </header>
          <Component {...pageProps} />
          <footer className="text-gray-500 text-sm mt-6">Group 3</footer>
      </div>

    )
}