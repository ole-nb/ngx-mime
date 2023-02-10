import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialogRef } from '@angular/material/dialog';
import { ContentSearchNavigationService } from '../core/navigation/content-search-navigation-service/content-search-navigation.service';
import { IiifContentSearchService } from './../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from './../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from './../core/intl';
import { MimeResizeService } from './../core/mime-resize-service/mime-resize.service';
import { Hit } from './../core/models/hit';
import * as i0 from "@angular/core";
export declare class ContentSearchDialogComponent implements OnInit, AfterViewInit, OnDestroy {
    dialogRef: MatDialogRef<ContentSearchDialogComponent>;
    intl: MimeViewerIntl;
    mediaObserver: MediaObserver;
    private cdr;
    private mimeResizeService;
    private iiifManifestService;
    private iiifContentSearchService;
    private contentSearchNavigationService;
    q: string;
    hits: Hit[];
    currentHit: Hit | null;
    currentSearch: string | null;
    numberOfHits: number;
    isSearching: boolean;
    tabHeight: {
        maxHeight: string;
    };
    private manifest;
    private mimeHeight;
    private subscriptions;
    resultContainer: ElementRef;
    qEl: ElementRef;
    hitList: QueryList<ElementRef>;
    constructor(dialogRef: MatDialogRef<ContentSearchDialogComponent>, intl: MimeViewerIntl, mediaObserver: MediaObserver, cdr: ChangeDetectorRef, mimeResizeService: MimeResizeService, iiifManifestService: IiifManifestService, iiifContentSearchService: IiifContentSearchService, contentSearchNavigationService: ContentSearchNavigationService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onSubmit(event: KeyboardEvent): void;
    clear(): void;
    goToHit(hit: Hit): void;
    private search;
    private resizeTabHeight;
    private scrollCurrentHitIntoView;
    private findSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentSearchDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContentSearchDialogComponent, "mime-search", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=content-search-dialog.component.d.ts.map