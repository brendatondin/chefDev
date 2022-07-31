import CardapioDao from "../DAO/cardapioDAO.js"


const CardapioModel = {

    pegaCardapio : async ()=>{
        return await CardapioDao.pegaCardapio()
    },
    pegaUmCodigo : async (codigo)=>{
        return await CardapioDao.pegaUmCodigo(codigo)
    }
}
export default CardapioModel