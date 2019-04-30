import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'atoms-link',
  template: `<a [href]="linkHref" class={{linkClass}} [title]="linkTitle" [target]="linkTarget" [download]="linkDownload">{{linkText}}</a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class AtomsLinkComponent {

  @Input()
  linkHref: string = "https://www.google.com/";

  @Input()
  linkTitle: string = "Google";

  @Input()
  linkTarget: string = "_blank";

  @Input()
  linkDownload: string = "indir";

  @Input()
  linkText: string = "Google";

  @Input()
  linkClass: string = "text-center";

}
