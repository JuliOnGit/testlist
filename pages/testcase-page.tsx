import ParameterList from '@/components/parameter-list';
import fetcher from '@/lib/fetcher';
import Link from 'next/link';
import useSwr from 'swr';

export default function TestCasePage() {
  const { data } = useSwr('/api/parameters', fetcher);

  return (
    <div className='min-h-screen'>
      <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <h1 className='text-xl font-semibold'>TestCase Page</h1>
        <div className='shadow-sm overflow-hidden w-4/5'>
          <ParameterList parameterList={data || []}></ParameterList>
        </div>
        <Link href={'/'}>Navigate to start</Link>
      </main>
    </div>
  );
}
