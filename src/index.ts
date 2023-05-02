import express, { Request, Response } from 'express';

const app = express();
const port = 30000;

app.post('/ping', (req: Request, res: Response) => {
  const { message } = req.query;
  res.json({
    echo: `https://postman-echo.com/get?message=${message}`,
    timestamp: Date.now(),
    env: process.env.NODE_ENV,
    version: process.env.npm_package_version,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
