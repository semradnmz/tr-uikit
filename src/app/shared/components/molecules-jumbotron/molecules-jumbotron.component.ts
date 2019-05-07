import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core"

@Component({
  selector: 'molecules-jumbotron',
  template: `
  <section class="jumbotron {{classJumbotron}}">
  <div class="{{classContainer}}">
  <atoms-heading [headingClass]="headingClass" [headingText]="headingText"></atoms-heading>

    <atoms-text-paragraph [textClass]="textClass" >{{textJumbotron}}</atoms-text-paragraph>
    <atoms-link [hrefClass]="hrefClass">{{linkText}}</atoms-link>
    <atoms-link [hrefClass]="hrefClassSecond">{{linkTextSecond}}</atoms-link>

  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MoleculesJumbotronComponent {

  @Input()
  classJumbotron: string = "text-center";

  @Input()

  classContainer: string = "container"
  @Input()
  headingClass: string = "h1 jumbotron-heading"

  @Input()
  headingText: string = "Jumbotron"


  @Input()
  textJumbotron: string = "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.";

  @Input()
  textClass: string = "lead text-muted"

  @Input()
  hrefClass: string = "btn btn-primary mx-1 my-2"

  @Input()
  linkText: string = "linkText"

  @Input()
  hrefClassSecond: string = "btn btn-secondary mx-1 my-2"

  @Input()
  linkTextSecond: string = "linkText 2"
}
