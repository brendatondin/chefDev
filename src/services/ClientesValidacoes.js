import clientesDAO from "../DAO/clientesDAO.js" 

const Validacoes = {

    _validaGet : async (contato, callback)=>{
        const cliente = await callback(contato)
        if(cliente === undefined){
            throw new Error (`Aviso: ${contato} não encontrado!`)
        }else{
            return cliente
        }
    },
    _validaPostClientes : async (cliente, callback)=>{
        if(cliente.nome.length < 1 || cliente.email.length < 1 || cliente.contato.length < 1 ){
            throw new Error ("Aviso: preencha todos os campos")
        }else{
            const postPedidos = await callback(cliente)
            return cliente
        }
    },

    _ValidaDeleta : async (contato, callback)=>{
        const cliente = await clientesDAO.pegaUmClienteContato(contato)
        if(cliente == undefined){
            throw new Error(`Aviso: ${contato} não encontrado!`)
        }else{
            await callback(contato)
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

}

export default Validacoes