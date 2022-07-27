import express from "express";
import cardapioController from "./Controller/controller.js"

const app = express();
const port = 3000;

app.use(express.json());

cardapioController(app)










app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})