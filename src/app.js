import express from "express";
import cardapioController from "./controllers/cardapioController.js"
import clientesController from "./controllers/clientesController.js"
import pedidosController from "./controllers/pedidosController.js"
import fornecedoresController from "./controllers/fornecedoresController.js"
<<<<<<< HEAD

=======
import reservasController from "./controllers/reservasController.js"
>>>>>>> 71e50e33b49937444bbe0062ee058269d84879ea
const app = express();
const port = 3000;

app.use(express.json());

cardapioController(app)
pedidosController(app)
clientesController(app)
fornecedoresController(app)
<<<<<<< HEAD
=======
reservasController(app)
>>>>>>> 71e50e33b49937444bbe0062ee058269d84879ea

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})