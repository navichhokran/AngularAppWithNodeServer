import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {


  @Input('appInputFormat') format: string;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {

    const val: string = this.el.nativeElement.value;
    switch (this.format) {
      case 'phone':
         this.toUSPhoneFormat(val);
        break;

      case 'name':
        this.toUpperCase(val);
       break;

      default:
        break;
    }
    if (this.format === 'phone') {

    }
  }
  private toUSPhoneFormat(val: string) {

    if (val.length === 10) {
       this.el.nativeElement.value = '(' + val.substr(0, 3) + ')' + val.substr(3, 3) + '-' + val.substr(6, 4);
    } else {
      console.log('enter valid US number');
    }
  }

  private toUpperCase(val: string) {
    this.el.nativeElement.value = val.toUpperCase();
  }

}
