import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor() { }
  getAll(){
    return ['python','c#','java'];
  }
}
