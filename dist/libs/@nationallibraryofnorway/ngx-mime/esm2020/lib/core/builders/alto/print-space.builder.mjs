import { TextBlocksBuilder } from './text-blocks.builder';
export class PrintSpaceBuilder {
    withPrintSpaceXml(printSpaceXml) {
        this.printSpaceXml = printSpaceXml;
        return this;
    }
    withTextStyles(textStyles) {
        this.textStyles = textStyles;
        return this;
    }
    build() {
        let textBlocks = [];
        if (this.printSpaceXml?.$$) {
            textBlocks = this.extractTextBlocks(this.printSpaceXml.$$);
        }
        return {
            textBlocks: new TextBlocksBuilder()
                .withTextBlocksXml(textBlocks)
                .withTextStyles(this.textStyles)
                .build(),
        };
    }
    extractTextBlocks(node) {
        let blocks = [];
        node.forEach((n) => {
            if (this.isTextBlock(n)) {
                blocks = [...blocks, n];
            }
            else if (this.isComposedBlock(n)) {
                if (n.$$) {
                    blocks = [...blocks, ...this.extractTextBlocks(n.$$)];
                }
            }
        });
        return blocks;
    }
    isTextBlock(n) {
        return n['#name'] && n['#name'] === 'TextBlock';
    }
    isComposedBlock(n) {
        return n['#name'] && n['#name'] === 'ComposedBlock';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQtc3BhY2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL2J1aWxkZXJzL2FsdG8vcHJpbnQtc3BhY2UuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLGlCQUFpQixDQUFDLGFBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGNBQWMsQ0FDWixVQUE4QztRQUU5QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxVQUFVLEdBQVUsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUU7WUFDMUIsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLGlCQUFpQixFQUFFO2lCQUNoQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7aUJBQzdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUMvQixLQUFLLEVBQUU7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVPLGlCQUFpQixDQUFDLElBQVM7UUFDakMsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNSLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN2RDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sV0FBVyxDQUFDLENBQU07UUFDeEIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsQ0FBQztJQUNsRCxDQUFDO0lBRU8sZUFBZSxDQUFDLENBQU07UUFDNUIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmludFNwYWNlLCBUZXh0U3R5bGUgfSBmcm9tICcuLi8uLi9hbHRvLXNlcnZpY2UvYWx0by5tb2RlbCc7XG5pbXBvcnQgeyBUZXh0QmxvY2tzQnVpbGRlciB9IGZyb20gJy4vdGV4dC1ibG9ja3MuYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBQcmludFNwYWNlQnVpbGRlciB7XG4gIHByaXZhdGUgdGV4dFN0eWxlczogTWFwPHN0cmluZywgVGV4dFN0eWxlPiB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBwcmludFNwYWNlWG1sOiBhbnkgfCB1bmRlZmluZWQ7XG5cbiAgd2l0aFByaW50U3BhY2VYbWwocHJpbnRTcGFjZVhtbDogYW55KSB7XG4gICAgdGhpcy5wcmludFNwYWNlWG1sID0gcHJpbnRTcGFjZVhtbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpdGhUZXh0U3R5bGVzKFxuICAgIHRleHRTdHlsZXM6IE1hcDxzdHJpbmcsIFRleHRTdHlsZT4gfCB1bmRlZmluZWRcbiAgKTogUHJpbnRTcGFjZUJ1aWxkZXIge1xuICAgIHRoaXMudGV4dFN0eWxlcyA9IHRleHRTdHlsZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpOiBQcmludFNwYWNlIHtcbiAgICBsZXQgdGV4dEJsb2NrczogYW55W10gPSBbXTtcblxuICAgIGlmICh0aGlzLnByaW50U3BhY2VYbWw/LiQkKSB7XG4gICAgICB0ZXh0QmxvY2tzID0gdGhpcy5leHRyYWN0VGV4dEJsb2Nrcyh0aGlzLnByaW50U3BhY2VYbWwuJCQpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEJsb2NrczogbmV3IFRleHRCbG9ja3NCdWlsZGVyKClcbiAgICAgICAgLndpdGhUZXh0QmxvY2tzWG1sKHRleHRCbG9ja3MpXG4gICAgICAgIC53aXRoVGV4dFN0eWxlcyh0aGlzLnRleHRTdHlsZXMpXG4gICAgICAgIC5idWlsZCgpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RUZXh0QmxvY2tzKG5vZGU6IGFueSk6IGFueVtdIHtcbiAgICBsZXQgYmxvY2tzOiBhbnlbXSA9IFtdO1xuICAgIG5vZGUuZm9yRWFjaCgobjogYW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1RleHRCbG9jayhuKSkge1xuICAgICAgICBibG9ja3MgPSBbLi4uYmxvY2tzLCBuXTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0NvbXBvc2VkQmxvY2sobikpIHtcbiAgICAgICAgaWYgKG4uJCQpIHtcbiAgICAgICAgICBibG9ja3MgPSBbLi4uYmxvY2tzLCAuLi50aGlzLmV4dHJhY3RUZXh0QmxvY2tzKG4uJCQpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBibG9ja3M7XG4gIH1cblxuICBwcml2YXRlIGlzVGV4dEJsb2NrKG46IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBuWycjbmFtZSddICYmIG5bJyNuYW1lJ10gPT09ICdUZXh0QmxvY2snO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbXBvc2VkQmxvY2sobjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5bJyNuYW1lJ10gJiYgblsnI25hbWUnXSA9PT0gJ0NvbXBvc2VkQmxvY2snO1xuICB9XG59XG4iXX0=