import express from "express";
import reservasController from "./controllers/reservasController.js" 
import autenticacao from './middleware/autenticacaoReservas.js'

const app = express();
const port = 3000;

app.use(express.json());

autenticacao(app) 

reservasController(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})