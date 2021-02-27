import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component implements OnInit {
  box = [1,2,3,4,5,6,7,8,9,10];
  numi:number;

  constructor() { }

  ngOnInit(): void {  
    
  }

}
