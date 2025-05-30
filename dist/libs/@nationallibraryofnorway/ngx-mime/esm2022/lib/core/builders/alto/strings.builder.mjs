export class StringsBuilder {
    withStringXml(stringXml) {
        this.stringXml = stringXml;
        return this;
    }
    build() {
        return this.stringXml
            ? this.stringXml
                .filter((string) => !string.$.SUBS_CONTENT || string.$.SUBS_TYPE === 'HypPart1')
                .map((string) => {
                return { content: string.$.SUBS_CONTENT || string.$.CONTENT };
            })
            : [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5ncy5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2NvcmUvYnVpbGRlcnMvYWx0by9zdHJpbmdzLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGNBQWM7SUFHekIsYUFBYSxDQUFDLFNBQWM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO2lCQUNYLE1BQU0sQ0FDTCxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQ2QsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQzlEO2lCQUNBLEdBQUcsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEUsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZyB9IGZyb20gJy4uLy4uL2FsdG8tc2VydmljZS9hbHRvLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFN0cmluZ3NCdWlsZGVyIHtcbiAgcHJpdmF0ZSBzdHJpbmdYbWw6IGFueSB8IHVuZGVmaW5lZDtcblxuICB3aXRoU3RyaW5nWG1sKHN0cmluZ1htbDogYW55KTogU3RyaW5nc0J1aWxkZXIge1xuICAgIHRoaXMuc3RyaW5nWG1sID0gc3RyaW5nWG1sO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKTogU3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ1htbFxuICAgICAgPyB0aGlzLnN0cmluZ1htbFxuICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAoc3RyaW5nOiBhbnkpID0+XG4gICAgICAgICAgICAgICFzdHJpbmcuJC5TVUJTX0NPTlRFTlQgfHwgc3RyaW5nLiQuU1VCU19UWVBFID09PSAnSHlwUGFydDEnLFxuICAgICAgICAgIClcbiAgICAgICAgICAubWFwKChzdHJpbmc6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgY29udGVudDogc3RyaW5nLiQuU1VCU19DT05URU5UIHx8IHN0cmluZy4kLkNPTlRFTlQgfTtcbiAgICAgICAgICB9KVxuICAgICAgOiBbXTtcbiAgfVxufVxuIl19