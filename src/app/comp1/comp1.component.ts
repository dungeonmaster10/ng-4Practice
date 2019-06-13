import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  base64textString;
  constructor() { }

  ngOnInit() {
  }

  getEvt(evt) {
    const file = evt.target.files[0];
    console.log(evt.target.files[0]);
    const reader = new FileReader();

    reader.onload = this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
    console.log(reader);
  }
  _handleReaderLoaded(readerEvt) {
    console.log(readerEvt);
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString), typeof (this.base64textString));
  }
}
