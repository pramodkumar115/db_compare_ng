import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-database-result',
  templateUrl: './database-result.component.html',
  styleUrls: ['./database-result.component.css']
})
export class DatabaseResultComponent implements OnInit {

  @Input() databaseResult;
  showData:string;

  constructor() { 
    this.showData = 'schema';
  }

  ngOnInit() {
  }

  setSelectResult(type){
    console.log(type);
    this.showData = type;
  }
}
