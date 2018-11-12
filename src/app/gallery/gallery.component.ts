import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  selectedImage;
  datasource;

  constructor() {
  }

  ngOnInit() {
    this.datasource = [
      {'url': 'https://s3.us-east-2.amazonaws.com/baby-book-gallery/Sia+2018-11-06+at+1.58.15+PM.jpeg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'
      },
      {'url': 'https://s3.us-east-2.amazonaws.com/baby-book-gallery/Sia+2018-11-12+at+1.35.38+PM.jpeg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'}
    ];

  }

  setSelectedImage(image) {
    this.selectedImage = image;
  }

  navigate(forward) {
    const index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.datasource.length) {
      this.selectedImage = this.datasource[index];
    }
  }

}
