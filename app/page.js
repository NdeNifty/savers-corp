import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Saver's Corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600">Saver's Corp!</a>
        </h1>

        <p className="mt-3 text-2xl">
          Join us in saving lives through blood donation.
        </p>

        <div className="mt-6">
          <Link href="/donate">
            <span className="px-6 py-3 m-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out">
              Donate Blood
            </span>
          </Link>
          <Link href="/request">
            <span className="px-6 py-3 m-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out">
              Request Donation
            </span>
          </Link>
        </div>
      </main>

      
    </div>
  );
}
