import express from "express";
import cardapioController from "./controllers/cardapioController.js"
import clientesController from "./controllers/clientesController.js"
import pedidosController from "./controllers/pedidosController.js"
import fornecedoresController from "./controllers/fornecedoresController.js"
import reservasController from "./controllers/reservasController.js"
import funcionariosController from "./controllers/funcionariosController.js"
import autenticacao from './middleware/autenticacao.js'


const app = express();
const port = 3000;



app.use(express.json());
autenticacao(app)
cardapioController(app)
pedidosController(app)
clientesController(app)
fornecedoresController(app)
reservasController(app)
funcionariosController(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})