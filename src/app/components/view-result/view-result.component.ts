import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
  @Input() viewResultList;
  viewResultString: string;
  constructor() { }

  ngOnInit() {
    this.viewResultString = '';
    for (var i = 0; i < this.viewResultList.length; i++) {
      var view = this.viewResultList[i];
      var viewResult = this.getViewResultString(view);
      if (viewResult != undefined && viewResult != null && viewResult != '') {
        this.viewResultString = this.viewResultString + viewResult + "\n";
      }
    }
    this.viewResultString = this.viewResultString.trim();
  }
  getViewResultString(view) {
    var returnable = '';
    var status = view.status;
    var returnable = "";
    if (status == "NOT_PRESENT_IN_DESTINATION") {
      returnable = returnable + view.viewName + " does not exist in destination.\n";
    }
    return returnable;
  }
}