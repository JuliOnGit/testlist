import { Parameter } from '@/interfaces/parameter';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Parameter[]>
) {
  const parameterList = [
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
  ];

  res.status(200).json(parameterList);
}