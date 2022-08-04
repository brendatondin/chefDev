import CardapioDao from "../DAO/DAOcardapio.js"


const CardapioModel = {

    pegaCardapio : async ()=>{
        return await CardapioDao.pegaCardapio()
    },
    pegaUmCodigo : async (codigo)=>{
        return await CardapioDao.pegaUmCodigo(codigo)
    },
    inserePrato :  async(cardapio)=>{
        return await CardapioDao.inserePrato(cardapio)
    },
    DeletaPrato :  async(codigo)=>{
        return await CardapioDao.DeletaPrato(codigo)
    },
    AtualizaPrato :  async(codigo, novoCardapio)=>{
        return await CardapioDao.AtualizaPrato(codigo, novoCardapio)
    }
}
export default CardapioModel