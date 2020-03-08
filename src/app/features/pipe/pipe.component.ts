import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  title:string="If no parameters are specified, the function rounds off to the nearest value using this";
employees={
  fullName:"alaa Eabrahim",
  hiringDATE:new Date(2015,5,1),
  salary:3000,
  rating:5.7
}
  constructor() { }

  ngOnInit() {
  }

}
