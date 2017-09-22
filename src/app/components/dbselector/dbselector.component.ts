import { Component, OnInit } from '@angular/core';
import { DbConfigService } from '../../services/db-config/db-config.service';
import { DbCompareService } from '../../services/db-compare/db-compare.service';
import { DBConfig } from '../../models/db-config';
import { DBSelection } from '../../models/db-selection';

import { DbPanelComponent } from '../db-panel/db-panel.component';
import { SchemaResultComponent } from '../schema-result/schema-result.component';

@Component({
  selector: 'app-dbselector',
  templateUrl: './dbselector.component.html',
  styleUrls: ['./dbselector.component.css'],
  providers: [ DbConfigService, DbCompareService]
})
export class DbselectorComponent implements OnInit {
  public dbConfigs = new Array<DBConfig>();
  public dbDetails;
  public databaseResult;

  fromDB = new DBSelection();
  toDB = new DBSelection();
  fromDBTitle:string;
  toDBTitle:string;
  loading: boolean;

  constructor(private _dbConfigService: DbConfigService, private _dbCompareService: DbCompareService) { 
    this.dbDetails = {};
    this.fromDBTitle = "Source DB";
    this.toDBTitle = "Destination DB";
  }

  ngOnInit() {
    this._dbConfigService.getDBConfigurations().then(res => this.dbConfigs = res, error => alert(error));
  }

  getDBDifference(){
    if(this.fromDB.dbName == this.toDB.dbName){
      alert("To DB cannot be same as from DB");
      return;
    }
    if((this.fromDB.password == undefined || this.fromDB.password == '') || 
    (this.toDB.password == undefined || this.toDB.password == '') ){
      alert("Password cannot be empty");
      return;
    }
    for(var i = 0; i < this.dbConfigs.length; i++){
      var config = this.dbConfigs[i];
      if(this.fromDB.dbName == config.dbCustomName){
        this.dbDetails.sourceConfig = config;
        this.dbDetails.sourceConfig.password = this.fromDB.password;
      }
      if(this.toDB.dbName == config.dbCustomName){
        this.dbDetails.destConfig = config;
        this.dbDetails.destConfig.password = this.toDB.password;
      }
    }
    var me = this;
    this.loading = true;
    this._dbCompareService.getDBCompareResult(this.dbDetails).then(function(response){
      console.log("Below is the response::");
      console.log(response);
      me.databaseResult = response;
      me.loading = false;
      //var 
    }, error => alert(error));
  }

  resetDBDiff(){
    this.fromDB=new DBSelection();
    this.toDB=new DBSelection();
  }
}