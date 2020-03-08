import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {
  @Input('format') fromat;
  constructor(private ref: ElementRef) { }
  @HostListener('focus')
  onFocus() {

  }
  @HostListener('blur')
  onBlur() {
    let getValue: string = this.ref.nativeElement.value;
    if (this.fromat == "upperCase")
      this.ref.nativeElement.value = getValue.toUpperCase();
    else
      this.ref.nativeElement.value = getValue.toLowerCase();
  }
}
