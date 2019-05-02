import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core"

@Component({
  selector: 'molecules-jumbotron',
  template: `
  <section class="jumbotron {{classJumbotron}}">
  <div class="{{classContainer}}">
  <atoms-heading [headingText]="'Jumbotron'" headingClass="h1 jumbotron-heading"></atoms-heading>
    <atoms-text-paragraph >{{text}}</atoms-text-paragraph>
    <p class="lead text-muted"></p>
    <p>
      <a href="#" class="btn btn-primary my-2">Main call to action</a>
      <a href="#" class="btn btn-secondary my-2">Secondary action</a>
    </p>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MoleculesJumbotronComponent {

  @Input()
  classJumbotron: string = " text-center";

  @Input()

  classContainer: string = "container"

  @Input()
  text: string = "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.";

}
