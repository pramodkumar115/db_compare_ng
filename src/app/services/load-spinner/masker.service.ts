import { Injectable } from '@angular/core';

@Injectable()
export class MaskerService {

  constructor() { }

  show(){
    var div = document.createElement("div");
    div.id = "spinner";
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.position = "fixed";
    div.style.background = "rgba(167, 166, 166, 0.17)";
    div.style.top = "0";
    div.style.left = "0";
    div.style.zIndex = "9999";

    //div.appendChild(img);
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div);
  }
  hide(){
    if(document.getElementById("spinner")!=undefined){
      var body = document.getElementsByTagName('body')[0];
      body.removeChild(document.getElementById("spinner"));
    }
  }
}
