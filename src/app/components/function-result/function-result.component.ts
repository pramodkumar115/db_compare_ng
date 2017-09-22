import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-function-result',
  templateUrl: './function-result.component.html',
  styleUrls: ['./function-result.component.css']
})
export class FunctionResultComponent implements OnInit {

  @Input() functionResultList;
  functionResultString: string;
  constructor() { }

  ngOnInit() {
    this.functionResultString = '';
    if (this.functionResultList != undefined && this.functionResultList.length > 0) {
      for (var i = 0; i < this.functionResultList.length; i++) {
        var fn = this.functionResultList[i];
        var functionResult = this.getFunctionResultString(fn);
        if (functionResult != undefined && functionResult != null && functionResult != '') {
          this.functionResultString = this.functionResultString + functionResult + "\n";
        }
      }
    } else {
      this.functionResultString = "NO DIFFERENCE FOUND";
    }

    this.functionResultString = this.functionResultString.trim();
  }
  getFunctionResultString(fn) {
    var returnable = '';
    var status = fn.status;
    var returnable = "";
    if (status == "NOT_PRESENT_IN_DESTINATION") {
      returnable = returnable + fn.functionName + " does not exist in destination.\n";
    }
    return returnable;
  }
}
