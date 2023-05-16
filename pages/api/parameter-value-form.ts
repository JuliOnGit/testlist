import { NextApiRequest, NextApiResponse } from 'next';

// TODO: Implement a call to the backend, actually sending the updated value to it.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = JSON.parse(req.body);
  const { updatedValue } = body;

  res.status(200).json({ data: updatedValue });
}