import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { OverlayTooltipComponent } from './overlay-tooltip.component';
import { OverlayTooltipPosition } from './model/overlay-tooltip-position.enum';

@Directive({ selector: '[crowderOverlayTooltip]' })
export class OverlayTooltipDirective implements OnInit {

  @Input() tooltipMessage: string;
  @Input() tooltipBackgroundColour: string;
  @Input() tooltipTextColour: string;
  @Input() tooltipTextSize: string;
  @Input() tooltipPosition: OverlayTooltipPosition;
  @Input() tooltipArrow: boolean;

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.elementRef);
    this.setDefault();

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([this.setPosition()]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter') show() {
    const tooltipRef: ComponentRef<OverlayTooltipComponent> = this.overlayRef.attach(new ComponentPortal(OverlayTooltipComponent));
    tooltipRef.instance.tooltipMessage = this.tooltipMessage;
    tooltipRef.instance.tooltipBackgroundColour = this.tooltipBackgroundColour;
    tooltipRef.instance.tooltipTextColour = this.tooltipTextColour;
    tooltipRef.instance.tooltipTextSize = this.tooltipTextSize;
    tooltipRef.instance.tooltipPosition = this.tooltipPosition;
    tooltipRef.instance.tooltipArrow = this.tooltipArrow;
  }

  @HostListener('mouseout') hide() {
    this.overlayRef.detach();
  }

  private setDefault(): void {
    if (this.tooltipArrow == null) {
      this.tooltipArrow = false;
    }

    if (this.tooltipBackgroundColour == null) {
      this.tooltipBackgroundColour = 'black';
    }

    if (this.tooltipTextColour == null) {
      this.tooltipTextColour = 'white';
    }

    if (this.tooltipTextSize == null) {
      this.tooltipTextSize = '0.75rem';
    }
  }

  private setPosition(): any {
    switch (this.tooltipPosition) {
      case OverlayTooltipPosition.TOPLEFT:
        return {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -8,
        };
      case OverlayTooltipPosition.TOPCENTRE:
        return {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8,
        };
      case OverlayTooltipPosition.TOPRIGHT:
        return {
          originX: 'end',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom',
          offsetY: -8,
        };
      case OverlayTooltipPosition.BOTTOMLEFT:
        return {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 8,
        };
      case OverlayTooltipPosition.BOTTOMRIGHT:
        return {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
          offsetY: 8,
        };
      case OverlayTooltipPosition.BOTTOMCENTRE:
        return {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 8,
        };
      case OverlayTooltipPosition.LEFT:
        return {
          originX: 'start',
          originY: 'center',
          overlayX: 'end',
          overlayY: 'center',
          offsetX: -8,
        };
      case OverlayTooltipPosition.RIGHT:
        return {
          originX: 'end',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
          offsetX: 8,
        };
    }
  }
}
