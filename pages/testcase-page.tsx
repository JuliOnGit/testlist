import ParameterList from '@/components/parameter-list';
import fetcher from '@/lib/fetcher';
import Link from 'next/link';
import useSwr from 'swr';

export default function TestCasePage() {
  const { data } = useSwr('/api/parameters', fetcher);

  return (
    <>
      <h1>TestCase Page</h1>
      <div className='shadow-sm overflow-hidden w-4/5'>
        <ParameterList parameterList={data || []}></ParameterList>
      </div>
      <Link href={'/'}>Navigate to start</Link>
    </>
  );
}
