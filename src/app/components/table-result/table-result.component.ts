import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.css']
})
export class TableResultComponent implements OnInit {

  @Input() tableResultList;
  tableResultString: string;
  constructor() { }

  ngOnInit() {
    this.tableResultString = '';
    if (this.tableResultList != undefined && this.tableResultList.length > 0) {
      for (var i = 0; i < this.tableResultList.length; i++) {
        var table = this.tableResultList[i];
        var tableResult = this.getTableResultString(table);
        if (tableResult != undefined && tableResult != null && tableResult != '') {
          this.tableResultString = this.tableResultString + tableResult + "\n";
        }
      }
    }else{
      this.tableResultString = "NO DIFFERENCE FOUND";
    }

    this.tableResultString = this.tableResultString.trim();
  }
  getTableResultString(table) {
    var status = table.status;
    var returnable = "";
    if (status == "NOT_PRESENT_IN_DESTINATION") {
      returnable = returnable + "Table Name: " + table.tableName + " does not exist in destination.\n";
    } else {
      returnable = returnable + "Table Name: " + table.tableName + "\n";
    }
    if (status.indexOf("CONSTRAINT") != -1) {
      var constraintsReturnable = "";
      for (var i = 0; i < table.constraintResults.length; i++) {
        var con = table.constraintResults[i];
        if (con.status == "CONSTRAINT_NOT_PRESENT") {
          constraintsReturnable = constraintsReturnable + "Constraint: " + con.constraintName + " does not exist in destination. \n";
        }
      }
      returnable = returnable + constraintsReturnable;
    }
    if (status.indexOf("INDEX") != -1) {
      var indexReturnable = "";
      for (var i = 0; i < table.indexResults.length; i++) {
        var index = table.indexResults[i];
        if (index.status == "INDEX_NOT_PRESENT") {
          indexReturnable = indexReturnable + "Index: " + index.indexName + " does not exist in destination. \n";
        }
      }
      returnable = returnable + indexReturnable;
    }

    if (status.indexOf("COLUMN") != -1) {
      var columnReturnable = "";
      for (var i = 0; i < table.columnResults.length; i++) {
        var column = table.columnResults[i];
        if (column.status == "COLUMN_NOT_PRESENT") {
          columnReturnable = columnReturnable + "Column: " + column.columnName + " does not exist in destination. \n";
        }
        if (column.status.indexOf("DATATYPE_MISMATCH") != -1) {
          columnReturnable = columnReturnable + "Column: " + column.columnName + " - Datatype mismatch: " + column.compareMessage + ". \n";
        }
        if (column.status.indexOf("NULLABLE_MISMATCH") != -1) {
          columnReturnable = columnReturnable + "Column: " + column.columnName + " - Nullable mismatch: " + column.compareMessage + ". \n";
        }
        if (column.status.indexOf("DATALENGTH_MISMATCH") != -1) {
          columnReturnable = columnReturnable + "Column: " + column.columnName + " - Datalength mismatch: " + column.compareMessage + ". \n";
        }
      }
      returnable = returnable + columnReturnable;
    }
    return returnable;
  }
}
