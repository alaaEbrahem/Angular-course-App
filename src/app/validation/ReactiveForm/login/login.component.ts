import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {TextValidator} from "../../../Validators/notSpaceAlloed.validation";
import {UniquenessValidator} from "../../../Validators/Uniquness.calidation";

@Component({
  selector: 'app-Reactive-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class ReactiveLoginComponent implements OnInit {
  
form=new FormGroup({
email:new FormControl('',[Validators.required],UniquenessValidator.Uniquness),
password:new FormControl('',[Validators.required,TextValidator.noSpaceAllowed]),
});
  constructor() { }

  ngOnInit() {
  }
  onChange(form:FormGroup){
    console.log(form.get('password'));
  }

}
