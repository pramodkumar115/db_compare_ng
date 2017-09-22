import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-procedure-result',
  templateUrl: './procedure-result.component.html',
  styleUrls: ['./procedure-result.component.css']
})
export class ProcedureResultComponent implements OnInit {

  @Input() procedureResultList;
  procResultString: string;

  constructor() { }

  ngOnInit() {
    this.procResultString = '';
    if (this.procedureResultList != undefined && this.procedureResultList.length > 0) {
      for (var i = 0; i < this.procedureResultList.length; i++) {
        var proc = this.procedureResultList[i];
        var procResult = this.getProcedureResultString(proc);
        if (procResult != undefined && procResult != null && procResult != '') {
          this.procResultString = this.procResultString + procResult + "\n";
        }
      }
    }else{
      this.procResultString = "NO DIFFERENCE FOUND";
    }
    this.procResultString = this.procResultString.trim();
  }
  getProcedureResultString(proc) {
    var returnable = '';
    var status = proc.status;
    var returnable = "";
    if (status == "NOT_PRESENT_IN_DESTINATION") {
      returnable = returnable + proc.procedureName + " does not exist in destination.\n";
    }
    return returnable;
  }

}
