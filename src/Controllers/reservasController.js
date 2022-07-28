const reservasController = (app) => {
    
    app.get('/reservas', (req, res) => {
        res.send('get foi')
    })

    app.get('/users/:nome', (req, res) =>
    res.send('get por nome') 
);

    app.post('/reservas', (req, res) => {
        const body = req.body
        res.json({"reservas" : body})
    })

}

export default reservasController