import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { TooltipComponent } from './tooltip.component';
import { TooltipPosition } from './model/tooltip-position.enum';

@Directive({ selector: '[crowderTooltip]' })
export class TooltipDirective implements OnInit {

  @Input() tooltipMessage: string;
  @Input() tooltipBackgroundColour: string;
  @Input() tooltipTextColour: string;
  @Input() tooltipTextSize: string;
  @Input() tooltipPosition: TooltipPosition;

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.setDefault();

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([ this.setPosition() ]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter') show() {
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
    tooltipRef.instance.tooltipMessage = this.tooltipMessage;
    tooltipRef.instance.tooltipBackgroundColour = this.tooltipBackgroundColour;
    tooltipRef.instance.tooltipTextColour = this.tooltipTextColour;
    tooltipRef.instance.tooltipTextSize = this.tooltipTextSize;
  }

  @HostListener('mouseout') hide() {
    this.overlayRef.detach();
  }

  private setDefault(): void {
    if (this.tooltipPosition == null) {
      this.tooltipPosition = TooltipPosition.BOTTOMCENTRE;
    }
  }

  private setPosition(): any {
    switch(this.tooltipPosition) {
      case TooltipPosition.TOPLEFT:
        return {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -8,
        };
      case TooltipPosition.TOPCENTRE:
        return {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8,
        };
      case TooltipPosition.TOPRIGHT:
        return {
          originX: 'end',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom',
          offsetY: -8,
        };
      case TooltipPosition.BOTTOMLEFT:
        return {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 8,
        };
      case TooltipPosition.BOTTOMRIGHT:
        return {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
          offsetY: 8,
        };
      case TooltipPosition.BOTTOMCENTRE:
      default:
        return {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 8,
        };
      }
  }
}
