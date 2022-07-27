import express from "express";

const app = express();
const port = 3000;

app.use(express.json());


//teste de branch









app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})