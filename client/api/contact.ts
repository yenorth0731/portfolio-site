// contact.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // フォームデータをコンソールに出力
      console.log('Received form data:', { name, email, message });

      // レスポンスを返す
      res.status(200).json({ message: 'フォームデータを受信しました' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'フォームデータの処理中にエラーが発生しました' });
    }
  } else {
    res.status(405).json({ message: 'メソッドが許可されていません' });
  }
}
