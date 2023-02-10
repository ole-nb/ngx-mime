import { Direction } from '@angular/cdk/bidi';
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { CanvasGroupDialogService } from '../../../canvas-group-dialog/canvas-group-dialog.service';
import { IiifManifestService } from '../../../core/iiif-manifest-service/iiif-manifest-service';
import { ViewingDirection } from '../../../core/models/viewing-direction';
import { CanvasService } from './../../../core/canvas-service/canvas-service';
import { MimeViewerIntl } from './../../../core/intl';
import { SearchResult } from './../../../core/models/search-result';
import { ViewerService } from './../../../core/viewer-service/viewer.service';
import * as i0 from "@angular/core";
export declare class CanvasGroupNavigatorComponent implements OnInit, OnDestroy {
    intl: MimeViewerIntl;
    private changeDetectorRef;
    private viewerService;
    private canvasService;
    private pageDialogService;
    private iiifManifestService;
    searchResult: SearchResult;
    numberOfCanvases: number;
    canvasGroupLabel: string;
    numberOfCanvasGroups: number;
    currentCanvasGroupIndex: number | null;
    isFirstCanvasGroup: boolean;
    isLastCanvasGroup: boolean;
    readonly ViewingDirection: typeof ViewingDirection;
    currentViewingDirection: Direction;
    private currentSliderCanvasGroupIndex;
    private subscriptions;
    constructor(intl: MimeViewerIntl, changeDetectorRef: ChangeDetectorRef, viewerService: ViewerService, canvasService: CanvasService, pageDialogService: CanvasGroupDialogService, iiifManifestService: IiifManifestService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    goToPreviousCanvasGroup(): void;
    goToNextCanvasGroup(): void;
    onSliderChange(value: number): void;
    onSliderHotKey(event: KeyboardEvent): void;
    openCanvasGroupDialog(): void;
    private isOnFirstCanvasGroup;
    private isOnLastCanvasGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<CanvasGroupNavigatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CanvasGroupNavigatorComponent, "mime-page-navigator", never, { "searchResult": "searchResult"; }, {}, never, never, false, never>;
}
//# sourceMappingURL=canvas-group-navigator.component.d.ts.map