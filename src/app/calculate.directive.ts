import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { UtilsService } from './utils.service';

@Directive({
  selector: '[appCalculate]'
})
export class CalculateDirective {

  @Input() input: any;
  @Output() showText: EventEmitter<any> = new EventEmitter();
  constructor(private utils: UtilsService) { }

  @HostListener('click') standardDeviation() {
    const getNumbers = this.input && this.input.split(',');
    const calculatedText = this.utils.getSDSeperatedByComma(getNumbers);
    this.showText.emit(calculatedText);
  }
}
