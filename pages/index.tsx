import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen'>
      <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <h1 className='text-xl font-smibold'>Here is the Home-Page</h1>
        <Link href={'/testcase-page'}>Go to testcase page</Link>
      </main>
    </div>
  );
}