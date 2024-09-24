import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  // The color to use for highlighting, set via property binding
  @Input() appHighlight: string = '';

  constructor(private el: ElementRef) {}

  // Listen to mouseenter event to apply highlight
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }

  // Listen to mouseleave event to remove highlight
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
