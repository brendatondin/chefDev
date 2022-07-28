import express from "express";
import cardapioController from "./Controller/controller.js"
import clientesController from "./Controller/clientesController.js"
import pedidosController from "./controllers/pedidosController.js";


const app = express();
const port = 3000;

app.use(express.json());


cardapioController(app)
pedidosController(app)




cardapioController(app)
clientesController(app)





app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})