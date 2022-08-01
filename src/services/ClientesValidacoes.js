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
<<<<<<< HEAD:src/services/Validacoes.js

    _ValidaDeleta : async (id, callback)=>{
        const cliente = await callback(id)
        if(cliente === undefined){
            throw new Error(`Aviso: ${id} não deletado!`)
=======
    
    _validaPostClientes : async (cliente, callback)=>{
        if(cliente.nome.length < 1 || cliente.email.length < 0 || cliente.contato.length < 0 ){
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
>>>>>>> 43c83ec35f2dfe52016ce5c74e784120377dfd25:src/services/ClientesValidacoes.js
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
<<<<<<< HEAD:src/services/Validacoes.js

    _ValidaReqBodyReservas : async (body)=>{
        if(body.nomeCliente && body.data && body.hora && body.lugares && body.mesa){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    }
=======
>>>>>>> 43c83ec35f2dfe52016ce5c74e784120377dfd25:src/services/ClientesValidacoes.js

}

export default Validacoes