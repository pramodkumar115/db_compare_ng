import { Component, OnInit, Input } from '@angular/core';

import{DBSelection} from "../../models/db-selection";

import{DBConfig} from "../../models/db-config";

@Component({
  selector: 'app-db-panel',
  templateUrl: './db-panel.component.html',
  styleUrls: ['./db-panel.component.css']
})
export class DbPanelComponent implements OnInit {

  @Input() dbConfigs: DBConfig[];
  @Input() database: DBSelection;
  @Input() title: string;
  showPassword: boolean;

  constructor() { }

  ngOnInit() {
  }

}
