import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'atoms-img',
  template: `
    <img [src]="imgSrc" class="{{ imgClass }}" [alt]="imgAlt" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsImgComponent {
  @Input()
  imgSrc: string = 'https://via.placeholder.com/200';

  @Input()
  imgClass: string = 'img-fluid';

  @Input()
  imgAlt: string = 'Image alt';

  @Input()
  imgWidth: number = 30;

  @Input()
  imgHeight: number = 30;
}
