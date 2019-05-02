import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'molecules-card',
  template: `
    <div class="card">
      <atoms-img [imgSrc]="imgSrc" [imgClass]="imgClass" [imgAlt]="imgAlt"></atoms-img>
      <div class="card-body">
        <atoms-heading [headingClass]="headingClass" [headingText]="headingText"></atoms-heading>
        <atoms-text-paragraph [textClass]="textClass" [text]="text"></atoms-text-paragraph>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MoleculesCardComponent {
  @Input()
  imgSrc: string = 'https://via.placeholder.com/286x180';

  @Input()
  imgClass: string = 'card-img-top';

  @Input()
  imgAlt: string = 'Card image';

  @Input()
  headingClass: string = 'h5 card-title';

  @Input()
  headingText: string = 'Card title';

  @Input()
  textClass: string = 'card-text';

  @Input()
  text: string = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
}