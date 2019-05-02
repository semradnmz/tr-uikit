import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'molecules-footer',
  template: `
    <footer class="{{ footerClass }}">
      <div class="{{ footerContainerClass }}">
        <atoms-text-paragraph textClass="float-right">
          <atoms-link hrefText="Back to top"></atoms-link>
        </atoms-text-paragraph>
        <atoms-text-paragraph>
          {{ text }}
        </atoms-text-paragraph>
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
