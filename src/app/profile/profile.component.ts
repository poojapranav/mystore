import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenNameValidator } from '../forbiddon-name.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    // author=new FormControl();
    profileform=new FormGroup({
        name:new FormControl('itvedant',
        {validators:[Validators.required,Validators.minLength(3),
            forbiddenNameValidator(new RegExp(/$bob/,'i'))
        ]}),
        email:new FormControl('',{validators:[Validators.required,Validators.email]}),
        mobile:new FormControl()
    })
    submitprofile():void{
        console.log(this.profileform.value);
    }
    get namectrl():FormControl
    {
        return this.profileform.get('name') as FormControl
    }
    get emailctrl():FormControl
    {
        return this.profileform.get('email') as FormControl
    }
    constructor(private route:ActivatedRoute){}
    name!:string;
    age!:number;
    day!:number;
    ngOnInit():void{
        // this.route.queryParams.subscribe(params=>console.log(params))
        this.route.queryParams.subscribe(params=>{
        //   console.log("name:"+params['name'])
        //   console.log("age:"+params['age'])
        //   console.log("day:"+params['day'])
            this.name=params['name']
            this.age=params['age']
            this.day=params['day']
        })
    }
}
