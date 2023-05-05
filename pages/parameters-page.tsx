import ParameterList from '@/components/parameter-list';
import fetcher from '@/lib/fetcher';
import Link from 'next/link';
import useSwr from 'swr';

export default function ParametersPage() {
  const { data } = useSwr('/api/parameter', fetcher);

  return (
    <>
      <h1>Parameter Page</h1>
      <ParameterList parameterList={!data ? []: data}></ParameterList>
      <Link href={'/'}>Navigate back</Link>
    </>
  );
}
