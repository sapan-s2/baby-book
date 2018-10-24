import {WallItems} from './WallItems';

export class WallData {

  private data: Data;


  getData(): Data {
    return this.data;
  }

  setData(value: Data) {
    this.data = value;
  }
}


export class Data {

  Items: [WallItems];

  getItems(): [WallItems] {
    return this.Items;
  }

  setItems(value: [WallItems]) {
    this.Items = value;
  }

}
