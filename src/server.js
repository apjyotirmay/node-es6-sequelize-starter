import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(process.env.PORT, () => {
  console.log(`server started on http://localhost:${process.env.PORT}`);
});
