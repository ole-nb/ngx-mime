import { IiifTileSourceStrategy } from './iiif-tile-source-strategy';
import { StaticImageTileSourceStrategy } from './static-image-tile-source-strategy';
export class TileSourceStrategyFactory {
    static create(resource) {
        if (resource.service) {
            return new IiifTileSourceStrategy();
        }
        else {
            return new StaticImageTileSourceStrategy();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1zb3VyY2Utc3RyYXRlZ3ktZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3RpbGUtc291cmNlLXN0cmF0ZWd5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHcEYsTUFBTSxPQUFPLHlCQUF5QjtJQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQWlCO1FBQ3BDLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQixPQUFPLElBQUksc0JBQXNCLEVBQUUsQ0FBQztTQUNyQzthQUFNO1lBQ0wsT0FBTyxJQUFJLDZCQUE2QixFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IElpaWZUaWxlU291cmNlU3RyYXRlZ3kgfSBmcm9tICcuL2lpaWYtdGlsZS1zb3VyY2Utc3RyYXRlZ3knO1xuaW1wb3J0IHsgU3RhdGljSW1hZ2VUaWxlU291cmNlU3RyYXRlZ3kgfSBmcm9tICcuL3N0YXRpYy1pbWFnZS10aWxlLXNvdXJjZS1zdHJhdGVneSc7XG5pbXBvcnQgeyBUaWxlU291cmNlU3RyYXRlZ3kgfSBmcm9tICcuL3RpbGUtc291cmNlLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFRpbGVTb3VyY2VTdHJhdGVneUZhY3Rvcnkge1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZShyZXNvdXJjZTogU2VydmljZSk6IFRpbGVTb3VyY2VTdHJhdGVneSB7XG4gICAgaWYgKHJlc291cmNlLnNlcnZpY2UpIHtcbiAgICAgIHJldHVybiBuZXcgSWlpZlRpbGVTb3VyY2VTdHJhdGVneSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFN0YXRpY0ltYWdlVGlsZVNvdXJjZVN0cmF0ZWd5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=