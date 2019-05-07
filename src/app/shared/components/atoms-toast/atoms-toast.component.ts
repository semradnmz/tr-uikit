import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'atoms-toast',
  template: `

<div class="{{toastWrapperClass}}" >
  <div class="{{toastClass}}"  style="opacity:1;">
    <div class="toast-header {{toastHeaderClass}}">
    <atoms-icon iconClass="check-circle"></atoms-icon>
      <strong class="{{toastHeaderTitleClass}}">{{toastHeaderTitle}}</strong>
      <small>{{toastTime}}</small>
      <button [type]="buttonType" class="{{buttonClass}}" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">{{toastClose}}</span>
      </button>
    </div>
    <div class="toast-body {{toastBodyClass}}">
       {{toastContent}}
    </div>
  </div>
</div>


`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsToastComponent {

  @Input()
  toastContent: string = "  Hello, world! This is a toast message."

  @Input()
  toastBodyClass: string = ""

  @Input()
  toastHeaderClass: string = ""

  @Input()
  toastHeaderTitle: string = "Bootstrap"

  @Input()
  toastHeaderTitleClass: string = "mr-auto ml-2"

  @Input()
  toastTime: string = "12 minute"

  @Input()
  toastClass: string = "toast"

  @Input()
  toastWrapperClass: string = "d-flex justify-content-end"

  @Input()
  buttonType: string = "button"

  @Input()
  buttonClass: string = "ml-2 mb-1 close"

  @Input()
  toastClose: string = "&times;"

}
