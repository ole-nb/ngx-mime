export class Utils {
    static numbersAreClose(thing, realThing, epsilon) {
        return Math.abs(thing - realThing) <= epsilon;
    }
    static shortenDecimals(zoom, precision) {
        const short = Number(zoom).toPrecision(precision);
        return Number(short);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29yZS91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sS0FBSztJQUNoQixNQUFNLENBQUMsZUFBZSxDQUNwQixLQUFhLEVBQ2IsU0FBaUIsRUFDakIsT0FBZTtRQUVmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFDRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQVMsRUFBRSxTQUFpQjtRQUNqRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHN0YXRpYyBudW1iZXJzQXJlQ2xvc2UoXG4gICAgdGhpbmc6IG51bWJlcixcbiAgICByZWFsVGhpbmc6IG51bWJlcixcbiAgICBlcHNpbG9uOiBudW1iZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaW5nIC0gcmVhbFRoaW5nKSA8PSBlcHNpbG9uO1xuICB9XG4gIHN0YXRpYyBzaG9ydGVuRGVjaW1hbHMoem9vbTogYW55LCBwcmVjaXNpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2hvcnQgPSBOdW1iZXIoem9vbSkudG9QcmVjaXNpb24ocHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTnVtYmVyKHNob3J0KTtcbiAgfVxufVxuIl19