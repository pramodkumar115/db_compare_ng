import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sequence-result',
  templateUrl: './sequence-result.component.html',
  styleUrls: ['./sequence-result.component.css']
})
export class SequenceResultComponent implements OnInit {
  @Input() sequenceResultList;
  sequenceResultString: string;
  constructor() { }

  ngOnInit() {
    this.sequenceResultString = '';
    if (this.sequenceResultList) {
      for (var i = 0; i < this.sequenceResultList.length; i++) {
        var seq = this.sequenceResultList[i];
        var seqResult = this.getSequenceResultString(seq);
        if (seqResult != undefined && seqResult != null && seqResult != '') {
          this.sequenceResultString = this.sequenceResultString + seqResult + "\n";
        }
      }
    }else{
      this.sequenceResultString = "NO DIFFERENCE FOUND";
    }
    this.sequenceResultString = this.sequenceResultString.trim();
  }
  getSequenceResultString(seq) {
    var returnable = '';
    var status = seq.status;
    var returnable = "";
    if (status == "NOT_PRESENT_IN_DESTINATION") {
      returnable = returnable + seq.sequenceName + " does not exist in destination.\n";
    }
    return returnable;
  }
}
