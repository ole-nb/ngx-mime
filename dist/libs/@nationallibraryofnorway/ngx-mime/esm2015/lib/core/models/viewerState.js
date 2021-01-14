import { ContentDialogState } from './content-dialog-state';
import { ContentsSearchDialogState } from './contents-search-dialog-state';
import { HelpDialogState } from './help-dialog-state';
export class ViewerState {
    constructor(fields) {
        this.contentDialogState = new ContentDialogState();
        this.contentsSearchDialogState = new ContentsSearchDialogState();
        this.helpDialogState = new HelpDialogState();
        if (fields) {
            this.contentDialogState = fields.contentDialogState
                ? fields.contentDialogState
                : this.contentDialogState;
            this.contentsSearchDialogState = fields.contentsSearchDialogState
                ? fields.contentsSearchDialogState
                : this.contentsSearchDialogState;
            this.helpDialogState = fields.helpDialogState
                ? fields.helpDialogState
                : this.helpDialogState;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyU3RhdGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29yZS9tb2RlbHMvdmlld2VyU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sT0FBTyxXQUFXO0lBS3RCLFlBQVksTUFJWDtRQVJNLHVCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUM5Qyw4QkFBeUIsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7UUFDNUQsb0JBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBTzdDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0I7Z0JBQ2pELENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCO2dCQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQzVCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMseUJBQXlCO2dCQUMvRCxDQUFDLENBQUMsTUFBTSxDQUFDLHlCQUF5QjtnQkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlO2dCQUMzQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWU7Z0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudERpYWxvZ1N0YXRlIH0gZnJvbSAnLi9jb250ZW50LWRpYWxvZy1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlIH0gZnJvbSAnLi9jb250ZW50cy1zZWFyY2gtZGlhbG9nLXN0YXRlJztcbmltcG9ydCB7IEhlbHBEaWFsb2dTdGF0ZSB9IGZyb20gJy4vaGVscC1kaWFsb2ctc3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld2VyU3RhdGUge1xuICBwdWJsaWMgY29udGVudERpYWxvZ1N0YXRlID0gbmV3IENvbnRlbnREaWFsb2dTdGF0ZSgpO1xuICBwdWJsaWMgY29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZSA9IG5ldyBDb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlKCk7XG4gIHB1YmxpYyBoZWxwRGlhbG9nU3RhdGUgPSBuZXcgSGVscERpYWxvZ1N0YXRlKCk7XG5cbiAgY29uc3RydWN0b3IoZmllbGRzPzoge1xuICAgIGNvbnRlbnREaWFsb2dTdGF0ZT86IENvbnRlbnREaWFsb2dTdGF0ZTtcbiAgICBjb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlPzogQ29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZTtcbiAgICBoZWxwRGlhbG9nU3RhdGU/OiBIZWxwRGlhbG9nU3RhdGU7XG4gIH0pIHtcbiAgICBpZiAoZmllbGRzKSB7XG4gICAgICB0aGlzLmNvbnRlbnREaWFsb2dTdGF0ZSA9IGZpZWxkcy5jb250ZW50RGlhbG9nU3RhdGVcbiAgICAgICAgPyBmaWVsZHMuY29udGVudERpYWxvZ1N0YXRlXG4gICAgICAgIDogdGhpcy5jb250ZW50RGlhbG9nU3RhdGU7XG4gICAgICB0aGlzLmNvbnRlbnRzU2VhcmNoRGlhbG9nU3RhdGUgPSBmaWVsZHMuY29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZVxuICAgICAgICA/IGZpZWxkcy5jb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlXG4gICAgICAgIDogdGhpcy5jb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlO1xuICAgICAgdGhpcy5oZWxwRGlhbG9nU3RhdGUgPSBmaWVsZHMuaGVscERpYWxvZ1N0YXRlXG4gICAgICAgID8gZmllbGRzLmhlbHBEaWFsb2dTdGF0ZVxuICAgICAgICA6IHRoaXMuaGVscERpYWxvZ1N0YXRlO1xuICAgIH1cbiAgfVxufVxuIl19