import ParameterList from '@/components/parameter-list';
import useSwr from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ParametersPage() {
  const { data } = useSwr('/api/parameter', fetcher);

  return (
    <>
      <h1>Parameter Page</h1>
      <ParameterList parameterList={!data ? []: data}></ParameterList>
    </>
  );
}
