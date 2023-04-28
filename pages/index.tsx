import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Here is the ParameterView</h1>
      <Link href={'/parameters-page'}>Go to parameter view</Link>
    </main>
  );
}