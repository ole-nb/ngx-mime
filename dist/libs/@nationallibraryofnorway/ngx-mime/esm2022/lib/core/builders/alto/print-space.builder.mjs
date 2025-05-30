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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQtc3BhY2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL2J1aWxkZXJzL2FsdG8vcHJpbnQtc3BhY2UuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLGlCQUFpQixDQUFDLGFBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGNBQWMsQ0FDWixVQUE4QztRQUU5QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxVQUFVLEdBQVUsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNELE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxpQkFBaUIsRUFBRTtpQkFDaEMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO2lCQUM3QixjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDL0IsS0FBSyxFQUFFO1NBQ1gsQ0FBQztJQUNKLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxJQUFTO1FBQ2pDLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNULE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxDQUFNO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUM7SUFDbEQsQ0FBQztJQUVPLGVBQWUsQ0FBQyxDQUFNO1FBQzVCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxlQUFlLENBQUM7SUFDdEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpbnRTcGFjZSwgVGV4dFN0eWxlIH0gZnJvbSAnLi4vLi4vYWx0by1zZXJ2aWNlL2FsdG8ubW9kZWwnO1xuaW1wb3J0IHsgVGV4dEJsb2Nrc0J1aWxkZXIgfSBmcm9tICcuL3RleHQtYmxvY2tzLmJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgUHJpbnRTcGFjZUJ1aWxkZXIge1xuICBwcml2YXRlIHRleHRTdHlsZXM6IE1hcDxzdHJpbmcsIFRleHRTdHlsZT4gfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcHJpbnRTcGFjZVhtbDogYW55IHwgdW5kZWZpbmVkO1xuXG4gIHdpdGhQcmludFNwYWNlWG1sKHByaW50U3BhY2VYbWw6IGFueSkge1xuICAgIHRoaXMucHJpbnRTcGFjZVhtbCA9IHByaW50U3BhY2VYbWw7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3aXRoVGV4dFN0eWxlcyhcbiAgICB0ZXh0U3R5bGVzOiBNYXA8c3RyaW5nLCBUZXh0U3R5bGU+IHwgdW5kZWZpbmVkLFxuICApOiBQcmludFNwYWNlQnVpbGRlciB7XG4gICAgdGhpcy50ZXh0U3R5bGVzID0gdGV4dFN0eWxlcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCk6IFByaW50U3BhY2Uge1xuICAgIGxldCB0ZXh0QmxvY2tzOiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKHRoaXMucHJpbnRTcGFjZVhtbD8uJCQpIHtcbiAgICAgIHRleHRCbG9ja3MgPSB0aGlzLmV4dHJhY3RUZXh0QmxvY2tzKHRoaXMucHJpbnRTcGFjZVhtbC4kJCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0ZXh0QmxvY2tzOiBuZXcgVGV4dEJsb2Nrc0J1aWxkZXIoKVxuICAgICAgICAud2l0aFRleHRCbG9ja3NYbWwodGV4dEJsb2NrcylcbiAgICAgICAgLndpdGhUZXh0U3R5bGVzKHRoaXMudGV4dFN0eWxlcylcbiAgICAgICAgLmJ1aWxkKCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFRleHRCbG9ja3Mobm9kZTogYW55KTogYW55W10ge1xuICAgIGxldCBibG9ja3M6IGFueVtdID0gW107XG4gICAgbm9kZS5mb3JFYWNoKChuOiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVGV4dEJsb2NrKG4pKSB7XG4gICAgICAgIGJsb2NrcyA9IFsuLi5ibG9ja3MsIG5dO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ29tcG9zZWRCbG9jayhuKSkge1xuICAgICAgICBpZiAobi4kJCkge1xuICAgICAgICAgIGJsb2NrcyA9IFsuLi5ibG9ja3MsIC4uLnRoaXMuZXh0cmFjdFRleHRCbG9ja3Mobi4kJCldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJsb2NrcztcbiAgfVxuXG4gIHByaXZhdGUgaXNUZXh0QmxvY2sobjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5bJyNuYW1lJ10gJiYgblsnI25hbWUnXSA9PT0gJ1RleHRCbG9jayc7XG4gIH1cblxuICBwcml2YXRlIGlzQ29tcG9zZWRCbG9jayhuOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gblsnI25hbWUnXSAmJiBuWycjbmFtZSddID09PSAnQ29tcG9zZWRCbG9jayc7XG4gIH1cbn1cbiJdfQ==