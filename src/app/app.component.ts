import { Component } from '@angular/core';
import { TooltipPosition } from './tooltip/model/tooltip-position.enum';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  TooltipPosition = TooltipPosition;
}
