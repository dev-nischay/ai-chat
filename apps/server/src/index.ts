import express from "express";
import { error } from "node:console";
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(error);

app.listen(port, () => {
  console.log(`server running at port:${port}`);
});
