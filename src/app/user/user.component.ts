import { Component, OnInit } from '@angular/core';
import { USer } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    uname:string;
    gender:string;
    dob:string;
    address:string;
    contact:number;
    email:string;
    flag:boolean;
    nuser:USer;
  constructor() { }

  ngOnInit(): void {

  }

  display(){
   let ob=new USer(this.uname,this.gender,this.dob,this.address,this.contact,this.email);
   console.log(ob);
   this.nuser=ob;
   
   /*this.ob.uname=this.uname;
   this.ob.gender=this.gender;
   this.ob.dob=this.dob;
   this.ob.address=this.address;
   this.ob.contact=this.contact;
   this.ob.email=this.email;*/
    this.flag=true;
  }

  hide(){
    this.uname="";
    this.gender="";
    this.dob="";
    this.address="";
    this.contact=0;
    this.email="";
    this.flag=false;
  }
}
