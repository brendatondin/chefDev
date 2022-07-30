import CardapioDao from "../DAO/cardapioDAO.js"


const CardapioModel = {

    pegaCardapio : async ()=>{
        return await CardapioDao.pegaCardapio()
    },
}

export default CardapioModel