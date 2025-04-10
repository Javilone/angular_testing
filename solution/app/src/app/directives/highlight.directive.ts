import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input()
  color!: string;
  private defaultColor = 'lightblue';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color || this.defaultColor);
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

/* <li appHighlight color="blue">List Item</li> <-- Ejemplo de uso de directa en el html */
