import { Component } from '@angular/core';
import { OverlayTooltipPosition } from './overlay-tooltip/model/overlay-tooltip-position.enum';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  TooltipPosition = OverlayTooltipPosition;
}
