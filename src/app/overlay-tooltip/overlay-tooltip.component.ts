import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { OverlayTooltipPosition } from './model/overlay-tooltip-position.enum';

@Component({
  selector: 'crowder-overlay-tooltip',
  styleUrls: ['./overlay-tooltip.component.scss'],
  templateUrl: './overlay-tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class OverlayTooltipComponent {
  TooltipPosition = OverlayTooltipPosition;
  @Input() tooltipMessage: string;
  @Input() tooltipBackgroundColour: string;
  @Input() tooltipTextColour: string;
  @Input() tooltipTextSize: string;
  @Input() tooltipPosition: OverlayTooltipPosition;
  @Input() tooltipArrow: boolean;
}
