import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { OverlayTooltipDirective } from './overlay-tooltip/overlay-tooltip.directive';
import { OverlayTooltipComponent } from './overlay-tooltip/overlay-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayTooltipDirective,
    OverlayTooltipComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OverlayTooltipComponent],
})
export class AppModule {
}
