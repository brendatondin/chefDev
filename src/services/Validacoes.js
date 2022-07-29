const Validacoes = {

    _validaContato : async (contato, callback)=>{
        const cliente = await callback(contato)
        if(cliente === undefined){
            throw new Error (`contato: ${contato} não encontrado!`)
        }else{
            return cliente
        }
    }
}

export default Validacoes