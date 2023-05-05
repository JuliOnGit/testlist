import ParameterList from '@/components/parameter-list';
import fetcher from '@/lib/fetcher';
import Link from 'next/link';
import useSwr from 'swr';

export default function TestCasePage() {
  const { data } = useSwr('/api/parameters', fetcher);

  return (
    <>
      <h1>TestCase Page</h1>
      <ParameterList parameterList={data || []}></ParameterList>
      <Link href={'/'}>Navigate to start</Link>
    </>
  );
}
