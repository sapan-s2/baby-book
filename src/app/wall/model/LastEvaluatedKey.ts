import {WallItems} from './WallItems';

export class LastEvaluatedKey {

  private year: number;
  private epoch: string


  constructor(year: number, epoch: string) {
    this.year = year;
    this.epoch = epoch;
  }

  getYear(): number {
    return this._year;
  }

  setYear(value: number) {
    this._year = value;
  }

  getEpoch(): string {
    return this._epoch;
  }

  setEpoch(value: string) {
    this._epoch = value;
  }



}

