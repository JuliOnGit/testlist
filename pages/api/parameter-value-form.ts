import { NextApiRequest, NextApiResponse } from 'next';

// TODO: Implement a call to the backend, actually sending the updated value to it.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;
  console.log('received a request :-)');
  console.log('body: ', body);
  console.log('parsed body: ', JSON.parse(body));
  
  const { updatedValue } = JSON.parse(body);
  
  res.status(200).json({ data: `updated new value '${updatedValue}'!` });
}