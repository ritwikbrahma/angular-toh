import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable()
export class InMemoryDataService implements InMemoryDbService{
createDb() {
  const heroes = [
    { id: 1 , name:'Mr. Ritwik'},
    { id: 2 , name:'Mr. Shreyas'},
    { id: 3 , name:'Mr. Modi'},
    { id: 4 , name:'Mr. Kohli'},
    { id: 5 , name:'Mr. Nehru'},
    { id: 6 , name:'Mr. Chand'},
    { id: 7 , name:'Mr. Khan'},
    { id: 8 , name:'Mr. Kumar'},
    { id: 9 , name:'Mr. Shyam'},
    { id: 10, name:'Mr. Mishra'},

  ];
  return {heroes};
}
constructor() { }


}
 


