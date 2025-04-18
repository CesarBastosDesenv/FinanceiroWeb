export class Ativo{
    public id : number ;
    public nomeAtivo : string;
    public nomeCompleto : string;

    constructor (data: any = {}){
        if (data == null || data == undefined ) { data = {}; }
        this.id = data.id;
        this.nomeAtivo = data.nomeAtivo;
        this.nomeCompleto = data.nomeCompleto;
    }
}