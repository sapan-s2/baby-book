import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit, OnChanges {

  @Input()
  text;
  @Input()
  maxLength = 100;
  showToggleButton = false;

  currentText: string;

  public isCollapsed = true;

  constructor(// private elementRef: ElementRef
  ) {

  }

  ngOnInit() {
    this.determineView();
  }

  ngOnChanges() {
    if (!this.validateSource(this.text)) {
      // throw 'Source must be a string.';
      console.error('Source must be a string.');
    } else {
      this.determineView();
    }
  }

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  determineView() {

    if (this.text.length > this.maxLength) {
      this.showToggleButton = true;
    }

    if (this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      return;
    }

    if (this.isCollapsed === true) {
      this.currentText = this.text.substring(0, this.maxLength) + '...';
    } else if (this.isCollapsed === false) {
      this.currentText = this.text;
    }

  }


  validateSource(s) {
    if (typeof s !== 'string') {
      return false;
    } else {
      return true;
    }
  }

}
