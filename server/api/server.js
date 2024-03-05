const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Inquiryモデルをインポート
const { Inquiry } = prisma;

const express = require('express');
const cors = require('cors'); // ここでcorsモジュールをインポート

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());

// データ作成のエンドポイント
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    // Prismaを使用してデータベースにデータを作成
    const contact = await Inquiry.create({
      data: {
        name,
        email,
        message,
      },
    });

    res.status(201).json(contact);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});