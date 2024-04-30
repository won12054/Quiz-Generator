import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appChangeBg]'//**************134.00 */
})
export class ChangeBgDirective {

  @Input() isCorrect : Boolean = false; //**************134.00 */
   constructor(private el : ElementRef, private render : Renderer2) { }
  @HostListener('click', ['$event.target']) answer(btn: any){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','green');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');

    }else{
      this.render.setStyle(this.el.nativeElement,'background','#ff336E');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');
    }
  }
}