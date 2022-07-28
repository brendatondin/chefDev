const autenticacao = (app)=>{
    app.use((req, res, next)=>{
        if(req.method !== "GET"){
            if(req.headers.usertype === "maitre"){
                next()
            }else{
                res.json({"erro" : "Usuario nao permitido"})
            }
        }else{
            next()
        }
    })

}

export default autenticacao