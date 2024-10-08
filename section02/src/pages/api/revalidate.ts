import { NextApiRequest, NextApiResponse } from 'next';

// ISR 랜더링
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // index 경로를 재렌더링
  try {
    await res.revalidate('/');
    return res.json({ revalidate: true });
  } catch (e) {
    res.status(500).send('Revalidation Failed');
  }
}
