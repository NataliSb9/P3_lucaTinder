export class Usuario {
    private id:string;
    private name:string;
    private genero: string;
    private email: string;
    private age: number;
    private descripcion: string;
    private gustos: string[];
    private arrLike: string[];
    private arrDislike: string[];
    private prefGen: string;
    private foto: string

    constructor(id: string,name:string ,genero:string, email:string,age:number, descripcion:string, gustos: string[],arrLike:string[],arrDislike:string[], prefGen: string, foto: string){
        this.id=id;
        this.name=name;
        this.genero =genero;
        this.email = email;
        this.age=age;
        this.descripcion = descripcion;
        this.gustos = gustos;
        this.arrLike = arrLike;
        this.arrDislike = arrDislike;
        this.prefGen = prefGen;
        this.foto =foto;
    }

    public getId():string{
        return this.id;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string){
        this.name = name;
    }

    public getGenero():string{
        return this.genero;
    }

    public getEmail():string{
        return this.email;
    }

    public getAge():number{
        return this.age;
    }

    public getDescripcion():string{
        return this.descripcion;
    }

    public setDescripcion(descripcion:string){
        this.descripcion = descripcion;
    }

    public getGustos():string []{
        return this.gustos;
    }

    public getArrLike(): string[]{
        return this.arrLike;
    }

    public setArrLike(candidatesLikesYou:string){
        this.arrLike.push(candidatesLikesYou);
    }

    public getArrDislike():string[]{
        return this.arrDislike
    } 

    public setArrDislike(candidatesDonTLikesYou:string){
        this.arrDislike.push(candidatesDonTLikesYou);
    }

    public setGustos(aficiones:string){
        this.gustos.push(aficiones)
    }

    public getPrefGen():string{
        return this.prefGen;
    }

    public getFoto():string{
        return this.foto;
    }

    public setFoto(foto:string){
        this.foto = foto;
    }

}
