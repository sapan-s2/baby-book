import {WallItems} from './WallItems';

export class LastEvaluatedKey {

  private _year: number;
  private _epoch: string


  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get epoch(): string {
    return this._epoch;
  }

  set epoch(value: string) {
    this._epoch = value;
  }
}

