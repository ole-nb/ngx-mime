import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, } from '@angular/core';
import { Subscription } from 'rxjs';
import { CanvasService } from '../../core/canvas-service/canvas-service';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../../core/intl';
import { ViewerService } from '../../core/viewer-service/viewer.service';
import * as i0 from "@angular/core";
import * as i1 from "../../core/intl";
import * as i2 from "../../core/iiif-manifest-service/iiif-manifest-service";
import * as i3 from "../../core/viewer-service/viewer.service";
import * as i4 from "../../core/canvas-service/canvas-service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/flex-layout/flex";
export class TocComponent {
    constructor(intl, changeDetectorRef, iiifManifestService, viewerService, canvasService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.canvasChanged = new EventEmitter();
        this.manifest = null;
        this.currentCanvasGroupIndex = 0;
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.subscriptions.add(this.iiifManifestService.currentManifest.subscribe((manifest) => {
            this.manifest = manifest;
            this.currentCanvasGroupIndex =
                this.canvasService.currentCanvasGroupIndex;
            this.changeDetectorRef.detectChanges();
        }));
        this.subscriptions.add(this.viewerService.onCanvasGroupIndexChange.subscribe((canvasGroupIndex) => {
            this.currentCanvasGroupIndex = canvasGroupIndex;
            this.changeDetectorRef.detectChanges();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    goToCanvas(event, canvasIndex) {
        if (canvasIndex !== undefined) {
            event.preventDefault();
            this.viewerService.goToCanvas(canvasIndex, false);
            this.canvasChanged.emit(canvasIndex);
        }
    }
}
TocComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TocComponent, deps: [{ token: i1.MimeViewerIntl }, { token: i0.ChangeDetectorRef }, { token: i2.IiifManifestService }, { token: i3.ViewerService }, { token: i4.CanvasService }], target: i0.ɵɵFactoryTarget.Component });
TocComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: TocComponent, selector: "mime-toc", outputs: { canvasChanged: "canvasChanged" }, ngImport: i0, template: "<div class=\"ngx-mime-toc-container\">\n  <div *ngFor=\"let structure of manifest?.structures\">\n    <a\n      href=\"\"\n      class=\"toc-link\"\n      [class.currentCanvasGroup]=\"\n        currentCanvasGroupIndex === structure.canvasIndex\n      \"\n      (click)=\"goToCanvas($event, structure.canvasIndex)\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"space-between center\"\n    >\n      <span class=\"label\">{{ structure.label }}</span>\n      <span class=\"canvasGroupIndex\">{{ structure.canvasIndex + 1 }}</span>\n    </a>\n  </div>\n</div>\n", styles: [".toc-link{text-decoration:none;font-size:14px!important;font-weight:400;margin-bottom:8px}.currentCanvasGroup{font-weight:700}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { kind: "directive", type: i6.DefaultLayoutAlignDirective, selector: "  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]", inputs: ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TocComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mime-toc', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-mime-toc-container\">\n  <div *ngFor=\"let structure of manifest?.structures\">\n    <a\n      href=\"\"\n      class=\"toc-link\"\n      [class.currentCanvasGroup]=\"\n        currentCanvasGroupIndex === structure.canvasIndex\n      \"\n      (click)=\"goToCanvas($event, structure.canvasIndex)\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"space-between center\"\n    >\n      <span class=\"label\">{{ structure.label }}</span>\n      <span class=\"canvasGroupIndex\">{{ structure.canvasIndex + 1 }}</span>\n    </a>\n  </div>\n</div>\n", styles: [".toc-link{text-decoration:none;font-size:14px!important;font-weight:400;margin-bottom:8px}.currentCanvasGroup{font-weight:700}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MimeViewerIntl }, { type: i0.ChangeDetectorRef }, { type: i2.IiifManifestService }, { type: i3.ViewerService }, { type: i4.CanvasService }]; }, propDecorators: { canvasChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2luZm9ybWF0aW9uLWRpYWxvZy90YWJsZS1vZi1jb250ZW50cy90YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvaW5mb3JtYXRpb24tZGlhbG9nL3RhYmxlLW9mLWNvbnRlbnRzL3RhYmxlLW9mLWNvbnRlbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBR1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7O0FBUXpFLE1BQU0sT0FBTyxZQUFZO0lBT3ZCLFlBQ1MsSUFBb0IsRUFDbkIsaUJBQW9DLEVBQ3BDLG1CQUF3QyxFQUN4QyxhQUE0QixFQUM1QixhQUE0QjtRQUo3QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFWdEMsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxhQUFRLEdBQW9CLElBQUksQ0FBQztRQUNqQyw0QkFBdUIsR0FBRyxDQUFDLENBQUM7UUFDM0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXhDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUNoRCxDQUFDLFFBQXlCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsdUJBQXVCO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDO1lBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQ0YsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUNuRCxDQUFDLGdCQUF3QixFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGdCQUFnQixDQUFDO1lBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBWSxFQUFFLFdBQStCO1FBQ3RELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUM3QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7eUdBL0NVLFlBQVk7NkZBQVosWUFBWSw2RkN0QnpCLGdqQkFpQkE7MkZES2EsWUFBWTtrQkFOeEIsU0FBUzsrQkFDRSxVQUFVLG1CQUdILHVCQUF1QixDQUFDLE1BQU07K05BSS9DLGFBQWE7c0JBRFosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZSc7XG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vLi4vY29yZS9pbnRsJztcbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgVmlld2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvdmlld2VyLXNlcnZpY2Uvdmlld2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLXRvYycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLW9mLWNvbnRlbnRzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUb2NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKVxuICBjYW52YXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIG1hbmlmZXN0OiBNYW5pZmVzdCB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSAwO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdC5zdWJzY3JpYmUoXG4gICAgICAgIChtYW5pZmVzdDogTWFuaWZlc3QgfCBudWxsKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgICAgICAgIHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXggPVxuICAgICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLmN1cnJlbnRDYW52YXNHcm91cEluZGV4O1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnZpZXdlclNlcnZpY2Uub25DYW52YXNHcm91cEluZGV4Q2hhbmdlLnN1YnNjcmliZShcbiAgICAgICAgKGNhbnZhc0dyb3VwSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSBjYW52YXNHcm91cEluZGV4O1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ29Ub0NhbnZhcyhldmVudDogRXZlbnQsIGNhbnZhc0luZGV4OiBudW1iZXIgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBpZiAoY2FudmFzSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvQ2FudmFzKGNhbnZhc0luZGV4LCBmYWxzZSk7XG4gICAgICB0aGlzLmNhbnZhc0NoYW5nZWQuZW1pdChjYW52YXNJbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LW1pbWUtdG9jLWNvbnRhaW5lclwiPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBzdHJ1Y3R1cmUgb2YgbWFuaWZlc3Q/LnN0cnVjdHVyZXNcIj5cbiAgICA8YVxuICAgICAgaHJlZj1cIlwiXG4gICAgICBjbGFzcz1cInRvYy1saW5rXCJcbiAgICAgIFtjbGFzcy5jdXJyZW50Q2FudmFzR3JvdXBdPVwiXG4gICAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4ID09PSBzdHJ1Y3R1cmUuY2FudmFzSW5kZXhcbiAgICAgIFwiXG4gICAgICAoY2xpY2spPVwiZ29Ub0NhbnZhcygkZXZlbnQsIHN0cnVjdHVyZS5jYW52YXNJbmRleClcIlxuICAgICAgZnhMYXlvdXQ9XCJyb3dcIlxuICAgICAgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCJcbiAgICA+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgc3RydWN0dXJlLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjYW52YXNHcm91cEluZGV4XCI+e3sgc3RydWN0dXJlLmNhbnZhc0luZGV4ICsgMSB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=