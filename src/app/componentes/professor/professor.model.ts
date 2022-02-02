import { Imagem } from "../imagem/imagem.model";

export interface Professor {
    _id?:number,
    nome: String,
    nick: String, 
    senha: String, 
    status: Boolean,
    imagens: Imagem []
}
