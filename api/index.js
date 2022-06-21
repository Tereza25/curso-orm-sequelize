import express from "express";
import fs from "fs";
import dotenv from 'dotenv';
import Pool from "pg";
const { Client } = Pool

dotenv.config();

const PORT = 3000;

const app = express();

app.use(express.json());

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});

app.get("/teste", (req, res) =>
  res.status(200).send({ messagem: "boas vindas à API" })
);

app.listen(PORT, () => console.log(`servidor está rodando na porta ${PORT}`));