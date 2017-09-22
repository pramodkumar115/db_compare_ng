import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-result',
  templateUrl: './package-result.component.html',
  styleUrls: ['./package-result.component.css']
})
export class PackageResultComponent implements OnInit {

  @Input() packageResultList;
  packageResultString: string;

  constructor() { }

  ngOnInit() {
    console.log();
    this.packageResultString = '';
    if (this.packageResultList != undefined && this.packageResultList.length > 0) {
      for (var i = 0; i < this.packageResultList.length; i++) {
        var pkg = this.packageResultList[i];
        var packageResult = this.getPackageResultString(pkg);
        if (packageResult != undefined && packageResult != null && packageResult != '') {
          this.packageResultString = this.packageResultString + packageResult + "\n";
        }
      }
    }else{
      this.packageResultString = "NO DIFFERENCE FOUND";
    }
    this.packageResultString = this.packageResultString.trim();
  }
  getPackageResultString(pkg) {
    var returnable = '';
    var status = pkg.status;
    var returnable = "";
    if (status == "NOT_PRESENT_IN_DESTINATION") {
      returnable = returnable + pkg.packageName + " does not exist in destination.\n";
    } else {
      if (pkg.itemsResult != undefined && pkg.itemsResult.length > 0) {
        var itemsReturnable = "";
        for (var i = 0; i < pkg.itemsResult.length; i++) {
          var item = pkg.itemsResult[i];
          if (item.status == "NOT_PRESENT_IN_DESTINATION") {
            itemsReturnable = itemsReturnable + "Component: " + item.procedureName + " does not exist in destination. \n";
          }
        }
        returnable = returnable + itemsReturnable;
      }
    }
    return returnable;
  }
}
