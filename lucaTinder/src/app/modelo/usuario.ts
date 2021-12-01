export class Usuario {
    private id:string;
    private name:string;
    private email: string;
    private age: number;
    private descripcion: string;
    private gustos: string[];
    private prefGen: string;
    private foto: string

    constructor(id: string, name:string, email:string,age:number, descripcion:string, gustos: string[], prefGen: string, foto: string){
        this.id=id;
        this.name=name;
        this.email = email;
        this.age=age;
        this.descripcion = descripcion;
        this.gustos = gustos;
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

    public setGustos(gusto:string){
        this.gustos.push(gusto)
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
