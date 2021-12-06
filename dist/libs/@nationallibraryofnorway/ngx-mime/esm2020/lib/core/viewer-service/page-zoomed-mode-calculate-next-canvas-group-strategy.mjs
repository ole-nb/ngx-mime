import { Direction } from '../models/direction';
import { ViewingDirection } from '../models/viewing-direction';
export class PageZoomedModeCalculateNextCanvasGroupStrategy {
    calculateNextCanvasGroup(criteria) {
        const direction = criteria.direction;
        const currentCanvasGroupIndex = criteria.currentCanvasGroupIndex;
        const canvasGroupEndHitCountReached = criteria.canvasGroupEndHitCountReached;
        let nextCanvasGroup = canvasGroupEndHitCountReached ? 1 : 0;
        nextCanvasGroup =
            direction === Direction.LEFT ? nextCanvasGroup : nextCanvasGroup * -1;
        nextCanvasGroup =
            criteria.viewingDirection === ViewingDirection.LTR
                ? currentCanvasGroupIndex + nextCanvasGroup
                : currentCanvasGroupIndex - nextCanvasGroup;
        return nextCanvasGroup;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS16b29tZWQtbW9kZS1jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvY29yZS92aWV3ZXItc2VydmljZS9wYWdlLXpvb21lZC1tb2RlLWNhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNL0QsTUFBTSxPQUFPLDhDQUE4QztJQUV6RCx3QkFBd0IsQ0FBQyxRQUFpQztRQUN4RCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3JDLE1BQU0sdUJBQXVCLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1FBQ2pFLE1BQU0sNkJBQTZCLEdBQ2pDLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQztRQUV6QyxJQUFJLGVBQWUsR0FBRyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUQsZUFBZTtZQUNiLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RSxlQUFlO1lBQ2IsUUFBUSxDQUFDLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLEdBQUc7Z0JBQ2hELENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxlQUFlO2dCQUMzQyxDQUFDLENBQUMsdUJBQXVCLEdBQUcsZUFBZSxDQUFDO1FBQ2hELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgVmlld2luZ0RpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5pbXBvcnQge1xuICBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSxcbiAgTmV4dENhbnZhc0dyb3VwQ3JpdGVyaWEsXG59IGZyb20gJy4vY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFBhZ2Vab29tZWRNb2RlQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3lcbiAgaW1wbGVtZW50cyBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSB7XG4gIGNhbGN1bGF0ZU5leHRDYW52YXNHcm91cChjcml0ZXJpYTogTmV4dENhbnZhc0dyb3VwQ3JpdGVyaWEpOiBudW1iZXIge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNyaXRlcmlhLmRpcmVjdGlvbjtcbiAgICBjb25zdCBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9IGNyaXRlcmlhLmN1cnJlbnRDYW52YXNHcm91cEluZGV4O1xuICAgIGNvbnN0IGNhbnZhc0dyb3VwRW5kSGl0Q291bnRSZWFjaGVkID1cbiAgICAgIGNyaXRlcmlhLmNhbnZhc0dyb3VwRW5kSGl0Q291bnRSZWFjaGVkO1xuXG4gICAgbGV0IG5leHRDYW52YXNHcm91cCA9IGNhbnZhc0dyb3VwRW5kSGl0Q291bnRSZWFjaGVkID8gMSA6IDA7XG5cbiAgICBuZXh0Q2FudmFzR3JvdXAgPVxuICAgICAgZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTEVGVCA/IG5leHRDYW52YXNHcm91cCA6IG5leHRDYW52YXNHcm91cCAqIC0xO1xuICAgIG5leHRDYW52YXNHcm91cCA9XG4gICAgICBjcml0ZXJpYS52aWV3aW5nRGlyZWN0aW9uID09PSBWaWV3aW5nRGlyZWN0aW9uLkxUUlxuICAgICAgICA/IGN1cnJlbnRDYW52YXNHcm91cEluZGV4ICsgbmV4dENhbnZhc0dyb3VwXG4gICAgICAgIDogY3VycmVudENhbnZhc0dyb3VwSW5kZXggLSBuZXh0Q2FudmFzR3JvdXA7XG4gICAgcmV0dXJuIG5leHRDYW52YXNHcm91cDtcbiAgfVxufVxuIl19