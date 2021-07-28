import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Returns total of array of numbers
   * @param {array} array
   */
  getSDSeperatedByComma(array) {
    if (array && Array.isArray(array)) {
      const n = array.length;
      const mean = array.map(x => +x.trim()).reduce((a, b) => a + b) / n;
      const standardDeviation = Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
      return this.roundToHundredth(standardDeviation);
    }
    return 0;
  }

  /**
   * Round to nearest hundred
   * @param {number} value
   */
  roundToHundredth(value) {
    return Number(value.toFixed(2));
  }
}
