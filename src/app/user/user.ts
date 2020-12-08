export class USer{
    uname:string;
    gender:string;
    dob:string;
    address:string;
    contact:number;
    email:string;

    constructor(nm?:string,gen?:string,bd?:string,addr?:string,mob?:number,mail?:string){
        this.uname=nm;
        this.gender=gen;
        this.dob=bd;
        this.address=addr;
        this.contact=mob;
        this.email=mail;
    }
}