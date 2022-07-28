import express from "express";
import cardapioController from "./controllers/cardapioController.js"
import clientesController from "./controllers/clientesController.js"
import pedidosController from "./controllers/pedidosController.js";

const app = express();
const port = 3000;

app.use(express.json());

cardapioController(app)
pedidosController(app)
clientesController(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})