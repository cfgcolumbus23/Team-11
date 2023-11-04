"use client";
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="assessment"
          className="text-black group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Assessment{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Fill out a form for a student to calculate relevant scores.
          </p>
        </Link>

        <Link
          href="students"
          className="text-black group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Student Registry{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            View the students in your class
          </p>
        </Link>

        <Link
          href="contact"
          className="text-black group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Send message to parent for student
          </p>
        </Link>
      </div>
    </main>
  )
}
