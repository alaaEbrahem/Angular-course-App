import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { DBService } from 'src/app/db.service';

@Component({
  selector: 'my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit {
courses:string[]=['c#','java','python'];
FN:string="alaa";
isSelected:false;
constructor(private dbService:DBService) { }

  ngOnInit() {
    this.courses=this.dbService.getAll();
  }
  onKeyUp(value:string){
    alert(value);
  }

}
