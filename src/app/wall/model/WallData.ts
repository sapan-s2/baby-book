import {WallItems} from './WallItems';

export class WallData {

  items: [WallItems];

  getItems(): [WallItems] {
    return this.items;
  }

  setItems(value: [WallItems]) {
    this.items = value;
  }

}
