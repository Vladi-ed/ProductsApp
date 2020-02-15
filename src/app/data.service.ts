import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from './Classes/product';

const EXAMPLE_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', description: 'description', price: 1234.2, creationDate: new Date()},
  {id: 2, name: 'Helium', description: 'description', price: 234.2, creationDate: new Date()},
  {id: 3, name: 'Lithium', description: 'description', price: 234.2, creationDate: new Date()},
  {id: 4, name: 'Beryllium', description: 'description', price: 333.2, creationDate: new Date()},
  {id: 5, name: 'Boron', description: 'description', price: 2244.2, creationDate: new Date()},
  {id: 6, name: 'Carbon', description: 'description', price: 22.2, creationDate: new Date()},
  {id: 7, name: 'Nitrogen', description: 'description', price: 5.4, creationDate: new Date()},
  {id: 8, name: 'Oxygen', description: 'description', price: 232.2, creationDate: new Date()},
  {id: 9, name: 'Fluorine', description: 'description', price: 232.2, creationDate: new Date()},
  {id: 10, name: 'Neon', description: 'description', price: 292.2, creationDate: new Date()},
  {id: 11, name: 'Sodium', description: 'description', price: 282.2, creationDate: new Date()},
  {id: 12, name: 'Magnesium', description: 'description', price: 72.2, creationDate: new Date()},
  {id: 13, name: 'Aluminum', description: 'description', price: 222.2, creationDate: new Date()},
  {id: 14, name: 'Silicon', description: 'description', price: 232.2, creationDate: new Date()},
  {id: 15, name: 'Phosphorus', description: 'description', price: 2442.2, creationDate: new Date()},
  {id: 16, name: 'Sulfur', description: 'description', price: 2222.2, creationDate: new Date()},
  {id: 17, name: 'Chlorine', description: 'description', price: 212.2, creationDate: new Date()},
  {id: 18, name: 'Argon', description: 'description', price: 92.2, creationDate: new Date()},
  {id: 19, name: 'Potassium', description: 'description', price: 922.2, creationDate: new Date()},
  {id: 20, name: 'Calcium', description: 'description', price: 922.9, creationDate: new Date()},
];


@Injectable({
  providedIn: 'root'
})
export class DataService {

  subject: BehaviorSubject<Product[]>;

  constructor() {
    this.subject = new BehaviorSubject(EXAMPLE_DATA);
  }
}
