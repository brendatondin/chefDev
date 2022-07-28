import express from "express";
import cardapioController from "./Controller/controller.js"
import pedidosController from "./controllers/pedidosController.js";

const app = express();
const port = 3000;

app.use(express.json());

cardapioController(app)
pedidosController(app)









app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})