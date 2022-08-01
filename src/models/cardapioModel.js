import CardapioDao from "../DAO/cardapioDAO.js"


const CardapioModel = {

    pegaCardapio : async ()=>{
        return await CardapioDao.pegaCardapio()
    },
    pegaUmCodigo : async (codigo)=>{
        return await CardapioDao.pegaUmCodigo(codigo)
    },
    inserePrato :  async(cardapio)=>{
        return await CardapioDao.pegaUmPrato(cardapio)
    },
    DeletaPrato :  async(codigo)=>{
        return await CardapioDao.deletaPrato(codigo)
    },
}
export default CardapioModel