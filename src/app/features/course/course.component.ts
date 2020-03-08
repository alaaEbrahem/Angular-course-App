import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseName: string = "java";
  image: string;
  colSpan: number = 3;
  isColored:boolean=false;
  peopleByCountry: any[] = [{
    country: 'EGYPT',
    names: [
      {
        name: 'ITSHARE'
      },
      {
        name: 'alaa Ebrahim'
      }
    ]
  },
  {
    country: 'Turkey',
    names: [
      {
        name: 'zeft'
      },
      {
        name: 'lolo Ebrahim'
      }
      , {
        name: 'mostafa'
      }
    ]
  }
  ];
  courses: object[] = [
    // { id: 1, "courseName": "java" },
    // { id: 2, "courseName": "c++" },
    // { id: 3, "courseName": "c#" },
    // { id: 4, "courseName": "python" },
  ];

  constructor() { }

  ngOnInit() {
  }
  onAdd() {
    this.courses.push({ id: this.courses.length + 1, courseName: "angular" });
  }
  trackByCourse(index, course) {
    return (course) ? course.id : undefined;
  }
  onRemove(event: Event, i: number) {
   // event.stopPropagation();
    this.courses.splice(i, 1);
  }

}
