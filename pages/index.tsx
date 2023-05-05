import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Here is the Home-Page</h1>
      <Link href={'/testcase-page'}>Go to testcase page</Link>
    </main>
  );
}