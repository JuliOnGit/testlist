import TestCasesList from '@/components/testcases-list';
import fetcher from '@/lib/fetcher';
import useSwr from 'swr';

export default function TestSuitePage() {
  const { data } = useSwr('/api/parameter', fetcher);

  return (
    <>
      <h1>TestSuite Page</h1>
      <TestCasesList testCases={data || []}></TestCasesList>
    </>
  );
}