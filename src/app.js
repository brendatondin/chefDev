import express from "express";
import reservasController from "./controllers/reservasController.js" 

const app = express();
const port = 3000;

app.use(express.json());

reservasController(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})