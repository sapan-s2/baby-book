import {WallItems} from './WallItems';

export class LastEvaluatedKey {

  private year: number;
  private epoch: string


  constructor(year: number, epoch: string) {
    this.year = year;
    this.epoch = epoch;
  }

  getYear(): number {
    return this.year;
  }

  setYear(value: number) {
    this.year = value;
  }

  getEpoch(): string {
    return this.epoch;
  }

  setEpoch(value: string) {
    this.epoch = value;
  }



}

