import express from "express";
import cardapioController from "./controllers/cardapioController.js"
import clientesController from "./controllers/clientesController.js"
import pedidosController from "./controllers/pedidosController.js"
import fornecedoresController from "./controllers/fornecedoresController.js"
import reservasController from "./controllers/reservasController.js"
const app = express();
const port = 3000;

app.use(express.json());

cardapioController(app)
pedidosController(app)
clientesController(app)
fornecedoresController(app)
reservasController(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})