import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-result',
  templateUrl: './data-result.component.html',
  styleUrls: ['./data-result.component.css']
})
export class DataResultComponent implements OnInit {

@Input() dataResult;
  constructor() { }

  ngOnInit() {
  }

}
