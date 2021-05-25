import { Rect } from './../models/rect';
import { SearchResult } from './../models/search-result';
import { Hit } from './../models/hit';
export class SearchResultBuilder {
    constructor(q, manifest, iiifSearchResult) {
        this.q = q;
        this.manifest = manifest;
        this.iiifSearchResult = iiifSearchResult;
    }
    build() {
        const searchResult = new SearchResult();
        searchResult.q = this.q;
        const hits = [];
        if (this.iiifSearchResult && this.iiifSearchResult.hits) {
            this.iiifSearchResult.hits.forEach((hit, index) => {
                const id = index;
                let canvasIndex = -1;
                let label = null;
                const rects = [];
                if (this.manifest.sequences && this.manifest.sequences[0].canvases) {
                    const resources = this.findResources(hit);
                    for (const resource of resources) {
                        canvasIndex = this.findSequenceIndex(resource);
                        label = this.findLabel(canvasIndex);
                        const on = resource.on;
                        const coords = on.substring(on.indexOf('=') + 1).split(',');
                        const rect = new Rect({
                            x: parseInt(coords[0], 10),
                            y: parseInt(coords[1], 10),
                            width: parseInt(coords[2], 10),
                            height: parseInt(coords[3], 10)
                        });
                        rects.push(rect);
                    }
                }
                searchResult.add(new Hit({
                    id: id,
                    index: canvasIndex,
                    label: label,
                    match: hit.match,
                    before: hit.before,
                    after: hit.after,
                    rects: rects
                }));
            });
            return searchResult;
        }
    }
    findResources(hit) {
        const resources = [];
        for (const annotation of hit.annotations) {
            const res = this.iiifSearchResult.resources.find((r) => r['@id'] === annotation);
            resources.push(res);
        }
        return resources;
    }
    findSequenceIndex(resource) {
        const firstSequence = this.manifest.sequences[0];
        const on = resource.on;
        const id = on.substring(0, on.indexOf('#'));
        return firstSequence.canvases.findIndex(c => c.id === id);
    }
    findLabel(index) {
        if (index === -1) {
            return null;
        }
        else {
            return this.manifest.sequences[0].canvases[index].label;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvcmUvYnVpbGRlcnMvc2VhcmNoLXJlc3VsdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU94QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRDLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDVSxDQUFTLEVBQ1QsUUFBa0IsRUFDbEIsZ0JBQWtDO1FBRmxDLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQztJQUVHLEtBQUs7UUFDVixNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLElBQUksR0FBVSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVksRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDakUsTUFBTSxFQUFFLEdBQVcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixNQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFT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T0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4vLi4vbW9kZWxzL3JlY3QnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLy4uL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQge1xuICBJaWlmU2VhcmNoUmVzdWx0LFxuICBIaXQgYXMgSWlpZkhpdCxcbiAgUmVzb3VyY2UgYXMgSWlpZlJlc291cmNlXG59IGZyb20gJy4vLi4vbW9kZWxzL2lpaWYtc2VhcmNoLXJlc3VsdCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLy4uL21vZGVscy9zZWFyY2gtcmVzdWx0JztcbmltcG9ydCB7IEhpdCB9IGZyb20gJy4vLi4vbW9kZWxzL2hpdCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBxOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBtYW5pZmVzdDogTWFuaWZlc3QsXG4gICAgcHJpdmF0ZSBpaWlmU2VhcmNoUmVzdWx0OiBJaWlmU2VhcmNoUmVzdWx0XG4gICkge31cblxuICBwdWJsaWMgYnVpbGQoKTogU2VhcmNoUmVzdWx0IHtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBuZXcgU2VhcmNoUmVzdWx0KCk7XG4gICAgc2VhcmNoUmVzdWx0LnEgPSB0aGlzLnE7XG4gICAgY29uc3QgaGl0czogSGl0W10gPSBbXTtcbiAgICBpZiAodGhpcy5paWlmU2VhcmNoUmVzdWx0ICYmIHRoaXMuaWlpZlNlYXJjaFJlc3VsdC5oaXRzKSB7XG4gICAgICB0aGlzLmlpaWZTZWFyY2hSZXN1bHQuaGl0cy5mb3JFYWNoKChoaXQ6IElpaWZIaXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgaWQ6IG51bWJlciA9IGluZGV4O1xuICAgICAgICBsZXQgY2FudmFzSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICAgICAgY29uc3QgcmVjdHM6IFJlY3RbXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5tYW5pZmVzdC5zZXF1ZW5jZXMgJiYgdGhpcy5tYW5pZmVzdC5zZXF1ZW5jZXNbMF0uY2FudmFzZXMpIHtcbiAgICAgICAgICBjb25zdCByZXNvdXJjZXMgPSB0aGlzLmZpbmRSZXNvdXJjZXMoaGl0KTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHJlc291cmNlcykge1xuICAgICAgICAgICAgY2FudmFzSW5kZXggPSB0aGlzLmZpbmRTZXF1ZW5jZUluZGV4KHJlc291cmNlKTtcbiAgICAgICAgICAgIGxhYmVsID0gdGhpcy5maW5kTGFiZWwoY2FudmFzSW5kZXgpO1xuICAgICAgICAgICAgY29uc3Qgb24gPSByZXNvdXJjZS5vbjtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IG9uLnN1YnN0cmluZyhvbi5pbmRleE9mKCc9JykgKyAxKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IG5ldyBSZWN0KHtcbiAgICAgICAgICAgICAgeDogcGFyc2VJbnQoY29vcmRzWzBdLCAxMCksXG4gICAgICAgICAgICAgIHk6IHBhcnNlSW50KGNvb3Jkc1sxXSwgMTApLFxuICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoY29vcmRzWzJdLCAxMCksXG4gICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoY29vcmRzWzNdLCAxMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVjdHMucHVzaChyZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWFyY2hSZXN1bHQuYWRkKFxuICAgICAgICAgIG5ldyBIaXQoe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgaW5kZXg6IGNhbnZhc0luZGV4LFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgbWF0Y2g6IGhpdC5tYXRjaCxcbiAgICAgICAgICAgIGJlZm9yZTogaGl0LmJlZm9yZSxcbiAgICAgICAgICAgIGFmdGVyOiBoaXQuYWZ0ZXIsXG4gICAgICAgICAgICByZWN0czogcmVjdHNcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VhcmNoUmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFJlc291cmNlcyhoaXQ6IElpaWZIaXQpOiBJaWlmUmVzb3VyY2VbXSB7XG4gICAgY29uc3QgcmVzb3VyY2VzOiBJaWlmUmVzb3VyY2VbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiBoaXQuYW5ub3RhdGlvbnMpIHtcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMuaWlpZlNlYXJjaFJlc3VsdC5yZXNvdXJjZXMuZmluZChcbiAgICAgICAgKHI6IElpaWZSZXNvdXJjZSkgPT4gclsnQGlkJ10gPT09IGFubm90YXRpb25cbiAgICAgICk7XG4gICAgICByZXNvdXJjZXMucHVzaChyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb3VyY2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2VxdWVuY2VJbmRleChyZXNvdXJjZTogSWlpZlJlc291cmNlKTogbnVtYmVyIHtcbiAgICBjb25zdCBmaXJzdFNlcXVlbmNlID0gdGhpcy5tYW5pZmVzdC5zZXF1ZW5jZXNbMF07XG4gICAgY29uc3Qgb24gPSByZXNvdXJjZS5vbjtcbiAgICBjb25zdCBpZCA9IG9uLnN1YnN0cmluZygwLCBvbi5pbmRleE9mKCcjJykpO1xuICAgIHJldHVybiBmaXJzdFNlcXVlbmNlLmNhbnZhc2VzLmZpbmRJbmRleChjID0+IGMuaWQgPT09IGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZExhYmVsKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5tYW5pZmVzdC5zZXF1ZW5jZXNbMF0uY2FudmFzZXNbaW5kZXhdLmxhYmVsO1xuICAgIH1cbiAgfVxufVxuIl19