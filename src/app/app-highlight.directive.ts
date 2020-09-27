import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appAppHighlight]",
})
export class AppHighlightDirective {
  constructor(private el: ElementRef) {
    this.highlight(this.highlightColor || this.defaultColor || "red");
  }
  @Input() defaultColor: string;
  @Input("myHighlight") highlightColor: string;

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
