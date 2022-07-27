





const pedidosController = (app) => {

    app.get('/pedidos', async (req, res) => {
        try {
            const todosPedidos = await PedidosModel.pegaPedidos()
            res.json({
                "pedidos": todosPedidos,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/pedido/comanda/:comanda', async (req, res) => {
        const comanda = req.params.comanda
        try {
            const pedido = await PedidosModel.pegaUmPedidoComanda(comanda)
            res.json({
                "pedido": pedido,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    
}


export default pedidosController