import express, { Request, Response } from 'express';

const app = express();
const port = 30000;

app.use(express.json());

app.post('/ping', (req: Request, res: Response) => {
  const { message } = req.body;

  // Call the Postman Echo service with the message parameter
  const postmanEchoUrl = `https://postman-echo.com/get?message=${message}`;
  fetch(postmanEchoUrl)
    .then((response) => response.json())
    .then((data) => {
      const pingResponse = {
        echo: data.args.message,
        timestamp: Math.floor(Date.now() / 1000),
        env: process.env.NODE_ENV,
        version: process.env.npm_package_version,
      };
      res.json(pingResponse);
    })
    .catch((error) => {
      console.error(`Error calling Postman Echo service: ${error}`);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
