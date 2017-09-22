import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schema-result',
  templateUrl: './schema-result.component.html',
  styleUrls: ['./schema-result.component.css']
})
export class SchemaResultComponent implements OnInit {

result: string;
 @Input() schemaResult;
  constructor() { 
    this.result = 'table';
  }

  ngOnInit() {
  }

}
