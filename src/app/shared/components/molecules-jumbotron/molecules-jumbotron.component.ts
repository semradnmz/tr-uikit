import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: 'molecules-jumbotron',
  template: `
  <atoms-heading headingClass="h1 jumbotron-heading" headingText="Album example"></atoms-heading>
  <atoms-text-paragraph textClass="lead text-muted" text="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."></atoms-text-paragraph>
  <atoms-link linkHref="https://www.google.com/" linkClass="btn btn-primary my-2 mx-1" linkTitle="Main call to Action" linkTarget="_blank" linkText="link"></atoms-link>
  <atoms-link linkHref="https://www.google.com/" linkClass="btn btn-secondary my-2 mx-1" linkTitle="Secondary Action" linkTarget="_blank" linkText="link"></atoms-link>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class MoleculesJumbotronComponent {


}
