import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    TooltipComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TooltipComponent],
})
export class AppModule {
}
