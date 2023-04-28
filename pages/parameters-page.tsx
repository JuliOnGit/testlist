import ParameterList from '@/components/parameter-list';
import { Parameter } from '@/interfaces/parameter';
import { useState } from 'react';

export default function ParametersPage() {
  const [parameterList, setParameterList] = useState<Parameter[]>([
    {
      id: 1,
      name: 'first param',
      defaultValue: 'a default value',
      actualValue: 'another value'
    },
    {
      id: 2,
      name: 'next parameter',
      defaultValue: 'a value',
      actualValue: 'the same value'
    },
    {
      id: 3,
      name: 'third parameter',
      defaultValue: 'another value',
      actualValue: 'a different value'
    }
  ]);

  return (
    <>
      <h1>Parameter Page</h1>
      <ParameterList parameterList={parameterList}></ParameterList>
    </>
  );
}