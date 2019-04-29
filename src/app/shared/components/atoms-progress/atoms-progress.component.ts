import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'atoms-progress',
  template: `
    <div class="progress">
      <div class="progress-bar {{ progressClass }}" role="progressbar" [style.width]="progressWidth">
        %{{ progressValue }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AtomsProgressComponent {
  @Input()
  progressClass: string = 'bg-success';

  @Input()
  progressValue: number = 10;

  get progressWidth() {
    return `${this.progressValue}%`;
  }
}
