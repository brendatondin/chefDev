const Validacoes = {

    _validaGet : async (contato, callback)=>{
        const cliente = await callback(contato)
        if(cliente === undefined){
            throw new Error (`Aviso: ${contato} não encontrado!`)
        }else{
            return cliente
        }
    },

    _ValidaDeleta : async (id, callback)=>{
        const cliente = await callback(id)
        if(cliente === undefined){
            throw new Error(`Aviso: ${id} não deletado!`)
        }else{
            return cliente
        }
    },

    _ValidaAtualiza : async (id, callback, novoBody)=>{
        const cliente = await callback(id, novoBody)
            if(cliente === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
                return cliente
            }
        
    },

    _ValidaReqBody : async (body)=>{
        if(body.nome && body.email && body.contato){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    },

    _ValidaReqBodyReservas : async (body)=>{
        if(body.nomeCliente && body.data && body.hora && body.lugares && body.mesa){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    }

}

export default Validacoes