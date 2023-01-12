import { Subject } from 'rxjs';
import { HelpIntl } from './help-intl';
import * as i0 from "@angular/core";
export declare class MimeViewerIntl {
    changes: Subject<void>;
    help: HelpIntl;
    closeLabel: string;
    attributionLabel: string;
    attributonCloseAriaLabel: string;
    helpCloseAriaLabel: string;
    contentsLabel: string;
    layoutMenuLabel: string;
    pageLayoutLabel: string;
    singlePageViewLabel: string;
    twoPageViewLabel: string;
    digitalTextLabel: string;
    recognizedTextContentCloseLabel: string;
    recognizedTextContentInSplitViewLabel: string;
    showRecognizedTextContentLabel: string;
    metadataLabel: string;
    licenseLabel: string;
    tocLabel: string;
    fullScreenLabel: string;
    exitFullScreenLabel: string;
    zoomInLabel: string;
    zoomOutLabel: string;
    previousPageLabel: string;
    nextPageLabel: string;
    homeLabel: string;
    rotateCwLabel: string;
    searchLabel: string;
    clearSearchLabel: string;
    previousHitLabel: string;
    nextHitLabel: string;
    goToPageLabel: string;
    currentPageLabel: string;
    enterPageNumber: string;
    dropDisabled: string;
    loading: string;
    rotationIsNotSupported: string;
    somethingHasGoneWrongLabel: string;
    manifestUriMissingLabel: string;
    manifestNotValidLabel: string;
    pageDoesNotExists: string;
    textContentErrorLabel: string;
    noResultsFoundLabel: (q: string) => string;
    resultsFoundLabel: (numberOfHits: number, q: string) => string;
    currentHitLabel: (currentHit: number, numberOfHits: number) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MimeViewerIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MimeViewerIntl>;
}
