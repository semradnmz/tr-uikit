import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'molecules-footer',
  template: `
    <footer class="{{ footerClass }}">
      <div class="{{ footerContainerClass }}">
        <p class="float-right">
          <atoms-link hrefText="Back to top"></atoms-link>
        </p>
        <atoms-text-paragraph [text]="text"></atoms-text-paragraph>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MoleculesFooterComponent {
  @Input()
  footerClass: string = 'text-muted';

  @Input()
  footerContainerClass: string = 'container';

  @Input()
  text: string = 'Album example is &copy; Bootstrap, but please download and customize it for yourself!';

  @Input()
  textClass: string = 'float-right';
}
