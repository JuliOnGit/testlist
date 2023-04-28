import Image from 'next/image'
import { Inter } from 'next/font/google'
import ParameterList from '@/components/parameter-list';
import ParameterView from '@/components/parameter-view';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Here is the ParameterView</h1>
      <ParameterView></ParameterView>
    </main>
  );
}