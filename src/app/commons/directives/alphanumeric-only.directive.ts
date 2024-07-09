import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[alphabetNumericOnly]',
})
export class AlphabetNumericOnlyDirective {
  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const sanitized = input.value.replace(/[^0-9a-zA-Z ]*/g, '');

    input.value = sanitized;
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    input.value = '';
  }
}
