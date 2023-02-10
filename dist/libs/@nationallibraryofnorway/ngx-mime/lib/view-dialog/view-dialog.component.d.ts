import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AltoService } from '../core/alto-service/alto.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../core/intl';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { RecognizedTextMode } from '../core/models';
import { ViewerLayout } from '../core/models/viewer-layout';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import * as i0 from "@angular/core";
export declare class ViewDialogComponent implements OnInit, OnDestroy {
    mediaObserver: MediaObserver;
    intl: MimeViewerIntl;
    private cdr;
    private viewerLayoutService;
    private iiifManifestService;
    private altoService;
    private mimeResizeService;
    viewerLayout: ViewerLayout;
    ViewerLayout: typeof ViewerLayout;
    isPagedManifest: boolean;
    hasRecognizedTextContent: boolean;
    recognizedTextMode: RecognizedTextMode;
    RecognizedTextMode: typeof RecognizedTextMode;
    contentStyle: any;
    private subscriptions;
    constructor(mediaObserver: MediaObserver, intl: MimeViewerIntl, cdr: ChangeDetectorRef, viewerLayoutService: ViewerLayoutService, iiifManifestService: IiifManifestService, altoService: AltoService, mimeResizeService: MimeResizeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setLayoutOnePage(): void;
    setLayoutTwoPage(): void;
    closeRecognizedTextContent(): void;
    showRecognizedTextContentInSplitView(): void;
    showRecognizedTextContentOnly(): void;
    private resizeHeight;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewDialogComponent, "mime-view-dialog", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=view-dialog.component.d.ts.map